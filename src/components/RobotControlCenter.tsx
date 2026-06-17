import React, { useState, useEffect } from 'react';
import { roboticArms, translations } from '../data';
import { RoboticArm, Language } from '../types';
import { Radio, Cpu, Activity, Play, Wifi, Thermometer, ShieldAlert, Key, Check } from 'lucide-react';

interface ControlCenterProps {
  currentLanguage: Language;
}

const getLocalizedArmDesc = (armId: string, lang: Language) => {
  switch (lang) {
    case 'bn':
      if (armId === 'arm_black' || armId === 'arm_gold') return 'আপনার দক্ষতা অনুশীলন করতে সারিবদ্ধ দলে যোগ দিন। এমপ্লিফায়ার এবং ইনোভেটরদের জন্য উন্মুক্ত।';
      if (armId === 'arm_arena') return 'উচ্চ-মাত্রার সেশনের জন্য ডিজাইন করা হয়েছে। প্রথমবার ব্যবহারকারী এবং ইনোভেটরদের জন্য উন্মুক্ত।';
      return 'ভিআইপি, অংশীদার এবং বিশেষ অ্যাক্টিভেশনের জন্য সংরক্ষিত। অ্যাক্সেসের জন্য কোড প্রয়োজন এবং অনুষ্ঠানভেদে পরিবর্তিত হতে পারে।';
    case 'hi':
      if (armId === 'arm_black' || armId === 'arm_gold') return 'अपनी स्किल्स का अभ्यास करने के लिए कतार में शामिल हों। एम्पलीफायर्स और इनोवेटर्स के लिए खुला है।';
      if (armId === 'arm_arena') return 'उच्च-मात्रा वाले सत्रों के लिए डिज़ाइन किया गया। पहली बार उपयोगकर्ता और इनोवेटर्स के लिए खुला है।';
      return 'वीआईपी, भागीदारों और विशेष गतिविधियों के लिए आरक्षित। एक्सेस के लिए कोड की आवश्यकता होती है और इवेंट के अनुसार भिन्न हो सकता है।';
    default:
      if (armId === 'arm_black' || armId === 'arm_gold') return 'Join the queue to practice your skills. Open to Amplifiers and Innovators.';
      if (armId === 'arm_arena') return 'Designed for high-volume sessions. Open to first-time users and Innovators.';
      return 'Reserved for VIPs, partners, and special activations. Access requires a code and may vary by event.';
  }
};

const getEstablishLinkText = (lang: Language) => {
  switch (lang) {
    case 'bn':
      return 'লাইভ ডেটা স্ট্রিমিং পেতে টেলিঅপারেশন লিংক চালু করুন।';
    case 'hi':
      return 'लाइव डेटा स्ट्रीमिंग प्राप्त करने के लिए टेलीऑपरेशन लिंक स्थापित करें।';
    default:
      return 'Establish a telemetry link to receive telemetry logs.';
  }
};

const getLocalizedActiveStream = (lang: Language) => {
  switch (lang) {
    case 'bn': return 'সক্রিয় স্ট্রিমিং';
    case 'hi': return 'सक्रिय स्ट्रीमिंग';
    default: return 'ACTIVE STREAM';
  }
};

const getLocalizedEnterNodeAccessCode = (lang: Language) => {
  switch (lang) {
    case 'bn': return 'অ্যাক্সেস কোড দিন';
    case 'hi': return 'एक्सेस कोड दर्ज करें';
    default: return 'Enter Node Access Code';
  }
};

const getLocalizedPrivateArmReserved = (lang: Language) => {
  switch (lang) {
    case 'bn': return 'প্রাইভেট আর্মটি ভিআইপি ও ডেভেলপারদের জন্য সংরক্ষিত। এটি আনলক করতে "2026" অথবা "PRISMAX" ব্যবহার করুন।';
    case 'hi': return 'प्राइवेट आर्म वीआईपी परीक्षकों, कॉर्पोरेट भागीदारों और डेवलपर्स के लिए आरक्षित है। अनलॉक करने के लिए कोड "2026" या "PRISMAX" दर्ज करें।';
    default: return 'Private Arm is reserved for VIP testers, corporate partners, and developers. Input code "2026" or "PRISMAX" to unlock.';
  }
};

