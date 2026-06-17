import React, { useState } from 'react';
import { translations } from '../data';
import { ShieldCheck, Coins, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface CheckoutProps {
  currentLanguage: Language;
}

export default function AmplifierCheckout({ currentLanguage }: CheckoutProps) {
  const t = translations[currentLanguage];
  const [selectedMethod, setSelectedMethod] = useState<'USD' | 'USDT' | 'USDC'>('USD');
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsCompleted(true);
    }, 1800);
  };

  return (
    <section className="py-24 bg-transparent text-brand-white relative" id="community">
      
      {/* Visual glowing layout elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#6E5336]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-brand-accent px-1">
            {t.cooperativeSub}
          </span>
          <h2 className="text-2xl md:text-4xl font-serif mt-2 tracking-tight">
            {t.membershipNetwork}
          </h2>
        </div>

        {/* Outer Premium Checkout Card */}
        <div className="p-1 md:p-1.5 rounded-2xl bg-gradient-to-br from-brand-cream/15 to-transparent border border-brand-cream/10">
          <div className="bg-[#18181A] rounded-2xl p-6 md:p-10 text-left relative overflow-hidden">
            
            {/* Success Animation view */}
            {isCompleted ? (
              <div className="py-12 text-center max-w-md mx-auto space-y-5 animate-fade-in" id="amplifier-success-view">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-brand-white">
                  {t.linkActivated}
                </h3>
                <p className="text-sm font-sans font-light text-brand-cream/65 leading-relaxed">
                  {t.membershipSuccess}
                </p>
                <div className="p-3 bg-brand-white/5 border border-brand-white/5 rounded-lg font-mono text-xs text-brand-accent">
                  TX_SIGN_APPROVED::PRISM_HASH_883a00f2px
                </div>
              </div>
            ) : (
              /* Two-column layout matching Image 15 exactly */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch" id="amplifier-selection-view">
                
                {/* Left side benefits column */}
                <div className="md:col-span- così md:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-brand-white">
                      {t.memberLabel}
                    </h3>
                    <p className="text-xs font-mono text-brand-cream/45 mt-1">
                      {t.cooperativeLevel}
                    </p>
                  </div>

                  <ul className="space-y-4 font-sans text-sm text-brand-cream/80">
                    <li className="flex items-start space-x-3">
                      <div className="p-0.5 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{t.membershipBenefit1}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="p-0.5 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{t.membershipBenefit2}</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-brand-cream/5 flex items-center space-x-3 text-xs font-mono text-brand-cream/40">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    <span>
                      {currentLanguage === 'en' ? 'SECURE DIRECT CONTRACTS' : currentLanguage === 'hi' ? 'सुरक्षित सीधे अनुबंध' : 'সুরক্ষিত সরাসরি চুক্তি'}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider line on large screens */}
                <div className="hidden md:block col-span-1 border-r border-brand-cream/10 my-1"></div>

                {/* Right side checkout selectors and actions */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-[11px] font-mono tracking-widest uppercase text-brand-cream/40">
                      {t.paymentMethod}
                    </h4>
                    <p className="text-xs text-brand-cream/60 leading-relaxed font-sans">
                      {t.paymentMethodDesc}
                    </p>

                    {/* Selector Buttons USD, USDT, USDC */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {(['USD', 'USDT', 'USDC'] as const).map((method) => {
                        const isSelected = selectedMethod === method;
                        return (
                          <button
                            key={method}
                            onClick={() => setSelectedMethod(method)}
                            id={`payment-method-${method}`}
                            className={`py-2 px-3.5 rounded-lg border text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer ${
                              isSelected
                                ? 'border-brand-accent text-brand-black bg-brand-cream'
                                : 'border-brand-cream/15 text-brand-cream/50 bg-[#1e1e20] hover:border-brand-cream/35 hover:text-brand-cream'
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculated Price Showcase */}
                  <div className="flex items-baseline justify-between pt-4 border-t border-brand-cream/5">
                    <span className="text-xs font-mono text-brand-cream/50 uppercase">
                      {t.totalInvestment}
                    </span>
                    <div className="text-right">
                      <span className="text-4xl font-serif font-semibold text-brand-white">$99</span>
                      <span className="text-[11px] font-mono text-brand-cream/40 block">
                        {t.oneTimePayment}
                      </span>
                    </div>
                  </div>

                  {/* Premium fluid action button */}
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full text-center relative py-4 px-6 rounded-xl overflow-hidden group transition-all duration-300 font-sans tracking-wider font-semibold text-xs uppercase cursor-pointer"
                  >
                    {/* Metallic fluid gold/bronze color background matching the screenshots */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6e5336] via-[#C5A880] to-[#6e5336] transition-all group-hover:scale-105 duration-500"></div>
                    <div className="absolute inset-x-0 bottom-0 top-[1px] bg-gradient-to-t from-transparent via-[#202020]/15 to-transparent pointer-events-none"></div>

                    <span className="relative z-10 text-brand-black flex items-center justify-center space-x-2 font-bold tracking-[0.15em]">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-brand-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>
                            {currentLanguage === 'en' ? 'ACTIVATING CONTRACT...' : currentLanguage === 'hi' ? 'अनुबंध सक्रिय किया जा रहा है...' : 'চুক্তি সক্রিয় করা হচ্ছে...'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-brand-black fill-brand-black/20" />
                          <span>{t.membershipBtn}</span>
                        </>
                      )}
                    </span>
                  </button>

                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
