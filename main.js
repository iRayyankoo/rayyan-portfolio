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
        
        p0_title: "منظومة نحت العقارية المتكاملة (ERP)",
        p0_desc: "نظام ERP عقاري شامل لإدارة العمليات التشغيلية، والقيود المالية، والكوادر البشرية، وإدارة المشاريع والوحدات.",
        status_erp: "نظام مؤسسي نشط",

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
        footer_credit: "Designed and built from scratch.",

        // --- Case Studies Shared Keys ---
        cs_back: "العودة لكافة المشاريع",
        cs_sidebar_highlights: "أبرز الخصائص",
        cs_sidebar_built_with: "التقنيات المستخدمة",
        cs_next_project: "المشروع التالي",
        cs_action_live: "معاينة المنصة الحية",

        // --- Case Studies Project-Specific Keys ---
        cs_erp_tagline: "منظومة تخطيط الموارد وإدارة العمليات المؤسسية",
        cs_erp_status: "نظام مؤسسي نشط",
        cs_erp_title: "منظومة نحت العقارية المتكاملة (ERP)",
        cs_erp_lead: "منصة رقمية مؤسسية تجمع بين ذكاء الأعمال (BI) والإدارة المالية المتقدمة، وإدارة الكوادر والمشاريع العقارية في بيئة تشغيلية موحدة ومؤمنة بالكامل تدعم التوسع والنمو.",
        cs_erp_sec: "معمارية حوكمة وصلاحيات RBAC مشددة",
        cs_erp_hl1: "نظام قيود محاسبية وميزان مراجعة مالي متكامل D4 مع سجل تدقيق مشفر.",
        cs_erp_hl2: "معمارية صلاحيات RBAC متقدمة مع بيئة تجارب معزولة (Isolated Test Lab).",
        cs_erp_hl3: "إدارة تفاعلية لمخزون المشاريع العقارية والوحدات والنماذج والتسعير الفوري.",
        cs_erp_hl4: "بوابة موارد بشرية وإدارة مهام وخدمات موظفين آلية بالكامل.",
        cs_erp_hl5: "لوحات ذكاء أعمال (BI) لقياس أداء التسويق وسرعة التحويل ومعدلات العائد.",
        cs_erp_p1: "واجهت الشركات العقارية المتنامية تشتتاً حاداً بين برامج المحاسبة المنعزلة، وجداول المبيعات اليدوية، وملفات الكوادر المتفرقة. تم بناء <strong>منظومة نحت العقارية المتكاملة</strong> لتكون النواة التشغيلية المركزية التي تسد هذه الفجوات، وتربط كافة التدفقات من لحظة تسجيل العميل وحتى إغلاق القيود المحاسبية وتسليم الوحدات.",
        cs_erp_p2: "بنيت معمارية البيانات على أحدث تقنيات <code>Next.js 15</code> وقاعدة بيانات علائقية عبر <code>Prisma ORM</code> مع تطبيق معايير المحاسبة المزدوجة <code>Double-Entry General Ledger</code>. تتيح المنظومة تتبع قيود اليومية، موازين المراجعة، ومراكز التكلفة لكل مشروع عقاري، مع سجل تدقيق غير قابل للتعديل <code>Append-Only Audit Log</code> لضمان الشفافية والامتثال المالي الصارم.",
        cs_erp_p3: "يشتمل النظام على محرك تفاعلي لإدارة الأصول والمشاريع وتحديث الحالات التشغيلية، وبوابة خدمات ذاتية للموارد البشرية لإدارة الإجازات وتوزيع المهام الإدارية والهندسية وفق مصفوفة صلاحيات دقيقة <em>Role-Based Access Control (RBAC)</em> تضمن سرية البيانات وحمايتها.",
        cs_erp_p4: "توفر لوحات ذكاء الأعمال المدمجة <code>BI Telemetry</code> رؤية لحظية للإدارة التنفيذية حول العائد على الاستثمار، وسرعة دوران الصفقات. كما دُمج وكلاء الذكاء الاصطناعي <em>AI Automation</em> لتصنيف طلبات العملاء آلياً، مما وفر أكثر من <em>60%</em> من وقت المراجعة اليدوية وسرّع من اتخاذ القرارات التوسعية.",

        cs_crm_tagline: "منصة ذكاء الأعمال وإدارة مسارات المبيعات العقارية",
        cs_crm_title: "منصة نحت العقارية (CRM)",
        cs_crm_lead: "نظام رقمي سحابي متكامل لإدارة علاقات العملاء في قطاع الوساطة والتطوير العقاري، يربط بين الحملات الإعلانية ومسار الصفقات، ويوفر لوحات تحكم فورية لتحليل أداء الوسطاء والمبيعات.",
        cs_crm_leads: "+15,000 عميل محتمل تمت معالجتهم",
        cs_crm_hl1: "محرك إدارة الصفقات والمبيعات العقارية تتبع المراحل ورفع معدلات الإغلاق.",
        cs_crm_hl2: "توزيع الصفقات وتوزيع المهام على فريق البيع مع Google وMeta Ads.",
        cs_crm_hl3: "تتبع دقيق لمصدر العميل (UTM Tracking) وقياس العائد الإعلاني ROAS.",
        cs_crm_hl4: "ربط مباشر مع WhatsApp لسرعة التواصل وتوثيق سجل المحادثات.",
        cs_crm_hl5: "تقارير وتحليلات لحظية عن أداء كل وسيط ومعدلات الاستجابة والتحويل.",
        cs_crm_p1: "في قطاع التسويق العقاري عالي القيمة، يُعد هدر العملاء المحتملين <em>Lead Leakage</em> وبطء استجابة الوسطاء السبب الرئيسي في ضياع الصفقات. تم تطوير <strong>منصة نحت CRM</strong> لمعالجة هذا التحدي عبر أتمتة استقبال الفرص من الحملات الإعلانية لحظياً، وتوجيهها فورياً للمستشار العقاري المختص وفق الميزانية والاهتمام الجغرافي.",
        cs_crm_p2: "رُبطت المنصة مباشرة مع مصادر الإعلانات (Google Ads & Meta Ads) عبر <code>Webhooks</code> مخصصة لتحليل مسار الإحالة وحملات <code>UTM</code> بدقة متناهية. تعرض لوحة القيادة التنفيذية مؤشرات فورية لمعدل التحويل <code>CRO</code>، وتكلفة الاستحواذ <code>CAC</code>، والزمن المستغرق من أول تواصل حتى إتمام البيع.",
        cs_crm_p3: "يتضمن النظام خوارزمية ذكية لتوزيع الفرص <em>Smart Distribution</em> تضمن التوزيع العادل والسريع للعملاء، مع تتبع حالة كل عميل عبر مراحل مسار المبيعات المعتمد. كما تم دمج قنوات التواصل عبر WhatsApp وتوثيق سجل المكالمات والملاحظات في ملف العميل الموحد.",
        cs_crm_p4: "ساهمت المنصة في خفض زمن الاستجابة للعملاء إلى أقل من <em>8 دقائق</em>، مما حقق قفزة نوعية في حجز المعاينات الميدانية بنسبة تجاوزت <em>38%</em>، ومكّن فريق التسويق من توجيه الميزانيات بدقة نحو القنوات الأكثر تحقيقاً للعائد الاستثماري.",

        cs_ts_tagline: "المنصة الرقمية الموحدة لشركات المجموعة",
        cs_ts_title: "منصة مجموعة T&S القابضة",
        cs_ts_lead: "منصة استثمارية ومؤسسية تعيد هيكلة الحضور الرقمي لمجموعة T&S، موحدة 10 قطاعات أعمال كبرى تحت مظلة بصرية واستراتيجية واحدة تعكس القوة المالية وموثوقية المجموعة.",
        cs_ts_action: "زيارة الموقع المؤسسي",
        cs_ts_subs: "10 قطاعات أعمال موحدة",
        cs_ts_hl1: "معمارية رقمية موحدة تجمع 10 قطاعات استثمارية كبرى تحت هوية بصرية واحدة.",
        cs_ts_hl2: "نظام إدارة محتوى فائق السرعة والأمان لتحديث إعلانات الشركات.",
        cs_ts_hl3: "زمن تحميل فائق (Sub-second load) وبنية سحابية موزعة عبر CDN.",
        cs_ts_hl4: "تصميم متجاوب بالكامل مع أعلى معايير سهولة الوصول وتجربة المستخدم.",
        cs_ts_hl5: "بوابة تواصل موحدة لربط المستثمرين والعملاء بالقطاع المستهدف مباشرة.",

        cs_sportx_tagline: "منظومة إدارة الرياضة والبطولات وحجوزات الملاعب",
        cs_sportx_title: "منصة SportX الرياضية",
        cs_sportx_lead: "منصة رقمية شاملة لإدارة الفعاليات الرياضية، توفر حلول حجز الملاعب الفورية، إدارة لوائح وجداول البطولات، وتجربة جماهيرية تفاعلية تعتمد على البيانات لتوسيع قاعدة المشاركين.",
        cs_sportx_action: "منصة البطولات والملاعب",
        cs_sportx_users: "+20,000 مستخدم وحجز رياضي",
        cs_sportx_hl1: "محرك حجز فوري للملاعب وإدارة التوفر اللحظي عبر خوادم سريعة Redis.",
        cs_sportx_hl2: "جدولة آلية لبطولات المجموعات وخروج المغلوب وحساب النقاط تلقائياً.",
        cs_sportx_hl3: "إصدار تذاكر ذكية عبر QR Code لتسهيل الدخول عند البوابات.",
        cs_sportx_hl4: "ربط آمن مع بوابات الدفع الإلكتروني (مدى، فيزا، و Apple Pay).",
        cs_sportx_hl5: "لوحة تحكم للمنظمين وإحصائيات مباشرة لنسب الحجوزات والإيرادات اليومية.",

        cs_brand_tagline: "منظومة موحدة للأدلة الإرشادية والأصول البصرية",
        cs_brand_title: "بوابة ونظام الهوية البصرية",
        cs_brand_lead: "بوابة رقمية تفاعلية تجمع كافة أدلة الهوية، الأصول البصرية، والخطوط، لتكون المرجع الموحد لفرق التصميم والتسويق والشركاء، وتضمن ثبات الشخصية البصرية عبر كافة المنصات.",
        cs_brand_action: "نظام تصميم رقمي حي",
        cs_brand_tokens: "+200 أصل بصري ومحدد تصميم موحد",
        cs_brand_hl1: "مستودع أصول بصرية رقمي يدعم كافة الصيغ المتجهة والطباعية والرقمية.",
        cs_brand_hl2: "توثيق تفاعلي لباليتات الألوان مع كود النسخ السريع وقيم Hex وRGB.",
        cs_brand_hl3: "معايير استخدام الشعار والمساحات الآمنة لمنع التشوه البصري.",
        cs_brand_hl4: "دليل طباعة ومواصفات خامات التغليف لتوحيد الجودة عبر الموردين.",
        cs_brand_hl5: "مكتبة أيقونات ورموز مخصصة تعكس روح وهوية العلامة التجارية.",

        cs_hrkh_tagline: "بناء الحضور الرقمي ومسارات استقطاب الكفاءات والحلول الإدارية",
        cs_hrkh_title: "منصة وحملات شركة حركة",
        cs_hrkh_lead: "منظومة تسويقية ورقمية متكاملة لشركة 'حركة' المتخصصة في استقطاب الكفاءات والحلول الإدارية، تجمع بين منصة B2B احترافية، وحملات نمو موجهة لأصحاب القرار في كبرى الشركات.",
        cs_hrkh_live: "حلول استقطاب كفاءات B2B",
        cs_hrkh_clients: "+30 شراكة مؤسسية في 6 أشهر",
        cs_hrkh_hl1: "بناء منصة رقمية تركز على جذب عملاء B2B واستقطاب الكفاءات التنفيذية.",
        cs_hrkh_hl2: "تصميم مسار تقديم تفاعلي وسهل للباحثين عن عمل مع فرز آلي للسير.",
        cs_hrkh_hl3: "إطلاق حملات تسويق نمو موجهة على LinkedIn للمدراء التنفيذيين ومسؤولي HR.",
        cs_hrkh_hl4: "هندسة صفحة هبوط ذات معدل تحويل مرتفع لشرح الخدمات والحلول.",
        cs_hrkh_hl5: "لوحة قياس فورية لطلبات التوظيف ومتابعة عقود الشركات الجديدة.",

        cs_ri88_tagline: "تطوير الهوية البصرية، التغليف، وتجربة العلامة التجارية",
        cs_ri88_title: "الهوية التجارية Ri88",
        cs_ri88_lead: "مشروع متكامل لتأسيس الهوية التجارية وتجربة العميل لعلامة Ri88 في قطاع الأغذية والمشروبات، يجمع بين التصميم البصري الرفيع، هندسة التغليف، وصياغة تجربة حسية فريدة للعميل في نقاط البيع.",
        cs_ri88_action: "تجربة علامة متكاملة 360°",
        cs_ri88_metric: "هندسة تغليف وخط إنتاج متكامل",
        cs_ri88_hl1: "تطوير هوية بصرية فاخرة تعكس مفهوم الجودة والتميز الاستثنائي.",
        cs_ri88_hl2: "تصميم هندسي متقن لعلب التغليف مع مراعاة الجودة وسهولة الاستخدام.",
        cs_ri88_hl3: "اختيار خامات ورق وطباعة راقية تعزز من قيمة المنتج الاستهلاكي.",
        cs_ri88_hl4: "تصميم تجربة فتح العلبة (Unboxing) لتترك انطباعاً استثنائياً لدى العميل.",
        cs_ri88_hl5: "دليل إرشادي لاستخدام الهوية ونبرة الصوت (Tone of Voice) للعلامة."
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
        
        p0_title: "Naht Enterprise ERP & Operations",
        p0_desc: "End-to-end real estate ERP orchestrating corporate operations, general ledger accounting, HR workflows, and project asset modeling.",
        status_erp: "Active ERP system",

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
        footer_credit: "Designed and built from scratch.",

        // --- Case Studies Shared Keys ---
        cs_back: "Back to all projects",
        cs_sidebar_highlights: "Key Highlights",
        cs_sidebar_built_with: "Technologies & Capabilities",
        cs_next_project: "Next Project",
        cs_action_live: "Visit Live Platform",

        // --- Case Studies Project-Specific Keys ---
        cs_erp_tagline: "Enterprise Resource Planning & Operations Engine",
        cs_erp_status: "Active ERP system",
        cs_erp_title: "Naht Enterprise ERP & Operations",
        cs_erp_lead: "Enterprise platform uniting Business Intelligence (BI), automated general ledger accounting, HR workflows, and real estate portfolio assets in a unified, secured operational environment.",
        cs_erp_sec: "Hardened RBAC governance & audit trails",
        cs_erp_hl1: "Integrated D4 general ledger & financial trial balance with encrypted audit log.",
        cs_erp_hl2: "Hardened RBAC permission matrix with isolated sandbox testing environment.",
        cs_erp_hl3: "Real-time real estate inventory engine with unit models and dynamic pricing.",
        cs_erp_hl4: "Automated HR portal, task distribution, and employee self-service workflows.",
        cs_erp_hl5: "Executive BI dashboards tracking marketing ROAS, deal velocity, and portfolio ROI.",
        cs_erp_p1: "Rapidly growing real estate enterprises often struggle with fragmented accounting software, manual sales spreadsheets, and disconnected workforce records. The <strong>Naht Integrated Real Estate ERP</strong> was architected as the central operational backbone, connecting the entire pipeline from buyer onboarding to journal entry reconciliation and property unit handovers.",
        cs_erp_p2: "The data architecture is powered by <code>Next.js 15</code> and a relational engine via <code>Prisma ORM</code>, enforcing strict <code>Double-Entry General Ledger</code> accounting. The system enables real-time tracking of daily journals, trial balance ledgers, and cost centers per project, backed by an immutable <code>Append-Only Audit Log</code> for strict financial compliance.",
        cs_erp_p3: "The platform features a live property asset and project engine, coupled with an automated HR self-service portal for leave workflows and task dispatching governed by granular <em>Role-Based Access Control (RBAC)</em> to guarantee operational security and confidentiality.",
        cs_erp_p4: "Embedded <code>BI Telemetry</code> dashboards deliver real-time executive visibility into marketing ROI, deal conversion velocity, and margin yield. Integrated <em>AI Automation</em> agents autonomously classify client inquiries, saving over <em>60%</em> of manual audit time and accelerating expansion decisions.",

        cs_crm_tagline: "Real Estate Sales CRM & Business Intelligence Engine",
        cs_crm_title: "NAHT Real Estate Sales CRM & BI",
        cs_crm_lead: "Cloud-native CRM platform built for high-velocity real estate brokerage, tracking leads from ad spend to closed deals with real-time broker analytics and deal pipelines.",
        cs_crm_leads: "+15,000 qualified buyer leads processed",
        cs_crm_hl1: "Real estate pipeline engine tracking deal stages and accelerating close rates.",
        cs_crm_hl2: "Automated lead distribution connecting Google & Meta Ads to broker teams.",
        cs_crm_hl3: "Granular UTM tracking attributing revenue to specific ad campaigns and ROAS.",
        cs_crm_hl4: "Direct WhatsApp API integration for instant engagement and conversation logging.",
        cs_crm_hl5: "Real-time broker performance telemetry, response latency, and conversion stats.",
        cs_crm_p1: "In high-value real estate transactions, lead leakage and slow broker response times are the primary drivers of lost deal revenue. The <strong>NAHT Real Estate CRM & BI</strong> was engineered to eliminate this operational friction by automating real-time ad intake and routing inbound leads to specialized brokers based on budget criteria and property location.",
        cs_crm_p2: "Direct bi-directional webhooks connect Google Ads and Meta Ads campaigns with granular <code>UTM</code> attribution models. An executive dashboard delivers live telemetry on Conversion Rate Optimization <code>CRO</code>, Customer Acquisition Cost <code>CAC</code>, and time-to-close metrics across active sales cycles.",
        cs_crm_p3: "The platform incorporates a proprietary <em>Smart Distribution</em> algorithm ensuring equitable, immediate lead assignment across the brokerage team, paired with native WhatsApp business messaging and consolidated customer relationship histories.",
        cs_crm_p4: "By collapsing median first-response latency to under <em>8 minutes</em>, the platform boosted scheduled on-site property walkthroughs by over <em>38%</em> and empowered the growth team to reallocate marketing budgets toward the highest ROAS channels.",

        cs_ts_tagline: "Unified Corporate Digital Ecosystem for 10 Subsidiaries",
        cs_ts_title: "T&S Holding Corporate Platform",
        cs_ts_lead: "Flagship corporate platform restructuring the digital presence of T&S Holding, unifying 10 high-growth business sectors under a single authoritative design system.",
        cs_ts_action: "Explore Corporate Platform",
        cs_ts_subs: "10 enterprise business sectors unified",
        cs_ts_hl1: "Unified digital architecture combining 10 major investment sectors under one brand.",
        cs_ts_hl2: "High-performance headless CMS for secure corporate announcements and news.",
        cs_ts_hl3: "Sub-second global load times powered by distributed cloud edge CDN.",
        cs_ts_hl4: "Fully responsive accessible UI meeting strict enterprise UX and WCAG standards.",
        cs_ts_hl5: "Centralized corporate contact gateway directing investors to relevant subsidiaries.",

        cs_sportx_tagline: "Sports Management, Tournament Ops & Facility Booking",
        cs_sportx_title: "SportX Sports Management Platform",
        cs_sportx_lead: "Integrated digital ecosystem for sports venue reservations, league tournament scheduling, automated referee logs, and high-engagement community player experiences.",
        cs_sportx_action: "Sports Ops Ecosystem",
        cs_sportx_users: "+20,000 athlete bookings & participants",
        cs_sportx_hl1: "Instant pitch booking engine with real-time availability via Redis caching.",
        cs_sportx_hl2: "Automated league tournament scheduling, knockout brackets, and live points table.",
        cs_sportx_hl3: "Encrypted QR code ticketing system for rapid turnstile access and check-in.",
        cs_sportx_hl4: "Secure payment gateway integration with Mada, Visa, and Apple Pay.",
        cs_sportx_hl5: "Organizer dashboard with live analytics on booking density and daily revenue.",

        cs_brand_tagline: "Living Design System & Brand Asset Repository",
        cs_brand_title: "Brand Architecture & Design Hub",
        cs_brand_lead: "Centralized interactive brand portal housing vector assets, design tokens, color typography specs, and usage guidelines to guarantee aesthetic consistency across all corporate subsidiaries.",
        cs_brand_action: "Living Design System",
        cs_brand_tokens: "+200 verified vector assets & tokens",
        cs_brand_hl1: "Vector digital asset repository supporting SVG, print, and screen formats.",
        cs_brand_hl2: "Interactive color palette system with one-click hex/RGB token copying.",
        cs_brand_hl3: "Strict logo usage standards, safety margins, and visual distortion rules.",
        cs_brand_hl4: "Packaging and print material specifications ensuring vendor production parity.",
        cs_brand_hl5: "Bespoke icon library tailored specifically to the brand identity language.",

        cs_hrkh_tagline: "B2B Talent Acquisition Funnels & Enterprise Solutions",
        cs_hrkh_title: "HRKH Recruitment & HR Solutions",
        cs_hrkh_lead: "Strategic B2B digital platform and targeted performance campaigns for HRKH, driving executive headhunting and organizational talent solutions across Saudi Arabia.",
        cs_hrkh_live: "B2B Talent Funnels",
        cs_hrkh_clients: "+30 enterprise corporate contracts in 6 months",
        cs_hrkh_hl1: "Strategic B2B platform engineered for corporate executive talent acquisition.",
        cs_hrkh_hl2: "Intuitive candidate submission funnel with automated resume parsing.",
        cs_hrkh_hl3: "Targeted LinkedIn growth campaigns aimed at C-suite and HR decision-makers.",
        cs_hrkh_hl4: "High-conversion landing page architecture detailing corporate HR solutions.",
        cs_hrkh_hl5: "Real-time recruitment telemetry tracking candidate pipeline and corporate contracts.",

        cs_ri88_tagline: "Visual Identity, Packaging & Brand Experience",
        cs_ri88_title: "Ri88 Commercial Identity",
        cs_ri88_lead: "End-to-end commercial identity and consumer experience design for Ri88 in the gourmet F&B sector, merging refined visual branding, packaging engineering, and sensory unboxing.",
        cs_ri88_action: "360° Brand Experience",
        cs_ri88_metric: "Complete packaging line engineering",
        cs_ri88_hl1: "Bespoke luxury visual identity tailored for upscale consumer positioning.",
        cs_ri88_hl2: "Structural packaging engineering harmonizing aesthetic appeal and production durability.",
        cs_ri88_hl3: "Selection of premium paper stocks and tactile finishes to elevate brand prestige.",
        cs_ri88_hl4: "Engineered unboxing choreography designed to maximize delight and social sharing.",
        cs_ri88_hl5: "Comprehensive brand guideline establishing tone of voice and retail touchpoints."
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Initialization - Always default strictly to Arabic ('ar')
    let savedLang = localStorage.getItem('rayyan_lang_v2');
    if (!savedLang) {
        savedLang = 'ar';
        localStorage.setItem('rayyan_lang_v2', 'ar');
        // Clean legacy key to ensure user starts in clean Arabic RTL mode
        localStorage.removeItem('rayyan_lang');
    }
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
    let savedTheme = localStorage.getItem('rayyan_theme') || 'teal';
    if (savedTheme === 'emerald') savedTheme = 'teal';
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
    localStorage.setItem('rayyan_lang_v2', lang);

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
