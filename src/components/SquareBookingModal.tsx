import React, { useState, useEffect, useRef } from 'react';
import { BUSINESS_INFO } from '../data';
import { BusinessService, CatalogItem } from '../types';
import { Calendar, Clock, MapPin, Phone, ShieldCheck, X, CheckCircle, ExternalLink, Send, Mail } from 'lucide-react';
import plsmLogo from '../assets/images/plsm_logo_1784759145416.jpg';

interface SquareBookingModalProps {
  initialService?: BusinessService | null;
  initialCatalogItem?: CatalogItem | null;
  onClose?: () => void;
}

export const SquareBookingModal: React.FC<SquareBookingModalProps> = ({
  initialService,
  initialCatalogItem,
  onClose
}) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    initialService?.title || initialCatalogItem?.name || 'Multi-Year Ceramic Coating'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && (clientEmail || clientPhone)) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#080808] text-white p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl max-w-5xl mx-auto my-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div className="flex items-center space-x-4">
          <img src={plsmLogo} alt="PLSM Logo" className="h-12 w-auto object-contain hidden sm:block" />
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
            className="p-2 text-neutral-400 hover:text-white bg-black border border-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {submitted ? (
        <div className="bg-black p-8 border border-[#00E5FF]/40 text-center space-y-6 max-w-xl mx-auto my-6">
          <div className="w-16 h-16 bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto border border-[#00E5FF]/40">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider">Booking Request Received!</h3>
            <p className="text-sm text-neutral-300 font-light">
              Thank you, <strong className="text-white">{clientName}</strong>. Our Columbia studio team will confirm your slot.
            </p>
          </div>

          <div className="bg-[#080808] p-4 border border-white/10 text-left text-xs text-neutral-300 space-y-2 font-mono">
            <p><span className="text-neutral-500 uppercase">Service:</span> {selectedService}</p>
            <p><span className="text-neutral-500 uppercase">Vehicle:</span> {vehicleInfo || 'Not specified'}</p>
            <p><span className="text-neutral-500 uppercase">Preferred Date:</span> {preferredDate || 'As soon as possible'}</p>
            <p><span className="text-neutral-500 uppercase">Location:</span> {BUSINESS_INFO.address}</p>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            A PLSM Customization technician will review your request and contact you via phone or email (<a href="mailto:plsmcustomization@gmail.com" className="text-[#00E5FF] underline">plsmcustomization@gmail.com</a>) within 1-2 hours to confirm details.
          </p>

          <div className="pt-2">
            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-widest hover:bg-cyan-300"
              >
                Return to Studio Portal
              </button>
            )}
          </div>
        </div>
      ) : (
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
              <div className="min-h-[350px] bg-[#080808] p-4 border border-white/10 overflow-hidden flex flex-col justify-center items-center">
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

            {/* Quick Request Backup Form */}
            <form onSubmit={handleSubmit} className="bg-black p-6 border border-white/10 space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Quick Studio Callback Request
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Service Required:</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white uppercase text-xs"
                  >
                    <option value="Multi-Year Ceramic Coating">Multi-Year Ceramic Coating (2, 6, 10-Yr)</option>
                    <option value="Custom Vinyl Color Change Wrap">Custom Vinyl Color Change Wrap</option>
                    <option value="Wheel & Caliper Painting">Wheel & Caliper Painting</option>
                    <option value="Premium Auto Detailing">Premium Auto Detailing</option>
                    <option value="Residential & Commercial Ceramic Coatings">Residential & Commercial Ceramic Coatings</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(573) 000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Vehicle or Surface Details</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024 Corvette / Kitchen Countertops"
                      value={vehicleInfo}
                      onChange={(e) => setVehicleInfo(e.target.value)}
                      className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#00E5FF] hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Direct Callback Request</span>
              </button>
            </form>

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
                  className="w-full py-3 bg-[#00E5FF] text-black font-bold text-xs uppercase tracking-widest text-center shadow-md hover:bg-cyan-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Studio: {BUSINESS_INFO.phone}
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="w-full py-3 bg-black hover:bg-neutral-900 text-white border border-white/20 font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
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
                Drop-offs accepted starting at 8:00 AM. Secure climate-controlled facility.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
