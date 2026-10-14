/**
 * MEDMOST - Master Interactive Script & Data Store
 * Includes official doctor profiles: Dr. Sharik Khan & Dr. Salah,
 * 12 treatment categories, and demo hospital data.
 */

// Official Doctors Data
const OFFICIAL_DOCTORS = [
  {
    id: "dr-sharik-khan",
    name: "Dr. Sharik Khan",
    designation: "Chief Specialist — CHIT Specialist",
    designationNote: "(Provisional wording until exact designation is confirmed)",
    qualification: "MBBS — KSMA University, Kyrgyzstan",
    qualificationNote: "(As provided; verify official university name before final publication)",
    isPrimary: true,
    photo: "assets/images/dr-sharik-khan.jpg",
    profileUrl: "doctor-sharik-khan.html",
    bio: "Dr. Sharik Khan serves as Chief Specialist — CHIT Specialist at MEDMOST. With his medical education from KSMA University, Kyrgyzstan, he provides core medical advisory and clinical coordination for international patients traveling to India for healthcare.",
    medicalBackground: "Completed MBBS at KSMA University, Kyrgyzstan. Focuses on international patient guidance, evaluating case histories, and liaising with accredited hospital departments across India."
  },
  {
    id: "dr-salah",
    name: "Dr. Salah",
    designation: "Medical Advisor & Clinical Coordinator",
    specialty: "General Medicine / Clinical Advisory (Editable)",
    specialtyNote: "(Leave editable until exact specialty is confirmed)",
    qualification: "MBBS — KSMA University, Kyrgyzstan",
    qualificationNote: "(As provided; verify official university name before final publication)",
    isPrimary: false,
    photo: "assets/images/dr-salah.jpg",
    profileUrl: "doctor-salah.html",
    bio: "Dr. Salah is a medical advisor at MEDMOST, having completed his MBBS from KSMA University, Kyrgyzstan. He coordinates preliminary clinical enquiries and facilitates smooth patient communication for cross-border medical travel.",
    medicalBackground: "Completed MBBS at KSMA University, Kyrgyzstan. Assists international patients in reviewing medical documentation and coordinating clinical consultations."
  }
];

