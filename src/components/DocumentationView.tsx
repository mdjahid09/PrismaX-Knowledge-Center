import React, { useState } from 'react';
import { documentationArticles } from '../data';
import { DocArticle, Language } from '../types';
import { translations } from '../data';
import { Search, Compass, BookOpen, Terminal, ChevronRight, CornerDownRight, ArrowLeft } from 'lucide-react';

interface DocumentationProps {
  currentLanguage: Language;
  onClose?: () => void;
}

export default function DocumentationView({ currentLanguage, onClose }: DocumentationProps) {
  const t = translations[currentLanguage];
  const [activeArticle, setActiveArticle] = useState<DocArticle>(documentationArticles[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Process search query
  const filteredArticles = documentationArticles.filter(article => {
    const title = currentLanguage === 'bn' ? article.bengaliTitle.toLowerCase() : currentLanguage === 'hi' ? article.hindiTitle.toLowerCase() : article.title.toLowerCase();
    const summary = currentLanguage === 'bn' ? article.bengaliSummary.toLowerCase() : currentLanguage === 'hi' ? article.hindiSummary.toLowerCase() : article.summary.toLowerCase();
    const category = currentLanguage === 'bn' ? article.bengaliCategory.toLowerCase() : currentLanguage === 'hi' ? article.hindiCategory.toLowerCase() : article.category.toLowerCase();
    const query = searchQuery.toLowerCase();
    
    return title.includes(query) || summary.includes(query) || category.includes(query);
  });

  return (
    <div className="py-12 bg-transparent text-brand-white border-t border-brand-cream/10" id="docs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back and title bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-brand-cream/10 mb-10">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-brand-accent flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" />
              {currentLanguage === 'bn' ? 'ডকুমেন্টেশন মডিউল' : currentLanguage === 'hi' ? 'दस्तावेज़ मॉड्यूल' : 'DOCUMENTATION MODULE'}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight mt-1">
              {t.docsTitle}
            </h1>
            <p className="text-sm font-sans font-light text-brand-cream/60 mt-2">
              {t.docsSubtitle}
            </p>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-brand-cream/15 hover:border-brand-accent/50 text-brand-cream hover:text-brand-white transition-all bg-brand-black/40 text-xs font-mono tracking-widest cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.docsBack.toUpperCase()}</span>
            </button>
          )}
        </div>

        {/* Documentation Portal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main left column: Search + Article indices */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Search Input Box */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-cream/35">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.docsSearchPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-brand-black/60 border border-brand-cream/10 rounded-xl text-brand-white placeholder-brand-cream/35 focus:border-brand-accent focus:outline-none text-sm font-sans"
              />
            </div>

            {/* Index Checklist Block */}
            <div className="rounded-xl border border-brand-cream/10 bg-brand-black/40 backdrop-blur-md p-4 space-y-3 cursor-border-active premium-interactive-card shadow-layered-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cream/40 px-1 pb-1 border-b border-brand-cream/5 block">
                {currentLanguage === 'bn' ? 'সূচিপত্র' : currentLanguage === 'hi' ? 'विषय-सूची' : 'TABLE OF CONTENTS'}
              </span>

              {filteredArticles.length === 0 ? (
                <p className="text-xs font-mono text-brand-cream/40 p-4 text-center">
                  {currentLanguage === 'bn' ? 'কোনো তথ্য পাওয়া যায়নি' : currentLanguage === 'hi' ? 'कोई लेख नहीं मिला' : 'NO ARTICLES MATCHING SEARCH'}
                </p>
              ) : (
                <div className="space-y-1.5" id="docs-articles-index-list">
                  {filteredArticles.map((article) => {
                    const isSelected = activeArticle.slug === article.slug;
                    const cat = currentLanguage === 'bn' ? article.bengaliCategory : currentLanguage === 'hi' ? article.hindiCategory : article.category;
                    const title = currentLanguage === 'bn' ? article.bengaliTitle : currentLanguage === 'hi' ? article.hindiTitle : article.title;

                    return (
                      <button
                        key={article.slug}
                        onClick={() => setActiveArticle(article)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-2.5 cursor-pointer ${
                          isSelected
                            ? 'border-brand-accent bg-[#202020] text-brand-white'
                            : 'border-transparent text-brand-cream/60 hover:text-brand-white hover:bg-brand-white/5'
                        }`}
                      >
                        <div className="mt-0.5">
                          {isSelected ? (
                            <CornerDownRight className="w-3.5 h-3.5 text-brand-accent" />
                          ) : (
                            <BookOpen className="w-3.5 h-3.5 opacity-50" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-[9px] font-mono uppercase tracking-widest text-brand-accent/70 leading-none mb-1">
                            {cat}
                          </span>
                          <span className="block text-sm font-serif font-medium leading-tight truncate">
                            {title}
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 opacity-30 mt-2" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick specifications specs block */}
            <div className="rounded-xl border border-brand-cream/5 bg-brand-black/20 p-4 font-mono text-[11px] text-brand-cream/50 space-y-2">
              <span className="text-[9px] text-[#C5A880] tracking-widest block font-bold uppercase">TRAINING SCHEMA: ACTIVE</span>
              <div className="flex justify-between">
                <span>API FORMAT:</span>
                <span className="text-brand-white">REST/JSON RFC_869</span>
              </div>
              <div className="flex justify-between">
                <span>COORDINATES:</span>
                <span className="text-brand-white">ISO_SPATIAL_3D</span>
              </div>
              <div className="flex justify-between">
                <span>PROTOCOL CODE:</span>
                <span className="text-brand-white text-glow">PRISMAX_NET_V20</span>
              </div>
            </div>

          </div>

          {/* Right column: Content view */}
          <div className="lg:col-span-8">
            <div className="p-6 md:p-10 rounded-xl border border-brand-cream/10 bg-brand-black/45 backdrop-blur-md min-h-[500px] flex flex-col justify-between cursor-border-active shadow-layered-lg" id="docs-content-view">
              
              <div>
                {/* Meta details */}
                <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#C5A880] mb-4">
                  <Compass className="w-4 h-4 text-brand-accent" />
                  <span>{currentLanguage === 'bn' ? activeArticle.bengaliCategory : currentLanguage === 'hi' ? activeArticle.hindiCategory : activeArticle.category}</span>
                  <span>/</span>
                  <span className="text-brand-cream/50">{activeArticle.slug.toUpperCase()}</span>
                </div>

                {/* Article Main Header */}
                <h2 className="text-2xl md:text-4xl font-serif text-brand-white tracking-tight leading-tight">
                  {currentLanguage === 'bn' ? activeArticle.bengaliTitle : currentLanguage === 'hi' ? activeArticle.hindiTitle : activeArticle.title}
                </h2>

                {/* Article Summary Quote block */}
                <p className="mt-4 p-4 rounded-lg bg-brand-white/5 border border-brand-cream/10 text-brand-cream text-sm font-sans font-light italic leading-relaxed">
                  {currentLanguage === 'bn' ? activeArticle.bengaliSummary : currentLanguage === 'hi' ? activeArticle.hindiSummary : activeArticle.summary}
                </p>

                {/* Article Content Paragraphs */}
                <div className="mt-8 space-y-6 text-brand-cream/80 text-sm md:text-base font-sans font-light leading-relaxed">
                  {(currentLanguage === 'bn' ? activeArticle.bengaliContent : currentLanguage === 'hi' ? activeArticle.hindiContent : activeArticle.content).map((para, idx) => (
                    <p key={idx} className="indent-2 select-text">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Developer note disclaimer */}
              <div className="mt-12 pt-6 border-t border-brand-cream/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-brand-cream/35 gap-3">
                <span>LAST MOD: UTC_2026-06-15</span>
                <span>SEC_HASH: x9902_LAM_COMPLIANT</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
