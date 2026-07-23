import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Award, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { VehicleBrandStrip } from './BrandLogos';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {

  return (
    <section className="relative bg-[#080808] text-white overflow-hidden py-16 lg:py-20 border-b border-white/10">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Verification Badge */}
            <div className="inline-flex items-center space-x-2 bg-black border border-[#00E5FF]/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#00E5FF] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
              <span>Verified Clean Studio • Certified Master Technicians</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-none uppercase">
              Elevate Your Ride With <span className="text-[#00E5FF] font-light">Precision Customization</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Columbia’s premier studio for multi-year ceramic coatings (2, 6, & 10 year), custom vinyl color change wraps, wheel and caliper painting, luxury auto detailing, and System X residential ceramic coatings.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-neutral-200">
              <div className="flex items-center space-x-2 bg-black p-3 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span className="uppercase tracking-wider">Multi-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-black p-3 border border-white/10">
                <Clock className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span className="uppercase tracking-wider">Dust-Free Clean Bays</span>
              </div>
              <div className="flex items-center space-x-2 bg-black p-3 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span className="uppercase tracking-wider">Master Technicians</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="flex items-center justify-center px-8 py-4 font-bold text-black bg-[#00E5FF] hover:bg-cyan-300 shadow-xl shadow-[#00E5FF]/20 text-xs tracking-widest uppercase transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 mr-2 text-black" />
                Book Studio Appointment
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center px-6 py-4 font-semibold text-white bg-black hover:bg-neutral-900 border border-white/20 text-xs tracking-widest uppercase transition-colors hover:border-[#00E5FF]"
              >
                <span>Call Studio: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00E5FF] tracking-tight">10+ Years</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Industry Experience & Award Recipient</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">210+</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Over 210 5 Star Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#00E5FF] tracking-tight">Certified</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400">Master Install Studio</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Studio Card - Urban Vehicle Backdrop */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/10 shadow-2xl bg-black">
              
              {/* Urban Vehicle Custom Studio Image */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
                  alt="PLSM Customization Auto Studio - Urban Custom Vehicle"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Floating Info Overlay Box */}
              <div className="p-6 space-y-4 bg-black border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-[#00E5FF]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-white">Precision Clean Installation</span>
                  </div>
                  <span className="text-[10px] bg-[#00E5FF]/10 text-[#00E5FF] px-2.5 py-1 uppercase tracking-wider font-semibold border border-[#00E5FF]/30">
                    Columbia, MO Studio
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Our dust-free clean bays, master certified technicians, and top-tier materials ensure flawless wrapped edges, deep gloss reflections, and uncompromised finish quality.
                </p>

                <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/10">
                  <span className="uppercase text-[11px] tracking-wider">📍 {BUSINESS_INFO.address}</span>
                  <span className="text-[#00E5FF] font-semibold text-[11px] uppercase tracking-wider">{BUSINESS_INFO.phone}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Supported Premium Brand Logos Strip */}
        <VehicleBrandStrip />

      </div>
    </section>
  );
};
