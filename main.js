/* ==========================================================================
   Rayyan Aldohian Portfolio - Main Script
   Bilingual System (AR / EN) + Dynamic Theme System + Terminal Simulation
   ========================================================================== */

// --- Translations Dictionary ---
const translations = {
    ar: {
        nav_work: "المشاريع",
        nav_services: "مجالات التخصص",
        nav_experience: "الخبرات المهنية",
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
        
        tag_experience: "المسار المهني والخبرات",
        heading_experience: "خبرات ميدانية تصنع الفارق بين الاستراتيجية والتنفيذ.",
        experience_lead: "مسار مهني يدمج الانضباط التشغيلي في كبرى الشركات العالمية، قيادة استراتيجيات النمو والهوية للشركات القابضة، والتأسيس الأكاديمي والتقني المدعوم بحلول الذكاء الاصطناعي وذكاء الأعمال.",
        
        // Experience 1: T&S
        exp_1_role: "أخصائي أول تسويق رقمي",
        exp_1_company: "مجموعة T&S القابضة",
        exp_1_period: "04/2025 – 05/2026",
        exp_1_location: "الرياض، المملكة العربية السعودية",
        exp_1_b1: "صياغة وتنفيذ الاستراتيجيات الرقمية لتعزيز وتوسيع الحضور المؤسسي للمجموعة عبر منصات X و LinkedIn.",
        exp_1_b2: "تصميم وإدارة خطط وجداول المحتوى التحريري لرفع معدلات التفاعل وضمان الاتساق البصري عبر 10 قطاعات أعمال.",
        exp_1_b3: "التعاون الوثيق مع فرق التصميم والاستراتيجية لإطلاق حملات تسويقية متزامنة مع إنجازات وتوسعات المجموعة.",

        // Experience 2: Wahag
        exp_2_role: "أخصائي تسويق",
        exp_2_company: "شركة وهج للترفيه",
        exp_2_period: "02/2024 – 03/2025",
        exp_2_location: "الرياض، المملكة العربية السعودية",
        exp_2_b1: "قيادة حملات تسويقية متكاملة رسخت مكانة 'وهج' كجهة إبداعية رائدة في قطاع الترفيه.",
        exp_2_b2: "إدارة مشروع إعادة تطوير الهوية التجارية (Rebranding)، وتوحيد لغة التصميم ونبرة الصوت عبر كافة القنوات.",
        exp_2_b3: "تطوير مسارات رقمية وحملات إعلانية مبتكرة لتحقيق أعلى وصول وتفاعل مع الفئات المستهدفة.",

        // Experience 3: Amazon
        exp_3_role: "عمليات خدمة العملاء (CS Operations)",
        exp_3_company: "شركة أمازون (Amazon)",
        exp_3_period: "10/2022 – 07/2023",
        exp_3_location: "الرياض، المملكة العربية السعودية",
        exp_3_b1: "تحليل مؤشرات الأداء التشغيلية (KPIs) بدقة لرصد فجوات الأداء واقتراح تحسينات عملية مستدامة.",
        exp_3_b2: "التنسيق المباشر مع فرق التدريب وضمان الجودة (QA) لرفع معدلات رضا العملاء والالتزام بمعايير أمازون الصارمة.",
        exp_3_b3: "توظيف أدوات تحليل البيانات لرفع كفاءة الاستجابة وتسريع حل الإشكاليات المعقدة.",

        // Experience 4: Riyadh Airports
        exp_4_role: "منسق إداري",
        exp_4_company: "شركة مطارات الرياض (RAC)",
        exp_4_period: "02/2020 – 09/2022",
        exp_4_location: "الرياض، المملكة العربية السعودية",
        exp_4_b1: "إدارة وتنظيم الجداول التشغيلية اليومية لفرق خدمة العملاء في مرافق المطار الحيوية.",
        exp_4_b2: "ضمان التغطية التشغيلية المستمرة على مدار الساعة مع الحفاظ على سجلات الحضور والإجازات الدقيقة.",
        exp_4_b3: "تطوير آليات التنسيق الميداني بين المشرفين والكوادر لضمان سلاسة حركة وخدمة المسافرين.",

        // Experience 5: Saudi Students Association (Pocatello, Idaho)
        exp_5_role: "رئيس اللجنة الإعلامية والتسويق الرقمي",
        exp_5_company: "النادي السعودي للطلبة المبتعثين (بوكاتيلو، أيداهو)",
        exp_5_period: "2015 – 2020",
        exp_5_location: "بوكاتيلو، أيداهو، الولايات المتحدة الأمريكية",
        exp_5_b1: "قيادة الهوية البصرية وإدارة قنوات التواصل الرقمي والموقع الإلكتروني للنادي لتعزيز الحضور والانتشار الإعلامي.",
        exp_5_b2: "تخطيط وتنفيذ الحملات الإعلامية وتغطية الفعاليات والمؤتمرات الثقافية والوطنية الكبرى أمام المجتمع الأكاديمي والملحقية.",
        exp_5_b3: "إنتاج المحتوى الإبداعي والتصاميم وإدارة العلاقات العامة والتفاعل المباشر لخدمة ودعم مئات المبتعثين والطلبة الدوليين.",

        // Education & Certifications
        edu_title: "التعليم الأكاديمي والشهادات العالمية",
        edu_degree: 'معلوماتية الأعمال <span class="edu-sub-label" dir="ltr">Business Informatics</span>',
        edu_school: 'جامعة ولاية أيداهو <span class="edu-sub-label" dir="ltr">Idaho State University</span>',
        edu_period: "2015 – 2019 · الولايات المتحدة الأمريكية",
        edu_desc: "تأسيس أكاديمي عميق يدمج نظم المعلومات وقواعد البيانات مع مفاهيم الأعمال والتسويق الحديث في بيئة دولية.",
        
        cert_ibm: "تخصص الذكاء الاصطناعي التوليدي للتسويق الرقمي",
        cert_ibm_issuer: "IBM · 2025",
        cert_google: "أسس التسويق الرقمي والتجارة الإلكترونية",
        cert_google_issuer: "Google · 2025",
        cert_meta: "التسويق الاحترافي عبر منصات التواصل الاجتماعي",
        cert_meta_issuer: "Meta · 2025",

        marquee_trusted: "خبرات ومشاريع مع كبرى الجهات والشركات الرائدة",
        
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
        about_heading: "أجمع بين دقة ذكاء الأعمال، قوة الذكاء الاصطناعي، وإبداع الهوية لصناعة أثر ونمو استثنائي.",
        about_p1: "تنطلق منهجيتي في العمل من الفهم العميق للبيانات: أرى في الأرقام <em class=\"text-ember\">خارطة طريق ترشدنا بدقة</em> إلى أين يجب أن نتجه. أحوّل هذه الرؤى إلى هويات بصرية راسخة، ومسارات تسويقية عالية التحويل، وأنظمة رقمية متكاملة تدعم الأهداف المالية والتوسعية للعلامات التجارية.",
        about_p2: "بدمج أدوات ونماذج الذكاء الاصطناعي (AI) في صلب العمليات، نختصر دورات الإنتاج، ونوفر تحليلات تنبؤية دقيقة لسلوك الجمهور. <em class=\"text-ember\">لا أقدّم مجرد تقارير عابرة</em>، بل أبني أنظمة نمو مؤتمتة ومستدامة تمكّن الشركات من التوسع بثبات واتخاذ قرارات حاسمة بثقة وسرعة.",
        about_meta_based_in_dt: "المقر",
        about_meta_based_in_dd: "الرياض، المملكة العربية السعودية",
        about_meta_currently_dt: "حالياً",
        about_meta_currently_dd: "أخصائي أول ذكاء أعمال ونمو",
        about_meta_education_dt: "التعليم",
        about_meta_education_dd: "جامعة ولاية أيداهو (ISU)",
        about_meta_focus_dt: "التخصص",
        about_meta_focus_dd: "ذكاء الأعمال، نظم AI، ونمو العلامات",
        about_now_tag: "التركيز الحالي",
        about_now_1: "بناء لوحات ذكاء أعمال (BI) متقدمة ونماذج بيانات استراتيجية للشركات",
        about_now_2: "تطوير حلول وأتمتة تسويقية قائمة على نماذج الذكاء الاصطناعي التوليدي",
        about_now_3: "خريج معلوماتية الأعمال من جامعة ولاية أيداهو، ورئيس النادي السعودي لـ 5 سنوات",
        about_tools_tag: "أدوات وأنظمة أعتمد عليها",
        about_cat_bi: "ذكاء الأعمال والبيانات",
        about_cat_ai: "الذكاء الاصطناعي والأتمتة",
        about_cat_growth: "النمو والتسويق الرقمي",
        about_cat_design: "الهوية والتجربة الرقمية",
        
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
        cs_ts_p1: "مع توسع مجموعة <strong>T&S القابضة</strong> في عدة قطاعات استثمارية شملت التطوير العقاري، الحلول اللوجستية، إدارة الفعاليات الرياضية، والضيافة، نشأت الحاجة الملحة إلى منصة رقمية مركزية توحد الحضور المؤسسي وتلغي تشتت الهوية. <em>الهدف كان بناء واجهة استثمارية واحدة تعكس الحجم الحقيقي لأصول المجموعة وموثوقيتها المالية.</em>",
        cs_ts_p2: "تم تأسيس معمارية بصرية وحوكمة علامات تجارية <code>Brand Hierarchy Architecture</code> تفصل بوضوح بين الهوية الاستثمارية للشركة القابضة وبين الخصوصية التشغيلية لكل شركة تابعة، مما أتاح استعراض محفظة المشاريع والشراكات بنقرة واحدة عبر بوابات تفاعلية متخصصة لكل قطاع.",
        cs_ts_p3: "على الصعيد التقني، صُممت البنية التحتية لتقديم أداء فائق بزمن تحميل يقل عن ثانية واحدة عالمياً عبر شبكات <code>Edge CDN</code>، مع دعم كامل ومتقن للغتين العربية والإنجليزية، وتطبيق أفضل ممارسات <code>Technical SEO</code> التي رفعت الظهور العضوي للمجموعة بنسبة تفوق <em>140%</em> أمام كبرى الصناديق والمؤسسات.",
        cs_ts_p4: "تحولت المنصة من مجرد موقع تعريفي إلى أصل رقمي استراتيجي يعزز الموثوقية ويسرع إبرام الشراكات والاتفاقيات الاستثمارية، وأصبحت المرجع الرقمي المعتمد للإعلاميين والمستثمرين للوصول إلى تقارير وبيانات المجموعة المؤسسية.",

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
        cs_sportx_p1: "تشهد المملكة حراكاً رياضياً غير مسبوق وتزايداً في الاهتمام بجودة الحياة والرياضة المجتمعية. ومع ذلك، عانى منظمو البطولات ومشغلو الملاعب من الاعتماد على الرسائل النصية والاتصالات اليدوية لتأكيد الحجوزات والمدفوعات. <em>كان الهدف بناء منظومة رقمية مؤتمتة تلغي تضارب المواعيد وتوفر تجربة رياضية تفاعلية.</em>",
        cs_sportx_p2: "تم تطوير محرك حجز متزامن لحظياً <code>Real-time Slot Synchronization</code> يعتمد على <code>WebSockets</code> و <code>Redis</code> لمنع الحجوزات المزدوجة نهائياً. إلى جانب ذلك، دُمجت خوارزمية لتوليد جداول المسابقات <em>Tournament Brackets</em> وحساب الترتيب وفروق الأهداف تلقائياً دون أي تدخل بشري.",
        cs_sportx_p3: "أتاحت المنصة نظام تذاكر إلكتروني يصدر رموز <code>QR Codes</code> مشفرة تتيح المسح السريع عبر بوابات الدخول في ثوانٍ معدودة، مع ربط كامل مع بوابات الدفع الوطنية (مدى و Apple Pay)، مما وفر تجربة دفع فائقة السرعة والأمان للجماهير والرياضيين.",
        cs_sportx_p4: "حققت المنصة أثراً ملموساً بتنفيذ أكثر من <em>45,000 عملية حجز</em> خلال مواسم التشغيل، ورفعت معدل إشغال الملاعب بنسبة <em>35%</em> عبر خوارزميات التسعير الديناميكي في أوقات الذروة، مع تقديم لوحات قياس مالية مباشرة لملاك المنشآت الرياضية.",

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
        cs_brand_p1: "مع توسع منظومة الأعمال وتعدد الشركاء والوكالات الإعلانية، أصبحت ملفات الهوية بصيغ PDF التقليدية عرضة للتقادم والتشوه البصري. <em>كان التحدي هو تحويل أدلة الهوية البصرية من وثائق ورقية جامدة إلى بوابة تفاعلية حية ومحدثة لحظياً.</em>",
        cs_brand_p2: "تم بناء المنظومة استناداً إلى محددات التصميم الرقمية <code>Design Tokens</code> لتوحيد لغة التصميم عبر كافة المنصات والتطبيقات. توفر البوابة رموز الألوان بدقة (HEX, RGB, CMYK, Pantone)، ومقاييس الخطوط التيبوغرافية، وإرشادات الاستخدام الصحيح والخاطئ في بيئة تفاعلية سهلة البحث.",
        cs_brand_p3: "يتضمن النظام مستودعاً سحابياً يتيح لفرق العمل والشركاء تنزيل الشعارات والأيقونات والملفات المتجهية <code>Vector SVG & AI</code> بدقة عالية بنقرة واحدة، مع تصنيفها حسب قطاع الأعمال ونوع الاستخدام، مما يضمن الامتثال التام لهوية العلامة التجارية.",
        cs_brand_p4: "ساهمت البوابة في تقليص زمن إنتاج واعتماد المواد التسويقية بنسبة <em>40%</em>، وضمنت ظهوراً احترافياً متطابقاً في المعارض والمؤتمرات والحملات الرقمية، مما رسخ حضوراً ذهنياً موحداً يعكس القوة المؤسسية للمجموعة.",

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
        cs_hrkh_p1: "في سوق استقطاب الكفاءات والحلول الإدارية عالي التنافسية، واجهت شركة <strong>حركة</strong> تحدي بناء حضور رقمي يبرز الاحترافية العالية والالتزام بمعايير التوطين، ويجذب أصحاب القرار في كبرى الشركات. <em>كان الهدف بناء منصة B2B وحملات نمو موجهة تحول الزوار المؤهلين إلى عقود تشغيلية مستدامة.</em>",
        cs_hrkh_p2: "صُممت وهُندست منصة الويب لتبسيط مسار طلب الكفاءات عبر نماذج تفاعلية ذكية تجمع المتطلبات الوظيفية وتوجهها فورياً لفريق الاستشارات لتقديم العروض المالية في زمن قياسي، مع تطبيق معايير تحسين معدل التحويل <code>CRO</code> في كافة صفحات الهبوط.",
        cs_hrkh_p3: "أُطلقت حملات نمو رقمية موجهة عبر <code>LinkedIn Ads</code> و <code>Google Search Ads</code> تستهدف الكلمات الدلالية المرتبطة بخدمات التوظيف المؤسسي والإسناد الإداري، مع رسائل إعلانية تركز على سرعة الاستجابة وموثوقية الكوادر، وقياس مستمر لتكلفة اكتساب العميل المؤسسي <em>CAC</em>.",
        cs_hrkh_p4: "أثمرت الاستراتيجية عن إغلاق أكثر من <em>30 عقداً مؤسسياً</em> مع كبرى الشركات خلال النصف الأول، مع رفع معدل تحويل الزوار إلى طلبات عروض أسعار بنسبة <em>28%</em>، وترسيخ مكانة 'حركة' كواحدة من أسرع الشركات نمواً في قطاع حلول الأعمال.",

        cs_ri88_tagline: "تطوير الهوية البصرية، التغليف، وتجربة العلامة التجارية",
        cs_ri88_title: "الهوية التجارية Ri88",
        cs_ri88_lead: "مشروع متكامل لتأسيس الهوية التجارية وتجربة العميل لعلامة Ri88 في قطاع الأغذية والمشروبات، يجمع بين التصميم البصري الرفيع، هندسة التغليف، وصياغة تجربة حسية فريدة للعميل في نقاط البيع.",
        cs_ri88_action: "تجربة علامة متكاملة 360°",
        cs_ri88_metric: "هندسة تغليف وخط إنتاج متكامل",
        cs_ri88_hl1: "تطوير هوية بصرية فاخرة تعكس مفهوم الجودة والتميز الاستثنائي.",
        cs_ri88_hl2: "تصميم هندسي متقن لعلب التغليف مع مراعاة الجودة وسهولة الاستخدام.",
        cs_ri88_hl3: "اختيار خامات ورق وطباعة راقية تعزز من قيمة المنتج الاستهلاكي.",
        cs_ri88_hl4: "تصميم تجربة فتح العلبة (Unboxing) لتترك انطباعاً استثنائياً لدى العميل.",
        cs_ri88_hl5: "دليل إرشادي لاستخدام الهوية ونبرة الصوت (Tone of Voice) للعلامة.",
        cs_ri88_p1: "يشهد قطاع الأغذية والمشروبات الفاخرة <em>Specialty F&B</em> منافسة متسارعة، حيث لا يكفي تقديم منتج عالي الجودة فقط دون هوية بصرية متميزة وتجربة حسية تبرز في نقاط البيع. <em>كان الهدف بناء لغة بصرية وتجربة تغليف تترك انطباعاً راقياً وتخلق ارتباطاً عاطفياً مع المستهلك من اللحظة الأولى.</em>",
        cs_ri88_p2: "تم ابتكار شعار عصري يجمع بين الأصالة والتفرد البصري، مدعوماً بلوحة ألوان ترابية ودافئة مستوحاة من جودة المكونات والتحميص الطبيعي. صيغت الخطوط والأنماط التجريدية <code>Brand Patterns</code> لتعكس الفخامة والانسيابية وتمنح العلامة طابعاً مريحاً وجذاباً في كافة أشكال العرض.",
        cs_ri88_p3: "صُممت عبوات التغليف، والأكياس الورقية، والأكواب بلمسات ملمسية مختارة بعناية تعتمد على مواد صديقة للبيئة وتشطيبات طباعة دقيقة. روعيت في التصميم رحلة فتح المنتج <code>Unboxing Experience</code>، مما حوّل كل عبوة إلى قطعة تسويقية تشجع العملاء على توثيق التجربة ومشاركتها عضوياً على منصات التواصل.",
        cs_ri88_p4: "ساهم التموضع البصري الاحترافي في ترسيخ علامة Ri88 كوجهة مفضلة، محققاً تفاعلاً لافتاً ومعدلات ولاء وإعادة شراء استثنائية، مع إشادة واسعة بتميز تفاصيل التغليف واتساق التجربة البصرية بين المتجر الواقعي والمحتوى الرقمي."
    },
    en: {
        nav_work: "Projects",
        nav_services: "What I Do",
        nav_experience: "Experience",
        nav_impact: "Impact",
        nav_about: "About",
        nav_contact: "Contact",
        btn_touch: "Get in touch",
        
        hero_status: "Open to projects & growth advisory",
        hero_headline: 'Building scalable growth, Business Intelligence, and digital brands <span class="accent-span">powered by AI.</span>',
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
        srv_2_detail: "Building high-yield paid ad funnels (Google & Meta), running conversion rate optimization (CRO), and maximizing acquisition efficiency.",
        srv_3_name: "Visual Identity & Brand Architecture",
        srv_3_detail: "Building comprehensive brand identities grounded in customer psychology, guaranteeing unified aesthetics across all touchpoints.",
        srv_4_name: "AI Solutions & Workflow Automation",
        srv_4_detail: "Leveraging generative AI models and intelligent automations to accelerate content production, personalize user journeys, and streamline operations.",
        
        tag_experience: "Career & Experience",
        heading_experience: "Field-tested expertise bridging strategy and execution.",
        experience_lead: "A progressive career combining Amazon-grade operational discipline, high-growth marketing and brand leadership for diversified holding groups, and strong academic foundations in business informatics enhanced with AI & BI capabilities.",
        
        // Experience 1: T&S
        exp_1_role: "Senior Digital Marketing Specialist",
        exp_1_company: "T&S Holding Group",
        exp_1_period: "04/2025 – 05/2026",
        exp_1_location: "Riyadh, Saudi Arabia",
        exp_1_b1: "Formulated and executed digital strategies to scale corporate market presence across Twitter (X) and LinkedIn.",
        exp_1_b2: "Designed and governed strategic content calendars, boosting engagement while safeguarding brand consistency across 10 subsidiaries.",
        exp_1_b3: "Collaborated closely with creative and executive leadership to launch synchronized corporate milestone campaigns.",

        // Experience 2: Wahag
        exp_2_role: "Marketing Specialist",
        exp_2_company: "Wahag Entertainment",
        exp_2_period: "02/2024 – 03/2025",
        exp_2_location: "Riyadh, Saudi Arabia",
        exp_2_b1: "Spearheaded integrated campaigns that solidified Wahag as an avant-garde creative leader in entertainment.",
        exp_2_b2: "Led full corporate rebranding, harmonizing visual identity and tone of voice across omnichannel media touchpoints.",
        exp_2_b3: "Engineered innovative digital activations delivering viral engagement and strong consumer affinity.",

        // Experience 3: Amazon
        exp_3_role: "Customer Service Operations",
        exp_3_company: "Amazon",
        exp_3_period: "10/2022 – 07/2023",
        exp_3_location: "Riyadh, Saudi Arabia",
        exp_3_b1: "Analyzed operational KPIs to detect performance variances and propose data-backed workflow enhancements.",
        exp_3_b2: "Coordinated cross-functionally with QA and training departments to elevate customer satisfaction (CSAT) under Amazon standards.",
        exp_3_b3: "Applied analytics to optimize response velocity and eliminate friction points in customer journeys.",

        // Experience 4: Riyadh Airports
        exp_4_role: "Administrative Coordinator",
        exp_4_company: "Riyadh Airports Company (RAC)",
        exp_4_period: "02/2020 – 09/2022",
        exp_4_location: "Riyadh, Saudi Arabia",
        exp_4_b1: "Organized master schedules and governed daily operations for airport customer service frontline teams.",
        exp_4_b2: "Maintained 24/7 mission-critical operational coverage while upholding strict attendance and leave logs.",
        exp_4_b3: "Streamlined field dispatch workflows between floor supervisors and staff to ensure seamless passenger traffic.",

        // Experience 5: Saudi Students Association (Pocatello, Idaho)
        exp_5_role: "Head of Media & Digital Marketing",
        exp_5_company: "Saudi Students Association (ISU Pocatello)",
        exp_5_period: "2015 – 2020",
        exp_5_location: "Pocatello, Idaho, USA",
        exp_5_b1: "Directed brand identity and governed official digital channels and web presence to scale community and media reach.",
        exp_5_b2: "Spearheaded promotional campaigns, cultural showcase events, and official delegations representing Saudi students.",
        exp_5_b3: "Produced multimedia content and led public relations initiatives to engage international students and US academic partners.",

        // Education & Certifications
        edu_title: "Academic Background & Global Credentials",
        edu_degree: "Business Informatics (Undergraduate Studies)",
        edu_school: "Idaho State University",
        edu_period: "2015 – 2019 · Pocatello, USA",
        edu_desc: "Rigorous academic grounding in information systems, database architectures, and international business management.",
        
        cert_ibm: "Generative AI for Digital Marketing Specialization",
        cert_ibm_issuer: "IBM · 2025",
        cert_google: "Foundations of Digital Marketing and E-commerce",
        cert_google_issuer: "Google · 2025",
        cert_meta: "Social Media Marketing Professional Certificate",
        cert_meta_issuer: "Meta · 2025",

        marquee_trusted: "Field experience and partnerships with leading enterprises",
        
        tag_impact: "Strategic Impact",
        heading_impact: "Measurable performance across diversified corporate sectors.",
        link_read_philosophy: "Read philosophy",
        imp_1_title: "BI Dashboards & Telemetry",
        imp_1_desc: "Deploying real-time tracking systems connecting marketing investment directly to pipeline revenue.",
        imp_2_title: "Growth Funnel Optimization",
        imp_2_desc: "Systematically reducing CAC and accelerating lead-to-deal conversion velocity across key products.",
        imp_3_title: "Unified Brand Standards",
        imp_3_desc: "Crafting cohesive identity guidelines that elevate corporate valuation and stakeholder trust.",
        imp_4_title: "AI Workflows & Automation",
        imp_4_desc: "Eliminating operational drag through custom AI assistants and automated lead qualification pipelines.",
        
        tag_about: "About",
        about_heading: "Fusing empirical data and BI with bold brand design and AI systems to create real-world leverage.",
        about_p1: "My methodology begins with the data: numbers are <em class=\"text-ember\">the clearest blueprint for identifying market leverage</em>. I translate these analytics into authoritative brand identities, high-conversion growth funnels, and robust digital platforms that achieve ambitious business milestones.",
        about_p2: "By embedding generative AI models directly into operational pipelines, we compress production cycles and unlock predictive behavioral insights. <em class=\"text-ember\">I don't just deliver static reports</em>—I engineer automated, sustainable growth engines that empower decisive, agile leadership.",
        about_meta_based_in_dt: "BASED IN",
        about_meta_based_in_dd: "Riyadh, Saudi Arabia",
        about_meta_currently_dt: "CURRENTLY",
        about_meta_currently_dd: "Senior BI & Growth Strategist",
        about_meta_education_dt: "EDUCATION",
        about_meta_education_dd: "Idaho State University (ISU)",
        about_meta_focus_dt: "FOCUS",
        about_meta_focus_dd: "BI, AI Systems & Growth Strategy",
        about_now_tag: "Now",
        about_now_1: "Architecting enterprise Business Intelligence (BI) dashboards & predictive analytics",
        about_now_2: "Developing AI-powered growth systems & marketing automation workflows",
        about_now_3: "Honours graduate in Business Informatics from Idaho State University (5 yrs Saudi Club President)",
        about_tools_tag: "tools I reach for",
        about_cat_bi: "BI & Data Systems",
        about_cat_ai: "AI & Automation",
        about_cat_growth: "Growth & Performance",
        about_cat_design: "Brand & Experience",
        
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
        cs_ts_p1: "As <strong>T&S Holding Group</strong> expanded across multiple diversified sectors—including real estate development, supply chain logistics, sports entertainment, and premium hospitality—a unified corporate platform became essential to eliminate brand fragmentation. <em>The mission was to engineer a single authoritative investment portal reflecting the group's true asset scale and institutional financial standing.</em>",
        cs_ts_p2: "We established an enterprise <code>Brand Hierarchy Architecture</code> clearly delineating the parent holding company's corporate identity from the operational uniqueness of each subsidiary. This allowed investors and partners to seamlessly explore portfolios and joint ventures across dedicated sector hubs with a single click.",
        cs_ts_p3: "Technically, the cloud infrastructure was architected for sub-second global page loads via distributed <code>Edge CDN</code> networks, pairing complete bilingual parity (Arabic & English) with rigorous <code>Technical SEO</code> standards that lifted institutional organic visibility by over <em>140%</em> across regional investment funds.",
        cs_ts_p4: "The platform evolved from a corporate profile into a strategic digital asset that accelerates deal-making and joint-venture negotiations, serving as the verified portal for analysts, sovereign partners, and media stakeholders.",

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
        cs_sportx_p1: "With the unprecedented sports surge and community athletic participation in Saudi Arabia, venue operators and league organizers struggled with fragmented SMS bookings, phone calls, and manual payment reconciliations. <em>The goal was to construct an automated digital platform that eliminates double-bookings and provides an immersive athletic experience.</em>",
        cs_sportx_p2: "We built a <code>Real-time Slot Synchronization</code> engine powered by <code>WebSockets</code> and <code>Redis</code> to eliminate concurrency conflicts and double bookings. In parallel, an automated <em>Tournament Brackets</em> algorithm schedules group stages, knockout rounds, points tables, and goal differentials autonomously.",
        cs_sportx_p3: "The ecosystem features encrypted <code>QR Code</code> ticketing for rapid contactless turnstile entry in seconds, fully integrated with national payment rails (Mada, Visa, and Apple Pay) to deliver zero-friction checkout for players and fans.",
        cs_sportx_p4: "SportX processed over <em>45,000 bookings</em> across operating seasons and drove a <em>35%</em> increase in facility utilization through dynamic peak-hour pricing models, delivering transparent real-time revenue telemetry to venue owners.",

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
        cs_brand_p1: "As corporate operations scale across multiple agencies and commercial partners, static PDF brand guidelines quickly become obsolete, leading to visual dilution. <em>The challenge was transforming static identity documents into an interactive, living digital brand portal updated in real time.</em>",
        cs_brand_p2: "The system was engineered on standardized <code>Design Tokens</code> to unify design language across web, apps, and print. The portal exposes precise color tokens (HEX, RGB, CMYK, Pantone), typographic scales, and strict do's-and-don'ts rules in a searchable developer-friendly interface.",
        cs_brand_p3: "It houses a cloud-native vector repository allowing internal teams and agency partners to download verified <code>Vector SVG & AI</code> brand assets with one click, filtered by subsidiary and media format to enforce flawless corporate governance.",
        cs_brand_p4: "The hub compressed marketing asset review cycles by <em>40%</em> and ensured consistent visual authority across international expos, corporate collateral, and advertising campaigns, projecting uncompromising brand discipline.",

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
        cs_hrkh_p1: "In the hyper-competitive talent acquisition and enterprise staffing landscape, <strong>HRKH</strong> needed a digital authority platform that proved institutional compliance and attracted enterprise procurement decision-makers. <em>The objective was to engineer a high-conversion B2B portal and targeted growth funnels converting qualified traffic into recurring corporate contracts.</em>",
        cs_hrkh_p2: "We designed an intuitive talent request funnel utilizing interactive multi-step forms that capture job specs and immediately route them to executive recruiters for expedited proposal generation, applying strict <code>CRO</code> principles across every landing page.",
        cs_hrkh_p3: "Targeted B2B performance campaigns were deployed on <code>LinkedIn Ads</code> and high-intent <code>Google Search Ads</code> targeting enterprise HR directors, emphasizing candidate vetting speed, Saudization quotas, and transparent <em>CAC</em> attribution.",
        cs_hrkh_p4: "The strategy generated over <em>30 long-term enterprise agreements</em> with prominent regional corporations within 6 months, lifted proposal-request conversion by <em>28%</em>, and established HRKH as a premier human capital partner.",

        cs_ri88_tagline: "Visual Identity, Packaging & Brand Experience",
        cs_ri88_title: "Ri88 Commercial Identity",
        cs_ri88_lead: "End-to-end commercial identity and consumer experience design for Ri88 in the gourmet F&B sector, merging refined visual branding, packaging engineering, and sensory unboxing.",
        cs_ri88_action: "360° Brand Experience",
        cs_ri88_metric: "Complete packaging line engineering",
        cs_ri88_hl1: "Bespoke luxury visual identity tailored for upscale consumer positioning.",
        cs_ri88_hl2: "Structural packaging engineering harmonizing aesthetic appeal and production durability.",
        cs_ri88_hl3: "Selection of premium paper stocks and tactile finishes to elevate brand prestige.",
        cs_ri88_hl4: "Engineered unboxing choreography designed to maximize delight and social sharing.",
        cs_ri88_hl5: "Comprehensive brand guideline establishing tone of voice and retail touchpoints.",
        cs_ri88_p1: "In the gourmet specialty F&B sector, exceptional product quality must be paired with an unforgettable visual identity and tactile retail experience to command premium pricing. <em>The mission was to craft an authoritative brand world and bespoke packaging choreography that builds instant emotional affinity with discerning consumers.</em>",
        cs_ri88_p2: "We designed an artisanal logo harmonizing timeless geometric balance with modern minimalism, underpinned by warm earth-tone palettes derived from raw ingredients and roast profiles. Custom <code>Brand Patterns</code> and typography standards were formulated to project understated luxury across retail formats.",
        cs_ri88_p3: "Every packaging touchpoint—from textured bean pouches to foil-stamped takeaway cups—was engineered using tactile sustainable stocks and precise print finishes. The <code>Unboxing Experience</code> was curated to transform every purchase into an organic, Instagram-worthy consumer moment.",
        cs_ri88_p4: "The elevated brand positioning cemented Ri88 as a coveted destination brand, driving extraordinary customer repeat-purchase rates and viral social engagement while achieving total visual harmony between physical stores and digital channels."
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

    const isAboutPage = window.location.pathname.endsWith('about.html') || window.location.pathname.includes('/about');
    if (isAboutPage) {
        document.title = lang === 'ar' 
            ? 'نبذة عني · ريان الضحيان' 
            : 'About · Rayyan Aldohian';
    } else {
        document.title = lang === 'ar'
            ? 'ريان الضحيان · متخصص ذكاء أعمال، تسويق، ونمو'
            : 'Rayyan Aldohian · Business Intelligence & Growth Strategist';
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
    const isAboutPage = window.location.pathname.endsWith('about.html') || window.location.pathname.includes('/about');
    if (isAboutPage) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href === 'about.html' || href.endsWith('/about.html') || href.endsWith('/about'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        return;
    }

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
