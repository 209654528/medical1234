/* ===========================================
   第一部分：网站双语文本翻译数据
   =========================================== */

// 网站的双语文本数据
const translations = {
    zh: {
        // 导航
        "site-title": "医药科技前沿",
        "lang-text": "English",
        
        // 首页
        "hero-title": "探索医药科技与3D应用的未来",
        "hero-subtitle": "可视化医学革命，理解药物与疾病的交互",
        "stat-1-title": "前沿科技",
        "stat-1-desc": "3D打印、AI制药、基因编辑",
        "stat-2-title": "交互模拟",
        "stat-2-desc": "药物相互作用3D可视化",
        "stat-3-title": "疾病模型",
        "stat-3-desc": "360度查看病原体与治疗",
        
        // 科技前沿
        "tech-title": "🔬 医药学前沿科技",
        "tech-subtitle": "3D技术正在彻底改变医疗领域",
        
        // 药物模拟器
        "drug-title": "💊 药物相互作用模拟器",
        "drug-subtitle": "选择两种药物，查看它们的相互作用",
        "drug-1-label": "选择第一种药物",
        "drug-2-label": "选择第二种药物",
        "simulate-text": "模拟相互作用",
        "result-title": "相互作用结果",
        "warning-text": "⚠️ 注意：本模拟器仅为教育目的，不能替代专业医疗建议。实际用药请咨询医生。",
        
        // 疾病百科
        "disease-title": "🦠 疾病与病原体百科",
        "disease-subtitle": "探索常见疾病的病原体与治疗方式",
        "model-placeholder-text": "选择一种疾病查看3D模型",
        
        // 页脚
        "footer-text": "© 2023 医药科技教育项目 | 仅供教育演示使用"
    },
    en: {
        // 导航
        "site-title": "Medical Tech Frontiers",
        "lang-text": "中文",
        
        // 首页
        "hero-title": "Exploring the Future of Medical Technology & 3D Applications",
        "hero-subtitle": "Visualize the medical revolution, understand drug-disease interactions",
        "stat-1-title": "Frontier Tech",
        "stat-1-desc": "3D Printing, AI Drug Discovery, Gene Editing",
        "stat-2-title": "Interactive Sim",
        "stat-2-desc": "3D Drug Interaction Visualization",
        "stat-3-title": "Disease Models",
        "stat-3-desc": "360° View of Pathogens & Treatments",
        
        // 科技前沿
        "tech-title": "🔬 Medical Technology Frontiers",
        "tech-subtitle": "How 3D technology is revolutionizing healthcare",
        
        // 药物模拟器
        "drug-title": "💊 Drug Interaction Simulator",
        "drug-subtitle": "Select two drugs to see their interaction",
        "drug-1-label": "Select First Drug",
        "drug-2-label": "Select Second Drug",
        "simulate-text": "Simulate Interaction",
        "result-title": "Interaction Result",
        "warning-text": "⚠️ Warning: This simulator is for educational purposes only. Always consult a doctor for medical advice.",
        
        // 疾病百科
        "disease-title": "🦠 Disease & Pathogen Encyclopedia",
        "disease-subtitle": "Explore pathogens and treatments of common diseases",
        "model-placeholder-text": "Select a disease to view 3D model",
        
        // 页脚
        "footer-text": "© 2023 Medical Education Project | For educational demonstration only"
    }
};
/* ===========================================
   第二部分：科技前沿数据
   =========================================== */

