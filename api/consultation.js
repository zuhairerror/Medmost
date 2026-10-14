/**
 * MEDMOST - Node.js Serverless API Endpoint for Supabase
 * Runtime: Node.js (Vercel Serverless Function)
 * Route: /api/consultation
 */

const { createClient } = require('@supabase/supabase-js');

// Default project URL from user's Supabase dashboard
const DEFAULT_SUPABASE_URL = 'https://cyycbbzscvdojmdelutm.supabase.co';

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
    return res.status(200).json({
      status: 'online',
      service: 'MEDMOST Node.js Supabase API',
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const {
      full_name,
      country,
      phone,
      email,
      treatment,
      city,
      message,
      source
    } = req.body || {};

    // Basic validation
    if (!full_name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: full_name and phone are mandatory.'
      });
    }

    const supabaseUrl = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Check if Supabase keys are configured in Vercel
    if (!supabaseKey) {
      console.warn('SUPABASE_ANON_KEY environment variable is not configured yet.');
      // Return simulated success with configuration hint
      return res.status(200).json({
        success: true,
        referenceId: 'DEMO-' + Math.floor(100000 + Math.random() * 900000),
        message: 'Enquiry received in Node.js backend. (Add SUPABASE_ANON_KEY in Vercel to save to live Supabase database)',
        data: { full_name, phone, treatment, country }
      });
    }

    // Initialize Supabase Client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert consultation record into Supabase
    const { data, error } = await supabase
      .from('consultations')
      .insert([
        {
          full_name: full_name.trim(),
          country: country ? country.trim() : 'Unspecified',
          phone: phone.trim(),
          email: email ? email.trim() : '',
          treatment: treatment || 'General Consultation',
          city: city || 'Unspecified',
          message: message ? message.trim() : '',
          source: source || 'website'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({
        success: false,
        error: error.message,
        hint: 'Ensure you ran the SQL schema in Supabase to create the consultations table.'
      });
    }

    return res.status(200).json({
      success: true,
      referenceId: data && data[0] ? data[0].id : 'MED-' + Date.now().toString().slice(-6),
      message: 'Consultation enquiry saved successfully to Supabase database!',
      record: data ? data[0] : null
    });
  } catch (err) {
    console.error('Unexpected server error:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error'
    });
  }
};
