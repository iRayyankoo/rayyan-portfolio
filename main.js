/**
 * Rayyan Portfolio - Main JavaScript
 * Handles i18n, animations, filtering, interactions, and performance optimizations.
 */

// ==========================================
// 1. Translations (i18n)
// ==========================================
const translations = {
    ar: {
        // Nav
        nav_logo: "ريان الضحيان",
        nav_about: "نبذة عني",
        nav_services: "الخدمات",
        nav_projects: "المشاريع الرقمية",
        nav_branding: "الهوية البصرية",
        nav_campaigns: "حملات إبداعية",
        nav_contact: "تواصل معي",
        
        // Hero
        hero_badge: "أخصائي إعلام رقمي وتسويق",
        hero_title: "ريان الضحيان",
        hero_desc: "أحوّل الأفكار إلى تجارب رقمية مؤثرة تحقق نتائج حقيقية وملموسة.",
        btn_view_work: "عرض الأعمال <i data-lucide='arrow-down-right'></i>",
        btn_download_cv: "تحميل السيرة الذاتية <i data-lucide='file-text'></i>",
        btn_contact_me: "تواصل معي <i data-lucide='mail'></i>",
        card_growth: "تجارب متكاملة",
        card_growth_desc: "من الفكرة إلى الإطلاق",
        card_creative: "بناء الهوية",
        card_dev: "أنظمة رقمية",
        
        // Stats
        stat_projects: "موقع ونظام رقمي",
        stat_campaigns: "حملة تسويقية",
        stat_branding: "هوية بصرية",
        stat_clients: "شراكة وعميل",
        
        exp_num: "5+",
        exp_years: "سنوات خبرة",
        hero_subtitle: "أخصائي تسويق رقمي وتطوير مواقع",
        about_title: "نبذة عني",
        about_lead: "متخصص في بناء التجارب الرقمية المتكاملة.",
        about_text: "أختص في بناء تجارب رقمية متكاملة تجمع بين بناء الهوية العلامة التجارية، التصميم الإبداعي، تطوير المواقع الإلكترونية، والتسويق الاستراتيجي لمساعدة المنظمات على تعزيز حضورها في السوق وتحقيق نتائج ملموسة. كما أقدم خدمات تحسين الظهور في محركات البحث وإدارة الحملات التسويقية الموجهة للوصول إلى الجمهور المناسب وتحقيق نتائج قابلة للقياس.",
        exp_1: "بناء الهوية التجارية",
        exp_2: "الحملات الرقمية",
        exp_3: "تطوير المواقع",
        exp_4: "التصميم الإبداعي",
        exp_5: "تسويق الفعاليات",
        exp_6: "تحسين محركات البحث",
        exp_7: "إعلانات جوجل",
        exp_8: "إعلانات ميتا",
        exp_9: "استهداف الجمهور",
        exp_10: "تحسين معدل التحويل",
        exp_11: "تحليلات التسويق",
        exp_12: "الأنظمة الداخلية",
        
        // Services
        services_title: "مجالات التخصص",
        srv_1_title: "بناء الهوية وتطوير العلامة",
        srv_1_desc: "إعادة هيكلة وتصميم الهوية المؤسسية لتعكس الرؤية والقيم بشكل عصري واحترافي.",
        srv_2_title: "تطوير المواقع الإلكترونية",
        srv_2_desc: "برمجة وبناء مواقع متكاملة، سريعة، ومتجاوبة، تركز على تجربة المستخدم (UX) العالية.",
        srv_3_title: "استراتيجيات التسويق الرقمي",
        srv_3_desc: "بناء خطط تسويقية مبنية على البيانات لزيادة الوصول وتعزيز التواجد الرقمي.",
        srv_4_title: "إدارة الحملات الترويجية",
        srv_4_desc: "تخطيط وتنفيذ الحملات الإعلانية وإدارة الميزانيات لتحقيق أهداف واضحة.",
        srv_5_title: "التصميم الإبداعي",
        srv_5_desc: "إنتاج تصاميم بصرية مميزة لحملات السوشال ميديا والمواد التسويقية المتنوعة.",
        srv_6_title: "تطوير الأنظمة الداخلية",
        srv_6_desc: "برمجة أنظمة متخصصة مثل CRM وإدارة العملاء لتسهيل العمليات الداخلية للشركات.",
        srv_7_title: "تحسين محركات البحث (SEO)",
        srv_7_desc: "تحسين بنية الموقع والمحتوى والكلمات المفتاحية لرفع ترتيب الموقع في نتائج البحث وزيادة الزيارات المؤهلة بشكل مستدام.",
        srv_8_title: "الحملات التسويقية الموجهة",
        srv_8_desc: "إدارة حملات إعلانية دقيقة تستهدف شرائح محددة بناءً على الاهتمامات والسلوك والموقع الجغرافي لتحقيق أفضل النتائج وأعلى عائد على الاستثمار.",
        
        // Projects
        proj_title: "المشاريع الرقمية البارزة",
        proj_subtitle: "مجموعة من المواقع والأنظمة والتطبيقات التي قمت بالعمل عليها بشكل كامل أو جزئي.",
        status_live: "Live",
        status_dev: "Under Dev",
        status_personal: "Personal",
        btn_visit: "زيارة الموقع",
        btn_visit_alt: "زيارة نسخة أخرى",
        
        tag_web: "Web Dev",
        tag_branding: "Branding",
        tag_marketing: "Marketing",
        tag_systems: "Internal Systems",
        tag_seo: "SEO",
        tag_gads: "Google Ads",
        tag_meta: "Meta Ads",
        tag_strategy: "Marketing Strategy",

        p1_title: "T&S Corporate (النسخة السابقة)",
        p1_role: "تحسين الموقع، هيكلة المحتوى وتجربة المستخدم",
        p1_desc: "تحسين تجربة المستخدم وهيكلة المحتوى لموقع شركة T&S الرئيسي (النسخة القديمة).",
        
        p2_title: "T&S Holding (الهوية الجديدة)",
        p2_role: "تطوير الموقع وهيكلة المحتوى بالكامل",
        p2_desc: "تطوير الموقع بالكامل وهيكلة المحتوى للمجموعة القابضة ليعكس التوجه الجديد.",
        
        p3_title: "T&S Academy Website",
        p3_role: "تطوير الموقع والربط التسويقي",
        p3_desc: "بناء المنصة التعليمية وربطها مع أدوات وحملات التسويق الرقمي.",
        
        p4_title: "SportX Website",
        p4_role: "تطوير الموقع والتجربة الرقمية",
        p4_desc: "تصميم وتطوير الواجهة الرقمية للمنصة الرياضية.",
        
        p5_title: "SportX Landing Page",
        p5_role: "تصميم صفحة الهبوط ورفع معدل التحويل",
        p5_desc: "تصميم صفحة الهبوط مخصصة لرفع معدلات التحويل (Conversion Optimization).",
        
        p6_title: "Real Estate Website",
        p6_role: "تطوير الموقع بالكامل",
        p6_desc: "تطوير منصة عقارية شاملة (المشروع حالياً قيد الإنشاء والبرمجة).",
        
        p7_title: "HRKH Personal App",
        p7_role: "تطوير تطبيق ويب مخصص",
        p7_desc: "برمجة وتطوير تطبيق ويب مخصص بالكامل (مشروع شخصي).",
        
        p8_title: "RI88 Internal CRM & SaaS",
        p8_role: "تطوير نظام CRM ومنصة SaaS",
        p8_desc: "تطوير نظام إدارة عملاء داخلي متكامل ومنصة SaaS للأدوات.",
        
        p9_title: "T&S Brand Hub",
        p9_role: "منصة تفاعلية لأصول الهوية",
        p9_desc: "تطوير منصة تفاعلية لإدارة أصول الهوية البصرية للشركة لتسهيل الوصول إليها.",

        // Branding
        brand_title: "الهوية البصرية - قبل وبعد",
        brand_subtitle: "مشروع إعادة صياغة وهيكلة الهوية البصرية لشركة T&S لتعكس التطور والاحترافية.",
        brand_after: "بعد التحديث (New)",
        brand_before: "قبل (Old)",

        // Campaigns
        camp_title: "الحملات الإبداعية - قبل وبعد",
        camp_subtitle: "تطور في الاتجاه البصري، الأسلوب الإبداعي، وطريقة التواصل.",
        camp_old_title: "التوجه السابق في التصاميم",
        camp_old_desc: "تصاميم تقليدية، معلومات كثيفة، وأسلوب بصري غير موحد.",
        camp_old_list_1: "عدم وجود هوية بصرية موحدة",
        camp_old_list_2: "ألوان وخطوط غير متناسقة",
        camp_old_list_3: "محتوى نصي كثيف وضعف في التسلسل البصري",
        camp_old_list_4: "محدودية في استخدام العناصر الإبداعية",
        camp_old_list_5: "تركيز أقل على الرسالة والقيمة",
        camp_new_title: "التوجه الجديد في التصاميم",
        camp_new_desc: "هوية بصرية موحدة، رسائل واضحة، وتصاميم احترافية تعكس قيمة العلامة التجارية.",
        camp_new_list_1: "هوية بصرية موحدة تعكس الاحترافية والثقة",
        camp_new_list_2: "ألوان متناسقة (كحلي، ذهبي، أبيض)",
        camp_new_list_3: "تصاميم حديثة تركز على الرسالة والقيمة",
        camp_new_list_4: "استخدام صور احترافية وعناصر بصرية قوية",
        camp_new_list_5: "ترتيب بصري واضح وتجربة مستخدم متكاملة",
        
        // Gallery
        nav_gallery: "المعرض",
        gallery_title: "معرض الأعمال",
        gallery_subtitle: "لحظات ومحطات من مسيرتي المهنية في الفعاليات والمشاريع الإبداعية.",
        filter_all: "الكل",
        filter_events: "الفعاليات",
        filter_branding: "الهوية البصرية",
        filter_campaigns: "الحملات",
        filter_web: "المواقع",

        // Contact
        contact_title: "لنبقَ على تواصل",
        contact_desc: "للتواصل بخصوص المشاريع، التعاون، أو الفرص المهنية، يمكنكم مراسلتي عبر البريد الإلكتروني.",
        
        // Footer
        footer_copy: "Rayyan Al-Dohian. All Rights Reserved."
    },
    en: {
        // Nav
        nav_logo: "Rayyan Aldhuhayan",
        nav_about: "About Me",
        nav_services: "Services",
        nav_projects: "Digital Projects",
        nav_branding: "Branding",
        nav_campaigns: "Campaigns",
        nav_contact: "Contact Me",
        
        // Hero
        hero_badge: "Digital Media Specialist",
        hero_title: "Rayyan Aldhuhayan",
        hero_desc: "Transforming Ideas into Digital Experiences that Deliver Real Results.",
        btn_view_work: "View Work <i data-lucide='arrow-down-right'></i>",
        btn_download_cv: "Download CV <i data-lucide='file-text'></i>",
        btn_contact_me: "Contact Me <i data-lucide='mail'></i>",
        card_growth: "Integrated Exp.",
        card_growth_desc: "From idea to launch",
        card_creative: "Brand Dev",
        card_dev: "Digital Systems",
        
        // Stats
        stat_projects: "Websites & Systems",
        stat_campaigns: "Marketing Campaigns",
        stat_branding: "Brand Identities",
        stat_clients: "Clients & Partners",
        
        exp_num: "5+",
        exp_years: "Years Experience",
        hero_subtitle: "Digital Marketing & Web Development Specialist",
        about_title: "About Me",
        about_lead: "Specializing in building integrated digital experiences.",
        about_text: "I specialize in building integrated digital experiences that combine branding, creative design, website development, and strategic marketing to help organizations strengthen their market presence and achieve measurable results. I also provide search engine optimization and highly targeted advertising campaigns to reach the right audience and deliver measurable results.",
        exp_1: "Corporate Branding",
        exp_2: "Digital Campaigns",
        exp_3: "Web Development",
        exp_4: "Creative Design",
        exp_5: "Event Marketing",
        exp_6: "SEO Optimization",
        exp_7: "Google Ads",
        exp_8: "Meta Ads",
        exp_9: "Audience Targeting",
        exp_10: "Conversion Optimization",
        exp_11: "Marketing Analytics",
        exp_12: "Internal Systems",
        
        // Services
        services_title: "Areas of Expertise",
        srv_1_title: "Branding & Identity Dev",
        srv_1_desc: "Restructuring and designing corporate identity to reflect vision and values in a modern, professional way.",
        srv_2_title: "Website Development",
        srv_2_desc: "Programming and building fast, responsive, and integrated websites focused on high User Experience (UX).",
        srv_3_title: "Digital Marketing Strategy",
        srv_3_desc: "Building data-driven marketing plans to increase reach and enhance digital presence.",
        srv_4_title: "Campaign Management",
        srv_4_desc: "Planning and executing advertising campaigns and managing budgets to achieve clear objectives.",
        srv_5_title: "Creative Design",
        srv_5_desc: "Producing distinctive visual designs for social media campaigns and various marketing materials.",
        srv_6_title: "Internal Systems Dev",
        srv_6_desc: "Programming specialized systems like CRM and Customer Management to facilitate internal corporate operations.",
        srv_7_title: "Search Engine Optimization",
        srv_7_desc: "Optimize website structure, content, and keywords to improve search rankings and generate sustainable qualified traffic.",
        srv_8_title: "Targeted Advertising",
        srv_8_desc: "Manage highly targeted advertising campaigns based on audience interests, behavior, and geographic location to maximize results and return on investment.",
        
        // Projects
        proj_title: "Featured Digital Projects",
        proj_subtitle: "A collection of websites, systems, and applications I have worked on fully or partially.",
        status_live: "Live",
        status_dev: "Under Dev",
        status_personal: "Personal",
        btn_visit: "Visit Website",
        btn_visit_alt: "Alternative Link",

        tag_web: "Web Dev",
        tag_branding: "Branding",
        tag_marketing: "Marketing",
        tag_systems: "Internal Systems",
        tag_seo: "SEO",
        tag_gads: "Google Ads",
        tag_meta: "Meta Ads",
        tag_strategy: "Marketing Strategy",
        
        p1_title: "T&S Corporate (Old Version)",
        p1_role: "Website Enhancement, Content & UX",
        p1_desc: "Enhancing user experience and content structuring for the previous T&S website.",
        
        p2_title: "T&S Holding (New Version)",
        p2_role: "Full Web Dev & Content Arch.",
        p2_desc: "Full website development and content architecture for the new Holding Group identity.",
        
        p3_title: "T&S Academy Website",
        p3_role: "Web Dev & Marketing Integration",
        p3_desc: "Building the educational platform and integrating it with digital marketing tools and campaigns.",
        
        p4_title: "SportX Website",
        p4_role: "Web Dev & Digital Experience",
        p4_desc: "Designing and developing the digital interface for the sports platform.",
        
        p5_title: "SportX Landing Page",
        p5_role: "Landing Page & CRO",
        p5_desc: "Designing a dedicated landing page to boost conversion rates (Conversion Optimization).",
        
        p6_title: "Real Estate Website",
        p6_role: "Full Website Development",
        p6_desc: "Developing a comprehensive real estate platform (Project currently under construction).",
        
        p7_title: "HRKH Personal App",
        p7_role: "Custom Web App Dev",
        p7_desc: "Programming and developing a fully custom web application (Personal Project).",
        
        p8_title: "RI88 Internal CRM & SaaS",
        p8_role: "CRM & SaaS Development",
        p8_desc: "Developing a comprehensive internal customer management system and tools SaaS platform.",
        
        p9_title: "T&S Brand Hub",
        p9_role: "Interactive Brand Platform",
        p9_desc: "Developing an interactive platform to manage and facilitate access to corporate visual identity assets.",

        // Branding
        brand_title: "Before & After Branding",
        brand_subtitle: "The rebranding and restructuring project for T&S identity to reflect evolution and professionalism.",
        brand_after: "After Update (New)",
        brand_before: "Before (Old)",

        // Campaigns
        camp_title: "Creative Campaigns - Before & After",
        camp_subtitle: "A transformation in visual direction, creative execution, and communication approach.",
        camp_old_title: "Previous Creative Direction",
        camp_old_desc: "Traditional designs, dense information, and inconsistent visual style.",
        camp_old_list_1: "Lack of a unified visual identity",
        camp_old_list_2: "Inconsistent colors and typography",
        camp_old_list_3: "Heavy text content and poor visual hierarchy",
        camp_old_list_4: "Limited use of creative elements",
        camp_old_list_5: "Less focus on message and value",
        camp_new_title: "New Creative Direction",
        camp_new_desc: "Unified visual identity, clear messaging, and professional designs reflecting brand value.",
        camp_new_list_1: "Unified visual identity reflecting professionalism and trust",
        camp_new_list_2: "Consistent colors (Navy, Gold, White)",
        camp_new_list_3: "Modern designs focusing on message and value",
        camp_new_list_4: "Use of professional imagery and strong visual elements",
        camp_new_list_5: "Clear visual hierarchy and integrated user experience",
        
        // Gallery
        nav_gallery: "Gallery",
        gallery_title: "Work Gallery",
        gallery_subtitle: "Moments and milestones from my professional journey in events and creative projects.",
        filter_all: "All",
        filter_events: "Events",
        filter_branding: "Branding",
        filter_campaigns: "Campaigns",
        filter_web: "Web",

        // Contact
        contact_title: "Let's Stay Connected",
        contact_desc: "For projects, collaborations, and professional opportunities, feel free to contact me via email.",
        
        // Footer
        footer_copy: "Rayyan Al-Dohian. All Rights Reserved."
    }
};

