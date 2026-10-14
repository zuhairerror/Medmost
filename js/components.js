/**
 * MEDMOST - Reusable Components & Navigation
 * Renders consistent navbar, top bar, footer, consultation modal, and floating widgets
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

  headerContainer.innerHTML = `
    <!-- Top Information Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-left">
          <span class="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
            24/7 International Patient Assistance Desk
          </span>
          <span class="top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Card Tel: <strong>${MEDMOST_CONFIG.phoneDisplay}</strong> <small style="color:#E2B73C; margin-left:4px;">*sample</small>
          </span>
        </div>
        <div class="top-bar-right">
          <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="top-item" style="color:#A7F3D0; font-weight:600;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            WhatsApp Support Available
          </a>
          <span class="top-item" style="color:#FDE68A;">
            English / Multilingual Support Ready
          </span>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="site-header">
      <div class="container navbar">
        <a href="index.html" class="logo-wrapper" title="MEDMOST - Medical Tourism in India">
          <img src="assets/images/logo-white.svg" alt="MEDMOST Logo" class="logo-img" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav>
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
            <li><a href="treatments.html" class="nav-link ${activePage === 'treatments' ? 'active' : ''}">Treatments</a></li>
            <li><a href="doctors.html" class="nav-link ${activePage === 'doctors' ? 'active' : ''}">Doctors</a></li>
            <li><a href="hospitals.html" class="nav-link ${activePage === 'hospitals' ? 'active' : ''}">Hospitals</a></li>
            <li><a href="why-india.html" class="nav-link ${activePage === 'why-india' ? 'active' : ''}">Why India?</a></li>
            <li><a href="how-it-works.html" class="nav-link ${activePage === 'how-it-works' ? 'active' : ''}">How It Works</a></li>
            <li><a href="patient-support.html" class="nav-link ${activePage === 'support' ? 'active' : ''}">Support</a></li>
            <li><a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About Us</a></li>
            <li><a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
          </ul>
        </nav>

        <!-- Navbar Actions -->
        <div class="nav-actions">
          <button type="button" class="btn btn-gold btn-sm btn-consult-nav" onclick="openConsultationModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Free Consultation
          </button>
          <button class="nav-toggle" id="nav-toggle-btn" aria-label="Toggle navigation menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer & Backdrop -->
    <div class="mobile-backdrop" id="mobile-backdrop"></div>
    <div class="mobile-nav-drawer" id="mobile-drawer">
      <button class="mobile-nav-close" id="mobile-close-btn" aria-label="Close menu">&times;</button>
      <div style="margin-bottom: 1.5rem;">
        <img src="assets/images/logo-white.svg" alt="MEDMOST Logo" style="height: 40px;" />
        <p style="font-size: 0.8rem; color: #A3BFB3; margin-top: 0.5rem;">World-Class Medical Treatment in India</p>
      </div>
      <ul class="mobile-nav-links">
        <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="treatments.html" class="${activePage === 'treatments' ? 'active' : ''}">Treatments</a></li>
        <li><a href="doctors.html" class="${activePage === 'doctors' ? 'active' : ''}">Doctors</a></li>
        <li><a href="hospitals.html" class="${activePage === 'hospitals' ? 'active' : ''}">Hospitals</a></li>
        <li><a href="why-india.html" class="${activePage === 'why-india' ? 'active' : ''}">Why India?</a></li>
        <li><a href="how-it-works.html" class="${activePage === 'how-it-works' ? 'active' : ''}">How It Works</a></li>
        <li><a href="patient-support.html" class="${activePage === 'support' ? 'active' : ''}">Patient Support</a></li>
        <li><a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About Us</a></li>
        <li><a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 0.75rem;">
        <button class="btn btn-gold btn-block" onclick="openConsultationModal(); closeMobileNav();">
          Get a Free Consultation
        </button>
        <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white btn-sm" style="text-align:center;">
          Chat on WhatsApp
        </a>
      </div>
    </div>
  `;

  // Attach mobile drawer toggle events
  initMobileNav();
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
            <img src="assets/images/logo-white.svg" alt="MEDMOST" style="height: 44px; margin-bottom: 0.5rem;" />
            <p class="footer-desc">
              <strong>MEDMOST</strong> is a premier medical travel facilitation partner dedicated to assisting international patients exploring advanced, affordable, and accredited healthcare in India.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="contact-pill gold" style="font-size:0.75rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Independent Medical Travel Facilitator
              </span>
            </div>
          </div>

          <!-- Col 2: Treatment Categories -->
          <div class="footer-col">
            <h4>Treatment Specialties</h4>
            <ul class="footer-links">
              <li><a href="treatments.html?category=cardiology">Cardiology & Heart Surgery</a></li>
              <li><a href="treatments.html?category=oncology">Oncology & Cancer Care</a></li>
              <li><a href="treatments.html?category=orthopaedics">Orthopaedics & Joint Replacement</a></li>
              <li><a href="treatments.html?category=neurosurgery">Neurosurgery & Neurology</a></li>
              <li><a href="treatments.html?category=gastroenterology">Gastroenterology</a></li>
              <li><a href="treatments.html?category=nephrology">Nephrology & Kidney Care</a></li>
              <li><a href="treatments.html?category=transplant">Organ Transplantation</a></li>
              <li><a href="treatments.html" style="color:var(--color-gold-400); font-weight:600;">View All 12 Categories &rarr;</a></li>
            </ul>
          </div>

          <!-- Col 3: Quick Navigation -->
          <div class="footer-col">
            <h4>Patient Navigation</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About MEDMOST</a></li>
              <li><a href="doctors.html">Doctors (Demo Directory)</a></li>
              <li><a href="hospitals.html">Hospitals (Demo Directory)</a></li>
              <li><a href="how-it-works.html">How It Works (4 Steps)</a></li>
              <li><a href="why-india.html">Why Choose India</a></li>
              <li><a href="patient-support.html">International Patient Support</a></li>
              <li><a href="contact.html">Contact & Card Reference</a></li>
            </ul>
          </div>

          <!-- Col 4: Business Card Details & Contact Reference -->
          <div class="footer-col">
            <h4>Contact & Card Reference</h4>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <strong>Phone / Card Placeholder:</strong><br />
                <span>${MEDMOST_CONFIG.phoneDisplay}</span><br />
                <small style="color:var(--color-gold-400);">${MEDMOST_CONFIG.phoneNote}</small>
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <div>
                <strong>WhatsApp Messaging:</strong><br />
                <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" style="color:#A7F3D0; text-decoration:underline;">Click to Chat on WhatsApp</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="3"/><line x1="7" y1="7" x2="7.01" y2="7"/><line x1="17" y1="7" x2="17.01" y2="7"/><line x1="7" y1="17" x2="7.01" y2="17"/></svg>
              <div>
                <strong>QR Code:</strong><br />
                <a href="contact.html#qr-section" style="color:var(--color-gold-300);">Digital Card QR Placeholder &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Mandatory Transparent Medical Disclaimer Box -->
        <div class="footer-disclaimer-box">
          <strong>Mandatory Medical & Facilitation Notice:</strong> MEDMOST is an independent medical travel facilitator and coordination service. MEDMOST is not a hospital, clinic, or medical treatment facility, nor does it provide direct medical advice, diagnosis, treatment, or guaranteed clinical outcomes. All medical opinions, diagnoses, and treatment protocols are rendered solely by accredited third-party hospitals and licensed healthcare practitioners in India. Services described reflect intended facilitation scopes subject to confirmed hospital arrangements.
        </div>

        <!-- Bottom Copyright & Legal Links -->
        <div class="footer-bottom">
          <p>&copy; 2026 MEDMOST. All rights reserved. World-Class Medical Treatment in India.</p>
          <ul class="footer-legal-links">
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
            <li><a href="disclaimer.html">Medical Disclaimer</a></li>
          </ul>
        </div>
      </div>
    </footer>

    <!-- Floating Quick Actions -->
    <div class="floating-actions">
      <a href="https://wa.me/${MEDMOST_CONFIG.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="float-btn float-whatsapp" title="Chat on WhatsApp" aria-label="WhatsApp Support">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      </a>
      <button type="button" class="float-btn float-consult" title="Get Free Consultation" aria-label="Request Free Consultation" onclick="openConsultationModal()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>

    <!-- Reusable Free Consultation Modal -->
    <div class="modal-overlay" id="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="modal-consult-title">
      <div class="modal-box">
        <button class="modal-close-btn" onclick="closeConsultationModal()" aria-label="Close dialog">&times;</button>
        <div class="modal-header">
          <div class="section-tag gold" style="margin-bottom:0.5rem;">Free International Patient Enquiry</div>
          <h3 id="modal-consult-title" class="text-forest">Request Medical Consultation</h3>
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
                  <option value="cardiology">Cardiology & Heart Surgery</option>
                  <option value="oncology">Oncology & Cancer Care</option>
                  <option value="orthopaedics">Orthopaedics & Joint Replacement</option>
                  <option value="neurosurgery">Neurosurgery & Neurology</option>
                  <option value="gastroenterology">Gastroenterology</option>
                  <option value="urology">Urology</option>
                  <option value="nephrology">Nephrology & Kidney Care</option>
                  <option value="ophthalmology">Ophthalmology & Eye Care</option>
                  <option value="dental">Dental Treatment</option>
                  <option value="plastic-surgery">Plastic & Cosmetic Surgery</option>
                  <option value="fertility">Fertility Treatment (IVF)</option>
                  <option value="transplant">Organ Transplantation</option>
                  <option value="other">General Medical Enquiry</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-city">Preferred City (Optional)</label>
                <select id="modal-city" class="form-control">
                  <option value="">Any Major City</option>
                  <option value="delhi">Delhi NCR (Gurugram / Noida)</option>
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
              <button type="submit" class="btn btn-primary btn-block" style="width: 100%;">
                Submit Free Enquiry
              </button>
            </div>
            <p style="font-size:0.75rem; color:var(--color-text-light); text-align:center; margin-top:0.75rem;">
              Strict Confidentiality • No Real Medical Data Stored (First Version Demo)
            </p>
          </form>
        </div>
      </div>
    </div>
  `;
}

// Mobile Navigation Logic
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

function closeMobileNav() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Modal Control
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

// Demo Form Submission Handler
function handleDemoFormSubmit(e, formId) {
  e.preventDefault();
  
  const container = formId === 'modal' ? document.getElementById('modal-consult-body') : e.target.parentElement;
  if (!container) return;

  container.innerHTML = `
    <div class="demo-confirmation-box">
      <div class="demo-confirm-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style="color:var(--color-forest-900); margin-bottom:0.5rem;">Enquiry Submitted (Demo Mode)</h3>
      <p style="font-size:0.95rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.5rem;">
        Thank you for submitting your consultation enquiry to <strong>MEDMOST</strong>! 
        <br/><br/>
        <strong>Note for First Version Review:</strong> This is an initial frontend prototype. As instructed, no real medical data or personal details have been transmitted or stored in a backend database. In the final version, this will connect directly with our patient coordination desk.
      </p>
      <div style="background:var(--color-forest-50); border:1px solid var(--color-forest-100); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.5rem; text-align:left; font-size:0.85rem;">
        <strong>Sample Next Steps in MEDMOST Patient Journey:</strong>
        <ol style="margin-left:1.25rem; margin-top:0.4rem; color:var(--color-forest-800); display:flex; flex-direction:column; gap:0.25rem;">
          <li>Review medical history with participating hospital specialists</li>
          <li>Receive detailed preliminary treatment cost quote & doctor profile</li>
          <li>Assistance with Medical Visa (M-Visa) documentation</li>
        </ol>
      </div>
      <button class="btn btn-primary" onclick="${formId === 'modal' ? 'closeConsultationModal()' : 'location.reload()'}" style="width:100%;">
        ${formId === 'modal' ? 'Done' : 'Submit Another Demo Enquiry'}
      </button>
    </div>
  `;
}
