import React from 'react';
import Logo from './Logo';
import { translations } from '../data';
import { Github, Globe, Terminal, ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (section: string) => void;
}

export default function Footer({ currentLanguage, setLanguage, onNavigate }: FooterProps) {
  const t = translations[currentLanguage];
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-brand-cream/10 relative overflow-hidden" id="prismas-footer">
      
      {/* Absolute faint brand glowing grid background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(223,216,208,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(223,216,208,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo size="sm" />
            </div>
            <p className="text-sm font-sans font-light text-brand-cream/60 max-w-sm leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex items-center space-x-3 text-brand-cream/30 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5 text-brand-accent/60" />
              <span>v2.8.1-PROD</span>
              <span>•</span>
              <span>{t.byLine}</span>
            </div>
          </div>

          {/* Quick Navigation Items */}
          <div>
            <h4 className="text-xs font-mono uppercase text-brand-cream/40 tracking-[0.2em] mb-4">
              {t.coreSubsystem}
            </h4>
            <ul className="space-y-3 font-sans text-sm text-brand-cream/70">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-white transition-colors cursor-pointer text-left">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-brand-white transition-colors cursor-pointer text-left">
                  {currentLanguage === 'bn' ? 'সম্পর্কে' : currentLanguage === 'hi' ? 'हमारे بارے میں' : currentLanguage === 'zh' ? '关于我们' : currentLanguage === 'ur' ? 'ہمارے بارے میں' : 'About'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('control-center')} className="hover:text-brand-white transition-colors cursor-pointer text-left">
                  {t.navSimulation}
                </button>
              </li>
            </ul>
          </div>

          {/* Settings & Language Swap */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-brand-cream/40 tracking-[0.2em] mb-4">
              {t.regionLanguage}
            </h4>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center space-x-2.5 px-4 py-2.5 rounded-lg border border-brand-cream/10 hover:border-brand-accent/40 bg-[#161618] text-brand-cream hover:text-brand-white transition-all text-sm font-sans text-left cursor-pointer focus:outline-none"
                >
                  <Globe className="w-4 h-4 text-brand-accent" />
                  <span className="flex-1">
                    {currentLanguage === 'en' ? 'English (EN)' : currentLanguage === 'hi' ? 'हिन्दी (HI)' : currentLanguage === 'bn' ? 'বাংলা (BN)' : currentLanguage === 'zh' ? '简体中文 (ZH)' : 'اردو (UR)'}
                  </span>
                  <span className="text-[10px] font-mono text-brand-cream/40 bg-brand-black px-1.5 py-0.5 rounded">
                    {currentLanguage.toUpperCase()}
                  </span>
                </button>

                {dropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute left-0 bottom-full mb-2 w-full rounded-xl border border-brand-cream/15 bg-brand-black/95 backdrop-blur-xl p-1.5 shadow-2xl z-50 animate-fade-in flex flex-col space-y-1">
                      {(['en', 'hi', 'bn', 'zh', 'ur'] as const).map((lang) => {
                        const isSelected = currentLanguage === lang;
                        const labels: Record<Language, string> = {
                          en: 'English (EN)',
                          hi: 'हिन्दी (HI)',
                          bn: 'বাংলা (BN)',
                          zh: '简体中文 (ZH)',
                          ur: 'اردو (UR)'
                        };
                        return (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguage(lang);
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono tracking-wide transition-all cursor-pointer ${
                              isSelected
                                ? 'text-brand-black bg-brand-accent font-semibold'
                                : 'text-brand-cream/70 hover:text-brand-white hover:bg-brand-white/5'
                            }`}
                          >
                            {labels[lang]}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-2 text-xs font-mono text-brand-cream/40 hover:text-brand-white transition-colors py-2 focus:outline-none cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t.scrollToTop}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Separator and copyright info */}
        <div className="mt-16 pt-8 border-t border-brand-cream/5 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-brand-cream/40">
          <p>© {currentYear} PrismaX Technologies Inc. All telemetry and spatial rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#privacy" className="hover:text-brand-cream/70 transition-colors">SEC_PROTOCOL_X99</a>
            <a href="#terms" className="hover:text-brand-cream/70 transition-colors">URDF_COMPLIANT</a>
            <a href="#security" className="hover:text-brand-cream/70 transition-colors">DECENTRALIZED_AI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