let currentLang = 'ar';

// ==========================================
// 2. Initialization & Preloader
// ==========================================
window.addEventListener("load", () => {
    // Remove Preloader
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 500); // Small delay to ensure smooth transition

    // Initialize Icons
    lucide.createIcons();
    
    // Set Year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Setup Modules
    setupLanguageToggle();
    setupMobileMenu();
    setupScrollEffects();
    setupCustomCursor();
    setupInteractiveSlider();
    setupLightbox();
    setupGalleryFilters();
    
    // Run animations for elements already in view
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
});

// ==========================================
// 3. Language Toggle
// ==========================================
function setupLanguageToggle() {
    const langBtn = document.getElementById('langToggle');
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // Update HTML attributes
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update Button Text
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        
        // Update Text Content
        updateContent();

        // Refresh Slider to fix bounds on dir change
        setTimeout(() => {
            // Trigger a dummy event to recalibrate slider
            window.dispatchEvent(new Event('resize'));
        }, 300);
    });
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = translations[currentLang];
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
    
    // Re-initialize icons
    lucide.createIcons();
}

// ==========================================
// 4. Mobile Menu
// ==========================================
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const links = document.querySelectorAll('.mobile-links a');
    
    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    };
    
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    links.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

// ==========================================
// 5. Scroll Effects (Reveal, Navbar, Progress)
// ==========================================
function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.getElementById('scrollToTop');
    const progressBar = document.getElementById('scrollProgressBar');
    
    // Throttle scroll for performance
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                // Navbar & Top Button
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                if (window.scrollY > 500) {
                    scrollTopBtn.style.opacity = '1';
                    scrollTopBtn.style.pointerEvents = 'auto';
                } else {
                    scrollTopBtn.style.opacity = '0';
                    scrollTopBtn.style.pointerEvents = 'none';
                }

                // Scroll Progress
                const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (window.scrollY / scrollTotal) * 100;
                progressBar.style.width = scrollPercent + '%';

                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    scrollTopBtn.style.opacity = '0';
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                if (entry.target.classList.contains('stat-card')) {
                    const counter = entry.target.querySelector('.counter');
                    if (counter && !counter.classList.contains('animated')) {
                        animateValue(counter, 0, parseInt(counter.getAttribute('data-target')), 2000);
                        counter.classList.add('animated');
                    }
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end;
        }
    };
    window.requestAnimationFrame(step);
}

