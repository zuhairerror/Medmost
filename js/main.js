/**
 * MEDMOST - Master Interactive Script & Data Store
 * Provides treatment categories, demo doctors, demo hospitals, FAQ toggles, and search filters
 */

// 12 Primary Treatment Categories based on business card reference & requirements
const TREATMENT_CATEGORIES = [
  {
    id: "cardiology",
    title: "Cardiology & Heart Surgery",
    tagline: "Advanced Cardiac Bypass, Valve Replacements & Interventional Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    overview: "India is globally recognized for high-volume cardiothoracic surgeries with world-class success rates. Procedures include minimally invasive bypass surgery (CABG), TAVR, coronary angioplasty, pediatric cardiology, and cardiac rehabilitation.",
    commonProcedures: ["Coronary Artery Bypass Graft (CABG)", "Heart Valve Repair & Replacement (TAVR)", "Pediatric Heart Defect Surgeries", "Angioplasty & Stenting", "Pacemaker Implantation"],
    stayDuration: "Hospital: 5-7 days | India Stay: 12-16 days",
    approxSavings: "Up to 70-80% compared to US / UK / Western Europe",
    demoNote: "Hospital partnerships and availability are confirmed on a case-by-case basis."
  },
  {
    id: "oncology",
    title: "Oncology & Cancer Care",
    tagline: "Comprehensive Medical, Surgical, and Precision Radiation Oncology",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    overview: "State-of-the-art oncology centers in India deploy cutting-edge technologies including CyberKnife, Proton Beam Therapy, PET-CT scanners, targeted immunotherapy, and minimally invasive robotic oncological resection.",
    commonProcedures: ["Surgical Oncology & Tumor Resection", "Proton Beam & Radiation Therapy (IMRT, IGRT)", "Targeted Immunotherapy & Chemotherapy", "Bone Marrow & Stem Cell Transplants", "Breast & Colorectal Cancer Management"],
    stayDuration: "Varies depending on treatment protocol (14-30 days)",
    approxSavings: "Up to 65-75% savings for advanced radiotherapy & surgery",
    demoNote: "Detailed oncology evaluation requires verified multidisciplinary tumor board review."
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics & Joint Replacement",
    tagline: "Robotic Knee, Hip Replacements & Complex Spine Surgery",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
    overview: "Leading Indian orthopaedic institutes utilize computer-assisted and robotic joint replacement systems for precision alignment, minimal tissue trauma, rapid rehabilitation, and durable joint implants.",
    commonProcedures: ["Total Knee Replacement (Robotic / Minimally Invasive)", "Total Hip Replacement & Hip Resurfacing", "Spinal Decompression & Lumbar Fusion", "Arthroscopic Sports Injury Reconstruction (ACL/Meniscus)", "Shoulder & Elbow Arthroplasty"],
    stayDuration: "Hospital: 3-5 days | Rehabilitation Stay: 10-14 days",
    approxSavings: "Up to 75-80% lower than typical Western costs",
    demoNote: "Implant manufacturers and robotic availability depend on selected hospital."
  },
  {
    id: "neurosurgery",
    title: "Neurosurgery & Neurology",
    tagline: "Brain & Spine Surgery, Neuro-Navigation & Stroke Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`,
    overview: "Indian neurosurgery centers feature stereotactic radiosurgery, intraoperative MRI, neuro-endoscopy, and deep brain stimulation (DBS) for neurological disorders and complex intracranial pathologies.",
    commonProcedures: ["Craniotomy for Brain Tumors & Aneurysms", "Microscopic & Endoscopic Spine Surgeries", "Deep Brain Stimulation (DBS) for Parkinson's", "Pediatric Neurosurgery & Hydrocephalus Shunting", "Peripheral Nerve & Epilepsy Surgeries"],
    stayDuration: "Hospital: 5-8 days | Post-Op Stay: 14-21 days",
    approxSavings: "Up to 70% savings with high surgical expertise",
    demoNote: "Detailed MRI and CT imaging required prior to consultation scheduling."
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology & GI Surgery",
    tagline: "Advanced Endoscopy, Liver Care & Bariatric Surgery",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    overview: "Specialized departments for gastrointestinal disorders, hepatology, therapeutic endoscopy (ERCP, EUS), laparoscopic GI surgery, and metabolic weight-loss interventions.",
    commonProcedures: ["Therapeutic Endoscopy & Colonoscopy (ERCP/EUS)", "Laparoscopic Gallbladder & Hernia Repair", "Bariatric & Weight Management Surgeries", "Pancreatic & Biliary Surgery", "Inflammatory Bowel Disease Management"],
    stayDuration: "Hospital: 2-4 days | India Stay: 7-10 days",
    approxSavings: "Up to 65-75% cost advantage",
    demoNote: "Dietary guidance and post-discharge nutritional coordination included."
  },
  {
    id: "urology",
    title: "Urology & Men's Health",
    tagline: "Laser Prostatectomy, Kidney Stones & Robotic Urological Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    overview: "Focusing on laser stone extraction (RIRS, PCNL), robotic prostatectomy (Da Vinci system), reconstructive urology, and male reproductive wellness.",
    commonProcedures: ["Robotic Radical Prostatectomy", "Retrograde Intrarenal Surgery (RIRS) for Stones", "Holmium Laser Enucleation of Prostate (HoLEP)", "Urethral Stricture Reconstruction", "Pediatric Urology"],
    stayDuration: "Hospital: 2-4 days | Recovery: 7-9 days",
    approxSavings: "Up to 70% savings",
    demoNote: "Pre-arrival ultrasound and PSA review facilitated upon enquiry."
  },
  {
    id: "nephrology",
    title: "Nephrology & Kidney Care",
    tagline: "Chronic Kidney Disease Management & Dialysis Support",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    overview: "Dedicated nephrology units providing comprehensive renal care, hypertension management, biocompatible hemodialysis for traveling patients, and pre-transplant workups.",
    commonProcedures: ["Dialysis Support for International Patients", "Management of Glomerulonephritis & Diabetic Nephropathy", "AV Fistula Creation for Dialysis Access", "Renal Biopsy & Precision Diagnosis", "Chronic Kidney Disease Protocol Optimization"],
    stayDuration: "Outpatient or short hospital stay (5-10 days)",
    approxSavings: "Up to 60-70% lower procedure costs",
    demoNote: "Regular travel dialysis sessions can be pre-booked in accredited centers."
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology & Eye Care",
    tagline: "Femto-LASIK, Corneal Transplants & Vitreoretinal Care",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    overview: "India is an international pioneer in ophthalmology, performing tens of thousands of blade-free cataract surgeries, advanced refractive corneal procedures, and retina treatments annually.",
    commonProcedures: ["Bladeless Femtosecond LASIK & SMILE", "Robotic Cataract Surgery with Premium Trifocal IOLs", "Corneal Transplantation & Crosslinking", "Vitreoretinal Surgery for Retinal Detachment", "Glaucoma Drainage Devices"],
    stayDuration: "Day care / 1 day hospital | Stay: 5-7 days",
    approxSavings: "Up to 80% savings on refractive and intraocular lens surgery",
    demoNote: "Air travel clearance usually granted within 5-7 days post-procedure."
  },
  {
    id: "dental",
    title: "Dental Treatment & Implantology",
    tagline: "Full-Mouth Dental Implants, Cosmetic Veneers & Zirconia Bridges",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8 2 6 5 6 9c0 4 2 8 3 13h6c1-5 3-9 3-13 0-4-2-7-6-7z"/></svg>`,
    overview: "High-precision digital dentistry clinics in India offer All-on-4 / All-on-6 dental implants, Hollywood smile makeovers, and maxillofacial reconstruction with international implant warranties.",
    commonProcedures: ["All-on-4 / All-on-6 Immediate Dental Implants", "Porcelain & Zirconia Veneers", "Digital Smile Design Makeovers", "Bone Grafting & Sinus Lift Procedures", "Full Mouth Rehabilitation"],
    stayDuration: "Outpatient: 5-10 days depending on procedure",
    approxSavings: "Up to 75% savings compared to North America and Europe",
    demoNote: "Digital OPG scans can be sent ahead for a preliminary treatment plan."
  },
  {
    id: "plastic-surgery",
    title: "Plastic & Cosmetic Surgery",
    tagline: "Aesthetic Enhancements, Body Contouring & Reconstructive Surgery",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    overview: "Board-certified plastic surgeons combine artistry with surgical excellence. Services include facial rejuvenation, rhinoplasty, breast aesthetics, liposuction, and reconstructive microsurgery.",
    commonProcedures: ["Rhinoplasty & Septorhinoplasty", "High-Definition Liposuction & Tummy Tuck", "Breast Augmentation, Reduction & Lift", "Facelift & Neck Lift (Rhytidectomy)", "Post-Bariatric Body Contouring"],
    stayDuration: "Hospital: 1-2 days | City Stay: 8-12 days",
    approxSavings: "Up to 60-70% savings",
    demoNote: "Photographic assessment and virtual doctor consultation available upon request."
  },
  {
    id: "fertility",
    title: "Fertility Treatment & IVF",
    tagline: "Assisted Reproductive Technology, ICSI & Genetic Screening",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 0-5 5c0 3 5 9 5 9s5-6 5-9a5 5 0 0 0-5-5z"/><circle cx="12" cy="7" r="2"/></svg>`,
    overview: "Internationally accredited fertility centers providing IVF, ICSI, PGT-A genetic screening, egg freezing, and fertility preservation under strict ethical Indian ART regulations.",
    commonProcedures: ["In Vitro Fertilization (IVF) & Embryo Transfer", "Intracytoplasmic Sperm Injection (ICSI)", "Preimplantation Genetic Testing (PGT-A/M)", "Blastocyst Culture & Laser Assisted Hatching", "Male Infertility Treatments (TESA/PESA)"],
    stayDuration: "Approx. 18-21 days for full stimulation and retrieval cycle",
    approxSavings: "Up to 65% savings with top global success rates",
    demoNote: "Subject to compliance with India's Assisted Reproductive Technology (ART) Act."
  },
  {
    id: "transplant",
    title: "Organ Transplantation",
    tagline: "Kidney & Living Donor Liver Transplants under Legal Framework",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    overview: "World-renowned transplant teams performing high-volume living-donor liver and kidney transplants with high survival benchmarks, supported by dedicated transplant ICUs.",
    commonProcedures: ["Living Donor Kidney Transplantation", "Living Donor Liver Transplantation", "Pediatric Liver & Kidney Transplants", "ABO-Incompatible (Mismatch) Transplants", "Comprehensive Post-Transplant Immunosuppression"],
    stayDuration: "Hospital: 14-21 days | India Stay: 4-8 weeks for stabilization",
    approxSavings: "Up to 70-80% lower than US/Europe transplant programs",
    demoNote: "Strict legal compliance: Organ transplants for international patients require legally related living donors and authorization committee clearance per Indian law."
  }
];