// 科技前沿数据
const technologies = [
    {
        id: 1,
        title: { zh: "3D生物打印", en: "3D Bioprinting" },
        description: { 
            zh: "使用3D打印技术制造活体组织和器官，用于移植和研究。可以创建皮肤、软骨、血管甚至微型器官。", 
            en: "Using 3D printing to create living tissues and organs for transplantation and research. Can produce skin, cartilage, blood vessels, and even mini-organs." 
        },
        icon: "fas fa-print",
        color: "#667eea"
    },
    {
        id: 2,
        title: { zh: "手术规划与模拟", en: "Surgical Planning & Simulation" },
        description: { 
            zh: "基于患者CT/MRI数据创建3D模型，帮助外科医生规划复杂手术。可在虚拟环境中演练手术步骤，提高成功率。", 
            en: "Creating 3D models from patient CT/MRI data to help surgeons plan complex procedures. Practice surgical steps in virtual environment to improve success rates." 
        },
        icon: "fas fa-syringe",
        color: "#764ba2"
    },
    {
        id: 3,
        title: { zh: "分子可视化", en: "Molecular Visualization" },
        description: { 
            zh: "3D展示药物分子如何与蛋白质结合，加速新药研发。帮助科学家理解药物作用机制，设计更有效的药物。", 
            en: "3D visualization of how drug molecules bind to proteins, accelerating drug discovery. Helps scientists understand drug mechanisms and design more effective medications." 
        },
        icon: "fas fa-atom",
        color: "#26d0ce"
    },
    {
        id: 4,
        title: { zh: "虚拟解剖", en: "Virtual Anatomy" },
        description: { 
            zh: "交互式3D解剖模型，彻底改变医学教育方式。学生可以无限制地探索人体结构，无需实体标本。", 
            en: "Interactive 3D anatomy models revolutionizing medical education. Students can explore human anatomy without limits, no physical specimens needed." 
        },
        icon: "fas fa-brain",
        color: "#1a2980"
    },
    {
        id: 5,
        title: { zh: "AI药物发现", en: "AI Drug Discovery" },
        description: { 
            zh: "人工智能加速药物研发过程，从数十年缩短到几个月。AI可以预测分子性质、筛选潜在药物候选物。", 
            en: "Artificial intelligence accelerates drug development from decades to months. AI can predict molecular properties and screen potential drug candidates." 
        },
        icon: "fas fa-robot",
        color: "#FF6B6B"
    },
    {
        id: 6,
        title: { zh: "可穿戴医疗设备", en: "Wearable Medical Devices" },
        description: { 
            zh: "3D打印定制化医疗设备，完美贴合患者身体。包括助听器、义肢、牙科矫正器等个性化医疗解决方案。", 
            en: "3D printed customized medical devices that perfectly fit patients' bodies. Includes hearing aids, prosthetics, dental aligners, and other personalized medical solutions." 
        },
        icon: "fas fa-heartbeat",
        color: "#6BCF7F"
    }
];
/* ===========================================
   第三部分：药物数据
   =========================================== */