// ==========================================
// 6. Custom Cursor
// ==========================================
function setupCustomCursor() {
    const cursor = document.getElementById('customCursor');
    // Only enable on desktop/non-touch
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    cursor.style.display = 'block';

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .slider-handle, input, textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ==========================================
// 7. Interactive Slider (Mouse & Touch)
// ==========================================
function setupInteractiveSlider() {
    const slider = document.getElementById('brandSlider');
    const handle = document.getElementById('sliderHandle');
    const beforeContainer = document.getElementById('beforeImgContainer');
    const beforeImg = document.getElementById('beforeImg');
    
    if (!slider || !handle || !beforeContainer || !beforeImg) return;

    let isDragging = false;

    // Helper: Update positions
    function updateSlider(clientX) {
        const rect = slider.getBoundingClientRect();
        // Calculate X relative to the slider
        let x = clientX - rect.left;
        
        // Bounds checking
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        
        // Convert to percentage
        let percentage = (x / rect.width) * 100;
        const isRtl = document.documentElement.dir === 'rtl';

        // Set dimensions and position
        // We set the container width directly. The inner img stays absolute matching the slider bounds.
        beforeImg.style.width = `${rect.width}px`;
        
        if (isRtl) {
            // In RTL, the "before" image is on the right. 
            // Handle moves visually left-to-right (0 to 100%), but clip starts from right.
            handle.style.left = `${percentage}%`;
            // Calculate width from the right
            beforeContainer.style.width = `${100 - percentage}%`;
            beforeContainer.style.left = `${percentage}%`; // Push container to the right
            beforeImg.style.transform = `translateX(-${percentage}%)`; // Pull image back to align
        } else {
            handle.style.left = `${percentage}%`;
            beforeContainer.style.width = `${percentage}%`;
            beforeContainer.style.left = `0`;
            beforeImg.style.transform = `none`;
        }
    }

    // Set Initial State (50%)
    function initSlider() {
        const rect = slider.getBoundingClientRect();
        updateSlider(rect.left + (rect.width / 2));
    }

    // Mouse Events
    handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        slider.style.cursor = 'ew-resize';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'default';
    });

    // Touch Events
    handle.addEventListener('touchstart', (e) => {
        isDragging = true;
    }, {passive: true});

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        // Prevent scrolling while dragging slider
        if(e.target === handle || e.target.closest('.comparison-slider')) {
            e.preventDefault();
        }
        updateSlider(e.touches[0].clientX);
    }, {passive: false});

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Handle Window Resize
    window.addEventListener('resize', () => {
        // Re-align image size
        const rect = slider.getBoundingClientRect();
        beforeImg.style.width = `${rect.width}px`;
    });

    // Initialize on load and on font load
    setTimeout(initSlider, 100);
    window.addEventListener('load', initSlider);
}