// Fictional Sample Doctor Profiles (Marked clearly as Demo Profile)
const SAMPLE_DOCTORS = [
  {
    id: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma (Demo)",
    designation: "Senior Consultant - Adult & Pediatric Cardiothoracic Surgery",
    specialty: "Cardiology",
    city: "Delhi NCR",
    experience: "25+ Years Experience (Demo)",
    qualifications: "MBBS, MS (Gen Surgery), MCh (CTVS), Fellowship (UK) [Demo Profile]",
    hospital: "Indraprastha Apollo & Fortis Network (Demo)",
    image: "assets/images/consultation.jpg",
    bio: "This is a fictional demo doctor profile created for initial design review. In the live version, verified profiles of accredited hospital department heads will be displayed."
  },
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen (Demo)",
    designation: "Director - Surgical Oncology & Robotic Cancer Surgery",
    specialty: "Oncology",
    city: "Mumbai",
    experience: "20+ Years Experience (Demo)",
    qualifications: "MBBS, MS, DNB (Surgical Oncology), FACS (USA) [Demo Profile]",
    hospital: "Tata Memorial / Kokilaben Dhirubhai Network (Demo)",
    image: "assets/images/consultation.jpg",
    bio: "Demo profile representing Indian cancer surgical specialists who lead international patient tumor boards and robotic oncology programs."
  },
  {
    id: "dr-vikram-mehta",
    name: "Dr. Vikram Mehta (Demo)",
    designation: "Chief of Joint Reconstruction & Spine Surgery",
    specialty: "Orthopaedics",
    city: "Bengaluru",
    experience: "22+ Years Experience (Demo)",
    qualifications: "MBBS, MS (Ortho), MCh, Fellowship in Robotic Arthroplasty [Demo Profile]",
    hospital: "Manipal Hospital / Narayana Health (Demo)",
    image: "assets/images/hero.jpg",
    bio: "Demo profile illustrating knee and hip joint replacement surgeons who specialize in rapid-recovery robotic surgeries for international visitors."
  },
  {
    id: "dr-priya-swaminathan",
    name: "Dr. Priya Swaminathan (Demo)",
    designation: "Head - Reproductive Endocrinology & IVF",
    specialty: "Fertility",
    city: "Chennai",
    experience: "18+ Years Experience (Demo)",
    qualifications: "MBBS, MD (OBGYN), Fellowship in Reproductive Medicine [Demo Profile]",
    hospital: "Apollo Greams / MGM Healthcare (Demo)",
    image: "assets/images/consultation.jpg",
    bio: "Demo profile representing fertility specialists who coordinate compliant international IVF cycles and preimplantation genetic screening."
  },
  {
    id: "dr-arun-kulkarni",
    name: "Dr. Arun Kulkarni (Demo)",
    designation: "Senior Director - Neurosurgery & Spine Surgery",
    specialty: "Neurosurgery",
    city: "Delhi NCR",
    experience: "26+ Years Experience (Demo)",
    qualifications: "MBBS, MS, MCh (Neurosurgery), FINR (Switzerland) [Demo Profile]",
    hospital: "Max Healthcare / Medanta The Medicity (Demo)",
    image: "assets/images/hero.jpg",
    bio: "Demo profile showcasing neurosurgeons specializing in minimally invasive brain tumor excision, DBS, and endoscopic spine surgery."
  },
  {
    id: "dr-sanjay-reddy",
    name: "Dr. Sanjay Reddy (Demo)",
    designation: "Director - Hepatobiliary & Liver Transplantation",
    specialty: "Transplant",
    city: "Hyderabad",
    experience: "24+ Years Experience (Demo)",
    qualifications: "MBBS, MS, FRCS (Edin), ASTS Transplant Fellowship [Demo Profile]",
    hospital: "Yashoda Hospitals / Apollo Health City (Demo)",
    image: "assets/images/hospitals-india.jpg",
    bio: "Demo profile showcasing living donor organ transplant leadership with strict regulatory and ethical adherence."
  }
];

