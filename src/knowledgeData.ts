import { 
  Sparkles, 
  BrainCircuit, 
  FastForward, 
  HardDrive, 
  Network, 
  Cpu, 
  TrendingUp, 
  LayoutGrid, 
  Users, 
  BarChart, 
  Target, 
  Eye, 
  Sliders, 
  Activity, 
  Compass, 
  ShieldCheck, 
  Coins, 
  Award, 
  Hammer, 
  Play, 
  Shuffle, 
  Code,
  Info
} from 'lucide-react';
import { Language } from './types';
import { hindiKnowledgeTranslations } from './hindiKnowledgeData';
import { chineseKnowledgeTranslations } from './chineseKnowledgeData';
import { urduKnowledgeTranslations } from './urduKnowledgeData';
import { vietnameseKnowledgeTranslations } from './vietnameseKnowledgeData';
import { ukrainianKnowledgeTranslations } from './ukrainianKnowledgeData';
import { indonesianKnowledgeTranslations } from './indonesianKnowledgeData';

export interface KeyConcept {
  heading: string;
  bengaliHeading: string;
  text: string;
  bengaliText: string;
}

export interface VisualBlock {
  desc: string;
  bengaliDesc: string;
  code: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  bengaliTitle: string;
  subtitle: string;
  bengaliSubtitle: string;
  badge: string;
  category: string;
  bengaliCategory: string;
  color: string;
  icon: any; // Lucide icon reference
  overview: string;
  bengaliOverview: string;
  mainExplanation: string;
  bengaliMainExplanation: string;
  keyConcepts: KeyConcept[];
  visualExplanation: VisualBlock;
  relatedTopicIds: string[];
  previousTopicId: string;
  nextTopicId: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "what-is-prismax",
    title: "What is PrismaX",
    bengaliTitle: "প্রিজম্যাক্স কি",
    subtitle: "PRISMAX_FOUNDATION_OVERVIEW",
    bengaliSubtitle: "প্রিজম্যাক্স_ফাউন্ডেশন_পরিচিতি",
    badge: "PROT_X01",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-blue-400",
    icon: Sparkles,
    overview: "PrismaX serves as a standardized decentralized service layer designed to bridge the abstraction gap between foundation AI models and real-world machine kinematics. By synthesizing physical sensory telemetry and control pipelines into unified spatial intelligence streams, we enable continuous learning loops and sub-50ms bilateral haptic feedback.",
    bengaliOverview: "প্রিজম্যাক্স হলো একটি প্রমিত বিকেন্দ্রীভূত সার্ভিস লেয়ার যা ফাউন্ডেশন এআই মডেল এবং বাস্তব বিশ্বের রোবট গতিবিধির মধ্যবর্তী ব্যবধান দূর করার জন্য ডিজাইন করা হয়েছে। সেন্সর টেলিমেট্রি এবং কন্ট্রোল পাইপলাইনকে একীভূত স্থানিক বুদ্ধিমত্তা স্ট্রিমে রূপান্তর করার মাধ্যমে আমরা অবিরাম লার্নিং লুপ এবং ৫০ মিলিসেকেন্ডের নিচের দ্বিপক্ষীয় হ্যাপটিক ফিডব্যাক নিশ্চিত করি।",
    mainExplanation: "PrismaX connects teleoperators, robot users, fleet owners, and robotics companies in an open, decentralized network. Rather than forcing each robotics company to build proprietary training pipelines, operators, and data pipelines individually, PrismaX standardizes telemetry recording and remote connectivity. This resolves mechanical hardware variability into predictable digital twins, and lowers the barrier to scale for bipedal humanoids and industrial manipulators alike.",
    bengaliMainExplanation: "প্রিজম্যাক্স বিশ্বজুড়ে থাকা অপারেটর, রোবট ব্যবহারকারী, বহরের মালিক এবং এআই কোম্পানিগুলোকে একটি সাধারণ বিকেন্দ্রীভূত নেটওয়ার্কে যুক্ত করে। প্রতিটি রোবোটিক্স কোম্পানিকে আলাদাভাবে ট্রেনিং সেশন ও ডাটা পঠন কাঠামো তৈরি করতে না দিয়ে প্রিজম্যাক্স সম্পূর্ণ পদ্ধতিটিকে প্রমিত করে তোলে। এটি হার্ডওয়্যারভিত্তিক জটিলতাগুলোকে সমাধানযোগ্য ডিজিটাল টুইনে পরিবর্তন করে এবং বড় আকারের ইন্ডাস্ট্রিয়াল বাহু বা দ্বিপদী রোবটের নিয়ন্ত্রণ সহজ করে।",
    keyConcepts: [
      {
        heading: "Unified Abstraction Layer",
        bengaliHeading: "একীভূত অ্যাবস্ট্রাকশন লেয়ার",
        text: "Standardizes diverse machine actuator limits, joint configurations, and torque structures into a single framework.",
        bengaliText: "বিভিন্ন মেশিনের অ্যাকুয়েটর সীমা, জয়েন্ট কনফিগারেশন এবং টর্ক স্ট্রাকচারকে একটি সাধারণ কাঠামোতে প্রমিত করে।"
      },
      {
        heading: "Open Coordination Layer",
        bengaliHeading: "উন্মুক্ত সমন্বয় স্তর",
        text: "Bridges three critical pillars: remote human operators, local fleet hardware hosts, and neural network data customers.",
        bengaliText: "মানুষ অপারেটর, স্থানীয় হার্ডওয়্যার হোস্ট এবং এআই ডাটা ক্রেতাদের মধ্যে সরাসরি সংযোগ রক্ষা করে।"
      },
      {
        heading: "Decentralized Value Capture",
        bengaliHeading: "বিকেন্দ্রীভূত মূল্য আবিষ্কার",
        text: "Enables distributed fleet owners to securely connect compute servers and physical robots to a global network without dilutive venture capital.",
        bengaliText: "বাইরের কোনো বড় ফান্ডের মুখাপেক্ষী না থেকে রোবটের মালিকদের সরাসরি নেটওয়ার্কে অবদান রেখে মুনাফা আহরণের সুযোগ দেয়।"
      }
    ],
    visualExplanation: {
      desc: "PrismaX translating target physical workspace coordinates directly into mechanical motor pulses via localized coordination.",
      bengaliDesc: "প্রিজম্যাক্স লোকাল অর্কেস্ট্রেটরের মাধ্যমে স্থানিক কাজের কোঅর্ডিনেট সংকেতকে সরাসরি মোটরের ঘূর্ণন পালসে রূপান্তর করে।",
      code: `[Human Operator] ➔ [Master Teleoperation Deck]
                               ↓
                       [UDP Low-Latency Tunnel]
                               ↓
                       [PrismaX Secure Node]
                               ↓
                       [Unified Spatial Map]
                               ↓
                       [Local Robot Actuators]`
    },
    relatedTopicIds: ["physical-ai", "teleoperation", "system-architecture"],
    previousTopicId: "codebook-quantization",
    nextTopicId: "physical-ai"
  },
  {
    id: "physical-ai",
    title: "Physical AI",
    bengaliTitle: "ফিজিক্যাল এআই",
    subtitle: "EMBODIED_INTELLIGENCE_MODEL",
    bengaliSubtitle: "এমবডিড_ইন্টেলিজেন্স_মডেল",
    badge: "MODEL_L1",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-emerald-400",
    icon: BrainCircuit,
    overview: "Physical AI brings machine reasoning out of digital chat frames and directly into concrete mechanical joints. By training models natively on multi-modal environmental sensory data, machines learn physical rules and spatial manipulation strategies to act autonomously in rough, unprogrammed workspaces.",
    bengaliOverview: "ফিজিক্যাল এআই হলো রোবোটিক অ্যাকুয়েটর এবং বাস্তব জ্যামিতিক যন্ত্রপাতির সাথে উচ্চ-স্তরের যৌক্তিক চিন্তাভাবনার একীকরণ। মাল্টি-মোডাল পরিবেশের ওপর সরাসরি মডেল প্রশিক্ষণের মাধ্যমে ফিজিক্যাল এআই রোবটকে সম্পূর্ণ নতুন এবং পূর্ব-পরিকল্পনাহীন কাজের পরিবেশে স্বয়ংক্রিয়ভাবে কাজ করতে সক্ষম তোলে।",
    mainExplanation: "While traditional LLMs master language and code, Physical AI must master mass, gravity, friction, and torque. These variables are highly complex and cannot be modeled efficiently in pure simulators without producing a 'sim-to-real gap'. Physical AI utilizes deep neural networks—specifically spatial transformers and Large Action Models (LAMs)—to ingest sensory inputs (visual camera feeds, force sensors, and depth clouds) and output continuous motor trajectory paths.",
    bengaliMainExplanation: "চিরাচরিত চ্যাট এআই ভাষা এবং কোডিং আয়ত্ত করলেও ফিজিক্যাল এআইকে ভর, মহাকর্ষ, ঘর্ষণ এবং টর্কের গাণিতিক হিসাব বুঝতে হয়। সিমুলেটরে কাজ করলেও বাস্তব জগতের সাথে একটি বড় অমিল থেকে যায় যাকে 'সিম-টু-রিয়েল গ্যাপ' বলা হয়। ফিজিক্যাল এআই মডেলগুলো উন্নত স্পেশিয়াল ট্রান্সফরমারের সাহায্যে পারিপার্শ্বিক সেন্সর ডেটা রিড করে মোটর ট্র্যাজেক্টরি সিকোয়েন্স তৈরি করে কাজ সম্পন্ন করে।",
    keyConcepts: [
      {
        heading: "Embodied Generalization",
        bengaliHeading: "এমবডিড জেনারেলাইজেশন",
        text: "Enables machines to successfully handle unexpected obstacles and varying object shapes without recoding.",
        bengaliText: "রোবটকে কোড পরিবর্তন ছাড়াই অপ্রত্যাশিত বাধা এবং নতুন আকারের জিনিস সুচারুভাবে পরিচালনা করতে দেয়।"
      },
      {
        heading: "Multimodal Feed Aggregation",
        bengaliHeading: "মাল্টি-মোডাল ফিড একীকরণ",
        text: "Synthesizes raw camera pixels, LiDAR point clouds, and force-feedback arrays into a single action policy.",
        bengaliText: "ক্যামেরার পিক্সেল, লিডার পয়েন্ট ক্লাউড এবং স্পর্শ হ্যাপটিক্সকে একটি সমন্বিত অ্যাকশন পলিসিতে রূপান্তর করে।"
      },
      {
        heading: "Continuous Co-training",
        bengaliHeading: "অবিরাম কো-ট্রেনিং লুপ",
        text: "Every human teleoperation session produces trajectory tokens that continuously improve the global transformer.",
        bengaliText: "মানুষ দ্বারা সম্পন্ন প্রতিটি কাজ থেকে ট্র্যাজেক্টরি টোকেন তৈরি হয় যা ক্রমাগত মূল ট্রান্সফরমার মডেল উন্নত করে।"
      }
    ],
    visualExplanation: {
      desc: "Evaluating localized workspace policies and planning trajectory adjustments dynamically based on live sensory inputs.",
      bengaliDesc: "সেন্সর ফিডের ওপর ভিত্তি করে ডাইনামিক কাজের পরিকল্পনা নির্ধারণ এবং রিয়েল-টাইমে মোটর শক্তি সমন্বয়।",
      code: `[Sensory Inputs] ➔ Vision Camera + Tactile Pressure Matrix
                            ↓
               [Embodied Policy Evaluator]
                            ↓
               [Large Action Model (LAM)]
                            ↓
             [Spatially Adjusted Motor Command]`
    },
    relatedTopicIds: ["data-layer", "intelligence-layer", "what-is-prismax"],
    previousTopicId: "what-is-prismax",
    nextTopicId: "teleoperation"
  },
  {
    id: "teleoperation",
    title: "Teleoperation",
    bengaliTitle: "টেলিঅপারেশন",
    subtitle: "BILATERAL_LATENCY_SCHEDULER :: UDP_TUNNEL",
    bengaliSubtitle: "দ্বিপাক্ষিক_বিলম্ব_শিডিউলার_ইউডিপি",
    badge: "UDP_LOW",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-amber-400",
    icon: FastForward,
    overview: "Teleoperation bridges the gap between human expertise and mechanical tasks. Through sub-50ms bilateral haptic connection pipelines, human operators can control active robots at any distance and feel active resistance and pressure. This enables safe force-sensitive manipulation while creating perfect training demonstrations for Physical AI.",
    bengaliOverview: "টেলিঅপারেশন মানুষের দক্ষতা এবং মেকানিক্যাল কাজের মধ্যকার দূরত্বের সেতুবন্ধন করে। ৫০ মিলি-সেকেন্ডের চেয়েও কম লেটেন্সির দ্বিপাক্ষিক নেটওয়ার্ক টানেলের মাধ্যমে অপারেটর দূর থেকেই রোবট পরিচালনা করতে পারেন এবং বস্তুর স্পর্শ ও চাপ অনুভব করতে পারেন। এর ফলে যেকোনো সূক্ষ্ম কাজ যেমন সেলাই বা যন্ত্র জোড়া দেওয়া নিরাপদ হয় এবং এআই এর জন্য দারুণ ডেমো তৈরি হয়।",
    mainExplanation: "The primary challenge of scaling teleoperated fleets revolves around management and remote latency. Heavy communication layers introduce fatal phase shifts, causing operator error or collision. PrismaX's custom-built, lightweight UDP tunnel bypasses typical overhead. By isolating core joint states from non-essential peripheral telemetry, it maintains real-time command tracks. Any connectivity delay instantly triggers decentralized protective decelerators to guard active hardware nodes.",
    bengaliMainExplanation: "টেলিঅপারেশনের প্রধানতম বাধা ছিল দীর্ঘ নেটওয়ার্ক সংযোগ বিলম্ব। অতিরিক্ত হেডার ডেটা কাইনেমেটিক কমান্ডে অযাচিত স্পাইক ও ভুল কাজ উস্কে দেয়। প্রিজম্যাক্সের কাস্টম হালকা ওজনের ইউডিপি টানেলিং আর্কিটেকচার এই জটিলতা দূর করে কাজের প্রধান কোণগুলোকে অগ্রাধিকার দিয়ে পাঠায়। রিমোট সংযোগে অসামঞ্জস্যতা দেখা দিলেই সিস্টেম স্বয়ংক্রিয়ভাবে একটি প্রতিরোধমূলক ব্রেক ট্রিগার করে এবং নেটওয়ার্ক ঠিক না হওয়া পর্যন্ত টর্ক এবং গতিকে সুস্থিত রাখে।",
    keyConcepts: [
      {
        heading: "Bilateral Haptic Synchronization",
        bengaliHeading: "দ্বিপাক্ষিক হ্যাপটিক হরমনি",
        text: "Instantly feeds motor joint states forward while sending physical contact pressure waves back to the operator.",
        bengaliText: "একদিকে রিয়েল-টাইমে মোটরের গতিবিধি নিয়ন্ত্রণ করে এবং অন্যদিকে রোবটের হাতের স্পর্শের অনুভূতি অপারেটরকে ফেরত পাঠায়।"
      },
      {
        heading: "Optimized Packet Compression",
        bengaliHeading: "চরম প্যাকেট কম্প্রেশন",
        text: "Minimizes telemetry byte sizes over UDP to bypass heavy fiber routing latency spikes under network limits.",
        bengaliText: "ইউডিপি সংযোগের ওপর নেটওয়ার্ক ট্র্যাফিক কমাতে টেলিমেট্রি প্যাকেটগুলোর সাইজ সংকুচিত করে বিলম্ব শূন্যের কোঠায় নামায়।"
      },
      {
        heading: "Deceleration Safeguards",
        bengaliHeading: "নিরাপত্তা প্রতিরোধ ব্যবস্থা",
        text: "Automatically applies corrective dampening buffers if network latency spikes beyond 120ms.",
        bengaliText: "নেটওয়ার্ক সংযোগে ১২০ মিলি-সেকেন্ডের বেশি বিলম্ব দেখা দিলে স্বয়ংক্রিয়ভাবে একটি নিরাপদ ব্রেক লাগিয়ে হার্ডওয়্যার সচল রাখে।"
      }
    ],
    visualExplanation: {
      desc: "Opening bilateral command sockets to stream tactile vectors from master gloves to remote slave actuators.",
      bengaliDesc: "মাস্টার গ্লাভস থেকে দূরবর্তী রোবটের হাতের অ্যাকুয়েটরে স্পর্শ ভেক্টর স্ট্রিম করার জন্য দ্বিপাক্ষিক কমান্ড সকেট চালু করা।",
      code: ` [Human Operator Glove]         [Remote Robot Hand]
         │                              ▲
         ▼ (Low-Latency Angle Stream)  │ (Real-Time Contact Force)
    [Bilateral UDP Tunnel] ➔ ➔ ➔ ➔ ➔ ➔ ➔┘`
    },
    relatedTopicIds: ["what-is-prismax", "data-layer", "system-architecture"],
    previousTopicId: "physical-ai",
    nextTopicId: "data-layer"
  },
  {
    id: "data-layer",
    title: "Data Layer",
    bengaliTitle: "ডেটা লেয়ার",
    subtitle: "HIGH_FREQUENCY_TELEMETRY_DATAFRAME",
    bengaliSubtitle: "উচ্চ_ফ্রিকোয়েন্সি_টেলিমেট্রি_ফ্রেম",
    badge: "TELEMETRY",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-rose-400",
    icon: HardDrive,
    overview: "The Data Layer serves as the foundational telemetry pipeline of PrismaX. It continuously frames, transforms, and serializes high-frequency joint states, motor torques, point clouds, and grip pressures into clean temporal action tokens. This structured format is perfectly ready for model consumption without any complex manual labeling.",
    bengaliOverview: "ডেটা লেয়ার হলো প্রিজম্যাক্স সিস্টেমের প্রধান মেরুদণ্ড ও উচ্চ-ফ্রিকোয়েন্সি সঞ্চালন মাধ্যম। এটি রোবটের জয়েন্টের ঘূর্ণন, মোটর টর্ক, পয়েন্ট ক্লাউড এবং স্পর্শের চাপকে ধাপে ধাপে পরিমার্জিত স্থানিক সময়-ভিত্তিক ভেক্টরে রূপান্তর করে। এই কাঠামোবদ্ধ ডেটা কোনো ম্যানুয়াল লেবেলিং ছাড়াই সরাসরি এআই মডেলের প্রশিক্ষণে ব্যবহৃত হওয়ার জন্য প্রস্তুত থাকে।",
    mainExplanation: "Physical interaction generates incredibly dense multi-modal streams. The PrismaX Data Layer processes these signals directly on edge devices to structure them into Action-Observation pairs. The observation matches what the robot perceives (cameras, depth, joint encoders) and the action matches the exact motor current changes executed. This converts expensive physical labor directly into scalable digital tokens ready for neural networks.",
    bengaliMainExplanation: "বাস্তব নড়াচড়া থেকে প্রচুর পরিমাণে ডেটা উৎপন্ন হয়। প্রিজম্যাক্স ডাটা লেয়ার এই ডেটা স্ট্রিমগুলোকে স্থানীয় এজ মেশিনে প্রসেস করে অ্যাকশন-অবজারভেশন পেয়ারে ভাগ করে নেয়। অবজারভেশন অংশে থাকে পারিপার্শ্বিক ছবি ও গভীরতার তথ্য এবং অ্যাকশন অংশে থাকে মোটরের ঘূর্ণন বলের পরিবর্তনের গতিপথ। ফলে রিমোট অপারেটরের কাজ সরাসরি এআই-প্রশিক্ষণ টোকেনে রূপান্তরিত হয়।",
    keyConcepts: [
      {
        heading: "Action-Observation Pairs",
        bengaliHeading: "অ্যাকশন-অবজারভেশন জোড়",
        text: "Binds target physical movements directly with raw visual camera pixels and haptic forces in time-series format.",
        bengaliText: "রোবটের গতিবিধি সংক্রান্ত নির্দেশাবলীকে সরাসরি ওই মুহূর্তের ক্যামেরা ছবি ও স্পর্শকাতর বলের সাথে রেকর্ড করে।"
      },
      {
        heading: "Hardware Normalization",
        bengaliHeading: "হার্ডওয়্যার নরমালাইজেশন",
        text: "Converts proprietary encoder ticks or motor angles into normalized radians and spatial speed vectors.",
        bengaliText: "যেকোনো রোবটের নিজস্ব বা জটিল মোটর কোণ পরিমাপকে প্রমিত রেডিয়ান এবং বিশ্বজনীন স্থানিক স্থানাঙ্কে রূপান্তর করে।"
      },
      {
        heading: "Lossless Compression",
        bengaliHeading: "নিখুঁত বা লসলেস ডেটা কম্প্রেশন",
        text: "Optimizes edge buffer storage ensuring fine force and vibration nuances are retained safely.",
        bengaliText: "এজ বাফার স্টোরেজে সংরক্ষণ ক্ষমতা অপ্টিমাইজ করে যাতে সূক্ষ্ম বলপ্রয়োগ বা কম্পনের সংকেত নিখুঁতভাবে বজায় থাকে।"
      }
    ],
    visualExplanation: {
      desc: "Creating structured telemetry frames containing synchronization times, joint ticks, and torque stresses.",
      bengaliDesc: "জয়েন্ট ঘূর্ণন এবং মোটর টর্কের অনুপাত সংবলিত সুনির্দিষ্ট সময়-ভিত্তিক ডেটা ফ্রেম তৈরি ও পাঠানো।",
      code: `[High-Freq Sensors Hub] ➔ [Temporal Packet Assembler]
                                      ↓
                              (Metadata Tagging)
                                      ↓
                              [Telemetry Frame]
                                      ↓
                               (Serialization)
                                      ↓
                              [PrismaX Data Store]`
    },
    relatedTopicIds: ["physical-ai", "intelligence-layer", "system-architecture"],
    previousTopicId: "teleoperation",
    nextTopicId: "intelligence-layer"
  },
  {
    id: "intelligence-layer",
    title: "Intelligence Layer",
    bengaliTitle: "ইন্টেলিজেন্স লেয়ার",
    subtitle: "LARGE_ACTION_MODEL_LAM_ENGINE",
    bengaliSubtitle: "লার্জ_অ্যাকশন_মডেল_এলএএম_ইঞ্জিন",
    badge: "LAM_NEURAL",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-indigo-400",
    icon: Network,
    overview: "The Intelligence Layer is the autonomous cognitive processor of PrismaX. Built on custom spatial transformers, it converts continuous physical data streams directly into real-world action sequences. These models possess high fine-grained reasoning capabilities, allowing robotic hardware to complete multi-step tasks like utilizing laboratory tools or handling fragile components securely.",
    bengaliOverview: "ইন্টেলিজেন্স লেয়ার হলো প্রিজম্যাক্স সিস্টেমের অন্তর্নিহিত মগজ ও কগনিティブ প্রসেসর। এটি উন্নত স্থানিক ট্রান্সফরমারে সজ্জিত যা অবিরাম সেন্সর ডেটা প্রবাহকে সরাসরি বাস্তব অ্যাকশন সিকোয়েন্সে রূপান্তর করে। এই এআই মডেলগুলোর সূক্ষ্ম যৌক্তিক বিচার ক্ষমতা রয়েছে, যা মানুষের হস্তক্ষেপ ছাড়াই জটিল কাজ (যেমন স্ক্রু আটকানো বা কাচ নিয়ে কাজ করার সময়) দক্ষতার সাথে সমন্বয় করে।",
    mainExplanation: "At the core of the Intelligence Layer are Large Action Models (LAMs) trained across heterogeneous datasets. These models can translate highly abstract goals ('peel a banana' or 'tighten the valve') into exact, low-level multi-joint motor torques. By leveraging advanced unsupervised feature extractors (like DINOv2 and contrastive vision-language models), our architectures possess robust spatial safety boundaries, preventing damage even during fast industrial assembly.",
    bengaliMainExplanation: "ইন্টেলিজেন্স লেয়ারের প্রাণশক্তি হলো বহুমুখী ডেটাসেটে প্রশিক্ষিত লার্জ অ্যাকশন মডেল (LAM)। এই মডেলগুলো যেকোনো অ্যাবস্ট্রাক্ট কাজকে (যেমন 'কলা ছিলানো' বা 'ভাল্ব টাইট দেওয়া') মোটরের নির্দিষ্ট ঘূর্ণন টর্কে রূপান্তর করতে পারে। ডিনোভির (DINOv2) মতো শক্তিশালী ভিজ্যুয়াল ফিচার এক্সট্র্যাক্টরের সাহায্যে মডেল বস্তুসমূহের সঠিক জ্যামিতিক বিন্যাস ও দূরত্ব বুঝতে পারে এবং সূক্ষ্ম ও নিরাপদ সংযোগ ঘটায়।",
    keyConcepts: [
      {
        heading: "Spatial Transformer Reasoning",
        bengaliHeading: "স্পেশিয়াল ট্রান্সফরমার রিজনিং",
        text: "Processes geometry configurations and environmental point clouds to plot safe, collision-free paths.",
        bengaliText: "বাধামুক্ত ও নিরাপদ কাজের পথ নকশা করতে পারিপার্শ্বিক জ্যামিতিক কাঠামো ও লিডার ক্লাউড বিশ্লেষণ করে।"
      },
      {
        heading: "Zero-Shot Fine Adjustments",
        bengaliHeading: "জিরো-শট অ্যাডাপ্টেবিলিটি",
        text: "Instantly adapts learned fine-motor tasks (like gripping or twisting) to completely new sizes and shapes.",
        bengaliText: "শেখা কাজগুলো (যেমন হাত দিয়ে ধরা বা স্ক্রু ঘোরানো) যা সম্পূর্ণ নতুন আকারের জিনিসের সাথে খাপ খাইয়ে নেয়।"
      },
      {
        heading: "Tactile Loop Inference",
        bengaliHeading: "ট্যাকটাইল লুপ ইনফারেন্স",
        text: "Adapts active joint speed and grip torque dynamically based on resistance felt by friction and weight.",
        bengaliText: "ঘর্ষণ এবং ওজন দ্বারা অনুভূত প্রতিরোধের ওপর ভিত্তি করে জয়েন্টের টর্ক বল এবং গতি রিয়েল-টাইমে সমন্বয় করে।"
      }
    ],
    visualExplanation: {
      desc: "Requesting neural network spatial inference to calculate torque metrics on bipedal workspace modules.",
      bengaliDesc: "স্থানিক কোঅর্ডিনেট বিশ্লেষণ করে রিয়েল-টাইমে সিদ্ধান্ত গ্রহণের জন্য ফিজিক্যাল ইন্টেলিজেন্স মডেল কল করা।",
      code: `  [Goal Command: Tighten Valve]     [Sensor 3D Pointcloud]
                   │                         │
                   ▼                         ▼
         ┌─────────────────────────────────────────┐
         │       Spatial Action Transformer       │
         │  - Processes geometric bounds           │
         │  - Computes collision-free speed        │
         └─────────────────────────────────────────┘
                            │
                            ▼
               [Computed Motor Torque Path]`
    },
    relatedTopicIds: ["physical-ai", "data-layer", "what-is-prismax"],
    previousTopicId: "data-layer",
    nextTopicId: "system-architecture"
  },
  {
    id: "system-architecture",
    title: "System Architecture",
    bengaliTitle: "সিস্টেম আর্কিটেকচার",
    subtitle: "PRISMAX_CIRCULAR_FEEDBACK_ECOSYSTEM",
    bengaliSubtitle: "প্রিজম্যাক্স_চক্রাকার_ফীডব্যাক_ইকোসিস্টেম",
    badge: "CORE_ARCH",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-purple-400",
    icon: Cpu,
    overview: "The PrismaX System Architecture coordinates physical assets, data loops, and model brains in a circular pipeline. It defines how operators transmit trajectory data, how localized client nodes normalize hardware-specific joints, and how global cloud structures continuous-train foundation models to execute autonomous tasks safely across diverse humanoid fleets.",
    bengaliOverview: "প্রিজম্যাক্স সিস্টেম আর্কিটেকচার হলো সমগ্র রোবট বহর, ডেটা লুপ এবং ফিজিক্যাল এআই মগজের চক্রাকার সমন্বয় ঘটিয়ে তৈরি এক জটিল নকশা ও নেটওয়ার্ক। এটি নির্ধারণ করে কীভাবে মানুষ রিমোট ডেটা সরবরাহ করে, লোকাল ক্লায়েন্ট কীভাবে প্রমিত রেডিয়ান ভেক্টরে জয়েন্ট স্টেট অনুবাদ করে এবং ক্লাউড এআই কীভাবে স্বয়ংক্রিয়ভাবে নতুন জয়েন্ট কোণ বের করার জন্য প্রশিক্ষণ নেয়।",
    mainExplanation: "PrismaX ties physical hardware deployments, real-time edge processing nodes, decentralized token rewards ($PIX), and advanced AI models into a self-reinforcing flywheel. Human remote control demonstrations populate the Data Layer, which continuously refines the spatial perception and action capabilities of the central neural intelligence. This intelligence then flows back into localized edge clients, increasing the autonomous safety and manipulation speed of bipedal and bimanual robotics fleets globally.",
    bengaliMainExplanation: "প্রিজম্যাক্স বাস্তব নোড, এজ প্রসেসর, বিকেন্দ্রীভূত টোকেন পুরস্কার ($PIX) এবং ফিজিক্যাল এআই-কে একটি শক্তিশালী বৃত্তে আবদ্ধ করে। মানুষ অপারেটরের দূরবর্তী কাজের নমুনা থেকে প্রথম ডাটা সংগৃহীত হয়, যা ক্রমাগত সেন্ট্রাল নিউরাল মডেলের দক্ষতা বৃদ্ধি করে। এই জ্ঞান পুনরায় প্রতিটি লোকাল রোবটে সরবরাহ করা হয়, যা বিশ্বব্যাপী দ্বিপদী ও দ্বি-হস্ত বিশিষ্ট রোবটের গতিবিধি নিরাপদ ও স্বয়ংক্রিয় করে তোলে।",
    keyConcepts: [
      {
        heading: "Closed Loop Coordination",
        bengaliHeading: "ক্লোজড লুপ কোঅর্ডিনেশন",
        text: "Closes the loop between human demonstration training, local telemetry validation, and cloud intelligence updates.",
        bengaliText: "মানুষের কাজের নমুনা সংগ্রহ, স্থানীয়ভাবে ডেটা যাচাই এবং ক্লাউড মডেলে বুদ্ধিমত্তা আপডেটের ভারসাম্য নিশ্চিত করে।"
      },
      {
        heading: "Edge Compute Optimization",
        bengaliHeading: "এজ কম্পিউট অপ্টিমাইজেশন",
        text: "Performs local force checking and collision prediction, preventing crashes even on network failures.",
        bengaliText: "স্থানীয় কম্পিউটারেই বল যাচাই ও সংঘর্ষের সম্ভাবনা পূর্বাভাস করে, ফলে নেটওয়ার্ক কাটলেও দুর্ঘটনা ঘটে না।"
      },
      {
        heading: "Hardware-Agnostic Solver",
        bengaliHeading: "ডিভাইস-নিরপেক্ষ সলভার প্রযুক্তি",
        text: "Converts unified spatial instructions (URDF coordinates) into exact kinematics across any biped or quad.",
        bengaliText: "যেকোনো রোবট (হিউম্যানয়েড বা চতুষ্পদ) -এর মেকানিক্স বুঝতে URDF স্থানাঙ্ককে নিখুঁত গাণিতিক কাইনেমেটিক্সে রূপান্তর করে।"
      }
    ],
    visualExplanation: {
      desc: "Deploying model endpoints and launching continuous localized coordination solvers on edge machines.",
      bengaliDesc: "রোবট নোডে স্বয়ংক্রিয় কাজের দক্ষতা সচল রাখার সমন্বিত ব্যাকআপ সিস্টেম আরম্ভকরণ।",
      code: `┌───────────────────┐     Telemetry Packet     ┌───────────────────┐
│  Robot Hardware   │ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔  │   PrismaX Node    │
│  - Motors         │                          │  - Edge Buffers   │
│  - Cameras        │  ➔ Safety Overrides ➔    │  - Safety Brakes  │
└───────────────────┘                          └───────────────────┘
          ▲                                              │
          │             Model Output (Update)            ▼
          └ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ [Global Brain]`
    },
    relatedTopicIds: ["what-is-prismax", "teleoperation", "intelligence-layer"],
    previousTopicId: "intelligence-layer",
    nextTopicId: "robot-learning"
  },
  {
    id: "robot-learning",
    title: "Robot Learning",
    bengaliTitle: "রোবট লার্নিং",
    subtitle: "REINFORCEMENT_TRAINING_CYCLE",
    bengaliSubtitle: "রিইনফোর্সমেন্ট_ট্রেনিং_সাইকেল",
    badge: "RL_LOOP",
    category: "Robot Control & Operations",
    bengaliCategory: "রোবট নিয়ন্ত্রণ ও অপারেটর",
    color: "text-blue-500",
    icon: TrendingUp,
    overview: "Robot learning under PrismaX bridges simulation bounds with authentic physical feedback loops. This is driven by deep reinforcement learning combined with behavior cloning from real-world human operator demonstrations, accelerating path accuracy and manipulation velocity.",
    bengaliOverview: "প্রিজম্যাক্স রোবট লার্নিং সিমুলেটরের কৃত্রিম গণ্ডি পার করে বাস্তব স্পর্শ সংবেদনশীল অভিজ্ঞতাকে কাজে লাগায়। মানুষের কাজের প্রত্যক্ষ ডেমো এবং রিইনফোর্সমেন্ট লার্নিংয়ের সমন্বয়ে এটি মোটরের সূক্ষ্ম কাজের নির্ভুলতা এবং গতি বহুগুণ বৃদ্ধি করে।",
    mainExplanation: "Traditional robot reinforcement learning often breaks down in the real world due to the simulation-to-reality (sim-to-real) gap. To overcome this, PrismaX uses human teleoperator sessions as high-quality starting seeds (behavior cloning). Once a baseline policy of safe locomotion or grasp is formed, the model refines it by conducting tiny adjustments in safe, bounded physical workspace units, calculating rewards dynamically from local camera and pressure sensors.",
    bengaliMainExplanation: "বাস্তব জগতে প্রচলিত রোবোটিক রিইনফোর্সমেন্ট লার্নিং নানা জ্যামিতিক ত্রুটির বাধার মুখে পড়ে। প্রিজম্যাক্স এই জটিলতা এড়াতে মানুষের কাজের সেশনগুলোকে প্রাথমিক নমুনা হিসেবে নেয় (যার নাম বিহেভিয়র ক্লোনিং)। একবার নিরাপদ হাঁটাচলা ও স্পর্শের বেস পলিসি তৈরি হয়ে গেলে, রোবট এজ-লুপের সাহায্যে বাস্তব স্পেসে ছোটখাটো সমন্বয় পরীক্ষা করে তার সাকসেস প্রোবাবিলিটি ক্রমশ শক্তিশালী করে।",
    keyConcepts: [
      {
        heading: "Behavior Cloning",
        bengaliHeading: "বিহেভিয়র ক্লোনিং",
        text: "Mirrors high-fidelity spatial trajectories collected from master glove operators to establish immediate training baselines.",
        bengaliText: "রিমোট হ্যাপটিক গ্লাভস পরিহিত অপারেটরের করা কাজের অনুকরণে তাত্ক্ষণিক প্রশিক্ষণ শুরু করে।"
      },
      {
        heading: "Fidelity Reward Calculation",
        bengaliHeading: "নির্ভুল রিওয়ার্ড ক্যালকুলেশন",
        text: "Analyzes depth data and task state success indices to generate dense reward signals autonomously.",
        bengaliText: "সেন্সর গভীরতার তথ্য ও কাজের সফলতা সরাসরি মেপে নিখুঁত রিওয়ার্ড সংকেত তৈরি করে।"
      }
    ],
    visualExplanation: {
      desc: "Behavior cloning algorithm mapping human trajectories to reinforcement learning pipelines.",
      bengaliDesc: "মানুষের ট্র্যাক রেকর্ড করা কাজের ট্র্যাজেক্টরি ডেটার রূপান্তর প্রোগ্রাম সোর্স কোড।",
      code: `[Human Trajectory Dataset (Session 09X)]
                         ↓
               [Behavior Cloning Engine]
                         ↓ (Create Base Policy)
         [Safe Reinforcement Learning Pipeline]
                         ↓ (Optimize with Local Feedback)
               [Upgraded Spatial Model]`
    },
    relatedTopicIds: ["simulation-systems", "human-in-the-loop", "action-models"],
    previousTopicId: "system-architecture",
    nextTopicId: "digital-twins"
  },
  {
    id: "digital-twins",
    title: "Digital Twins",
    bengaliTitle: "ডিজিটাল টুইনস",
    subtitle: "REAL_TIME_URDF_SYNCHRONIZER",
    bengaliSubtitle: "রিয়েল_টাইম_ডিজিটাল_প্রতিরূপ_সিঙ্ক",
    badge: "TWIN_SYNC",
    category: "Robot Control & Operations",
    bengaliCategory: "রোবট নিয়ন্ত্রণ ও অপারেটর",
    color: "text-orange-400",
    icon: LayoutGrid,
    overview: "Digital Twins under the PrismaX protocol represent the exact, real-time virtual replica of deployed physical hardware joints. Standardized on Unified Robot Description Format (URDF) metrics, these virtual models replicate physical kinematics dynamically to support zero-delay latency prediction and visual feedback.",
    bengaliOverview: "প্রিজম্যাক্স প্রোটোকলের আওতাধীন ডিজিটাল টুইন হলো সংস্থাপিত ফিজিক্যাল রোবট জয়েন্টের হুবহু রিয়েল-টাইম ভার্চুয়াল প্রতিরূকরণ। ইউআরডিএফ (URDF) স্ট্যান্ডার্ডে চালিত এই ডিজিটাল মডেলগুলো রিমোট সেশনে জিরো-বিলম্ব ও চমৎকার ভিজ্যুয়াল ওভারভিউ ফুটিয়ে তুলতে পারে।",
    mainExplanation: "By mapping direct motor encoder signals into mathematical digital replica models, PrismaX creates seamless parallel coordination. If a humanoid biped moves its ankle 0.35 radians, the corresponding digital twin reflects this coordinate update in microseconds. This state synchronization is vital for remote VR teleoperation, allowing operators to see a fluid visual overlay of the robot's physical configuration even during local network package delay spikes.",
    bengaliMainExplanation: "মোটরের রিয়েল-টাইম কোণ সংকেতকে গাণিতিক মডেলে পরিণত করার মাধ্যমে প্রিজম্যাক্স সুস্থিত ডিজিটাল টুইন সৃষ্টি করে। রোবটিক রোভার তার গোড়ালি ০.৩৫ রেডিয়ান নড়ালে মাইক্রোসেকেন্ডে ডিজিটাল প্রতিরূপের পরিবর্তন স্পষ্ট দেখা যায়। রিমোট অদলবদল ও অপারেটরের নির্ভুল নজরদারির জন্য এই সিঙ্ক্রোনাইজেশন খুবই গুরুত্বপূর্ণ কাজ দেয়।",
    keyConcepts: [
      {
        heading: "URDF Virtual Mapping",
        bengaliHeading: "URDF ভার্চুয়াল ম্যাপিং",
        text: "Leverages standard XML-based mechanics limits to render consistent 3D joints and torque meshes.",
        bengaliText: "স্ট্যান্ডার্ড এক্সএমএল মেকানিক্স লিমিট ব্যবহার করে ধারাবাহিক থ্রিডি জয়েন্ট ও টর্ক মেশ রেন্ডার করে।"
      },
      {
        heading: "State Anticipation Overlays",
        bengaliHeading: "অ্যান্টিসিপেশন বা ধারণামূলক দৃশ্য",
        text: "Corrects visual glitches caused by telemetry delays by computing intermediate trajectory frames dynamically.",
        bengaliText: "টেলিমেট্রি বিলম্বের কারণে সৃষ্ট ভিডিও কাটা দূর করতে মধ্যবর্তী ধাপে গতি অনুমান করে স্মুথ ভিজ্যুয়াল আউটপুট দেয়।"
      }
    ],
    visualExplanation: {
      desc: "Translating digital twin coordinates to edge motor registers based on active dynamic mesh updates.",
      bengaliDesc: "সক্রিয় ডাইনামিক মেশ আপডেটের ওপর ভিত্তি করে ডিজিটাল টুইন স্থানাঙ্ক মোটরের রেজিস্টারে রূপান্তর।",
      code: `[Physical Motor Actuators] ➔ (Read Radians & Force Angle)
                                       ↓
                        [Direct Kinematics Engine]
                                       ↓
                        [Real-Time URDF Mesh Update]
                                       ↓
                        [Dynamic Digital Twin Overlay]`
    },
    relatedTopicIds: ["physical-intelligence", "simulation-systems", "what-is-prismax"],
    previousTopicId: "robot-learning",
    nextTopicId: "human-in-the-loop"
  },
  {
    id: "human-in-the-loop",
    title: "Human-in-the-Loop Systems",
    bengaliTitle: "হিউম্যান-ইন-দ্য-লুপ সিস্টেম",
    subtitle: "MITIGATION_OF_FOUNDATION_FAILURES",
    bengaliSubtitle: "মডেল_ত্রুটি_সংশোধন_ও_পদ্ধতি",
    badge: "HITL_MIT",
    category: "Robot Control & Operations",
    bengaliCategory: "রোবট নিয়ন্ত্রণ ও অপারেটর",
    color: "text-teal-400",
    icon: Users,
    overview: "Human-in-the-Loop (HITL) architecture mitigates the failure boundaries of robotics models. Since foundation AI models often cap at 90% success rates, remote human operators are actively indexed to resolve exceptions, ensuring 99.9% production-grade workspace reliability.",
    bengaliOverview: "হিউম্যান-ইন-দ্য-লুপ (HITL) আর্কিটেকচার রোবোটিক মডেলগুলোর ব্যর্থতার গণ্ডি সামাল দেয়। যেহেতু এআই মডেলগুলোর সর্বোচ্চ সফলতার হার সাধারণত ৯০%-এ সীমাবদ্ধ থাকে, তাই দূরবর্তী মানব অপারেটররা সরাসরি মধ্যস্থতা করে নিরাপত্তা রক্ষা করে এবং কাজের নির্ভরযোগ্যতা ৯৯.৯% নিশ্চিত করে।",
    mainExplanation: "In safety-critical physical applications like chemistry labs or logistics warehouses, a 10% failure rate is unacceptable. Under the PrismaX protocol, if a model outputs a decision confidence score below a configured threshold, the robot softly pauses and triggers a teleoperation handshake. A human operator around the world instantly claims the stream via the operator queue, resolves the physical blockage, and yields authority back to the AI loop.",
    bengaliMainExplanation: "লজিস্টিক গুদাম বা কেমিক্যাল ল্যাবের মতো ঝুঁকিপূর্ণ জায়গায় ১০ শতাংশের বিচ্যুতি বড় দুর্ঘটনা ডেকে আনতে পারে। প্রিজম্যাক্স প্রোটোকলে যদি রোবট কোনো কাজের ব্যাপারে দুর্বল হয়ে পড়ে বা কনফিডেন্স স্কোর সীমার নিচে চলে যায়, তবে কাইনেমেটিক্স সিস্টেম সাময়িক বিরতি নেয়। একই সাথে গ্লোবাল রিমোট কিউতে নোটিফিকেশন চলে যায়। এরপর একজন দক্ষ মানব অপারেটর ক্ষণিকের জন্য নিয়ন্ত্রণ নিয়ে বাধা দূর করে পুনরায় এআই মোড অন করে দেয়।",
    keyConcepts: [
      {
        heading: "Threshold-Based Handoffs",
        bengaliHeading: "কনফিডেন্স ভিত্তিক ট্রানজিশন",
        text: "Triggers remote control handshakes dynamically if spatial logic model confidence drops below the margin.",
        bengaliText: "মডেলের কাজের সিদ্ধান্ত গ্রহণের নিশ্চয়তা কমে গেলে স্বয়ংক্রিয়ভাবে রিমোট হ্যান্ডশেকিং ট্রিগার করে।"
      },
      {
        heading: "Community Exception Scoring",
        bengaliHeading: "কমিউনিটি ব্যতিক্রম স্কোরিং",
        text: "Rates and catalogues physical exceptions to continuously improve the neural edge training database.",
        bengaliText: "ভূপৃষ্ঠের জটিল কাজের ক্ষেত্রগুলোকে ক্যাটালগ আকারে সাজিয়ে এআই প্রশিক্ষণ ডাটাবেজে অন্তর্ভুক্ত করে।"
      }
    ],
    visualExplanation: {
      desc: "Trigger code checking model confidence metrics and executing remote operator escalation pipeline.",
      bengaliDesc: "মডেলের আত্মবিশ্বাস পরিমাপ ও কম থাকলে মানব অপারেটরের সাহায্য চাওয়ার অ্যালগরিদম কোড।",
      code: `  [Active Task Execution] ➔ Check Model Confidence Score
                                        │
                       ┌────────────────┴────────────────┐
                       ▼ (Confidence >= 72%)             ▼ (Confidence < 72%)
              [Continue AI Control]            [Initiate Safe Soft-Pause]
                                                         │
                                                         ▼
                                             [Request Human Intervention]
                                                         │
                                                         ▼
                                             [Remote Operator Resolves Block]
                                                         │
                                                         ▼
                                             [Release Control Back to AI]`
    },
    relatedTopicIds: ["teleoperation", "eval-engine", "quick-return-bonus"],
    previousTopicId: "digital-twins",
    nextTopicId: "fleet-operations"
  },
  {
    id: "fleet-operations",
    title: "Fleet Operations",
    bengaliTitle: "বহর পরিচালনা",
    subtitle: "DECENTRALIZED_FLEET_MANAGEMENT",
    bengaliSubtitle: "বিকেন্দ্রীভূত_বহর_ব্যবস্থাপনা",
    badge: "FLEET_OPS",
    category: "Robot Control & Operations",
    bengaliCategory: "রোবট নিয়ন্ত্রণ ও অপারেটর",
    color: "text-pink-400",
    icon: BarChart,
    overview: "Fleet Operations manage hundreds of diverse active hardware assets worldwide. By leveraging decentralization, PrismaX minimizes management costs while securing high hardware uptime and reliable spatial trajectory data collection across varied environments.",
    bengaliOverview: "ফ্লিট অপারেশনস বা বহর পরিচালনা বিশ্বব্যাপী বিস্তৃত হাজার হাজার রোবট হার্ডওয়্যার পরিচালনা করে। বিকেন্দ্রীভূত বিন্যাসের চমৎকার সুযোগ ব্যবহার করে প্রিজম্যাক্স রোবটের সক্রিয় কাজের সময় বৃদ্ধি করে এবং কাজের ডাটা নিরবচ্ছিন্নভাবে মডেলে পুশ করে।",
    mainExplanation: "For traditional robotics companies, managing large fleets of robots in physical spaces yields massive operational costs. PrismaX solves this by allowing individuals and distributed guilds to host the physical robots. The decentralized protocol serves as the scheduling core—matching human operators with active nodes that need a pilot, and routing data monetization rewards directly to the respective hosts and investors.",
    bengaliMainExplanation: "প্রথাগত রোবোটিক্স কোম্পানিগুলোর জন্য বড় আকারের রোবট ফ্লিট ব্যবস্থাপনা পরিচালনা করা অত্যন্ত ব্যয়বহুল ছিল। প্রিজম্যাক্স এই সমস্যার সুরাহা করেছে রোবট বহরের মালিকদের সরাসরি সিস্টেমে বিকেন্দ্রীভূতভাবে রোবট যুক্ত করার মাধ্যমে। প্রোটোকলের শিডিউলিং কোড বিশ্বজুড়ে নোডগুলোর সমন্বয় ও ডাটা আদান-প্রদান নিশ্চিত করে মালিকদের সরাসরি মুনাফা দেয়।",
    keyConcepts: [
      {
        heading: "Distributed Maintenance Guilds",
        bengaliHeading: "সংগঠিত লোকাল গিল্ডস",
        text: "Enables communities to pool capital, invest in biped units, and coordinate physical maintenance teams local to facilities.",
        bengaliText: "কমিউনিটি পর্যায়ে লোকাল গিল্ড গঠন করে একযোগে রোবট কেনা ও তার রক্ষণাবেক্ষণ টিম পরিচালনার উপায়।"
      },
      {
        heading: "Hardware Resource Scheduler",
        bengaliHeading: "রিসোর্স শিডিউলার প্রোগ্রাম",
        text: "Dynamically routes user tasks to appropriate idle robotic models based on grip payload and degrees of freedom.",
        bengaliText: "কাজের ধরণ অনুমান করে জয়েন্ট ও ওজনের ওপর ভিত্তি করে সঠিক রোবটকে ডাইনামিকলি টাস্ক অ্যাসাইন করে।"
      }
    ],
    visualExplanation: {
      desc: "PrismaX global fleet state reporting script coordinating active connection lines.",
      bengaliDesc: "বিশ্বব্যাপী সচল রোবট ফ্লিটের বর্তমান ডাটা এবং স্ট্যাটাস রিপোর্ট কোড।",
      code: `     [Global Task Marketplace]
                 │
                 ▼ (Deploy Compatible Node Request)
      ┌─────────────────────────────────────────────────────┐
      │          Hardware Resource Scheduler                │
      │  - Match min degrees of freedom (DOF >= 6)           │
      │  - Check Joint Range + Payload Limit                │
      └─────────────────────────────────────────────────────┘
                 │
                 ├─────────────────────────┐
                 ▼ (Assign Task)           ▼ (Assign Task)
        [Humanoid Unit G1]        [Industrial Arm Node]`
    },
    relatedTopicIds: ["robots-as-miners", "roadmap-stage-2", "data-marketplace"],
    previousTopicId: "human-in-the-loop",
    nextTopicId: "training-infrastructure"
  },
  {
    id: "training-infrastructure",
    title: "Training Infrastructure",
    bengaliTitle: "প্রশিক্ষণ অবকাঠামো",
    subtitle: "CONTINUOUS_TRANSFORMER_TRAINING_CLOUD",
    bengaliSubtitle: "অবিরাম_ট্রান্সফরমার_মেঘ_প্রশিক্ষণ",
    badge: "TRAIN_INF",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-cyan-400",
    icon: HardDrive,
    overview: "Training Infrastructure encompasses the hardware pipelines and continuous training loops used by PrismaX. By channeling tokenized temporal action sequences straight into high-capacity cloud transformers, spatial reasoning capabilities scale exponentially.",
    bengaliOverview: "প্রশিক্ষণ অবকাঠামো হলো প্রিজম্যাক্স দ্বারা ব্যবহূত এআই মডেলার ও প্রশিক্ষণ নেটওয়ার্কের মেলবন্ধন। ক্ষণে ক্ষণে সংগৃহীত ও টোকেনাইজড গতিবিধির ডাটা এজ থেকে উচ্চ-ক্ষমতার সেন্ট্রাল জিপিউ ক্লাউডে আদান-প্রদানের মাধ্মে স্থানিক দক্ষতা জ্যামিতিক হারে বাড়ে।",
    mainExplanation: "Gathering massive amounts of robotics training tokens is only half the battle. Our training infrastructure relies on contrastive objectives and masked-modeling frameworks designed specifically for spatial trajectory data. By evaluating physical successes and failures across thousands of cloud epochs, the foundational Large Action Models learn to approximate real-world behavior and refine torque-adjustment predictions safely.",
    bengaliMainExplanation: "বিশাল পরিমাণে রোবোটিক টোকেন সংগ্রহ করা প্রথম ধাপ মাত্র। আমাদের প্রশিক্ষণ অবকাঠামো বিশেষভাবে তৈরি স্থানিক ট্র্যাজেক্টরি ও মাস্কড মডেলিং আর্কিটেকচার নিয়ে গঠিত। দিনরাত সচল হাজার হাজার ক্লাউড ট্রায়াল সম্পন্ন করে ফাউন্ডেশনাল লার্জ অ্যাকশন মডেল বাস্তব ব্যবহারের গাণিতিক বিন্যাস নিখুঁতভাবে আয়ত্ত করে।",
    keyConcepts: [
      {
        heading: "Cloud Epoch Calculations",
        bengaliHeading: "মেঘের জিপিউ ইপোক হিসাব",
        text: "Schedules thousands of continuous model validation steps based on newly uploaded, high-quality human demonstrations.",
        bengaliText: "নতুন আপলোড করা মানব ডেমো ডেটা বিশ্লেষণ করে হাজার হাজার ধারাবাহিক ভ্যালিডেশন স্টেপ বিন্যস্ত করে।"
      },
      {
        heading: "Contrastive Loss Optimization",
        bengaliHeading: "কন্ট্রাস্টিভ লস নিখুঁতকরণ",
        text: "Ensures similar trajectories converge while divergent physical failure paths are heavily penalized to speed up learning.",
        bengaliText: "সফল কাজের গতিপথ দ্রুত ধরে কাজের বিচ্যুতিগুলো চিহ্নিত করে ট্রেনিং স্পিডকে গতিময় করে তোলে।"
      }
    ],
    visualExplanation: {
      desc: "Continuous pipeline setup code to initiate a spatial transformer model training run.",
      bengaliDesc: "স্পেশিয়াল এআই ট্রান্সফরমার মডেল ট্রেনিং সেশন আরম্ভ ও ভ্যালিডেশন প্রসেস।",
      code: ` [High-Quality Human Demos] ➔ [Unified Telemetry Datasets]
                                         │
                                         ▼ (Epoch Scheduling)
                              ┌───────────────────────┐
                              │  GPU Compute Network  │
                              │  - Contrastive Loss   │
                              │  - Trajectory Masking │
                              └───────────────────────┘
                                         │
                                         ▼ (Deploy Policy Bundle)
                               [LAM Spatial Transformer]`
    },
    relatedTopicIds: ["unsupervised-training", "action-models", "eval-engine"],
    previousTopicId: "fleet-operations",
    nextTopicId: "action-models"
  },
  {
    id: "action-models",
    title: "Action Models",
    bengaliTitle: "অ্যাকশন মডেল",
    subtitle: "LARGE_ACTION_MODEL_LAM_FOUNDATION",
    bengaliSubtitle: "লার্জ_অ্যাকশন_মডেল_এলএএম_ভিত্তি",
    badge: "LAM_ACT",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-rose-500",
    icon: Target,
    overview: "Action Models represent the structural transformer blocks that convert spatial intelligence directly into precise workspace movements. By modeling temporal transitions of joint positions, fine motor tasks are accomplished autonomously.",
    bengaliOverview: "লার্জ অ্যাকশন মডেল (LAM) হলো মূল ট্রান্সফরমার ব্লক যা মানুষের চিন্তার লক্ষ্যকে সরাসরি মোটরের নিখুঁত জয়েন্ট সিগন্যালে রূপান্তর করে। বিভিন্ন কোণের নড়াচড়ার সময়সীমা নিরূপণ করে এগুলো স্বয়ংক্রিয় কাজের সমন্বয় ঘটায়।",
    mainExplanation: "PrismaX's Large Action Models (LAM) do not output mere text or static vectors; they output immediate physical control trajectories. They ingest live camera and depth sequences, align them with tactile feedback metrics, and project target joint angles directly over several step intervals. This enables physical robots to complete complex manipulation routines, like opening a door or handling delicate laboratory samples, without pre-programmed routines.",
    bengaliMainExplanation: "প্রিজম্যাক্সের লার্জ অ্যাকশন মডেল (LAM) শুধুমাত্র টেক্সট তৈরি করে না, বরং সুনির্দিষ্ট কাইনেমেটিএক ট্র্যাক রিডল্ড করে। এরা রিয়েল-টাইমে ক্যামেরা ও স্পর্শ ডেটা নিয়ে মোটর জয়েন্টগুলোর ভবিষ্যৎ কৌণিক মান এক সেকেন্ডের ভগ্নাংশে নির্ধারণ করে দেয়। ফলে দরজার হ্যান্ডেল বা কাচের পাত্র নিয়ে কাজ করা বেশ সহজ হয়ে যায়।",
    keyConcepts: [
      {
        heading: "Temporal Spatial Vector Output",
        bengaliHeading: "স্থানিক ভেক্টর আউটপুট টেকনিক",
        text: "Outputs raw joint velocities and motor torque levels normalized dynamically across varied hardware models.",
        bengaliText: "রোবটের জয়েন্ট কোণের ঘূর্ণন গতিকে নরমালাইজ করে সুনির্দিষ্ট সিগন্যাল কোডে আউটপুট দেয়।"
      },
      {
        heading: "Multi-Step Goal Progression",
        bengaliHeading: "বহু-স্তর কাজের সিকোয়েন্সিং",
        text: "Deconstructs large abstract goals like 'turn valve coordinate X' into structured spatial trajectory paths.",
        bengaliText: "'ভাল্ব বন্ধ করো' এর মতো সাধারণ নির্দেশকে রোবোটিক নড়াচড়ার ধাপে ধাপে রূপান্তর করে।"
      }
    ],
    visualExplanation: {
      desc: "Exemplary model execution logic triggering Large Action Model spatial vectors.",
      bengaliDesc: "স্থানিক কাজের ট্র্যাজেক্টরি হিসাব করতে মডেল রান করার ইন্টারফেস প্রোগ্রাম।",
      code: `  [Visual 3D Feed] ➔ ➔ ➔ ➔ ┐
                            ▼
          ┌───────────────────────────────────┐
          │     Large Action Model Predictor  │
          │   - Normalizes hardware joints    │
          │   - Calculates angular velocity   │
          └───────────────────────────────────┘
                            ▲
  [Active Joint Angles] ➔ ➔ ┴ ➔ ➔ [Predicted Target Torques]`
    },
    relatedTopicIds: ["intelligence-layer", "robot-learning", "physical-intelligence"],
    previousTopicId: "training-infrastructure",
    nextTopicId: "machine-perception"
  },
  {
    id: "machine-perception",
    title: "Machine Perception",
    bengaliTitle: "মেশিন পারসেপশন",
    subtitle: "DINOV2_CLIP_SPATIAL_SENSORY",
    bengaliSubtitle: "ডিনোভি২_ক্লিপ_স্পেশিয়াল_সেন্সর",
    badge: "PERCEPT",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-lime-400",
    icon: Eye,
    overview: "Machine Perception powers the physical vision and spatial understanding systems of the PrismaX network. Standardized on state-of-the-art visual feature models like DINOv2 and CLIP-L, physical environments are parsed with high semantic safety.",
    bengaliOverview: "মেশিন পারসেপশন বা উপলব্ধি শক্তি রোবটের দৃষ্টি ও স্থানিক বোঝার গতিপথ নিয়ন্ত্রণ করে। সর্বাধুনিক ডিনোভি২ (DINOv2) এবং ক্লিপ-এল (CLIP-L) এর সমন্বয়ে তৈরি এই প্রযুক্তি রোবটকে বাস্তব পরিবেশ গভীরভাবে বুঝতে সাহায্য করে।",
    mainExplanation: "To interact safely, robots must construct dense mental maps of their workspaces. Instead of relying on manual labeling, PrismaX leverages unsupervised vision models. DINOv2 computes spatial embeddings for every tiny visual frame, extracting pixel-level semantic objects (like where tool handles begin and end). Combined with CLIP-L's lighting robustness, perception models ensure robots accurately distinguish fragile items from rugged environments.",
    bengaliMainExplanation: "কাজের পরিবেশের ছবি বা লিডার গভীরতা নিখুঁতভাবে না বুঝলে দুর্ঘটনা অবশ্যম্ভাবী। প্রিজম্যাক্স মানুষের তৈরি লেবেলিংয়ের বদলে আনসুপারভাইজড এআই প্রোটোকল ব্যবহার করে। ডিনোভি২ প্রতিটি ছবির পিক্সেলভিত্তিক জ্যামিতিক বৈশিষ্ট্য এবং সূক্ষ্ম নকশা (যেমন হাতল বা টুলসের শেষ প্রান্ত) গভীর মেপে আলাদা করে দেয়, ফলে নিখুঁতভাবে বস্তু নির্বাচন ও স্থানান্তর করা যায়।",
    keyConcepts: [
      {
        heading: "Unsupervised Frame Parsing",
        bengaliHeading: "আনসুপারভাইজড ফ্রেম পার্সিং",
        text: "Extracts highly refined semantic properties (boundaries, corners, depth gradients) without manual annotation.",
        bengaliText: "কোনো প্রকার মানুষের হস্তক্ষেপ ছাড়াই অবজেক্টের সীমানা, কোণ ও দূরত্বের হিসাব স্বয়ংক্রিয় বের করে।"
      },
      {
        heading: "Spatial DINOv2 Embeddings",
        bengaliHeading: "ডিনোভি২ স্থানিক এমবেডিংস",
        text: "Constructs semantic pixel maps that group equivalent object parts together autonomously under visual changes.",
        bengaliText: "আলোর স্বল্পতা বা ক্যামেরার কোণ পরিবর্তনের পরেও অবজেক্টের আকার ও রূপ অপরিবর্তিত রেখে ট্র্যাক করে।"
      }
    ],
    visualExplanation: {
      desc: "Loading raw camera pixel data and generating semantic frame spatial embeddings.",
      bengaliDesc: "ভিজুয়াল ক্যামেরা ইনপুট নিয়ে পারসেপশন ইঞ্জিন এমবেডিংস জেনারেশন কোড।",
      code: `  [Live Camera Frame] ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ➔ ┐
                                          ▼
      ┌────────────────────────────────────────────────────────┐
      │             Unsupervised Feature Extractor             │
      │   - Pixel Gradients       - Semantic Object Borders    │
      │   - Lighting Robustness   - Spatial Depth Parsing     │
      └────────────────────────────────────────────────────────┘
                                          │
                                          ▼
                            [Unified Semantic Embeddings]`
    },
    relatedTopicIds: ["digital-twins", "unsupervised-training", "eval-engine"],
    previousTopicId: "action-models",
    nextTopicId: "simulation-systems"
  },
  {
    id: "simulation-systems",
    title: "Simulation Systems",
    bengaliTitle: "সিমুলেশন সিস্টেম",
    subtitle: "SIM2REAL_GAP_BRIDGING_PROTOCOL",
    bengaliSubtitle: "ভার্চুয়াল_থেকে_বাস্তব_সমন্বয়",
    badge: "SIM2REAL",
    category: "Robot Control & Operations",
    bengaliCategory: "রোবট নিয়ন্ত্রণ ও অপারেটর",
    color: "text-emerald-500",
    icon: LayoutGrid,
    overview: "Simulation Systems in PrismaX bridge the gap between virtual training models and physical deployments. By applying motion-retargeting techniques to human datasets, simulation policies are safely mapped to real hardware controllers.",
    bengaliOverview: "সিমুলেশন সিস্টেম প্রিজম্যাক্স নেটওয়ার্কে ভার্চুয়াল প্রশিক্ষণ এবং বাস্তব কাজের মধ্যকার অমিল দূর করে। মানুষের ডেমো প্যাকেটের ওপর গতি-পুনর্নির্ধারণ বা রিম্যাপিং প্রয়োগের মাধ্যমে এটি কৃত্রিম পলিসি বাস্তব মোটরে নিখুঁত রূপান্তর করে।",
    mainExplanation: "While high-speed virtual simulators generate thousands of training runs cheaply, they ignore real-world sensor noise and friction. If a policy is transferred to physical hardware without processing, joint errors and mechanical failures occur instantly. PrismaX addresses this sim-to-real gap by continuously refining simulation parameters with authentic high-frequency telemetry data streams, bringing simulation behavior in line with real physical environments.",
    bengaliMainExplanation: "সিমুলেটর দিয়ে অতি অল্প সময়ে লাখ লাখ ডামি ট্রায়াল সম্পন্ন করা সম্ভব হলেও বাস্তব সেন্সরের নয়েজ বা বাতাস ও ঘর্ষণের প্রতিবন্ধকতা সেখানে থাকে না। প্রিজম্যাক্স এই সিম-টু-রিয়েল বাধার মুখে পড়তে দেয় না কারণ বাস্তব রোবটের টেলিমেট্রি থেকে সংগৃহীত ডাটা প্রতিনিয়ত ভার্চুয়াল ট্রেনিং মেকানিক্সে সমন্বয় করা হয়, ফলে সিমুলেটরের আচরণ বাস্তবসম্মত হয়ে ওঠে।",
    keyConcepts: [
      {
        heading: "Sim-to-Real Domain Adaptation",
        bengaliHeading: "সিম-টু-রিয়েল অভিযোজন",
        text: "Ensures training simulations match physical variables like mass distribution, torque delays, and noise patterns.",
        bengaliText: "প্রশিক্ষণ সিমুলেটরের ভর ডিস্ট্রিবিউশন, টর্ক বিলম্ব ও সেন্সর বাধার রেশিওকে বাস্তবের কাছাকাছি নিয়ে আসে।"
      },
      {
        heading: "Real-Time Retargeting Solver",
        bengaliHeading: "গতিবিদ্যা রিম্যাপিং সলভার",
        text: "Safely retargets simulated motion trajectories to match specific physical joint boundaries dynamically.",
        bengaliText: "ভার্চুয়াল নড়াচড়াকে ফিজিক্যাল জয়েন্টের কৌণিক শক্তির সীমার সাথে নিখুঁতভাবে রিয়েল-টাইমে ম্যাচ করায়।"
      }
    ],
    visualExplanation: {
      desc: "Sim-to-real parameter tuning to synchronize simulated joints with local physical joints.",
      bengaliDesc: "বাস্তব মোটরের প্রতিবন্ধকতার তথ্য সিমুলেশন ইঞ্জিনে এডজাস্ট করার কনফিগারেশন কোড।",
      code: `  [Virtual Environment Sim]               [Real-World Robot Joint]
              │                                      │
              ▼ (High-Speed Trial runs)              ▼ (Edge Telemetry)
       ┌───────────────┐                      ┌───────────────┐
       │ Mesh/Joint Sim│                      │ Sensor Feedback│
       └───────────────┘                      └───────────────┘
              │                                      │
              └───────────────┬──────────────────────┘
                              ▼
            ┌───────────────────────────────────┐
            │      Sim-to-Real Resolver         │
            │   - Force Checking Alignment      │
            │   - Friction Coefficients Tuning  │
            └───────────────────────────────────┘
                              │
                              ▼
                [Synchronized Safe Control]`
    },
    relatedTopicIds: ["robot-learning", "digital-twins", "physical-intelligence"],
    previousTopicId: "machine-perception",
    nextTopicId: "deployment-pipelines"
  },
  {
    id: "deployment-pipelines",
    title: "Deployment Pipelines",
    bengaliTitle: "ডেপ্লয়মেন্ট পাইপলাইন",
    subtitle: "FLEET_DEPLOYMENT_CHANNEL_INFRA",
    bengaliSubtitle: "ফ্লিট_আপডেট_ও_ডেপ্লয়মেন্ট_পাইপলাইন",
    badge: "DEPLOY_P",
    category: "Network & Economics",
    bengaliCategory: "নেটওয়ার্ক ও অর্থনীতি",
    color: "text-teal-500",
    icon: Sliders,
    overview: "Deployment Pipelines deliver newly updated and verified control policies directly to edge robots globally. This ensures hardware machines can run spatial software updates safely, with zero mechanical interruption.",
    bengaliOverview: "ডেপ্লয়মেন্ট পাইপলাইন বিশ্বজুড়ে থাকা হাজার হাজার রোবট হার্ডওয়্যারে সদ্য আপডেট ও পরীক্ষিত এআই প্রোগ্রাম ও কাজের পলিসি নিরাপদে পাঠিয়ে দেয়। এর কাজ কোনো যান্ত্রিক ক্ষতি ছাড়া আপডেট নিশ্চিত করা।",
    mainExplanation: "Updating physical hardware is vastly different from updating a website. A faulty binary can cause mechanical gears to self-destruct or swing dangerously. PrismaX implements a strict deployment protocol: before any spatial package goes active on physical edge nodes, it must clear comprehensive tests under virtual digital twins and receive positive scoring by local safety validation solvers.",
    bengaliMainExplanation: "একটি ওয়েবসাইট আপডেট আর ফিজিক্যাল রোবট আপডেট সম্পূর্ণ আলাদা ব্যাপার। একটি ভুল কোড কমান্ডের দরুন রোবট নিজের হাত ভেঙে বা কোনো মূল্যবান জিনিসের মারাত্মক ক্ষতি করে বসতে পারে। প্রিজম্যাক্স কঠোর ভ্যালিডেশন পাইপলাইন অনুসরণ করে। নোডে লাইভ ইনস্টল হওয়ার আগে তা অবশ্যই ডিজিটাল টুইন সেশনের সব নিরাপদ প্যারামিটার পাস করে চূড়ান্ত অনুমতি পায়।",
    keyConcepts: [
      {
        heading: "Rollout Safety Gates",
        bengaliHeading: "রোলআউট সেফটি গেটস প্রযুক্তি",
        text: "Ensures model updates run in bounded dry run states before accepting hardware-level execution permissions.",
        bengaliText: "আপডেটগুলো এজ ডিভাইসে পাঠানোর পর প্রথমে ডামি অ্যাকশন মোডে পরীক্ষা নিশ্চিত করে।"
      },
      {
        heading: "Dynamic Edge Rollbacks",
        bengaliHeading: "তাৎক্ষণিক রোলব্যাক সিস্টেম",
        text: "Instantly reverts to highly stable pre-configured control fallbacks if visual motion anomalies arise.",
        bengaliText: "নড়াচড়ায় অস্বাভাবিক বা বেশি কাঁপুনি অনুভব হলে সাথে সাথে আপডেট বাতিল করে পূর্ববর্তী নিরাপদ ড্রাইভার সচল করে।"
      }
    ],
    visualExplanation: {
      desc: "Checking node health and executing secure OTA firmware rollout.",
      bengaliDesc: "নোডের কাইনেমেটিএক স্বাস্থ্য পরীক্ষা এবং এয়ার-আপডেট ডেপ্লয়মেন্ট সোর্স কোড।",
      code: ` [New Spatial Package Version]  ➔  [Digital Twin Virtual Playground]
                                                      │
                                           (Test Passed Safely?)
                                                      │
                                           ┌──────────┴──────────┐
                                           ▼ (Yes)               ▼ (No / Anomalies)
                                   [Live OTA Deployment]     [Abort & Safe Rollback]
                                           │
                                           ▼ (Monitor Performance)
                                   [Active Hardware Fleet]`
    },
    relatedTopicIds: ["system-architecture", "robots-as-miners", "roadmap-stage-2"],
    previousTopicId: "simulation-systems",
    nextTopicId: "physical-intelligence"
  },
  {
    id: "physical-intelligence",
    title: "Physical Intelligence",
    bengaliTitle: "ফিজিক্যাল ইন্টেলিজেন্স",
    subtitle: "ACTUATOR_KINEMATIC_STANDARDIZATION",
    bengaliSubtitle: "অ্যাকুয়েটর_কাইনেমেটিক_স্ট্যান্ডার্ডাইজেশন",
    badge: "PHY_INT",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-amber-500",
    icon: Activity,
    overview: "Physical Intelligence defines standard kine-mechanical variables over custom hardware frameworks. Normalizing actuator torque profiles, joints, and angles under unified schemas permits unified model deployment across bipedal and quadrupedal systems.",
    bengaliOverview: "ফিজিক্যাল ইন্টেলিজেন্স যেকোনো কাস্টম হার্ডওয়্যার বা ব্র্যান্ডের যান্ত্রিক সীমাগুলোকে প্রমিত করার বিজ্ঞান। জয়েন্টের নড়াচড়া ও কোণগুলোকে সাধারণ পরিমাপকে সাজানোর ফলে দ্বিপদী বা চতুষ্পদ রোবটে একটি সাধারণ এআই সিস্টেম যুক্ত করা যায়।",
    mainExplanation: "Different robot vendor models utilize distinct gear ratios, maximum torque thresholds, and encoder metrics. Standardizing physical actions across these hardware platforms is a fundamental challenge for general-purpose robotics. PrismaX defines a highly structured physical abstraction layer: it standardizes raw joint sensor metrics into universal radian systems and normalized force feedback indicators, enabling general models to operate diverse mechanical bodies without friction.",
    bengaliMainExplanation: "বিভিন্ন কোম্পানির রোবট ভিন্ন ভিন্ন গিয়ার রেশিও, টর্ক সীমা ও সিগন্যাল ফ্রিকোয়েন্সি ব্যবহার করে। একটি সাধারণ এআই মডেল দিয়ে এদের সবাইকে চালানো অসম্ভব ছিল। প্রিজম্যাক্স এই যান্ত্রিক বৈশিষ্ট্যগুলোকে একটি অভিন্ন রেডিয়ান ও বলপ্রয়োগ সূচকে কনভার্ট করে দেয়। ফলে একটি নির্দেশমালা যেকোনো ব্র্যান্ডের মোটরে নিখুঁত ঘূর্ণন তৈরি করে।",
    keyConcepts: [
      {
        heading: "Actuator Normalization",
        bengaliHeading: "অ্যাকুয়েটর নরমালাইজেশন",
        text: "Translates proprietary electrical current peaks or ticks to normalized torque levels dynamically.",
        bengaliText: "কোম্পানিভিত্তিক জটিল মোটর কমান্ডকে বিশ্বজনীন টর্ক বল এবং রেডিয়ানে রূপান্তর করে।"
      },
      {
        heading: "General Joint Schemas",
        bengaliHeading: "ইউনিভার্সাল জয়েন্ট স্কিমা",
        text: "Standardizes biped balance kinematics and bimanual assembly paths under modular physical joints.",
        bengaliText: "হিউম্যানয়েড হাত ও পায়ের সঞ্চালন কাঠামো ও কাইনেমেটিক্সকে সহজে বোধগম্য মডুলার কোডে প্রমিত করে।"
      }
    ],
    visualExplanation: {
      desc: "API normalizing electrical tick metrics directly into abstract radian velocities.",
      bengaliDesc: "মোটরের জটিল ইলেকট্রনিক টিক সংকেতকে স্ট্যান্ডার্ড রেডিয়ানে রূপান্তরের সোর্স কোড।",
      code: ` [Proprietary Motor Ticks]  ➔  [Electrical Current Spikes]
                                           │
                                           ▼ (Normalization Solver)
                               ┌───────────────────────┐
                               │  PrismaX Abstraction  │
                               │  - Linear Radians     │
                               │  - Abstract Velocity  │
                               └───────────────────────┘
                                           │
                                           ▼
                               [Universal Action Sequence]`
    },
    relatedTopicIds: ["what-is-prismax", "digital-twins", "action-models"],
    previousTopicId: "deployment-pipelines",
    nextTopicId: "robotics-data-collection"
  },
  {
    id: "robotics-data-collection",
    title: "Robotics Data Collection",
    bengaliTitle: "রোবটিক্স ডেটা সংগ্রহ",
    subtitle: "MULTIMODAL_TRAJECTORY_ACCUMULATION",
    bengaliSubtitle: "মাল্টিমোডাল_গতিপথ_ডেটা_সংগ্রহ",
    badge: "COLLECT",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-sky-400",
    icon: HardDrive,
    overview: "Robotics Data Collection gathers premium haptic inputs and multi-angle workspace camera records securely. These multi-modal trajectories are validated under strict automated protocols to power foundational Large Action Models.",
    bengaliOverview: "রোবটিক্স ডেটা সংগ্রহ মানুষের সূক্ষ্ম কাজের স্পর্শ সংবেদন ও বহু-কোণিক ক্যামেরা ছবি নিরাপদে সংগ্রহ করার চমৎকার পদ্ধতি। সংগৃহীত এই ডেটা সরাসরি এআই ফাউন্ডেশন ট্রেনিং প্ল্যাটফর্মে পাঠিয়ে দেওয়া হয়।",
    mainExplanation: "AI models cannot scale without internet-grade high-quality training datasets. Standard data (like photos or text) lies everywhere, but annotated multi-modal robotics trajectories are incredibly scarce and expensive to generate. PrismaX addresses this bottleneck by motivating a global community of operators and fleet owners to record authentic workspace trials day and night, directly resolving the data deficit that currently challenges physical intelligence developers.",
    bengaliMainExplanation: "যেকোনো এআই মডেলের বুদ্ধিমত্তা বৃদ্ধির প্রধান জ্বালানি হলো বড় ডেটাসেট। ইন্টারনেটে টেক্সট ও ছবির অভাব না থাকলেও রোবটের মোটর টর্ক ও ভিডিওর টাইম সিরিজ ডেটার চরম সংকট রয়েছে। প্রিজম্যাক্স বিশ্বজুড়ে থাকা হাজার হাজার রোবট হোস্টকে ২৪ ঘন্টা রিয়েল-টাস্ক ডাটা সংগ্রহের সুযোগ দিয়ে ডাটা ঘাটতি চিরতরে দূর করার মেকানিজম তৈরি করেছে।",
    keyConcepts: [
      {
        heading: "Trajectory Tokenization",
        bengaliHeading: "ট্র্যাজেক্টরি টোকেনাইজেশন প্রযুক্তি",
        text: "Converts sensory variables (visuomotor frames, haptic vectors) to continuous numeric training tokens.",
        bengaliText: "মোটর ও ক্যামেরার রিউ-স্টেট ডেটাকে সরাসরি নিউরাল নেটওয়ার্ক রিডেবল ভেক্টর কোড টোকেনে রূপান্তর করে।"
      },
      {
        heading: "Validation Protocols",
        bengaliHeading: "স্বয়ংক্রিয় ডাটা যাচাইকরণ",
        text: "Uses automated filters (the Eval Engine) to reject empty frames or corrupted motion traces instantly.",
        bengaliText: "ইভাল ইঞ্জিনের মাধ্যমে অস্পষ্ট ছবি বা ত্রুটিপূর্ণ মোটর সিগন্যাল সাথে সাথে নিষ্কাশন করে মান অক্ষুণ্ণ রাখে।"
      }
    ],
    visualExplanation: {
      desc: "Creating target dataset buffers and pushing validated frames to community storage pools.",
      bengaliDesc: "ডাটাবেজ বাফার তৈরি এবং সংগৃহীত গতি ও হ্যাপটিক্স ডেটা স্টোরেজ পুলে প্রেরণের কোড।",
      code: `  [Active Workspace Trial] ➔ Real-Time Joint Radian Stream
                                       │
                                       ▼ (Assemble Multi-Modal Package)
                              ┌──────────────────┐
                              │ Telemetry Buffer │
                              └──────────────────┘
                                       │
                                       ▼ (Security Validation Filter)
                        [Community Storage Pool (v2)]`
    },
    relatedTopicIds: ["data-layer", "data-marketplace", "eval-engine"],
    previousTopicId: "physical-intelligence",
    nextTopicId: "future-of-physical-ai"
  },
  {
    id: "future-of-physical-ai",
    title: "Future of Physical AI",
    bengaliTitle: "ফিজিক্যাল এআই-এর ভবিষ্যৎ",
    subtitle: "THE_SOVEREIGN_ROBOTICS_ECOSYSTEM",
    bengaliSubtitle: "সার্বভৌম_রোবোটিক্স_ইকোসিস্টেম",
    badge: "FUTURE_AI",
    category: "Introduction & Core",
    bengaliCategory: "উপক্রমণিকা ও মূল ভিত্তি",
    color: "text-violet-400",
    icon: Compass,
    overview: "The Future of Physical AI maps out a decentralized robotics landscape spanning millions of autonomous robot models. Driven by independent spatial intelligence cores ($PIX tokenomics), robots coordinate and transact tasks directly with one another safely.",
    bengaliOverview: "ফিজিক্যাল এআই-এর ভবিষ্যৎ মূলত লক্ষ লক্ষ সম্পূর্ণ স্বয়ংক্রিয় রোবটের পারস্পরিক সমন্বয় ভিত্তিক এক সার্বজনীন নেটওয়ার্ক। $PIX টোকেনমিক্স দ্বারা সমর্থিত এই ইকোসিস্টেমে রোবটরা নিজেরা নিজেদের মধ্যে ট্রানজ্যাকশন সম্পন্ন করতে পারবে।",
    mainExplanation: "As models achieve massive degrees of autonomy, the need for central cloud orchestration disappears. Under Stage III of the PrismaX Roadmap, decentralized inference servers host sovereign robotics models. Physical robots coordinate among themselves, trading data and renting hardware resources directly across machine-to-machine clearing channels, redefining our global workspace productivity.",
    bengaliMainExplanation: "রোবটের বুদ্ধিমত্তা যখন চূড়ান্ত স্বায়ত্তশাসন অর্জন করবে, তখন কেন্দ্রীয় ক্লাউড নজরদারির প্রয়োজন ফুরিয়ে যাবে। প্রিজম্যাক্স রোডম্যাপের ৩য় ধাপ অনুযায়ী প্রতিটি নোড সার্বভৌম মডেল হোস্ট করবে। রোবটগুলো নিজেরাই নিজেদের প্রসেসিং পাওয়ার শেয়ারিং, ডাটা এক্সচেঞ্জ ও কাজের কন্টাক্ট সম্পন্ন করবে, যা বিশ্বব্যাপী নতুন মেকানিকাল অর্থনীতি নিয়ে আসবে।",
    keyConcepts: [
      {
        heading: "Machine-to-Machine Trades",
        bengaliHeading: "মেশিন-টু-মেশিন বিনিময়",
        text: "Permits independent robot nodes to rent compute, swap sensor traces, and transaction tasks safely.",
        bengaliText: "রোবটগুলোকে নিজেদের প্রসেসিং পাওয়ার ধার দেওয়া ও ডেটা কেনাবেচার গ্লোবাল নেটওয়ার্ক অ্যাক্সেস দেয়।"
      },
      {
        heading: "Sovereign AI Networks",
        bengaliHeading: "সার্বভৌম এআই নেটওয়ার্ক",
        text: "Replaces corporate cloud ownership with community-led decentralized foundation model inference cores.",
        bengaliText: "কোনো বৃহৎ কর্পোরেশনের ক্ষমতা হ্রাস করে সরাসরি সাধারণ গিল্ড ও এআই ডেভেলপারদের শাসন প্রতিষ্ঠা করে।"
      }
    ],
    visualExplanation: {
      desc: "Machine-to-machine smart contract settlement script initiating resource sharing trades.",
      bengaliDesc: "মেশিনদের পারস্পরিক কাজের কন্টাক্ট ও টোকেন পেমেন্ট সেটেলমেন্টের প্রোটোকল সোর্স কোড।",
      code: ` [Robot Worker Node A]              [Compute Node B (Idle)]
          │                                      ▲
          ▼ (Need Heavy processing)              │
    ┌──────────────────────────────────────────────────┐
    │          Decentralized Lease Agreement           │
    │  - Initiates smart contract lease                │
    │  - Escrow validation & $PIX payment              │
    └──────────────────────────────────────────────────┘
          │ (Rent processing power)
          ▼
    [Complete Heavy Assembly Task]`
    },
    relatedTopicIds: ["roadmap-stage-3", "tokenomics-pix", "fleet-operations"],
    previousTopicId: "robotics-data-collection",
    nextTopicId: "eval-engine"
  },
  {
    id: "eval-engine",
    title: "The Eval Engine",
    bengaliTitle: "ইভাল ইঞ্জিন",
    subtitle: "AUTOMATED_TRACE_QUALITY_ASSESSMENT",
    bengaliSubtitle: "স্বয়ংক্রিয়_ডেটা_মান_মূল্যায়ন",
    badge: "EVAL_ENG",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-yellow-400",
    icon: ShieldCheck,
    overview: "The Eval Engine validates telemetry packets and video task submissions autonomously. Using state-of-the-art open-weight AI algorithms, it computes precise data quality scores (0.0 to 1.0) to ensure high training value and resist network spam.",
    bengaliOverview: "ইভাল ইঞ্জিন হলো ডাটা প্রেরণের নিরাপত্তা দ্বার যা টেলিমেট্রি প্যাকেট এবং ভিডিও ফাইলের সত্যতা স্বয়ংক্রিয়ভাবে যাচাই করে। সর্বাধুনিক এআই অ্যালগরিদমের সাহায্যে এটি প্রতি ফাইলের জন্য ০.০ থেকে ১.০ পর্যন্ত নিখুঁত কোয়ালিটি স্কোর দেয়।",
    mainExplanation: "To prevent adversarial actors from uploading fake static streams or corrupted frames, the Eval Engine extract features publicly. Scores are produced as a product of orthogonal, equally weighted variables: Motion flow, Semantic value, Aesthetic compose, and Diversity distance. System weights are adjusted over access requests via an exponential moving average (EMA) to maintain alignment with neural model requirements.",
    bengaliMainExplanation: "কোনো হ্যাকার বা স্প্যামার যাতে ভুয়া বা রিপ্রেজেন্টেড ভিডিও পুশ করে নেটওয়ার্ককে বিভ্রান্ত করতে না পারে, সেজন্য ইভাল ইঞ্জিন স্বয়ংক্রিয় ডাবল ভেরিফিকেশন সচল রাখে। ফাইল স্কোরটি ৪টি প্রধান বৈশিষ্ট্যের (মোশন, সেমান্টিক, নান্দনিকতা ও ডেভিয়্যান্স) গুণফল মান থেকে আসে। সিস্টেমটি কাজের ট্রেন্ডের সাথে মানিয়ে নিতে এক্সপোনেনশিয়াল মুভিং এভারেজ (EMA) পদ্ধতি ব্যবহার করে প্রতিনিয়ত তার মূল্যায়ন উন্নত রাখে।",
    keyConcepts: [
      {
        heading: "Orthogonal Variable Products",
        bengaliHeading: "অর্থোগোনাল কোয়ালিটি ফ্যাক্টরিং",
        text: "Computes scores as a product of completely distinct aspects: Motion, Semantic, Aesthetics, and Diversity.",
        bengaliText: "ডেটার মানকে ৪টি ভিন্ন দিক (নড়াচড়া, গভীর অর্থ, দেখার ক্লারিটি ও অভিনবত্ব) বিশ্লেষণ করে গুণফল আকারে হিসাব করে।"
      },
      {
        heading: "Automated Sybil Resistance",
        bengaliHeading: "স্বয়ংক্রিয় সাইবিল প্রতিরোধ",
        text: "Ensures network tokens are only minted if the computational proof verifies authentic physical collection labor.",
        bengaliText: "কোনো প্রকার মানুষের রিভিউ ছাড়াই ভুয়া নোড বা স্প্যাম কন্টেন্ট উচ্ছেদ করে টোকেন মাইনিং সুরক্ষিত রাখে।"
      }
    ],
    visualExplanation: {
      desc: "Formula-based scoring step executing quality factor multiplication in the Eval Engine.",
      bengaliDesc: "৪টি গভীর ফ্যাক্টর গুণ করে চূড়ান্ত কোয়ালিটি স্কোর নির্ধারণের গাণিতিক কোড।",
      code: ` [Submitted Telemetry Frame]
                  │
                  ▼ (Feature Extraction Filters)
         ┌────────┴───────────────────┬──────────────────┐
         ▼                           ▼                  ▼
    (Motion Flow)            (Semantic Value)   (Diversity Distance)
         │                           │                  │
         └────────┬──────────────────┴────────┬─────────┘
                  ▼                           ▼
            (Accumulate Orthogonal Variable Weights)
                  │
                  ▼
         [Final Data Quality Index Output (0.0 to 1.0)]`
    },
    relatedTopicIds: ["motion-field-correction", "unsupervised-training", "data-marketplace"],
    previousTopicId: "future-of-physical-ai",
    nextTopicId: "data-marketplace"
  },
  {
    id: "data-marketplace",
    title: "Data Marketplace",
    bengaliTitle: "ডেটা মার্কেটপ্লেস",
    subtitle: "DECENTRALIZED_TELEMETRY_EXCHANGE",
    bengaliSubtitle: "বিকেন্দ্রীভূত_টেলিমেট্রি_বিনিময়",
    badge: "DATA_MKT",
    category: "Network & Economics",
    bengaliCategory: "নেটওয়ার্ক ও অর্থনীতি",
    color: "text-indigo-500",
    icon: Coins,
    overview: "The Data Marketplace serves as the exchange hub connecting robotics hosts with machine modeling firms. Standardized schemas segment transactions into Network-Owned data pools and Customer-Owned channels securely.",
    bengaliOverview: "ডেটা মার্কেটপ্লেস হলো এক্সচেঞ্জ প্ল্যাটফর্ম যা রোবট বহরের মালিকদের সাথে এআই মডেলার কোম্পানির সংযোগ ঘটায়। স্ট্যান্ডার্ড নিয়মের অধীনে ট্রানজ্যাকশনগুলোকে মূলত দুই ভাগে ভাগ করা হয়। এক দিকে নেটওয়ার্ক-মালিকানাধীন ডাটা সকলের জন্য উম্মুক্ত করা হয়, যা কিনতে গেলে $PIX টোকেন পুড়িয়ে দেওয়া হয়। এতে নেটওয়ার্ক সরবরাহ কমে গিয়ে টোকেনের মান বৃদ্ধি পায় আর ডেটা সংগ্রহাকারী পান দীর্ঘমেয়াদী রয়্যালটি।",
    mainExplanation: "The PrismaX Data Marketplace operates via blockchain smart contracts. AI research firms list detailed demands for specific object manipulation trajectories (such as cable plugging, hardware sorting). Actively deployed robot operators accept these specifications, capture high-frequency physical loops, and publish the verified data for instant automated $PIX payments.",
    bengaliMainExplanation: "পলিসি-মেকার বা এআই মডেল রিসার্চ ফার্মগুলো যখন কোনো নির্দিষ্ট জটিল কাজের ভিডিও বা হিউম্যান ট্র্যাজেক্টরি চায়, তখন তারা এই বাজারে বিজ্ঞপ্তি প্রকাশ করে। যেমন: নির্ভুল সকেট প্লাগিং বা ক্ষুদ্র পার্টস এসেম্বলিং। বিশ্বজুড়ে ছড়িয়ে থাকা হিউম্যানয়েড রোবট অপারেটররা এই কাজের রিকোয়েস্ট গ্রহণ করে বাস্তব ডিভাইসে সম্পন্ন করেন। সফল আপলোডের পর তারা স্মার্ট চুক্তির মাধ্যমে সরাসরি $PIX ওয়ালেট রয়্যালটি সুবিধা ভোগ করেন।",
    keyConcepts: [
      {
        heading: "Token-Burn Common Library",
        bengaliHeading: "টোকেন-বার্ন কমন্স ব্যবস্থা",
        text: "Accessing community network datasets burns transaction tokens, creating consistent organic price support.",
        bengaliText: "পাবলিক তথ্যভান্ডার ব্যবহারের ফি সরাসরি টোকেন পুড়িয়ে দেওয়ার মেকানিজমে কাজ করে সরবরাহ হ্রাস করে।"
      },
      {
        heading: "Data Originator Rewards",
        bengaliHeading: "ডাটা সংগ্রাহক রিওয়ার্ড রয়্যালটি",
        text: "Routes a passive fraction of fee streams directly back to operators who captured the original physical loop.",
        bengaliText: "ডাটাবেজের প্রতি ভ্যালিডেশন বা রিড এক্সেস থেকে ক্ষুদ্র শতাংশ সরাসরি ডাটা সংগ্রহাকারীর ওয়ালেটে পাঠায়।"
      }
    ],
    visualExplanation: {
      desc: "Purchasing network telemetry package and routing the burnt fraction via community wallet.",
      bengaliDesc: "ট্রাইজেক্টরি ডাটাবেজ এক্সেস করার সময় ফি কেটে টোকেন বার্ন প্রক্রিয়ার রিয়েল কোড।",
      code: `  [Enterprise AI Buyer]  ➔  [Order Dataset Access]
                                        │
                         ┌──────────────┴──────────────┐
                         ▼ (Private Contract)          ▼ (Network-Owned Commons)
                  [Customer Pool Fee]             [Burn 15% $PIX Tokens]
                         │                                     │
                         ▼                                     ▼
                [Direct Provider Pay]               [Passive Royalty Pool]`
    },
    relatedTopicIds: ["eval-engine", "robots-as-miners", "tokenomics-pix"],
    previousTopicId: "eval-engine",
    nextTopicId: "quick-return-bonus"
  },
  {
    id: "quick-return-bonus",
    title: "Quick Return Bonus",
    bengaliTitle: "কুইক রিটার্ন বোনাস",
    subtitle: "OPERATOR_PRODUCTIVITY_MULTIPLIER",
    bengaliSubtitle: "অপারেটর_দ্রুত_কাজের_বোনাস_পদ্ধতি",
    badge: "QRB_BOOST",
    category: "Network & Economics",
    bengaliCategory: "নেটওয়ার্ক ও অর্থনীতি",
    color: "text-pink-500",
    icon: Award,
    overview: "The Quick Return Bonus (QRB) provides remote operators with a multiplicative payout multiplier based on task completion velocity. This motivates highly skilled execution while accumulating premium fast-trace training data.",
    bengaliOverview: "কুইক রিটার্ন বোনাস (QRB) হলো কাইনেমেটিএক কাজগুলো কম সময়ে সর্বোচ্চ দক্ষতায় শেষ করার জন্য রিমোট অপারেটরের বিশেষ বাড়তি পুরস্কার। এটি দ্রুততম সময়ে সূক্ষ্ম কাজের ডেটা রেশিও রেকর্ড করার গতি ত্বরান্বিত করে।",
    mainExplanation: "Not all trajectory demonstrations have equal value. Speed and efficiency represent core hallmarks of high quality. An operator who solves a manipulation task in 5 seconds provides a significantly more elegant training trace than an operator who struggles and completes it in 45 seconds. The Quick Return Bonus calculates trace efficiency dynamically and issues multiplicative $PIX bonuses to incentivize high-precision rapid operator guilds.",
    bengaliMainExplanation: "সব রিমোট সেশনের ডেমো ডাটার মান সমান নয়। কাজে গতি ও সিদ্ধান্ত গ্রহণই হলো এআই শেখার উত্তম উদাহরণ। যে অপারেটর মাত্র ৫ সেকেন্ডে চাবি ঘোরাতে পারেন, তার কাজের ট্র্যাজেক্টরি ডেটা ৪৫ সেকেন্ড ধরে হাত কাঁপানো চালকের চেয়ে কোটি গুণ শক্তিশালী। কুইক রিটার্ন বোনাস স্বয়ংক্রিয়ভাবে সময়ের অনুপাত পরিমাপ করে অপারেটরদের বাড়তি $PIX বোনাস প্রদান করে থাকে।",
    keyConcepts: [
      {
        heading: "Velocity Trajectory Premium",
        bengaliHeading: "দ্রুততম গতিতে সর্বোচ্চ বোনাস",
        text: "AI firms pay a premium for fast, fluid motion runs; this premium funds the direct operator bonus loop.",
        bengaliText: "উন্নত এআই ফার্মগুলো দ্রুত ও স্মুথ কাজের ডেটা কেনার পেছনে বেশি মূল্য পরিশোধ করে, যা বোনাসের যোগান দেয়।"
      },
      {
        heading: "Labor Coordination Incentive",
        bengaliHeading: "দক্ষ টিমের গিল্ড ইনসেনটিভ",
        text: "Encourages operator guilds to acquire premium VR headsets and low-latency gear to claim the maximum QRB.",
        bengaliText: "অপারেটর গিল্ডগুলোকে দামি ভিআর গিয়ার ও দ্রুত অপটিক্যাল মাউস ব্যবহার করে নিখুঁত সেশন করতে উদ্বুদ্ধ করে।"
      }
    ],
    visualExplanation: {
      desc: "Calculating QRB multiplier dynamically based on elapsed seconds and baseline task difficulty.",
      bengaliDesc: "কাজের সময় ও জটিলতার অনুপাত হিসাব করে কুইক রিটার্ন বোনাস নির্ধারণ কোড।",
      code: `  [Task Start] ➔ ➔ ➔ ➔ [Task Completed Successfully]
                                    │
                                    ▼ (Measure Elapsed Time)
                         ┌──────────┴──────────┐
                         ▼ (Fast: e.g. 5.1s)   ▼ (Slow: e.g. 45.0s)
                   [Apply High Multiplier]      [No Multiplier Appended]
                         │                              │
                         ▼                              ▼
                 [Bonus $PIX Issued]           [Standard Payout Only]`
    },
    relatedTopicIds: ["teleoperation", "human-in-the-loop", "tokenomics-pix"],
    previousTopicId: "data-marketplace",
    nextTopicId: "tokenomics-pix"
  },
  {
    id: "tokenomics-pix",
    title: "Tokenomics & $PIX",
    bengaliTitle: "$PIX টোকেনমিক্স",
    subtitle: "UTILITY_RESERVATIONS_UTILITY",
    bengaliSubtitle: "টোকেন_অর্থনীতি_ও_বিনিময়_কাঠামো",
    badge: "PIX_ECON",
    category: "Network & Economics",
    bengaliCategory: "নেটওয়ার্ক ও অর্থনীতি",
    color: "text-yellow-500",
    icon: Coins,
    overview: "Tokenomics under the PrismaX protocol coordinates resources using the utility token $PIX. Functioning as secure service reservations with floating spot values, token dynamics govern the clearing houses of physical task trades.",
    bengaliOverview: "$PIX টোকেনমিক্স হলো প্রিজম্যাক্স নেটওয়ার্কের কেন্দ্রীয় বিনিময় ও অর্থনীতি কাঠামো। রিয়েল-টাইমে কাজের চুক্তিপত্র বা নোড ব্যবহারের রিজার্ভেশন হিসেবে এই ইউটিলিটি টোকেনটি চরম গতিশীলতা দেয়।",
    mainExplanation: "At the foundation of the ecosystem, $PIX provides automated decentralized coordination. Fleet owners buy $PIX to request remote operator telemetry, AI companies use it to pay query fees for Large Action Models, and operators stake $PIX to earn high-tier workspace commissions. Managed via clearing houses legally bound to resolve exceptions fairly, the system forms a fully autonomous, transparent market.",
    bengaliMainExplanation: "প্রিজম্যাক্স ইকোসিস্টেমের প্রাণশক্তি হলো বিকেন্দ্রীভূত টোকেন অর্থনীতি। রোবটের জ্যামিতিক মালিকেরা অপারেটরদের পারিশ্রমিক দিতে $PIX টোকেন ব্যবহার করেন, এআই কোম্পানিগুলোকে ডাটা কিনতে $PIX বার্ন করতে হয় আর বেশি আয়ের সেশন অ্যাক্সেস করতে অপারেটরদের ওয়ালেটে টোকেন স্টেক করতে হয়। ক্লিয়ারিং হাউজের ফর্সা পরিচালনে এটি এক স্বয়ংক্রিয় বাজার গড়ে তোলে।",
    keyConcepts: [
      {
        heading: "Decentralized Clearing Houses",
        bengaliHeading: "বিকেন্দ্রীভূত ক্লিয়ারিং হাউজস",
        text: "Guarantees payment safety and handles quality disputes between robot clients and independent operators.",
        bengaliText: "রোবটের মালিকদের ডাটা এবং অপারেটর পেমেন্টের মাঝে স্বচ্ছ লেনেদেনের জামিনদার হিসেবে কাজ করে।"
      },
      {
        heading: "Staking Priority Allocation",
        bengaliHeading: "টোকেন স্টেকিং অগ্রাধিকার",
        text: "Staking native tokens increases trust scores, allowing operators to prioritize high-yield critical sessions.",
        bengaliText: "টোকেন লক বা স্টেক করে রাখলে কাজের তালিকায় অগ্রাধিকার ও উচ্চ কমিশন সহজে সংগ্রহ করা সম্ভব।"
      }
    ],
    visualExplanation: {
      desc: "Escrow clearing transaction settling payment once telemetry validation approves.",
      bengaliDesc: "ডাটা সফলভাবে আপলোডের পর ক্লিয়ারিং হাউজ এসক্রো থেকে পেমেন্ট নিষ্পত্তির প্রোগ্রাম।",
      code: `  [Client robot owner reserves $PIX in Escrow]
                                │
                                ▼
         [Operator conducts high-fidelity remote task session]
                                │
                                ▼ (Sends Multi-Modal Telemetry)
         ┌─────────────────────────────────────────────────────┐
         │             Eval Engine Validation Gate             │
         │  - Quality Score Assessment (Pass Threshold > 0.85) │
         └─────────────────────────────────────────────────────┘
                                │
                  ┌─────────────┴─────────────┐
                  ▼ (Passed)                  ▼ (Failed)
        [Release funds to Operator]   [Return Locked Funds to Client]`
    },
    relatedTopicIds: ["data-marketplace", "robots-as-miners", "quick-return-bonus"],
    previousTopicId: "quick-return-bonus",
    nextTopicId: "robots-as-miners"
  },
  {
    id: "robots-as-miners",
    title: "Robots-as-Miners",
    bengaliTitle: "মাইনার হিসেবে রোবট",
    subtitle: "PHYSICAL_HARDWARE_TOKEN_MINING",
    bengaliSubtitle: "হার্ডওয়্যার_টোকেন_মাইনিং_ধারণা",
    badge: "ROB_MINE",
    category: "Network & Economics",
    bengaliCategory: "নেটওয়ার্ক ও অর্থনীতি",
    color: "text-amber-600",
    icon: Hammer,
    overview: "Robots-as-Miners reframes robot ownership economics from a capital gamble into an investment asset. By actively recording high-frequency spatio-tactile data streams, physical machines passively yield consistent token rewards.",
    bengaliOverview: "রোবট-অ্যাজ-এ-মাইনার রোবটের মালিকানাকে চরম ব্যয়বহুল বা ঝুঁকিপূর্ণ কাজ থেকে সরাসরি লাভজনক সম্পদে রূপান্তর করে। কাজের সূক্ষ্ম গতিশীল ডাটা সংগ্রহের মাধ্যমে রোবট মেশিনগুলো নিষ্ক্রিয় অবস্থায়ও অবিরাম টোকেন মাইনিং করতে থাকে।",
    mainExplanation: "Purchasing general-purpose robotics hardware traditionally lacks business sense due to sparse software software systems. PrismaX breaks this limitation by turning hardware assets into data-mining nodes. A robot sitting idle in a warehouse can connect to the teleoperation channel, allowing distant operators to borrow its joints. Every session generates premium trajectories that mint tokens directly to its owner, paving a clear ROI from day one.",
    bengaliMainExplanation: "সফ্টওয়্যার ঘাটতির কারণে সাধারণ রোবট কিনে রাখা এক সময় চরম লোকসানি কাজ ছিল। প্রিজম্যাক্স রোবটকে বিটকয়েন বা ভার্চুয়াল মাইনার নোডের মতো সুযোগ দেয়। একটি অসচল রোবটকে ল্যাবে অন করে রিমোট চ্যানেলে রেখে দিলে অপারেটররা তা ব্যবহার করে অনুশীলন শুরু করবে, আর প্রতি কাজের মিনিট রেকর্ড হয়ে রোবটের মালিকের অ্যাকাউন্টে টোকেন জমা হবে।",
    keyConcepts: [
      {
        heading: "Premium Trajectory Valuation",
        bengaliHeading: "প্রিমিয়াম গতিপথের উচ্চ মূল্য",
        text: "Data collected during teleoperation is currently valued at $30-$50 per hour by foundational model developers.",
        bengaliText: "মানুষ পরিচালিত সূক্ষ্ম নড়াচড়ার ডাটা কোম্পানিদের কাছে প্রতি ঘন্টায় ৩০ থেকে ৫০ ডলার মূল্যে বিকোয়।"
      },
      {
        heading: "Idle State Passive Minting",
        bengaliHeading: "অসচল অবস্থায় টোকেন আয়",
        text: "Allows physical assets to passively mine network tokens by accepting simulation runs when inactive.",
        bengaliText: "রোবট হোস্টকে নিষ্ক্রিয় বা রাতের অলস সময়েও সিমুলেশন প্রসেসিংয়ের মাধ্যমে টোকেন উপহার পাওয়ার সুবিধা দেয়।"
      }
    ],
    visualExplanation: {
      desc: "Querying active robot mining status and calculating accrued trajectory rewards.",
      bengaliDesc: "সক্রিয় নোডের মাইনিং ডাটা রিড ও ট্র্যাজেক্টরি রয়্যালটি প্রসেসিং সোর্স কোড।",
      code: `        [Idle Robot Hardware Assembly]
                       │
                       ▼ (Connect to Teleoperation Channel)
        ┌──────────────────────────────────────────────┐
        │        Active Remote Teleop Session          │
        │  - Operator inputs real-time joint angles    │
        │  - Hardware records high-grade trajectories │
        └──────────────────────────────────────────────┘
                       │
                       ▼ (Process validated telemetry)
        [Accrued Passive $PIX Trajectory Rewards Issued]`
    },
    relatedTopicIds: ["fleet-operations", "tokenomics-pix", "roadmap-stage-1"],
    previousTopicId: "tokenomics-pix",
    nextTopicId: "roadmap-stage-1"
  },
  {
    id: "roadmap-stage-1",
    title: "Roadmap: Stage I",
    bengaliTitle: "রোডম্যাপ: প্রথম ধাপ",
    subtitle: "STAGE_I_SIM_TO_REAL_TRAINING",
    bengaliSubtitle: "১ম_ধাপ_টেলিঅপারেশন_ডাটা_সংগ্রহ",
    badge: "STAGE_I",
    category: "Future & Roadmap",
    bengaliCategory: "ভবিষ্যৎ ও রোডম্যাপ",
    color: "text-red-400",
    icon: Play,
    overview: "Stage I establishes the primary teleoperation protocols and visual data collection systems of PrismaX. Key activities prioritize bridging the initial sim-to-real training gaps and solving early hardware bootstrap bottlenecks.",
    bengaliOverview: "প্রথম ধাপের লক্ষ্য প্রিজম্যাক্স নেটওয়ার্কের প্রাথমিক টেলিঅপারেশনাল পরিকাঠামো ও ডাটা সংগ্রহের ভিত্তি তৈরি করা। প্রধান এজেন্ডা হলো সিম-টু-রিয়েল গ্যাপ দূর করা এবং প্রাথমিক রোবটের সংস্থাপন সমস্যা মিটিয়ে ফেলা।",
    mainExplanation: "At Stage I, global robot adoption is sparse, and operators are building initial experience. Reinforcement learning relies heavily on simulator retargeting of human inputs, which introduces precision gaps during real deployment. PrismaX community-driven data pools progressively overcome this variance. High-value data traces bootstrap the foundation layer, while organized operator guilds pool investments to bring robots online.",
    bengaliMainExplanation: "১ম ধাপে রোবটের সংখ্যা তুলনামূলকভাবে কম থাকে এবং চালকেরা প্রাথমিক কাজ শিখছে। সিমুলেটরে তৈরি ডেটা বাস্তব মোটরের কোণ নড়াচড়ায় ছোটখাটো বিচ্যুতি ঘটায়। প্রিজম্যাক্স কমিউনিটির ডাটা পুল এই তফাত বা বিভ্রান্তি ক্রমান্বয়ে মুছে ফেলে। অপারেটর গিল্ডগুলো একযোগে পুঁজি খাটানো শুরু করে এই ধাপে নোডের সংখ্যা বাড়াতে থাকে।",
    keyConcepts: [
      {
        heading: "Sim-to-Real Bridge",
        bengaliHeading: "সিম-টু-রিয়েল সেতু সৃষ্টি",
        text: "Enhances behavior prediction scores significantly by substituting artificial simulator data with real human telemetry.",
        bengaliText: "কৃত্রিম ট্রায়াল ডাটাকে বাস্তব মানুষের নড়াচড়ার ডাটা দিয়ে প্রতিস্থাপন করে মোটর চালনার দক্ষতা বহুগুণ বাড়ায়।"
      },
      {
        heading: "Cooperative Guild Bootstrap",
        bengaliHeading: "সমবায় গিল্ডের রোবট বুটস্ট্র্যাপ",
        text: "Enables distributed player networks to buy and share humanoid hardware costs to scale training sessions rapidly.",
        bengaliText: "বড় কোম্পানিদের তোয়াক্কা না করে গিল্ডের মাধ্যমে কয়েকজনে মিলে উন্নত রোবট নিয়ে এসে ডাটা কালেকশন শুরু করা।"
      }
    ],
    visualExplanation: {
      desc: "Stage I project status checklist validating teleoperation tunnel sync.",
      bengaliDesc: "প্রস্তুতিমূলক প্রথম ধাপের সিস্টেম কনফিগারেশন চেকলিস্ট সোর্স কোড।",
      code: `                   [Stage I Infrastructure Bootstrap]
                                   │
               ┌───────────────────┼───────────────────┐
               ▼                   ▼                   ▼
       [Teleop Tunnel Sync]  [Sim-to-Real Bridge] [Guild Staking Loop]
         (Active Channels)     (Trajectory Pools)    (Pools Formed)
               │                   │                   │
               └───────────────────┼───────────────────┘
                                   ▼
             [Stage I Hardware Validation Milestone Met]`
    },
    relatedTopicIds: ["robots-as-miners", "roadmap-stage-2", "simulation-systems"],
    previousTopicId: "robots-as-miners",
    nextTopicId: "roadmap-stage-2"
  },
  {
    id: "roadmap-stage-2",
    title: "Roadmap: Stage II",
    bengaliTitle: "রোডম্যাপ: দ্বিতীয় ধাপ",
    subtitle: "STAGE_II_FIELD_OPERATIONS",
    bengaliSubtitle: "২য়_ধাপ_বাস্তব_কাজের_ক্ষেত্রের_প্রসার",
    badge: "STAGE_II",
    category: "Future & Roadmap",
    bengaliCategory: "ভবিষ্যৎ ও রোডম্যাপ",
    color: "text-orange-500",
    icon: FastForward,
    overview: "Stage II shifts focus toward real-world field operations for end-users. Human operator fleets handle concrete, paid workspace tasks, while visual models gain continuous autonomous decision capability.",
    bengaliOverview: "দ্বিতীয় ধাপ আমাদের রোবটগুলোকে ডামি ল্যাব থেকে বের করে সরাসরি বাণিজ্যিক কাজের মাঠে নামিয়ে দেয়। অপারেটররা দূরবর্তী কারখানায় বেতনভুক্ত কাজ আঞ্জাম দেন আর এআই মডেলগুলো ক্রমশ স্বয়ংক্রিয় হয়ে উঠতে থাকে।",
    mainExplanation: "During Stage II, robots proliferate locally across industrial installations, light warehousing, and food service. Operators utilize latency-compensating edge prediction models to conduct high-speed manipulation. Passive visual data capture gathers massive momentum, enabling the training of next-generation foundation models that reach moderate degrees of autonomy from early Stage I traces.",
    bengaliMainExplanation: "২য় ধাপে রোবটের চাহিদা কারখানা, হালকা মাল পরিবহন ও খাদ্য পরিবেশনে বেশ বেড়ে যায়। অপারেটররা সংযোগের বিলম্ব মুছে ফেলার জন্য এআই মোশন প্রেডিকশন ড্রাইভার ব্যবহার করে অতি দ্রুত ও স্বাচ্ছন্দ্যে রোবট চালান। অন্যদিকে ক্যামেরার সাহায্যে অসচল সময়েও চারপাশের সাধারণ বস্তুর ডাটা সংগ্রহ বিপুল আকার ধারণ করে যা স্বয়ংক্রিয় কাজের ক্ষমতা বৃদ্ধি করে।",
    keyConcepts: [
      {
        heading: "Paid Out-of-Lab Runs",
        bengaliHeading: "ল্যাবের বাইরে বাণিজ্যিক কাজ",
        text: "Active hardware fleets completed certified manufacturing, home assistance, and logistics assignments for real clients.",
        bengaliText: "বাস্তব ক্লায়েন্টদের গুদামে মালামাল গুছানো বা বাসা বাড়িতে রোবটের মাধ্যমে পেইড সার্ভিসের সূচনা করা।"
      },
      {
        heading: "Latency Edge Predictors",
        bengaliHeading: "লেটেন্সি বা বিলম্ব এড়ানোর মোশন প্রেডিক্টর",
        text: "Integrates localized network-anticorrection models preventing control delays from interrupting operator focus.",
        bengaliText: "নেটওয়ার্কের বিলম্ব মুছে দিতে এআই পূর্বাভাস দিয়ে অপারেটরের হাতের স্পর্শ ও রোবটের পদক্ষেপকে এক মিলিবিন্দুতে ফিউশ করে।"
      }
    ],
    visualExplanation: {
      desc: "Stage II latency compensation activation module initializing network prediction parameters.",
      bengaliDesc: "২য় ধাপের গতি সংবেদনশীল লাইভ লেটেন্সি ফিল্টার অন করার সোর্স কোড।",
      code: `    [Human Operator Command Input]
                     │
                     ▼ (Network transmission delay)
         ┌──────────────────────────────────────┐
         │       Latency Edge Predictor         │
         │ - Compensates up to 35ms lag time    │
         │ - Simulates expected joint velocity  │
         └──────────────────────────────────────┘
                     │
                     ▼
       [Synchronized Fluid Real-Robot Execution]`
    },
    relatedTopicIds: ["roadmap-stage-1", "roadmap-stage-3", "fleet-operations"],
    previousTopicId: "roadmap-stage-1",
    nextTopicId: "roadmap-stage-3"
  },
  {
    id: "roadmap-stage-3",
    title: "Roadmap: Stage III",
    bengaliTitle: "রোডম্যাপ: তৃতীয় ধাপ",
    subtitle: "STAGE_III_HIGH_AUTONOMY_PRODUCTION",
    bengaliSubtitle: "৩য়_ধাপ_স্বায়ত্তশাসিত_গতি_ও_অটোনমি",
    badge: "STAGE_III",
    category: "Future & Roadmap",
    bengaliCategory: "ভবিষ্যৎ ও রোডম্যাপ",
    color: "text-green-400",
    icon: Sparkles,
    overview: "Stage III achieves full production-grade machine autonomy globally. The core network shifts toward providing fast cloud-based inference and decentralized execution channels for millions of independent robots.",
    bengaliOverview: "তৃতীয় ধাপে রোবটের স্বয়ংক্রিয় কাজের ক্ষমতা শতভাগে উন্নীত হয়। কেন্দ্রীয় নেটওয়ার্ক কোড তখন প্রসেসিং পাওয়ার ডেপ্লয়মেন্টে ও লক্ষ লক্ষ ডিভাইসদের স্বয়ংক্রিয় অর্থনৈতিক সংযোগে নিজেদের নিয়োজিত করে।",
    mainExplanation: "Stage III realizes the final vision of physical intelligence. Bounded spatial models trained throughout Stage I and II achieve zero-shot generalizability, executing complex operations autonomously. The PrismaX network transitions into a secure, cost-effective coordinator, facilitating secure machine-to-machine transactions, resource trade agreements, and decentralized inference across the globe.",
    bengaliMainExplanation: "৩য় ধাপে ফিজিক্যাল এআই তার আসল রূপ মেলে ধরে। প্রথম ও দ্বিতীয় ধাপে কোটি ট্রায়াল থেকে শেখা লার্জ অ্যাকশন মডেল জিরো-শট দক্ষতার অধিকারী হয়ে যায়, কোনো মানুষের রিমোট কন্ট্রোল প্রয়োজন হয় না। প্রিজম্যাক্স তখন সিকিউর কোঅর্ডিনেটরের দায়িত্ব পালন করে, যাতে রোবটগুলো নিজেদের মধ্যে কন্টাক্ট ও বিনিময় নিরাপদে করতে পারে।",
    keyConcepts: [
      {
        heading: "Zero-Shot Autonomy Expansion",
        bengaliHeading: "স্বয়ংক্রিয় জিরো-শট সম্পসারণ",
        text: "Enables millions of active hardware models to complete unprogrammed spatial sequences autonomously.",
        bengaliText: "রোবটগুলোকে কোনো নতুন নির্দেশনা বা কোডিং ছাড়াই জটিল কাজের কোঅর্ডিনেটস ডাইনামিকলি বুঝে নেওয়ার ক্ষমতা দেয়।"
      },
      {
        heading: "Decentralized Inference Grid",
        bengaliHeading: "বিকেন্দ্রীভূত ইনফারেন্স গ্রিড",
        text: "Hosts neural model checkpoints on edge servers, minimizing latency and transaction costs globally.",
        bengaliText: "এআই প্রসেসিংয়ের মডেল মগজকে এজ কম্পিউটারে বিভক্ত করে ক্লাউড সংযোগের চরম পেমেন্ট সাশ্রয় করে।"
      }
    ],
    visualExplanation: {
      desc: "Deploying model and setting autonomy loop active on Stage III.",
      bengaliDesc: "পূর্ণ স্বয়ংক্রিয় নোড অ্যাক্টিভেশনের কন্ট্রোল কোড।",
      code: `                     [Stage III Sovereign Autonomy]
                                   │
                    (Task Signal Broadcast Globally)
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
   [Zero-Shot Action Execution]             [Edge Inference Server Mesh]
     (Hardware tasks completed)               (Zero-latency local brain)
              │                                         │
              └────────────────────┬────────────────────┘
                                   ▼
                   [De-centralized Coordination]`
    },
    relatedTopicIds: ["roadmap-stage-2", "future-of-physical-ai", "tokenomics-pix"],
    previousTopicId: "roadmap-stage-2",
    nextTopicId: "motion-field-correction"
  },
  {
    id: "motion-field-correction",
    title: "Motion Field Correction",
    bengaliTitle: "মোশন ফিল্ড কারেকশন",
    subtitle: "OPTICAL_FLOW_RMS_MOTION_NORMALIZER",
    bengaliSubtitle: "ভিজুয়াল_ফ্যাক্টর_অপ্টিক্যাল_ফ্লো_কারেকশন",
    badge: "MOTION_C",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-blue-400",
    icon: Shuffle,
    overview: "Motion Field Correction isolates pure camera movement from foreground task trajectories. By evaluating optical flow inputs (WxHx3 tensor), it removes global camera translation, rotation, and dilation terms to verify authentic physical labor.",
    bengaliOverview: "মোশন ফিল্ড কারেকশন ছবির ব্যাকগ্রাউন্ডের ক্যামেরার অপ্রয়োজনীয় নড়াচড়াকে সামনের মূল কাজের অংশ থেকে সুনির্দিষ্টভাবে আলাদা করে। অপ্টিক্যাল ফ্লো (WxHx3 টেন্সর) ব্যবহারের মাধ্যমে এটি ক্যামেরার নিজস্ব ঝাঁকুনি বাদ দিয়ে ডাটা রেকর্ড নিখুঁত এবং শুদ্ধ করে তোলে।",
    mainExplanation: "When recording task videos, camera movement can easily distort the actual joint trajectories. PrismaX's Eval Engine runs a corrected motion field calculator over even-numbered frames. The algorithm fits a global motion model (encompassing translation, rotation, and dilation) and removes these movements. It computes the RMS flow magnitude before and after global correction, validating that the remaining values represent genuine, local physical action.",
    bengaliMainExplanation: "ক্যামেরা নড়ার কারণে মোটরের কাজের কৌণিক হারের তথ্য অনেক সময় ভুলভাবে রেকর্ড হয়। প্রিজম্যাক্স ইভাল ইঞ্জিন প্রতি জোড় সংখ্যক ভিডিও ফ্রেমে অপ্টিক্যাল ফ্লো ফিল্টার প্রয়োগ করে। এটি ব্যাকগ্রাউন্ডের ত্রিমাত্রিক ঘূর্ণন, সরণ ও সম্প্রসারণ বাদ দেয়। কারেকশন ব্যবহারের পূর্বের ও পরের আরএমএস (RMS) মান মেপে যদি নড়াচড়ার পার্থক্য ২০% এর কম বা স্প্যাম মনে হয় তবে তা ডাটা ভ্যালিডেশন থেকে উচ্ছেদ করা হয়।",
    keyConcepts: [
      {
        heading: "Optical Flow Tensor Isolation",
        bengaliHeading: "অপ্টিক্যাল ফ্লো টেনসর নিষ্কাশন",
        text: "Extracts direction and magnitude vectors for every pixel in a video frame to isolate core coordinates.",
        bengaliText: "ভিডিওর প্রতিটি পিক্সেলের নড়াচড়ার মাত্রা ও দিক বের করে খাঁটি কাজের ট্র্যাক রেকর্ড বজায় রাখে।"
      },
      {
        heading: "RMS Flow Compensation Check",
        bengaliHeading: "আরএমএস ক্ষতিপূরণ ভ্যালিডিট চেক",
        text: "Skips global correction if the post-processed Root-Mean-Square flow value is not at least 20% lower than raw states.",
        bengaliText: "কারেকশন ব্যবহারের পর মূল আরএমএস গোলকাকার পার্থক্যের হার ২০% এর কম হলে ডেটা বাতিল করে।"
      }
    ],
    visualExplanation: {
      desc: "Optical flow preprocessing function code to subtract background camera translation.",
      bengaliDesc: "ভিডিওর ব্যাকগ্রাউন্ড ক্যামেরা ঝাঁকুনি বিয়োগ করে মূল মুভমেন্ট সিঙ্ক করার সলভ প্রোগ্রাম।",
      code: ` [Raw Video Frame Sequent]  ➔  [Analyze Optical Flow Tensors]
                                            │
                                            ▼
                             ┌──────────────────────────────┐
                             │    Global Motion Estimator   │
                             │  - Subtract background panning│
                             │  - Compensate camera shake   │
                             └──────────────────────────────┘
                                            │
                                            ▼
                             [Core Physical Trajectory Only]`
    },
    relatedTopicIds: ["eval-engine", "machine-perception", "unsupervised-training"],
    previousTopicId: "roadmap-stage-3",
    nextTopicId: "unsupervised-training"
  },
  {
    id: "unsupervised-training",
    title: "Unsupervised Training",
    bengaliTitle: "আনসুপারভাইজড ট্রেনিং",
    subtitle: "PATTERN_LEARNING_FROM_UNLABELED_DATA",
    bengaliSubtitle: "লেবেল_ছাড়া_উন্নত_প্যাটার্ন_লার্নিং",
    badge: "UNSUPERV",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-teal-400",
    icon: BrainCircuit,
    overview: "Unsupervised Training extracts general, robust features from large unlabeled robotic streams. By applying trivial, continuous math objectives like masked modeling and next-token prediction, models grasp physical spatiotemporal behaviors.",
    bengaliOverview: "আনসুপারভাইজড ট্রেনিং রোবটের লেবেলবিহীন ভিডিও এবং মোটর ডেটার বিশাল প্রবাহ থেকে কাজের সুনির্দিষ্ট সাধারণ সূত্র বা ভিজ্যুয়াল এমবেডিংস বের করে। মাস্কড মডেলিং ও পরবর্তী কন্টেন্ট অনুমানের ছোট নিয়মে এটি কাজের গভীর জ্যামিতিক জ্ঞান শেখে।",
    mainExplanation: "Robotics is inherently a label-deficient domain. Manually annotating physical coordinates for every single action token is impossible at scale. PrismaX relies on unsupervised training models: we give the learning transformer simple, objective challenges (e.g., predict the missing pixel patches in an image, or compress a frame). This teaches the neural network highly generalizable, semantically rich features without human annotation.",
    bengaliMainExplanation: "বাস্তব ধাপে রোবটের জন্য প্রতিটি কাজের কোণ আর ক্যামেরা পিক্সেলের ওপর হাত দিয়ে নাম লিখে দেওয়া (ম্যানুয়াল অ্যানোটেশন) সময় ও খরচের দিক থেকে অসম্ভব। প্রিজম্যাক্স তাই স্বয়ং-শিক্ষণ বা আনসুপারভাইজড মডেলিং করে। এআই-কে সহজ একটি ধাঁধা দেওয়া হয় (যেমন ভিডিও ফ্রেমের গোলমাল অংশটি পূরণ করা বা ছবির রেজোলিউশন সংকুচিত করা)। এতে মডেলটি মানুষের সাহায্য ছাড়াই বস্তুর সঠিক জ্যামিতিক বৈশিষ্ট্য চিনে কাজ করতে শেখে।",
    keyConcepts: [
      {
        heading: "Next-Token Prediction",
        bengaliHeading: "নেক্সট-টোকেন প্রেডিকশন স্পিড",
        text: "Forces learning layers to project the subsequent state in sequence, teaching in-context behaviors smoothly.",
        bengaliText: "ধারাবাহিক লাইনের পরবর্তী গতিপথ বা সিগন্যাল কি হতে পারে তা অনুমান করতে বাধ্য করে গতি বাড়ায়।"
      },
      {
        heading: "Masked Modeling Extraction",
        bengaliHeading: "মাস্কড মডেলিং নিষ্কাশন কৌশল",
        text: "Predicts missing parts of a visual workspace layout, training neural networks to understand objects.",
        bengaliText: "কাজের ছবির কিছু অংশ বা পিক্সেল ঢেকে দিয়ে তা রোবটকে কল্পনা করার সুযোগ দিয়ে বোঝার ক্ষমতা বাড়ায়।"
      }
    ],
    visualExplanation: {
      desc: "Masked autoencoder code predicting missing spatial frames in training pipeline.",
      bengaliDesc: "ছবির অস্পষ্ট অংশ ভরাট করে জ্যামিতিক ধারণা শক্তিশালী করার ট্রেনার কোড।",
      code: ` [Unlabeled Raw Spatial Video]  ➔  [Randomly Mask 40% of Pixels]
                                                 │
                                                 ▼
                                     ┌──────────────────────┐
                                     │  Masked Autoencoder  │
                                     │  - Reconstruct frame │
                                     │  - Match boundaries  │
                                     └──────────────────────┘
                                                 │
                                                 ▼
                                      [Unsupervised Features]`
    },
    relatedTopicIds: ["machine-perception", "training-infrastructure", "video-compression-analogy"],
    previousTopicId: "motion-field-correction",
    nextTopicId: "video-compression-analogy"
  },
  {
    id: "video-compression-analogy",
    title: "Video Compression Analogy",
    bengaliTitle: "ভিডিও কম্প্রেশন সাদৃশ্য",
    subtitle: "SPATIOTEMPORAL_BANANA_PEELING_STORY",
    bengaliSubtitle: "ঐতিহাসিক_কলা_ছিলানো_সাদৃশ্য_গল্প",
    badge: "COMPRESS",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-fuchsia-400",
    icon: Compass,
    overview: "The Video Compression Analogy illustrates the link between video compression and physical robot control. By studying efficient spatiotemporal description pipelines, models autonomously learn exact instructions for physical interaction.",
    bengaliOverview: "ভিডিও কম্প্রেশন সাদৃশ্য বা কলা ছড়ানোর বিখ্যাত উদাহরণটি বুঝায় কীভাবে ভিডিও সংকুচিত করার বিজ্ঞান আর রোবটের মোটর নিয়ন্ত্রণের পদ্ধতি আসলে এক সুতোয় গাঁথা। এটি spatiotemporal ডেটা প্রমিতকরণের চরম বুদ্ধিদীপ্ত এক ধারণাগত ব্যাখ্যা।",
    mainExplanation: "Imagine you are in 1850 Britain and need to distribute banana peeling videos over horse networks with limited bandwidth. Simply describing it as 'peeling banana' fails because users have never seen bananas. An efficient compression algorithm must describe the physical interaction incrementally: 'grab stem 4mm down, snap at a 45-degree angle, pull down.' The densest description of video content is literally the execution code for physical action. Compression is equivalent to learning mechanical instructions.",
    bengaliMainExplanation: "কল্পনা করুন ১৮৫০ সালের ব্রিটেনে বসে আপনি ঘোড়ার গাড়ির নেটওয়ার্কে কম ব্যান্ডউইথে কলা ছিলানোর ভিডিও পাঠাতে চান। 'কলা ছিলাও' লিখলে কেউ বুঝবে না কারণ তারা কলা চেনে না। সফল ও সংকুচিত কম্প্রেশন কোড হবে কাজের নিখুঁত বিবরণী: 'কলাটির বোটা ৪ মিলিমিটার নিচে ধরো, ৪৫ ডিগ্রি কোণে হেলাও, পর্দা টেনে নামাও।' অর্থাৎ ভিডিওর ফ্রেমকে সবচেয়ে ছোট আকারে বোঝানোর চূড়ান্ত মাধ্যমটিই হলো ওই ভিডিওর মোটর অ্যাকশন কোড! কম্প্রেশন শেখা মানে কাজ করা শেখা।",
    keyConcepts: [
      {
        heading: "Spatiotemporal Description Density",
        bengaliHeading: "স্থান-কালিক কোড ঘনকীকরণ",
        text: "The best description format to compress visual change corresponds directly to physical motor commands.",
        bengaliText: "ভিডিওর পরিবর্তন বোঝার সবচেয়ে সূক্ষ্মতম কোড হলো ওই কাজের কাইনেমেটিএক মেকানিক্স নির্দেশিকা।"
      },
      {
        heading: "Bandwidth Compression Efficiency",
        bengaliHeading: "ব্যান্ডউইথ ব্যবহার সংকোচন দক্ষতা",
        text: "Proves that robust encoders trained to minimize memory size inherently generate meaningful physical features.",
        bengaliText: "প্রমাণ করে যে ফাইল সাইজ কমানোর চমৎকার এনকোডারগুলো স্বয়ংক্রিয়ভাবে বাস্তব কাজের কোড ধারণ করে থাকে।"
      }
    ],
    visualExplanation: {
      desc: "Simulating physical movement trajectory estimation based on H265 compression mechanics.",
      bengaliDesc: "ভিডিওর ফ্রেম ইন্টারপোলেশনের গতি থেকে কাজের ডাইনামিক ট্র্যাজেক্টরি হিসাব সোর্স কোড।",
      code: `  [Visual Feed Motion Diff]  ➔  [Highest Compression Encoder]
                                              │
                                              ▼ (Find optimal representation)
                                 ┌─────────────────────────┐
                                 │     Joint Motion Code   │
                                 │ - 'Grab handle 4mm'     │
                                 │ - 'Rotate 45 degrees'   │
                                 └─────────────────────────┘
                                              │
                                              ▼
                             [Direct Physical Actuator Commands]`
    },
    relatedTopicIds: ["unsupervised-training", "codebook-quantization", "eval-engine"],
    previousTopicId: "unsupervised-training",
    nextTopicId: "codebook-quantization"
  },
  {
    id: "codebook-quantization",
    title: "Codebook Quantization",
    bengaliTitle: "কোডবুক কোয়ান্টাইজেশন",
    subtitle: "ENCODER_DECODER_INFORMATION_BOTTLENECK",
    bengaliSubtitle: "এনকোডার_ডিকোডার_তথ্য_ফিল্টারিং",
    badge: "QUANTIZE",
    category: "Evaluations & Analytics",
    bengaliCategory: "মূল্যায়ন ও ডেটা সায়েন্স",
    color: "text-green-500",
    icon: Code,
    overview: "Codebook Quantization creates a deliberate information bottleneck inside neural networks. Replacing raw spatial features with the nearest representative vector within a structured codebook forces the encoder to learn robust, compact representations.",
    bengaliOverview: "কোডবুক কোয়ান্টাইজেশন হলো এআই নেটওয়ার্কের অভ্যন্তরে গাণিতিক ছাঁকুনি বসিয়ে প্রসেস সহজ করার উপায়। সেন্সরের ডেটা প্রবাহকে হুবহু না নিয়ে কোডবুকের সবচেয়ে কাছের নির্ধারিত ভেক্টরের মান বসিয়ে এটি সিস্টেম ব্যাকগ্রাউন্ডের কোলাহল পুরোপুরি দূর করে।",
    mainExplanation: "Raw sensory streams contain infinite detail and heavy noise. Storing every subtle variation leads to computational bloat. PrismaX passes raw spatial vectors through an encoder where features are quantized: we map each value to the closest pre-defined vector in a shared vocabulary (the codebook). We then add tiny noise to ensure stability and send the result to the decoder. This forces the model to ignore non-essential visual noise and represent physical actions using a highly efficient language.",
    bengaliMainExplanation: "সেন্সরের ডেটা প্রবাহে সীমাহীন আনকোরা পরিবর্তন ও ব্যাকগ্রাউন্ড নয়েজ বা কুয়াশা জমে থাকে। প্রতিটি ক্ষুদ্রাতিক্ষুদ্র বিন্দু রেকর্ড করতে গেলে প্রোগ্রাম স্তব্ধ হয়ে যাবে। প্রিজম্যাক্স এই ডেটাকে কোয়ান্টাইজ করে সাজিয়ে নেয়। আমরা প্রতিটি কাইনেটিক কমান্ডকে একটি নির্দিষ্ট শব্দকোষের (কোডবুক) নিকটতম ভেক্টরের সাথে প্রতিস্থাপন করি। এরপর হালকা গানিতিক নয়েজ সংযোগ করে ডিকোডারে পাঠাই। এই ছাঁকুনি সিস্টেমটিকে অপ্রয়োজনীয় দৃশ্য বাদ দিয়ে কাজের মূল রহস্য অল্প সিগন্যালে বুঝতে বাধ্য করে।",
    keyConcepts: [
      {
        heading: "Information Bottleneck Constraint",
        bengaliHeading: "তথ্য বা বাধার সুষম ছাঁকুনি",
        text: "Forces learning models to discard minor noise, preserving only the core physical dynamics and structural configurations.",
        bengaliText: "অপ্রয়োজনীয় দৃশ্য বা নয়েজ বাদ দিয়ে কেবল কাজের মূল ঘূর্ণন ও জ্যামিতিক নকশা ধারণ করতে চালিত করে।"
      },
      {
        heading: "Nearest-Neighbor Code Matching",
        bengaliHeading: "সবচেয়ে কাছের ভেক্টর সমন্বয় ম্যাপিং",
        text: "Maps high-dimensional visual points back to standardized, fixed codebook vectors autonomously.",
        bengaliText: "ছবির জটিল পিক্সেল কোঅর্ডিনেট সংকেতকে স্ট্যান্ডার্ড কোডবুক ভেক্টরে সহজে রুপান্তরিত করে।"
      }
    ],
    visualExplanation: {
      desc: "Codebook nearest neighbor quantization mathematical implementation code.",
      bengaliDesc: "কোডবুকের সবচেয়ে কাছের ম্যাথমেটিক্যাল ভেক্টর নির্বাচন করার কাজের সোর্স কোড।",
      code: `  [Raw High-Dimensional Vectors]  ➔  [Pass Through Information Bottleneck]
                                                 │
                                                 ▼
                                     ┌───────────────────────┐
                                     │ Nearest-Neighbor Map  │
                                     │ - Group close vectors │
                                     │ - Apply stable noise  │
                                     └───────────────────────┘
                                                 │
                                                 ▼
                                     [Quantized Codebook Tokens]`
    },
    relatedTopicIds: ["video-compression-analogy", "unsupervised-training", "what-is-prismax"],
    previousTopicId: "video-compression-analogy",
    nextTopicId: "what-is-prismax"
  }
];