// 药物数据
const drugs = [
    {
        id: 1,
        name: { zh: "阿司匹林", en: "Aspirin" },
        description: { 
            zh: "非甾体抗炎药，用于缓解疼痛、发热和炎症。也用于预防心脏病和中风。", 
            en: "NSAID used for pain, fever, and inflammation. Also used to prevent heart attacks and strokes." 
        },
        category: { zh: "止痛/抗炎", en: "Pain Relief/Anti-inflammatory" },
        icon: "💊",
        color: "#FF6B6B"
    },
    {
        id: 2,
        name: { zh: "布洛芬", en: "Ibuprofen" },
        description: { 
            zh: "非甾体抗炎药，用于治疗疼痛、发热和炎症。常见于头痛、牙痛、关节炎等。", 
            en: "NSAID used for treating pain, fever, and inflammation. Common for headaches, toothaches, arthritis." 
        },
        category: { zh: "止痛/抗炎", en: "Pain Relief/Anti-inflammatory" },
        icon: "💊",
        color: "#FF8E8E"
    },
    {
        id: 3,
        name: { zh: "华法林", en: "Warfarin" },
        description: { 
            zh: "抗凝药（血液稀释剂），用于预防和治疗血栓。需定期监测凝血功能。", 
            en: "Anticoagulant (blood thinner) used to prevent and treat blood clots. Requires regular blood monitoring." 
        },
        category: { zh: "抗凝药", en: "Anticoagulant" },
        icon: "💉",
        color: "#4D96FF"
    },
    {
        id: 4,
        name: { zh: "阿托伐他汀", en: "Atorvastatin" },
        description: { 
            zh: "他汀类药物，用于降低胆固醇水平。预防心脏病和中风。", 
            en: "Statin medication used to lower cholesterol levels. Prevents heart attacks and strokes." 
        },
        category: { zh: "降胆固醇", en: "Cholesterol Lowering" },
        icon: "💊",
        color: "#6BCF7F"
    },
    {
        id: 5,
        name: { zh: "头孢氨苄", en: "Cephalexin" },
        description: { 
            zh: "抗生素，用于治疗细菌感染。如呼吸道感染、皮肤感染、尿路感染等。", 
            en: "Antibiotic used to treat bacterial infections. Such as respiratory, skin, and urinary tract infections." 
        },
        category: { zh: "抗生素", en: "Antibiotic" },
        icon: "🧫",
        color: "#9D65C9"
    },
    {
        id: 6,
        name: { zh: "酒精", en: "Alcohol" },
        description: { 
            zh: "常见饮品成分，与许多药物有相互作用。会增强某些药物的副作用。", 
            en: "Common beverage component, interacts with many drugs. Can enhance side effects of certain medications." 
        },
        category: { zh: "酒精饮品", en: "Alcoholic Beverage" },
        icon: "🍷",
        color: "#FFD166"
    },
    {
        id: 7,
        name: { zh: "对乙酰氨基酚", en: "Acetaminophen" },
        description: { 
            zh: "解热镇痛药，用于缓解疼痛和退烧。过量可能造成肝损伤。", 
            en: "Pain reliever and fever reducer. Overdose can cause liver damage." 
        },
        category: { zh: "止痛/退烧", en: "Pain Relief/Fever Reducer" },
        icon: "🌡️",
        color: "#FF9A76"
    },
    {
        id: 8,
        name: { zh: "奥美拉唑", en: "Omeprazole" },
        description: { 
            zh: "质子泵抑制剂，减少胃酸分泌。治疗胃溃疡、胃食管反流病。", 
            en: "Proton pump inhibitor that reduces stomach acid. Treats ulcers and GERD." 
        },
        category: { zh: "胃药", en: "Stomach Medication" },
        icon: "🫀",
        color: "#118AB2"
    }
];
/* ===========================================
   第四部分：药物相互作用数据
   =========================================== */