const getLocalizedValidateNodeAccess = (lang: Language) => {
  switch (lang) {
    case 'bn': return 'সংযোগ কোড নিশ্চিত করুন';
    case 'hi': return 'कनेक्शन कोड सत्यापित करें';
    default: return 'VALIDATE NODE ACCESS';
  }
};

const getLocalizedStatusText = (status: string, lang: Language) => {
  if (lang === 'bn') {
    if (status === 'active') return 'সক্রিয়';
    if (status === 'reserved') return 'সংরক্ষিত';
    return 'অফলাইন';
  } else if (lang === 'hi') {
    if (status === 'active') return 'सक्रिय';
    if (status === 'reserved') return 'आरक्षित';
    return 'ऑफ़लाइन';
  } else {
    return status.toUpperCase();
  }
};

export default function RobotControlCenter({ currentLanguage }: ControlCenterProps) {
  const t = translations[currentLanguage];
  const [selectedArm, setSelectedArm] = useState<RoboticArm>(roboticArms[1]); // Gold is active by default
  const [isConnected, setIsConnected] = useState(false);
  const [angleX, setAngleX] = useState(45); // Base angle in degrees
  const [angleY, setAngleY] = useState(60); // Elbow angle in degrees
  const [gripForce, setGripForce] = useState(20); // Gripper gap %
  
  // Simulated telemetry state
  const [latency, setLatency] = useState(28);
  const [temp, setTemp] = useState(42.5);
  const [signal, setSignal] = useState(98);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  
  // Passcode state for Reserved Arm
  const [enteredPasscode, setEnteredPasscode] = useState('');
  const [isPasscodeUnlocked, setIsPasscodeUnlocked] = useState(false);
  const [passcodeError, setPasscodeError] = useState(false);

  // Fluctuating telemetry simulation
  useEffect(() => {
    if (!isConnected) return;
    
    const interval = setInterval(() => {
      // Small natural random fluctuations
      setLatency(prev => Math.max(12, Math.min(85, prev + Math.floor(Math.random() * 9) - 4)));
      setTemp(prev => Math.max(38, Math.min(52, prev + (Math.random() * 0.6) - 0.3)));
      setSignal(prev => Math.max(92, Math.min(100, prev + Math.floor(Math.random() * 3) - 1)));
    }, 1500);

    return () => clearInterval(interval);
  }, [isConnected]);

  // Handle arm selection Change
  const handleSelectArm = (arm: RoboticArm) => {
    setSelectedArm(arm);
    setIsConnected(false);
    setIsPasscodeUnlocked(false);
    setEnteredPasscode('');
    setPasscodeError(false);
  };

  // Passcode unlock logic (VIP Easter Egg!)
  const handleUnlockPrivateArm = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcodes are "2026" or "PRISMAX"
    const cleaned = enteredPasscode.trim().toUpperCase();
    if (cleaned === '2026' || cleaned === '1234' || cleaned === 'PRISMAX') {
      setIsPasscodeUnlocked(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
      setTimeout(() => setPasscodeError(false), 2000);
    }
  };

  // Run automatic task sequence simulation
  const runSimulatedTask = () => {
    if (activeTask) return;
    setActiveTask(t.sweepingWorkspace);
    
    // Step-by-step animation sequence
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step === 1) {
        setAngleX(75);
        setAngleY(30);
      } else if (step === 2) {
        setGripForce(90); // Close raw claw
      } else if (step === 3) {
        setAngleX(20);
        setAngleY(75);
      } else if (step === 4) {
        setGripForce(10); // Open claw
      } else if (step === 5) {
        // Return to standard
        setAngleX(45);
        setAngleY(60);
        setActiveTask(null);
        clearInterval(interval);
      }
    }, 1000);
  };

  const isCurrentArmReserved = selectedArm.status === 'reserved' && !isPasscodeUnlocked;

  return (
    <div className="py-20 bg-transparent text-brand-white" id="simulation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Elements */}
        <div className="border-l-2 border-brand-accent pl-4 mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-brand-accent">
            {t.labControls}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mt-1">
            {t.ctrlTitle}
          </h2>
          <p className="max-w-2xl text-sm font-sans font-light text-brand-cream/60 mt-2">
            {t.ctrlSubtitle}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Arm Selection Cards (Matching Image 14 exactly) */}
          <div className="lg:col-span-1 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cream/40 px-1">
              {t.selectNode}
            </span>
            
            <div className="grid grid-cols-1 gap-4">
              {roboticArms.map((arm) => {
                const isSelected = selectedArm.id === arm.id;
                const desc = getLocalizedArmDesc(arm.id, currentLanguage);
                
                return (
                  <div
                    key={arm.id}
                    onClick={() => handleSelectArm(arm)}
                    className={`relative p-5 rounded-lg text-left cursor-border-active premium-interactive-card shadow-layered-md cursor-pointer overflow-hidden backdrop-blur-md ${
                      isSelected 
                        ? 'border border-brand-accent bg-brand-black/70' 
                        : 'border border-brand-cream/10 bg-brand-black/40'
                    }`}
                  >
                    {/* Status Dot */}
                    <div className="flex items-center justify-between mb-2 z-10 relative">
                      <span className="text-xs font-mono text-brand-cream/40 uppercase tracking-widest">
                        {arm.id.replace('arm_','').toUpperCase()} {currentLanguage === 'bn' ? 'নোড' : currentLanguage === 'hi' ? 'नोड' : 'NODE'}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          arm.status === 'reserved' ? 'bg-amber-500' : arm.status === 'active' ? 'bg-emerald-500' : 'bg-brand-cream/30'
                        }`}></span>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cream/50">
                          {getLocalizedStatusText(arm.status, currentLanguage)}
                        </span>
                      </div>
                    </div>

                    {/* Arm Name */}
                    <h3 className="text-lg font-serif font-medium text-brand-white flex items-center pr-12">
                      {arm.name}
                    </h3>

                    {/* Arm Description */}
                    <p className="text-xs font-sans text-brand-cream/60 mt-1 leading-relaxed">
                      {desc}
                    </p>

                    {/* Queues */}
                    {arm.queueLength > 0 && (
                      <div className="mt-3 inline-flex items-center space-x-1 text-[10px] font-mono text-brand-accent">
                        <span>•</span>
                        <span>{currentLanguage === 'bn' ? `লাইনে আছে: ${arm.queueLength}` : currentLanguage === 'hi' ? `कतार में: ${arm.queueLength}` : `QUEUE: ${arm.queueLength} IN LINE`}</span>
                      </div>
                    )}

                    {/* Optional diagonal Reserved Ribbon matching image 14 exactly */}
                    {arm.hasRibbon && (
                      <div className="absolute top-4 right-0 transform rotate-45 translate-x-10 translate-y-3 bg-[#C5A880] text-brand-black text-[10px] font-bold py-1 px-14 tracking-widest shadow-md text-center">
                        {currentLanguage === 'bn' ? 'সংরক্ষিত' : currentLanguage === 'hi' ? 'आरक्षित' : 'RESERVED'}
                      </div>
                    )}

                    {/* Subtle geometric lines */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-[0.03] pointer-events-none rounded-full border border-brand-white"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Columns: Interactive Controller Simulator (Col span 2) */}
          <div className="lg:col-span-2">
            
            {/* Main simulator housing */}
            <div className={`p-6 rounded-xl border border-brand-cream/15 bg-brand-black/45 backdrop-blur-md relative cursor-border-active shadow-layered-lg ${isConnected ? 'shadow-brand-accent/5' : ''}`}>
              
              {/* Header Status Bar */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-brand-cream/10 mb-6 gap-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isConnected ? 'bg-brand-accent/10 text-brand-accent' : 'bg-brand-cream/5 text-brand-cream/40'}`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono tracking-wider text-brand-white uppercase">
                      {selectedArm.name}
                    </h4>
                    <p className="text-[11px] font-mono text-brand-cream/40 flex items-center">
                      <span className="opacity-60">LINK ADDR:</span>
                      <span className="ml-1 text-brand-accent">PRISMA_AX_019_G</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {isConnected && (
                    <span className="px-2.5 py-1 rounded bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-mono tracking-widest animate-pulse">
                      {getLocalizedActiveStream(currentLanguage)}
                    </span>
                  )}
                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase ${
                    isConnected ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-brand-cream/5 border border-brand-cream/10 text-brand-cream/40'
                  }`}>
                    {isConnected 
                      ? (currentLanguage === 'bn' ? 'লাইভ সুরক্ষিত' : currentLanguage === 'hi' ? 'लाइव सुरक्षित' : 'LIVE_SECURE') 
                      : (currentLanguage === 'bn' ? 'অফলাইন' : currentLanguage === 'hi' ? 'ऑफ़लाइन' : 'OFFLINE')
                    }
                  </span>
                </div>
              </div>

              {/* Locked view for Reserved Arm */}
              {isCurrentArmReserved ? (
                <div className="py-12 px-6 flex flex-col items-center justify-center text-center max-w-md mx-auto" id="vip-arm-auth-gate">
                  <div className="w-16 h-16 rounded-full bg-brand-cream/5 border border-brand-accent/30 flex items-center justify-center mb-4 text-brand-accent">
                    <Key className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif tracking-tight text-white mb-2">
                    {getLocalizedEnterNodeAccessCode(currentLanguage)}
                  </h3>
                  <p className="text-xs font-sans text-brand-cream/60 mb-6 leading-relaxed">
                    {getLocalizedPrivateArmReserved(currentLanguage)}
                  </p>
                  
                  <form onSubmit={handleUnlockPrivateArm} className="w-full space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={enteredPasscode}
                        onChange={(e) => setEnteredPasscode(e.target.value)}
                        placeholder={currentLanguage === 'bn' ? 'ভিআইপি পাসকি লিখুন' : currentLanguage === 'hi' ? 'वीआईपी पासकी दर्ज करें' : 'ENTER VIP PASSKEY'}
                        className="w-full text-center px-4 py-3 bg-[#18181a] border border-brand-cream/20 rounded-lg text-brand-white placeholder-brand-cream/30 focus:border-brand-accent focus:outline-none uppercase font-mono tracking-widest text-sm"
                      />
                    </div>
                    
                    {passcodeError && (
                      <p className="text-xs text-red-400 font-mono flex items-center justify-center space-x-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{currentLanguage === 'bn' ? 'ভুল পাসকোড' : currentLanguage === 'hi' ? 'अमान्य क्रेडेंशियल' : 'INVALID CREDENTIALS'}</span>
                      </p>
                    )}
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-accent hover:bg-brand-accent-dark transition-all text-brand-black text-xs font-mono font-bold tracking-widest rounded-lg flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{getLocalizedValidateNodeAccess(currentLanguage)}</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Unlocked Active Simulator UI */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="active-teleop-panel">
                  
                  {/* Left Half: Dynamic Vector Graphic representing robotic arm */}
                  <div className="flex flex-col items-center justify-center bg-brand-black/60 backdrop-blur-sm p-4 rounded-xl border border-brand-cream/5 relative min-h-[300px] shadow-inner">
                    
                    {/* Telemetry stream coordinates graphic overlay */}
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-brand-cream/30 space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-3 h-3 text-brand-accent animate-pulse" />
                        <span>FRAME: #{18240 + Math.floor(angleX * 1.5 + angleY)}</span>
                      </div>
                      <div>RAD_X: {((angleX * Math.PI) / 180).toFixed(4)}</div>
                      <div>RAD_Y: {((angleY * Math.PI) / 180).toFixed(4)}</div>
                    </div>
                    
                    {isConnected && activeTask && (
                      <div className="absolute top-3 right-3 bg-brand-accent/15 border border-brand-accent/40 px-2 py-0.5 rounded text-[10px] font-mono text-brand-accent">
                        {activeTask}
                      </div>
                    )}

                    {/* Vector Robot Arm visualization */}
                    <svg viewBox="0 0 400 300" className="w-full max-h-[260px]">
                      {/* Grid background reference lines */}
                      <line x1="50" y1="260" x2="350" y2="260" stroke="rgba(223, 216, 208, 0.1)" strokeWidth="1" />
                      <line x1="200" y1="50" x2="200" y2="260" stroke="rgba(223, 216, 208, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="200" cy="260" r="120" fill="none" stroke="rgba(197, 168, 128, 0.03)" strokeWidth="1" />

                      {/* Moving base joint - rotated relative to angleX */}
                      <g transform="translate(200, 260)">
                        {/* Pedestal Base */}
                        <path d="M-40,0 L40,0 L25,-15 L-25,-15 Z" fill="#303030" stroke="rgba(223, 216, 208, 0.3)" strokeWidth="2" />
                        <circle cx="0" cy="-10" r="12" fill="#202020" stroke="#C5A880" strokeWidth="2" />
                        
                        {/* Dynamic Arm Link 1 (Humeral sector) */}
                        <g transform={`rotate(${angleX - 90})`}>
                          <line x1="0" y1="0" x2="0" y2="-90" stroke={isConnected ? "#DFD8D0" : "rgba(223, 216, 208, 0.3)"} strokeWidth="12" strokeLinecap="round" />
                          <circle cx="0" cy="0" r="6" fill="#C5A880" />
                          
                          {/* Joint elbow joint */}
                          <g transform="translate(0, -90)">
                            <circle cx="0" cy="0" r="10" fill="#202020" stroke="#C5A880" strokeWidth="2" />
                            
                            {/* Dynamic Arm Link 2 (Elbow projection) */}
                            <g transform={`rotate(${-angleY})`}>
                              <line x1="0" y1="0" x2="0" y2="-75" stroke={isConnected ? "#C5A880" : "rgba(197, 168, 128, 0.3)"} strokeWidth="8" strokeLinecap="round" />
                              <circle cx="0" cy="0" r="5" fill="#DFD8D0" />
                              
                              {/* Gripper/Wrist assembly */}
                              <g transform="translate(0, -75)">
                                <circle cx="0" cy="0" r="6" fill="#303030" stroke="#DFD8D0" strokeWidth="2" />
                                
                                {/* Gripper claw left */}
                                <g transform={`translate(-6, -6) rotate(${-gripForce / 2})`}>
                                  <path d="M0,0 Q-10,-5 -5,-20 Q0,-5 0,0" fill="none" stroke="#C5A880" strokeWidth="2.5" />
                                </g>
                                {/* Gripper claw right */}
                                <g transform={`translate(6, -6) rotate(${gripForce / 2})`}>
                                  <path d="M0,0 Q10,-5 5,-20 Q0,-5 0,0" fill="none" stroke="#C5A880" strokeWidth="2.5" />
                                </g>

                                {/* Glistening laser feedback indicator */}
                                {isConnected && (
                                  <line x1="0" y1="-15" x2="0" y2="-50" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                                )}
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>

                    <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-brand-cream/5 text-center text-[10px] font-mono text-brand-cream/40">
                      <div>
                        <span>{currentLanguage === 'bn' ? 'বেস:' : currentLanguage === 'hi' ? 'आधार:' : 'BASE:'}</span>
                        <span className="text-brand-white ml-1">{angleX}°</span>
                      </div>
                      <div>
                        <span>{currentLanguage === 'bn' ? 'কনুই:' : currentLanguage === 'hi' ? 'कोहनी:' : 'ELBOW:'}</span>
                        <span className="text-brand-white ml-1">{angleY}°</span>
                      </div>
                      <div>
                        <span>{currentLanguage === 'bn' ? 'ক্ল্যাম্প:' : currentLanguage === 'hi' ? 'क्लैंप:' : 'VALV_CLAMP:'}</span>
                        <span className="text-brand-white ml-1">{gripForce}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Half: Live Stream Controller Sliders and buttons */}
                  <div className="space-y-6">
                    {/* Live Telemetry details block */}
                    {isConnected ? (
                      <div className="grid grid-cols-3 gap-2 py-3.5 px-4 rounded-lg bg-brand-white/5 border border-brand-cream/10">
                        <div className="text-left">
                          <span className="block text-[9px] font-mono text-brand-cream/40 uppercase tracking-widest">{t.ctrlLatency}</span>
                          <span className="text-sm font-mono font-medium text-emerald-400">{latency} ms</span>
                        </div>
                        <div className="text-left">
                          <span className="block text-[9px] font-mono text-brand-cream/40 uppercase tracking-widest">{t.ctrlSignal}</span>
                          <span className="text-sm font-mono font-medium text-brand-white">{signal}% OK</span>
                        </div>
                        <div className="text-left">
                          <span className="block text-[9px] font-mono text-brand-cream/40 uppercase tracking-widest">{t.ctrlBattery}</span>
                          <span className="text-sm font-mono font-medium text-amber-300">{temp.toFixed(1)}°C</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-lg bg-brand-white/5 border border-brand-white/5 text-center text-xs font-mono text-brand-cream/50">
                        {getEstablishLinkText(currentLanguage)}
                      </div>
                    )}

                    {/* Joint Angle X Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-brand-cream/70">{t.ctrlAngleX}</span>
                        <span className="text-brand-accent font-medium">{angleX}°</span>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="165"
                        disabled={!isConnected}
                        value={angleX}
                        onChange={(e) => setAngleX(parseInt(e.target.value))}
                        className="w-full accent-brand-accent cursor-pointer bg-brand-cream/20 disabled:opacity-40"
                      />
                    </div>

                    {/* Joint Angle Y Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-brand-cream/70">{t.ctrlAngleY}</span>
                        <span className="text-brand-accent font-medium">{angleY}°</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="140"
                        disabled={!isConnected}
                        value={angleY}
                        onChange={(e) => setAngleY(parseInt(e.target.value))}
                        className="w-full accent-brand-accent cursor-pointer bg-brand-cream/20 disabled:opacity-40"
                      />
                    </div>

                    {/* Claw Grip Force Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-brand-cream/70">{t.ctrlGrip}</span>
                        <span className="text-brand-accent font-medium">{gripForce}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        disabled={!isConnected}
                        value={gripForce}
                        onChange={(e) => setGripForce(parseInt(e.target.value))}
                        className="w-full accent-brand-accent cursor-pointer bg-brand-cream/20 disabled:opacity-40"
                      />
                    </div>

                    {/* Connection Controls Button Group */}
                    <div className="flex flex-col space-y-2.5 pt-4">
                      {isConnected ? (
                        <>
                          <button
                            onClick={runSimulatedTask}
                            disabled={!!activeTask}
                            className="w-full py-3 bg-brand-white/10 hover:bg-brand-white/15 disabled:opacity-50 transition-all text-brand-white hover:text-white border border-brand-cream/15 text-xs font-mono font-bold tracking-widest rounded-lg flex items-center justify-center space-x-2 cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 text-brand-accent" />
                            <span>{t.ctrlSimulateAction}</span>
                          </button>
                          
                          <button
                            onClick={() => setIsConnected(false)}
                            className="w-full py-3 bg-red-950/20 hover:bg-red-950/40 transition-all text-red-400 border border-red-500/20 text-xs font-mono font-bold tracking-widest rounded-lg cursor-pointer"
                          >
                            {t.ctrlDisconnect}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setIsConnected(true)}
                          className="w-full py-3.5 bg-brand-cream hover:bg-brand-white text-brand-black transition-all text-xs font-mono font-bold tracking-widest rounded-lg flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          <Wifi className="w-4 h-4 text-brand-black" />
                          <span>{t.ctrlConnect}</span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
