import React from 'react';
import { BUSINESS_INFO } from '../data';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { PlsmLogo } from './PlsmLogo';

interface FooterProps {
  onOpenQuote: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-neutral-400 text-xs border-t border-white/10">
      
      {/* Top Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-3">
              <PlsmLogo className="h-10 w-auto" />
            </div>

            <p className="text-neutral-400 leading-relaxed text-[11px] font-light">
              Columbia, Missouri’s premier studio for multi-year ceramic coatings (2, 6, & 10 year), custom vinyl color change wraps, wheel and caliper painting, luxury auto detailing, and System X residential ceramic surface protection.
            </p>

            <div className="inline-flex items-center space-x-1.5 text-emerald-400 text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Verified Web Portal</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 md:text-right flex flex-col md:items-end">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Columbia Studio</h4>
            <p className="flex items-center text-[11px] font-light">
              <Phone className="w-3.5 h-3.5 text-[#00E5FF] mr-2 md:order-2 md:ml-2 md:mr-0" />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <p className="flex items-center text-[11px] font-light">
              <Mail className="w-3.5 h-3.5 text-[#00E5FF] mr-2 md:order-2 md:ml-2 md:mr-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#00E5FF] hover:underline font-mono">
                {BUSINESS_INFO.email}
              </a>
            </p>
            <p className="flex items-start text-[11px] font-light">
              <MapPin className="w-3.5 h-3.5 text-[#00E5FF] mr-2 flex-shrink-0 mt-0.5 md:order-2 md:ml-2 md:mr-0" />
              <span>{BUSINESS_INFO.address}</span>
            </p>
            <p className="text-[10px] text-neutral-500 pt-1 font-mono uppercase">{BUSINESS_INFO.hours}</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center sm:text-left text-[11px] text-neutral-500 font-light">
        <p>© {new Date().getFullYear()} PLSM Customization • Columbia, MO. All rights reserved.</p>
      </div>

    </footer>
  );
};
