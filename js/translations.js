/**
 * MEDMOST - Multilingual Translations Dictionary
 * Supports English (en), Hindi (hi), Russian (ru), and Arabic (ar with RTL)
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_treatments: "Treatments",
    nav_doctors: "Doctors",
    nav_hospitals: "Hospitals",
    nav_why_india: "Why India?",
    nav_how_it_works: "How It Works",
    nav_patient_services: "Patient Services",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_consultation: "Free Consultation",
    nav_desk: "24/7 International Patient Assistance Desk",
    nav_whatsapp: "WhatsApp Support Available",
    nav_login: "Login",
    nav_signup: "Sign Up",
    nav_dashboard: "Dashboard",
    nav_logout: "Log Out",
    
    // Hero
    hero_badge: "International Patient Healthcare Partner",
    hero_title: "Your Trusted Partner for",
    hero_title_highlight: "Medical Treatment in India",
    hero_desc: "We help international patients explore quality treatment options in India, connect with healthcare providers, and coordinate every step of their medical journey.",
    btn_explore_treatments: "Explore Treatments",
    btn_meet_doctor: "Meet Our Doctor",
    btn_get_consultation: "Get a Free Consultation",
    hero_quick_title: "Request Treatment Estimate",
    hero_quick_subtitle: "Receive hospital options and preliminary guidance without obligation.",
    hero_stat_procedures: "500+ Procedures Coordinated",
    hero_stat_savings: "60-80% Cost Savings vs Western Care",
    hero_stat_accredited: "JCI & NABH Accredited Centers (Demo)",

    // Sections
    sec_why_title: "Why Choose MEDMOST?",
    sec_why_subtitle: "Patient Facilitation Services",
    sec_why_desc: "Navigating medical care across borders requires dedicated coordination. We assist international patients with every facet of their trip to India.",
    
    sec_treatments_title: "Major Treatment Categories",
    sec_treatments_subtitle: "Specialty Directory",
    sec_treatments_desc: "Explore advanced medical and surgical procedures available through leading healthcare institutes in India.",
    btn_view_all_treatments: "View All 12 Treatment Categories",
    
    sec_doctors_title: "Our Medical Advisory & Doctors",
    sec_doctors_subtitle: "Experienced Practitioners",
    sec_doctors_desc: "Meet our dedicated doctors committed to helping international patients access world-class clinical guidance.",
    btn_view_profile: "View Profile",
    btn_request_consult: "Request Consultation",

    sec_how_title: "How It Works",
    sec_how_subtitle: "4-Step Patient Journey",
    sec_how_desc: "We streamline your healthcare journey from your home country to India and back into four simple steps.",
    step1_title: "1. Choose Your Treatment",
    step1_desc: "Submit your diagnosis and current medical reports for preliminary case review.",
    step2_title: "2. Receive Doctor Opinions",
    step2_desc: "Get preliminary clinical opinions, estimated costs, and recommended hospital options.",
    step3_title: "3. Visa & Travel Coordination",
    step3_desc: "Receive assistance with hospital Visa Invitation Letters (VIL) and travel guidance.",
    step4_title: "4. Hospital Care & Follow-Up",
    step4_desc: "Receive coordinated hospital admission, language support, and post-discharge follow-up.",

    sec_services_title: "International Patient Services",
    sec_services_subtitle: "Comprehensive Care",
    sec_services_desc: "We assist with hospital coordination, travel planning, airport reception, accommodation guidance, and language translation.",

    sec_destinations_title: "India Healthcare Destinations",
    sec_destinations_subtitle: "Quaternary Hubs",
    sec_destinations_desc: "Explore India's premier medical travel cities: Delhi NCR, Mumbai, Chennai, Bengaluru, and Hyderabad.",

    sec_faq_title: "Frequently Asked Questions",
    sec_faq_subtitle: "Clear & Honest Answers",

    // Forms
    form_fullname: "Full Name *",
    form_country: "Country of Residence *",
    form_phone: "WhatsApp or Phone Number *",
    form_email: "Email Address *",
    form_treatment: "Preferred Treatment Category *",
    form_city: "Preferred City (Optional)",
    form_message: "Short Message / Medical Query",
    form_consent: "I consent to MEDMOST contacting me regarding my medical travel query. (Demo form - no real health data stored).",
    form_submit: "Submit Free Consultation Request",

    // Footer
    footer_desc: "MEDMOST is an independent international medical travel facilitation service connecting global patients with accredited hospitals and doctors in India.",
    footer_disclaimer: "Medical Disclaimer: MEDMOST is a medical travel facilitator, not a hospital or direct medical care provider. All medical decisions and treatments are rendered solely by accredited partner hospitals and licensed doctors in India.",
    footer_rights: "All rights reserved. World-Class Medical Treatment in India."
  },

  hi: {
    // Navigation
    nav_home: "होम",
    nav_treatments: "उपचार",
    nav_doctors: "डॉक्टर्स",
    nav_hospitals: "अस्पताल",
    nav_why_india: "भारत क्यों?",
    nav_how_it_works: "यह कैसे काम करता है",
    nav_patient_services: "मरीज सेवाएं",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",
    nav_consultation: "निःशुल्क परामर्श",
    nav_desk: "24/7 अंतर्राष्ट्रीय मरीज सहायता डेस्क",
    nav_whatsapp: "व्हाट्सएप सहायता उपलब्ध",
    nav_login: "लॉग इन",
    nav_signup: "साइन अप",
    nav_dashboard: "डैशबोर्ड",
    nav_logout: "लॉग आउट",

    // Hero
    hero_badge: "अंतर्राष्ट्रीय मरीज स्वास्थ्य सेवा सहयोगी",
    hero_title: "भारत में चिकित्सा उपचार के लिए आपका",
    hero_title_highlight: "विश्वसनीय सहयोगी",
    hero_desc: "हम अंतर्राष्ट्रीय मरीजों को भारत में गुणवत्तापूर्ण उपचार विकल्प तलाशने, स्वास्थ्य सेवा प्रदाताओं से जुड़ने और उनकी चिकित्सा यात्रा के हर कदम का समन्वय करने में मदद करते हैं।",
    btn_explore_treatments: "उपचार देखें",
    btn_meet_doctor: "हमारे डॉक्टर से मिलें",
    btn_get_consultation: "निःशुल्क परामर्श लें",
    hero_quick_title: "उपचार अनुमान का अनुरोध करें",
    hero_quick_subtitle: "बिना किसी बाध्यता के अस्पताल विकल्प और प्रारंभिक मार्गदर्शन प्राप्त करें।",
    hero_stat_procedures: "500+ समन्वित प्रक्रियाएं",
    hero_stat_savings: "60-80% लागत बचत",
    hero_stat_accredited: "JCI और NABH मान्यता प्राप्त केंद्र",

    // Sections
    sec_why_title: "MEDMOST क्यों चुनें?",
    sec_why_subtitle: "मरीज सुविधा सेवाएं",
    sec_why_desc: "सीमा पार चिकित्सा देखभाल के लिए समर्पित समन्वय की आवश्यकता होती है। हम भारत की यात्रा के हर पहलू में अंतर्राष्ट्रीय मरीजों की सहायता करते हैं।",
    
    sec_treatments_title: "प्रमुख उपचार श्रेणियां",
    sec_treatments_subtitle: "विशेषज्ञता निर्देशिका",
    sec_treatments_desc: "भारत के अग्रणी स्वास्थ्य संस्थानों के माध्यम से उपलब्ध उन्नत चिकित्सा और सर्जिकल प्रक्रियाओं का अन्वेषण करें।",
    btn_view_all_treatments: "सभी 12 उपचार श्रेणियां देखें",
    
    sec_doctors_title: "हमारी चिकित्सा सलाहकार टीम",
    sec_doctors_subtitle: "अनुभवी चिकित्सक",
    sec_doctors_desc: "हमारे समर्पित डॉक्टरों से मिलें जो अंतर्राष्ट्रीय मरीजों को विश्व स्तरीय मार्गदर्शन प्रदान करने के लिए प्रतिबद्ध हैं।",
    btn_view_profile: "प्रोफ़ाइल देखें",
    btn_request_consult: "परामर्श का अनुरोध करें",

    sec_how_title: "यह कैसे काम करता है",
    sec_how_subtitle: "4-चरणीय मरीज यात्रा",
    sec_how_desc: "हम आपके गृह देश से भारत और सुरक्षित वापसी तक आपकी स्वास्थ्य यात्रा को चार सरल चरणों में सुव्यवस्थित करते हैं।",
    step1_title: "1. अपना उपचार चुनें",
    step1_desc: "प्रारंभिक समीक्षा के लिए अपना निदान और वर्तमान मेडिकल रिपोर्ट साझा करें।",
    step2_title: "2. डॉक्टर की राय प्राप्त करें",
    step2_desc: "प्रारंभिक चिकित्सा राय, अनुमानित लागत और अनुशंसित अस्पताल विकल्प प्राप्त करें।",
    step3_title: "3. वीजा और यात्रा समन्वय",
    step3_desc: "अस्पताल वीजा आमंत्रण पत्र (VIL) और यात्रा मार्गदर्शन में सहायता प्राप्त करें।",
    step4_title: "4. अस्पताल देखभाल और अनुवर्ती",
    step4_desc: "अस्पताल में भर्ती, भाषा सहायता और छुट्टी के बाद अनुवर्ती परामर्श प्राप्त करें।",

    sec_services_title: "अंतर्राष्ट्रीय मरीज सेवाएं",
    sec_services_subtitle: "व्यापक देखभाल",
    sec_services_desc: "हम अस्पताल समन्वय, यात्रा योजना, हवाई अड्डा स्वागत, आवास और अनुवाद में सहायता करते हैं।",

    sec_destinations_title: "भारत के स्वास्थ्य सेवा केंद्र",
    sec_destinations_subtitle: "प्रमुख शहर",
    sec_destinations_desc: "भारत के प्रमुख चिकित्सा पर्यटन शहरों का अन्वेषण करें: दिल्ली एनसीआर, मुंबई, चेन्नई, बेंगलुरु और हैदराबाद।",

    sec_faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    sec_faq_subtitle: "स्पष्ट और ईमानदार उत्तर",

    // Forms
    form_fullname: "पूरा नाम *",
    form_country: "निवास का देश *",
    form_phone: "व्हाट्सएप या फोन नंबर *",
    form_email: "ईमेल पता *",
    form_treatment: "पसंदीदा उपचार श्रेणी *",
    form_city: "पसंदीदा शहर (वैकल्पिक)",
    form_message: "संक्षिप्त संदेश / मेडिकल प्रश्न",
    form_consent: "मैं मेरी चिकित्सा यात्रा के संबंध में MEDMOST से संपर्क करने की सहमति देता/देती हूँ। (डेमो फॉर्म)।",
    form_submit: "निःशुल्क परामर्श अनुरोध भेजें",

    // Footer
    footer_desc: "MEDMOST एक स्वतंत्र चिकित्सा यात्रा सुविधा सेवा है जो वैश्विक मरीजों को भारत के मान्यता प्राप्त अस्पतालों से जोड़ती है।",
    footer_disclaimer: "चिकित्सा अस्वीकरण: MEDMOST एक चिकित्सा सुविधा प्रदाता है, अस्पताल नहीं। सभी चिकित्सा निर्णय और उपचार केवल भारत में लाइसेंस प्राप्त डॉक्टरों द्वारा दिए जाते हैं।",
    footer_rights: "सर्वाधिकार सुरक्षित। भारत में विश्व स्तरीय चिकित्सा उपचार।"
  },

  ru: {
    // Navigation
    nav_home: "Главная",
    nav_treatments: "Лечение",
    nav_doctors: "Врачи",
    nav_hospitals: "Больницы",
    nav_why_india: "Почему Индия?",
    nav_how_it_works: "Как это работает",
    nav_patient_services: "Услуги пациентам",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_consultation: "Консультация",
    nav_desk: "Круглосуточная служба поддержки иностранных пациентов",
    nav_whatsapp: "Поддержка в WhatsApp доступна",
    nav_login: "Войти",
    nav_signup: "Регистрация",
    nav_dashboard: "Кабинет",
    nav_logout: "Выйти",

    // Hero
    hero_badge: "Партнер по медицинскому туризму",
    hero_title: "Ваш надежный партнер по",
    hero_title_highlight: "Лечению в Индии",
    hero_desc: "Мы помогаем иностранным пациентам находить качественные варианты лечения в Индии, связываться с клиниками и координировать медицинскую поездку.",
    btn_explore_treatments: "Каталог лечения",
    btn_meet_doctor: "Наш ведущий врач",
    btn_get_consultation: "Бесплатная консультация",
    hero_quick_title: "Запросить расчет стоимости",
    hero_quick_subtitle: "Получите варианты клиник и предварительные консультации без обязательств.",
    hero_stat_procedures: "500+ организованных процедур",
    hero_stat_savings: "Экономия 60-80% по сравнению с Западом",
    hero_stat_accredited: "Аккредитованные клиники JCI и NABH",

    // Sections
    sec_why_title: "Почему выбирают MEDMOST?",
    sec_why_subtitle: "Услуги координации пациентов",
    sec_why_desc: "Лечение за рубежом требует профессиональной организации. Мы сопровождаем иностранных пациентов на каждом этапе поездки в Индию.",
    
    sec_treatments_title: "Основные направления лечения",
    sec_treatments_subtitle: "Каталог специализаций",
    sec_treatments_desc: "Передовые медицинские и хирургические процедуры в ведущих клиниках Индии.",
    btn_view_all_treatments: "Все 12 направлений лечения",
    
    sec_doctors_title: "Наши врачи и консультанты",
    sec_doctors_subtitle: "Квалифицированные специалисты",
    sec_doctors_desc: "Познакомьтесь с нашими врачами, помогающими пациентам получить экспертное медицинское сопровождение.",
    btn_view_profile: "Смотреть профиль",
    btn_request_consult: "Запросить консультацию",

    sec_how_title: "Как это работает",
    sec_how_subtitle: "4 простых шага",
    sec_how_desc: "Мы организуем вашу поездку на лечение от первичной заявки до благополучного возвращения домой.",
    step1_title: "1. Выберите лечение",
    step1_desc: "Отправьте свой диагноз и медицинские выписки для предварительного анализа.",
    step2_title: "2. Получите план и смету",
    step2_desc: "Мнения индийских докторов, расчет стоимости и варианты клиник.",
    step3_title: "3. Визовая поддержка",
    step3_desc: "Официальное визовое приглашение от клиники (VIL) и планирование поездки.",
    step4_title: "4. Госпитализация и выписка",
    step4_desc: "Встреча в аэропорту, переводчик, пребывание в клинике и поддержка после возвращения.",

    sec_services_title: "Услуги для иностранных пациентов",
    sec_services_subtitle: "Забота и комфорт",
    sec_services_desc: "Координация приемов, визовая поддержка, встреча в аэропорту, подбор жилья и переводчики.",

    sec_destinations_title: "Медицинские центры Индии",
    sec_destinations_subtitle: "Главные города",
    sec_destinations_desc: "Ведущие медицинские мегаполисы: Дели NCR, Мумбаи, Ченнаи, Бангалор и Хайдарабад.",

    sec_faq_title: "Часто задаваемые вопросы",
    sec_faq_subtitle: "Ответы на главные вопросы",

    // Forms
    form_fullname: "ФИО *",
    form_country: "Страна проживания *",
    form_phone: "WhatsApp или номер телефона *",
    form_email: "Электронная почта *",
    form_treatment: "Направление лечения *",
    form_city: "Желаемый город (необязательно)",
    form_message: "Краткое описание диагноза",
    form_consent: "Я даю согласие на связь со мной по поводу медицинской поездки (Демо-форма).",
    form_submit: "Отправить запрос на консультацию",

    // Footer
    footer_desc: "MEDMOST — независимый координатор медицинского туризма, соединяющий пациентов с ведущими клиниками Индии.",
    footer_disclaimer: "Отказ от ответственности: MEDMOST является организатором медицинских поездок, а не клиникой. Все медицинские услуги оказываются сертифицированными врачами в Индии.",
    footer_rights: "Все права защищены. Качественное медицинское лечение в Индии."
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_treatments: "العلاجات",
    nav_doctors: "الأطباء",
    nav_hospitals: "المستشفيات",
    nav_why_india: "لماذا الهند؟",
    nav_how_it_works: "كيف نعمل",
    nav_patient_services: "خدمات المرضى",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_consultation: "استشارة مجانية",
    nav_desk: "مكتب مساعدة المرضى الدوليين على مدار الساعة",
    nav_whatsapp: "الدعم عبر واتساب متاح",
    nav_login: "تسجيل الدخول",
    nav_signup: "إنشاء حساب",
    nav_dashboard: "لوحة التحكم",
    nav_logout: "تسجيل الخروج",

    // Hero
    hero_badge: "شريك الرعاية الصحية للمرضى الدوليين",
    hero_title: "شريكك الموثوق به لـ",
    hero_title_highlight: "العلاج الطبي في الهند",
    hero_desc: "نساعد المرضى الدوليين في استكشاف أفضل خيارات العلاج في الهند، والتواصل مع كبار الأطباء والمستشفيات وتنسيق كل خطوة في رحلتهم العلاجية.",
    btn_explore_treatments: "استكشف العلاجات",
    btn_meet_doctor: "تعرف على طبيبنا",
    btn_get_consultation: "احصل على استشارة مجانية",
    hero_quick_title: "طلب تقدير تكلفة العلاج",
    hero_quick_subtitle: "احصل على خيارات المستشفيات والتوجيه الأولي دون أي التزام.",
    hero_stat_procedures: "+500 إجراء طبي منسق",
    hero_stat_savings: "توفير 60-80% مقارنة بالدول الغربية",
    hero_stat_accredited: "مستشفيات معتمدة دولياً من JCI وNABH",

    // Sections
    sec_why_title: "لماذا تختار ميدموست؟",
    sec_why_subtitle: "خدمات تسهيل علاج المرضى",
    sec_why_desc: "السفر للعلاج بالخارج يحتاج إلى تنسيق محترف وموثوق. نحن نساعد المرضى الدوليين في كل خطوة من رحلتهم إلى الهند.",
    
    sec_treatments_title: "أهم التخصصات الطبية",
    sec_treatments_subtitle: "دليل التخصصات",
    sec_treatments_desc: "استكشف أحدث الإجراءات الطبية والجراحية المتاحة في أرقى مستشفيات الهند.",
    btn_view_all_treatments: "عرض جميع التخصصات الـ 12",
    
    sec_doctors_title: "الأطباء والمستشارون الطبيون",
    sec_doctors_subtitle: "أطباء ذوو خبرة",
    sec_doctors_desc: "تعرف على أطبائنا المتفانين في توفير أفضل استشارات وتوجيهات علاجية للمرضى الدوليين.",
    btn_view_profile: "عرض الملف الشخصي",
    btn_request_consult: "طلب استشارة",

    sec_how_title: "كيف تسير رحلتك العلاجية",
    sec_how_subtitle: "4 خطوات بسيطة",
    sec_how_desc: "ننظم رحلتك العلاجية من بلدك إلى الهند وحتى عودتك سالماً في أربع خطوات ميسرة.",
    step1_title: "1. اختر علاجك",
    step1_desc: "أرسل تقاريرك الطبية الحالية للحصول على دراسة مبدئية من الأطباء.",
    step2_title: "2. استلم الآراء الطبية والأسعار",
    step2_desc: "احصل على الخطة العلاجية وتقديرات التكلفة وأفضل المستشفيات المقترحة.",
    step3_title: "3. التأشيرة وتنسيق السفر",
    step3_desc: "نوفر لك خطاب الدعوة الطبية (VIL) للحصول على تأشيرة العلاج وتذاكر الطيران.",
    step4_title: "4. الدخول للمستشفى والرعاية اللاحقة",
    step4_desc: "استقبال بالمطار، مترجم خاص، دخول المستشفى والمتابعة بعد العودة إلى وطنك.",

    sec_services_title: "خدمات المرضى الدوليين",
    sec_services_subtitle: "رعاية شاملة",
    sec_services_desc: "تنسيق مواعيد المستشفيات، ترتيبات السفر، الاستقبال في المطار، الإقامة والمساعدة اللغوية.",

    sec_destinations_title: "وجهات العلاج في الهند",
    sec_destinations_subtitle: "المدن الطبية الرائدة",
    sec_destinations_desc: "اكتشف المدن الطبية الكبرى: دلهي، مومباي، تشيناي، بنغالور، وحيدر أباد.",

    sec_faq_title: "الأسئلة الشائعة",
    sec_faq_subtitle: "إجابات واضحة وشفافة",

    // Forms
    form_fullname: "الاسم الكامل *",
    form_country: "بلد الإقامة *",
    form_phone: "رقم الواتساب أو الهاتف *",
    form_email: "البريد الإلكتروني *",
    form_treatment: "التخصص الطبي المطلوب *",
    form_city: "المدينة المفضلة (اختياري)",
    form_message: "وصف موجز للحالة المرضية",
    form_consent: "أوافق على تواصل ميدموست معي بشأن استفسار العلاج (نموذج تجريبي).",
    form_submit: "إرسال طلب الاستشارة المجانية",

    // Footer
    footer_desc: "ميدموست هي خدمة وساطة وتنسيق سياحة علاجية مستقلة تربط المرضى حول العالم بأفضل المستشفيات المعتمدة في الهند.",
    footer_disclaimer: "إخلاء مسؤولية طبية: ميدموست وسيط وميسر سفر طبي وليست مستشفى. جميع القرارات الطبية والعلاجات يقدمها أطباء مرخصون في المستشفيات بالهند.",
    footer_rights: "جميع الحقوق محفوظة. علاج طبي بمستوى عالمي في الهند."
  }
};

// Current active language getter/setter
function getCurrentLanguage() {
  return localStorage.getItem('medmost_lang') || 'en';
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  localStorage.setItem('medmost_lang', lang);
  applyTranslations();
  
  // RTL handling for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  // Update language select dropdowns if present
  const selectors = document.querySelectorAll('.lang-select');
  selectors.forEach(sel => {
    sel.value = lang;
  });
}

function applyTranslations() {
  const lang = getCurrentLanguage();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Apply to all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Apply to placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}