export const getLocalizedCategory = (category: string, lang: Language): string => {
  const translationsMap: Record<string, string> = {
    'Introduction & Core': lang === 'bn' ? 'মূল প্রযুক্তি এবং পরিচিতি' : lang === 'hi' ? 'मुख्य तकनीक और परिचय' : lang === 'zh' ? '核心技术与介绍' : lang === 'ur' ? 'بنیادی ٹیکنالوجی اور تعارف' : lang === 'vi' ? 'Công nghệ lõi & Giới thiệu' : lang === 'uk' ? 'Вступ та Основи' : lang === 'in' ? 'Teknologi Inti & Pengantar' : 'Introduction & Core',
    'Robot Control & Operations': lang === 'bn' ? 'নিয়ন্ত্রণ ও অপারেশন' : lang === 'hi' ? 'নিয়ন্ত্রণ এবং পরিচালনা' : lang === 'zh' ? '控制与操作' : lang === 'ur' ? 'کنٹرول اور آپریشنز' : lang === 'vi' ? 'Control & Operations' : lang === 'uk' ? 'Керування та Операції' : lang === 'in' ? 'Kontrol & Operasi' : 'Robot Control & Operations',
    'Network & Economics': lang === 'bn' ? 'নেটওয়ার্ক ও ইকোনমি' : lang === 'hi' ? 'नेटवर्क और अर्थव्यवस्था' : lang === 'zh' ? '网络与经济' : lang === 'ur' ? 'نیٹ ورک اور معیشت' : lang === 'vi' ? 'Mạng lưới & Kinh tế' : lang === 'uk' ? 'Мережа та Економіка' : lang === 'in' ? 'Jaringan & Ekonomi' : 'Network & Economics',
    'Evaluations & Analytics': lang === 'bn' ? 'মূল্যায়ন ও কোয়ালিটি' : lang === 'hi' ? 'विश्लेषण और गुणवत्ता' : lang === 'zh' ? '评估与分析' : lang === 'ur' ? 'تجزیات اور معیار' : lang === 'vi' ? 'Phân tích & Đánh giá' : lang === 'uk' ? 'Оцінка та Аналітика' : lang === 'in' ? 'Analisis & Kualitas' : 'Evaluations & Analytics',
    'Future & Roadmap': lang === 'bn' ? 'ভবিষ্যত ও রোডম্যাপ' : lang === 'hi' ? 'भविष्य और रोडमैप' : lang === 'zh' ? '前景与路线图' : lang === 'ur' ? 'مستقبل اور روڈ میپ' : lang === 'vi' ? 'Tương lai & Thông số' : lang === 'uk' ? 'Майбутнє та Дорожня карта' : lang === 'in' ? 'Masa Depan & Spesifikasi' : 'Future & Roadmap'
  };
  return translationsMap[category] || category;
};