// Fictional Sample Hospital Profiles (Marked clearly as Demo Profile)
const SAMPLE_HOSPITALS = [
  {
    id: "delhi-medicity",
    name: "Capital Multi-Specialty Health City (Demo)",
    city: "Delhi NCR (Gurugram)",
    beds: "1,200+ Beds (Demo)",
    accreditation: "JCI & NABH Accredited (Demo)",
    specialties: "Cardiology, Oncology, Neuro, Transplants, Orthopaedics",
    image: "assets/images/hospitals-india.jpg",
    description: "Fictional flagship multi-specialty institution representing Delhi NCR's sprawling health cities with dedicated international patient lounges, translative concierges, and helipad facilities."
  },
  {
    id: "mumbai-super-care",
    name: "Western Metro Premier Hospital (Demo)",
    city: "Mumbai",
    beds: "750+ Beds (Demo)",
    accreditation: "JCI & CAP Accredited (Demo)",
    specialties: "Oncology, Cardiology, Robotic Surgery, Bariatric Care",
    image: "assets/images/hero.jpg",
    description: "Demo hospital profile representing Mumbai's quaternary care institutions known for cutting-edge robotic surgical suites and immediate coastal airport access."
  },
  {
    id: "chennai-medical-center",
    name: "Southern Institute of Medical Excellence (Demo)",
    city: "Chennai",
    beds: "900+ Beds (Demo)",
    accreditation: "JCI & NABH Accredited (Demo)",
    specialties: "Organ Transplants, Cardiology, Eye Care, Orthopaedics",
    image: "assets/images/hospitals-india.jpg",
    description: "Demo profile representing Chennai — known as the healthcare capital of India — famous for high surgical volume, top transplant outcomes, and clinical warmth."
  },
  {
    id: "bengaluru-health-city",
    name: "Tech-City Quaternary Health Campus (Demo)",
    city: "Bengaluru",
    beds: "1,000+ Beds (Demo)",
    accreditation: "JCI & ISO 9001 (Demo)",
    specialties: "Cardiology, Neurosurgery, Robotic Joint Surgery, Oncology",
    image: "assets/images/hero.jpg",
    description: "Demo representation of Bengaluru's ultra-modern medical centers utilizing robotic technology, AI-assisted diagnostics, and world-class inpatient rehabilitation."
  },
  {
    id: "hyderabad-global-med",
    name: "Deccan Advanced Healthcare City (Demo)",
    city: "Hyderabad",
    beds: "850+ Beds (Demo)",
    accreditation: "NABH & JCI Candidate (Demo)",
    specialties: "Gastroenterology, Liver Transplant, Urology, Nephrology",
    image: "assets/images/hospitals-india.jpg",
    description: "Demo profile depicting Hyderabad's leading medical infrastructure, offering specialized GI endoscopy centers and low-cost comprehensive healthcare suites."
  }
];

