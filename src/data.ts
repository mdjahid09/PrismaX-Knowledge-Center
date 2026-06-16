import { Translation, Robot, RoboticArm, DocArticle, Language } from './types';

export const translations: Record<Language, Translation> = {
  en: {
    navHome: "Home",
    navFleet: "Fleet",
    navSimulation: "Teleporting",
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
        desc: "Explore low-latency robot operation, remote control systems and human-in-the-loop intelligence."
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
    btnViewSpecs: "VIEW SPECIFICATIONS",
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
    navSimulation: "টেলিপোর্টিং",
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
        desc: "প্রিজম্যাক্স, এর মিশন, প্রযুক্তি এবং ফিজিক্যাল এআই-এর ভবিষ্যতে এর ভূমিকা সম্পর্কে জানুন।"
      },
      physicalAI: {
        title: "ফিজিক্যাল এআই",
        desc: "বুদ্ধিমত্তা কীভাবে সফ্টওয়্যারের বাইরে বাস্তব জগতের মেশিন এবং রোবোটিক্সে স্থানান্তরিত হয় তা বুঝুন।"
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
        desc: "মডেল, রিজনিং সিস্টেম এবং machine ইন্টেলিজেন্স কীভাবে ফিজিক্যাল এআই সিস্টেমকে চালিত করে তা আবিষ্কার করুন।"
      },
      systemArchitecture: {
        title: "সিস্টেম আর্কিটেкচার",
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
    ctrlReserved: "সংরक्षित",
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
    btnViewSpecs: "কারিগরি বিবরণী",
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
    selectNode: "হার্ডওয়্যার নোড নির্বাচন",
    queueInLine: "লাইনে আছে: {count}",
    enterNodeCode: "অ্যাক্সেস কোড দিন",
    enterNodeCodeDesc: "সরাসরি কন্ট্রোল রুমে প্রবেশ করতে এবং রোবোট লাইভ সংযোগ করতে সঠিক পিন ব্যবহার করুন।",
    validateNodeAccess: "সংযোগ কোড নিশ্চিত করুন",
    cooperativeSub: "কোঅপারেティブ সাবস্ক্রিপশন",
    membershipNetwork: "অ্যামপ্লিফায়ার মেম্বারশিপ নেটওয়ার্ক",
    linkActivated: "অ্যামপ্লিফায়ার লিংক সক্রিয় করা হয়েছে",
    memberLabel: "অ্যামপ্লিফায়ার মেম্বার",
    cooperativeLevel: "কোঅপারেটিভ লেভেল ১",
    totalInvestment: "মোট বিল",
    oneTimePayment: "এককালীন পরিশোধ",
    coreSubsystem: "মূল সাবসিস্টেম",
    regionLanguage: "অঞ্চল ও ভাষা",
    scrollToTop: "উপরে ফিরে যান",
    systemSpecs: "সিস্টেম স্পেসিফিকেশন",
    readFramework: "ফ্রেমওয়ার্ক পড়ুন"
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
    bengaliTags: ["বিজ্ঞাপন", "ট্যুর গাইড", "কনফারেন্স"]
  },
  {
    id: "walker",
    name: "Ubtech Walker",
    maker: "UBTECH Systems",
    tags: ["Foodservice", "Light Warehousing", "Tour Guide", "Advertising", "Locomotion Research"],
    type: "Full-Sized Humanoid",
    description: "A full-scale service humanoid integrated with tactile payload handling, stable uneven locomotion, and intelligent autonomous navigation.",
    bengaliDescription: "ভঙ্গুর বা অসম স্থানে সুস্থিত চলাচলে সক্ষম পূর্ণ-আকারের পেশাদার সার্ভিস রোবট, যা স্পর্শকাতর মালামাল পরিবহন ও স্বায়ত্তশাসित নেভিগেশনের জন্য উপযুক্ত।",
    bengaliTags: ["খাদ্য পরিবেশন", "হালকা গুদামজাতকরণ", "ভ্রমণ সহায়িকা", "বিজ্ঞাপন", "চলাচল গবেষণা"]
  },
  {
    id: "reachy2",
    name: "Pollen Robotics Reachy 2",
    maker: "Pollen Robotics",
    tags: ["Manipulation Research", "Light Manual Tasks"],
    type: "Bi-Manual Mobile Upper-Body",
    description: "State-of-the-art dual-arm platform fitted with high-fidelity camera feeds, ideal for learning-from-demonstration and high-detail assembly work.",
    bengaliDescription: "উચ્চ-নির্ভুল ক্যামেরা ফিড সমৃদ্ধ দুটি হাত সংবলিত বিশেষ প্ল্যাটফর্ম, যা হাতে কলমে প্রদর্শন-প্রশিক্ষণ ও খুব সূক্ষ্ম সংযোজনমূলক কাজের জন্য চরম উপযোগী।",
    bengaliTags: ["অপারেশনাল গবেষণা", "হালকা ম্যানুয়াল কাজ"]
  },
  {
    id: "alex",
    name: "Boardwalk Robotics Alex",
    maker: "Boardwalk Robotics",
    tags: ["Manipulation Research", "Maintenance", "Manufacturing"],
    type: "Torso-Mounted Industrial Humanoid",
    description: "Industrial strength upper torso humanoid with high peak torque actuators, engineered to perform complex, rugged force-sensitive operations.",
    bengaliDescription: "উচ্চ টর্ক সম্পন্ন ভারী শিল্প গ্রেডের আংশিক হিউম্যানয়েড রোবট, যা কঠোর ও জটিল বল-সংবেদনশীল কারখানার কাজ পরিচালনার জন্য বিশেষভাবে নকশাকৃত।",
    bengaliTags: ["ম্যানিপুলেশন গবেষণা", "রক্ষণাবেক্ষণ", "উত্পাদন"]
  },
  {
    id: "mirokai",
    name: "Enchanted Tools Mirokai",
    maker: "Enchanted Tools",
    tags: ["Companionship", "Conferences", "Hospitality"],
    type: "Sphere-Based Mobile Humanoid",
    description: "Stylized, exceptionally expressive companion robot with highly innovative rolling sphere balance kinematics, designed for frictionless clinical or corporate assistance.",
    bengaliDescription: "অত্যন্ত অভিব্যক্তিময় এবং অনন্য রোলিং স্ফিয়ার (গোলকাকার চাকা) ব্যালেন্সের চটপটে রোবট, যা চিকিৎসালয় বা কর্পোরেট সহায়তার জন্য নির্বিঘ্ন সেবা দেয়।",
    bengaliTags: ["সাহচর্য", "কনফারেন্স", "আতিথেয়তা"]
  },
  {
    id: "go2w",
    name: "Unitree Go2-W",
    maker: "Unitree Robotics",
    tags: ["Locomotion Research", "Advertising", "Inspection"],
    type: "Quadruped-Wheeled Robot",
    description: "All-terrain hybrid wheeled-legged robotic canine fitted with 3D LiDAR mapping, showcasing superb resilience across high slopes and rough industrial corridors.",
    bengaliDescription: "চাকা সমৃদ্ধ চতুষ্পদ হাইব্রিড ডগ রোবট যা ত্রিমাত্রিক লিডার ম্যাপিং সংবলিত। এটি কারখানার অসমান বা ঢালু করিডোরে দারুণ সক্ষমতার পরিচয় দেয়।",
    bengaliTags: ["চলাচল গবেষণা", "বিজ্ঞাপন", "পরিদর্শন"]
  }
];

