import React from 'react';
import { robotsData, translations } from '../data';
import { Robot, Language } from '../types';
import { ShieldCheck, Layers, Gauge, Target } from 'lucide-react';

interface FleetProps {
  currentLanguage: Language;
  onSelectRobot?: (robot: Robot) => void;
}

export default function RobotFleet({ currentLanguage, onSelectRobot }: FleetProps) {
  // Select translation
  const t = {
    title: currentLanguage === 'bn' ? 'রোবট বহর মোতায়েন' : currentLanguage === 'hi' ? 'रोबोट बेड़े की तैनाती' : currentLanguage === 'vi' ? 'Triển khai Đội ngũ Robot' : 'Robot Deployment',
    subtitle: currentLanguage === 'bn' ? 'স্বাগতম! আপনাকে সাহায্য করার জন্য নির্বাচিত আমাদের রোবট বহর দেখে নিন...' : currentLanguage === 'hi' ? 'स्वागत है! आपकी सहायता के लिए चुने गए हमारे रोबोट बेड़े से मिलें...' : currentLanguage === 'vi' ? 'Chào mừng! Gặp gỡ đội ngũ robot của chúng tôi được lựa chọn để giúp bạn...' : 'Welcome! Meet our fleet of robots selected to help you...',
    desc: currentLanguage === 'bn' 
      ? 'প্রিজম্যাক্স বিভিন্ন ব্র্যান্ডের রোবটিক ডিভাইসে জটিল কোড ব্যবহারের ঝামেলা দূর করে। এই অত্যাধুনিক ফিজিক্যাল রোবট সমূহ সরাসরি ট্রেনিং মডেলে গতিবিধি পাঠাতে সম্পূর্ণভাবে সক্ষম।'
      : currentLanguage === 'hi'
      ? 'PrismaX बहु-विक्रेता हार्डवेयर अमूर्तता प्रदान करता है। ये उन्नत भौतिक एजेंट स्थानिक निर्देशांकों में हैप्टिक टेलीमेट्री अनुक्रम प्रसारित करने के लिए पूरी तरह से प्रमाणित हैं।'
      : currentLanguage === 'vi'
      ? 'PrismaX cung cấp khả năng trừu tượng hóa phần cứng đa nhà cung cấp liền mạch. Các tác nhân vật lý tiên tiến này được chứng nhận đầy đủ để truyền chuỗi đo lường xúc giác trực tiếp đến các tọa độ không gian tuyệt đối.'
      : 'PrismaX delivers seamless multi-vendor hardware abstraction. These advanced physical agents are fully certified to transmit haptic telemetry sequences directly to absolute spatial coordinates.',
    manufacturers: currentLanguage === 'bn' ? 'প্রস্তুতকারক' : currentLanguage === 'hi' ? 'निर्माता' : 'MANUFACTURER',
    hardware: currentLanguage === 'bn' ? 'হার্ডওয়্যার' : currentLanguage === 'hi' ? 'हार्डवेयर' : 'HARDWARE',
  };

  // Helper to render customized SVG blueprint for each robot
  const renderRobotVector = (id: string) => {
    switch(id) {
      case 'g1': // Unitree G1 - lightweight agile humanoid
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="50" cy="22" r="6" strokeWidth="2" /> {/* Head */}
            <line x1="50" y1="28" x2="50" y2="55" strokeWidth="2" /> {/* Torso */}
            <line x1="50" y1="34" x2="33" y2="44" /> {/* Shoulder L */}
            <line x1="33" y1="44" x2="28" y2="58" /> {/* Arm L */}
            <line x1="50" y1="34" x2="67" y2="40" /> {/* Shoulder R */}
            <line x1="67" y1="40" x2="75" y2="54" /> {/* Arm R (waving, matching G1 image) */}
            <line x1="50" y1="55" x2="42" y2="72" /> {/* Hip to Knee L */}
            <line x1="42" y1="72" x2="44" y2="88" strokeWidth="1.5" /> {/* Knee to Foot L */}
            <line x1="50" y1="55" x2="58" y2="72" /> {/* Hip to Knee R */}
            <line x1="58" y1="72" x2="62" y2="88" strokeWidth="1.5" /> {/* Knee to Foot R */}
            <circle cx="50" cy="22" r="1.5" fill="currentColor" /> {/* Visor */}
            <line x1="35" y1="88" x2="65" y2="88" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" /> {/* Ground reference */}
          </svg>
        );
      case 'walker': // Ubtech Walker - stout humanoid structure
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="44" y="15" width="12" height="10" rx="3" strokeWidth="2" /> {/* Stout Head */}
            <rect x="42" y="27" width="16" height="26" rx="4" /> {/* Square Torso */}
            <line x1="39" y1="30" x2="30" y2="45" /> {/* Arm L */}
            <line x1="30" y1="45" x2="30" y2="58" />
            <line x1="61" y1="30" x2="70" y2="42" /> {/* Arm R */}
            <line x1="70" y1="42" x2="70" y2="55" />
            <line x1="45" y1="53" x2="45" y2="70" /> {/* Stout Legs L */}
            <line x1="45" y1="70" x2="42" y2="88" />
            <line x1="55" y1="53" x2="55" y2="70" /> {/* Stout Legs R */}
            <line x1="55" y1="70" x2="58" y2="88" />
            <line x1="43" y1="20" x2="57" y2="20" strokeWidth="2" stroke="currentColor" /> {/* Visor band */}
            <line x1="30" y1="88" x2="70" y2="88" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
          </svg>
        );
      case 'reachy2': // Reachy 2 - Upper body dual robotic arm on post, camera head
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="42" y="12" width="16" height="8" rx="2" /> {/* Camera array head */}
            <line x1="50" y1="20" x2="50" y2="28" strokeWidth="3" /> {/* Neck post */}
            <path d="M36,28 L64,28 L58,55 L42,55 Z" fill="none" stroke="currentColor" strokeWidth="2" /> {/* Torso shell */}
            <circle cx="36" cy="32" r="4" fill="currentColor" /> {/* Shoulder Joints L */}
            <circle cx="64" cy="32" r="4" fill="currentColor" /> {/* Shoulder Joints R */}
            {/* Multi-jointed arm Left */}
            <line x1="32" y1="32" x2="20" y2="45" strokeWidth="1.8" />
            <line x1="20" y1="45" x2="24" y2="60" strokeWidth="1.5" />
            {/* Multi-jointed arm Right */}
            <line x1="68" y1="32" x2="80" y2="45" strokeWidth="1.8" />
            <line x1="80" y1="45" x2="76" y2="60" strokeWidth="1.5" />
            <line x1="50" y1="55" x2="50" y2="88" strokeWidth="3" /> {/* Base mounting post */}
            <circle cx="50" cy="88" r="14" strokeWidth="1.5" /> {/* Spherical wheels base */}
          </svg>
        );
      case 'alex': // Boardwalk Alex - Torso, bulky actuators, heavy industrial
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="45" y="14" width="10" height="10" rx="1" fill="currentColor" /> {/* Bulk head */}
            <path d="M30,26 L70,26 L65,58 L35,58 Z" strokeWidth="2.5" /> {/* Heavy metal chest */}
            {/* Actuator arm Left */}
            <line x1="28" y1="30" x2="16" y2="46" strokeWidth="3" />
            <line x1="16" y1="46" x2="24" y2="64" strokeWidth="2" />
            {/* Actuator arm Right */}
            <line x1="72" y1="30" x2="84" y2="46" strokeWidth="3" />
            <line x1="84" y1="46" x2="76" y2="64" strokeWidth="2" />
            <line x1="42" y1="58" x2="38" y2="88" strokeWidth="2" /> {/* Heavy industrial desk attachment frame */}
            <line x1="58" y1="58" x2="62" y2="88" strokeWidth="2" />
          </svg>
        );
      case 'mirokai': // Mirokai - Sphere assistance, round details
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="50" cy="22" rx="9" ry="12" strokeWidth="1.8" /> {/* Head design */}
            <path d="M41,18 Q50,6 59,18" strokeWidth="1.5" /> {/* Horns element */}
            <path d="M38,32 Q50,30 62,32 L56,60 L44,60 Z" /> {/* Rounded chest */}
            <line x1="38" y1="35" x2="30" y2="48" /> {/* Slim hand arms */}
            <line x1="30" y1="48" x2="34" y2="62" />
            <line x1="62" y1="35" x2="70" y2="48" />
            <line x1="70" y1="48" x2="66" y2="62" />
            <line x1="50" y1="60" x2="50" y2="74" strokeWidth="2" /> {/* Connecting post */}
            <circle cx="50" cy="80" r="10" strokeWidth="2" /> {/* Bottom sphere balance ball */}
          </svg>
        );
      case 'go2w': // Go2-W - Wheeled bipedal/quadruped dog robot, lidar sensor
        return (
          <svg className="w-full h-48 text-brand-accent/45 group-hover:text-brand-accent transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="25" y="30" width="38" height="20" rx="6" strokeWidth="2" /> {/* Main dog chassis */}
            <circle cx="68" cy="28" r="4" fill="currentColor" /> {/* Lidar eye sensor dome */}
            <line x1="60" y1="36" x2="68" y2="28" strokeWidth="2" /> {/* Lidar mounting link */}
            {/* Quadruped leg Left Front */}
            <line x1="30" y1="46" x2="22" y2="68" strokeWidth="2.2" />
            <line x1="22" y1="68" x2="26" y2="82" strokeWidth="1.8" />
            <circle cx="26" cy="82" r="3" fill="currentColor" /> {/* Wheel base */}
            {/* Quadruped leg Right Front */}
            <line x1="58" y1="46" x2="52" y2="68" strokeWidth="2.2" />
            <line x1="52" y1="68" x2="56" y2="82" strokeWidth="1.8" />
            <circle cx="56" cy="82" r="3" fill="currentColor" /> {/* Wheel base */}
            {/* Rear legs (faint) */}
            <line x1="36" y1="46" x2="30" y2="65" strokeWidth="1.5" opacity="0.6" />
            <line x1="30" y1="65" x2="33" y2="80" strokeWidth="1.2" opacity="0.6" />
            <circle cx="33" cy="80" r="2.5" fill="currentColor" opacity="0.6" />
            <line x1="52" y1="46" x2="46" y2="65" strokeWidth="1.5" opacity="0.6" />
            <line x1="46" y1="65" x2="49" y2="80" strokeWidth="1.2" opacity="0.6" />
            <circle cx="49" cy="80" r="2.5" fill="currentColor" opacity="0.6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-transparent text-brand-white border-y border-brand-cream/10 relative" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono tracking-[0.3em] text-[#C5A880] uppercase block">
              {t.hardware}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight mt-2 leading-none text-brand-white">
              {t.subtitle}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs font-mono text-brand-cream/40 bg-brand-black/50 border border-brand-cream/5 px-3 py-1.5 rounded-full inline-block">
              {translations[currentLanguage].taglineFleet} • {robotsData.length} {currentLanguage === 'bn' ? 'অনলাইন' : currentLanguage === 'hi' ? 'ऑनलाइन' : currentLanguage === 'ur' ? 'آن لائن' : currentLanguage === 'vi' ? 'TRỰC TUYẾN' : 'ONLINE'}
            </span>
          </div>
        </div>

        {/* Fleet Grid Showcase (recreating Image 13 layout exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="fleet-showcase-grid">
          {robotsData.map((robot) => {
            const tags = currentLanguage === 'bn' 
              ? robot.bengaliTags 
              : currentLanguage === 'hi' 
              ? robot.hindiTags 
              : currentLanguage === 'zh' 
              ? robot.chineseTags 
              : currentLanguage === 'ur' && robot.urduTags 
              ? robot.urduTags 
              : currentLanguage === 'vi' && robot.vietnameseTags
              ? robot.vietnameseTags
              : robot.tags;
            const desc = currentLanguage === 'bn' 
              ? robot.bengaliDescription 
              : currentLanguage === 'hi' 
              ? robot.hindiDescription 
              : currentLanguage === 'zh' 
              ? robot.chineseDescription 
              : currentLanguage === 'ur' && robot.urduDescription 
              ? robot.urduDescription 
              : currentLanguage === 'vi' && robot.vietnameseDescription
              ? robot.vietnameseDescription
              : robot.description;
            return (
              <div
                key={robot.id}
                onClick={() => onSelectRobot?.(robot)}
                className="group relative p-6 rounded-lg text-left immersive-card flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Header containing manufacturer & ID code */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-brand-cream/40 uppercase tracking-widest border-b border-brand-cream/5 pb-3.5 mb-5">
                    <span>{robot.maker}</span>
                    <span className="text-brand-accent">{robot.id.toUpperCase()}-X9</span>
                  </div>

                  {/* Vector schematic visual placeholder inside a dark bento frame */}
                  <div className="bg-[#121213] rounded-lg p-4 mb-6 relative border border-brand-white/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.06)_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none"></div>
                    {renderRobotVector(robot.id)}
                  </div>

                  {/* Robot Title */}
                  <h3 className="text-xl font-serif font-medium text-brand-white tracking-tight">
                    {robot.name}
                  </h3>
                  
                  {/* Robot Type */}
                  <span className="text-[10px] font-mono text-brand-cream/35 tracking-wider uppercase block mt-0.5">
                    {robot.type}
                  </span>

                  {/* Robot Short Description */}
                  <p className="text-xs font-sans text-brand-cream/60 mt-3 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Tags mapping (like Image 13) */}
                <div className="mt-6 pt-4 border-t border-brand-cream/5">
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full border border-brand-cream/10 text-[10px] font-sans font-medium text-brand-cream/70 bg-brand-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
