/**
 * MEDMOST - Authentication Module
 * Wraps Supabase Auth SDK v2 with session persistence, error parsing,
 * page protection, and patient consultation filtering.
 */

window.medmostAuth = (function() {
  let _client = null;
  let _initPromise = null;

  /**
   * Initializes Supabase Client safely
   */
  async function init() {
    if (_client) return _client;
    if (_initPromise) return _initPromise;

    _initPromise = (async () => {
      // 1. Ensure Supabase SDK loaded
      if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
        console.warn('[MedMost Auth] Supabase JS library not loaded. Ensure CDN script is included.');
        return null;
      }

      // 2. Ensure config loaded
      const config = await window.MEDMOST_SUPABASE_CONFIG.init();
      if (!config.anonKey) {
        console.warn('[MedMost Auth] SUPABASE_ANON_KEY is not configured yet. Configure it in Vercel or js/supabase-config.js.');
        showConfigModalIfNeeded();
        return null;
      }

      try {
        _client = window.supabase.createClient(config.url, config.anonKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            storage: window.localStorage
          }
        });

        // Broadcast auth state changes to header & components
        _client.auth.onAuthStateChange((event, session) => {
          document.dispatchEvent(new CustomEvent('medmost:auth-changed', {
            detail: { event, session, user: session ? session.user : null }
          }));
        });

        return _client;
      } catch (err) {
        console.error('[MedMost Auth] Error creating Supabase client:', err);
        return null;
      }
    })();

    return _initPromise;
  }

  function getClient() {
    return _client;
  }

  async function getSession() {
    const client = await init();
    if (!client) return null;
    const { data, error } = await client.auth.getSession();
    if (error) {
      console.warn('[MedMost Auth] getSession error:', error);
      return null;
    }
    return data ? data.session : null;
  }

  async function getCurrentUser() {
    const session = await getSession();
    return session ? session.user : null;
  }

  /**
   * Sign Up with Name, Email & Password
   */
  async function signUp({ name, email, password }) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet. Please configure your anon key.');

    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanName = (name || '').trim();

    const redirectUrl = `${window.location.origin}/email-confirm.html`;

    const { data, error } = await client.auth.signUp({
      email: cleanEmail,
      password: password,
      options: {
        data: {
          full_name: cleanName
        },
        emailRedirectTo: redirectUrl
      }
    });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Login with Email & Password
   */
  async function signIn({ email, password }) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet. Please configure your anon key.');

    const cleanEmail = (email || '').trim().toLowerCase();

    const { data, error } = await client.auth.signInWithPassword({
      email: cleanEmail,
      password: password
    });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Sign Out
   */
  async function signOut() {
    const client = await init();
    if (client) {
      try {
        await client.auth.signOut();
      } catch (err) {
        console.error('Signout error:', err);
      }
    }
    localStorage.removeItem('supabase.auth.token');
    document.dispatchEvent(new CustomEvent('medmost:auth-changed', {
      detail: { event: 'SIGNED_OUT', session: null, user: null }
    }));
  }

  /**
   * Forgot Password - Send recovery email
   */
  async function resetPasswordForEmail(email) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet. Please configure your anon key.');

    const cleanEmail = (email || '').trim().toLowerCase();
    const redirectUrl = `${window.location.origin}/reset-password.html`;

    const { data, error } = await client.auth.resetPasswordForEmail(cleanEmail, {
      redirectTo: redirectUrl
    });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Update Password (used in reset-password flow or account settings)
   */
  async function updatePassword(newPassword) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet. Please configure your anon key.');

    const { data, error } = await client.auth.updateUser({
      password: newPassword
    });

    if (error) {
      throw error;
    }

    return data;
  }

  /**
   * Update Profile Details (e.g. full name)
   */
  async function updateProfile({ fullName }) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet. Please configure your anon key.');

    const { data, error } = await client.auth.updateUser({
      data: {
        full_name: (fullName || '').trim()
      }
    });

    if (error) {
      throw error;
    }

    // Also update public.profiles if the table exists
    try {
      const user = data.user;
      if (user) {
        await client
          .from('profiles')
          .upsert({ id: user.id, full_name: (fullName || '').trim(), updated_at: new Date().toISOString() });
      }
    } catch (e) {
      // Non-fatal if profiles table isn't enabled
    }

    return data;
  }

  /**
   * Resend Verification Email
   */
  async function resendVerificationEmail(email) {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured yet.');

    const cleanEmail = (email || '').trim().toLowerCase();
    const redirectUrl = `${window.location.origin}/email-confirm.html`;

    const { data, error } = await client.auth.resend({
      type: 'signup',
      email: cleanEmail,
      options: {
        emailRedirectTo: redirectUrl
      }
    });

    if (error) throw error;
    return data;
  }

  /**
   * Fetch only consultations belonging to the logged-in user
   * Strictly adheres to Row Level Security and privacy rules.
   */
  async function getUserConsultations() {
    const client = await init();
    if (!client) throw new Error('Supabase is not configured.');

    const user = await getCurrentUser();
    if (!user) throw new Error('You must be signed in to view your consultations.');

    // RLS policy ensures user can only read rows where user_id = auth.uid() OR lower(email) = lower(user.email)
    const { data, error } = await client
      .from('consultations')
      .select('id, created_at, name, email, phone, country, message')
      .or(`email.ilike.${user.email}`)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[MedMost Auth] Consultation fetch error:', error);
      throw error;
    }

    return data || [];
  }

  /**
   * Protect an account-only page: redirects unauthenticated users
   */
  async function requireAuth(redirectPage = 'login.html') {
    const user = await getCurrentUser();
    if (!user) {
      const currentPath = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.replace(`${redirectPage}?redirect=${currentPath}`);
      return null;
    }
    return user;
  }

  /**
   * Redirect authenticated users away from Login/Signup to Dashboard
   */
  async function redirectIfAuthenticated(dashboardPage = 'dashboard.html') {
    const user = await getCurrentUser();
    if (user) {
      // Check for redirect query param
      const params = new URLSearchParams(window.location.search);
      const redirectUrl = params.get('redirect') ? decodeURIComponent(params.get('redirect')) : dashboardPage;
      window.location.replace(redirectUrl);
      return user;
    }
    return null;
  }

  /**
   * Helpful visual modal for admins/developers if SUPABASE_ANON_KEY is missing in local environment
   */
  function showConfigModalIfNeeded() {
    if (document.getElementById('supabase-config-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'supabase-config-banner';
    banner.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      max-width: 420px;
      background: #042F2E;
      color: #FFFFFF;
      border: 2px solid #FACC15;
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13.5px;
      line-height: 1.5;
    `;
    banner.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="color:#FDE047; font-size:14px;">⚡ MedMost Supabase Auth Setup</strong>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none; border:none; color:#94A3B8; font-size:18px; cursor:pointer;">&times;</button>
      </div>
      <p style="margin:0 0 10px 0; color:#E2E8F0;">
        Frontend Auth needs your Supabase <strong>Anon Key</strong>.
      </p>
      <div style="display:flex; gap:6px;">
        <input type="text" id="dev-anon-key-input" placeholder="Paste anon key here (starts with eyJ...)" style="flex:1; padding:7px 10px; border-radius:6px; border:1px solid #008780; background:#0F2537; color:#fff; font-size:12px;" />
        <button id="dev-save-anon-key-btn" style="background:#009E96; color:#fff; border:none; padding:7px 12px; border-radius:6px; font-weight:600; cursor:pointer; font-size:12px;">Save</button>
      </div>
      <small style="display:block; margin-top:8px; color:#A5F3FC;">
        Or add <code>SUPABASE_ANON_KEY</code> to Vercel Environment Variables.
      </small>
    `;
    document.body.appendChild(banner);

    const saveBtn = document.getElementById('dev-save-anon-key-btn');
    if (saveBtn) {
      saveBtn.onclick = function() {
        const input = document.getElementById('dev-anon-key-input');
        if (input && input.value.trim()) {
          window.MEDMOST_SUPABASE_CONFIG.setAnonKey(input.value.trim());
          banner.remove();
          location.reload();
        }
      };
    }
  }

  // Auto-init on script load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }

  return {
    init,
    getClient,
    getSession,
    getCurrentUser,
    signUp,
    signIn,
    signOut,
    resetPasswordForEmail,
    updatePassword,
    updateProfile,
    resendVerificationEmail,
    getUserConsultations,
    requireAuth,
    redirectIfAuthenticated
  };
})();
