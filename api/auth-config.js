/**
 * MEDMOST - Serverless Endpoint for Public Supabase Auth Configuration
 * Exposes ONLY the public project URL and public publishable/anon key.
 * Never exposes service_role key or secrets!
 */

const DEFAULT_SUPABASE_URL = 'https://cyycbbzscvdojmdelutm.supabase.co';

function cleanVal(v) {
  if (!v || typeof v !== 'string') return '';
  return v.trim().replace(/^["']|["']$/g, '');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  const supabaseUrl = cleanVal(process.env.SUPABASE_URL) || DEFAULT_SUPABASE_URL;
  const supabaseAnonKey = cleanVal(process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY);

  return res.status(200).json({
    supabaseUrl: supabaseUrl,
    supabaseAnonKey: supabaseAnonKey,
    configured: Boolean(supabaseAnonKey)
  });
};
