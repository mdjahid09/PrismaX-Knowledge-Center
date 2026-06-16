import React, { useState } from 'react';
import Logo from './Logo';
import { translations } from '../data';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Header({ currentLanguage, setLanguage, activeSection, onNavigate, theme, setTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[currentLanguage];

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'bn', name: 'বাংলা' }
  ];

  const getAboutLabel = (lang: Language): string => {
    switch (lang) {
      case 'bn': return 'সম্পর্কে';
      default: return 'About';
    }
  };

  const menuItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: getAboutLabel(currentLanguage) },
    { id: 'teleporting', label: t.navSimulation }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    
    // Scroll window to top when clicking navigation items
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-brand-cream/10 shadow-layered-sm" id="prismas-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo size="sm" theme={theme} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-brand-cream bg-brand-white/10 shadow-sm border border-brand-cream/15'
                      : 'text-brand-cream/70 hover:text-brand-white hover:bg-brand-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Theme Selector and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 p-1 rounded-full bg-brand-black/40 border border-brand-cream/10">
              <button
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-brand-accent text-brand-black shadow-md'
                    : 'text-brand-cream/60 hover:text-brand-white hover:bg-brand-white/5'
                }`}
                title="Light Mode"
                id="theme-switch-light"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-brand-accent text-brand-black shadow-md'
                    : 'text-brand-cream/60 hover:text-brand-white hover:bg-brand-white/5'
                }`}
                title="Dark Mode"
                id="theme-switch-dark"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Language Selector (Instant Toggle - Desktop) */}
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'bn' : 'en')}
              id="language-switch-desktop"
              className="flex items-center space-x-1.5 p-1 pr-3 rounded-full bg-brand-black/40 border border-brand-cream/10 hover:border-brand-accent/25 transition-all duration-300 text-xs font-mono font-medium tracking-wide cursor-pointer focus:outline-none"
              title={currentLanguage === 'en' ? 'Switch to Bengali' : 'Switch to English'}
            >
              <div className="p-1 rounded-full bg-brand-accent text-brand-black shadow flex items-center justify-center">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="text-brand-cream font-mono">{currentLanguage === 'en' ? 'English' : 'বাংলা'}</span>
            </button>
          </div>

          {/* Mobile Menu Button & Language selector */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Language Selector (Instant Toggle - Mobile) */}
            <button
              onClick={() => setLanguage(currentLanguage === 'en' ? 'bn' : 'en')}
              id="language-switch-mobile"
              className="flex items-center space-x-1.5 p-1 pr-2.5 rounded-full bg-brand-black/40 border border-brand-cream/10 text-xs font-mono tracking-wide focus:outline-none"
              title={currentLanguage === 'en' ? 'Switch to Bengali' : 'Switch to English'}
            >
              <div className="p-1 rounded-full bg-brand-accent text-brand-black shadow flex items-center justify-center">
                <Globe className="w-3 h-3" />
              </div>
              <span className="text-brand-cream text-[11px] font-mono">{currentLanguage === 'en' ? 'EN' : 'বাংলা'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-md text-brand-cream/80 hover:text-brand-white hover:bg-brand-white/5 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark-bg/95 backdrop-blur-xl border-b border-brand-cream/10 py-4 px-4 space-y-2 animate-fade-in" id="mobile-menu-panel">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-brand-white bg-brand-cream/15 border-l-2 border-brand-accent'
                    : 'text-brand-cream/70 hover:text-brand-white hover:bg-brand-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-brand-cream/5 flex items-center justify-between px-4 animate-fade-in">
            <span className="text-[10px] font-mono text-brand-cream/40">{t.byLine}</span>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 p-1 rounded-full bg-brand-black/40 border border-brand-cream/10">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-1.5 rounded-full transition-all flex items-center justify-center ${
                    theme === 'light' ? 'bg-brand-accent text-brand-black shadow' : 'text-brand-cream/50'
                  }`}
                  id="mobile-theme-light"
                >
                  <Sun className="w-3 h-3" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-1.5 rounded-full transition-all flex items-center justify-center ${
                    theme === 'dark' ? 'bg-brand-accent text-brand-black shadow' : 'text-brand-cream/50'
                  }`}
                  id="mobile-theme-dark"
                >
                  <Moon className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center space-x-1 text-[11px] font-mono text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>LIVE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
