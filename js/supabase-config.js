/**
 * MEDMOST - Supabase Client Configuration
 * Safe for frontend: Only public project URL and public publishable/anon key are used.
 * NEVER put SUPABASE_SERVICE_ROLE_KEY or database secrets in client-side code!
 */

window.MEDMOST_SUPABASE_CONFIG = (function() {
  const DEFAULT_URL = 'https://cyycbbzscvdojmdelutm.supabase.co';

  // Read statically configured or stored anon key
  const staticAnonKey = (window.__MEDMOST_SUPABASE_ANON_KEY__ || '').trim();
  const storedAnonKey = (localStorage.getItem('MEDMOST_SUPABASE_ANON_KEY') || '').trim();

  const config = {
    url: window.__MEDMOST_SUPABASE_URL__ || DEFAULT_URL,
    anonKey: staticAnonKey || storedAnonKey || '',
    isConfigured: false,
    _readyPromise: null
  };

  if (config.anonKey) {
    config.isConfigured = true;
  }

  /**
   * Initializes config by attempting to load from /api/auth-config if not provided statically.
   * This allows Vercel deployments to automatically inherit SUPABASE_ANON_KEY from environment variables!
   */
  config.init = function() {
    if (config._readyPromise) return config._readyPromise;

    config._readyPromise = new Promise(async (resolve) => {
      if (config.anonKey) {
        config.isConfigured = true;
        return resolve(config);
      }

      // Try fetching from serverless /api/auth-config on Vercel
      try {
        const res = await fetch('/api/auth-config', { method: 'GET', headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          const data = await res.json();
          if (data && data.supabaseAnonKey) {
            config.anonKey = data.supabaseAnonKey.trim();
            if (data.supabaseUrl) config.url = data.supabaseUrl.trim();
            config.isConfigured = true;
            return resolve(config);
          }
        }
      } catch (err) {
        // Static server without /api
      }

      // Fallback check in case stored in localStorage
      const cached = localStorage.getItem('MEDMOST_SUPABASE_ANON_KEY');
      if (cached) {
        config.anonKey = cached.trim();
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
    config.anonKey = newKey.trim();
    config.isConfigured = true;
    localStorage.setItem('MEDMOST_SUPABASE_ANON_KEY', newKey.trim());
    if (window.initMedmostAuth) {
      window.initMedmostAuth();
    }
  };

  return config;
})();