// 12 Primary Treatment Categories
const TREATMENT_CATEGORIES = [
  {
    id: "cardiology",
    title: "Cardiology and Heart Surgery",
    tagline: "Advanced Cardiac Bypass, Valve Replacements & Interventional Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    overview: "Comprehensive cardiovascular surgery in India including minimally invasive coronary artery bypass (CABG), valve repair/replacement, TAVR, and pediatric cardiology.",
    procedures: ["Coronary Artery Bypass (CABG)", "Heart Valve Repair & Replacement (TAVR)", "Pediatric Heart Surgery", "Angioplasty & Stenting", "Pacemaker Implantation"],
    stayDuration: "Hospital: 5-7 days | India Stay: 12-16 days",
    approxSavings: "Up to 70-80% compared to US / UK / Western Europe"
  },
  {
    id: "oncology",
    title: "Oncology and Cancer Care",
    tagline: "Medical, Surgical & Precision Radiation Oncology",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    overview: "State-of-the-art cancer centers deploying robotic surgery, CyberKnife, Proton Beam therapy, targeted immunotherapy, and multidisciplinary tumor boards.",
    procedures: ["Surgical Oncology & Tumor Resection", "Proton Beam & Precision Radiotherapy", "Targeted Immunotherapy & Chemotherapy", "Bone Marrow Transplant", "Breast & GI Oncology"],
    stayDuration: "Varies depending on treatment protocol (14-30 days)",
    approxSavings: "Up to 65-75% savings for advanced radiotherapy & surgery"
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics and Joint Replacement",
    tagline: "Robotic Knee, Hip Replacements & Complex Spine Surgery",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
    overview: "Robotic-assisted joint replacements for maximum surgical precision, rapid patient mobilization, minimal tissue disruption, and long-lasting joint implants.",
    procedures: ["Robotic Total Knee Replacement", "Total Hip Replacement", "Minimally Invasive Spine Surgery", "Arthroscopic Sports Injury Reconstruction", "Shoulder & Elbow Arthroplasty"],
    stayDuration: "Hospital: 3-5 days | Rehabilitation: 10-14 days",
    approxSavings: "Up to 75-80% lower than typical Western costs"
  },
  {
    id: "neurosurgery",
    title: "Neurology and Neurosurgery",
    tagline: "Brain & Spine Surgery, Neuro-Navigation & Deep Brain Stimulation",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    overview: "Advanced neurosurgical procedures utilizing 3T intraoperative MRI, neuro-endoscopy, and stereotactic radiosurgery for brain and spinal pathologies.",
    procedures: ["Craniotomy for Brain Tumors & Aneurysms", "Endoscopic Spine Surgeries", "Deep Brain Stimulation (DBS)", "Pediatric Neurosurgery", "Peripheral Nerve Surgeries"],
    stayDuration: "Hospital: 5-8 days | Post-Op: 14-21 days",
    approxSavings: "Up to 70% savings with high surgical expertise"
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    tagline: "Therapeutic Endoscopy, Liver Care & GI Surgeries",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    overview: "Specialized gastrointestinal interventions, diagnostic & therapeutic ERCP, endoscopic ultrasound (EUS), and laparoscopic metabolic surgeries.",
    procedures: ["Therapeutic Endoscopy & Colonoscopy (ERCP/EUS)", "Laparoscopic GI Surgery", "Bariatric Surgery", "Pancreatic & Biliary Care", "IBD Management"],
    stayDuration: "Hospital: 2-4 days | India Stay: 7-10 days",
    approxSavings: "Up to 65-75% cost advantage"
  },
  {
    id: "urology",
    title: "Urology",
    tagline: "Laser Prostatectomy, Kidney Stones & Robotic Urological Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    overview: "Laser lithotripsy (RIRS), robotic radical prostatectomy, reconstructive urology, and male reproductive health.",
    procedures: ["Robotic Radical Prostatectomy", "Retrograde Intrarenal Surgery (RIRS)", "Holmium Laser Enucleation of Prostate (HoLEP)", "Urethral Reconstruction", "Pediatric Urology"],
    stayDuration: "Hospital: 2-4 days | Recovery: 7-9 days",
    approxSavings: "Up to 70% savings"
  },
  {
    id: "nephrology",
    title: "Nephrology and Kidney Care",
    tagline: "Renal Care, Travel Dialysis & Pre-Transplant Protocols",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    overview: "Management of chronic kidney disease, biocompatible hemodialysis for traveling patients, and pre-transplant evaluations.",
    procedures: ["Biocompatible Travel Dialysis", "Glomerulonephritis & Diabetic Nephropathy Care", "AV Fistula Creation", "Renal Biopsy", "CKD Protocol Optimization"],
    stayDuration: "Outpatient or short hospital stay (5-10 days)",
    approxSavings: "Up to 60-70% lower procedure costs"
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    tagline: "Femto-LASIK, Corneal Transplants & Retina Interventions",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    overview: "Pioneering eye centers performing blade-free Femto-LASIK, SMILE, premium trifocal intraocular lens cataract surgeries, and vitreoretinal surgery.",
    procedures: ["Bladeless Femtosecond LASIK & SMILE", "Robotic Cataract Surgery with Premium IOLs", "Corneal Transplantation", "Vitreoretinal Surgery for Retinal Detachment", "Glaucoma Care"],
    stayDuration: "Day care / 1 day hospital | Stay: 5-7 days",
    approxSavings: "Up to 80% savings on refractive and lens surgery"
  },
  {
    id: "dental",
    title: "Dental Treatment",
    tagline: "Full-Mouth Dental Implants, Cosmetic Veneers & Smile Makeovers",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 6 5 6 9c0 4 2 8 3 13h6c1-5 3-9 3-13 0-4-2-7-6-7z"/></svg>`,
    overview: "High-precision digital dentistry providing All-on-4 / All-on-6 implants, CAD-CAM zirconia crowns, and aesthetic smile rehabilitation.",
    procedures: ["All-on-4 / All-on-6 Immediate Implants", "Porcelain & Zirconia Veneers", "Digital Smile Design Makeovers", "Bone Grafting & Sinus Lift", "Full Mouth Rehabilitation"],
    stayDuration: "Outpatient: 5-10 days depending on procedure",
    approxSavings: "Up to 75% savings compared to North America and Europe"
  },
  {
    id: "fertility",
    title: "Fertility Treatment",
    tagline: "IVF, ICSI & Assisted Reproductive Technology",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5c0 3 5 9 5 9s5-6 5-9a5 5 0 0 0-5-5z"/><circle cx="12" cy="7" r="2"/></svg>`,
    overview: "Ethical assisted reproductive technology clinics providing IVF, ICSI, and preimplantation genetic screening under Indian ART regulations.",
    procedures: ["In Vitro Fertilization (IVF) & Embryo Transfer", "Intracytoplasmic Sperm Injection (ICSI)", "Preimplantation Genetic Testing (PGT)", "Blastocyst Culture", "Male Fertility Interventions"],
    stayDuration: "Approx. 18-21 days for full stimulation and retrieval cycle",
    approxSavings: "Up to 65% savings with top global success rates"
  },
  {
    id: "plastic-surgery",
    title: "Plastic and Cosmetic Surgery",
    tagline: "Aesthetic Enhancements, Body Contouring & Reconstruction",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    overview: "Board-certified plastic surgeons providing facial rejuvenation, rhinoplasty, breast aesthetics, liposuction, and reconstructive surgery.",
    procedures: ["Rhinoplasty", "Body Contouring & High-Def Liposuction", "Breast Augmentation & Reduction", "Facelift & Neck Lift", "Post-Bariatric Body Lift"],
    stayDuration: "Hospital: 1-2 days | City Stay: 8-12 days",
    approxSavings: "Up to 60-70% savings"
  },
  {
    id: "transplant",
    title: "Organ Transplantation",
    tagline: "Living Donor Kidney and Liver Transplants (Strict Legal Framework)",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    overview: "Living-donor liver and kidney transplants with high survival benchmarks, supported by dedicated transplant ICUs and strict government authorization compliance.",
    procedures: ["Living Donor Kidney Transplantation", "Living Donor Liver Transplantation", "Pediatric Liver & Kidney Transplants", "ABO-Incompatible Transplants", "Post-Transplant Immunosuppression"],
    stayDuration: "Hospital: 14-21 days | India Stay: 4-8 weeks",
    approxSavings: "Up to 70-80% lower than US/Europe transplant programs"
  }
];

