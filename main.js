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
        hero_desc: "أبني حضورًا رقميًا متكاملًا للعلامات التجارية — من الهوية والمحتوى إلى المواقع والحملات وتجربة المستخدم.",
        btn_view_work: "استعرض أعمالي <i data-lucide='arrow-down-right'></i>",
        btn_download_cv: "تحميل السيرة الذاتية <i data-lucide='file-text'></i>",
        btn_contact_me: "تواصل معي <i data-lucide='mail'></i>",
        card_growth: "تجارب متكاملة",
        card_growth_desc: "من الفكرة إلى الإطلاق",
        card_creative: "بناء الهوية",
        card_dev: "أنظمة رقمية",
        
        // Stats
        stat_projects: "مواقع وأنظمة رقمية",
        stat_campaigns: "حملات ومحتوى رقمي",
        stat_branding: "هويات وتجارب بصرية",
        stat_clients: "فعاليات وتغطيات ميدانية",
        
        practical_exp: "خبرة عملية في بناء الهويات الرقمية، تطوير المواقع، إدارة الحملات، وتحسين تجربة العلامة التجارية عبر القنوات المختلفة.",
        hero_subtitle: "أخصائي الإعلام الرقمي وتجربة العلامة التجارية",
        about_title: "نبذة عني",
        about_lead: "أنا أعمل على بناء حضور رقمي متكامل للعلامات التجارية، من تطوير الهوية والمحتوى إلى تصميم التجارب الرقمية، المواقع، الحملات، والأنظمة الداخلية. أركز على تحويل الاحتياج التجاري إلى تجربة واضحة، منظمة، وقابلة للتنفيذ، تجمع بين الجانب الإبداعي والاستراتيجي والتقني.",
        about_text: "ما يميز عملي هو الربط بين الصورة والنتيجة: هوية أوضح، محتوى أقوى، تجربة مستخدم أفضل، وحضور رقمي أكثر احترافية.",
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
        srv_1_title: "تطوير الهوية البصرية",
        srv_1_desc: "تطوير الهوية البصرية، توحيد الأسلوب، وتحسين حضور العلامة عبر القنوات المختلفة.",
        srv_2_title: "التجارب الرقمية والمواقع",
        srv_2_desc: "تطوير المواقع وصفحات الهبوط، تحسين تجربة المستخدم، وتنظيم المحتوى الرقمي.",
        srv_3_title: "الحملات وتوجيه المحتوى",
        srv_3_desc: "تخطيط الحملات، توجيه المحتوى، وصياغة الرسائل التسويقية بما يخدم أهداف العلامة.",
        srv_4_title: "الأدوات والأنظمة التسويقية",
        srv_4_desc: "بناء أدوات داخلية ومنصات تساعد الفرق على إدارة الأصول، الطلبات، والعمليات التسويقية بكفاءة.",
        
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

        p1_title: "T&S Brand Hub",
        p1_role: "منصة أصول الهوية",
        p1_desc: "منصة داخلية تفاعلية لإدارة أصول الهوية البصرية، تهدف إلى تسهيل وصول الفرق إلى الشعارات، الألوان، الخطوط، والقوالب المعتمدة. ساعد المشروع على توحيد استخدام الهوية وتسريع العمل بين التسويق والتصميم والفرق الداخلية.",
        
        p2_title: "T&S Corporate Website",
        p2_role: "التجربة الرقمية",
        p2_desc: "تحسين وتطوير تجربة الموقع الرئيسي من خلال تنظيم المحتوى، إبراز الخدمات بشكل أوضح، وتعزيز الحضور المؤسسي والهوية الرقمية للشركة.",
        
        p3_title: "T&S Academy Website",
        p3_role: "التجربة الرقمية",
        p3_desc: "المساهمة في بناء التجربة الرقمية للأكاديمية وربط الموقع بالمحتوى والحملات التسويقية، بهدف دعم الظهور الرقمي وتحسين رحلة المستخدم من الاهتمام إلى التواصل.",
        
        p4_title: "RI88 CRM & SaaS",
        p4_role: "نظام داخلي",
        p4_desc: "تطوير نظام داخلي لإدارة العملاء والأدوات التشغيلية، بهدف تنظيم البيانات، تبسيط المتابعة، وتحسين كفاءة العمليات.",
        
        p5_title: "SportX",
        p5_role: "تجربة رقمية",
        p5_desc: "تجربة رقمية مرتبطة بالقطاع الرياضي، تجمع بين الهوية، العرض البصري، وتجربة المستخدم لخلق حضور أكثر وضوحًا واحترافية.",
        
        // How I Work
        work_title: "كيف أعمل",
        work_1_title: "01 — فهم الهدف",
        work_1_desc: "أبدأ بفهم احتياج العلامة، الجمهور، والرسالة الأساسية.",
        work_2_title: "02 — بناء التوجه",
        work_2_desc: "أحوّل الفكرة إلى توجه بصري ومحتوى وتجربة رقمية واضحة.",
        work_3_title: "03 — تنفيذ بمرونة",
        work_3_desc: "أعمل على المواقع، الحملات، المحتوى، والأنظمة بطريقة عملية وسريعة.",
        work_4_title: "04 — تحسين مستمر",
        work_4_desc: "أراجع التجربة، أحسن النتائج، وأطور الهوية بناءً على الاستخدام الفعلي.",

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
        // Hero
        hero_badge: "Digital Media Specialist",
        hero_title: "Rayyan Aldhuhayan",
        hero_desc: "I build complete digital brand experiences — from identity and content to websites, campaigns, and user experience.",
        btn_view_work: "View My Work <i data-lucide='arrow-down-right'></i>",
        btn_download_cv: "Download CV <i data-lucide='file-text'></i>",
        btn_contact_me: "Contact Me <i data-lucide='mail'></i>",
        card_growth: "Integrated Exp.",
        card_growth_desc: "From idea to launch",
        card_creative: "Brand Dev",
        card_dev: "Digital Systems",
        
        // Stats
        stat_projects: "Digital Platforms",
        stat_campaigns: "Marketing Campaigns",
        stat_branding: "Brand Experiences",
        stat_clients: "Events & Activations",
        
        practical_exp: "Practical experience in building digital identities, developing websites, managing campaigns, and improving brand experience across multiple channels.",
        hero_subtitle: "Digital Media & Brand Experience Specialist",
        about_title: "About Me",
        about_lead: "I work on building complete digital brand presence, from identity and content development to digital experiences, websites, campaigns, and internal systems. My focus is turning business needs into clear, structured, and executable experiences that combine creativity, strategy, and technology.",
        about_text: "What defines my work is connecting visual direction with business impact: clearer identity, stronger content, better user experience, and a more professional digital presence.",
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
        srv_1_title: "Brand & Visual Identity",
        srv_1_desc: "Developing visual identity, unifying brand style, and improving brand presence across channels.",
        srv_2_title: "Digital Experience & Websites",
        srv_2_desc: "Developing websites and landing pages, improving user experience, and structuring digital content.",
        srv_3_title: "Campaigns & Content Direction",
        srv_3_desc: "Planning campaigns, directing content, and shaping marketing messages that support brand objectives.",
        srv_4_title: "Internal Tools & Marketing Systems",
        srv_4_desc: "Building internal tools and platforms that help teams manage assets, requests, and marketing operations efficiently.",
        
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
        
        p1_title: "T&S Brand Hub",
        p1_role: "Internal Brand Platform",
        p1_desc: "An interactive internal brand platform designed to help teams access approved logos, colors, fonts, and templates. The project helped unify brand usage and improve collaboration between marketing, design, and internal teams.",
        
        p2_title: "T&S Corporate Website",
        p2_role: "UX & Content",
        p2_desc: "Enhanced the corporate website experience by restructuring content, presenting services more clearly, and strengthening the company’s digital and corporate presence.",
        
        p3_title: "T&S Academy",
        p3_role: "Digital Experience",
        p3_desc: "Contributed to building the academy’s digital experience by connecting the website with content and marketing campaigns, supporting visibility and improving the user journey from interest to inquiry.",
        
        p4_title: "RI88 CRM & SaaS",
        p4_role: "Internal Systems",
        p4_desc: "Developed an internal CRM and operational tool to organize customer data, simplify follow-ups, and improve workflow efficiency.",
        
        p5_title: "SportX",
        p5_role: "Digital Experience",
        p5_desc: "A digital experience for the sports sector, combining identity, visual presentation, and user experience to create a clearer and more professional presence.",
        
        // How I Work
        work_title: "How I Work",
        work_1_title: "01 — Understand the Goal",
        work_1_desc: "I start by understanding the brand need, audience, and core message.",
        work_2_title: "02 — Build the Direction",
        work_2_desc: "I turn the idea into a clear visual direction, content approach, and digital experience.",
        work_3_title: "03 — Execute with Flexibility",
        work_3_desc: "I execute websites, campaigns, content, and systems in a practical and flexible way.",
        work_4_title: "04 — Improve Continuously",
        work_4_desc: "I review the experience, improve outcomes, and refine the brand based on real usage.",

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
