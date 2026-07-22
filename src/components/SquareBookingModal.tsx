import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { BusinessService, CatalogItem } from '../types';
import { Calendar, Clock, MapPin, Phone, ShieldCheck, X, CheckCircle, ExternalLink, Send } from 'lucide-react';

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
    initialService?.title || initialCatalogItem?.name || 'Paint Protection Film (PPF)'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && (clientEmail || clientPhone)) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#080808] text-white p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto my-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-2">
            Square Online Appointment Booking
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
            <Calendar className="w-7 h-7 text-[#00E5FF]" />
            Book Studio Appointment
          </h2>
          <p className="text-xs text-neutral-400 mt-1 font-light">
            Schedule your vehicle drop-off or consultation at our Columbia, MO studio.
          </p>
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
            A PLSM Customization technician will review your request and contact you via phone or email within 1-2 hours to confirm your drop-off details.
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
          
          {/* Left Column: Form / Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Square Site Placeholder Frame */}
            <div className="bg-black p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Square Online Booking Portal
                </span>
                <span className="text-[10px] text-emerald-400 font-mono uppercase">Live Integration Ready</span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Reserve your studio bay slot or schedule a vehicle inspection directly. Select your service below or request a custom appointment slot.
              </p>

              <div className="bg-[#080808] p-4 border border-white/10 text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Studio Location:</span>
                    <span className="text-neutral-400 font-light">{BUSINESS_INFO.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                  <Phone className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Line:</span>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-[#00E5FF] hover:underline font-mono">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleSubmit} className="bg-black p-6 border border-white/10 space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Quick Appointment Request Form
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Service Required:</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white uppercase text-xs"
                  >
                    <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                    <option value="Ceramic & Graphene Coating">Ceramic & Graphene Coating</option>
                    <option value="Nano-Ceramic Window Tint">Nano-Ceramic Window Tint</option>
                    <option value="Custom Vinyl Color Change Wrap">Custom Vinyl Color Change Wrap</option>
                    <option value="Wheel Powder Coating & Caliper Paint">Wheel Powder Coating & Caliper Paint</option>
                    <option value="Premium Auto Detailing">Premium Auto Detailing</option>
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
                    <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Vehicle Year/Make/Model</label>
                    <input
                      type="text"
                      placeholder="e.g. 2024 Porsche 911 GT3"
                      value={vehicleInfo}
                      onChange={(e) => setVehicleInfo(e.target.value)}
                      className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 mb-1 font-medium uppercase text-[10px] tracking-wider">Preferred Date / Time</label>
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday Morning"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#080808] border border-white/20 focus:border-[#00E5FF] px-3.5 py-2.5 text-white text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#00E5FF] hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Appointment Request</span>
              </button>
            </form>

          </div>

          {/* Right Column: Square Embedding Box & Studio Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Square Site Container Preview */}
            <div className="bg-black p-6 border border-[#00E5FF]/40 text-center space-y-4">
              <div className="w-12 h-12 bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto border border-[#00E5FF]/30">
                <ExternalLink className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Embedded Square Booking Site
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                  Our official Square appointment scheduling site is embedded directly for instant studio slot reservation.
                </p>
              </div>

              {/* Mock Embedded Square Iframe container */}
              <div className="bg-[#080808] border border-white/10 p-4 text-left space-y-3">
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono border-b border-white/10 pb-2">
                  <span>SQUARE ONLINE SITE</span>
                  <span className="text-[#00E5FF]">COLUMBIA, MO</span>
                </div>
                <div className="space-y-2 text-xs text-neutral-300 font-light">
                  <p className="flex justify-between"><span>Studio Bay Slot:</span> <strong className="text-white font-mono">Available</strong></p>
                  <p className="flex justify-between"><span>Consultation Fee:</span> <strong className="text-emerald-400 font-mono">Free ($0)</strong></p>
                  <p className="flex justify-between"><span>Location:</span> <strong className="text-white text-[11px] font-mono">Stephens Station Rd</strong></p>
                </div>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center w-full py-3 bg-black hover:bg-neutral-900 border border-white/20 text-[#00E5FF] font-bold text-xs uppercase tracking-widest transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Call Studio: {BUSINESS_INFO.phone}
              </a>
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
              <p className="text-[10px] text-neutral-500 font-light">
                Drop-offs accepted starting at 8:00 AM. Secure vehicle holding area available.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