// 药物相互作用数据
const drugInteractions = [
    {
        drug1: 1, // 阿司匹林
        drug2: 2, // 布洛芬
        effect: { 
            zh: "⚠️ 增加胃出血和溃疡风险", 
            en: "⚠️ Increased risk of stomach bleeding and ulcers" 
        },
        mechanism: { 
            zh: "两者都抑制保护胃黏膜的前列腺素，协同作用显著增加胃黏膜损伤和出血风险。", 
            en: "Both inhibit prostaglandins that protect stomach lining. Synergistic effect significantly increases mucosal damage and bleeding risk." 
        },
        recommendation: {
            zh: "避免同时使用。如需联合用药，必须在医生指导下并服用胃保护剂。",
            en: "Avoid concurrent use. If combination is necessary, must be under doctor's supervision with stomach protectants."
        },
        risk: "high",
        animation: "stomach"
    },
    {
        drug1: 3, // 华法林
        drug2: 1, // 阿司匹林
        effect: { 
            zh: "⚠️ 显著增加出血风险", 
            en: "⚠️ Significantly increased bleeding risk" 
        },
        mechanism: { 
            zh: "阿司匹林抑制血小板聚集功能，与华法林的抗凝作用产生叠加效应，大幅增加出血风险。", 
            en: "Aspirin inhibits platelet aggregation, potentiating warfarin's anticoagulant effect, greatly increasing bleeding risk." 
        },
        recommendation: {
            zh: "严禁自行合用。如需合用，必须在严密监测凝血功能下由医生调整剂量。",
            en: "Strictly avoid self-combination. If needed, must be under close monitoring with doctor-adjusted dosage."
        },
        risk: "high",
        animation: "bleeding"
    },
    {
        drug1: 3, // 华法林
        drug2: 4, // 阿托伐他汀
        effect: { 
            zh: "🟡 可能增加华法林效果", 
            en: "🟡 May increase warfarin effect" 
        },
        mechanism: { 
            zh: "他汀类药物可能抑制华法林代谢酶CYP2C9，导致华法林血药浓度升高，增加出血风险。", 
            en: "Statins may inhibit warfarin-metabolizing enzyme CYP2C9, increasing warfarin blood levels and bleeding risk." 
        },
        recommendation: {
            zh: "联合使用时需密切监测INR值，医生可能需要调整华法林剂量。",
            en: "Close INR monitoring required when combined. Doctor may need to adjust warfarin dosage."
        },
        risk: "medium",
        animation: "liver"
    },
    {
        drug1: 5, // 头孢氨苄
        drug2: 6, // 酒精
        effect: { 
            zh: "⚠️ 双硫仑样反应", 
            en: "⚠️ Disulfiram-like reaction" 
        },
        mechanism: { 
            zh: "某些抗生素抑制酒精代谢，导致乙醛积累，引起面部潮红、头痛、恶心、呕吐、心悸等症状。", 
            en: "Some antibiotics inhibit alcohol metabolism, causing acetaldehyde accumulation, leading to facial flushing, headache, nausea, vomiting, palpitations." 
        },
        recommendation: {
            zh: "服用抗生素期间及停药后3天内禁止饮酒。",
            en: "Avoid alcohol during antibiotic use and for 3 days after stopping."
        },
        risk: "high",
        animation: "disulfiram"
    },
    {
        drug1: 1, // 阿司匹林
        drug2: 4, // 阿托伐他汀
        effect: { 
            zh: "🟢 相互作用风险较低", 
            en: "🟢 Low interaction risk" 
        },
        mechanism: { 
            zh: "无已知严重相互作用。但两者长期使用都需监测肝功能，联合用药时建议定期检查。", 
            en: "No known severe interaction. But both require liver function monitoring with long-term use. Regular checks recommended when combined." 
        },
        recommendation: {
            zh: "可联合使用，但需定期监测肝功能。",
            en: "Can be combined, but regular liver function monitoring needed."
        },
        risk: "low",
        animation: "none"
    },
    {
        drug1: 7, // 对乙酰氨基酚
        drug2: 6, // 酒精
        effect: { 
            zh: "⚠️ 增加肝损伤风险", 
            en: "⚠️ Increased risk of liver damage" 
        },
        mechanism: { 
            zh: "酒精和对乙酰氨基酚共享相同的肝脏代谢途径。同时使用会增加有毒代谢产物积累，导致肝细胞损伤。", 
            en: "Alcohol and acetaminophen share the same liver metabolism pathway. Concurrent use increases toxic metabolite accumulation, causing liver cell damage." 
        },
        recommendation: {
            zh: "服用对乙酰氨基酚期间避免饮酒。每天用量不超过4克。",
            en: "Avoid alcohol while taking acetaminophen. Do not exceed 4g daily."
        },
        risk: "high",
        animation: "liver"
    },
    {
        drug1: 1, // 阿司匹林
        drug2: 8, // 奥美拉唑
        effect: { 
            zh: "🟡 可能降低阿司匹林效果", 
            en: "🟡 May reduce aspirin effectiveness" 
        },
        mechanism: { 
            zh: "奥美拉唑改变胃内pH值，可能影响阿司匹林的吸收和生物利用度，略微降低其预防血栓的效果。", 
            en: "Omeprazole changes stomach pH, may affect aspirin absorption and bioavailability, slightly reducing its anti-clotting effect." 
        },
        recommendation: {
            zh: "如需合用，建议在医生指导下调整用药时间（如间隔2小时服用）。",
            en: "If combining, consider spacing doses 2 hours apart under doctor's guidance."
        },
        risk: "medium",
        animation: "stomach"
    }
];
/* ===========================================
   第五部分：疾病数据
   =========================================== */

