import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export const AboutAndLocation: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  return (
    <div id="about" className="bg-[#080808] text-white py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* About & Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 text-xs font-bold text-[#00E5FF] uppercase tracking-widest">
              Master Craftsmanship & Clean Studio
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase">
              About PLSM Customization
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {BUSINESS_INFO.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-black p-4 border border-white/10 space-y-1">
                <div className="flex items-center text-[#00E5FF] font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  Studio Address
                </div>
                <p className="text-neutral-300 font-light">{BUSINESS_INFO.address}</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">Clean install bays & VIP drop-off</p>
              </div>

              <div className="bg-black p-4 border border-white/10 space-y-1">
                <div className="flex items-center text-[#00E5FF] font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 mr-1.5" />
                  Studio Hours
                </div>
                <p className="text-neutral-300 font-light">{BUSINESS_INFO.hours}</p>
              </div>
            </div>

            <div className="bg-black p-4 border border-white/10 text-xs text-neutral-300 space-y-2">
              <div className="font-bold text-white uppercase tracking-wider flex items-center">
                <Phone className="w-4 h-4 text-[#00E5FF] mr-2" />
                Direct Line: {BUSINESS_INFO.phone}
              </div>
              <div className="font-bold text-white uppercase tracking-wider flex items-center">
                <Mail className="w-4 h-4 text-[#00E5FF] mr-2" />
                Studio Email: {BUSINESS_INFO.email}
              </div>
            </div>
          </div>

          {/* Interactive Map & Studio Info */}
          <div className="lg:col-span-6 bg-black p-6 border border-white/10 space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span>Location & Service Area</span>
              <span className="text-xs text-[#00E5FF] font-mono uppercase">Columbia Studio</span>
            </h3>

            {/* Embedded Map Representation */}
            <div className="relative w-full h-64 bg-[#080808] border border-white/10 flex items-center justify-center p-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto border border-[#00E5FF]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">{BUSINESS_INFO.name} Studio</p>
                  <p className="text-xs text-neutral-400 mt-0.5 font-light">{BUSINESS_INFO.address}</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 bg-[#00E5FF] hover:bg-cyan-300 text-black text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="bg-[#080808] p-4 border border-white/10 text-xs text-neutral-300 space-y-2 font-mono">
              <p><span className="text-neutral-500 uppercase">Service Area:</span> {BUSINESS_INFO.serviceAreas.join(', ')}</p>
            </div>

          </div>

        </div>

        {/* FAQs Accordion Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Frequently Asked Questions</h3>
            <p className="text-xs text-neutral-400 font-light">Everything you need to know about PPF warranties, ceramic coatings, tint legal limits, and studio scheduling.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-black border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white uppercase tracking-wider hover:text-[#00E5FF]"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#00E5FF]" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-neutral-300 leading-relaxed font-light border-t border-white/10 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