export const getArticleById = (id: string, currentLanguage: Language) => {
  const article = knowledgeArticles.find(a => a.id === id);
  if (!article) return null;

  if (currentLanguage === 'in') {
    const inTrans = indonesianKnowledgeTranslations[id];
    if (inTrans) {
      return {
        id: article.id,
        title: inTrans.title,
        subtitle: inTrans.subtitle,
        overview: inTrans.overview,
        mainExplanation: inTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: inTrans.keyConcepts[idx]?.heading || c.heading,
          text: inTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: inTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedIn = indonesianKnowledgeTranslations[rid];
          if (matchedIn) return matchedIn.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  if (currentLanguage === 'uk') {
    const ukTrans = ukrainianKnowledgeTranslations[id];
    if (ukTrans) {
      return {
        id: article.id,
        title: ukTrans.title,
        subtitle: ukTrans.subtitle,
        overview: ukTrans.overview,
        mainExplanation: ukTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: ukTrans.keyConcepts[idx]?.heading || c.heading,
          text: ukTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: ukTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedUk = ukrainianKnowledgeTranslations[rid];
          if (matchedUk) return matchedUk.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  if (currentLanguage === 'vi') {
    const viTrans = vietnameseKnowledgeTranslations[id];
    if (viTrans) {
      return {
        id: article.id,
        title: viTrans.title,
        subtitle: viTrans.subtitle,
        overview: viTrans.overview,
        mainExplanation: viTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: viTrans.keyConcepts[idx]?.heading || c.heading,
          text: viTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: viTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedVi = vietnameseKnowledgeTranslations[rid];
          if (matchedVi) return matchedVi.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  if (currentLanguage === 'hi') {
    const hiTrans = hindiKnowledgeTranslations[id];
    if (hiTrans) {
      return {
        id: article.id,
        title: hiTrans.title,
        subtitle: hiTrans.subtitle,
        overview: hiTrans.overview,
        mainExplanation: hiTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: hiTrans.keyConcepts[idx]?.heading || c.heading,
          text: hiTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: hiTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedHi = hindiKnowledgeTranslations[rid];
          if (matchedHi) return matchedHi.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  if (currentLanguage === 'zh') {
    const zhTrans = chineseKnowledgeTranslations[id];
    if (zhTrans) {
      return {
        id: article.id,
        title: zhTrans.title,
        subtitle: zhTrans.subtitle,
        overview: zhTrans.overview,
        mainExplanation: zhTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: zhTrans.keyConcepts[idx]?.heading || c.heading,
          text: zhTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: zhTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedZh = chineseKnowledgeTranslations[rid];
          if (matchedZh) return matchedZh.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  if (currentLanguage === 'ur') {
    const urTrans = urduKnowledgeTranslations[id];
    if (urTrans) {
      return {
        id: article.id,
        title: urTrans.title,
        subtitle: urTrans.subtitle,
        overview: urTrans.overview,
        mainExplanation: urTrans.mainExplanation,
        keyConcepts: article.keyConcepts.map((c, idx) => ({
          heading: urTrans.keyConcepts[idx]?.heading || c.heading,
          text: urTrans.keyConcepts[idx]?.text || c.text
        })),
        visualExplanation: {
          desc: urTrans.visualDesc || article.visualExplanation.desc,
          code: article.visualExplanation.code
        },
        relatedTopics: article.relatedTopicIds.map(rid => {
          const matchedUr = urduKnowledgeTranslations[rid];
          if (matchedUr) return matchedUr.title;
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
        relatedTopicIds: article.relatedTopicIds,
        previousTopicId: article.previousTopicId,
        nextTopicId: article.nextTopicId,
        category: getLocalizedCategory(article.category, currentLanguage),
        badge: article.badge,
        color: article.color,
        icon: article.icon
      };
    }
  }

  const isBn = currentLanguage === 'bn';

  return {
    id: article.id,
    title: isBn ? article.bengaliTitle : article.title,
    subtitle: isBn ? article.bengaliSubtitle : article.subtitle,
    overview: isBn ? article.bengaliOverview : article.overview,
    mainExplanation: isBn ? article.bengaliMainExplanation : article.mainExplanation,
    keyConcepts: article.keyConcepts.map(c => ({
      heading: isBn ? c.bengaliHeading : c.heading,
      text: isBn ? c.bengaliText : c.text
    })),
    visualExplanation: {
      desc: isBn ? article.visualExplanation.bengaliDesc : article.visualExplanation.desc,
      code: article.visualExplanation.code
    },
    relatedTopics: isBn 
      ? article.relatedTopicIds.map(rid => {
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.bengaliTitle : rid;
        })
      : article.relatedTopicIds.map(rid => {
          const matched = knowledgeArticles.find(item => item.id === rid);
          return matched ? matched.title : rid;
        }),
    relatedTopicIds: article.relatedTopicIds,
    previousTopicId: article.previousTopicId,
    nextTopicId: article.nextTopicId,
    category: getLocalizedCategory(article.category, currentLanguage),
    badge: article.badge,
    color: article.color,
    icon: article.icon
  };
};
