export type Language = 'en' | 'bn' | 'hi' | 'zh' | 'ur' | 'vi' | 'uk' | 'in';

export interface Translation {
  // Navigation & General
  navHome: string;
  navFleet: string;
  navSimulation: string;
  navDocs: string;
  navTelemetry: string;
  langName: string;
  byLine: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  btnLearnMore: string;
  btnExplore: string;
  btnOperate: string;
  
  // Topic Cards Group
  topicTitle: string;
  topicSubtitle: string;
  topics: {
    whatIsPrismax: { title: string; desc: string };
    physicalAI: { title: string; desc: string };
    teleoperation: { title: string; desc: string };
    dataLayer: { title: string; desc: string };
    intelligenceLayer: { title: string; desc: string };
    systemArchitecture: { title: string; desc: string };
  };

  // Fleet Section
  fleetTitle: string;
  fleetSubtitle: string;
  fleetDesc: string;
  taglineFleet: string;

  // Control Center Section
  ctrlTitle: string;
  ctrlSubtitle: string;
  ctrlStatus: string;
  ctrlAngleX: string;
  ctrlAngleY: string;
  ctrlGrip: string;
  ctrlLatency: string;
  ctrlSignal: string;
  ctrlBattery: string;
  ctrlConnect: string;
  ctrlDisconnect: string;
  ctrlActive: string;
  ctrlReserved: string;
  ctrlQueue: string;
  ctrlSimulateAction: string;

  // Community / Sponsor Section
  membershipTitle: string;
  membershipSubtitle: string;
  membershipBenefit1: string;
  membershipBenefit2: string;
  paymentMethod: string;
  paymentMethodDesc: string;
  membershipBtn: string;
  membershipSuccess: string;

  // Docs Section
  docsTitle: string;
  docsSubtitle: string;
  docsSearchPlaceholder: string;
  docsBack: string;

  // Added Missing Localized Elements
  teleopActiveTag: string;
  btnViewSpecs: string;
  btnLaunchCtrl: string;
  knowledgeHubTitle: string;
  readArticle: string;
  contentSoon: string;
  overview: string;
  coreSpecConcepts: string;
  visualExpl: string;
  relatedEcosystem: string;
  done: string;
  socialTitle: string;
  sweepingWorkspace: string;
  labControls: string;
  selectNode: string;
  queueInLine: string;
  enterNodeCode: string;
  enterNodeCodeDesc: string;
  validateNodeAccess: string;
  cooperativeSub: string;
  membershipNetwork: string;
  linkActivated: string;
  memberLabel: string;
  cooperativeLevel: string;
  totalInvestment: string;
  oneTimePayment: string;
  coreSubsystem: string;
  regionLanguage: string;
  scrollToTop: string;
  systemSpecs: string;
  readFramework: string;
}

export interface Robot {
  id: string;
  name: string;
  maker: string;
  tags: string[];
  description: string;
  type: string;
  bengaliDescription: string;
  bengaliTags: string[];
  hindiDescription: string;
  hindiTags: string[];
  chineseDescription: string;
  chineseTags: string[];
  urduDescription?: string;
  urduTags?: string[];
  vietnameseDescription?: string;
  vietnameseTags?: string[];
  ukrainianDescription?: string;
  ukrainianTags?: string[];
  indonesianDescription?: string;
  indonesianTags?: string[];
}

export interface RoboticArm {
  id: string;
  name: string;
  description: string;
  bengaliDescription: string;
  hindiDescription: string;
  chineseDescription: string;
  urduDescription?: string;
  vietnameseDescription?: string;
  ukrainianDescription?: string;
  indonesianDescription?: string;
  status: 'online' | 'active' | 'reserved';
  queueLength: number;
  bgHex: string;
  hasRibbon?: boolean;
}

export interface DocArticle {
  slug: string;
  category: string;
  bengaliCategory: string;
  hindiCategory: string;
  chineseCategory: string;
  urduCategory?: string;
  vietnameseCategory?: string;
  ukrainianCategory?: string;
  indonesianCategory?: string;
  title: string;
  bengaliTitle: string;
  hindiTitle: string;
  chineseTitle: string;
  urduTitle?: string;
  vietnameseTitle?: string;
  ukrainianTitle?: string;
  indonesianTitle?: string;
  summary: string;
  bengaliSummary: string;
  hindiSummary: string;
  chineseSummary: string;
  urduSummary?: string;
  vietnameseSummary?: string;
  ukrainianSummary?: string;
  indonesianSummary?: string;
  content: string[];
  bengaliContent: string[];
  hindiContent: string[];
  chineseContent: string[];
  urduContent?: string[];
  vietnameseContent?: string[];
  ukrainianContent?: string[];
  indonesianContent?: string[];
}
