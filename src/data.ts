import { Translation, Robot, RoboticArm, DocArticle, Language } from './types';

export const translations: Record<Language, Translation> = {
  en: {
    navHome: "Home",
    navFleet: "Fleet",
    navSimulation: "Teleoperation",
    navDocs: "Documentation",
    navTelemetry: "Data Labs",
    langName: "English",
    byLine: "PRISMAX • PHYSICAL AI ENGINE",
    
    heroTitle: "The Service Layer for Physical AI",
    heroSubtitle: "Connecting robots, data, and intelligence seamlessly.",
    heroDesc: "PrismaX bridges the gap between digital models and real-world physical machines. Our network unlocks low-latency teleoperation, continuous learning loops, and cross-hardware physical intelligence for the next generation of humanoid and specialized fleets.",
    btnLearnMore: "Learn More",
    btnExplore: "Explore Fleet",
    btnOperate: "Operate Real Robots",
    
    topicTitle: "System Architecture",
    topicSubtitle: "Explore the core dimensions of the PrismaX physical network.",
    topics: {
      whatIsPrismax: {
        title: "What is PrismaX",
        desc: "Learn about PrismaX, its mission, technology and role in the future of Physical AI."
      },
      physicalAI: {
        title: "Physical AI",
        desc: "Understand how intelligence moves beyond software into real-world machines and robotics."
      },
      teleoperation: {
        title: "Teleoperation",
        desc: "Explore low-latency robot operation, remote control systems and haptic human-in-the-loop intelligence."
      },
      dataLayer: {
        title: "Data Layer",
        desc: "Learn how robotics data is collected, processed and transformed into training intelligence."
      },
      intelligenceLayer: {
        title: "Intelligence Layer",
        desc: "Discover how models, reasoning systems and machine intelligence power physical AI systems."
      },
      systemArchitecture: {
        title: "System Architecture",
        desc: "View the complete PrismaX ecosystem including robots, operators, data and intelligence."
      }
    },
    
    fleetTitle: "Fleet Deployment",
    fleetSubtitle: "Welcome! Meet our fleet of robots selected to help you.",
    fleetDesc: "PrismaX provides unified low-level API connection states for leading robotic hardware. These agents actively execute manual workspace tasks while securely feeding tokenized trajectory sets into our global intelligence model.",
    taglineFleet: "Compatible Systems",

    ctrlTitle: "Robot Control Center",
    ctrlSubtitle: "Execute low-latency bilateral teleoperation with active physical hardware over the PrismaX network.",
    ctrlStatus: "Status",
    ctrlAngleX: "Joint Angle X (Base)",
    ctrlAngleY: "Joint Angle Y (Elbow)",
    ctrlGrip: "End Effector Grip",
    ctrlLatency: "Network Latency",
    ctrlSignal: "Signal Strength",
    ctrlBattery: "System Temp",
    ctrlConnect: "Establish Teleop Link",
    ctrlDisconnect: "Disconnect Link",
    ctrlActive: "ACTIVE STREAM",
    ctrlReserved: "RESERVED",
    ctrlQueue: "Operator Queue",
    ctrlSimulateAction: "Execute Task Stroke",

    membershipTitle: "Join the Amplifier Community",
    membershipSubtitle: "Join our Amplifier community to advance robotics intelligence and drive faster adoption together.",
    membershipBenefit1: "Continuous premium robot fleet remote access & simulations",
    membershipBenefit2: "Enhanced $PRISMA token accumulation (3x speed multiplier)",
    paymentMethod: "Select Payment Currency",
    paymentMethodDesc: "Please select payment method. This is a one time payment.",
    membershipBtn: "Become an Amplifier Member Now",
    membershipSuccess: "Thank you for joining as an Amplifier Member! Access credentials have been routed to your workspace keys.",

    docsTitle: "Knowledge Base",
    docsSubtitle: "Comprehensive technical resources for developers, machine intelligence researchers, and hardware hosts.",
    docsSearchPlaceholder: "Search protocols, URDF schemas, API integrations...",
    docsBack: "Back to Home",
    teleopActiveTag: "NOW IN ACTIVE TELEOP DEPLOYMENT",
    btnViewSpecs: "LIBRARY",
    btnLaunchCtrl: "LAUNCH CONTROL CENTER",
    knowledgeHubTitle: "PRISMAX KNOWLEDGE HUB",
    readArticle: "READ ARTICLE",
    contentSoon: "Content coming soon.",
    overview: "OVERVIEW",
    coreSpecConcepts: "CORE SPECIFICATION CONCEPTS",
    visualExpl: "VISUAL EXPLANATION & SCHEMATIC",
    relatedEcosystem: "RELATED ECOSYSTEM MODULES",
    done: "DONE",
    socialTitle: "PrismaX Social",
    sweepingWorkspace: "SWEEPING WORKSPACE",
    labControls: "LABORATORY CONTROLS",
    selectNode: "SELECT HARDWARE NODE",
    queueInLine: "QUEUE: {count} IN LINE",
    enterNodeCode: "Enter Node Access Code",
    enterNodeCodeDesc: "Input key parameters matching authorization keys. Authorized access tokens establish low-latency bilateral feedback loop.",
    validateNodeAccess: "VALIDATE NODE ACCESS",
    cooperativeSub: "COOPERATIVE SUBSCRIPTION",
    membershipNetwork: "Amplifier Membership Network",
    linkActivated: "Amplifier Link Activated",
    memberLabel: "Amplifier Member",
    cooperativeLevel: "COOPERATIVE LEVEL I",
    totalInvestment: "TOTAL INVESTMENT",
    oneTimePayment: "one time payment",
    coreSubsystem: "Core Subsystem",
    regionLanguage: "Region & Language",
    scrollToTop: "SCROLL TO TOP",
    systemSpecs: "SYSTEM SPECIFICATIONS",
    readFramework: "READ FRAMEWORK"
  },
  bn: {
    navHome: "হোম",
    navFleet: "রোবট বহর",
    navSimulation: "টেলিঅপারেশন",
    navDocs: "ডকুমেন্টেশন",
    navTelemetry: "ডাটা ল্যাবস",
    langName: "বাংলা",
    byLine: "প্রিজম্যাক্স • ফিজিক্যাল এআই ইঞ্জিন",
    
    heroTitle: "ফিজিক্যাল এআই-এর সার্ভিস লেয়ার",
    heroSubtitle: "রোবট, ডেটা এবং বুদ্ধিমত্তার নিখুঁত ও সহজ সংযোগ।",
    heroDesc: "প্রিজম্যাক্স ডিজিটাল মডেল এবং বাস্তব জগতের ফিজিক্যাল মেশিনের মধ্যকার ব্যবধান দূর করে। আমাদের নেটওয়ার্ক হিউম্যানয়েড এবং বিশেষায়িত রোবট বহরের জন্য লো-লেটেন্সি টেলিঅপারেশন, অবিরাম লার্নিং লুপ এবং হার্ডওয়্যার-নিরপেক্ষ ফিজিক্যাল ইন্টেলিজেন্স উন্মুক্ত করে।",
    btnLearnMore: "আরও জানুন",
    btnExplore: "বহর অনুসন্ধান",
    btnOperate: "বাস্তব রোবট পরিচালনা করুন",
    
    topicTitle: "সিস্টেম আর্কিটেকচার",
    topicSubtitle: "প্রিজম্যাক্স ফিজিক্যাল নেটওয়ার্কের মূল দিকগুলো জানুন।",
    topics: {
      whatIsPrismax: {
        title: "প্রিজম্যাক্স কি",
        desc: "প্রিজম্যাক্স, এর মিশন, প্রযুক্তি এবং ফিজিক্যাল এআই এর ভবিষৎ সম্পর্কে জানুন।"
      },
      physicalAI: {
        title: "ফিজিক্যাল এআই",
        desc: "বুদ্ধিমত্তা কীভাবে শুধুমাত্র সফ্টওয়্যার এর বাইরে বাস্তব জগতের মেশিন এবং রোবোটিক্সে স্থানান্তরিত হয় তা বুঝুন।"
      },
      teleoperation: {
        title: "টেলিঅপারেশন",
        desc: "লো-লেটেন্সি বা কম-বিলম্বের রোবট পরিচালনা, রিমোট কন্ট্রোল সিস্টেম এবং হিউম্যান-ইন-দ্য-লুপ বুদ্ধিমত্তা এক্সপ্লোর করুন।"
      },
      dataLayer: {
        title: "ডেটা লেয়ার",
        desc: "রোবোটিক্স ডেটা কীভাবে সংগ্রহ, প্রক্রিয়াকরণ এবং প্রশিক্ষণ বুদ্ধিমত্তায় রূপান্তরিত হয় তা জানুন।"
      },
      intelligenceLayer: {
        title: "ইন্টেলিজেন্স লেয়ার",
        desc: "মডেল, রিজনিং সিস্টেম এবং মেশিন বুদ্ধিমত্তা কীভাবে ফিজিক্যাল এআই সিস্টেমকে চালিত করে তা আবিষ্কার করুন।"
      },
      systemArchitecture: {
        title: "সিস্টেম আর্কিটেকচার",
        desc: "রোবট, অপারেটর, ডেটা এবং বুদ্ধিমত্তা সহ সম্পূর্ণ প্রিজম্যাক্স ইকোসিস্টেম দেখুন।"
      }
    },
    
    fleetTitle: "বহর মোতায়েন",
    fleetSubtitle: "স্বাগতম! আপনাকে সাহায্য করার জন্য নির্বাচিত আমাদের রোবট বহর দেখে নিন।",
    fleetDesc: "প্রিজম্যাক্স নেতৃস্থানীয় রোবোটিক হার্ডওয়্যারের জন্য ইউনিফাইড লো-লেভেল এপিআই সংযোগ প্রদান করে। এই এজেন্টরা সক্রিয়ভাবে কাজ সম্পন্ন করে এবং ট্র্যাজেক্টরি ডেটা গ্লোবাল মডেলে নিরাপদে পাঠায়।",
    taglineFleet: "সামঞ্জস্যপূর্ণ রোবটসমূহ",

    ctrlTitle: "রোবট নিয়ন্ত্রণ কেন্দ্র",
    ctrlSubtitle: "প্রিজম্যাক্স নেটওয়ার্কের মাধ্যমে সক্রিয় ফিজিক্যাল হার্ডওয়্যারের সাথে লো-লেটেন্সি টেলিঅপারেশন পরিচালনা করুন।",
    ctrlStatus: "অবস্থা",
    ctrlAngleX: "জয়েন্ট কোণ X (বেস)",
    ctrlAngleY: "জয়েন্ট কোণ Y (এলবো)",
    ctrlGrip: "গ্রিপার নিয়ন্ত্রণ",
    ctrlLatency: "নেটওয়ার্ক লেটেন্সি",
    ctrlSignal: "সিগন্যাল শক্তি",
    ctrlBattery: "সিস্টেম তাপমাত্রা",
    ctrlConnect: "টেলিঅপারেশন লিংক চালু করুন",
    ctrlDisconnect: "টেলিঅপারেশন লিংক বিচ্ছিন্ন করুন",
    ctrlActive: "সক্রিয় স্ট্রিমিং",
    ctrlReserved: "সংরক্ষিত",
    ctrlQueue: "অপারেটর লাইনের দৈর্ঘ্য",
    ctrlSimulateAction: "কাজের স্ট্রোক সম্পন্ন করুন",

    membershipTitle: "অ্যামপ্লিফায়ার কমিউনিটিতে যোগ দিন",
    membershipSubtitle: "রোবোটিক্স বুদ্ধিমত্তাকে এগিয়ে নিতে এবং দ্রুত গ্রহণ ত্বরান্বিত করতে আমাদের অ্যামপ্লিফায়ার কমিউনিটিতে যোগ দিন।",
    membershipBenefit1: "নিরবচ্ছিন্ন প্রিমিয়াম রোবট বহরে দূরবর্তী অ্যাক্সেস এবং সিমুলেশন",
    membershipBenefit2: "বর্ধিত $PRISMA টোকেন সঞ্চয় ক্ষমতা (৩ গুণ বেশি দ্রুত গতি)",
    paymentMethod: "পেমেন্ট মুদ্রা নির্বাচন করুন",
    paymentMethodDesc: "দয়া করে পেমেন্ট পদ্ধতি নির্বাচন করুন। এটি একটি এককালীন পেমেন্ট।",
    membershipBtn: "এখনই অ্যামপ্লিফায়ার মেম্বার হোন",
    membershipSuccess: "অ্যামপ্লিফায়ার মেম্বার হিসেবে যোগ দেওয়ার জন্য ধন্যবাদ! আপনার অ্যাক্সেস ক্রেডেনশিয়াল আপনার ওয়ার্কস্পেসে পাঠানো হয়েছে।",

    docsTitle: "জ্ঞানের ভান্ডার (ডকুমেন্টেশন)",
    docsSubtitle: "ডেভেলপার, মেশিন ইন্টেলিজেন্স গবেষক এবং হার্ডওয়্যার হোস্টদের জন্য ব্যাপক প্রযুক্তিগত নির্দেশিকা।",
    docsSearchPlaceholder: "প্রোটোকল, URDF স্কিমা, API ইন্টিগ্রেশন অনুসন্ধান করুন...",
    docsBack: "হোমে ফিরে যান",
    teleopActiveTag: "সরাসরি টেলিঅপারেশন সংযোগে সক্রিয়",
    btnViewSpecs: "লাইব্রেরি",
    btnLaunchCtrl: "কন্ট্রোল সেন্টার লাঞ্চ করুন",
    knowledgeHubTitle: "প্রিজম্যাক্স নলেজ হাব",
    readArticle: "আর্টিকেল পড়ুন",
    contentSoon: "কনটেন্ট শীঘ্রই আসছে।",
    overview: "সারসংক্ষেপ",
    coreSpecConcepts: "প্রধান ধারণাসমূহ",
    visualExpl: "ভিজ্যুয়াল ব্যাখ্যা এবং স্কিমেটিক",
    relatedEcosystem: "অন্যান্য টপিকসমূহ",
    done: "সম্পন্ন",
    socialTitle: "প্রিজম্যাক্স সোশ্যাল",
    sweepingWorkspace: "ওয়ার্কস্পেস পরিষ্কার হচ্ছে",
    labControls: "গবেষণাগার লুপ",
    selectNode: "হার্ডওয়্যার নোড নির্বাচন করুন",
    queueInLine: "লাইনের দৈর্ঘ্য: {count} জন",
    enterNodeCode: "নোড অ্যাক্সেস কোড লিখুন",
    enterNodeCodeDesc: "অনুমতি কী এর সাথে সামঞ্জস্যপূর্ণ মূল পরামিতি ইনপুট করুন। অনুমোদিত অ্যাক্সেস টোকেন একটি কম লেটেন্সির দ্বিপাক্ষিক প্রতিক্রিয়া লুপ স্থাপন করে।",
    validateNodeAccess: "নোড অ্যাক্সেস যাচাই করুন",
    cooperativeSub: "সহযোগিতা সাবস্ক্রিপশন",
    membershipNetwork: "অ্যাম্প্লিফায়ার সদস্যতা নেটওয়ার্ক",
    linkActivated: "অ্যাম্প্লিফায়ার লিঙ্ক সক্রিয় করা হয়েছে",
    memberLabel: "অ্যাম্প্লিফায়ার মেম্বার",
    cooperativeLevel: "সহযোগিতা স্তর ১",
    totalInvestment: "মোট বিনিয়োগ",
    oneTimePayment: "এককালীন পেমেন্ট",
    coreSubsystem: "কোর সাবসিস্টেম",
    regionLanguage: "অঞ্চল ও ভাষা",
    scrollToTop: "উপরে স্ক্রোল করুন",
    systemSpecs: "সিস্টেম নির্দিষ্টকরণ",
    readFramework: "ফ্রেমওয়ার্ক পড়ুন"
  },
  zh: {
    navHome: "首页",
    navFleet: "机器人机队",
    navSimulation: "遥操作",
    navDocs: "技术文档",
    navTelemetry: "数据实验仓",
    langName: "简体中文",
    byLine: "PRISMAX • 具身物理智能引擎",
    
    heroTitle: "物理 AI 的服务中继层",
    heroSubtitle: "无缝连接机器人、数据集以及云端智能核心。",
    heroDesc: "PrismaX 旨在消除虚拟大模型与实体机械设备之间的接口沟堑。我们的去中心网络提供超低延迟的双向控制、在轨热训练演进，并为下一代异构及人型机器人提供跨厂商底层的具身计算力支撑。",
    btnLearnMore: "了解详情",
    btnExplore: "浏览机队",
    btnOperate: "操控实体机器人",
    
    topicTitle: "系统架构说明",
    topicSubtitle: "探索 PrismaX 具身智能物理网络的六大核心维度。",
    topics: {
      whatIsPrismax: {
        title: "什么是 PrismaX",
        desc: "了解 PrismaX 的宏伟愿景、软硬件中继层技术及其在物理 AI 浪潮中的革命地位。"
      },
      physicalAI: {
        title: "具身物理 AI",
        desc: "深入研究 AI 算法是如何超越传统的图文对话，迈向操作实体现实的三维物理智能。"
      },
      teleoperation: {
        title: "远程遥操作",
        desc: "了解超低网络时延的机器人双向力度反馈和在轨人机协同纠错。"
      },
      dataLayer: {
        title: "数据处理层",
        desc: "探寻如何以千赫兹极速同步记录实体位姿并拉力传感器，转码生成培训专用的 Token 词汇。"
      },
      intelligenceLayer: {
        title: "大动作智能层",
        desc: "探索专门的动作基盘 LAM 模型以及自监督决策树是如何驱动各类复杂关节顺利运转的。"
      },
      systemArchitecture: {
        title: "系统集成架构",
        desc: "查看包含现场硬件节点、远程接电专家、去中心冷存储以及回训算力集群的全面大地图。"
      }
    },
    
    fleetTitle: "物理机队部署",
    fleetSubtitle: "欢迎浏览！探索我们已并网并可接收远程调度与演练的经典异构设备机群。",
    fleetDesc: "PrismaX 为大多数主流机器人关节硬件提供统一规范的微驱动层接口。并网设备在日常清扫与拾装等生产劳动中，可实时把高质具身数据输入至分布式代币市场进行交易变现。",
    taglineFleet: "已并网兼容设备",

    ctrlTitle: "机器人远控中心",
    ctrlSubtitle: "结合多路实时视觉流，在 PrismaX 安全网络通道中对在线活动硬件实施高频力反馈遥操作演练。",
    ctrlStatus: "运行状态",
    ctrlAngleX: "基座旋转关节角 X",
    ctrlAngleY: "肘部偏摆关节角 Y",
    ctrlGrip: "末端夹爪张合力",
    ctrlLatency: "双向通信时延",
    ctrlSignal: "通信中继质量",
    ctrlBattery: "主机核心温度",
    ctrlConnect: "接入远控控制链",
    ctrlDisconnect: "断开远控控制链",
    ctrlActive: "实时数据流",
    ctrlReserved: "VIP 独占保留",
    ctrlQueue: "等待接管人数",
    ctrlSimulateAction: "触发全套任务步演练",

    membershipTitle: "申请加入生态增幅社区",
    membershipSubtitle: "通过认购专属席位，获得常态化极低延遥操作接入配额，共同助推大规模具身智能发展。",
    membershipBenefit1: "获得高频优质设备常设练习访问权及无限次仿真物理沙盒评测配额",
    membershipBenefit2: "自动在物理劳动证明中获得 3 倍乘数的代币累积和空投优先权",
    paymentMethod: "选择认缴支付币种",
    paymentMethodDesc: "认购通道为一笔过付款，请在弹窗对应的公链钱包窗口确认并授权额度。",
    membershipBtn: "立即认购增幅席位卡",
    membershipSuccess: "欢迎加入！您的专属增幅席位密匙已分发，您已拥有访问实体设备的完全配额权。",

    docsTitle: "开发者知识库",
    docsSubtitle: "为深度具身算法工程师、自监督网络学者 and 真机运营组整理的书本式工业白皮书。",
    docsSearchPlaceholder: "检索接口、URDF 模型刚度、码本量化算法...",
    docsBack: "返回主页",
    teleopActiveTag: "在线遥操作正在运行中",
    btnViewSpecs: "图书馆",
    btnLaunchCtrl: "启动远控中心",
    knowledgeHubTitle: "PRISMAX 技术知识库",
    readArticle: "阅读整篇论文",
    contentSoon: "内容准备中，敬请期待。",
    overview: "概述",
    coreSpecConcepts: "核心技术要点",
    visualExpl: "技术流程与物理学原理图解",
    relatedEcosystem: "推荐阅读模块",
    done: "已读完",
    socialTitle: "PrismaX 社区动态",
    sweepingWorkspace: "扫除作业进行中",
    labControls: "高敏感实验控制",
    selectNode: "选择并网机身节点",
    queueInLine: "排队中: 还有 {count} 个机司",
    enterNodeCode: "输入 VVIP 保留通道授权密码",
    enterNodeCodeDesc: "请输入专供的高等级授权数字 PIN 密匙。通过安全验签后立刻取得独占操作控制线路。",
    validateNodeAccess: "验证通道进入权",
    cooperativeSub: "生态协作认购",
    membershipNetwork: "增幅代表理事网络",
    linkActivated: "增幅链路成功点亮",
    memberLabel: "增幅代表",
    cooperativeLevel: "核心生态合作等级 I",
    totalInvestment: "认缴额度",
    oneTimePayment: "一次性单笔认缴",
    coreSubsystem: "核心系统单元",
    regionLanguage: "地区与语言选择",
    scrollToTop: "回滚至页首",
    systemSpecs: "硬件参数总汇",
    readFramework: "阅读白皮书框架"
  },
  hi: {
    navHome: "होम",
    navFleet: "रोबोट बेड़े",
    navSimulation: "टेलीऑपरेशन",
    navDocs: "दस्तावेज़",
    navTelemetry: "डेटा लैब्स",
    langName: "हिंदी",
    byLine: "PRISMAX • फिजिकल एआई इंजन",
    
    heroTitle: "फिजिकल एआई के लिए सर्विस लेयर",
    heroSubtitle: "रोबोट, डेटा और इंटेलिजेंस को जोड़ना बिना किसी बाधा के।",
    heroDesc: "PrismaX डिजिटल मॉडल और भौतिक मशीनों के बीच की खाई को पाटने का काम करता है। हमारा नेटवर्क अगली पीढ़ी के ह्यूमनॉइड और विशिष्ट रोबोट बेड़े के लिए कम-विलंबता टेलीऑपरेशन, निरंतर सीखने के लूप and क्रॉस-हार्डवेयर फिजिकल इंटेलिजेंस को सक्षम बनाता है।",
    btnLearnMore: "और जानें",
    btnExplore: "बेड़े का अन्वेषण करें",
    btnOperate: "वास्तविक रोबोट संचालित करें",
    
    topicTitle: "सिस्टम आर्किटेक्चर",
    topicSubtitle: "PrismaX फिजिकल नेटवर्क के मुख्य आयामों का अन्वेषण करें।",
    topics: {
      whatIsPrismax: {
        title: "PrismaX क्या है",
        desc: "PrismaX, उसके मिशन, तकनीक और फिजिकल एआई के भविष्य में उसकी भूमिका के बारे में जानें।"
      },
      physicalAI: {
        title: "फिजिकल एआई",
        desc: "समझें कि कैसे इंटेलिजेंस सॉफ्टवेयर से आगे बढ़कर वास्तविक दुनिया की मशीनों और रोबोटिक्स में स्थानांतरित होता है।"
      },
      teleoperation: {
        title: "टेलीऑपरेशन",
        desc: "कम-विलंबता रोबोट संचालन, रिमोट नियंत्रण प्रणालियों और ह्यूमन-इन-द-लूप इंटेलिजेंस का अन्वेषण करें।"
      },
      dataLayer: {
        title: "डेटा लेयर",
        desc: "जानें कि कैसे रोबोटिक्स डेटा को एकत्र, संसाधित और प्रशिक्षण इंटेलिजेंस में बदला जाता है।"
      },
      intelligenceLayer: {
        title: "इंटेलिजेंस लेयर",
        desc: "जानें कि कैसे मॉडल, रीजनिंग सिस्टम और मशीन इंटेलिजेंस फिजिकल एआई सिस्टम को शक्ति प्रदान करते हैं।"
      },
      systemArchitecture: {
        title: "सिस्टम आर्किटेक्चर",
        desc: "रोबोट, ऑपरेटर, डेटा और इंटेलिजेंस सहित संपूर्ण PrismaX इकोसिस्टम देखें।"
      }
    },
    
    fleetTitle: "बेड़े की तैनाती",
    fleetSubtitle: "स्वागत है! आपकी सहायता के लिए चुने गए हमारे रोबोटों के बेड़े से मिलें।",
    fleetDesc: "PrismaX अग्रणी रोबोटिक हार्डवेयर के लिए एकीकृत लो-level API कनैक्शन स्टेट प्रदान करता है। यह नेटवर्क अगली पीढ़ी के ह्यूमनॉइड और विशिष्ट रोबोट बेड़े को सक्षम बनाता है।",
    taglineFleet: "संगत प्रणालियां",

    ctrlTitle: "रोबोट नियंत्रण केंद्र",
    ctrlSubtitle: "PrismaX नेटवर्क पर सक्रिय फिजिकल हार्डवेयर के साथ कम-विलंबता द्विवार्षिक टेलीऑपरेशन निष्पादित करें।",
    ctrlStatus: "स्थिति",
    ctrlAngleX: "संयुक्त कोण X (आधार)",
    ctrlAngleY: "संयुक्त कोण Y (कोहनी)",
    ctrlGrip: "अंतिम प्रभावक पकड़",
    ctrlLatency: "नेटवर्क विलंबता",
    ctrlSignal: "सिग्नल शक्ति",
    ctrlBattery: "सिस्टम तापमान",
    ctrlConnect: "टेलीऑप लिंक स्थापित करें",
    ctrlDisconnect: "लिंक डिस्कनेक्ट करें",
    ctrlActive: "सक्रिय स्ट्रीम",
    ctrlReserved: "आरक्षित",
    ctrlQueue: "ऑपरेटर कतार",
    ctrlSimulateAction: "कार्य स्ट्रोक निष्पादित करें",

    membershipTitle: "एम्प्लीफायर समुदाय में शामिल हों",
    membershipSubtitle: "रोबोटिक्स इंटेलिजेंस को आगे बढ़ाने और मिलकर तेजी से अपनाने को बढ़ावा देने के लिए हमारे एम्प्लीफायर समुदाय में शामिल हों।",
    membershipBenefit1: "निरंतर प्रीमियम रोबोट बेड़े रिमोट एक्सेस और सिमुलेशन",
    membershipBenefit2: "उन्नत $PRISMA टोकन संचय (3x गति गुणक)",
    paymentMethod: "Select Payment Currency",
    paymentMethodDesc: "कृपया भुगतान विधि चुनें। यह एक बार का भुगतान है।",
    membershipBtn: "अभी एम्प्लीफायर सदस्य बनें",
    membershipSuccess: "एम्प्लीफायर सदस्य के रूप में शामिल होने के लिए धन्यवाद! एक्सेस क्रेडेंशियल आपके वर्कस्पेस कीज़ पर भेज दिए गए हैं।",

    docsTitle: "ज्ञान का आधार",
    docsSubtitle: "डेवलपर्स, मशीन इंटेलिजेंस शोधकर्ताओं और हार्डवेयर होस्ट के लिए व्यापक तकनीकी संसाधन।",
    docsSearchPlaceholder: "प्रोटोकॉल, URDF स्कीमा, API एकीकरण खोजें...",
    docsBack: "होम पर वापस जाएं",

    teleopActiveTag: "अब सक्रिय टेलीऑप परिनियोजन में",
    btnViewSpecs: "लाइब्रेरी",
    btnLaunchCtrl: "नियंत्रण केंद्र शुरू करें",
    knowledgeHubTitle: "PRISMAX ज्ञान केंद्र",
    readArticle: "लेख पढ़ें",
    contentSoon: "सामग्री जल्द ही आ रही है।",
    overview: "अवलोकन",
    coreSpecConcepts: "मुख्य विनिर्देश अवधारणाएं",
    visualExpl: "दृश्य स्पष्टीकरण और योजनाबद्ध",
    relatedEcosystem: "संबंधित पारिस्थितिकी तंत्र मॉड्यूल",
    done: "पूर्ण",
    socialTitle: "PrismaX सोशल",
    sweepingWorkspace: "कार्यस्थल की सफाई",
    labControls: "प्रयोगशाला नियंत्रण",
    selectNode: "हार्डवेयर नोड चुनें",
    queueInLine: "कतार: {count} लाइन में",
    enterNodeCode: "नोड प्रवेश कोड दर्ज करें",
    enterNodeCodeDesc: "प्राधिकरण कुंजियों से मेल खाने वाले मुख्य पैरामीटर दर्ज करें। प्राधिकृत पहुंच टोकन कम-विलंबता द्विपक्षीय प्रतिक्रिया लूप स्थापित करते हैं।",
    validateNodeAccess: "नोड पहुंच को मान्य करें",
    cooperativeSub: "सहकारी सदस्यता",
    membershipNetwork: "एम्प्लीफायर सदस्यता नेटवर्क",
    linkActivated: "एम्प्लीफायर लिंक सक्रिय",
    memberLabel: "एम्प्लीफायर सदस्य",
    cooperativeLevel: "सहकारी स्तर I",
    totalInvestment: "कुल निवेश",
    oneTimePayment: "एक बार का भुगतान",
    coreSubsystem: "मुख्य सबसिस्टम",
    regionLanguage: "क्षेत्र और भाषा",
    scrollToTop: "शीर्ष पर स्क्रॉल करें",
    systemSpecs: "सिस्टम विनिर्देश",
    readFramework: "फ्रेमवर्क पढ़ें"
  },
  ur: {
    navHome: "ہوم",
    navFleet: "روبوٹ فلیٹ",
    navSimulation: "ٹیلی آپریشن",
    navDocs: "دستاویزات",
    navTelemetry: "ڈیٹا لیبز",
    langName: "اردو",
    byLine: "PRISMAX • فزیکل AI انجن",
    
    heroTitle: "فزیکل AI کے لیے سروس لیئر",
    heroSubtitle: "روبوٹس، ڈیٹا اور ذہانت کو بغیر کسی رکاوٹ کے جوڑنا۔",
    heroDesc: "PrismaX ڈیجیٹل ماڈلز اور حقیقی دنیا کی مادی مشینوں کے درمیان فرق کو ختم کرتا ہے۔ ہمارا نیٹ ورک اگلی نسل کے ہیومنائیڈ اور خصوصی فلیٹس کے لیے کم تاخیر والے ٹیلی آپریشن، مسلسل سیکھنے کے لوپس، اور کراس ہارڈویئر فزیکل انٹیلیجنس کو ممکن بناتا ہے۔",
    btnLearnMore: "مزید جانیں",
    btnExplore: "فلیٹ دریافت کریں",
    btnOperate: "حقیقی روبوٹس چلائیں",
    
    topicTitle: "سسٹم آرکیٹیکچر",
    topicSubtitle: "PrismaX مادی نیٹ ورک کے بنیادی پہلوؤں کو دریافت کریں۔",
    topics: {
      whatIsPrismax: {
        title: "PrismaX کیا ہے",
        desc: "PrismaX، اس کے مشن، ٹیکنالوجی اور فزیکل AI کے مستقبل میں اس کے کردار کے بارے میں جانیں۔"
      },
      physicalAI: {
        title: "فزیکل AI",
        desc: "سمجھیں کہ ذہانت سافٹ ویئر سے آگے بڑھ کر حقیقی دنیا کی مشینوں اور روبوٹکس میں کیسے منتقل ہوتی ہے۔"
      },
      teleoperation: {
        title: "ٹیلی آپریشن (Teleoperation)",
        desc: "کم تاخیر والے روبوٹ آپریشن، ریموٹ کنٹرول سسٹمز اور ہاپٹک ہیومن ان دی لوپ انٹیلیجنس کو دریافت کریں۔"
      },
      dataLayer: {
        title: "ڈیٹا لیئر",
        desc: "جانیں کہ روبوٹکس کا ڈیٹا کیسے اکٹھا کیا جاتا ہے، پروسیس کیا جاتا ہے اور ٹریننگ انٹیلیجنس میں تبدیل کیا جاتا ہے۔"
      },
      intelligenceLayer: {
        title: "ذہانت کی لیئر",
        desc: "دریافت کریں کہ ماڈلز، استدلال کے نظام اور الیکٹرانک ذہانت کس طرح فزیکل AI سسٹمز کو طاقت دیتے ہیں۔"
      },
      systemArchitecture: {
        title: "سسٹم آرکیٹیکچر",
        desc: "روبوٹس، آپریٹرز، ڈیٹا اور ذہانت سمیت مکمل PrismaX ایکو سسٹم دیکھیں۔"
      }
    },
    
    fleetTitle: "فلیٹ کی تعیناتی",
    fleetSubtitle: "خوش آمدید! آپ کی مدد کے لیے منتخب کردہ ہمارے روبوٹس کے فلیٹ سے ملیں۔",
    fleetDesc: "PrismaX معروف روبوٹک ہارڈویئر کے لیے مربوط لو-لیول API کنکشن اسٹیٹس فراہم کرتا ہے۔ یہ ایجنٹس ہمارے عالمی انٹیلیجنس ماڈل میں ٹوکنائزڈ ٹریکٹری سیٹس کو محفوظ طریقے سے فیڈ کرتے ہوئے دستی کاموں کو فعال طور پر انجام دیتے ہیں۔",
    taglineFleet: "مطابقت پذیر سسٹمز",

    ctrlTitle: "روبوٹ کنٹرول سینٹر",
    ctrlSubtitle: "PrismaX نیٹ ورک پر فعال مادی ہارڈویئر کے ساتھ کم تاخیر والے ٹیلی آپریشن کو انجام دیں۔",
    ctrlStatus: "حیثیت",
    ctrlAngleX: "جوائنٹ اینگل X (بیس)",
    ctrlAngleY: "جوائنٹ اینگل Y (کہنی)",
    ctrlGrip: "اینڈ ایفیکٹر گرپ",
    ctrlLatency: "نیٹ ورک میں تاخیر",
    ctrlSignal: "سگنل کی طاقت",
    ctrlBattery: "سسٹم کا درجہ حرارت",
    ctrlConnect: "ٹیلی آپ لنک قائم کریں",
    ctrlDisconnect: "لنک منقطع کریں",
    ctrlActive: "فعال سلسلہ (لائیو اسٹریم)",
    ctrlReserved: "مختص شدہ",
    ctrlQueue: "آپریٹر قطار",
    ctrlSimulateAction: "ٹاسک اسٹروک چلائیں",

    membershipTitle: "ایمپلیفائر کمیونٹی میں شامل ہوں",
    membershipSubtitle: "روبوٹکس انٹیلیجنس کو آگے بڑھانے اور مل کر تیزی سے اپنانے کے لیے ہماری ایمپلیفائر کمیونٹی میں شامل ہوں۔",
    membershipBenefit1: "روبوٹ فلیٹ تک مستقل رسائی اور سمیلیشنز",
    membershipBenefit2: "بہتر $PRISMA ٹوکن کا حصول (3x اسپیڈ ملٹی پلائر)",
    paymentMethod: "ادائیگی کی کرنسی منتخب کریں",
    paymentMethodDesc: "براہ کرم ادائیگی کا طریقہ منتخب کریں۔ یہ ایک بار کی ادائیگی ہے۔",
    membershipBtn: "ابھی ایمپلیفائر ممبر بنیں",
    membershipSuccess: "ایمپلیفائر ممبر کے طور پر شامل ہونے کے لیے آپ کا شکریہ! رسائی کی اسناد آپ کے ورک اسپیس پر بھیج دی گئی ہیں۔",

    docsTitle: "نالج بیس",
    docsSubtitle: "ڈویلپرز، مشین انٹیلیجنس محققین، اور ہارڈویئر ہوسٹس کے لیے جامع تکنیکی وسائل۔",
    docsSearchPlaceholder: "پروٹوکولز، URDF اسکیماز، اور API انٹیگریشنز تلاش کریں...",
    docsBack: "ہوم پیج پر واپس جائیں",
    teleopActiveTag: "ابھی ٹیلی آپ آپریشن کی لائیو تعیناتی میں",
    btnViewSpecs: "لائبریری",
    btnLaunchCtrl: "LAUNCH CONTROL CENTER",
    knowledgeHubTitle: "PRISMAX نالج ہب",
    readArticle: "آرٹیکل پڑھیں",
    contentSoon: "مواد جلد دستیاب ہوگا۔",
    overview: "جائزہ",
    coreSpecConcepts: "بنیادی تصورات",
    visualExpl: "تفصیلی خاکہ اور فزکس ڈیزائن",
    relatedEcosystem: "متعلقہ ماڈیولز",
    done: "مکمل",
    socialTitle: "PrismaX سوشل",
    sweepingWorkspace: "کام کی جگہ کی صفائی",
    labControls: "لیبارٹری کنٹرولز",
    selectNode: "ہارڈویئر نوڈ منتخب کریں",
    queueInLine: "قطار میں: {count} افراد",
    enterNodeCode: "نوڈ رسائی کوڈ درج کریں",
    enterNodeCodeDesc: "اجازت کے مطابق مطلوبہ کوڈ درج کریں۔ یہ ایک مائع باہمی فیڈ بیک لوپ قائم करता ہے۔",
    validateNodeAccess: "نوڈ رسائی کی تصدیق کریں",
    cooperativeSub: "باہمی سبسکرپشن",
    membershipNetwork: "ایمپلیفائر ممبرشپ نیٹ ورک",
    linkActivated: "ایمپلیفائر لنک فعال ہو گیا",
    memberLabel: "ایمپلیفائر ممبر",
    cooperativeLevel: "کوآپریٹو لیول I",
    totalInvestment: "کل سرمایہ کاری",
    oneTimePayment: "ایک بار کی ادائیگی",
    coreSubsystem: "بنیادی سب سسٹم",
    regionLanguage: "خطہ اور زبان",
    scrollToTop: "اوپر جائیں",
    systemSpecs: "سسٹم کی خصوصیات",
    readFramework: "فریم ورک پڑھیں"
  },
  vi: {
    navHome: "Trang chủ",
    navFleet: "Đội ngũ robot",
    navSimulation: "Vận hành từ xa",
    navDocs: "Tài liệu",
    navTelemetry: "Phòng thí nghiệm dữ liệu",
    langName: "Tiếng Việt",
    byLine: "PRISMAX • ĐỘNG CƠ AI VẬT LÝ",
    
    heroTitle: "Phân lớp dịch vụ AI Vật lý",
    heroSubtitle: "Kết nối liền mạch giữa robot, dữ liệu và trí tuệ nhân tạo.",
    heroDesc: "PrismaX thu hẹp khoảng cách giữa các mô hình kỹ thuật số và máy móc vật lý thực tế. Mạng lưới của chúng tôi mang lại khả năng vận hành từ xa có độ trễ cực thấp, các vòng lặp học tập liên tục và trí tuệ vật lý đa nền tảng phần cứng cho thế hệ robot hình người và các đội ngũ chuyên nghiệp tiếp theo.",
    btnLearnMore: "Tìm hiểu thêm",
    btnExplore: "Khám phá đội ngũ",
    btnOperate: "Vận hành robot thực tế",
    
    topicTitle: "Kiến trúc hệ thống",
    topicSubtitle: "Khám phá các chiều hướng cốt lõi của mạng lưới vật lý PrismaX.",
    topics: {
      whatIsPrismax: {
        title: "PrismaX là gì",
        desc: "Tìm hiểu về PrismaX, sứ mệnh, công nghệ và vai trò của dự án trong tương lai của AI Vật lý."
      },
      physicalAI: {
        title: "AI Vật lý",
        desc: "Tìm hiểu cách trí tuệ nhân tạo vượt ra khỏi giới hạn phần mềm để đi vào máy móc và hệ thống robot thực tế."
      },
      teleoperation: {
        title: "Vận hành từ xa",
        desc: "Khám phá hệ thống vận hành robot độ trễ thấp, kiểm soát từ xa và trí tuệ tương tác xúc giác của con người."
      },
      dataLayer: {
        title: "Lớp dữ liệu",
        desc: "Tìm hiểu cách dữ liệu robot được thu thập, xử lý và chuyển đổi thành trí tuệ huấn luyện."
      },
      intelligenceLayer: {
        title: "Lớp trí tuệ",
        desc: "Khám phá cách các mô hình, hệ thống tư duy và trí tuệ máy móc vận hành các hệ thống AI vật lý."
      },
      systemArchitecture: {
        title: "Kiến trúc hệ thống",
        desc: "Xem toàn bộ hệ sinh thái PrismaX bao gồm robot, người vận hành, dữ liệu và trí tuệ nhân tạo."
      }
    },
    
    fleetTitle: "Triển khai đội ngũ robot",
    fleetSubtitle: "Chào mừng! Gặp gỡ đội ngũ robot được tuyển chọn để hỗ trợ bạn.",
    fleetDesc: "PrismaX cung cấp giải pháp kết nối API cấp thấp đồng bộ cho các thiết bị robot hàng đầu. Các tác nhân này chủ động thực hiện công việc thủ công tại không gian làm việc để thu nạp các tập dữ liệu quỹ đạo chuyển động được mã hóa thành thẻ token vào mô hình trí tuệ toàn cầu.",
    taglineFleet: "Hệ thống tương thích",

    ctrlTitle: "Trung tâm điều khiển Robot",
    ctrlSubtitle: "Thực hiện vận hành từ xa song phương độ trễ thấp với thiết bị phần cứng thực tế qua mạng lưới PrismaX.",
    ctrlStatus: "Trạng thái",
    ctrlAngleX: "Góc khớp X (Đế)",
    ctrlAngleY: "Góc khớp Y (Khuỷu tay)",
    ctrlGrip: "Bộ kẹp cơ cấu chấp hành",
    ctrlLatency: "Độ trễ mạng",
    ctrlSignal: "Cường độ tín hiệu",
    ctrlBattery: "Nhiệt độ hệ thống",
    ctrlConnect: "Thiết lập liên kết vận hành",
    ctrlDisconnect: "Ngắt kết nối",
    ctrlActive: "PHÁT TRỰC TUYẾN",
    ctrlReserved: "ĐÃ ĐẶT CHỖ",
    ctrlQueue: "Hàng đợi vận hành",
    ctrlSimulateAction: "Thực hiện hành trình",

    membershipTitle: "Gia nhập Cộng đồng Amplifier",
    membershipSubtitle: "Gia nhập cộng đồng Amplifier của chúng tôi để thúc đẩy phát triển trí tuệ robot và tăng tốc áp dụng công nghệ.",
    membershipBenefit1: "Truy cập từ xa và mô phỏng đội ngũ robot cao cấp liên tục",
    membershipBenefit2: "Gia tăng tốc độ tích lũy token $PRISMA (Hệ số nhân tốc độ 3x)",
    paymentMethod: "Chọn loại tiền thanh toán",
    paymentMethodDesc: "Vui lòng chọn phương thức thanh toán. Đây là thanh toán một lần.",
    membershipBtn: "Trở thành thành viên Amplifier ngay",
    membershipSuccess: "Cảm ơn bạn đã gia nhập với tư cách Thành viên Amplifier! Thông tin truy cập đã được gửi tới khóa không gian làm việc của bạn.",

    docsTitle: "Cơ sở tri thức",
    docsSubtitle: "Tài nguyên kỹ thuật toàn diện cho các nhà phát triển, nhà nghiên cứu trí tuệ máy và đơn vị vận hành phần cứng.",
    docsSearchPlaceholder: "Tìm kiếm giao thức, sơ đồ URDF, tích hợp API...",
    docsBack: "Quay lại trang chủ",
    teleopActiveTag: "ĐANG TRONG TRẠNG THÁI VẬN HÀNH TẠI CHỖ CHỦ ĐỘNG",
    btnViewSpecs: "THƯ VIỆN",
    btnLaunchCtrl: "KÍCH HOẠT TRUNG TÂM ĐIỀU KHIỂN",
    knowledgeHubTitle: "TRUNG TÂM TRI THỨC PRISMAX",
    readArticle: "ĐỌC BÀI VIẾT",
    contentSoon: "Nội dung sắp ra mắt.",
    overview: "TỔNG QUAN",
    coreSpecConcepts: "CÁC KHÁI NIỆM THÔNG SỐ CỐT LÕI",
    visualExpl: "SƠ ĐỒ TRỰC QUAN & THIẾT KẾ VẬT LÝ",
    relatedEcosystem: "CÁC PHÂN HỆ HỆ SINH THÁI LIÊN QUAN",
    done: "HOÀN THÀNH",
    socialTitle: "Kênh xã hội PrismaX",
    sweepingWorkspace: "DỌN DẸP KHÔNG GIAN LÀM VIỆC",
    labControls: "ĐIỀU KHIỂN PHÒNG THÍ NGHIỆM",
    selectNode: "CHỌN NÚT PHẦN CỨNG",
    queueInLine: "HÀNG ĐỢI: {count} ĐANG ĐỢI",
    enterNodeCode: "Nhập mã truy cập nút",
    enterNodeCodeDesc: "Nhập các tham số chính tương ứng với mã ủy quyền để thiết lập phản hồi song phương có độ trễ thấp.",
    validateNodeAccess: "XÁC MINH TRUY CẬP NÚT",
    cooperativeSub: "ĐĂNG KÝ HỢP TÁC",
    membershipNetwork: "Mạng lưới thành viên Amplifier",
    linkActivated: "Kích hoạt liên kết Amplifier thành công",
    memberLabel: "Thành viên Amplifier",
    cooperativeLevel: "CẤP ĐỘ HỢP TÁC I",
    totalInvestment: "TỔNG ĐẦU TƯ",
    oneTimePayment: "thanh toán một lần",
    coreSubsystem: "Hệ thống phụ cốt lõi",
    regionLanguage: "Khu vực & Ngôn ngữ",
    scrollToTop: "CUỘN LÊN ĐẦU",
    systemSpecs: "THÔNG SỐ HỆ THỐNG",
    readFramework: "ĐỌC KHUNG PHÁT TRIỂN"
  },
  uk: {
    navHome: "Головна",
    navFleet: "Флот роботів",
    navSimulation: "Телеоперація",
    navDocs: "Документація",
    navTelemetry: "Лабораторії даних",
    langName: "Українська",
    byLine: "PRISMAX • ДВИГУН ФІЗИЧНОГО ШІ",
    
    heroTitle: "Сервісний рівень для фізичного ШІ",
    heroSubtitle: "Безшовне з'єднання роботів, даних та інтелекту.",
    heroDesc: "PrismaX долає розрив між цифровими моделями та реальними фізичними машинами. Наша мережа відкриває телеоперацію з низькою затримкою, цикли безперервного навчання та крос-апаратний фізичний інтелект для наступного покоління гуманоїдних та спеціалізованих флотів.",
    btnLearnMore: "Дізнатися більше",
    btnExplore: "Дослідити флот",
    btnOperate: "Керувати реальними роботами",
    
    topicTitle: "Системна архітектура",
    topicSubtitle: "Досліджуйте ключові виміри фізичної мережі PrismaX.",
    topics: {
      whatIsPrismax: {
        title: "Що таке PrismaX",
        desc: "Дізнайтеся про PrismaX, її місію, технології та роль у майбутньому фізичного ШІ."
      },
      physicalAI: {
        title: "Фізичний ШІ",
        desc: "Зрозумійте, як штучний інтелект виходить за межі програмного забезпечення в реальні машини та робототехніку."
      },
      teleoperation: {
        title: "Телеоперація",
        desc: "Досліджуйте керування роботами з низькою затримкою, дистанційні системи та сенсорний зворотний зв’язок за участю людини."
      },
      dataLayer: {
        title: "Рівень даних",
        desc: "Дізнайтеся, як збираються, обробляються та перетворюються на інтелект навчання дані робототехніки."
      },
      intelligenceLayer: {
        title: "Рівень інтелекту",
        desc: "Дізнайтеся, як моделі, системи міркувань та машинний інтелект керують системами фізичного ШІ."
      },
      systemArchitecture: {
        title: "Системна архітектура",
        desc: "Перегляньте повну екосистему PrismaX, включаючи роботів, операторів, дані та інтелект."
      }
    },
    
    fleetTitle: "Розгортання флоту",
    fleetSubtitle: "Ласкаво просимо! Зустрічайте наш флот роботів, обраних для допомоги вам.",
    fleetDesc: "PrismaX надає єдине низькорівневе підключення API для провідного робототехнічного обладнання. Ці агенти активно виконують ручні завдання в робочих зонах, одночасно безпечно завантажуючи токенізовані набори траєкторій до нашої глобальної моделі інтелекту.",
    taglineFleet: "Сумісні системи",

    ctrlTitle: "Центр керування роботами",
    ctrlSubtitle: "Виконуйте двосторонню телеоперацію з низькою затримкою на активному фізичному обладнанні через мережу PrismaX.",
    ctrlStatus: "Статус",
    ctrlAngleX: "Кут суглоба X (Основа)",
    ctrlAngleY: "Кут суглоба Y (Лікоть)",
    ctrlGrip: "Хват робочого органу",
    ctrlLatency: "Затримка мережі",
    ctrlSignal: "Сила сигналу",
    ctrlBattery: "Темп. системи",
    ctrlConnect: "Встановити зв'язок",
    ctrlDisconnect: "Розірвати зв'язок",
    ctrlActive: "АКТИВНИЙ СТРІМ",
    ctrlReserved: "ЗАРЕЗЕРВОВАНО",
    ctrlQueue: "Черга операторів",
    ctrlSimulateAction: "Виконати крок завдання",

    membershipTitle: "Приєднуйтесь до спільноти Amplifier",
    membershipSubtitle: "Приєднуйтесь до нашої спільноти Amplifier, щоб розвивати інтелект роботів та прискорювати впровадження технологій разом.",
    membershipBenefit1: "Безперервний преміум-доступ до флоту роботів та симуляцій",
    membershipBenefit2: "Прискорене накопичення токенів $PRISMA (множник швидкості 3x)",
    paymentMethod: "Виберіть валюту оплати",
    paymentMethodDesc: "Будь ласка, виберіть спосіб оплати. Це одноразовий платіж.",
    membershipBtn: "Стати учасником Amplifier зараз",
    membershipSuccess: "Дякуємо за приєднання як учасник Amplifier! Дані доступу були надіслані до вашого робочого простору.",

    docsTitle: "База знань",
    docsSubtitle: "Вичерпні технічні ресурси для розробників, дослідників машинного інтелекту та власників обладнання.",
    docsSearchPlaceholder: "Пошук протоколів, схем URDF, інтеграцій API...",
    docsBack: "Назад на головну",
    teleopActiveTag: "ЗАРАЗ В АКТИВНОМУ РЕЖИМІ ТЕЛЕОПЕРАЦІЇ",
    btnViewSpecs: "БІБЛІОТЕКА",
    btnLaunchCtrl: "ЗАПУСТИТИ ЦЕНТР КЕРУВАННЯ",
    knowledgeHubTitle: "ЦЕНТР ЗНАНЬ PRISMAX",
    readArticle: "ЧИТАТИ СТАТТЮ",
    contentSoon: "Вміст з'явиться найближчим часом.",
    overview: "ОГЛЯД",
    coreSpecConcepts: "ОСНОВНІ КОНЦЕПЦІЇ СПЕЦИФІКАЦІЇ",
    visualExpl: "ВІЗУАЛЬНЕ ПОЯСНЕННЯ ТА СХЕМА",
    relatedEcosystem: "ПОВ'ЯЗАНІ МОДУЛІ ЕКОСИСТЕМИ",
    done: "ГОТОВО",
    socialTitle: "Соціальні мережі PrismaX",
    sweepingWorkspace: "ОЧИЩЕННЯ РОБОЧОЇ ЗОНИ",
    labControls: "ЛАБОРАТОРНІ ОРГАНИ КЕРУВАННЯ",
    selectNode: "ВИБРАТИ АПАРАТНИЙ ВУЗОЛ",
    queueInLine: "ЧЕРГА: {count} У ЧЕРЗІ",
    enterNodeCode: "Введіть код доступу до вузла",
    enterNodeCodeDesc: "Введіть ключові параметри, що відповідають ключам авторизації. Авторизовані токени доступу встановлюють двосторонній зворотний зв’язок із низькою затримкою.",
    validateNodeAccess: "ПЕРЕВІРИТИ ДОСТУП ДО ВУЗЛА",
    cooperativeSub: "КООПЕРАТИВНА ПІДПИСКА",
    membershipNetwork: "Мережа членства Amplifier",
    linkActivated: "Посилання Amplifier активовано",
    memberLabel: "Учасник Amplifier",
    cooperativeLevel: "КООПЕРАТИВНИЙ РІВЕНЬ I",
    totalInvestment: "ЗАГАЛЬНІ ІНВЕСТИЦІЇ",
    oneTimePayment: "одноразовий платіж",
    coreSubsystem: "Основна підсистема",
    regionLanguage: "Регіон та мова",
    scrollToTop: "ПРОКРУТИТИ ВГОРУ",
    systemSpecs: "ТЕХНІЧНІ СПЕЦИФІКАЦІЇ",
    readFramework: "ЧИТАТИ ФРЕЙМВОРК"
  },
  in: {
    navHome: "Beranda",
    navFleet: "Armada Robot",
    navSimulation: "Teleoperasi",
    navDocs: "Dokumentasi",
    navTelemetry: "Lab Data",
    langName: "Bahasa Indonesia",
    byLine: "PRISMAX • MESIN AI FISIK",
    
    heroTitle: "Lapisan Layanan untuk AI Fisik",
    heroSubtitle: "Menghubungkan robot, data, dan kecerdasan secara mulus.",
    heroDesc: "PrismaX menjembatani kesenjangan antara model digital dan mesin fisik dunia nyata. Jaringan kami membuka teleoperasi latensi rendah, loop pembelajaran berkelanjutan, dan kecerdasan fisik lintas perangkat keras untuk generasi robot humanoid dan armada khusus berikutnya.",
    btnLearnMore: "Pelajari Lebih Lanjut",
    btnExplore: "Jelajahi Armada",
    btnOperate: "Operasikan Robot Nyata",
    
    topicTitle: "Arsitektur Sistem",
    topicSubtitle: "Jelajahi dimensi inti dari jaringan fisik PrismaX.",
    topics: {
      whatIsPrismax: {
        title: "Apakah itu PrismaX",
        desc: "Pelajari tentang PrismaX, misi, teknologi, dan perannya dalam masa depan AI Fisik."
      },
      physicalAI: {
        title: "AI Fisik",
        desc: "Pahami bagaimana kecerdasan bergerak melampaui perangkat lunak menuju mesin nyata dan robotika."
      },
      teleoperation: {
        title: "Teleoperasi",
        desc: "Jelajahi operasi robot latensi rendah, sistem kontrol jarak jauh, dan kecerdasan haptic keterlibatan manusia."
      },
      dataLayer: {
        title: "Lapisan Data",
        desc: "Pelajari bagaimana data robotika dikumpulkan, diproses, dan diubah menjadi kecerdasan pembelajaran."
      },
      intelligenceLayer: {
        title: "Lapisan Kecerdasan",
        desc: "Temukan bagaimana model, sistem penalaran, dan kecerdasan mesin menggerakkan sistem AI fisik."
      },
      systemArchitecture: {
        title: "Arsitektur Sistem",
        desc: "Lihat ekosistem lengkap PrismaX termasuk robot, operator, data, dan kecerdasan."
      }
    },
    
    fleetTitle: "Penyebaran Armada",
    fleetSubtitle: "Selamat datang! Temui armada robot pilihan kami yang siap membantu Anda.",
    fleetDesc: "PrismaX menyediakan status koneksi API tingkat rendah yang terpadu untuk perangkat keras robotika terkemuka. Agen-agen ini secara aktif menjalankan tugas ruang kerja manual sekaligus mengirimkan set trajektori yang ditokenisasi dengan aman ke dalam model kecerdasan global kami.",
    taglineFleet: "Sistem yang Kompatibel",

    ctrlTitle: "Pusat Kontrol Robot",
    ctrlSubtitle: "Jalankan teleoperasi bilateral latensi rendah dengan perangkat keras fisik aktif melalui jaringan PrismaX.",
    ctrlStatus: "Status",
    ctrlAngleX: "Sudut Sendi X (Alas)",
    ctrlAngleY: "Sudut Sendi Y (Siku)",
    ctrlGrip: "Cengkeraman Efektor Akhir",
    ctrlLatency: "Latensi Jaringan",
    ctrlSignal: "Kekuatan Sinyal",
    ctrlBattery: "Suhu Sistem",
    ctrlConnect: "Hubungkan Jaringan Teleop",
    ctrlDisconnect: "Putuskan Jaringan Teleop",
    ctrlActive: "ALIRAN AKTIF",
    ctrlReserved: "DIRESERVASI",
    ctrlQueue: "Antrean Operator",
    ctrlSimulateAction: "Jalankan Langkah Tugas",

    membershipTitle: "Bergabung dengan Komunitas Amplifier",
    membershipSubtitle: "Bergabunglah dengan komunitas Amplifier kami untuk memajukan kecerdasan robotika dan mendorong adopsi yang lebih cepat bersama-sama.",
    membershipBenefit1: "Akses jarak jauh armada robot premium berkelanjutan & simulasi",
    membershipBenefit2: "Akumulasi token $PRISMA yang ditingkatkan (pengali kecepatan 3x)",
    paymentMethod: "Pilih Mata Uang Pembayaran",
    paymentMethodDesc: "Silakan pilih metode pembayaran. Ini adalah pembayaran satu kali.",
    membershipBtn: "Menjadi Anggota Amplifier Sekarang",
    membershipSuccess: "Terima kasih telah bergabung sebagai Anggota Amplifier! Kredensial akses telah dikirim ke kunci ruang kerja Anda.",

    docsTitle: "Basis Pengetahuan",
    docsSubtitle: "Sumber daya teknis komprehensif untuk pengembang, peneliti kecerdasan mesin, dan host perangkat keras.",
    docsSearchPlaceholder: "Cari protokol, skema URDF, integrasi API...",
    docsBack: "Kembali ke Beranda",
    teleopActiveTag: "SEKARANG DALAM PENYEBARAN TELEOPERASI AKTIF",
    btnViewSpecs: "PERPUSTAKAAN",
    btnLaunchCtrl: "LUNCURKAN PUSAT KONTROL",
    knowledgeHubTitle: "PUSAT PENGETAHUAN PRISMAX",
    readArticle: "BACA ARTIKEL",
    contentSoon: "Konten akan segera hadir.",
    overview: "IKHTISAR",
    coreSpecConcepts: "KONSEP SPESIFIKASI INTI",
    visualExpl: "PENJELASAN VISUAL & SKEMATIK",
    relatedEcosystem: "MODUL EKOSISTEM TERKAIT",
    done: "SELESAI",
    socialTitle: "Sosial PrismaX",
    sweepingWorkspace: "MEMBERSIHKAN RUANG KERJA",
    labControls: "KONTROL LABORATORIUM",
    selectNode: "PILIH NODE PERANGKAT KERAS",
    queueInLine: "ANTREAN: {count} DALAM ANTREAN",
    enterNodeCode: "Masukkan Kode Akses Node",
    enterNodeCodeDesc: "Masukkan parameter kunci yang cocok dengan kunci otorisasi. Token akses resmi akan membuat lingkaran umpan balik bilateral latensi rendah.",
    validateNodeAccess: "VALIDASI AKSES NODE",
    cooperativeSub: "LANGGANAN KOOPERATIF",
    membershipNetwork: "Jaringan Anggota Amplifier",
    linkActivated: "Tautan Amplifier Diaktifkan",
    memberLabel: "Anggota Amplifier",
    cooperativeLevel: "TINGKAT KOOPERATIF I",
    totalInvestment: "TOTAL INVESTASI",
    oneTimePayment: "pembayaran satu kali",
    coreSubsystem: "Sub-sistem Inti",
    regionLanguage: "Wilayah & Bahasa",
    scrollToTop: "GULIR KE ATAS",
    systemSpecs: "SPESIFIKASI SISTEM",
    readFramework: "BACA FRAMEWORK"
  }
};

