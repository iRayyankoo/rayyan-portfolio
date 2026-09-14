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
        nav_projects: "المشاريع البارزة",
        nav_branding: "الهوية البصرية",
        nav_campaigns: "الحملات الإبداعية",
        nav_contact: "تواصل معي",
        
        // Hero
        hero_badge: "مختص ذكاء الأعمال، التسويق، بناء الهويات والنمو | حلول AI",
        hero_title: "ريان الضحيان",
        hero_desc: "أدمج ذكاء الأعمال (BI) وتحليل البيانات مع التسويق الاستراتيجي، بناء الهويات البصرية، وحلول الذكاء الاصطناعي (AI) لصناعة تجارب رقمية تقود النمو وتحقق نتائج ملموسة قابلة للقياس.",
        btn_view_work: "استعرض أعمالي <i data-lucide='arrow-down'></i>",
        btn_download_cv: "تحميل السيرة الذاتية <i data-lucide='file-text'></i>",
        btn_contact_me: "تواصل معي <i data-lucide='mail'></i>",
        card_growth: "ذكاء الأعمال والنمو",
        card_growth_desc: "قرارات مدفوعة بالبيانات و AI",
        card_creative: "بناء الهويات",
        card_dev: "ذكاء اصطناعي وأنظمة",
        
        // Stats / Categories
        stat_projects: "مواقع وأنظمة رقمية",
        stat_branding: "هويات وتجارب بصرية",
        stat_campaigns: "حملات ونمو مدفوع",
        stat_clients: "أعمال وشراكات ناجحة",
        
        practical_exp: "خبرة متقدمة في ذكاء الأعمال، تحليل البيانات، بناء الهويات البصرية، إدارة الحملات التسويقية، وتوظيف أدوات الذكاء الاصطناعي لتعزيز نمو العلامات التجارية.",
        hero_subtitle: "مختص ذكاء الأعمال، التسويق، بناء الهويات والنمو الرقمي (AI-Driven)",
        about_title: "نبذة عني",
        about_lead: "أدمج ذكاء الأعمال وتحليل البيانات مع التسويق وبناء الهويات والذكاء الاصطناعي لقيادة النمو.",
        about_text: "ينطلق عملي من قراءة دقيقة للبيانات وتحليلات ذكاء الأعمال (BI)، لأحوّل الأرقام إلى استراتيجيات تسويقية مؤثرة، وهويات بصرية راسخة، ومسارات نمو واضحة. أدمج أحدث تقنيات وحلول الذكاء الاصطناعي (AI) في تحليل سلوك الجمهور، أتمتة العمليات التسويقية، وصناعة المحتوى التفاعلي، مما يمنح العلامات التجارية ميزة تنافسية حقيقية وسرعة فائقة في تحقيق العوائد.",
        exp_1: "ذكاء الأعمال (Business Intelligence)",
        exp_2: "حلول وتطبيقات الذكاء الاصطناعي (AI)",
        exp_3: "بناء الهويات البصرية والتجارية",
        exp_4: "استراتيجيات وهندسة النمو (Growth)",
        exp_5: "تحسين معدل التحويل (CRO)",
        exp_6: "تحليل البيانات ولوحات التحكم",
        exp_7: "الحملات التسويقية المدفوعة (Google & Meta)",
        exp_8: "أتمتة التسويق والعمليات (Automation)",
        exp_9: "تصميم تجربة المستخدم (UI/UX)",
        exp_10: "تطوير المواقع والمنصات الرقمية",
        exp_11: "صياغة وتوجيه المحتوى الإبداعي الذكي",
        exp_12: "استهداف وتحليل سلوك العملاء",
        
        // Services
        services_title: "مجالات التخصص",
        srv_1_title: "ذكاء الأعمال وتحليل البيانات (BI)",
        srv_1_desc: "بناء لوحات تحكم تفاعلية متقدمة، وتحويل بيانات العملاء والمبيعات إلى رؤى استراتيجية تدعم اتخاذ القرارات وتكشف فرص النمو.",
        srv_2_title: "التسويق واستراتيجيات النمو (Growth)",
        srv_2_desc: "تخطيط وإدارة الحملات الإعلانية الممولة، هندسة مسارات التحويل (Funnels)، وتحسين معدل التحويل (CRO) لتعظيم العائد على الاستثمار.",
        srv_3_title: "بناء الهويات البصرية والتجارب",
        srv_3_desc: "تطوير هويات بصرية متكاملة وعصرية تضمن الاتساق عبر كافة نقاط التماس، وتصنع حضوراً راسخاً يعزز ثقة ومكانة العلامة التجارية.",
        srv_4_title: "حلول وأتمتة الذكاء الاصطناعي (AI)",
        srv_4_desc: "توظيف أحدث نماذج وأدوات الذكاء الاصطناعي التوليدي للأتمتة، تسريع إنتاج المحتوى، تخصيص تجربة العملاء، ورفع كفاءة النظم الرقمية.",
        
        // Project Section Case Studies
        proj_title: "المشاريع ودراسات الحالة",
        proj_subtitle: "مجموعة من المبادرات الرقمية التي قمت بهندستها وإدارتها لربط الهوية والتجربة والأداء.",
        status_featured: "مشروع مميز",
        status_live: "Live",
        status_dev: "Under Dev",
        status_personal: "Personal",
        btn_visit: "زيارة المنصة <i data-lucide='external-link'></i>",
        btn_visit_alt: "رابط بديل <i data-lucide='external-link'></i>",
        lbl_role: "الدور المهني",
        lbl_impact: "الأثر والقيمة المحققة",
        
        tag_web: "Web Dev",
        tag_branding: "Branding",
        tag_marketing: "Marketing",
        tag_systems: "Internal Systems",
        tag_seo: "SEO",
        tag_gads: "Google Ads",
        tag_meta: "Meta Ads",
        tag_strategy: "Marketing Strategy",
        tag_framework: "Experience Framework",

        // Project 0 (Framework)
        p0_title: "بناء إطار النمو الرقمي وتجربة العلامة",
        p0_role: "أخصائي نمو رقمي وتجربة العلامة",
        p0_desc: "ساهمت في بناء وتطوير منظومة رقمية وتسويقية قابلة للتوسع عبر عدة قطاعات وشركات تابعة، من خلال تحسين الحضور الرقمي، تنظيم المحتوى، تطوير المواقع وصفحات الهبوط، تفعيل الحملات الرقمية، ودعم قنوات التواصل والمتابعة. ركز العمل على تحويل المبادرات التسويقية من جهود متفرقة إلى منظومة أكثر وضوحًا وقابلية للقياس.",
        p0_impact_1: "تطوير الحضور الرقمي عبر قطاعات وشركات متعددة",
        p0_impact_2: "تطوير وتفعيل مواقع وصفحات هبوط عالية الأداء للتحويل",
        p0_impact_3: "تنظيم المحتوى، الهوية والرسائل التسويقية الموحدة",
        p0_impact_4: "تفعيل وإطلاق حملات رقمية وتوليد مئات العملاء المحتملين",
        p0_impact_5: "دعم قنوات المتابعة وتحديد فجوات التحويل والأدوات التسويقية",

        // Project 1 (Brand Hub)
        p1_title: "منصة أصول الهوية الرقمية",
        p1_role: "أخصائي تجربة وهوية العلامة",
        p1_desc: "منصة داخلية تفاعلية تم بناؤها لتنظيم وتوحيد أصول الهوية البصرية، وتسهيل الوصول الفوري للشعارات، الخطوط، والملفات الفنية من قبل فرق التسويق والشركاء لضمان الاتساق البصري الكامل.",
        p1_impact_1: "توحيد استخدام عناصر الهوية البصرية في كافة المنتجات والقطاعات",
        p1_impact_2: "تقليل فترات انتظار طلب الأصول وتسهيل تبادلها بنسبة 60%",
        p1_impact_3: "توفير قاعدة أصول آمنة ومرنة تلغي فجوات الاستخدام غير الصحيح للشعارات",

        // Project 2 (Corp Website)
        p2_title: "الموقع المؤسسي للمجموعة",
        p2_role: "أخصائي محتوى وتجربة مستخدم (UX)",
        p2_desc: "إعادة بناء وتطوير واجهة وتجربة المستخدم للموقع المؤسسي للمجموعة، من خلال تحسين هيكلة الصفحات، صياغة المحتوى الاستراتيجي، وتوحيد الأسلوب ليعكس فخامة واحترافية العلامة.",
        p2_impact_1: "هيكلة رحلة المستخدم والتصفح لتسهيل الوصول للخدمات والقطاعات",
        p2_impact_2: "توحيد الأسلوب اللغوي والبصري لتعزيز الحضور والمصداقية المهنية",
        p2_impact_3: "زيادة استلام طلبات الشراكة المباشرة عبر القنوات الرقمية الرسمية",

        // Project 3 (Academy)
        p3_title: "منصة الأكاديمية التعليمية",
        p3_role: "أخصائي التجربة الرقمية والتكامل",
        p3_desc: "المساهمة في بناء المنصة الرقمية للأكاديمية والربط المتكامل بين الموقع وحملات استقطاب المتقدمين لدعم الحضور الأكاديمي وتحسين تجربة حجز الدورات والبرامج.",
        p3_impact_1: "ربط فعال ومباشر للحملات الإعلانية بنظام التسجيل الإلكتروني",
        p3_impact_2: "تحسين وتسهيل مسارات تحويل المتقدمين وتقليل خطوات التسجيل",
        p3_impact_3: "تمكين نظام تتبع دقيق لتحليل الأداء التسويقي وجودة طلبات الزوار",

        // Project 4 (RI88 SaaS)
        p4_title: "نظام إدارة العمليات والعملاء الداخلي",
        p4_role: "مصمم تجربة ومدير المنتج الداخلي",
        p4_desc: "تطوير منصة داخلية مخصصة لإدارة العمليات، أتمتة تدفقات الطلبات، وتتبع العملاء المحتملين بهدف تنظيم البيانات وسد فجوات المتابعة المهنية بين الأقسام.",
        p4_impact_1: "توحيد مصادر استلام طلبات العملاء وتحسين سرعة التعامل معها",
        p4_impact_2: "أتمتة إسناد المهام وإنتاج تقارير الأداء الفورية لمسؤولي المتابعة",
        p4_impact_3: "توفير لوحة تحكم مركزية لمراقبة معدلات التحويل وتطويرها باستمرار",

        // Project 5 (SportX)
        p5_title: "تجربة العلامة الرقمية SportX",
        p5_role: "موجه تجربة العلامة التجارية",
        p5_desc: "مبادرة متكاملة لدمج الهوية البصرية، العرض البصري الرقمي، وتجربة تصفح منصة الخدمات الرياضية لخلق حضور رقمي عصري متميز وجاذب للشباب.",
        p5_impact_1: "توحيد الهوية الرقمية للعلامة في كافة القنوات ونقاط التماس",
        p5_impact_2: "تصميم واجهة مستخدم تفاعلية وجذابة تدعم الهوية الرياضية الحديثة",
        p5_impact_3: "تعزيز مستويات التفاعل الاجتماعي والظهور الرقمي الفخم للعلامة",

        // Project 6 (SportX Landing Page)
        p6_title: "صفحة الهبوط وحملات التحويل الرياضية",
        p6_role: "أخصائي تحسين معدل التحويل (CRO)",
        p6_desc: "تصميم وبناء صفحة هبوط ذات أداء فائق وتكاملها مع حملات إعلانات جوجل وميتا المدفوعة لاستقطاب طلبات حجز عالية الجودة وتحويلها بكفاءة.",
        p6_impact_1: "بناء واجهات هاتف سريعة ومحسنة تماماً لقمع التحويل (Conversion Funnel)",
        p6_impact_2: "تحسين أزرار الدعوة لاتخاذ إجراء (CTAs) وتقليل نسبة الارتداد",
        p6_impact_3: "مضاعفة معدل تحويل الإعلانات المدفوعة وتوليد مئات العملاء الجدد",

        // Project 7 (Real Estate Platform)
        p7_title: "البوابة العقارية وتصفح الوحدات",
        p7_role: "مطور منصات ومهندس واجهات",
        p7_desc: "برمجة وبناء منصة عقارية شاملة تتيح للمستخدمين استكشاف وتصفح المشاريع السكنية والفلل بأسلوب بصري مريح ونظام تواصل مرن وسلس.",
        p7_impact_1: "برمجة فلاتر ذكية وتصفح متكامل للوحدات العقارية حسب الموقع والمواصفات",
        p7_impact_2: "تصميم كروت عرض عقارات غنية بالبيانات وتعتمد على واجهة مستخدم عصرية",
        p7_impact_3: "ربط قنوات تواصل وطلب فورية للمعاينة عبر الواتساب ونموذج الاتصال المباشر",

        // Project 8 (HRKH)
        p8_title: "تطبيق لوحة التحكم والمحتوى الخاص",
        p8_role: "مطور ويب مستقل",
        p8_desc: "تطوير لوحة تحكم مخصصة وتطبيق ويب متكامل كمشروع شخصي واعد، تم تصميمه لاختبار ودمج أحدث تقنيات الويب، والواجهات الحركية الفخمة.",
        p8_impact_1: "تطبيق بنية برمجية حديثة لإدارة المسارات وحماية البيانات الخاصة بالأنظمة",
        p8_impact_2: "تصميم واجهات زجاجية معتمة راقية مستوحاة من أحدث توجهات الـ Dark Mode",
        p8_impact_3: "بناء مكونات مرنة وقابلة للتطوير وإعادة الاستخدام السريع في مشاريع مستقبلية",

        // Project 9 (NAHT Real Estate CRM)
        p9_title: "منصة إدارة العمليات والعملاء (نحت CRM)",
        p9_role: "مهندس ومطور النظام وتجربة المستخدم",
        p9_desc: "تطوير منصة سحابية متكاملة لشركة نحت العقارية لإدارة دورة حياة العملاء (Leads)، أتمتة تدفقات العمل، وربط محادثات واتساب، مع لوحات تحكم متقدمة لمراقبة الأداء العقاري والمبيعات في الوقت الفعلي.",
        p9_impact_1: "إدارة وأتمتة مسار العملاء المتوقعين (Leads Pipeline) وتوزيعهم الفوري على فريق المبيعات",
        p9_impact_2: "تكامل ذكي ومباشر مع محادثات واتساب لرفع سرعة الاستجابة ومعدلات إغلاق الصفقات",
        p9_impact_3: "لوحة تحكم مركزية للتحليلات الإدارية، التقارير الأسبوعية، ومتابعة المشاريع السكنية",

        // How I Work Refinements
        work_title: "آلية العمل",
        work_1_title: "فهم الهدف",
        work_1_desc: "أبدأ بفهم احتياج العلامة، الجمهور، والرسالة الأساسية.",
        work_2_title: "بناء التوجه",
        work_2_desc: "أحوّل الفكرة إلى توجه بصري ومحتوى وتجربة رقمية واضحة.",
        work_3_title: "تنفيذ بمرونة",
        work_3_desc: "أعمل على المواقع، الحملات، المحتوى، والأنظمة بطريقة عملية وسريعة.",
        work_4_title: "تحسين مستمر",
        work_4_desc: "أراجع التجربة، أحسن النتائج، وأطور الهوية بناءً على الاستخدام الفعلي.",

        // Impact Across Business Units Section
        impact_title: "الأثر الاستراتيجي عبر الشركات التابعة",
        impact_subtitle: "عبر قطاعات وشركات متعددة، ساهمت في صياغة وتطوير منظومة مدفوعة بذكاء الأعمال وحلول الذكاء الاصطناعي لربط الأهداف بالنتائج والأنظمة بالنمو.",
        impact_card_1_title: "ذكاء الأعمال والتحليلات",
        impact_card_1_desc: "بناء لوحات المتابعة وربط مصادر البيانات لقياس أداء المبيعات والحملات بدقة.",
        impact_card_2_title: "بناء الهوية والمحتوى",
        impact_card_2_desc: "توحيد المعايير البصرية وصياغة رسائل تسويقية ذكية تعكس هوية كل قطاع.",
        impact_card_3_title: "التسويق والنمو الرقمي",
        impact_card_3_desc: "إطلاق وإدارة الحملات الممولة وهندسة مسارات التحويل لزيادة العملاء المؤهلين.",
        impact_card_4_title: "أتمتة الذكاء الاصطناعي والأنظمة",
        impact_card_4_desc: "تطبيق أدوات AI وأنظمة سحابية متقدمة لتسريع التشغيل وسد فجوات المتابعة.",

        // Branding Comparison
        brand_title: "تطوير الهوية البصرية - قبل وبعد",
        brand_subtitle: "إعادة بناء وتوجيه الأسلوب البصري للعلامة التجارية ليعكس الحضور الحديث والقيم المهنية الفخمة للمجموعة.",
        brand_after: "بعد التحديث (New)",
        brand_before: "قبل (Old)",

        // Campaigns Before & After
        camp_title: "الاتجاه الإبداعي للحملات",
        camp_subtitle: "تطور نوعي في صياغة المحتوى والتصميم البصري لتقليل التشتت والتركيز على الرسالة التسويقية.",
        camp_old_title: "التوجه البصري القديم",
        camp_old_desc: "تصاميم تقليدية، معلومات كثيفة مكدسة، وأسلوب بصري غير موحد يشتت انتباه الجمهور.",
        camp_old_list_1: "عدم وجود هوية بصرية موحدة للعلامة",
        camp_old_list_2: "ألوان وخطوط غير متناسقة في التصاميم",
        camp_old_list_3: "محتوى نصي مكثف يضعف التدرج والجاذبية البصرية",
        camp_old_list_4: "محدودية واضحة في استخدام الأبعاد الإبداعية واللمسات الفنية",
        camp_old_list_5: "تركيز أقل على الرسالة الأساسية وقيمة الخدمة",
        camp_new_title: "التوجه الإبداعي الجديد",
        camp_new_desc: "هوية بصرية موحدة، رسائل واضحة مركزة، وتصاميم فخمة تدعم قيمة ومكانة العلامة.",
        camp_new_list_1: "هوية بصرية موحدة ومحترفة تبني الثقة الفورية",
        camp_new_list_2: "ألوان متناسقة وفخمة (الكحلي الداكن، الذهبي، الأبيض)",
        camp_new_list_3: "تصاميم حديثة ومريحة للعين تركز على قيمة الرسالة",
        camp_new_list_4: "استخدام صور احترافية عالية الدقة وعناصر بصرية قوية",
        camp_new_list_5: "ترتيب بصري هندسي واضح يدعم تجربة المستخدم المتكاملة",
        
        // Gallery
        nav_gallery: "المعرض",
        gallery_title: "معرض التغطيات الميدانية",
        gallery_subtitle: "لقطات ومحطات مميزة تعكس حضورنا وتواجدنا البصري في المعارض والمؤتمرات الإبداعية.",
        filter_all: "الكل",
        filter_events: "الفعاليات والتغطيات",
        filter_branding: "الهوية وتجارب بصرية",
        filter_campaigns: "الحملات والتوجيه البصري",
        filter_web: "المواقع والأنظمة",

        // Contact
        contact_title: "لنبقَ على تواصل",
        contact_desc: "إذا كنت ترغب في بناء حضور رقمي متكامل لعلامتك التجارية، أو تصميم تجربة مستخدم فخمة، أو مناقشة فرص التعاون المهني، يسعدني جداً تواصلك المباشر معي عبر البريد الإلكتروني.",
        
        // Footer
        footer_copy: "جميع الحقوق محفوظة © ريان الضحيان."
    },
    en: {
        // Nav
        nav_logo: "Rayyan Aldhuhayan",
        nav_about: "About Me",
        nav_services: "Services",
        nav_projects: "Featured Projects",
        nav_branding: "Branding",
        nav_campaigns: "Campaigns",
        nav_contact: "Contact Me",
        
        // Hero
        hero_badge: "Business Intelligence, Marketing & Brand Growth Specialist | AI-Powered",
        hero_title: "Rayyan Aldhuhayan",
        hero_desc: "Integrating Business Intelligence (BI) and data analytics with strategic marketing, brand identity building, and AI-driven workflows to engineer scalable growth and high-impact digital experiences.",
        btn_view_work: "View My Work <i data-lucide='arrow-down'></i>",
        btn_download_cv: "Download CV <i data-lucide='file-text'></i>",
        btn_contact_me: "Contact Me <i data-lucide='mail'></i>",
        card_growth: "BI & Growth",
        card_growth_desc: "Data & AI-Driven Decisions",
        card_creative: "Brand Identity",
        card_dev: "AI & Systems",
        
        // Stats / Categories
        stat_projects: "Platforms & Systems",
        stat_branding: "Brand Identities",
        stat_campaigns: "Growth & Campaigns",
        stat_clients: "Client Partnerships",
        
        practical_exp: "Hands-on expertise in Business Intelligence, data analytics, brand identity building, digital campaigns, and leveraging AI tools to accelerate enterprise growth.",
        hero_subtitle: "Business Intelligence, Marketing, Brand Identity & Growth Specialist (AI-Driven)",
        about_title: "About Me",
        about_lead: "Combining Business Intelligence, strategic marketing, brand building, and AI to lead sustainable growth.",
        about_text: "My methodology begins with precision data analytics and Business Intelligence (BI), transforming raw numbers into high-converting marketing strategies, authoritative brand identities, and clear growth funnels. By integrating cutting-edge Artificial Intelligence (AI) solutions into audience behavior analysis, workflow automation, and content generation, I empower brands to achieve unprecedented agility, efficiency, and measurable ROI.",
        exp_1: "Business Intelligence (BI)",
        exp_2: "Artificial Intelligence (AI) Solutions",
        exp_3: "Brand & Visual Identity Building",
        exp_4: "Growth Engineering & Strategies",
        exp_5: "Conversion Rate Optimization (CRO)",
        exp_6: "Data Analytics & Dashboards",
        exp_7: "Paid Acquisition (Google & Meta Ads)",
        exp_8: "Marketing & Workflow Automation",
        exp_9: "UI/UX Experience Design",
        exp_10: "Web & Platform Development",
        exp_11: "AI-Powered Content Strategy",
        exp_12: "Audience Segmentation & Behavior",
        
        // Services
        services_title: "Areas of Expertise",
        srv_1_title: "Business Intelligence & Analytics (BI)",
        srv_1_desc: "Architecting interactive executive dashboards and transforming customer and sales data into actionable strategic insights that power decision-making.",
        srv_2_title: "Strategic Marketing & Growth",
        srv_2_desc: "Engineering high-ROI paid ad campaigns, optimizing conversion funnels (CRO), and driving scalable client acquisition.",
        srv_3_title: "Brand Identity & Experiences",
        srv_3_desc: "Crafting cohesive, modern brand identities that ensure consistency across all customer touchpoints and instill lasting market trust.",
        srv_4_title: "AI-Driven Solutions & Automation",
        srv_4_desc: "Leveraging generative AI models and intelligent automation to accelerate content production, personalize user journeys, and streamline operations.",
        
        // Project Section Case Studies
        proj_title: "Featured Case Studies",
        proj_subtitle: "A collection of digital initiatives engineered to connect brand identity, user experience, and performance.",
        status_featured: "Featured",
        status_live: "Live",
        status_dev: "Under Dev",
        status_personal: "Personal",
        btn_visit: "Visit Platform <i data-lucide='external-link'></i>",
        btn_visit_alt: "Alternative Link <i data-lucide='external-link'></i>",
        lbl_role: "Professional Role",
        lbl_impact: "Delivered Value & Impact",
        
        tag_web: "Web Dev",
        tag_branding: "Branding",
        tag_marketing: "Marketing",
        tag_systems: "Internal Systems",
        tag_seo: "SEO",
        tag_gads: "Google Ads",
        tag_meta: "Meta Ads",
        tag_strategy: "Marketing Strategy",
        tag_framework: "Experience Framework",

        // Project 0 (Framework)
        p0_title: "Digital Growth & Brand Experience Framework",
        p0_role: "Digital Growth & Brand Experience Specialist",
        p0_desc: "Contributed to building and improving a scalable digital and marketing framework across multiple business units and affiliated companies by enhancing digital presence, structuring content, developing websites and landing pages, activating digital campaigns, and supporting communication and follow-up channels. The work focused on shifting marketing initiatives from scattered efforts into a clearer and more measurable system.",
        p0_impact_1: "Improved digital presence across multiple business units",
        p0_impact_2: "Developed high-performing websites and custom conversion landing pages",
        p0_impact_3: "Structured unified content, brand guidelines, and core messaging",
        p0_impact_4: "Activated targeted digital campaigns generating hundreds of potential leads",
        p0_impact_5: "Supported operational systems, identified follow-up and conversion gaps",

        // Project 1 (Brand Hub)
        p1_title: "Digital Brand Identity Hub",
        p1_role: "Brand Experience & Platform Architect",
        p1_desc: "An interactive internal platform designed to unify visual identity across business units, providing immediate access to approved logos, color codes, fonts, and assets for marketing, creative, and technical teams.",
        p1_impact_1: "Unified visual identity usage across all corporate divisions and subsidiaries",
        p1_impact_2: "Reduced internal design asset request turn-around times by 60%",
        p1_impact_3: "Established a secure self-serve brand asset repository that eliminated identity dilution",

        // Project 2 (Corp Website)
        p2_title: "Group Corporate Website",
        p2_role: "UX & Content Specialist",
        p2_desc: "Overhauled the corporate website presence by reorganizing page structure, clarifying complex service offerings, and establishing a unified modern brand footprint reflecting industry leadership.",
        p2_impact_1: "Restructured user journeys and navigation flows for clearer division visibility",
        p2_impact_2: "Standardized the editorial and visual tone to project high-end professional credibility",
        p2_impact_3: "Generated higher numbers of direct, high-value corporate partnership inquiries",

        // Project 3 (Academy)
        p3_title: "Educational Academy Platform",
        p3_role: "Digital Experience & Integration Specialist",
        p3_desc: "Connected the academy’s digital platform with content and active campaigns to simplify the applicant journey, supporting digital presence and enrollment optimization.",
        p3_impact_1: "Linked marketing campaigns directly with digital course registration flows",
        p3_impact_2: "Optimized user conversion funnels and visual layouts for applicants",
        p3_impact_3: "Integrated advanced analytics to trace visitor sources and advertising ROI",

        // Project 4 (RI88 SaaS)
        p4_title: "Internal Operations & Lead Management System",
        p4_role: "Product Owner & UX Designer",
        p4_desc: "Designed and developed a custom internal operational CRM and SaaS tool to structure lead intake, automate request routing, and eliminate client follow-up gaps between departments.",
        p4_impact_1: "Centralized multi-channel customer requests into one structured operational dashboard",
        p4_impact_2: "Automated team assignment and produced real-time operational performance reports",
        p4_impact_3: "Eliminated operational communication gaps between marketing and sales teams",

        // Project 5 (SportX)
        p5_title: "SportX Brand Experience Direction",
        p5_role: "Brand Experience Director",
        p5_desc: "An integrated initiative merging brand identity, modern booking user flows, and dynamic UI elements to establish a highly professional and premium sports service brand.",
        p5_impact_1: "Unified the digital identity of the brand across all branches and digital interfaces",
        p5_impact_2: "Created a premium, visually engaging UI layout optimized for younger demographics",
        p5_impact_3: "Significantly enhanced organic social traffic and brand authority online",

        // Project 6 (SportX Landing Page)
        p6_title: "Conversion-Rate Optimized Landing System",
        p6_role: "Conversion Rate Optimization (CRO) Specialist",
        p6_desc: "Engineered a high-performance landing page system integrated with Google and Meta paid campaigns, specifically built to optimize landing actions and capture qualified sales leads.",
        p6_impact_1: "Optimized super-fast mobile layouts specifically tailored to paid traffic funnels",
        p6_impact_2: "Conducted A/B testing on call-to-action button placements to lower bounce rates",
        p6_impact_3: "Doubled paid campaign registration conversion rates, generating hundreds of customer actions",

        // Project 7 (Real Estate Platform)
        p7_title: "Real Estate Portal & Listing System",
        p7_role: "Full-Stack Developer & UX Architect",
        p7_desc: "Programmed a modern, comprehensive real estate portal allowing users to explore residential units through a highly visual layout and an intuitive inquiry system.",
        p7_impact_1: "Developed robust search filters for properties by location, price, and specs",
        p7_impact_2: "Designed clean, data-rich property detail cards that offer high visual comfort",
        p7_impact_3: "Integrated direct whatsapp hooks and callback triggers with real estate advisors",

        // Project 8 (HRKH)
        p8_title: "Custom Workspace & CMS Application",
        p8_role: "Independent Full-Stack Developer",
        p8_desc: "Developed a custom web application and secure private dashboard as a personal project, testing advanced state management, secure routing, and interactive glassmorphic dark layouts.",
        p8_impact_1: "Implemented robust backend security configurations for secure private access",
        p8_impact_2: "Designed high-end glassmorphic dark layouts utilizing modern web design best practices",
        p8_impact_3: "Engineered reusable modular components to accelerate future platform iterations",

        // Project 9 (NAHT Real Estate CRM)
        p9_title: "NAHT Real Estate CRM & Operations",
        p9_role: "Lead Product Developer & UX Architect",
        p9_desc: "Engineered an end-to-end cloud CRM and operations platform for NAHT Real Estate to streamline lead management, automate sales pipelines, and integrate WhatsApp communications with live executive analytics.",
        p9_impact_1: "Automated real estate lead intake and dynamic sales pipeline routing",
        p9_impact_2: "Seamless WhatsApp messaging integration for rapid response and higher deal conversions",
        p9_impact_3: "Central executive dashboard for weekly team reporting, performance metrics, and project tracking",

        // How I Work Refinements
        work_title: "How I Work",
        work_1_title: "Understand the Goal",
        work_1_desc: "I start by understanding the brand need, audience, and core message.",
        work_2_title: "Build the Direction",
        work_2_desc: "I turn the idea into a clear visual direction, content approach, and digital experience.",
        work_3_title: "Execute with Flexibility",
        work_3_desc: "I execute websites, campaigns, content, and systems in a practical and flexible way.",
        work_4_title: "Improve Continuously",
        work_4_desc: "I review the experience, improve outcomes, and refine the brand based on real usage.",

        // Impact Across Business Units Section
        impact_title: "Strategic Impact Across Business Units",
        impact_subtitle: "Across diverse sectors and subsidiaries, I spearheaded data-driven and AI-empowered systems uniting business intelligence with performance and technology with growth.",
        impact_card_1_title: "BI & Performance Analytics",
        impact_card_1_desc: "Deploying real-time tracking dashboards and linking data sources to measure sales and marketing ROI.",
        impact_card_2_title: "Brand Identity & Content",
        impact_card_2_desc: "Standardizing visual guidelines and crafting intelligent messaging that elevates corporate prestige.",
        impact_card_3_title: "Digital Marketing & Growth",
        impact_card_3_desc: "Directing paid campaigns and high-converting funnel architectures to generate qualified leads.",
        impact_card_4_title: "AI Automation & Systems",
        impact_card_4_desc: "Implementing AI workflows and bespoke cloud platforms to automate operations and maximize speed.",

        // Branding Comparison
        brand_title: "Visual Identity - Before & After",
        brand_subtitle: "Restructuring and redesigning the corporate brand identity to reflect professionalism, growth, and industry prestige.",
        brand_after: "After Update (New)",
        brand_before: "Before (Old)",

        // Campaigns Before & After
        camp_title: "Campaign Creative Direction",
        camp_subtitle: "A visible evolution in advertising visuals and content layout to minimize clutter and focus on core value delivery.",
        camp_old_title: "Previous Creative Direction",
        camp_old_desc: "Traditional visuals, heavy text overlays, and lack of visual harmony leading to audience distraction.",
        camp_old_list_1: "Inconsistent visual branding across channels",
        camp_old_list_2: "Uncoordinated color combinations and fonts",
        camp_old_list_3: "Dense text overlays weakening visual hierarchy",
        camp_old_list_4: "Minimal creative execution and flat assets",
        camp_old_list_5: "Less focus on targeted core messaging",
        camp_new_title: "New Creative Direction",
        camp_new_desc: "Unified visual aesthetics, focused microcopy, and elegant compositions highlighting high-end brand value.",
        camp_new_list_1: "Unified visual style establishing instant authority",
        camp_new_list_2: "Harmonious corporate palette (Navy Blue, Gold, White)",
        camp_new_list_3: "Minimal, focused typography emphasizing the core message",
        camp_new_list_4: "High-resolution custom photography and vector accents",
        camp_new_list_5: "Clear geometric order supporting visual comfort and engagement",
        
        // Gallery
        nav_gallery: "Gallery",
        gallery_title: "Field & Creative Gallery",
        gallery_subtitle: "Visual highlights documenting our active brand presence and strategic exhibition activations.",
        filter_all: "All",
        filter_events: "Events & Coverages",
        filter_branding: "Branding Experiences",
        filter_campaigns: "Campaigns Direction",
        filter_web: "Web & Platforms",

        // Contact
        contact_title: "Let's Stay Connected",
        contact_desc: "If you are looking to build a unified digital brand presence, elevate your user experience, or explore professional opportunities, feel free to reach out directly via email.",
        
        // Footer
        footer_copy: "All Rights Reserved © Rayyan Aldhuhayan."
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
    if (!langBtn) return;
    
    // Load saved language preference or default to 'ar'
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        currentLang = 'ar';
    }

    // Set initial page direction and state based on currentLang
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    
    // Always apply translations on load to guarantee consistency
    updateContent();
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        
        // Save preference
        localStorage.setItem('portfolio_lang', currentLang);
        
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
                el.innerHTML = lang === 'ar'
                    ? (el.dataset.captionAr || el.innerHTML)
                    : (el.dataset.captionEn || el.innerHTML);
            });
        }, 50);
    });
}
