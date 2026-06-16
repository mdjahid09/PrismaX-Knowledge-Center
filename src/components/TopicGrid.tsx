import React from 'react';
import { translations } from '../data';
import { Info, BrainCircuit, Activity, FastForward, HardDrive, Network, Users, ArrowRight, Cpu } from 'lucide-react';

import { Language } from '../types';

interface TopicGridProps {
  currentLanguage: Language;
  onTopicClick?: (slug: string) => void;
}

export default function TopicGrid({ currentLanguage, onTopicClick }: TopicGridProps) {
  const t = translations[currentLanguage];
  const keys = t.topics;

  const cards = [
    {
      id: 'what-is-prismax',
      icon: Info,
      title: keys.whatIsPrismax.title,
      desc: keys.whatIsPrismax.desc,
      color: 'text-blue-400',
      badge: 'PROT_X01'
    },
    {
      id: 'physical-ai',
      icon: BrainCircuit,
      title: keys.physicalAI.title,
      desc: keys.physicalAI.desc,
      color: 'text-purple-400',
      badge: 'MODEL_L1'
    },
    {
      id: 'teleoperation',
      icon: FastForward,
      title: keys.teleoperation.title,
      desc: keys.teleoperation.desc,
      color: 'text-amber-400',
      badge: 'UDP_LOW'
    },
    {
      id: 'data-layer',
      icon: HardDrive,
      title: keys.dataLayer.title,
      desc: keys.dataLayer.desc,
      color: 'text-rose-400',
      badge: 'TELEMETRY'
    },
    {
      id: 'intelligence-layer',
      icon: Network,
      title: keys.intelligenceLayer.title,
      desc: keys.intelligenceLayer.desc,
      color: 'text-indigo-400',
      badge: 'LAM_NEURAL'
    },
    {
      id: 'system-architecture',
      icon: Cpu,
      title: keys.systemArchitecture.title,
      desc: keys.systemArchitecture.desc,
      color: 'text-emerald-400',
      badge: 'CORE_ARCH'
    }
  ];

  return (
    <section className="py-24 bg-transparent text-brand-white relative overflow-hidden" id="architecture">
      {/* Structural visual background shapes */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-brand-accent-dark/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-brand-accent text-glow">
            {t.systemSpecs}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight mt-2 text-brand-white">
            {t.topicTitle}
          </h2>
          <p className="text-sm font-sans font-light text-brand-cream/65 mt-3 leading-relaxed">
            {t.topicSubtitle}
          </p>
        </div>

        {/* 1/2/3 Grid of Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="topic-cards-grid">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onTopicClick?.(card.id)}
                id={`topic-card-${card.id}`}
                className="group relative p-8 immersive-card cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Background lighting flare */}
                <div className="absolute -right-12 -top-12 w-28 h-28 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/15 transition-all duration-500"></div>

                <div>
                  {/* Card Header Label */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-white/5 group-hover:bg-brand-accent/10 rounded-lg transition-colors">
                      <IconComponent className={`w-6 h-6 ${card.color} group-hover:text-brand-white transition-colors`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cream/35 bg-brand-white/5 px-2 py-0.5 rounded">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-serif text-brand-white group-hover:text-brand-accent font-medium tracking-tight transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm font-sans font-light text-brand-cream/60 mt-3 leading-relaxed group-hover:text-brand-cream/80 transition-colors">
                    {card.desc}
                  </p>
                </div>

                {/* Footer anchor */}
                <div className="mt-8 pt-4 border-t border-brand-cream/5 flex items-center justify-between text-xs font-mono text-brand-cream/45 group-hover:text-brand-white transition-colors">
                  <span>{t.readFramework}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