export const robotsData: Robot[] = [
  {
    id: "g1",
    name: "Unitree G1",
    maker: "Unitree Robotics",
    tags: ["Advertising", "Tour Guide", "Conferences"],
    type: "Bipedal Humanoid",
    description: "Highly nimble, ultra-lightweight humanoid designed for social engagement and agile movement tasks. Operates on a 23-DOF high-precision motor framework.",
    bengaliDescription: "সামাজিক যোগাযোগ এবং দ্রুতগামী চলাচলের জন্য অত্যন্ত চটপটে ও হালকা ওজনের হিউম্যানয়েড রোবট। এটি ২৩ ডিগ্রি-অফ-ফ্রিডম মোটর ফ্রেমওয়ার্কে কাজ করে।",
    bengaliTags: ["বিজ্ঞাপন", "ট্যুর গাইড", "কনফারেন্স"],
    hindiDescription: "सामाजिक सहभागिता और चुस्त गतिशीलता के लिए डिज़ाइन किया गया अत्यधिक फुर्तीला, बेहद हल्का ह्यूमनॉइड रोबोट। यह 23-DOF उच्च-सटीक मोटर फ्रेमवर्क पर काम करता है।",
    hindiTags: ["विज्ञापन", "टूर गाइड", "सम्मेलन"],
    chineseDescription: "极其轻量、高敏捷的人形机器人，专为社交互动和敏捷移动任务开发。基于23个自由度的高精度电机框架运行。",
    chineseTags: ["宣传展示", "向导导览", "会议支持"],
    urduDescription: "سماجی روابط اور چست نقل و حرکت کے کاموں کے لیے ڈیزائن کیا گیا انتہائی چست، ہاف لائٹ ہیومنائیڈ روبوٹ۔ 23-DOF اعلیٰ درستگی والے موٹر فریم ورک پر کام کرتا ہے۔",
    urduTags: ["اشتہارات", "ٹور گائیڈ", "کانفرنسز"],
    vietnameseDescription: "Robot humanoid nhẹ và cực kỳ linh hoạt được thiết kế cho tương tác xã hội và các nhiệm vụ di chuyển nhanh nhẹn. Hoạt động trên hệ thống khung động cơ 23 độ tự do tinh chỉnh cao.",
    vietnameseTags: ["Quảng cáo", "Hướng dẫn viên", "Hội nghị"],
    ukrainianDescription: "Надзвичайно замінний, ультралегкий гуманоїд, призначений для соціальної взаємодії та завдань зі швидкого переміщення. Працює на базі високоточного моторного каркасу з 23 ступенями свободи.",
    ukrainianTags: ["Реклама", "Екскурсовод", "Конференції"]
  },
  {
    id: "walker",
    name: "Ubtech Walker",
    maker: "UBTECH Systems",
    tags: ["Foodservice", "Light Warehousing", "Tour Guide", "Advertising", "Locomotion Research"],
    type: "Full-Sized Humanoid",
    description: "A full-scale service humanoid integrated with tactile payload handling, stable uneven locomotion, and intelligent autonomous navigation.",
    bengaliDescription: "ভঙ্গুর বা অসম স্থানে সুস্থিত চলাচলের সক্ষম পূর্ণ-আকারের পেশাদার সার্ভিস রোবট, যা স্পর্শকাতর মালামাল পরিবহন ও স্বায়ত্তশাসিত নেভিগেশনের জন্য উপযুক্ত।",
    bengaliTags: ["খাদ্য পরিবেশন", "হালকা গুদামজাতকরণ", "ভ্রমণ সহায়িকা", "বিজ্ঞাপন", "চলাচল গবেষণা"],
    hindiDescription: "एक पूर्ण-आकार का सेवा ह्यूमनॉइड रोबोट जो स्पर्श संवेदनशील लोड हैंडलिंग, स्थिर असमान गतिशीलता और बुद्धिमान स्वायत्त नेविगेशन के साथ एकीकृत है।",
    hindiTags: ["खाद्य सेवा", "हल्का भंडारण", "टूर गाइड", "विज्ञापन", "गतिशीलता अनुसंधान"],
    chineseDescription: "全尺寸商业服务人形机器人，完美融合触觉负载抓握、复杂路面稳定步态以及高级自主导航避障技术。",
    chineseTags: ["餐饮服务", "轻型仓储", "景点向导", "广告投放", "步动学研究"],
    urduDescription: "صنعتی رینج کا ہیومنائیڈ روبوٹ جس میں ٹچ حساس لوڈ ہینڈلنگ، ناہموار ہموار راستوں پر مستحکم توازن اور خود مختار نیویگیشن شامل ہے۔",
    urduTags: ["فوڈ سروس", "ہلکا گودام", "ٹور گائیڈ", "اشتہارات", "لوکوموشن ریسرچ"],
    vietnameseDescription: "Robot humanoid dịch vụ toàn diện tích hợp bộ kẹp xúc giác xử lý tải trọng tốt, khả năng giữ thăng bằng tuyệt vời trên địa hình gồ ghề và hệ thống định vị tự trị thông minh.",
    vietnameseTags: ["Dịch vụ ăn uống", "Kho vận nhẹ", "Hướng dẫn viên", "Quảng cáo", "Nghiên cứu vận động"],
    ukrainianDescription: "Повнорозмірний сервісний гуманоїд з інтегрованими системами тактильного поводження з вантажем, стабільного пересування по нерівній поверхні та інтелектуальної автономної навігації.",
    ukrainianTags: ["Обслуговування", "Легкі склади", "Екскурсовод", "Реклама", "Дослідження руху"]
  },
  {
    id: "reachy2",
    name: "Pollen Robotics Reachy 2",
    maker: "Pollen Robotics",
    tags: ["Manipulation Research", "Light Manual Tasks"],
    type: "Bi-Manual Mobile Upper-Body",
    description: "State-of-the-art dual-arm platform fitted with high-fidelity camera feeds, ideal for learning-from-demonstration and high-detail assembly work.",
    bengaliDescription: "উচ্চ-নির্ভুল ক্যামেরা ফিড সমৃদ্ধ দুটি হাত সংবলিত বিশেষ প্ল্যাটফর্ম, যা হাতে কলমে প্রদর্শন-প্রশিক্ষণ ও খুব সূক্ষ্ম সংযোজনমূলক কাজের জন্য চরম উপযোগী।",
    bengaliTags: ["অপারেশনal গবেষণা", "হালকা ম্যানুয়াল কাজ"],
    hindiDescription: "उच्च-सटीक कैमरा फीड से लैस अत्याधुनिक डुअल-आर्म प्लेटफॉर्म, जो व्यावहारिक प्रदर्शन-प्रशिक्षण और अत्यधिक सटीक असेंबली कार्यों के लिए आदर्श है।",
    hindiTags: ["मैनिप्यूलेशन अनुसंधान", "हल्के मैन्युअल कार्य"],
    chineseDescription: "尖端双腕上躯干机器人平台，配备高保真深度相机，最适于示教模拟和高精准工业组装科研任务。",
    chineseTags: ["精巧操作研究", "轻型手工装配"],
    urduDescription: "بہترین قسم کا ڈوئل آرم روبوٹک پلیٹ فارم جو ہائی فیڈلیٹی کیمرے سے لیس ہے، جو مظاہرے کے ذریعے سیکھنے اور باریک اسمبلی کے کاموں کے لیے بہترین ہے۔",
    urduTags: ["مینیپولیشن ریسرچ", "ہلکے دستی کام"],
    vietnameseDescription: "Nền tảng hai tay tiên tiến thế hệ mới được trang bị hệ thống camera độ trung thực cao, lý tưởng cho mô hình học máy từ mô phỏng trực quan và lắp ráp sản phẩm chi tiết độ chính xác cao.",
    vietnameseTags: ["Nghiên cứu thao tác", "Nhiệm vụ thủ công nhẹ"],
    ukrainianDescription: "Сучасна дворука платформа, оснащена камерами високої точності, що ідеально підходить для навчання на демонстраціях та високодеталізованих робіт зі збирання.",
    ukrainianTags: ["Дослідження маніпуляцій", "Легкі ручні завдання"]
  },
  {
    id: "alex",
    name: "Boardwalk Robotics Alex",
    maker: "Boardwalk Robotics",
    tags: ["Manipulation Research", "Maintenance", "Manufacturing"],
    type: "Torso-Mounted Industrial Humanoid",
    description: "Industrial strength upper torso humanoid with high peak torque actuators, engineered to perform complex, rugged force-sensitive operations.",
    bengaliDescription: "উচ্চ টর্ক সম্পন্ন ভারী শিল্প গ্রেডের আংশিক হিউম্যানয়েড রোবট, যা কঠোর ও জটিল বল-সংবেদনশীল কারখানার কাজ পরিচালনার জন্য বিশেষভাবে নকশাকৃত।",
    bengaliTags: ["ম্যানিপুলেশন গবেষণা", "রক্ষণাবেক্ষণ", "উত্পাদন"],
    hindiDescription: "उच्च पीक टॉर्क एक्चुएटर्स के साथ औद्योगिक मजबूती वाला ऊपरी धड़ ह्यूमनॉइड, जिसे जटिल, कठिन बल-संवेदनशील कार्यों को पूरा करने के लिए तैयार किया गया है।",
    hindiTags: ["मैनिप्यूलेशन अनुसंधान", "रखरखाव", "विनिर्माण"],
    chineseDescription: "工业级重载半身机器人，配备高负荷伺服模组执行器，擅于应对高强度且高度敏感的力控环境作业。",
    chineseTags: ["力控算法研究", "设备巡检维护", "先进工厂制造"],
    urduDescription: "اعلیٰ ٹارک ایکچوایٹرز کے ساتھ صنعتی صلاحیت کا حامل ہیومنائیڈ روبوٹ، جسے سخت اور پیچیدہ قوت کے حساس کاموں کو انجام دینے کے لیے ڈیزائن کیا گیا ہے۔",
    urduTags: ["مینیپولیشن ریسرچ", "دیکھ بھال", "مینوفیکچرنگ"],
    vietnameseDescription: "Robot humanoid bán thân ngành công nghiệp với bộ truyền động mô-men xoắn đỉnh cao bền bỉ, được thiết kế để thực hiện các nhiệm vụ phức tạp đòi hỏi độ nhạy lực kéo cơ nhiệt mạnh mẽ.",
    vietnameseTags: ["Nghiên cứu thao tác", "Bảo trì", "Sản xuất"],
    ukrainianDescription: "Промисловий гуманоїд верхньої частини тулуба з актуаторами високого пікового крутного моменту, розроблений для виконання складних операцій, чутливих до сили.",
    ukrainianTags: ["Дослідження маніпуляцій", "Обслуговування", "Виробництво"]
  },
  {
    id: "mirokai",
    name: "Enchanted Tools Mirokai",
    maker: "Enchanted Tools",
    tags: ["Companionship", "Conferences", "Hospitality"],
    type: "Sphere-Based Mobile Humanoid",
    description: "Stylized, exceptionally expressive companion robot with highly innovative rolling sphere balance kinematics, designed for frictionless clinical or corporate assistance.",
    bengaliDescription: "অত্যন্ত অভিব্যক্তিময় এবং অনন্য রোলিং স্ফিয়ার (গোলকাকার চাকা) ব্যালেন্সের চটপটে রোবট, যা চিকিৎসালয় বা কর্পোরেট সহায়তার জন্য নির্বিঘ্ন সেবা দেয়।",
    bengaliTags: ["সাহচর্য", "কনফারেন্স", "আতিথেয়তা"],
    hindiDescription: "अत्यधिक प्रभावशाली और अद्वितीय रोलिंग स्फेयर (गोलाकार पहिया) संतुलन गतिकी वाला साथी रोबोट, जिसे अस्पतालों या कॉर्पोरेट सहायता के लिए सहज सेवा प्रदान करने के लिए डिज़ाइन किया गया है।",
    hindiTags: ["साथी", "सम्मेलन", "आतिथ्य"],
    chineseDescription: "高度艺术化、极富情绪表达的陪伴伴侣机器人。搭载创新的滚动球体自平衡动力学机制，实现诊疗和接待工作中的无缝协助。",
    chineseTags: ["情感陪伴", "大型会客", "高端接待"],
    urduDescription: "غیر معمولی طور پر تاثرات ظاہر کرنے والا ساتھی روبوٹ جس میں انتہائی جدید متحرک سفیر بیلنس میکانزم ہے، جو کلینیکل یا کارپوریٹ امداد کے لیے بہترین ہے۔",
    urduTags: ["رفاقت", "کانفرنسز", "مہمان نوازی"],
    vietnameseDescription: "Robot đồng hành có mức độ biểu cảm ấn tượng sở hữu hệ cân bằng động lực học bánh cầu lăn độc đáo mới lạ, được tối ưu cho các dịch vụ hỗ trợ không ma sát trong bệnh viện hoặc doanh nghiệp.",
    vietnameseTags: ["Người đồng hành", "Hội nghị", "Hiếu khách"],
    ukrainianDescription: "Стилізований, надзвичайно експресивний робот-компаньйон з інноваційною кінематикою балансування на коліній кулі, призначений для безперешкодної медичної або корпоративної допомоги.",
    ukrainianTags: ["Супровід", "Конференції", "Гостинність"]
  },
  {
    id: "go2w",
    name: "Unitree Go2-W",
    maker: "Unitree Robotics",
    tags: ["Locomotion Research", "Advertising", "Inspection"],
    type: "Quadruped-Wheeled Robot",
    description: "All-terrain hybrid wheeled-legged robotic canine fitted with 3D LiDAR mapping, showcasing superb resilience across high slopes and rough industrial corridors.",
    bengaliDescription: "চাকা সমৃদ্ধ চতুষ্পদ হাইব্রিড ডগ রোবট যা ত্রিমাত্রিক লিডার ম্যাপিং সংবলিত। এটি কারখানার অসমান বা ঢালু করিডোরে দারুণ সক্ষমতার পরিচয় দেয়।",
    bengaliTags: ["চলাচল গবেষণা", "বিজ্ঞাপন", "পরিদর্শন"],
    hindiDescription: "सभी इलाकों में काम करने वाला पहिएदार और पैरों वाला हाइब्रिड डॉग रोबोट जो 3D LiDAR मैपिंग से लैस है। यह कारखानों के ढलानों और उबड़-खाबड़ रास्तों पर उत्कृष्ट प्रदर्शन करता है।",
    hindiTags: ["गतिशीलता अनुसंधान", "विज्ञापन", "निरीक्षण"],
    chineseDescription: "全地形轮腿混合足形机器犬，配备高精度 3D 激光雷达扫描，在崎岖的工业车间或楼梯斜坡展露强健越障性能。",
    chineseTags: ["步态运动学研究", "户外广告展示", "高险自主巡检"],
    urduDescription: "تمام خطوں کے لیے موزوں ہائبرڈ وہیلڈ ڈاگ روبوٹ جس میں 3D LiDAR میپنگ شامل ہے، جو صنعتی کاریڈورز اور اونچی ڈھلوانوں پر لاجواب توازن کا مظاہرہ کرتا ہے۔",
    urduTags: ["لوکوموشن ریسرچ", "اشتہارات", "معائنہ"],
    vietnameseDescription: "Chú chó robot lai bánh-chân đa địa hình được trang bị hệ thống LiDAR 3D lập bản đồ không gian, mang lại khả năng di chuyển linh động mạnh mẽ qua các sườn dốc cao và hành lang nhà xưởng gồ ghề.",
    vietnameseTags: ["Nghiên cứu vận động", "Quảng cáo", "Tuần tra giám sát"],
    ukrainianDescription: "Універсальний гібридний колісно-крокуючий робот-собака, оснащений 3D LiDAR картографуванням, що демонструє чудову стійкість на крутих схилах та нерівних промислових коридорах.",
    ukrainianTags: ["Дослідження руху", "Реклама", "Інспекція"]
  }
];

