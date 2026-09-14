/* ==========================================================================
   Rayyan Aldohian Portfolio - Main Script
   Bilingual System (AR / EN) + Dynamic Theme System + Terminal Simulation
   ========================================================================== */

// --- Translations Dictionary ---
const translations = {
    ar: {
        nav_work: "المشاريع",
        nav_services: "مجالات التخصص",
        nav_impact: "الأثر الاستراتيجي",
        nav_about: "نبذة عني",
        nav_contact: "تواصل",
        btn_touch: "تواصل معي",
        
        hero_status: "متاح للمشاريع واستشارات النمو",
        hero_headline: 'أبني مسارات النمو، ذكاء الأعمال، والتجارب الرقمية <span class="accent-span">المدعومة بالذكاء الاصطناعي.</span>',
        hero_lead: 'أدمج تحليلات <em>ذكاء الأعمال (BI)</em> مع استراتيجيات التسويق والأداء، وبناء <em>الهويات البصرية الراسخة</em>، وحلول <em>الذكاء الاصطناعي (AI)</em> لهندسة نمو مستدام وتجارب رقمية ذات أثر ملموس وقابل للقياس.',
        btn_see_work: "استعرض الأعمال",
        btn_contact_link: "بدء محادثة",
        scroll_label: "SCROLL",
        
        tag_work: "أعمال مختارة",
        heading_work: "مشاريع وأنظمة تصنع أثراً حقيقياً في السوق.",
        link_discuss_project: "طلب استشارة أو مشروع",
        
        p1_title: "منصة نحت العقارية (CRM)",
        p1_desc: "نظام CRM عقاري ذكي لإدارة العملاء المحتملين، مسارات المبيعات، ولوحات تحكم الأداء التفاعلية.",
        status_active: "نظام مباشر ونشط",
        
        p2_title: "منصة مجموعة T&S القابضة",
        p2_desc: "منصة رقمية مؤسسية توحد 10 قطاعات أعمال تابعة وتعكس الهوية الاستثمارية للمجموعة.",
        status_live: "منصة مؤسسية حية",
        
        p3_title: "منصة SportX الرياضية",
        p3_desc: "منصة رقمية متكاملة لإدارة البطولات والملاعب وحجوزات الفعاليات وتجربة الجماهير.",
        status_growth: "مسار نمو متسارع",
        
        p4_title: "بوابة ونظام الهوية البصرية",
        p4_desc: "منظومة موحدة للأدلة الإرشادية والأصول البصرية وضمان اتساق العلامة عبر كافة نقاط التماس.",
        status_system: "Design System",
        
        p5_title: "منصة وحملات شركة حركة",
        p5_desc: "بناء الحضور الرقمي والحملات التسويقية لخدمات استقطاب الكفاءات والحلول الإدارية.",
        status_delivered: "مشروع مكتمل الأثر",
        
        p6_title: "الهوية التجارية Ri88",
        p6_desc: "تطوير الهوية البصرية، التغليف، وتجربة العلامة التجارية في قطاع الأغذية والمشروبات.",
        status_brand: "Brand Experience",
        
        tag_services: "مجالات التخصص",
        heading_services: "بناء الأنظمة الرقمية التي تدمج البيانات بالنمو.",
        srv_1_name: "ذكاء الأعمال وتحليل البيانات (BI)",
        srv_1_detail: "بناء لوحات تحكم تفاعلية وتنفيذية متقدمة، وربط مصادر البيانات المتفرقة لاستخراج رؤى استراتيجية تكشف فرص التوسع وتحسن كفاءة القرارات التشغيلية والتسويقية.",
        srv_2_name: "التسويق واستراتيجيات النمو (Growth & CRO)",
        srv_2_detail: "تخطيط الحملات الإعلانية الممولة الموجهة بالأرقام (Google & Meta Ads)، وهندسة مسارات التحويل (Funnels)، وتحسين معدل التحويل لتعظيم العائد الاستثماري على كل ريال.",
        srv_3_name: "بناء وتطوير الهويات البصرية (Brand Identity)",
        srv_3_detail: "تصميم هويات بصرية وتجارية متكاملة تنطلق من الفهم العميق للجمهور، وتوحيد لغة التصميم عبر المنصات والتطبيقات والحملات لترسيخ مكانة العلامة في السوق.",
        srv_4_name: "حلول وأتمتة الذكاء الاصطناعي (AI Solutions)",
        srv_4_detail: "توظيف وكلاء ونماذج الذكاء الاصطناعي في تحليل سلوك العملاء، أتمتة تدفقات العمل التسويقية والإدارية، وتسريع إنتاج وتخصيص المحتوى الذكي بدقة عالية.",
        
        tag_impact: "الأثر الاستراتيجي",
        heading_impact: "أثر ملموس عبر شركات ومجموعات الأعمال.",
        link_read_philosophy: "قراءة فلسفة العمل",
        imp_1_title: "لوحات تحكم ذكاء الأعمال",
        imp_1_desc: "بناء شاشات قياس فورية لربط المبيعات بالحملات ورفع سرعة اتخاذ القرارات التنفيذية.",
        imp_2_title: "استراتيجيات نمو المبيعات",
        imp_2_desc: "تحسين مسارات العميل ورفع معدل التحويل (CRO) لخفض تكلفة الاستحواذ على العملاء.",
        imp_3_title: "توحيد الهوية المؤسسية",
        imp_3_desc: "هندسة هوية بصرية ولغة تواصل موحدة عبر كافة القطاعات والشركات الشقيقة.",
        imp_4_title: "أتمتة وحلول الذكاء الاصطناعي",
        imp_4_desc: "أتمتة المهام التسويقية المتكررة وتحليل تفاعل العملاء بواسطة وكلاء الذكاء الاصطناعي.",
        
        tag_about: "عن مسيرتي",
        about_heading: "أجمع بين دقة الأرقام وذكاء الأعمال، وإبداع الهوية البصرية، وقوة الذكاء الاصطناعي لصناعة نمو حقيقي.",
        about_p1: "تنطلق منهجي في العمل من الفهم العميق للبيانات: أرى في الأرقام خارطة طريق ترشدنا بدقة إلى أين يجب أن نتجه. أحوّل هذه الرؤى إلى هويات بصرية راسخة، ومسارات تسويقية عالية التحويل، وأنظمة رقمية متكاملة تدعم الأهداف المالية والتوسعية للعلامات التجارية.",
        about_p2: "بدمج أدوات ونماذج الذكاء الاصطناعي (AI) في صلب العمليات، نختصر دورات الإنتاج، ونوفر تحليلات تنبؤية أكثر دقة لسلوك الجمهور، مما يمنح المشاريع سرعة استثنائية وقدرة على التوسع بثبات واستدامة.",
        skills_title: "المهارات والتقنيات الأساسية",
        
        cta_heading: "لديك مشروع أو فكرة تستحق البناء؟",
        cta_subtitle: "متاح للمشاريع النوعية، استشارات النمو، وبناء الأنظمة والهويات المدعومة بالذكاء الاصطناعي.",
        btn_email_me: "راسلني عبر البريد الإلكتروني",
        btn_whatsapp: "واتساب مباشر",
        
        footer_role: "متخصص في ذكاء الأعمال، التسويق، الهويات البصرية والنمو · الرياض، المملكة العربية السعودية",
        footer_credit: "Designed and built from scratch."
    },
    en: {
        nav_work: "Projects",
        nav_services: "What I Do",
        nav_impact: "Impact",
        nav_about: "About",
        nav_contact: "Contact",
        btn_touch: "Get in touch",
        
        hero_status: "Open to projects & growth advisory",
        hero_headline: 'Engineering scalable growth, Business Intelligence, and digital brands <span class="accent-span">powered by AI.</span>',
        hero_lead: 'Bridging <em>Business Intelligence (BI)</em> and data analytics with high-converting marketing, <em>authoritative brand identity</em>, and <em>AI-driven workflows</em> to build sustainable enterprise growth and measurable ROI.',
        btn_see_work: "See the work",
        btn_contact_link: "Start a conversation",
        scroll_label: "SCROLL",
        
        tag_work: "Selected Work",
        heading_work: "Systems and platforms that drive measurable market impact.",
        link_discuss_project: "Discuss a project",
        
        p1_title: "NAHT Real Estate CRM & BI",
        p1_desc: "Intelligent real estate CRM platform with automated lead pipeline, performance analytics, and live broker dashboards.",
        status_active: "Actively maintained",
        
        p2_title: "T&S Holding Corporate Platform",
        p2_desc: "Enterprise digital platform unifying 10 corporate subsidiaries and establishing institutional market prestige.",
        status_live: "Live enterprise platform",
        
        p3_title: "SportX Sports Management",
        p3_desc: "End-to-end digital ecosystem for league governance, venue booking, ticketing, and audience fan experience.",
        status_growth: "High-growth system",
        
        p4_title: "Brand Architecture & Design Hub",
        p4_desc: "Centralized design system repository and visual guidelines maintaining brand coherence across all digital channels.",
        status_system: "Design System",
        
        p5_title: "HRKH Recruitment Platform",
        p5_desc: "B2B digital presence and performance campaigns driving executive recruitment and enterprise talent acquisition.",
        status_delivered: "Delivered & scaling",
        
        p6_title: "Ri88 Commercial Identity",
        p6_desc: "Complete visual identity, packaging engineering, and customer experience direction in the gourmet F&B sector.",
        status_brand: "Brand Experience",
        
        tag_services: "What I Do",
        heading_services: "Building digital ecosystems where data intelligence meets scalable growth.",
        srv_1_name: "Business Intelligence & Data Analytics (BI)",
        srv_1_detail: "Architecting interactive executive dashboards, integrating fragmented data pipelines, and transforming numbers into high-value strategic growth insights.",
        srv_2_name: "Strategic Marketing & Growth (CRO)",
        srv_2_detail: "Engineering high-yield paid ad funnels (Google & Meta), running conversion rate optimization (CRO), and maximizing acquisition efficiency.",
        srv_3_name: "Visual Identity & Brand Architecture",
        srv_3_detail: "Building comprehensive brand identities grounded in customer psychology, guaranteeing unified aesthetics across all touchpoints.",
        srv_4_name: "AI Solutions & Workflow Automation",
        srv_4_detail: "Leveraging generative AI models and intelligent automations to accelerate content production, personalize user journeys, and streamline operations.",
        
        tag_impact: "Strategic Impact",
        heading_impact: "Measurable performance across diversified corporate sectors.",
        link_read_philosophy: "Read philosophy",
        imp_1_title: "BI Dashboards & Telemetry",
        imp_1_desc: "Deploying real-time tracking systems connecting marketing investment directly to pipeline revenue.",
        imp_2_title: "Growth Funnel Optimization",
        imp_2_desc: "Systematically reducing CAC and accelerating lead-to-deal conversion velocity across key products.",
        imp_3_title: "Unified Brand Standards",
        imp_3_desc: "Engineering cohesive identity guidelines that elevate corporate valuation and stakeholder trust.",
        imp_4_title: "AI Workflows & Automation",
        imp_4_desc: "Eliminating operational drag through custom AI assistants and automated lead qualification pipelines.",
        
        tag_about: "About Me",
        about_heading: "Fusing empirical data and BI with bold brand design and AI systems to create real-world leverage.",
        about_p1: "My methodology begins with the data: numbers are the clearest blueprint for identifying market leverage. I translate these analytics into authoritative brand identities, high-conversion growth funnels, and robust digital platforms that achieve ambitious business milestones.",
        about_p2: "By integrating modern Artificial Intelligence (AI) solutions into every phase of execution, we dramatically shorten iteration cycles and gain predictive insight into customer behaviors, enabling brands to scale with speed and resilience.",
        skills_title: "Core Capabilities & Stack",
        
        cta_heading: "Have something worth building?",
        cta_subtitle: "Open to high-impact projects, growth advisory, and intelligent digital systems.",
        btn_email_me: "Get in touch via Email",
        btn_whatsapp: "Direct WhatsApp",
        
        footer_role: "Specialist in Business Intelligence, Marketing, Brand Identity & Growth · Riyadh, Saudi Arabia",
        footer_credit: "Designed and built from scratch."
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Initialization
    const savedLang = localStorage.getItem('rayyan_lang') || 'ar';
    setLanguage(savedLang);

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang || 'ar';
            const nextLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(nextLang);
        });
    }

    // 2. Theme Initialization
    const savedTheme = localStorage.getItem('rayyan_theme') || 'emerald';
    setTheme(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    if (themeToggleBtn && themeDropdown) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('show');
        });

        document.querySelectorAll('[data-set-theme]').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTheme = btn.getAttribute('data-set-theme');
                setTheme(targetTheme);
                themeDropdown.classList.remove('show');
            });
        });

        document.addEventListener('click', (e) => {
            if (!themeDropdown.contains(e.target) && e.target !== themeToggleBtn) {
                themeDropdown.classList.remove('show');
            }
        });
    }

    // 3. Mobile Navigation Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // 4. Terminal Interactive Typing Animation
    initTerminalTyping();

    // 5. Scroll Active Link Highlighting
    initScrollSpy();

    // 6. Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// --- Language Function ---
function setLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('rayyan_lang', lang);

    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'ar' ? 'English' : 'عربي';
    }

    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// --- Theme Function ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rayyan_theme', theme);
}

// --- Terminal Simulation ---
function initTerminalTyping() {
    const el = document.getElementById('terminalType');
    if (!el) return;

    const commands = [
        "pipeline --connect --source=bigquery",
        "agent.run(growth_funnel_audit)",
        "optimize_cro --uplift=+38.4%",
        "model.predict(customer_acquisition)",
        "deploy_dashboard --status=active"
    ];

    let cmdIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentCmd = commands[cmdIdx];
        if (isDeleting) {
            el.textContent = currentCmd.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = currentCmd.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 30 : 60;

        if (!isDeleting && charIdx === currentCmd.length) {
            speed = 2200; // Hold at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            cmdIdx = (cmdIdx + 1) % commands.length;
            speed = 400; // Pause before typing next
        }

        setTimeout(typeLoop, speed);
    }

    typeLoop();
}

// --- Scroll Spy for Nav Links ---
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, { passive: true });
}