// Healthcare Destination Cities in India
const INDIAN_CITIES = [
  {
    id: "delhi",
    name: "Delhi NCR",
    subtext: "Gurugram, New Delhi & Noida",
    tagline: "India's Largest Quaternary Healthcare Hub",
    badge: "Direct Global Flights & JCI Hubs",
    highlights: "Home to India's largest multi-specialty health cities like Medanta, Fortis, Apollo, and Max Healthcare with direct connections worldwide.",
    image: "assets/images/hospitals-india.jpg"
  },
  {
    id: "mumbai",
    name: "Mumbai",
    subtext: "Financial & Medical Capital of Western India",
    tagline: "Pioneers in Oncology & Advanced Robotic Surgery",
    badge: "World-Renowned Specialists",
    highlights: "Leading cancer treatment institutes (Tata Memorial, Kokilaben) and premier cardiology centers with rich hospitality.",
    image: "assets/images/hero.jpg"
  },
  {
    id: "chennai",
    name: "Chennai",
    subtext: "The Healthcare Capital of India",
    tagline: "Global Benchmarks for Organ Transplants & Heart Surgery",
    badge: "Most Visited Medical City",
    highlights: "Attracts over 40% of all medical tourists to India due to exceptional clinical track records, Apollo Greams, and MGM Healthcare.",
    image: "assets/images/hospitals-india.jpg"
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    subtext: "The Technology & Medical Innovation Hub",
    tagline: "Robotic Surgery & Advanced Cardiac Care",
    badge: "High-Tech Medical Infrastructure",
    highlights: "Pioneered high-volume cardiac surgery (Narayana Health) and precision robotic orthopaedics in pleasant year-round weather.",
    image: "assets/images/consultation.jpg"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    subtext: "The City of Pearls & Liver Transplants",
    tagline: "World-Class GI, Transplants & Affordable Quaternary Care",
    badge: "Rapidly Growing Medical Hub",
    highlights: "Renowned for Asian Institute of Gastroenterology, Yashoda, and Apollo Health City with world-leading living-donor liver programs.",
    image: "assets/images/hospitals-india.jpg"
  }
];