export const roboticArms: RoboticArm[] = [
  {
    id: "arm_black",
    name: "Training Arm Black",
    description: "Join the queue to practice your skills. Open to Amplifiers and Innovators.",
    vietnameseDescription: "Tham gia hàng đợi để luyện tập các kỹ năng vận hành của bạn. Mở cho thành viên Amplifier và Innovators.",
    ukrainianDescription: "Приєднуйтеся до черги, щоб потренувати свої навички. Відкрито для учасників Amplifier та Innovators.",
    bengaliDescription: "আপনার দক্ষতা অনুশীলন করতে সারিবদ্ধ দলে যোগ দিন। এমপ্লিফায়ার এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    hindiDescription: "अपनी स्किल्स का अभ्यास करने के लिए कतार में शामिल हों। एम्पलीफायर्स और इनोवेटर्स के लिए खुला है।",
    chineseDescription: "加入排队来练习您的操作技能。对生态增幅代表和创新者开放。",
    urduDescription: "اپنی مہارتوں کی مشق کرنے کے لیے قطار میں شامل ہوں۔ یہ ایمپلیفائرز اور انوویٹرز کے لیے دستیاب ہے۔",
    status: "online",
    queueLength: 4,
    bgHex: "#18181A"
  },
  {
    id: "arm_gold",
    name: "Training Arm Gold",
    description: "Join the queue to practice your skills. Open to Amplifiers and Innovators.",
    vietnameseDescription: "Tham gia hàng đợi để luyện tập các kỹ năng vận hành của bạn. Mở cho thành viên Amplifier và Innovators.",
    bengaliDescription: "আপনার দক্ষতা অনুশীলন করতে সারিবদ্ধ দলে যোগ দিন। এমপ্লিফায়ার এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    hindiDescription: "अपनी स्किल्स का अभ्यास करने के लिए कतार में शामिल हों। एम्पलीफायर्स और इनोवेटर्स के लिए खुला है।",
    chineseDescription: "加入排队来练习您的操作技能。对生态增幅代表和创新者开放。",
    urduDescription: "اپنی مہارتوں کی مشق کرنے کے لیے قطار میں شامل ہوں۔ یہ ایمپلیفائرز اور انوویٹرز کے لیے دستیاب ہے۔",
    status: "active",
    queueLength: 0,
    bgHex: "#DFD8D0"
  },
  {
    id: "arm_arena",
    name: "Arena Arm",
    description: "Designed for high-volume sessions. Open to first-time users and Innovators.",
    vietnameseDescription: "Được thiết kế cho các phiên đào tạo cường độ cao. Mở cho người dùng lần đầu và Innovators.",
    ukrainianDescription: "Призначено для високоінтенсивних сесій. Відкрито для початківців та Innovators.",
    bengaliDescription: "উচ্চ-মাত্রার সেশনের জন্য ডিজাইন করা হয়েছে। প্রথমবার ব্যবহারকারী এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    hindiDescription: "उच्च-मात्रा वाले सत्रों के लिए डिज़ाइन किया गया। पहली बार उपयोगकर्ता और इनोवेटर्स के लिए खुला है।",
    chineseDescription: "专为高负载、多用户并发演练设计。对初次体验者和创新者开放。",
    urduDescription: "زیادہ کثرت والے سیشنز کے لیے ڈیزائن کیا گیا ہے۔ پہلی بار استعمال کرنے والوں اور انوویٹرز کے لیے کھلا ہے۔",
    status: "online",
    queueLength: 12,
    bgHex: "#5E564D"
  },
  {
    id: "arm_private",
    name: "Private Arm",
    description: "Reserved for VIPs, partners, and special activations. Access requires a code and may vary by event.",
    vietnameseDescription: "Bảo lưu cho đối tác VIP và các hoạt động chuyên dụng đặc biệt. Yêu cầu nhập mã truy cập để thực hiện liên kết.",
    ukrainianDescription: "Зарезервовано для VIP-персон, партнерів та спеціальних активностей. Для доступу потрібен код, який може змінюватися залежно від події.",
    bengaliDescription: "ভিআইপি, অংশীদার এবং বিশেষ অ্যাক্টিভেশনের জন্য সংরক্ষিত। অ্যাক্সেসের জন্য কোড প্রয়োজন এবং অনুষ্ঠানভেদে পরিবর্তিত হতে পারে।",
    hindiDescription: "वीआईपी, भागीदारों और विशेष गतिविधियों के लिए आरक्षित। एक्सेस के लिए कोड की आवश्यकता होती है और इवेंट के अनुसार भिन्न हो सकता है।",
    chineseDescription: "VIP 保留独占、战略合作伙伴与特定演练场次专用。需要专属数字授权码接入。",
    urduDescription: "وی آئی پی، شراکت داروں اور خصوصی سرگرمیوں کے لیے مخصوص ہے۔ رسائی کے لیے کوڈ درکار ہے اور یہ ہر ایونٹ کے لحاظ سے مختلف ہو سکتا ہے۔",
    status: "reserved",
    queueLength: 0,
    bgHex: "#332B25",
    hasRibbon: true
  }
];

