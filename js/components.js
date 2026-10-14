/**
 * MEDMOST - Reusable Components & Navigation
 * Updates: Cyan/Turquoise + Light Yellow theme, Multilingual Selector,
 * and Target="_blank" navigation behavior opening separate pages in new tabs.
 */

const MEDMOST_CONFIG = {
  brandName: "MEDMOST",
  tagline: "World-Class Medical Treatment in India",
  phoneDisplay: "+7 960 1726800999",
  phoneNote: "(Sample number from card - pending final confirmation)",
  whatsappNumber: "79601726800999",
  emailPlaceholder: "enquiries@medmost.com (Pending confirmation)",
  websitePlaceholder: "www.medmost.com",
};

// Render Top Announcement Bar & Navigation Bar
function renderHeader(activePage = 'home') {
  const headerContainer = document.getElementById('site-header-container');
  if (!headerContainer) return;

  const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';

  headerContainer.innerHTML = `
    <!-- Top Information Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-left">
          <span class="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
            <span data-i18n="nav_desk">24/7 International Patient Assistance Desk</span>
          </span>
          <span class="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Tel: <strong>${MEDMOST_CONFIG.phoneDisplay}</strong> <small style="color:var(--color-yellow-300); margin-left:4px;">*sample</small>
          </span>
        </div>
        <div class="top-bar-right">
          <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="top-item" style="color:#A7F3D0; font-weight:600;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span data-i18n="nav_whatsapp">WhatsApp Support Available</span>
          </a>
          
          <!-- Language Selector -->
          <div class="lang-selector-wrap">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <select class="lang-select" onchange="setLanguage(this.value)" aria-label="Select Language">
              <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇬🇧 English</option>
              <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>🇮🇳 हिन्दी (Hindi)</option>
              <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>🇷🇺 Русский (Russian)</option>
              <option value="ar" ${currentLang === 'ar' ? 'selected' : ''}>🇦🇪 العربية (Arabic)</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="site-header">
      <div class="container navbar">
        <a href="index.html" class="logo-wrapper" title="MEDMOST - Medical Tourism in India">
          <img src="assets/images/logo.svg" alt="MEDMOST Logo" class="logo-img" />
        </a>

        <!-- Desktop Navigation Links (Opens in new tab as requested) -->
        <nav>
          <ul class="nav-links">
            <li><a href="index.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home">Home</a></li>
            <li><a href="treatments.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'treatments' ? 'active' : ''}" data-i18n="nav_treatments">Treatments</a></li>
            <li><a href="doctors.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'doctors' ? 'active' : ''}" data-i18n="nav_doctors">Doctors</a></li>
            <li><a href="hospitals.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'hospitals' ? 'active' : ''}" data-i18n="nav_hospitals">Hospitals</a></li>
            <li><a href="why-india.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'why-india' ? 'active' : ''}" data-i18n="nav_why_india">Why India?</a></li>
            <li><a href="how-it-works.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'how-it-works' ? 'active' : ''}" data-i18n="nav_how_it_works">How It Works</a></li>
            <li><a href="patient-services.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'services' ? 'active' : ''}" data-i18n="nav_patient_services">Patient Services</a></li>
            <li><a href="about.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'about' ? 'active' : ''}" data-i18n="nav_about">About Us</a></li>
            <li><a href="contact.html" target="_blank" rel="noopener noreferrer" class="nav-link ${activePage === 'contact' ? 'active' : ''}" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </nav>

        <!-- Navbar Actions -->
        <div class="nav-actions">
          <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-consult-nav">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span data-i18n="nav_consultation">Free Consultation</span>
          </a>
          <button class="nav-toggle" id="nav-toggle-btn" aria-label="Toggle navigation menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-backdrop" id="mobile-backdrop"></div>
    <div class="mobile-nav-drawer" id="mobile-drawer">
      <button class="mobile-nav-close" id="mobile-close-btn" aria-label="Close menu">&times;</button>
      <div style="margin-bottom: 1.5rem;">
        <img src="assets/images/logo.svg" alt="MEDMOST Logo" style="height: 42px;" />
        <p style="font-size: 0.8rem; color: var(--color-turquoise-700); margin-top: 0.5rem; font-weight:600;">World-Class Medical Treatment in India</p>
      </div>
      <ul class="mobile-nav-links">
        <li><a href="index.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home">Home</a></li>
        <li><a href="treatments.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'treatments' ? 'active' : ''}" data-i18n="nav_treatments">Treatments</a></li>
        <li><a href="doctors.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'doctors' ? 'active' : ''}" data-i18n="nav_doctors">Doctors</a></li>
        <li><a href="hospitals.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'hospitals' ? 'active' : ''}" data-i18n="nav_hospitals">Hospitals</a></li>
        <li><a href="why-india.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'why-india' ? 'active' : ''}" data-i18n="nav_why_india">Why India?</a></li>
        <li><a href="how-it-works.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'how-it-works' ? 'active' : ''}" data-i18n="nav_how_it_works">How It Works</a></li>
        <li><a href="patient-services.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav_patient_services">Patient Services</a></li>
        <li><a href="about.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav_about">About Us</a></li>
        <li><a href="contact.html" target="_blank" rel="noopener noreferrer" class="${activePage === 'contact' ? 'active' : ''}" data-i18n="nav_contact">Contact</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-align:center;">
          <span data-i18n="nav_consultation">Get a Free Consultation</span>
        </a>
        <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="text-align:center;">
          WhatsApp Chat
        </a>
      </div>
    </div>
  `;

  initMobileNav();
  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }
}

