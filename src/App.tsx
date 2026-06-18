import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopicGrid from './components/TopicGrid';
import AmplifierCheckout from './components/AmplifierCheckout';
import { translations } from './data';
import { Language } from './types';
import { X, Target, Code, Cpu, Sparkles, Terminal, Layers, ArrowDown, FastForward, BrainCircuit, HardDrive, Network, Activity, ArrowRight, Youtube, Search, BookOpen, Globe } from 'lucide-react';
import { knowledgeArticles, getArticleById } from './knowledgeData';

// Minimalist, high-contrast, monochrome, beautiful outline brand icons
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 127.14 96.36" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M107.7 8.07A105.15 105.15 0 0 0 77.26 0a77.19 77.19 0 0 0-3.3 6.83A96.67 96.67 0 0 0 53.22 6.83 77.19 77.19 0 0 0 49.88 0 105.15 105.15 0 0 0 19.44 8.07C3.66 31.58-1.86 54.65 1 77.53A105.73 105.73 0 0 0 32 96.36a77.7 77.7 0 0 0 6.63-10.85 68.43 68.43 0 0 1-10.5-5c.9-.65 1.76-1.34 2.58-2a75.14 75.14 0 0 0 72.9 0c.82.72 1.68 1.4 2.58 2a68.44 68.44 0 0 1-10.5 5 77.7 77.7 0 0 0 6.63 10.85 105.73 105.73 0 0 0 31.58-18.83C129.24 50.24 123.36 27.37 107.7 8.07ZM42.45 65.69C36.18 65.69 31 60 31 53s5.14-12.72 11.41-12.72S53.94 46 53.86 53 48.72 65.69 42.45 65.69Zm42.24 0C78.41 65.69 73.24 60 73.24 53s5.14-12.72 11.41-12.72S96.08 46 96 53 90.87 65.69 84.69 65.69Z" />
  </svg>
);