// 疾病数据
const diseases = [
    {
        id: 1,
        name: { zh: "流感", en: "Influenza" },
        description: { 
            zh: "由流感病毒引起的急性呼吸道传染病，主要通过飞沫传播。症状包括突发高热、咳嗽、喉咙痛、肌肉酸痛、头痛、乏力等。可在全球引起季节性流行。", 
            en: "Acute respiratory infection caused by influenza virus, mainly spread through droplets. Symptoms include sudden fever, cough, sore throat, muscle aches, headache, fatigue. Causes seasonal epidemics worldwide." 
        },
        pathogen: { 
            zh: "流感病毒（正粘病毒科），主要有甲型、乙型、丙型三种类型。病毒表面有血凝素(HA)和神经氨酸酶(NA)两种糖蛋白突起。", 
            en: "Influenza virus (Orthomyxoviridae), mainly types A, B, and C. Virus surface has hemagglutinin (HA) and neuraminidase (NA) glycoprotein spikes." 
        },
        treatment: { 
            zh: "1. 抗病毒药物：奥司他韦、扎那米韦、帕拉米韦\n2. 对症治疗：退烧药、止痛药、充足休息\n3. 支持疗法：补液、营养支持\n4. 预防：年度流感疫苗接种是最有效预防手段", 
            en: "1. Antivirals: Oseltamivir, Zanamivir, Peramivir\n2. Symptomatic treatment: Fever reducers, pain relievers, rest\n3. Supportive care: Hydration, nutrition\n4. Prevention: Annual flu vaccination is most effective" 
        },
        modelUrl: "models/influ-virus.glb",//
        icon: "🦠",
        color: "#4D96FF"
    },
    {
        id: 2,
        name: { zh: "肺结核", en: "Tuberculosis" },
        description: { 
            zh: "由结核分枝杆菌引起的慢性传染病，主要影响肺部，但可侵犯全身各器官。症状包括咳嗽、咳痰、咯血、胸痛、低热、盗汗、体重减轻等。具有传染性，需隔离治疗。", 
            en: "Chronic infectious disease caused by Mycobacterium tuberculosis, primarily affects lungs but can infect any organ. Symptoms include cough, sputum, hemoptysis, chest pain, low-grade fever, night sweats, weight loss. Contagious, requires isolation." 
        },
        pathogen: { 
            zh: "结核分枝杆菌，是一种抗酸杆菌，生长缓慢，可在巨噬细胞内长期存活。具有蜡质细胞壁，对许多消毒剂有抵抗力。", 
            en: "Mycobacterium tuberculosis, an acid-fast bacillus, slow-growing, can survive long-term inside macrophages. Has waxy cell wall, resistant to many disinfectants." 
        },
        treatment: { 
            zh: "1. 一线抗结核药物：异烟肼、利福平、乙胺丁醇、吡嗪酰胺\n2. 标准治疗方案：6-9个月联合治疗\n3. 直接督导治疗(DOTS)：确保患者按时服药\n4. 耐药结核：需使用二线药物治疗18-24个月", 
            en: "1. First-line drugs: Isoniazid, Rifampin, Ethambutol, Pyrazinamide\n2. Standard regimen: 6-9 months combination therapy\n3. DOTS: Directly Observed Treatment to ensure adherence\n4. Drug-resistant TB: Requires 18-24 months of second-line drugs" 
        },
        modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        icon: "🦠",
        color: "#FF6B6B"
    },
    {
        id: 3,
        name: { zh: "COVID-19", en: "COVID-19" },
        description: { 
            zh: "由SARS-CoV-2冠状病毒引起的呼吸道疾病，2019年底首次出现并引发全球大流行。症状多样，从无症状到重症肺炎，常见症状包括发热、干咳、乏力、味觉嗅觉丧失等。", 
            en: "Respiratory disease caused by SARS-CoV-2 coronavirus, first emerged in late 2019 causing global pandemic. Symptoms range from asymptomatic to severe pneumonia, commonly fever, dry cough, fatigue, loss of taste/smell." 
        },
        pathogen: { 
            zh: "SARS-CoV-2冠状病毒，属于β属冠状病毒。病毒表面有刺突蛋白(S蛋白)，可与人体ACE2受体结合进入细胞。病毒遗传物质为单股正链RNA。", 
            en: "SARS-CoV-2 coronavirus, belongs to beta-coronaviruses. Virus surface has spike protein (S-protein) that binds to human ACE2 receptors. Genetic material is single-stranded positive-sense RNA." 
        },
        treatment: { 
            zh: "1. 抗病毒药物：奈玛特韦/利托那韦、瑞德西韦、莫努匹拉韦\n2. 单克隆抗体：巴尼韦单抗/埃特司韦单抗\n3. 免疫调节剂：地塞米松、托珠单抗\n4. 支持治疗：氧疗、机械通气\n5. 预防：疫苗接种是核心防控策略", 
            en: "1. Antivirals: Nirmatrelvir/ritonavir, Remdesivir, Molnupiravir\n2. Monoclonal antibodies: Bamlanivimab/Etesevimab\n3. Immunomodulators: Dexamethasone, Tocilizumab\n4. Supportive care: Oxygen therapy, mechanical ventilation\n5. Prevention: Vaccination is key strategy" 
        },
        modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        icon: "🦠",
        color: "#6BCF7F"
    },
    {
        id: 4,
        name: { zh: "糖尿病", en: "Diabetes" },
        description: { 
            zh: "慢性代谢性疾病，特征是高血糖。分为1型（自身免疫破坏胰岛β细胞）和2型（胰岛素抵抗或分泌不足）。症状包括多饮、多尿、多食、体重减轻、视力模糊等。", 
            en: "Chronic metabolic disorder characterized by high blood sugar. Type 1 (autoimmune destruction of beta cells) and Type 2 (insulin resistance or deficiency). Symptoms include polydipsia, polyuria, polyphagia, weight loss, blurred vision." 
        },
        pathogen: { 
            zh: "非传染性疾病。1型糖尿病与自身免疫、遗传有关；2型糖尿病与胰岛素抵抗、肥胖、生活方式相关。", 
            en: "Non-communicable disease. Type 1 associated with autoimmunity and genetics; Type 2 with insulin resistance, obesity, lifestyle factors." 
        },
        treatment: { 
            zh: "1. 1型糖尿病：终身胰岛素治疗（基础+餐时胰岛素）\n2. 2型糖尿病：口服降糖药（二甲双胍、磺脲类等）、GLP-1受体激动剂、胰岛素\n3. 生活方式干预：饮食控制、规律运动、体重管理\n4. 监测：定期检测血糖、糖化血红蛋白、并发症筛查", 
            en: "1. Type 1: Lifelong insulin therapy (basal + bolus)\n2. Type 2: Oral medications (Metformin, Sulfonylureas), GLP-1 agonists, insulin\n3. Lifestyle: Diet control, regular exercise, weight management\n4. Monitoring: Regular blood glucose, HbA1c, complication screening" 
        },
        modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        icon: "🩸",
        color: "#9D65C9"
    }
];
/* ===========================================
   第六部分：当前语言状态
   =========================================== */

// 当前语言状态（默认为中文）
let currentLang = 'zh';

// 注意：此文件不需要额外导出，因为所有变量都是全局的
// HTML文件会通过 <script src="data.js"></script> 直接引入