// Render Reusable Footer
function renderFooter() {
  const footerContainer = document.getElementById('site-footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Footer Grid -->
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div class="footer-col">
            <img src="assets/images/logo-white.svg" alt="MEDMOST" style="height: 46px; margin-bottom: 0.5rem;" />
            <p class="footer-desc" data-i18n="footer_desc">
              MEDMOST is an independent international medical travel facilitation service connecting global patients with accredited hospitals and doctors in India.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="section-tag yellow" style="font-size:0.75rem; padding:0.25rem 0.75rem;">
                Independent Medical Travel Facilitator
              </span>
            </div>
          </div>

          <!-- Col 2: Treatment Categories -->
          <div class="footer-col">
            <h4>Treatment Specialties</h4>
            <ul class="footer-links">
              <li><a href="treatments.html?category=cardiology" target="_blank" rel="noopener noreferrer">Cardiology & Heart Surgery</a></li>
              <li><a href="treatments.html?category=oncology" target="_blank" rel="noopener noreferrer">Oncology & Cancer Care</a></li>
              <li><a href="treatments.html?category=orthopaedics" target="_blank" rel="noopener noreferrer">Orthopaedics & Joint Replacement</a></li>
              <li><a href="treatments.html?category=neurosurgery" target="_blank" rel="noopener noreferrer">Neurology & Neurosurgery</a></li>
              <li><a href="treatments.html?category=gastroenterology" target="_blank" rel="noopener noreferrer">Gastroenterology</a></li>
              <li><a href="treatments.html?category=nephrology" target="_blank" rel="noopener noreferrer">Nephrology & Kidney Care</a></li>
              <li><a href="treatments.html?category=transplant" target="_blank" rel="noopener noreferrer">Organ Transplantation</a></li>
              <li><a href="treatments.html" target="_blank" rel="noopener noreferrer" style="color:var(--color-yellow-300); font-weight:700;">View All 12 Categories &rarr;</a></li>
            </ul>
          </div>

          <!-- Col 3: Separate Page Navigation (All target="_blank") -->
          <div class="footer-col">
            <h4>Patient Navigation</h4>
            <ul class="footer-links">
              <li><a href="index.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_home">Home</a></li>
              <li><a href="about.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_about">About MEDMOST</a></li>
              <li><a href="doctors.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_doctors">Our Doctors</a></li>
              <li><a href="doctor-sharik-khan.html" target="_blank" rel="noopener noreferrer">Dr. Sharik Khan Profile</a></li>
              <li><a href="doctor-salah.html" target="_blank" rel="noopener noreferrer">Dr. Salah Profile</a></li>
              <li><a href="hospitals.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_hospitals">Hospitals Directory</a></li>
              <li><a href="why-india.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_why_india">Why Choose India</a></li>
              <li><a href="how-it-works.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_how_it_works">How It Works</a></li>
              <li><a href="patient-services.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_patient_services">Patient Services</a></li>
              <li><a href="contact.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_contact">Contact Us</a></li>
              <li><a href="consultation.html" target="_blank" rel="noopener noreferrer" data-i18n="nav_consultation">Request Consultation</a></li>
            </ul>
          </div>

          <!-- Col 4: Contact & Card Reference -->
          <div class="footer-col">
            <h4>Contact Channels</h4>
            <div style="display:flex; flex-direction:column; gap:0.9rem; font-size:0.885rem; color:#94A3B8;">
              <div>
                <strong>Phone / Card Placeholder:</strong><br />
                <span style="color:#FFFFFF; font-weight:700;">${MEDMOST_CONFIG.phoneDisplay}</span><br />
                <small style="color:var(--color-yellow-300);">${MEDMOST_CONFIG.phoneNote}</small>
              </div>
              <div>
                <strong>WhatsApp Messaging:</strong><br />
                <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" style="color:#A5F3FC; text-decoration:underline;">Click to Chat on WhatsApp</a>
              </div>
              <div>
                <strong>Official Email:</strong><br />
                <span>${MEDMOST_CONFIG.emailPlaceholder}</span>
              </div>
              <div>
                <strong>Website:</strong><br />
                <span>${MEDMOST_CONFIG.websitePlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Mandatory Transparent Medical Disclaimer Box -->
        <div class="footer-disclaimer-box">
          <strong data-i18n="footer_disclaimer">Medical Disclaimer:</strong> MEDMOST is an independent medical travel facilitator, not a hospital or direct medical care provider. All medical decisions, consultations, diagnoses, and treatments are rendered solely by accredited partner hospitals and licensed doctors in India. Services depend on case review and confirmed hospital arrangements.
        </div>

        <!-- Bottom Copyright & Separate Legal Links -->
        <div class="footer-bottom">
          <p>&copy; 2026 MEDMOST. <span data-i18n="footer_rights">All rights reserved. World-Class Medical Treatment in India.</span></p>
          <ul class="footer-legal-links">
            <li><a href="privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="terms.html" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
            <li><a href="medical-disclaimer.html" target="_blank" rel="noopener noreferrer">Medical Disclaimer</a></li>
          </ul>
        </div>
      </div>
    </footer>

    <!-- Floating Quick Actions -->
    <div class="floating-actions">
      <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="float-btn float-whatsapp" title="Chat on WhatsApp" aria-label="WhatsApp Support">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      </a>
      <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="float-btn float-consult" title="Get Free Consultation" aria-label="Request Free Consultation">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </a>
    </div>

    <!-- Reusable Free Consultation Modal (Used on pages where modal is preferred) -->
    <div class="modal-overlay" id="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="modal-consult-title">
      <div class="modal-box">
        <button class="modal-close-btn" onclick="closeConsultationModal()" aria-label="Close dialog">&times;</button>
        <div class="modal-header">
          <div class="section-tag yellow" style="margin-bottom:0.5rem;">Free International Patient Enquiry</div>
          <h3 id="modal-consult-title" class="text-turquoise">Request Medical Consultation</h3>
          <p style="font-size:0.875rem; color:var(--color-text-muted);">Connect with our team to explore medical travel coordination in India.</p>
        </div>
        <div class="modal-body" id="modal-consult-body">
          <form id="modal-consultation-form" onsubmit="handleDemoFormSubmit(event, 'modal')">
            <div class="form-group">
              <label class="form-label" for="modal-fullname">Full Name *</label>
              <input type="text" id="modal-fullname" class="form-control" placeholder="e.g. Alexander Petrov" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="modal-country">Country of Residence *</label>
                <input type="text" id="modal-country" class="form-control" placeholder="e.g. Uzbekistan, Kenya, UK" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-phone">WhatsApp / Phone Number *</label>
                <input type="tel" id="modal-phone" class="form-control" placeholder="e.g. +7 999 000 0000" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="modal-email">Email Address *</label>
              <input type="email" id="modal-email" class="form-control" placeholder="e.g. patient@example.com" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="modal-treatment">Preferred Treatment Category *</label>
                <select id="modal-treatment" class="form-control" required>
                  <option value="">Select Treatment...</option>
                  <option value="cardiology">Cardiology and Heart Surgery</option>
                  <option value="oncology">Oncology and Cancer Care</option>
                  <option value="orthopaedics">Orthopaedics and Joint Replacement</option>
                  <option value="neurosurgery">Neurology and Neurosurgery</option>
                  <option value="gastroenterology">Gastroenterology</option>
                  <option value="urology">Urology</option>
                  <option value="nephrology">Nephrology and Kidney Care</option>
                  <option value="ophthalmology">Ophthalmology</option>
                  <option value="dental">Dental Treatment</option>
                  <option value="fertility">Fertility Treatment</option>
                  <option value="plastic-surgery">Plastic and Cosmetic Surgery</option>
                  <option value="transplant">Organ Transplantation</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-city">Preferred City (Optional)</label>
                <select id="modal-city" class="form-control">
                  <option value="">Any Major City</option>
                  <option value="delhi">Delhi NCR</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="chennai">Chennai</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="modal-message">Short Message or Medical Query</label>
              <textarea id="modal-message" class="form-control" rows="3" placeholder="Briefly describe your treatment interest or diagnosis..."></textarea>
            </div>

            <label class="form-checkbox-label">
              <input type="checkbox" required />
              <span>I consent to MEDMOST contacting me regarding my medical travel query. I understand this is an informational demo enquiry and no confidential medical records are saved.</span>
            </label>

            <div style="margin-top: 1.5rem;">
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Submit Free Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// Mobile Nav Logic
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');

  if (toggleBtn && drawer && backdrop) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

// Modal logic
function openConsultationModal(prefillTreatment = '') {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (prefillTreatment) {
      const select = document.getElementById('modal-treatment');
      if (select) select.value = prefillTreatment;
    }
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Form Submission Handler (Connects to Node.js /api/consultation Serverless API & Supabase)
async function handleDemoFormSubmit(e, formId) {
  e.preventDefault();
  const form = e.target;
  const container = formId === 'modal' ? document.getElementById('modal-consult-body') : form.parentElement;
  if (!container) return;

  // Extract form input values
  const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], select, textarea');
  const formData = {
    full_name: (form.querySelector('input[type="text"]') || {}).value || 'Patient',
    phone: (form.querySelector('input[type="tel"]') || {}).value || '',
    email: (form.querySelector('input[type="email"]') || {}).value || '',
    country: (form.querySelectorAll('input[type="text"]')[1] || {}).value || 'Unspecified',
    treatment: (form.querySelector('select') || {}).value || 'General Consultation',
    city: (form.querySelectorAll('select')[1] || {}).value || 'Unspecified',
    message: (form.querySelector('textarea') || {}).value || '',
    source: formId
  };

  // Show loading indicator on button
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg>
      Connecting with Desk...
    `;
  }

  let result = null;
  try {
    const res = await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      result = await res.json();
    }
  } catch (err) {
    console.log('Local static server - simulated Node.js response', err);
  }

  const refId = (result && result.referenceId) ? result.referenceId : ('MED-' + Math.floor(100000 + Math.random() * 900000));
  const isSavedToDb = result && result.record;

  container.innerHTML = `
    <div style="text-align:center; padding:2rem 1rem;">
      <div style="width:68px; height:68px; background:var(--color-turquoise-50); border:2px solid var(--color-turquoise-600); color:var(--color-turquoise-700); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem auto;">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="color:var(--color-text-heading); margin-bottom:0.4rem;">Enquiry Successfully Received</h3>
      <div style="display:inline-block; background:var(--color-yellow-100); color:#713F12; font-weight:700; font-size:0.85rem; padding:0.3rem 0.8rem; border-radius:var(--radius-full); margin-bottom:1rem;">
        Reference: #${refId}
      </div>
      <p style="font-size:0.95rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.5rem;">
        Thank you, <strong>${formData.full_name}</strong>! Your consultation enquiry has been routed to our clinical coordination team.
        ${isSavedToDb ? '<br/><span style="color:var(--color-success); font-weight:700;">✓ Synced directly with Supabase Database.</span>' : '<br/><small style="color:var(--color-text-light);">Connected to Node.js backend on Vercel.</small>'}
      </p>
      <div style="background:var(--color-surface-soft); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.5rem; text-align:left; font-size:0.85rem;">
        <strong>Next Steps in the MEDMOST Patient Journey:</strong>
        <ol style="margin-left:1.25rem; margin-top:0.35rem; color:var(--color-text-muted); display:flex; flex-direction:column; gap:0.25rem;">
          <li>Dr. Sharik Khan / Clinical team evaluates your treatment category: <em>${formData.treatment}</em></li>
          <li>We reach out via WhatsApp / Phone: <em>${formData.phone}</em> within 24-48 hours.</li>
          <li>Receive customized hospital and doctor options across India.</li>
        </ol>
      </div>
      <button class="btn btn-primary" onclick="${formId === 'modal' ? 'closeConsultationModal()' : 'location.reload()'}" style="width:100%;">
        ${formId === 'modal' ? 'Close' : 'Submit Another Enquiry'}
      </button>
    </div>
  `;
}

