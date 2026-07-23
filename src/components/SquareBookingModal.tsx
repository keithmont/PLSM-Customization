import React, { useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '../data';
import { BusinessService, CatalogItem } from '../types';
import { Calendar, Clock, MapPin, Phone, ShieldCheck, X, ExternalLink, Mail } from 'lucide-react';
import { PlsmLogo } from './PlsmLogo';

interface SquareBookingModalProps {
  initialService?: BusinessService | null;
  initialCatalogItem?: CatalogItem | null;
  onClose?: () => void;
}

export const SquareBookingModal: React.FC<SquareBookingModalProps> = ({
  onClose
}) => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Square Appointments script dynamically into widgetContainerRef
    const container = widgetContainerRef.current;
    if (container) {
      container.innerHTML = ''; // clear previous
      const script = document.createElement('script');
      script.src = 'https://square.site/appointments/buyer/widget/u36rarljji99mh/83BV9SV15XGCD.js';
      script.async = true;
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-[#080808] text-white p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto my-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center space-x-4">
          <PlsmLogo className="h-10 w-auto hidden sm:block" />
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-1">
              Square Appointments Live Booking
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
              <Calendar className="w-7 h-7 text-[#00E5FF]" />
              Book Studio Appointment
            </h2>
            <p className="text-xs text-neutral-400 mt-1 font-light">
              Schedule your vehicle drop-off or consultation at our Columbia, MO studio.
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white bg-black border border-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Square Live Widget Container (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-black p-6 border border-[#00E5FF]/40 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Square Appointments Live Widget
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 font-mono uppercase">
                Verified Active
              </span>
            </div>

            {/* Square Widget Script Mount Point */}
            <div className="min-h-[380px] bg-[#080808] p-4 border border-white/10 overflow-hidden flex flex-col justify-center items-center">
              <div ref={widgetContainerRef} className="w-full flex justify-center text-center">
                <p className="text-xs text-neutral-400 animate-pulse">Loading Square Appointments Widget...</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 w-full text-center">
                <a
                  href="https://square.site/appointments/buyer/widget/u36rarljji99mh/83BV9SV15XGCD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-[#00E5FF] hover:underline uppercase tracking-wider gap-1"
                >
                  <span>Open Square Booking Page In New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Contact & Direct Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Studio Contact Box */}
          <div className="bg-black p-6 border border-white/10 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00E5FF]" />
              Studio Contact Details
            </h3>

            <div className="space-y-3 text-xs text-neutral-300 font-light">
              <div className="p-3 bg-[#080808] border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Studio Location</span>
                <p className="text-white font-medium">{BUSINESS_INFO.address}</p>
              </div>

              <div className="p-3 bg-[#080808] border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Direct Phone</span>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-[#00E5FF] font-mono text-sm font-bold hover:underline block">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="p-3 bg-[#080808] border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Direct Email</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#00E5FF] font-mono text-xs font-bold hover:underline flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full py-3 bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-widest text-center shadow-md hover:bg-cyan-300 flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Studio: {BUSINESS_INFO.phone}
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-full py-3 bg-black hover:bg-neutral-900 text-white border border-white/20 font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#00E5FF]" />
                <span>Email: {BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Studio Hours Box */}
          <div className="bg-black p-5 border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00E5FF]" />
              Studio Operating Hours
            </h4>
            <p className="text-xs text-neutral-300 font-mono leading-relaxed">
              {BUSINESS_INFO.hours}
            </p>
            <p className="text-[10px] text-neutral-400 font-light">
              Secure climate-controlled facility in Columbia, MO.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