// ==========================================
// 8. Lightbox Logic
// ==========================================
function setupLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const closeBtn = document.getElementById('lightboxClose');
    const projectImages = document.querySelectorAll('.panel-img-wrapper img');

    if (!lightbox || !lightboxImg || !lightboxVideo) return;

    // Helper to open lightbox with content
    window.openLightbox = (src, isVideo = false) => {
        if (isVideo) {
            lightboxImg.style.display = 'none';
            lightboxVideo.style.display = 'block';
            lightboxVideo.src = src;
            lightboxVideo.play();
        } else {
            lightboxVideo.style.display = 'none';
            lightboxVideo.pause();
            lightboxVideo.src = '';
            lightboxImg.style.display = 'block';
            lightboxImg.src = src;
        }
        lightbox.classList.add('active');
    };

    // Open Lightbox for project images
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            window.openLightbox(img.src, false);
        });
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightboxImg.src = '';
            lightboxVideo.pause();
            lightboxVideo.src = '';
        }, 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// ==========================================
// 9. Gallery Filter Logic
// ==========================================
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImgs = document.querySelectorAll('.gallery-img');

    if (!filterBtns.length) return;

    // Hook gallery items into lightbox
    galleryItems.forEach(item => {
        const wrap = item.querySelector('.gallery-img-wrap');
        const img = item.querySelector('.gallery-img');
        
        if (wrap && img) {
            wrap.addEventListener('click', () => {
                const videoSrc = item.dataset.video;
                if (videoSrc) {
                    window.openLightbox(videoSrc, true);
                } else {
                    window.openLightbox(img.src, false);
                }
            });
        }
    });

    // Filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Update captions on language change
    document.getElementById('langToggle')?.addEventListener('click', () => {
        setTimeout(() => {
            const lang = document.documentElement.lang;
            document.querySelectorAll('.gallery-caption-text').forEach(el => {
                el.textContent = lang === 'ar'
                    ? (el.dataset.captionAr || el.textContent)
                    : (el.dataset.captionEn || el.textContent);
            });
        }, 50);
    });
}
