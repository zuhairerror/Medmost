/**
 * MEDMOST - Supabase Client Configuration
 * Safe for frontend: Only public project URL and public publishable/anon key are used.
 * NEVER put SUPABASE_SERVICE_ROLE_KEY or database secrets in client-side code!
 */

window.MEDMOST_SUPABASE_CONFIG = (function() {
  const DEFAULT_URL = 'https://cyycbbzscvdojmdelutm.supabase.co';
  const DEFAULT_ANON_KEY = 'sb_publishable_MF5iX5x0Ts7E_DVS1AEuFw_Ph1kkzXf';

  /**
   * Sanitizes and validates the Supabase Project URL.
   * Ensures it is the clean origin ending in .supabase.co (e.g. https://xyz.supabase.co)
   * and strips any path segments (such as /rest/v1 or trailing slashes) that cause
   * AuthApiError ("Invalid path specified in request URL") errors.
   */
  function cleanSupabaseUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== 'string') return DEFAULT_URL;
    let url = rawUrl.trim().replace(/^["']|["']$/g, '');
    if (!url) return DEFAULT_URL;

    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    try {
      const parsed = new URL(url);
      // Project URL must only be origin (https://xyz.supabase.co), without /rest/v1 or paths
      return parsed.origin;
    } catch (e) {
      return url.replace(/\/rest\/v1\/?.*$/i, '').replace(/\/auth\/v1\/?.*$/i, '').replace(/\/+$/, '');
    }
  }

  function cleanApiKey(rawKey) {
    if (!rawKey || typeof rawKey !== 'string') return DEFAULT_ANON_KEY;
    const cleaned = rawKey.trim().replace(/^["']|["']$/g, '');
    return cleaned || DEFAULT_ANON_KEY;
  }

  // Read statically configured, window, or stored anon key
  const staticAnonKey = (window.__MEDMOST_SUPABASE_ANON_KEY__ || '').trim();
  const storedAnonKey = (localStorage.getItem('MEDMOST_SUPABASE_ANON_KEY') || '').trim();

  const config = {
    url: cleanSupabaseUrl(window.__MEDMOST_SUPABASE_URL__ || DEFAULT_URL),
    anonKey: cleanApiKey(staticAnonKey || storedAnonKey || DEFAULT_ANON_KEY),
    isConfigured: true,
    _readyPromise: null,
    cleanSupabaseUrl: cleanSupabaseUrl
  };

  /**
   * Initializes config by attempting to load from /api/auth-config on Vercel.
   * Automatically strips any /rest/v1 paths returned from Vercel environment variables.
   */
  config.init = function() {
    if (config._readyPromise) return config._readyPromise;

    config._readyPromise = new Promise(async (resolve) => {
      // Try fetching from serverless /api/auth-config on Vercel
      try {
        const res = await fetch('/api/auth-config', { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          const data = await res.json();
          if (data) {
            if (data.supabaseUrl) {
              config.url = cleanSupabaseUrl(data.supabaseUrl);
            }
            if (data.supabaseAnonKey) {
              config.anonKey = cleanApiKey(data.supabaseAnonKey);
            }
            config.isConfigured = true;
            return resolve(config);
          }
        }
      } catch (err) {
        // Fallback to static config
      }

      // Fallback check in case stored in localStorage
      const cached = localStorage.getItem('MEDMOST_SUPABASE_ANON_KEY');
      if (cached) {
        config.anonKey = cleanApiKey(cached);
        config.isConfigured = true;
      }

      resolve(config);
    });

    return config._readyPromise;
  };

  /**
   * Helper for development/testing: allows setting the Anon Key directly in localStorage
   */
  config.setAnonKey = function(newKey) {
    if (!newKey) return;
    config.anonKey = cleanApiKey(newKey);
    config.isConfigured = true;
    localStorage.setItem('MEDMOST_SUPABASE_ANON_KEY', config.anonKey);
    if (window.initMedmostAuth) {
      window.initMedmostAuth();
    }
  };

  return config;
})();