// Fictional Demo Hospitals (Clearly marked)
const DEMO_HOSPITALS = [
  {
    id: "delhi-medicity",
    name: "Capital Multi-Specialty Health City (Demo Profile)",
    city: "Delhi NCR",
    description: "Quaternary multi-specialty institution in Delhi NCR featuring advanced surgical robotics, 1,200 beds, and dedicated international patient lounges.",
    departments: "Cardiology, Oncology, Orthopaedics, Neurosurgery, Organ Transplants",
    image: "assets/images/hospitals-india.jpg"
  },
  {
    id: "mumbai-super-care",
    name: "Western Metro Premier Hospital (Demo Profile)",
    city: "Mumbai",
    description: "Premier tertiary center in Mumbai known for high-volume oncology, robotic urology, and immediate coastal airport access.",
    departments: "Oncology, Cardiology, Robotic Surgery, Gastroenterology",
    image: "assets/images/hero.jpg"
  },
  {
    id: "chennai-medical-center",
    name: "Southern Institute of Medical Excellence (Demo Profile)",
    city: "Chennai",
    description: "Renowned Chennai medical center known for organ transplants, joint replacements, and high international patient volumes.",
    departments: "Organ Transplants, Cardiology, Eye Care, Orthopaedics",
    image: "assets/images/hospitals-india.jpg"
  },
  {
    id: "bengaluru-health-city",
    name: "Tech-City Quaternary Health Campus (Demo Profile)",
    city: "Bengaluru",
    description: "Ultra-modern medical center in Bengaluru deploying AI-assisted diagnostics, robotic joint replacements, and cardiac surgery.",
    departments: "Cardiology, Neurosurgery, Robotic Joint Surgery, Fertility",
    image: "assets/images/consultation.jpg"
  },
  {
    id: "hyderabad-global-med",
    name: "Deccan Advanced Healthcare City (Demo Profile)",
    city: "Hyderabad",
    description: "Leading medical infrastructure in Hyderabad offering specialized GI endoscopy, liver transplant programs, and low-cost care suites.",
    departments: "Gastroenterology, Liver Transplant, Urology, Nephrology",
    image: "assets/images/hospitals-india.jpg"
  }
];