// @ts-ignore
import logo3 from '../logo3.png';
// @ts-ignore
import homePageBanner from '../home page banner.png';
// @ts-ignore
import logoPrismax01 from '../logo-prismax-01.jpg';
// @ts-ignore
import logoTransparent from '../logo transparent.png';
// @ts-ignore
import teleportingBanner from '../teleporting banner.png';
// @ts-ignore
import logoPrismax02 from '../logo-prismax-02.jpg';
// @ts-ignore
import graphic1 from '../c.avif';
// @ts-ignore
import graphic2 from '../graphic2.avif';
// @ts-ignore
import graphic3 from '../graphic3.avif';
// @ts-ignore
import graphic4 from '../graphic4.avif';
// @ts-ignore
import graphicss from '../graphicss.avif';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('prismas_language');
    return (saved as Language) || 'en';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const t = translations[language];
  const isEn = language !== 'bn';

  useEffect(() => {
    localStorage.setItem('prismas_language', language);
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
      body.style.backgroundColor = '#FAF7F2';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
      body.style.backgroundColor = '#202020';
    }
  }, [theme]);

  // Premium cursor ambient mapping with hardware-accelerated requestAnimationFrame rendering
  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        const root = document.documentElement;
        if (root) {
          root.style.setProperty('--mouse-x', `${e.clientX}px`);
          root.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const activeTopicDetails = selectedTopic ? getArticleById(selectedTopic, language) : null;

  return (
    <div className={`${theme} bg-brand-dark-bg min-h-screen text-brand-white bg-grain antialiased`} id="root-viewport">
      
      {/* Viewport Ambient Spotlight tracking the cursor */}
      <div className="cursor-ambient-spotlight" />
      
      {/* Navbar Header */}
      <Header 
        currentLanguage={language} 
        setLanguage={setLanguage} 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        setTheme={setTheme}
      />

      {activeSection === 'home' && (
        <>
          <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" id="hero">
          {/* Ambient background graphic with overlays to maintain perfect text contrast */}
          <div className="absolute inset-0 z-0">
            <img 
              src={homePageBanner} 
              alt="PrismaX Workspace Background" 
              className="w-full h-full object-cover opacity-25 filter brightness-40 contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            {/* Transparent high-contrast overlays */}
            <div className="absolute inset-0 bg-brand-noise pointer-events-none opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg via-brand-dark-bg/85 to-brand-black/95 pointer-events-none"></div>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] animate-pulse-glow pointer-events-none"></div>
            <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-accent-dark/10 rounded-full blur-[120px] pointer-events-none"></div>
          </div>

          {/* Diagonal wire background lines */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(223,216,208,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(223,216,208,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 text-center w-full">
            
            {/* Elegant Brand Glassmorphic Glow Card */}
            <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl border border-brand-accent/15 bg-brand-black/40 backdrop-blur-xl cursor-border-active premium-interactive-card shadow-layered-lg overflow-hidden group transition-all duration-700 hover:border-brand-accent/35 max-w-3xl mx-auto">
              
              {/* Dynamic light/dark brand-colored radial glowing background behind the logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accent/8 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:bg-brand-accent/12" />
              
              {/* Subtle metallic sheen accent lines across the card corners */}
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent group-hover:w-48 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent group-hover:w-48 transition-all duration-700" />
              
              <div className="space-y-5 sm:space-y-6 flex flex-col items-center relative z-10">
                


                {/* Pixel-perfect official PrismaX Brand Logo dynamically blended and rendered transparently with scale animation */}
                <div className="flex items-center justify-center animate-fade-in pt-2 pb-2 w-full">
                  <img 
                    src={logoTransparent} 
                    alt="PrismaX" 
                    className={`h-16 sm:h-24 md:h-28 w-auto object-contain transition-all duration-500 transform group-hover:scale-[1.04] ${
                      theme === 'dark' 
                        ? "invert brightness-[1.8] contrast-[1.3] drop-shadow-[0_0_30px_rgba(197,168,128,0.25)]" 
                        : "brightness-100 drop-shadow-[0_4px_20px_rgba(138,101,56,0.12)]"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title tagline with refined display style and high visibility */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-cream tracking-tight uppercase leading-tight max-w-2xl text-center heading-immersive">
                  {t.heroTitle}
                </h1>

                {/* Description wrapper carefully shaded for background readable safety */}
                <p className="text-xs sm:text-sm md:text-base font-sans font-light text-brand-cream/80 leading-relaxed max-w-xl text-center">
                  {t.heroDesc}
                </p>

                {/* Center aligned responsive call-to-actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full animate-fade-in relative z-20">
                  <button
                    onClick={() => handleNavigate('about')}
                    className="w-full sm:w-auto px-8 py-3 rounded-md bg-brand-accent text-brand-black font-semibold text-xs tracking-wider uppercase hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {t.btnViewSpecs}
                  </button>
                  <button
                    onClick={() => handleNavigate('teleoperating')}
                    className="w-full sm:w-auto px-8 py-3 rounded-md border border-brand-cream/20 hover:border-brand-accent/40 bg-brand-black/50 hover:bg-brand-black/90 text-brand-cream hover:text-brand-white font-medium text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {language === 'en' ? 'LAUNCH TELEOPERATING' : language === 'hi' ? 'टेलीऑपरेशन लॉन्च करें' : language === 'zh' ? '启动遥操作' : language === 'ur' ? 'ٹیلی آپریشن شروع کریں' : 'টেলিঅপারেটিং শুরু করুন'}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-brand-dark-bg animate-fadeIn" id="about-page">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(223,216,208,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono tracking-[0.4em] uppercase text-brand-accent text-glow">
                {language === 'en' ? 'PRISMAX KNOWLEDGE LIBRARY' : language === 'hi' ? 'प्रिजमैکس नॉलेज लाइब्रेरी' : language === 'zh' ? 'PRISMAX 技术知识库' : language === 'ur' ? 'PRISMAX نالج لائبریری' : 'প্রিজম্যাক্স নলেজ লাইব্রেরি'}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-cream tracking-tight uppercase leading-tight mt-3">
                {language === 'en' ? 'Ecosystem Specifications' : language === 'hi' ? 'पारिस्थितिकी तंत्र विनिर्देश' : language === 'zh' ? '系统生态规格说明书' : language === 'ur' ? 'ایکو سسٹم کی وضاحتیں' : 'সমগ্র ইকোসিস্টেম বিবরণী'}
              </h2>
              <p className="text-sm font-sans font-light text-brand-cream/65 mt-3 leading-relaxed">
                {language === 'en' 
                  ? 'Explore our complete PrismaX physical intelligence catalog, fully synthesized from Core AI whitepapers, teleoperation Trajectory tokens, and fleet coordination telemetry.'
                  : language === 'hi'
                  ? 'हमारे पूर्ण प्रिजमैक्स भौतिक बुद्धिमत्ता कैटलॉग का अन्वेषण करें, जो मुख्य एआई श्वेतपत्रों, टेलीऑपरेशन प्रक्षेपवक्र टोकن और बेड़े समन्वय टेलीमेट्री से पूरी तरह से संश्लेषित है।'
                  : language === 'zh'
                  ? '探索我们完整的 PrismaX 具身物理智能知识库，完全由核心 AI 白皮书、遥操作轨迹 Token 以及机器人机队协同遥测数据汇编而成。'
                  : language === 'ur'
                  ? 'ہمارے مکمل PrismaX جسمانی ذہانت کے انسائیکلوپیڈیا کو دریافت کریں، جو بنیادی AI وائٹ پیپرز، ٹیلی آپریشن ٹریکٹری ٹوکنز، اور اور روبوٹک بیڑے کی کوآرڈینیشن ٹیلی میٹری سے مکمل طور پر تیار کیا گیا ہے۔'
                  : 'কোর এআই হোয়াইটপেপার, টেলিঅপারেশন ট্র্যাজেক্টরি টোকেন এবং রোবোটিক বহরের টেলিমেট্রি থেকে সংগৃহীত আমাদের সম্পূর্ণ প্রিজম্যাক্স ফিজিক্যাল ইন্টেলিজেন্স ক্যাটালগ এক্সপ্লোর করুন।'}
              </p>
            </div>

            {/* Category Filter and Search Bar */}
            <div className="mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-4 rounded-xl border border-brand-cream/10 bg-brand-black/40 backdrop-blur-md shadow-xl shadow-black/10 dark:shadow-black/40">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'All', en: 'All', bn: 'সব', hi: 'सभी', zh: '全部', ur: 'سب' },
                  { id: 'Introduction & Core', en: 'Core Tech & Intro', bn: 'মূল প্রযুক্তি এবং পরিচিতি', hi: 'मुख्य तकनीक और परिचय', zh: '核心技术与介绍', ur: 'بنیادی ٹیکنالوجی اور تعارف' },
                  { id: 'Robot Control & Operations', en: 'Control & Operations', bn: 'নিয়ন্ত্রণ ও অপারেশন', hi: 'नियंत्रण और संचालन', zh: '控制与操作', ur: 'کنٹرول اور آپریشنز' },
                  { id: 'Network & Economics', en: 'Network & Economy', bn: 'নেটওয়ার্ক ও ইকোনমি', hi: 'नेटवर्क और अर्थव्यवस्था', zh: '网络与经济', ur: 'نیٹ ورک اور معیشت' },
                  { id: 'Evaluations & Analytics', en: 'Analytics & Quality', bn: 'মূল্যায়ন ও কোয়ালিটি', hi: 'विश्लेषण और गुणवत्ता', zh: '评估与分析', ur: 'تجزیات اور معیار' },
                  { id: 'Future & Roadmap', en: 'Future & Specs', bn: 'ভবিষ্যত ও রোডম্যাপ', hi: 'भविष्य और रोडमैप', zh: '前景与路线图', ur: 'مستقبل اور روڈ میپ' }
                ].map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-brand-accent border-brand-accent text-brand-black font-semibold shadow-[0_0_15px_rgba(197,168,128,0.25)]'
                          : 'bg-brand-black/60 border-brand-cream/10 text-brand-cream/70 hover:text-brand-white hover:border-brand-cream/20'
                      }`}
                    >
                      {language === 'en' ? cat.en : language === 'hi' ? cat.hi : language === 'zh' ? cat.zh : language === 'ur' ? cat.ur : cat.bn}
                    </button>
                  );
                })}
              </div>

              {/* Search Engine */}
              <div className="relative w-full lg:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-cream/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'en' ? 'Search specified articles...' : language === 'hi' ? 'लेख खोजें...' : language === 'zh' ? '搜索技术文档...' : language === 'ur' ? 'مخصوص مضامین تلاش کریں...' : 'নিবন্ধ অনুসন্ধান করুন...'}
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-brand-black/70 border border-brand-cream/10 focus:border-brand-accent/50 focus:outline-none text-xs font-mono text-brand-cream placeholder-brand-cream/30 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-cream/40 hover:text-brand-white text-[10px] font-mono"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>

            {(() => {
              // Filtering Articles dynamically on-the-fly
              const filteredArticles = knowledgeArticles.filter(article => {
                // Category match
                if (selectedCategory !== 'All' && article.category !== selectedCategory) {
                  return false;
                }
                
                // Search query match
                if (searchQuery.trim() !== '') {
                  const query = searchQuery.toLowerCase();
                  const localArt = getArticleById(article.id, language);
                  if (!localArt) return false;

                  const titleMatch = localArt.title.toLowerCase().includes(query);
                  const subtitleMatch = (localArt.subtitle || '').toLowerCase().includes(query);
                  const badgeMatch = (localArt.badge || '').toLowerCase().includes(query);
                  const overviewMatch = localArt.overview.toLowerCase().includes(query);
                  const mainExplanationMatch = localArt.mainExplanation.toLowerCase().includes(query);
                  
                  const conceptsMatch = (localArt.keyConcepts || []).some(concept => 
                    concept.heading.toLowerCase().includes(query) || 
                    concept.text.toLowerCase().includes(query)
                  );
                  
                  return titleMatch || subtitleMatch || badgeMatch || overviewMatch || mainExplanationMatch || conceptsMatch;
                }
                
                return true;
              });

              if (filteredArticles.length === 0) {
                return (
                  <div className="py-20 p-8 rounded-2xl border border-brand-cream/10 bg-brand-black/30 backdrop-blur-md text-center max-w-md mx-auto">
                    <BookOpen className="w-12 h-12 text-brand-accent/40 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-lg font-serif text-brand-white font-medium">
                      {language === 'en' ? 'No Articles Found' : language === 'hi' ? 'कोई लेख नहीं मिला' : language === 'zh' ? '未找到相关文章' : language === 'ur' ? 'کوئی مضمون نہیں ملا' : 'কোন নিবন্ধ পাওয়া যায়নি'}
                    </h3>
                    <p className="text-xs text-brand-cream/60 mt-2 leading-relaxed">
                      {language === 'en'
                        ? 'Try modifying your search keywords or switching filters to find relevant technical sections.'
                        : language === 'hi'
                        ? 'प्रासंगिक तकनीकी अनुभाग खोजने के लिए अपने खोज कीवर्ड बदलने या फ़िल्ٹر बदलने का प्रयास करें।'
                        : language === 'zh'
                        ? '尝试修改您的搜索关键词或切换过滤器，以查找相关的技术章节。'
                        : language === 'ur'
                        ? 'متعلقہ تکنیکی ابواب تلاش کرنے کے لیے تلاش کے مطلوبہ الفاظ کو تبدیل کرنے یا فلٹرز کو تبدیل کرنے کی کوشش کریں۔'
                        : 'অন্যান্য কীওয়ার্ড চেষ্টা করুন বা সার্চ ফিল্টার পরিবর্তন করুন।'}
                    </p>
                    <button
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="mt-6 px-4 py-2 rounded border border-brand-accent/20 hover:border-brand-accent text-brand-accent font-mono text-[10px] uppercase transition-colors cursor-pointer"
                    >
                      {language === 'en' ? 'Reset Filters' : language === 'hi' ? 'फ़िल्टर रीसेट करें' : language === 'zh' ? '重置过滤器' : language === 'ur' ? 'فلٹرز ری سیٹ کریں' : 'ফিল্টার রিসেট করুন'}
                    </button>
                  </div>
                );
              }

              return (
                <div className="p-4 md:p-8 rounded-2xl border border-brand-cream/10 bg-brand-black/30 backdrop-blur-md relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {filteredArticles.map((article, index) => {
                      const IconComponent = article.icon || Sparkles;
                      const hasAccentColor = article.color && article.color.includes('emerald');
                      const badgeBgClass = hasAccentColor ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-brand-accent/15 border-brand-accent/20 text-brand-accent';
                      const localArt = getArticleById(article.id, language);
                      if (!localArt) return null;

                      return (
                        <div 
                          key={article.id}
                          onClick={() => {
                            setSelectedTopic(article.id);
                          }}
                          className={`p-5 rounded-xl bg-brand-black/45 backdrop-blur-md border border-brand-cream/10 cursor-border-active premium-interactive-card shadow-layered-md transition-all text-left cursor-pointer group flex flex-col justify-between`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className={`p-1.5 rounded transition-colors border ${badgeBgClass}`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-[9px] font-mono text-brand-cream/30 uppercase tracking-widest">
                                {language === 'bn' ? `নিবন্ধ ${index + 1}` : language === 'hi' ? `लेख ${index + 1}` : language === 'zh' ? `文章 ${index + 1}` : language === 'ur' ? `مضمون ${index + 1}` : `ARTICLE ${index + 1}`}
                              </span>
                            </div>
                            <div>
                              <span className="text-[9px] font-mono tracking-widest text-brand-accent/80 uppercase block mb-1">
                                {localArt.category}
                              </span>
                              <h4 className="text-sm font-serif text-brand-white font-semibold leading-snug group-hover:text-brand-accent transition-colors">
                                {localArt.title}
                              </h4>
                            </div>
                            <p className="text-xs text-brand-cream/70 leading-relaxed line-clamp-3">
                              {localArt.overview}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-brand-cream/5 flex items-center justify-between text-[10px] font-mono text-brand-cream/40 group-hover:text-brand-accent transition-colors">
                            <span>{language === 'en' ? 'READ FULL SPECIFICATION' : language === 'hi' ? 'विशेष विवरण पढ़ें' : language === 'zh' ? '阅读完整规格说明' : language === 'ur' ? 'مکمل تفصیلات پڑھیں' : 'বিস্তারিত বিবরণ পড়ুন'}</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

          </div>
        </section>
      )}

      {activeSection === 'teleoperating' && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[85vh] bg-brand-dark-bg" id="teleoperating-page">
          {/* Neon/radial halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
          
          {/* Wire pattern background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(223,216,208,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

          <div className="max-w-3xl w-full p-6 sm:p-12 rounded-3xl border border-brand-accent/15 bg-brand-black/50 backdrop-blur-xl text-center flex flex-col items-center space-y-6 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(197,168,128,0.06),inset_0_1px_1px_rgba(255,255,255,0.05),0_15px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_100px_rgba(197,168,128,0.12)] hover:border-brand-accent/35 transition-all duration-500">
            


            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-cream tracking-tight uppercase leading-tight">
                {language === 'en' ? 'Teleoperating' : language === 'hi' ? 'टेलीऑपरेटिंग' : language === 'zh' ? '远程遥操作控制中枢' : language === 'ur' ? 'ٹیلی آپریشن' : 'টেলিঅপারেটিং'}
              </h2>
              <p className="text-xs sm:text-sm font-sans font-light text-brand-cream/80 max-w-xl leading-relaxed mx-auto text-center">
                {language === 'en' 
                  ? 'Access real humanoid fleets and coordinate low-latency bilateral teleoperation nodes across the globe directly from your workstation.'
                  : language === 'hi'
                  ? 'अपने वर्कस्टेशन से सीधे दुनिया भर में वास्तविक ह्यूमनॉइड बेड़े तक पहुंचें और कम-विलंबता द्विपक्षीय टेलीऑपरेशन नोड्स का समन्वय करें।'
                  : language === 'zh'
                  ? '自您的工作站，直接安全地实时操作全球实体人型机器人机队，体验超低延迟双向触觉控制与在轨演练。'
                  : language === 'ur'
                  ? 'اپنے ورک اسٹیشن سے براہ راست دنیا بھر میں حقیقی ہیومنائیڈ بیڑے تک رسائی حاصل کریں اور کم تاخیر والے دو طرفہ ٹیلی آپریشن نوڈس کو مربوط کریں۔'
                  : 'বিশ্বজুড়ে ছড়িয়ে থাকা বাস্তব হিউম্যানয়েড বহর এবং অতি-স্বল্প লেটেন্সির টেলিঅপারেশন নোড সরাসরি আপনার ওয়ার্কস্টেশন থেকে পরিচালনা করুন।'}
              </p>
            </div>
            
            {/* Teleporting Banner Image */}
            <div className="w-full rounded-2xl overflow-hidden border border-brand-cream/10 bg-brand-black/55 p-1.5 shadow-sm hover:border-brand-accent/30 transition-all duration-300">
              <img 
                src={teleportingBanner} 
                alt="Teleoperating Banner" 
                className="w-full h-auto max-h-[380px] object-cover rounded-xl filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Call to action element */}
            <div className="pt-4 w-full flex justify-center">
              <a 
                href="https://app.prismax.ai/fleet"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 h-12 rounded-md bg-brand-accent text-brand-black font-semibold text-xs tracking-wider uppercase hover:bg-brand-accent/90 hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg font-mono"
              >
                {language === 'en' ? 'Get Started' : language === 'hi' ? 'शुरू करें' : language === 'zh' ? '立即开始' : language === 'ur' ? 'شروع کریں' : 'शुरू করুন'}
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
            </div>



          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* TOPIC CARD SPEC DETAILED DRAWER/MODAL (For easy developer expansion) */}
      {/* ==================================================================== */}
       {selectedTopic && activeTopicDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-black/75 backdrop-blur-md animate-fade-in" id="topic-spec-modal">
          <div className="w-full max-w-2xl bg-brand-black/95 backdrop-blur-xl border border-brand-cream/15 rounded-xl overflow-hidden shadow-layered-lg cursor-border-active relative">
            
            <button 
              onClick={() => setSelectedTopic(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-brand-white/10 text-brand-cream hover:text-white transition-colors cursor-pointer z-25"
              aria-label="Close modal"
              id="close-topic-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Spec Header */}
            <div className="p-4 sm:p-6 md:p-8 pt-10 sm:pt-12 md:pt-14 border-b border-brand-cream/10 bg-brand-black/40">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-brand-accent uppercase block">
                {activeTopicDetails.subtitle}
              </span>
              <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-brand-white font-semibold mt-1">
                {activeTopicDetails.title}
              </h3>
            </div>

            {/* Spec Body content */}
            <div className="p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto max-h-[50vh] sm:max-h-[58vh] scrollbar-thin">
              {/* Overview */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-accent uppercase block tracking-wider">
                  {language === 'en' ? '1. INTRODUCTION' : language === 'hi' ? '1. परिचय और अवलोकन' : language === 'zh' ? '1. 简介与概述' : language === 'ur' ? '1. تعارف اور جائزہ' : '১. পরিচিতি ও ওভারভিউ'}
                </span>
                <p className="text-sm font-sans font-light text-brand-cream/90 leading-relaxed bg-brand-black/45 p-4 rounded-lg border border-brand-cream/5">
                  {activeTopicDetails.overview}
                </p>
              </div>

              {/* Main Explanation */}
              {activeTopicDetails.mainExplanation && (
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-brand-accent uppercase block tracking-wider">
                    {language === 'en' ? '2. IN-DEPTH TECHNICAL ANALYSIS' : language === 'hi' ? '2. विस्तृत तकनीकी सारांश' : language === 'zh' ? '2. 深度技术解析' : language === 'ur' ? '2. تفصیلی تکنیکی تجزیہ' : '২. বিস্তারিত কারিগরি সারসংক্ষেপ'}
                  </span>
                  <p className="text-sm font-sans font-light text-brand-cream/80 stroke-brand-cream/20 leading-relaxed whitespace-pre-wrap bg-brand-black/30 p-4 rounded-lg border border-brand-cream/5">
                    {activeTopicDetails.mainExplanation}
                  </p>
                </div>
              )}

              {/* Key Concepts */}
              {activeTopicDetails.keyConcepts && activeTopicDetails.keyConcepts.length > 0 && (
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-brand-accent uppercase block tracking-wider">
                    {language === 'en' ? '3. CORE SPECIFICATION CONCEPTS' : language === 'hi' ? '3. मुख्य अवधारणाएँ' : language === 'zh' ? '3. 核心规格要点' : language === 'ur' ? '3. بنیادی تصریح کے تصورات' : '৩. প্রধান ধারণাসমূহ'}
                  </span>
                  <div className="grid grid-cols-1 gap-3">
                    {activeTopicDetails.keyConcepts.map((concept: any, idx: number) => (
                      <div key={idx} className="p-4 rounded-lg bg-brand-black/60 border border-brand-cream/10 hover:border-brand-accent/20 transition-colors">
                        <h4 className="text-sm font-mono text-brand-white font-semibold uppercase tracking-wide">
                          {concept.heading}
                        </h4>
                        <p className="text-xs text-brand-cream/70 leading-relaxed mt-1">
                          {concept.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visual Explanation */}
              {activeTopicDetails.visualExplanation && (
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono text-brand-accent uppercase block tracking-wider">
                    {language === 'en' ? '4. CONCEPTUAL ANALYSIS & EXPLANATION' : language === 'hi' ? '4. वैचारिक विश्लेषण और विस्तृत स्पष्टीकरण' : language === 'zh' ? '4. 原理机制分析与图解说明' : language === 'ur' ? '4. تصوراتی تجزیہ اور وضاحت' : '৪. বিশদ বিশ্লেষণ এবং ধারণাগত ব্যাখ্যা'}
                  </span>
                  <div className="p-4 rounded-lg bg-brand-black/30 border border-brand-cream/5">
                    <p className="text-sm font-sans font-light text-brand-cream/80 leading-relaxed">
                      {activeTopicDetails.visualExplanation.desc}
                    </p>
                  </div>
                </div>
              )}

              {/* Related Topics */}
              {activeTopicDetails.relatedTopics && activeTopicDetails.relatedTopicIds && activeTopicDetails.relatedTopicIds.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-brand-cream/10">
                  <span className="text-[9px] font-mono text-brand-cream/40 uppercase block tracking-wider">
                    {language === 'en' ? 'RELATED ECOSYSTEM MODULES' : language === 'hi' ? 'संबंधित पारिस्थितिकी तंत्र मॉड्यूल' : language === 'zh' ? '相关生态子系统模块' : language === 'ur' ? 'متعلقہ ماحولیاتی نظام کے ماڈیولز' : 'অন্যান্য সহযোগী বিষয়সমূহ'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTopicDetails.relatedTopicIds.map((rid: string, idx: number) => {
                      const relatedArticle = getArticleById(rid, language);
                      if (!relatedArticle) return null;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedTopic(rid)}
                          className="px-3 py-1 text-[10px] font-mono rounded bg-brand-accent/5 hover:bg-brand-accent/15 border border-brand-accent/20 text-brand-accent hover:text-brand-white transition-all cursor-pointer"
                        >
                          {relatedArticle.title} &rarr;
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Previous & Next Article Sequential Navigation */}
              {(activeTopicDetails.previousTopicId || activeTopicDetails.nextTopicId) && (
                <div className="flex flex-col sm:flex-row items-stretch justify-between gap-3 pt-6 border-t border-brand-cream/10">
                  {activeTopicDetails.previousTopicId ? (
                    <button
                      onClick={() => {
                        const prev = getArticleById(activeTopicDetails.previousTopicId, language);
                        if (prev) setSelectedTopic(prev.id);
                      }}
                      className="flex-1 p-3 rounded-lg bg-brand-black/45 hover:bg-brand-black/70 border border-brand-cream/10 hover:border-brand-accent/30 text-left transition-all duration-300 group cursor-pointer"
                    >
                      <span className="text-[9px] font-mono text-brand-cream/40 group-hover:text-brand-accent uppercase block mb-1">
                        &larr; {language === 'en' ? 'PREVIOUS TOPIC' : language === 'hi' ? 'पिछला विषय' : language === 'zh' ? '上一章节' : language === 'ur' ? 'پچھلا عنوان' : 'পূর্ববর্তী বিষয়'}
                      </span>
                      <span className="text-xs font-serif text-brand-white font-medium line-clamp-1">
                        {getArticleById(activeTopicDetails.previousTopicId, language)?.title}
                      </span>
                    </button>
                  ) : (
                    <div className="hidden sm:block flex-1" />
                  )}

                  {activeTopicDetails.nextTopicId ? (
                    <button
                      onClick={() => {
                        const next = getArticleById(activeTopicDetails.nextTopicId, language);
                        if (next) setSelectedTopic(next.id);
                      }}
                      className="flex-1 p-3 rounded-lg bg-brand-black/45 hover:bg-brand-black/70 border border-brand-cream/10 hover:border-brand-accent/30 text-right transition-all duration-300 group cursor-pointer"
                    >
                      <span className="text-[9px] font-mono text-brand-cream/40 group-hover:text-brand-accent uppercase block mb-1">
                        {language === 'en' ? 'NEXT TOPIC' : language === 'hi' ? 'अगला विषय' : language === 'zh' ? '下一章节' : language === 'ur' ? 'اگلا عنوان' : 'পরবর্তী বিষয়'} &rarr;
                      </span>
                      <span className="text-xs font-serif text-brand-white font-medium line-clamp-1">
                        {getArticleById(activeTopicDetails.nextTopicId, language)?.title}
                      </span>
                    </button>
                  ) : (
                    <div className="hidden sm:block flex-1" />
                  )}
                </div>
              )}
            </div>

            {/* Spec footer */}
            <div className="p-4 bg-brand-black border-t border-brand-cream/10 flex justify-between items-center text-[10px] font-mono text-brand-cream/40">
              <span>PRISMA_AX_PROTOCOL_SECURE</span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-brand-accent hover:text-brand-white transition-colors tracking-widest uppercase text-[10px] font-bold py-1 px-4 border border-brand-accent/20 hover:border-brand-accent rounded cursor-pointer"
              >
                {language === 'en' ? 'DONE' : language === 'hi' ? 'संपन्न' : language === 'zh' ? '完成' : language === 'ur' ? 'مکمل' : 'সম্পন্ন'}
              </button>
            </div>

          </div>
        </div>
      )}


      {/* PrismaX Social Section */}
      {(activeSection === 'home' || activeSection === 'about' || activeSection === 'teleoperating') && (
        <section className="py-8 border-t border-brand-cream/10 bg-brand-black/20" id="prismas-social">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-lg mx-auto mb-4">
              <h2 className="text-[10px] font-mono uppercase text-brand-cream/40 tracking-[0.25em]" id="social-title">
                {t.socialTitle}
              </h2>
            </div>

            {/* Display the icons in a SINGLE HORIZONTAL ROW */}
            <div className="flex items-center justify-center gap-6" id="social-icons-row">
              {/* Official Website */}
              <a
                href="https://www.prismax.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full border border-brand-cream/10 hover:border-brand-accent/40 bg-brand-black/40 hover:bg-brand-black/90 transition-all duration-300 hover:scale-[1.1] hover:shadow-[0_0_15px_rgba(197,168,128,0.2)] flex items-center justify-center text-brand-cream"
                id="social-link-website"
                title="Official Website"
              >
                <Globe className="w-6 h-6 hover:text-white transition-all duration-300" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/PrismaXai"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full border border-brand-cream/10 hover:border-brand-accent/40 bg-brand-black/40 hover:bg-brand-black/90 transition-all duration-300 hover:scale-[1.1] hover:shadow-[0_0_15px_rgba(197,168,128,0.2)] flex items-center justify-center text-brand-cream"
                id="social-link-x"
                title="X"
              >
                <XIcon className="w-6 h-6 hover:text-white transition-all duration-300" />
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/prismaxai"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full border border-brand-cream/10 hover:border-brand-accent/40 bg-brand-black/40 hover:bg-brand-black/90 transition-all duration-300 hover:scale-[1.1] hover:shadow-[0_0_15px_rgba(197,168,128,0.2)] flex items-center justify-center text-brand-cream"
                id="social-link-discord"
                title="Discord"
              >
                <DiscordIcon className="w-6 h-6 hover:text-white transition-all duration-300" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@PrismaX-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-full border border-brand-cream/10 hover:border-brand-accent/40 bg-brand-black/40 hover:bg-brand-black/90 transition-all duration-300 hover:scale-[1.1] hover:shadow-[0_0_15px_rgba(197,168,128,0.2)] flex items-center justify-center text-brand-cream"
                id="social-link-youtube"
                title="YouTube"
              >
                <Youtube className="w-6 h-6 hover:text-white transition-all duration-300" />
              </a>
            </div>
          </div>
        </section>
      )}


    </div>
  );
}