export const documentationArticles: DocArticle[] = [
  {
    slug: "getting-started",
    category: "Introduction",
    vietnameseCategory: "Giới thiệu",
    vietnameseTitle: "Tổng quan về PrismaX & Bắt đầu nhanh",
    vietnameseSummary: "Giới thiệu về mạng lưới kết nối vật lý phi tập trung PrismaX và các điểm cuối API.",
    vietnameseContent: [
      "PrismaX hoạt động như một lớp firmware trừu tượng kết nối giữa các thực thể mô hình đám mây và bộ điều khiển máy thực tế. Bằng việc tiêu chuẩn hóa các bản ghi đo lường vật lý từ xa (telemetry), chúng tôi giải quyết các biến đổi cơ học thành các mô hình kỹ thuật số song sinh (digital twins) có thể dự đoán được.",
      "Việc tích hợp nhanh chóng được vận hành thông qua các cấu hình URDF tiêu chuẩn kết hợp với tác nhân máy khách (client agent) được bản địa hóa của chúng tôi. Chạy tệp nhị phân máy chủ cục bộ sẽ kết nối trực tiếp các khớp máy của bạn.",
      "Việc điều khiển cấu hình khớp hoàn toàn tuân theo các giá trị radian được bình thường hóa trên các phân loại robot hai chân, bốn chân và cánh tay công nghiệp, loại bỏ các vấn đề mở rộng tỷ lệ truyền động cơ học theo thương hiệu cục bộ.",
      "Hệ thống của chúng tôi hoạt động tự nhiên với các luồng truyền dữ liệu UDP độ trễ thấp để giữ cho việc đồng bộ hóa đo lường từ xa song phương dưới 30 mili giây trên các kết nối cáp quang tiêu chuẩn."
    ],
    bengaliCategory: "উপক্রমণিকা",
    hindiCategory: "परिचय",
    chineseCategory: "白皮书引言",
    title: "PrismaX Overview & Quick Start",
    bengaliTitle: "প্রিজম্যাক্স ওভারভিউ ও দ্রুত শুরু",
    hindiTitle: "PrismaX अवलोकन और त्वरित शुरुआत",
    chineseTitle: "PrismaX 技术概述与快速入门",
    summary: "An introduction to the PrismaX decentralized physical connection network and API endpoints.",
    bengaliSummary: "প্রিজম্যাক্স বিকেন্দ্রীভূত ফিজিক্যাল কানেকশন নেটওয়ার্ক ও এপিআই এর সাথে প্রথম পরিচিতি।",
    hindiSummary: "PrismaX विकेंद्रीकृत भौतिक कनेक्शन नेटवर्क और API एंडपॉइंट्स का एक परिचय।",
    chineseSummary: "去中心化 PrismaX 物理并网连接网络与底层 API 接口介绍。",
    content: [
      "PrismaX serves as an abstraction firmware layer spanning cloud model instances and real machine controllers. By standardizing physical telemetry records, we resolve mechanical variability into predictable digital twins.",
      "The fast-track integration operates via standard URDF configurations combined with our localized client agent. Running the local server binary connects your machine joints directly.",
      "Commanding joint configurations conforms entirely to normalized radians across bipedal, quadrupedal, and industrial arm classifications, eliminating localized brand kinematic scaling issues.",
      "Our system works natively with low-latency UDP streams to keep bilateral telemetry syncing below 30 milliseconds under standard fiber connections."
    ],
    bengaliContent: [
      "প্রিজম্যাক্স মূলত ক্লাউড মডেল এবং রোবটের মূল হার্ডওয়্যার মাদারবোর্ডের মধ্যে সংযোগকারী সাব-লেয়ার হিসেবে কাজ করে। জটিল নড়াচড়ার তথ্য বা টেলিমেট্রিকে সুনির্দিষ্ট ও প্রমিত করার মাধ্যমে আমরা প্রতিটি রোবটকে সহজে নিয়ন্ত্রণযোগ্য ডিজিটাল টুইনে রূপান্তর করি।",
      "আমাদের দেওয়া লোকাল ক্লায়েন্ট এজেন্ট সফটওয়্যারের সাথে স্ট্যান্ডার্ড URDF কনফিগারেশন যুক্ত করার মাধ্যমে খুব দ্রুত রোবট নেটওয়ার্কে সংস্থাপিত করা সম্ভব। সিস্টেম বাইনারি চালু করা মাত্রই জয়েন্টসমূহ একটি আইপি ঠিকানায় ব্রডকাস্ট শুরু করে।",
      "যেকোনো রোবটিক বাহু বা দ্বিপদী বা চতুষ্পদ রোবটের জন্য চালনা নির্দেশনাগুলো রেডিয়ান পরিমাপকে সাধারণীকরণ করে পাঠানো হয়, ফলে বিভিন্ন ব্যান্ডের রোবটের নিজস্ব কাইনেমেটিক জটিলতা পুরোপুরি দূরীভূত হয়।",
      "স্ট্যান্ডার্ড ফাইবার সংযোগের আওতায় টেলিঅপারেশনাল বিলম্ব ৩০ মিলিসেকেন্ডের নিচে রাখতে আমাদের সিস্টেম আদিম ইউডিপি (UDP) বাইনারি প্যাকেটের মাধ্যমে ডেটা সিঙ্ক সম্পন্ন করে থাকে।"
    ],
    hindiContent: [
      "PrismaX क्लाउड मॉडल इंस्टेंस और वास्तविक मशीन कंट्रोलर्स के बीच एक एब्स्ट्रैक्शन फ़र्मवेयर लेयर के रूप में कार्य करता है। भौतिक टेलीमेट्री रिकॉर्ड्स को मानकीकृत करके, हम यांत्रिक भिन्नता को पूर्वानुमेय डिजिटल ट्विन में हल करते हैं।",
      "फास्ट-ट्रैक इंटीग्रेशन हमारे स्थानीयकृत क्लाइंट एजेंट के साथ संयुक्त मानक URDF कॉन्फ़िगरेशन के माध्यम से संचालित होता है। स्थानीय सर्वर बाइनरी चलाने से आपकी मशीन के जोड़ सीधे जुड़ जाते हैं।",
      "संयुक्त कॉन्फ़िगरेशन को कमांड करना पूरी तरह से दो पैरों वाले, चार पैरों वाले और औद्योगिक आर्म वर्गीकरणों में सामान्यीकृत रेडियन के अनुरूप होता है, जिससे स्थानीयकृत ब्रांड किनेमैटिक स्केलिंग समस्याएं समाप्त हो जाती हैं।",
      "हमारा सिस्टम मानक फाइबर कनेक्शन के तहत द्विपक्षीय टेलीमेट्री सिंकिंग को 30 मिलीसेकंड से नीचे रखने के लिए कम-विलंबता UDP स्ट्रीम के साथ मूल रूप से काम करता है।"
    ],
    chineseContent: [
      "PrismaX 作为连接云端模型实例与实体机器人控制器的抽象固件中继层。通过对物理遥操作数据进行规范化，我们将实体机械的异构性封装为高可预测性的数字孪生生态。",
      "快速并网集成通过标准 URDF 刚度配置结合本地运行的轻量化客户端代理。启动本地中继二进制服务后，即可将机器人的各个旋转关节直接对接到网络中。",
      "关节级指令完全遵循标准双向姿态弧度，涵盖双足、四足及工业机械臂等多类设备，消除了异构设备由于品牌不同导致的关节解算及动力学缩放问题。",
      "我们的系统原生适配超低延迟的 UDP 数据包广播，在标准光纤网络环境下，保证双向关节角度及反馈时延低于 30 毫秒。"
    ],
    urduCategory: "تعارف",
    urduTitle: "PrismaX کا تعارف اور کوئیک اسٹارٹ",
    urduSummary: "PrismaX وکندریقرت فزیکل کنکشن نیٹ ورک اور API اینڈ پوائنٹس کا تعارف۔",
    urduContent: [
      "PrismaX کلاؤڈ ماڈل انسٹنس اور حقیقی مشین کنٹرولرز کے درمیان ایک ایبسٹریکشن فرم ویئر لیئر کے طور پر کام کرتا ہے۔ فزیکل ٹیلی میٹری ریکارڈز کو معیاری بنا کر، ہم مکینیکل تغیرات کو پڑھنے کے قابل ڈیجیٹل کلاؤنز میں حل کرتے ہیں۔",
      "تیز رفتار انٹیگریشن ہمارے لوکلائزڈ کلائنٹ ایجنٹ کے ساتھ مل کر سٹینڈرڈ URDF کنفیگریشنز کے ذریعے کام کرتی ہے۔ لوکل سرور بائنری چلانے سے آپ کی مشین کے جوڑ براہ راست منسلک ہو جاتے ہیں۔",
      "مشترکہ کنفیگریشنز کو کمانڈ کرنا مکمل طور پر بائی پیڈل، کواڈرو پیڈل، اور صنعتی آرم کیٹیگریز میں نامیاتی ریڈینس کے مطابق ہے، جو برانڈ کے کائینیمیٹک اسکیلنگ مسائل کو ختم کرتا ہے۔",
      "ہمارا سسٹم لو لیٹنسی UDP اسٹریمز کے ساتھ کام کرتا ہے تاکہ معیاری فائبر کنکشن کے تحت دو طرفہ ٹیلی میٹری کی مطابقت پذیری کو 30 ملی سیکنڈ سے کم رکھا جا سکے۔"
    ]
  },
  {
    slug: "teleop-protocol",
    category: "Protocols",
    vietnameseCategory: "Giao thức",
    vietnameseTitle: "Vận hành xúc giác và video dưới 50ms",
    vietnameseSummary: "Phân tích kỹ thuật cốt lõi của giao thức truyền dữ liệu trực tiếp song phương được tối ưu hóa cho điều khiển từ xa và thu thập hành động.",
    vietnameseContent: [
      "Để cho phép con người can thiệp an toàn không có độ trễ, PrismaX phân chia các gói tin đo lường thành các trạng thái cốt lõi hoạt động và các vùng cảm giác ngoại vi. Các góc cấu trúc cốt lõi được ưu tiên trước trên các luồng lập lịch thời gian thực.",
      "Các luồng truyền video sử dụng định dạng WebRTC được tối ưu hóa tích hợp các lớp phủ tọa độ không gian thô. Điều này ánh xạ trực tiếp tọa độ haptic lên các pixel camera để người vận hành có nhận thức xúc giác trong các không gian làm việc chật hẹp.",
      "Nếu độ trễ tăng đột biến vượt quá 120 mili giây, vòng lặp điều khiển cục bộ sẽ kích hoạt tính năng giảm tốc an toàn tự động, ổn định giới hạn mô-men xoắn của robot ngay lập tức cho đến khi kết nối được thiết lập lại.",
      "Lớp bảo vệ này đảm bảo rằng hoạt động từ xa của con người không gây ra rủi ro hư hỏng cấu trúc cho phần cứng, ngay cả khi thực hiện các thao tác công nghiệp có độ chính xác cao."
    ],
    bengaliCategory: "প্রোটোকল সমূহ",
    hindiCategory: "प्रोटोकॉल",
    chineseCategory: "网络通信协议",
    title: "Sub-50ms Haptic & Video Teleoperations",
    bengaliTitle: "৫০মি.সে-এর নিচের হ্যাপটিক ও ভিডিও টেলিঅপারেশন",
    hindiTitle: "50ms से कम हैप्टिक और वीडियो टेलीऑपरेशन",
    chineseTitle: "低于 50ms 的高频力反馈与双向视频遥操作协议",
    summary: "Technical breakdown of our bilateral live stream protocol optimized for remote control and action collection.",
    bengaliSummary: "দূরবর্তী রোবট নিয়ন্ত্রণ ও প্রশিক্ষণের জন্য বিশেষভাবে তৈরি দ্বিপাক্ষিক প্রোটোকলের কারিগরি বিবরণ।",
    hindiSummary: "दूरस्थ नियंत्रण और गतिविधि संग्रह के लिए अनुकूलित हमारे द्विवेक लाइव स्ट्रीम प्रोटोकॉल का तकनीकी विवरण।",
    chineseSummary: "专为远程高精细劳动操控与运动数据集收集而优化的双向串流网络传输协议技术拆解。",
    content: [
      "To enable zero-lag safe human intervention, PrismaX segments telemetry packets into active core-states and peripheral sensory fields. Core structural angles are prioritized first on real-time scheduler threads.",
      "Video streams utilize optimized WebRTC formats with raw spatial coordinate overlays. This maps haptic coordinates directly on camera pixels so operators have tactile awareness in tight workspaces.",
      "Should the latency spike beyond 120 milliseconds, the local control loop triggers automated safe deceleration, stabilizing robot torque limits instantly until connectivity re-establishes.",
      "This safety layer ensures that remote human operation poses no risk of structural damage to hardware, even during high-precision industrial manipulations."
    ],
    bengaliContent: [
      "কম্পিউটার এবং ফিজিক্যাল অবজেক্টের মধ্যে শূন্য-বিলম্বের সুরক্ষিত সংযোগ নিশ্চিত করতে প্রিজম্যাক্স মূল কাজের ডেটা প্যাকেজকে মূল নিয়ন্ত্রণ অ্যাকশন এবং পারিপার্শ্বিক সেন্সর ডেটায় ভাগ করে নেয়। জয়েন্ট কোণের তথ্যগুলো রিয়েল-тайম থ্রেডে সর্বাধিক প্রাধান্য পায়।",
      "আমরা সমন্বিত কোঅর্ডينات সহ অপ্টিমাইজড ওয়েবআরটিসি (WebRTC) প্রোটোকল ব্যবহার করি। এটি ক্যামেরার পিক্সেলের ওপর স্পর্শ সংবেদনশীল ডেটা ম্যাপ করে দেয় যাতে চরম আঁটসাঁট জায়গায় অপারেটর হ্যাপটিক অনুভূতি পান।",
      "যদি কোনো কারণে সংযোগের বিলম্ব ১২০ মিলিসেকেন্ড অতিক্রম করে, তবে সিস্টেম স্বয়ংক্রিয়ভাবে একটি প্রতিরোধমূলক ব্রেক ট্রিগার করে এবং নেটওয়ার্ক ঠিক না হওয়া পর্যন্ত টর্ক এবং গতিকে সুস্থিত রাখে।",
      "এই নিরাপত্তা স্তরটি নিশ্চিত করে যে দূরবর্তী অপারেটরের কোনো ভুল বা আকস্মিক নেটওয়ার্ক স্পাইকের দরুন দামি ল্যাব হার্ডওয়্যারের কোনো গাঠনিক ক্ষতিসাধন হবে না।"
    ],
    hindiContent: [
      "शून्य-विलंब सुरक्षित मानव हस्तक्षेप को सक्षम करने के लिए, PrismaX टेलीमेट्री पैकेट्स को सक्रिय कोर-स्टेट्स और परिधीय संवेदी फ़ील्ड्स में विभाजित करता है। कोर संरचनात्मक कोणों को वास्तविक समय के शेड्यूलर थ्रेड्स पर सबसे पहले प्राथमिकता दी जाती है।",
      "वीडियो स्ट्रीम कच्चे स्थानिक समन्वय ओवर开 के साथ अनुकूलित WebRTC प्रारूपों का उपयोग करते हैं। यह गहन हैप्टिक निर्देशांक को सीधे कैमरा पिक्सल पर मैप करता है ताकि ऑपरेटरों को तंग कार्यक्षेत्रों में स्पर्श संबंधी जागरूकता मिले।",
      "यदि विलंबता 120 मिलीसेकंड से अधिक हो जाती है, तो स्थानीय नियंत्रण लूप स्वचालित सुरक्षित मंदी को ट्रिगर करता है, जिससे कनेक्टिविटी फिर से स्थापित होने तक रोबोट टार्क सीमाएं तुरंत स्थिर हो जाती हैं।",
      "यह सुरक्षा परत यह सुनिश्चित करती है कि दूरस्थ मानव संचालन से हार्डवेयर को संरचनात्मक क्षति का कोई जोखिम न हो, यहाँ तक कि उच्च-परिशुद्धता औद्योगिक हेरफेर के दौरान भी।"
    ],
    chineseContent: [
      "为了实现零延迟、安全的远程操控与人工干预，PrismaX 将物理遥操作数据报文划分为核心控制状态帧和高频环境感知层。核心关节角度信息会被分配到高优先级实时调度线程中。",
      "视频流传输采用经过定制优化的 WebRTC 协议，并将末端坐标的裸空间位置数据进行可视化图层叠加。这样能将精确的触觉感知坐标直接映射到相机图层上，让远控机司即使在极狭窄的工作腔里也能获得立体双向的实时操控手感。",
      "当检测到双向延迟超过 120 毫秒时，设备的受控端会自主触发柔性阻尼安全减速模式，锁定电机的当前安全扭矩，确保机器人结构不受损伤，直到网络连接恢复正常。",
      "该软硬件缓冲保全机制消除了由网络波动引起机械失控碰撞和损坏的风险，即便是面对工业级高负荷力度抓握操控也能确保结构稳固。"
    ],
    urduCategory: "پروٹوکولز",
    urduTitle: "50ms سے کم ہَیپٹک اور ویڈیو ٹیلی آپریشنز",
    urduSummary: "ریموٹ کنٹرول اور ایکشن اکٹھا کرنے کے لیے موزوں ہمارے دو طرفہ لائیو اسٹریم پروٹوکول کا تکنیکی بریک ڈاؤن۔",
    urduContent: [
      "بغیر کسی تاخیر کے محفوظ انسانی مداخلت کو ممکن بنانے کے لیے، PrismaX ٹیلی میٹری پیکٹس کو فعال کور اسٹیٹس اور پیریفرل سنسری فیلڈز میں تقسیم کرتا ہے۔ کور سٹرکچرل اینگلز کو ریئل ٹائم شیڈولر تھریڈز پر سب سے پہلے ترجیح دی جاتی ہے۔",
      "ایپلی کیشنز را اِسپیشل کوآرڈینیٹ اوورلیز کے ساتھ بہترین WebRTC فارمیٹس کا استعمال کرتے ہیں۔ یہ ہَیپٹک کوآرڈینیٹس کو براہ راست کیمرے کے پکسلز پر میپ کرتا ہے تاکہ آپریٹرز کو محدود جگہوں میں لمسی آگاہی مل سکے۔",
      "اگر تاخیر 120 ملی سیکنڈ سے بڑھ جائے تو لوکل کنٹرول لوپ خود کار طریقے سے محفوظ رفتار میں کمی کو متحرک کرتا ہے، جس سے کنیکٹیویٹی دوبارہ قائم ہونے تک روبوٹ ٹارک کی حدود فوری طور پر مستحکم ہو جاتی ہیں۔",
      "یہ حفاظتی لیئر اس بات کو یقینی بناتی ہے کہ دور دراز سے انسانی آپریشن ہارڈ ویئر کو ساختی نقصان پہنچانے کا کوئی خطرہ پیدا نہ کرے، حتیٰ کہ انتہائی درست صنعتی کاموں کے دوران بھی۔"
    ]
  },
  {
    slug: "physical-ai-integration",
    category: "AI Integration",
    vietnameseCategory: "Tích hợp AI",
    vietnameseTitle: "Kết nối các Mô hình Hành động Lớn (LAM)",
    vietnameseSummary: "Cách định tuyến trực tiếp dữ liệu quỹ đạo chuyển động được mã hóa thành thẻ tới các tầng mô hình transformer nền tảng để cho phép lập luận không gian.",
    vietnameseContent: [
      "Mỗi quỹ đạo chuyển động được thực hiện trong quá trình con người vận hành từ xa đều được mã hóa thành các vectơ không gian - hành động. Chúng đại diện cho vận tốc vị trí tuyệt đối kết hợp với các khung cảnh ngữ cảnh từ mảng camera cục bộ.",
      "Các mã hóa này được truyền trực tiếp vào các vòng lặp học tập transformer liên tục. Các mô hình máy phân tích các thử nghiệm vật lý và nâng cao xác suất thành công trong không gian của chúng một cách tự trị qua hàng ngàn kỷ nguyên huấn luyện trên đám mây.",
      "Các nhà phát triển có thể truy vấn điểm số tự tin của mô hình hiện tại đối với các không gian làm việc đang hoạt động thông qua điểm cuối API `/v1/spatial/reason` thống nhất, nhận về thời gian điều chỉnh mô-men xoắn động cơ mục tiêu theo thời gian thực.",
      "Quá trình này hoàn thành vòng lặp huấn luyện máy vật lý một cách hiệu quả, tiến triển từ mô phỏng minh họa của con người đến khả năng vận hành tự trị mượt mà."
    ],
    bengaliCategory: "এআই ইন্টিগ্রেশন",
    hindiCategory: "এআই একীকরণ",
    chineseCategory: "具身智能集成",
    title: "Connecting Large Action Models (LAM)",
    bengaliTitle: "লার্জ অ্যাকশন মডেল (LAM) সংযুক্তিকরণ",
    hindiTitle: "लार्ज एक्शन मॉडल (LAM) को जोड़ना",
    chineseTitle: "在轨大动作模型 (LAM) 底层适配与闭环训练",
    summary: "How to route tokenized trajectory data directly to foundational transformer layers to enable spatial reasoning.",
    bengaliSummary: "স্থানিক যৌক্তিকতা ও স্বয়ংক্রিয় কাজের ক্ষমতা অর্জনে টোকেনাইজড গতিবিধির ডেটা সরাসরি ফাউন্ডেশন ট্রান্সফরমার মডেলে যুক্ত করার নিয়ম।",
    hindiSummary: "स्थानिक तर्क को सक्षम करने के लिए टोकनयुक्त प्रक्षेपवक्र डेटा को सीधे मूलभूत ट्रांसफार्मर परतों तक कैसे रूट करें।",
    chineseSummary: "如何将高频量化后的动作轨迹流直通基础 Transformer 动作网络层，以实现鲁棒的物理空间运动规划与自监督推理。",
    content: [
      "Every trajectory executed during human teleoperation is tokenized into spatial-action vectors. These represent absolute position velocities combined with context frames from local camera arrays.",
      "These tokens feed directly into continuous transformer learning loops. Machine models digest physical trials and improve their spatial success probability distributions autonomously over thousands of cloud epochs.",
      "Developers can query current model confidence scores over active workspaces via the unified `/v1/spatial/reason` API end-point, receiving target motor torque adjustments in real-time.",
      "This process effectively closes the loop on physical machine training, progressing from human demonstration to autonomous operational fluidity."
    ],
    bengaliContent: [
      "মানুষ দ্বারা পরিচালিত প্রতি সেকেন্ডের সূক্ষ্ম সঞ্চালনগুলোকে আমরা স্থানিক ম্যাপে স্পেশিয়াল-অ্যাকশন ভেক্টরে টোকেনাইজ করি। এগুলো রোবটের জয়েন্টের ঘূর্ণন গতি ব্যাখ্যা করে যা বাহ্যিক ক্যামেরা ছবির সাথে যুক্ত থাকে।",
      "এই গতিবিধি সম্পর্কিত ভেক্টর টোকেনগুলো সরাসরি স্বয়ংক্রিয় এআই লার্নিং লুপে ইনপুট দেওয়া হয়। ট্রান্সফরমার মডেলগুলো ক্রমাগত কোটি কোটি ট্রেনিং ট্রায়াল থেকে ত্রিমাত্রিক জগতের সাকসেস রেশিও বা সফলতার গাণিতিক হায়ারার্কি নির্ধারণ করে।",
      "ডেভেলপাররা সহজেই `/v1/spatial/reason` এপিআই অ্যান্ডপয়েন্ট ব্যবহারের মাধ্যমে যেকোনো সময় মডেলের সিদ্ধান্ত সূচক বা কনফিডেন্স স্কোর কল করতে পারেন, যা থেকে মোটর টর্কের চমৎকার রিয়েল-тайম এডজাস্টমেন্ট পাওয়া যায়।",
      "এই প্রক্রিয়াটি বাস্তব জগতের রোবট প্রশিক্ষণের চূড়ান্ত সমাধান দেয় যা মানুষের প্রাথমিক দেখানোর মধ্য দিয়ে শুরু হয়ে স্বয়ংক্রিয় কাজের দক্ষতায় শেষ হয়।"
    ],
    hindiContent: [
      "मानव टेलीऑपरेशन के दौरान निष्पादित प्रत्येक प्रक्षेपवक्र को स्थानिक-कार्रवाई वैक्टर में टोकन किया जाता है। ये स्थानीय कैमरा सरणियों से संदर्भ फ़्रेम के साथ संयुक्त पूर्ण स्थिति वेग का प्रतिनिधित्व करते हैं।",
      "ये टोकन सीधे निरंतर ट्रांसफार्मर सीखने के लूप में फ़ीड करते हैं। मशीन मॉडल भौतिक परीक्षणों को पचाते हैं और हजारों क्लाउड युगों में स्वायत्त रूप से अपने स्थानिक सफलता संभाव्यता वितरण में सुधार करते हैं।",
      "डेवलपर्स एकीकृत `/v1/spatial/reason` API एंड-पॉइंट के माध्यम से सक्रिय वर्कस्पेस पर वर्तमान मॉडल के विश्वास स्कोर क्वेरी कर सकते हैं, वास्तविक समय में लक्षित मोटर टार्क समायोजन प्राप्त कर सकते हैं।",
      "यह प्रक्रिया मानव प्रदर्शन से स्वायत्त परिचालन तरलता की ओर बढ़ते हुए, भौतिक मशीन प्रशिक्षण पर लूप को प्रभावी ढंग से बंद कर देती है।"
    ],
    chineseContent: [
      "在人工协助或遥操作演练期间，机器人每次动作所执行的连续轨迹都会被编码并转译成物理运动动作比特流（Action Token）。这些动作向量会与多路摄像头在轨记录的视觉像素和阻尼拉力传感器自动帧对齐。",
      "这些高维 Token 会直接送入边缘侧与云端联合建立的核心 Transformer 自持续反向传播对齐管道。动作大脑网络实时消化物理劳动试错，无需额外人工标注，实现空间路径规划的最优拟合。",
      "设备持有主和研发工程师能通过规范的 `/v1/spatial/reason` 物理推理 API 端点实时查询神经网络对当前作业的决策自信度并实时调整在轨算力配给。",
      "该流水线彻底实现了现场设备数据采集、热训练演进及就地执行扭矩闭环，代表着物理设备向高级通用自适应能力的终极演进，让机器人步向真正的拟合流动。"
    ],
    urduCategory: "اے آئی انٹیگریشن",
    urduTitle: "بڑے ایکشن ماڈلز (LAM) کو جوڑنا",
    urduSummary: "خلائی استدلال کے قابل بنانے کے لیے ٹوکن شدہ رفتار ڈیٹا کو براہ راست فاؤنڈیشنل ٹرانسفارمر لیئرز تک کیسے روٹ کریں۔",
    urduContent: [
      "انسانی ٹیلی آپریشن کے دوران انجام دی جانے والی ہر رفتار کو سپیشل ایکشن ویکٹرز میں ٹوکنائز کیا جاتا ہے۔ یہ لوکل کیمرہ اریوں کے سیاق و سباق کے فریموں کے ساتھ مل کر مطلق پوزیشن کی رفتار کی نمائندگی کرتے ہیں۔",
      "یہ ٹوکنز براہ راست مسلسل ٹرانسفارمر لرننگ لوپس میں داخل ہوتے ہیں۔ مشین ماڈلز جسمانی تجربات کو ہضم کرتے ہیں اور خودمختار طور پر اپنے خلائی کامیابی کے احتمالی تقسیم کو بہتر کرتے ہیں۔",
      "ڈویلپرز فعال ورک اسپیسز پر موجودہ ماڈل کے اعتماد کے اسکورز کو مربوط `/v1/spatial/reason` API اینڈ پوائنٹ کے ذریعے پہچان سکتے ہیں، اور حقیقی وقت میں ٹارگٹ ٹارک ایڈجسٹمنٹس حاصل کر سکتے ہیں۔",
      "یہ عمل انسانی مظاہرے سے خود مختار آپریشنل روانی کی طرف بڑھتے ہوئے، جسمانی مشین کی تربیت پر لوپ کو مؤثر طریقے سے بند کر دیتا ہے۔"
    ]
  }
];