// Render Doctor Cards on Home and Doctors Pages
function renderOfficialDoctors(containerId = 'official-doctors-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = OFFICIAL_DOCTORS.map(doc => `
    <div class="doctor-profile-card ${doc.isPrimary ? 'primary-doctor' : ''}">
      <div class="doctor-photo-wrap">
        <img src="${doc.photo}" alt="${doc.name}" loading="lazy" />
        <span class="doctor-role-badge">
          ${doc.isPrimary ? 'Main Doctor Profile' : 'Doctor Profile'}
        </span>
      </div>
      <div class="doctor-card-info">
        <h3>${doc.name}</h3>
        <div class="doctor-designation">
          ${doc.designation}
        </div>
        <div class="doctor-edu-box">
          <strong>Education:</strong> ${doc.qualification}
        </div>
        <p class="doctor-bio">
          ${doc.bio}
        </p>
        <div class="doctor-card-actions">
          <a href="${doc.profileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;" data-i18n="btn_view_profile">
            View Profile
          </a>
          <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" data-i18n="btn_request_consult">
            Request Consultation
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Treatment Cards
function renderTreatmentsGrid(containerId = 'treatments-grid-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = TREATMENT_CATEGORIES.map(t => `
    <div class="treatment-card">
      <div class="treatment-header">
        <div class="treatment-icon">
          ${t.icon}
        </div>
        <span class="treatment-badge">Specialty</span>
      </div>
      <h3 class="treatment-title">${t.title}</h3>
      <p class="treatment-desc">${t.tagline}</p>
      
      <div style="background:var(--color-surface-soft); padding:0.75rem; border-radius:var(--radius-sm); margin-bottom:1.25rem; font-size:0.8rem; color:var(--color-text-main);">
        <strong>Stay:</strong> ${t.stayDuration.split('|')[0]}<br/>
        <strong>Savings:</strong> ${t.approxSavings}
      </div>

      <div class="treatment-footer">
        <a href="treatment-detail.html?category=${t.id}" target="_blank" rel="noopener noreferrer" class="treatment-link">
          Learn More &rarr;
        </a>
        <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          Enquire
        </a>
      </div>
    </div>
  `).join('');
}

// Render Hospital Cards
function renderHospitalCards(containerId = 'hospitals-grid-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = DEMO_HOSPITALS.map(h => `
    <div class="feature-card" style="display:flex; flex-direction:column;">
      <div style="height:190px; border-radius:var(--radius-md); overflow:hidden; margin-bottom:1.25rem; background:#E2E8F0;">
        <img src="${h.image}" alt="${h.name}" style="width:100%; height:100%; object-fit:cover;" />
      </div>
      <span class="section-tag yellow" style="font-size:0.7rem; align-self:flex-start; margin-bottom:0.5rem;">
        Demo Information
      </span>
      <h3 style="font-size:1.25rem; margin-bottom:0.35rem;" class="text-turquoise">${h.name}</h3>
      <div style="font-size:0.85rem; font-weight:700; color:var(--color-turquoise-800); margin-bottom:0.75rem;">
        City: ${h.city}
      </div>
      <p style="font-size:0.9rem; line-height:1.6; color:var(--color-text-muted); margin-bottom:1.25rem; flex-grow:1;">
        ${h.description}
      </p>
      <div style="background:var(--color-surface-soft); padding:0.75rem; border-radius:var(--radius-sm); font-size:0.825rem; margin-bottom:1.5rem;">
        <strong>Departments (Confirmed on Enquiry):</strong> ${h.departments}
      </div>
      <div style="display:flex; gap:0.5rem; margin-top:auto;">
        <a href="consultation.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">
          Hospital Enquiry
        </a>
      </div>
    </div>
  `).join('');
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}
