/**
 * MEDMOST - Node.js Serverless API Endpoint for Supabase
 * Runtime: Node.js (Vercel Serverless Function)
 * Route: /api/consultation
 */

const { createClient } = require('@supabase/supabase-js');

// Default project URL from user's Supabase dashboard
const DEFAULT_SUPABASE_URL = 'https://cyycbbzscvdojmdelutm.supabase.co';

/**
 * Normalizes and validates the Supabase Project URL.
 * Ensures it is the base origin ending in .supabase.co (e.g. https://xyz.supabase.co)
 * and strips any accidentally included path segments (such as /rest/v1 or trailing slashes)
 * that cause PostgREST PGRST125 ("Invalid path specified in request URL") errors.
 */
function cleanSupabaseUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return DEFAULT_SUPABASE_URL;
  let url = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (!url) return DEFAULT_SUPABASE_URL;

  // Add protocol if missing
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  try {
    const parsed = new URL(url);
    // Project URL must only be protocol + host (origin), without /rest/v1 path
    return parsed.origin;
  } catch (e) {
    return url.replace(/\/rest\/v1\/?.*$/i, '').replace(/\/+$/, '');
  }
}

/**
 * Cleans and trims the Supabase API Key, removing accidental quotes or spaces
 */
function cleanApiKey(rawKey) {
  if (!rawKey || typeof rawKey !== 'string') return '';
  return rawKey.trim().replace(/^["']|["']$/g, '');
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Health check on GET
  if (req.method === 'GET') {
    const activeUrl = cleanSupabaseUrl(process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL);
    return res.status(200).json({
      status: 'online',
      service: 'MEDMOST Node.js Supabase API',
      configuredProjectUrl: activeUrl,
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    // Parse body safely whether parsed by Vercel or raw string
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch (parseErr) {
        payload = {};
      }
    }
    payload = payload || {};

    const {
      full_name,
      country,
      phone,
      email,
      treatment,
      city,
      message,
      source
    } = payload;

    // Basic validation
    if (!full_name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: full_name and phone are mandatory.'
      });
    }

    // Clean and validate Supabase URL & Key
    const supabaseUrl = cleanSupabaseUrl(process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL);
    const supabaseKey = cleanApiKey(
      process.env.SUPABASE_ANON_KEY ||
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_KEY
    );

    // Check if Supabase key is configured in Vercel
    if (!supabaseKey) {
      console.warn('SUPABASE_ANON_KEY environment variable is not configured yet in Vercel.');
      return res.status(200).json({
        success: true,
        referenceId: 'DEMO-' + Math.floor(100000 + Math.random() * 900000),
        message: 'Enquiry received in Node.js backend. (Add SUPABASE_ANON_KEY in Vercel to save to live Supabase database)',
        data: { full_name, phone, treatment, country }
      });
    }

    // Initialize Supabase Client with normalized base URL
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });

    // Construct consultation record matching public.consultations table schema exactly
    const consultationRecord = {
      full_name: (full_name || '').toString().trim(),
      country: (country || '').toString().trim() || 'Unspecified',
      phone: (phone || '').toString().trim(),
      email: (email || '').toString().trim() || 'not-provided@medmost.org',
      treatment: (treatment || 'General Consultation').toString().trim(),
      city: (city || 'Unspecified').toString().trim(),
      message: (message || '').toString().trim(),
      source: (source || 'website').toString().trim(),
      status: 'new'
    };

    // Insert consultation record into public.consultations table
    const { data, error } = await supabase
      .from('consultations')
      .insert([consultationRecord])
      .select();

    if (error) {
      console.error('Supabase insert error details:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });

      return res.status(500).json({
        success: false,
        code: error.code || 'PGRST_ERROR',
        error: error.message,
        details: error.details || null,
        hint: error.hint || 'Verify table exists in Supabase public schema and SUPABASE_URL ends in .supabase.co'
      });
    }

    const savedId = (data && data[0] && data[0].id) ? data[0].id : ('MED-' + Date.now().toString().slice(-6));

    return res.status(200).json({
      success: true,
      referenceId: savedId,
      message: 'Consultation enquiry saved successfully to Supabase database!',
      record: data && data[0] ? data[0] : consultationRecord
    });
  } catch (err) {
    console.error('Unexpected server error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error'
    });
  }
};