export const roboticArms: RoboticArm[] = [
  {
    id: "arm_black",
    name: "Training Arm Black",
    description: "Join the queue to practice your skills. Open to Amplifiers and Innovators.",
    bengaliDescription: "আপনার দক্ষতা অনুশীলন করতে সারিবদ্ধ দলে যোগ দিন। এমপ্লিফায়ার এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    status: "online",
    queueLength: 4,
    bgHex: "#18181A"
  },
  {
    id: "arm_gold",
    name: "Training Arm Gold",
    description: "Join the queue to practice your skills. Open to Amplifiers and Innovators.",
    bengaliDescription: "আপনার দক্ষতা অনুশীলন করতে সারিবদ্ধ দলে যোগ দিন। এমপ্লিফায়ার এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    status: "active",
    queueLength: 0,
    bgHex: "#DFD8D0"
  },
  {
    id: "arm_arena",
    name: "Arena Arm",
    description: "Designed for high-volume sessions. Open to first-time users and Innovators.",
    bengaliDescription: "উচ্চ-মাত্রার সেশনের জন্য ডিজাইন করা হয়েছে। প্রথমবার ব্যবহারকারী এবং ইনোভেটরদের জন্য উন্মুক্ত।",
    status: "online",
    queueLength: 12,
    bgHex: "#5E564D"
  },
  {
    id: "arm_private",
    name: "Private Arm",
    description: "Reserved for VIPs, partners, and special activations. Access requires a code and may vary by event.",
    bengaliDescription: "ভিআইপি, অংশীদার এবং বিশেষ অ্যাক্টিভেশনের জন্য সংরক্ষিত। অ্যাক্সেসের জন্য কোড প্রয়োজন এবং অনুষ্ঠানভেদে পরিবর্তিত হতে পারে।",
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
    bengaliCategory: "উপক্রমণিকা",
    title: "PrismaX Overview & Quick Start",
    bengaliTitle: "প্রিজম্যাক্স ওভারভিউ ও দ্রুত শুরু",
    summary: "An introduction to the PrismaX decentralized physical connection network and API endpoints.",
    bengaliSummary: "প্রিজম্যাক্স বিকেন্দ্রীভূত ফিজিক্যাল কানেকশন নেটওয়ার্ক ও এপিআই এর সাথে প্রথম পরিচিতি।",
    content: [
      "PrismaX serves as an abstraction firmware layer spanning cloud model instances and real machine controllers. By standardizing physical telemetry records, we resolve mechanical variability into predictable digital twins.",
      "The fast-track integration operates via standard URDF configurations combined with our localized client agent. Running the local server binary connects your machine joints directly.",
      "Commanding joint configurations conforms entirely to normalized radians across bipedal, quadrupedal, and industrial arm classifications, eliminating localized brand kinematic scaling issues.",
      "Our system works natively with low-latency UDP streams to keep bilateral telemetry syncing below 30 milliseconds under standard fiber connections."
    ],
    bengaliContent: [
      "প্রিজম্যাক্স মূলত ক্লাউড মডেল এবং রোবটের মূল হার্ডওয়্যার মাদারবোর্ডের মধ্যে সংযোগকারী সাব-লেয়ার হিসেবে কাজ করে। জটিল নড়াচড়ার তথ্য বা টেলিমেট্রিকে সুনির্দিষ্ট ও প্রমিত করার মাধ্যমে আমরা প্রতিটি রোবটকে সহজে নিয়ন্ত্রণযোগ্য ডিজিটাল টুইনে রূপান্তর করি।",
      "আমাদের দেওয়া লোকাল ক্লায়েন্ট এজেন্ট সফটওয়্যারের সাথে স্ট্যান্ডার্ড URDF কনফিগারেশন যুক্ত করার মাধ্যমে খুব দ্রুত রোবট নেটওয়ার্কে সংস্থাপিত করা সম্ভব। সিস্টেম বাইনারি চালু করা মাত্রই জয়েন্টসমূহ একটি আইপি ঠিকানায় ব্রডকাস্ট শুরু করে।",
      "যেকোনো রোবটিক বাহু বা দ্বিপদী বা চতুষ্পদ রোবটের জন্য চালনা নির্দেশনাগুলো রেডিয়ান পরিমাপকে সাধারণীকরণ করে পাঠানো হয়, ফলে বিভিন্ন ব্যান্ডের রোবটের নিজস্ব কাইনেমেটিক জটিলতা পুরোপুরি দূরীभूत হয়।",
      "স্ট্যান্ডার্ড ফাইবার সংযোগের আওতায় টেলিঅপারেশনাল বিলম্ব ৩০ মিলিসেকেন্ডের নিচে রাখতে আমাদের সিস্টেম আদিম ইউডিপি (UDP) বাইনারি প্যাকেটের মাধ্যমে ডেটা সিঙ্ক সম্পন্ন করে থাকে।"
    ]
  },
  {
    slug: "teleop-protocol",
    category: "Protocols",
    bengaliCategory: "প্রোটোকল সমূহ",
    title: "Sub-50ms Haptic & Video Teleoperations",
    bengaliTitle: "৫০ми.се-এর নিচের হ্যাপটিক ও ভিডিও টেলিঅপারেশন",
    summary: "Technical breakdown of our bilateral live stream protocol optimized for remote control and action collection.",
    bengaliSummary: "দূরবর্তী রোবট নিয়ন্ত্রণ ও প্রশিক্ষণের জন্য বিশেষভাবে তৈরি দ্বিপাক্ষিক প্রোটোকলের কারಿಗরি বিবরণ।",
    content: [
      "To enable zero-lag safe human intervention, PrismaX segments telemetry packets into active core-states and peripheral sensory fields. Core structural angles are prioritized first on real-time scheduler threads.",
      "Video streams utilize optimized WebRTC formats with raw spatial coordinate overlays. This maps deep haptic coordinates directly on camera pixels so operators have tactile awareness in tight workspaces.",
      "Should the latency spike beyond 120 milliseconds, the local control loop triggers automated safe deceleration, stabilizing robot torque limits instantly until connectivity re-establishes.",
      "This safety layer ensures that remote human operation poses no risk of structural damage to hardware, even during high-precision industrial manipulations."
    ],
    bengaliContent: [
      "কম্পিউটার এবং ফিজিক্যাল অবজেক্টের মধ্যে শূন্য-বিলম্বের সুরক্ষিত সংযোগ নিশ্চিত করতে প্রিজম্যাক্স মূল কাজের ডেটা প্যাকেজকে মূল নিয়ন্ত্রণ অ্যাকশন এবং পারিপার্শ্বিক সেন্সর ডেটায় ভাগ করে নেয়। জয়েন্ট কোণের তথ্যগুলো রিয়েল-тайм থ্রেডে সর্বাধিক প্রাধান্য পায়।",
      "আমরা সমন্বित কোঅর্ডينات সহ অপ্টিমাইজড ওয়েবআরটিসি (WebRTC) প্রোটোকল ব্যবহার করি। এটি ক্যামেরার পিক্সেলের ওপর স্পর্শ সংবেদনশীল ডেটা ম্যাপ করে দেয় যাতে চরম আঁটসাঁট জায়গায় অপারেটর হ্যাপটিক অনুভূতি পান।",
      "যদি কোনো কারণে সংযোগের বিলম্ব ১২০ মিলিসেকেন্ড অতিক্রম করে, তবে সিস্টেম স্বয়ংক্রিয়ভাবে একটি প্রতিরোধমূলক ব্রেক ট্রিগার করে এবং নেটওয়ার্ক ঠিক না হওয়া পর্যন্ত টর্ক এবং গতিকে সুস্থিত রাখে।",
      "এই নিরাপত্তা স্তরটি নিশ্চিত করে যে দূরবর্তী অপারেটরের কোনো ভুল বা আকস্মিক নেটওয়ার্ক স্পाइকের দরুন দামি ল্যাব হার্ডওয়্যারের কোনো গাঠনিক ক্ষতিসাধন হবে না।"
    ]
  },
  {
    slug: "physical-ai-integration",
    category: "AI Integration",
    bengaliCategory: "এআই ইন্টিগ্রেশন",
    title: "Connecting Large Action Models (LAM)",
    bengaliTitle: "লার্জ অ্যাকশন মডেল (LAM) সংযুক্তিকরণ",
    summary: "How to route tokenized trajectory data directly to foundational transformer layers to enable spatial reasoning.",
    bengaliSummary: "স্থানিক যৌক্তিকতা ও স্বয়ংক্রিয় কাজের ক্ষমতা অর্জনে টোকেনাইজড গতিবিধির ডেটা সরাসরি ফাউন্ডেশন ট্রান্সফরমার মডেলে যুক্ত করার নিয়ম।",
    content: [
      "Every trajectory executed during human teleoperation is tokenized into spatial-action vectors. These represent absolute position velocities combined with context frames from local camera arrays.",
      "These tokens feed directly into continuous transformer learning loops. Machine models digest physical trials and improve their spatial success probability distributions autonomously over thousands of cloud epochs.",
      "Developers can query current model confidence scores over active workspaces via the unified `/v1/spatial/reason` API end-point, receiving target motor torque adjustments in real-time.",
      "This process effectively closes the loop on physical machine training, progressing from human demonstration to autonomous operational fluidity."
    ],
    bengaliContent: [
      "মানুষ দ্বারা পরিচালিত প্রতি সেকেন্ডের সূক্ষ্ম সঞ্চালনগুলোকে আমরা স্থানিক ম্যাপে স্পেশিয়াল-অ্যাকশন ভেক্টরে টোকেনাইজ করি। এগুলো রোবটের জয়েন্টের ঘূর্ণন গতি ব্যাখ্যা করে যা বাহ্যিক ক্যামেরা ছবির সাথে যুক্ত থাকে।",
      "এই গতিবিধি সম্পর্কিত ভেক্টর টোকেনগুলো সরাসরি স্বয়ংক্রিয় এআই লার্নিং লুপে ইনপুট দেওয়া হয়। ট্রান্সফরমার মডেলগুলো ক্রমাগত কোটি কোটি ট্রেনিং ট্রায়াল থেকে ত্রিমাত্রিক জগতের সাকсеস রেশিও বা সফলতার গাণিতিক হায়ারার্কি নির্ধারণ করে।",
      "ডেভেলপাররা সহজেই `/v1/spatial/reason` এপিআই অ্যান্ডপয়েন্ট ব্যবহারের মাধ্যমে যেকোনো সময় модельের সিদ্ধান্ত সূচক বা কনফিডেন্স স্কোর কল করতে পারেন, যা থেকে মোটর টর্কের চমৎকার রিয়েল-টাইম এডজাস্টমেন্ট পাওয়া যায়।",
      "এই প্রক্রিয়াটি বাস্তব জগতের রোবট প্রশিক্ষণের চূড়ান্ত সমাধান দেয় যা মানুষের প্রাথমিক দেখানোর মধ্য দিয়ে শুরু হয়ে স্বয়ংক্রিয় কাজের দক্ষতায় শেষ হয়।"
    ]
  }
];