// Initialize FAQ Accordions
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Render Treatments Grid on Homepage
function renderHomeTreatments(containerId = 'home-treatments-grid') {
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
      <div class="treatment-footer">
        <a href="treatments.html?category=${t.id}" class="treatment-link">
          Learn More 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
        <button type="button" class="btn btn-sm btn-outline" style="padding:0.35rem 0.75rem; font-size:0.8rem;" onclick="openConsultationModal('${t.id}')">
          Enquire
        </button>
      </div>
    </div>
  `).join('');
}

// Render Doctors Cards
function renderDoctorCards(containerId = 'doctors-grid', filterSpecialty = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filterSpecialty === 'all' 
    ? SAMPLE_DOCTORS 
    : SAMPLE_DOCTORS.filter(d => d.specialty.toLowerCase() === filterSpecialty.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:2rem; color:var(--color-text-muted);">No demo doctor profiles found for this specialty.</p>`;
    return;
  }

  container.innerHTML = filtered.map(doc => `
    <div class="doctor-card">
      <div class="card-img-wrap">
        <img src="${doc.image}" alt="${doc.name}" loading="lazy" />
        <span class="demo-badge">Demo Profile</span>
        <span class="card-location-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></svg>
          ${doc.city}
        </span>
      </div>
      <div class="card-body">
        <span class="card-specialty">${doc.specialty} Specialist</span>
        <h3 class="card-title">${doc.name}</h3>
        <p class="card-desc" style="font-size:0.85rem; color:var(--color-forest-700); font-weight:600; margin-bottom:0.5rem;">
          ${doc.designation}
        </p>
        <ul class="card-meta-list">
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${doc.experience}
          </li>
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ${doc.qualifications}
          </li>
        </ul>
        <div style="margin-top:auto; display:flex; gap:0.5rem;">
          <button type="button" class="btn btn-primary btn-sm" style="flex:1;" onclick="openDoctorModal('${doc.id}')">
            View Profile
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="openConsultationModal('${doc.specialty.toLowerCase()}')">
            Request Consult
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Hospital Cards
function renderHospitalCards(containerId = 'hospitals-grid', filterCity = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filterCity === 'all'
    ? SAMPLE_HOSPITALS
    : SAMPLE_HOSPITALS.filter(h => h.city.toLowerCase().includes(filterCity.toLowerCase()));

  container.innerHTML = filtered.map(h => `
    <div class="hospital-card">
      <div class="card-img-wrap">
        <img src="${h.image}" alt="${h.name}" loading="lazy" />
        <span class="demo-badge">Demo Profile</span>
        <span class="card-location-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></svg>
          ${h.city}
        </span>
      </div>
      <div class="card-body">
        <span class="card-specialty text-gold">${h.accreditation}</span>
        <h3 class="card-title">${h.name}</h3>
        <p class="card-desc">${h.description}</p>
        <ul class="card-meta-list">
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 21V11M10 21V11M14 21V11M18 21V11"/></svg>
            Capacity: ${h.beds}
          </li>
          <li>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Key Centers: ${h.specialties}
          </li>
        </ul>
        <div style="margin-top:auto; display:flex; gap:0.5rem;">
          <button type="button" class="btn btn-primary btn-sm" style="flex:1;" onclick="openHospitalModal('${h.id}')">
            View Hospital Info
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="openConsultationModal()">
            Hospital Enquiry
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render City Cards
function renderCityCards(containerId = 'cities-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = INDIAN_CITIES.map(c => `
    <div class="city-card" onclick="location.href='why-india.html#${c.id}'">
      <div class="city-bg" style="background-image: url('${c.image}');"></div>
      <div class="city-overlay">
        <span class="city-badge">${c.badge}</span>
        <h3 class="city-name">${c.name}</h3>
        <div class="city-tagline">${c.tagline}</div>
        <p style="font-size:0.8rem; color:#D2E4DC; line-height:1.4;">${c.highlights}</p>
      </div>
    </div>
  `).join('');
}

// Generic Doctor Modal
function openDoctorModal(docId) {
  const doc = SAMPLE_DOCTORS.find(d => d.id === docId);
  if (!doc) return;

  const modalHtml = `
    <div class="modal-overlay open" id="doctor-modal" role="dialog">
      <div class="modal-box">
        <button class="modal-close-btn" onclick="document.getElementById('doctor-modal').remove()">&times;</button>
        <div class="modal-header">
          <span class="demo-badge" style="position:static; display:inline-block; margin-bottom:0.5rem;">Demo Profile</span>
          <h3 class="text-forest">${doc.name}</h3>
          <p style="font-size:0.9rem; color:var(--color-forest-700); font-weight:600;">${doc.designation}</p>
        </div>
        <div class="modal-body">
          <div style="background:var(--color-forest-50); border:1px solid var(--color-forest-100); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.25rem;">
            <p style="font-size:0.85rem; color:var(--color-text-main); margin-bottom:0.5rem;">
              <strong>City / Region:</strong> ${doc.city}
            </p>
            <p style="font-size:0.85rem; color:var(--color-text-main); margin-bottom:0.5rem;">
              <strong>Hospital Affiliation:</strong> ${doc.hospital}
            </p>
            <p style="font-size:0.85rem; color:var(--color-text-main); margin-bottom:0.5rem;">
              <strong>Qualifications:</strong> ${doc.qualifications}
            </p>
            <p style="font-size:0.85rem; color:var(--color-text-main); margin:0;">
              <strong>Clinical Experience:</strong> ${doc.experience}
            </p>
          </div>
          <p style="font-size:0.925rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.5rem;">
            ${doc.bio}
          </p>
          <div style="background:#FFF9E6; border:1px solid #F1DEAC; border-radius:var(--radius-sm); padding:0.75rem 1rem; font-size:0.8rem; color:#8C6207; margin-bottom:1.5rem;">
            <strong>Prototype Disclaimer:</strong> Doctor profiles shown in this version are sample demonstrations. Once hospital tie-ups are ratified, official CVs and verified hospital affiliations will be presented.
          </div>
          <button class="btn btn-primary" style="width:100%;" onclick="document.getElementById('doctor-modal').remove(); openConsultationModal('${doc.specialty.toLowerCase()}');">
            Request Case Review with This Specialty
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// Generic Hospital Modal
function openHospitalModal(hospitalId) {
  const h = SAMPLE_HOSPITALS.find(item => item.id === hospitalId);
  if (!h) return;

  const modalHtml = `
    <div class="modal-overlay open" id="hospital-modal" role="dialog">
      <div class="modal-box">
        <button class="modal-close-btn" onclick="document.getElementById('hospital-modal').remove()">&times;</button>
        <div class="modal-header">
          <span class="demo-badge" style="position:static; display:inline-block; margin-bottom:0.5rem;">Demo Profile</span>
          <h3 class="text-forest">${h.name}</h3>
          <p style="font-size:0.9rem; color:var(--color-gold-600); font-weight:700;">${h.accreditation} &bull; ${h.city}</p>
        </div>
        <div class="modal-body">
          <img src="${h.image}" alt="${h.name}" style="border-radius:var(--radius-md); height:180px; width:100%; object-fit:cover; margin-bottom:1.25rem;" />
          <p style="font-size:0.925rem; color:var(--color-text-muted); line-height:1.6; margin-bottom:1.25rem;">
            ${h.description}
          </p>
          <div style="background:var(--color-forest-50); border:1px solid var(--color-forest-100); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.25rem; font-size:0.85rem;">
            <p style="margin-bottom:0.4rem;"><strong>Facility Size:</strong> ${h.beds}</p>
            <p style="margin-bottom:0.4rem;"><strong>Key Departments:</strong> ${h.specialties}</p>
            <p style="margin:0;"><strong>International Services:</strong> Airport transfers, dedicated translators, visa invitation letters, international cuisine.</p>
          </div>
          <div style="background:#FFF9E6; border:1px solid #F1DEAC; border-radius:var(--radius-sm); padding:0.75rem 1rem; font-size:0.8rem; color:#8C6207; margin-bottom:1.5rem;">
            <strong>Prototype Notice:</strong> This hospital listing is a demo placeholder. MEDMOST coordinates with verified accredited hospital centers upon confirmed patient enquiry.
          </div>
          <button class="btn btn-primary" style="width:100%;" onclick="document.getElementById('hospital-modal').remove(); openConsultationModal();">
            Enquire About This Hospital
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// QR Code Demo Popup
function showQrDemo() {
  const modalHtml = `
    <div class="modal-overlay open" id="qr-modal" role="dialog">
      <div class="modal-box" style="max-width:440px; text-align:center;">
        <button class="modal-close-btn" onclick="document.getElementById('qr-modal').remove()">&times;</button>
        <div class="modal-header">
          <h3 class="text-forest">MEDMOST Digital Card QR</h3>
          <p style="font-size:0.85rem; color:var(--color-text-muted);">Sample Business Card QR Code Destination</p>
        </div>
        <div class="modal-body">
          <div style="background:#FFFFFF; padding:1.5rem; display:inline-block; border:2px dashed var(--color-gold-400); border-radius:var(--radius-lg); margin-bottom:1rem;">
            <svg width="160" height="160" viewBox="0 0 200 200" fill="#0E4D38">
              <!-- Replicating crisp QR pattern -->
              <rect x="20" y="20" width="50" height="50" fill="none" stroke="#0E4D38" stroke-width="10"/>
              <rect x="35" y="35" width="20" height="20" fill="#0E4D38"/>
              <rect x="130" y="20" width="50" height="50" fill="none" stroke="#0E4D38" stroke-width="10"/>
              <rect x="145" y="35" width="20" height="20" fill="#0E4D38"/>
              <rect x="20" y="130" width="50" height="50" fill="none" stroke="#0E4D38" stroke-width="10"/>
              <rect x="35" y="145" width="20" height="20" fill="#0E4D38"/>
              <rect x="85" y="25" width="15" height="15"/>
              <rect x="85" y="55" width="15" height="25"/>
              <rect x="25" y="85" width="20" height="15"/>
              <rect x="60" y="85" width="25" height="15"/>
              <rect x="95" y="95" width="15" height="15"/>
              <rect x="120" y="85" width="25" height="20"/>
              <rect x="160" y="85" width="15" height="30"/>
              <rect x="85" y="130" width="20" height="20"/>
              <rect x="115" y="125" width="25" height="15"/>
              <rect x="150" y="130" width="25" height="25"/>
              <rect x="85" y="165" width="30" height="15"/>
              <rect x="135" y="165" width="40" height="15"/>
            </svg>
          </div>
          <p style="font-size:0.9rem; color:var(--color-forest-900); font-weight:600; margin-bottom:0.5rem;">
            Destination URL: Pending User Confirmation
          </p>
          <p style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:1.5rem;">
            As requested, this area is a placeholder until you provide the final destination link (e.g. WhatsApp vCard, website link, or digital brochure).
          </p>
          <button class="btn btn-primary" onclick="document.getElementById('qr-modal').remove()">
            Got It
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}
