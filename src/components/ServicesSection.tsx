import React, { useState } from 'react';
import { SERVICES } from '../data';
import { BusinessService } from '../types';
import { Shield, Sparkles, Sun, Palette, Circle, Droplet, ArrowRight, Check, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: BusinessService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedModalService, setSelectedModalService] = useState<BusinessService | null>(null);

  const getServiceIcon = (method: string) => {
    switch (method) {
      case 'ppf': return <Shield className="w-5 h-5 text-[#00E5FF]" />;
      case 'ceramic_coating': return <Sparkles className="w-5 h-5 text-[#00E5FF]" />;
      case 'window_tint': return <Sun className="w-5 h-5 text-[#00E5FF]" />;
      case 'vinyl_wrap': return <Palette className="w-5 h-5 text-[#00E5FF]" />;
      case 'wheel_caliper': return <Circle className="w-5 h-5 text-[#00E5FF]" />;
      case 'premium_detail': return <Droplet className="w-5 h-5 text-[#00E5FF]" />;
      default: return <Sparkles className="w-5 h-5 text-[#00E5FF]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#080808] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 text-xs font-bold text-[#00E5FF] uppercase tracking-widest">
            Studio Services & Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase">
            Vehicle Customization & Detailing Services
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            Engineered for high performance, luxury protection, and head-turning automotive aesthetics. Select a service below to schedule studio time or book an appointment at our Columbia location.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-black border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.sampleImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-black/90 px-3 py-1.5 border border-white/20 flex items-center space-x-2">
                    {getServiceIcon(service.method)}
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{service.title}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/90 text-[#00E5FF] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border border-white/10 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.avgTurnaround}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {service.subtitle}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Key Features & Coverage:</p>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#00E5FF] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-neutral-400">
                    <span className="font-semibold text-neutral-200 uppercase text-[11px] tracking-wider">Popular Vehicles: </span>
                    {service.popularFor}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-3 px-4 bg-[#00E5FF] hover:bg-cyan-300 text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-colors shadow-md shadow-[#00E5FF]/10"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
                <button
                  onClick={() => setSelectedModalService(service)}
                  className="w-full py-2 px-4 bg-black hover:bg-neutral-900 text-neutral-300 hover:text-white text-xs font-medium uppercase tracking-wider border border-white/10 transition-colors"
                >
                  View Details & Specifications
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#080808] border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 text-white shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                  {getServiceIcon(selectedModalService.method)}
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider">{selectedModalService.title}</h3>
                  <p className="text-xs text-neutral-400">Est. Studio Time: {selectedModalService.avgTurnaround}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalService(null)}
                className="text-neutral-400 hover:text-white p-2 bg-black border border-white/10"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {selectedModalService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest">Service Specifications & Warranty</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedModalService.features.map((f, i) => (
                  <li key={i} className="flex items-start text-xs text-neutral-300 bg-black p-2.5 border border-white/10">
                    <Check className="w-4 h-4 text-[#00E5FF] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white bg-black border border-white/10 uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = selectedModalService;
                  setSelectedModalService(null);
                  onSelectService(s);
                }}
                className="px-5 py-2 text-xs font-bold text-black bg-[#00E5FF] hover:bg-cyan-300 uppercase tracking-widest shadow-md"
              >
                Book Studio Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
