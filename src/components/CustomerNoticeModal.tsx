import React, { useState } from 'react';
import { AlertTriangle, Phone, X, ArrowRight, Mail } from 'lucide-react';
import plsmLogo from '../assets/images/plsm_logo_1784759145416.jpg';

interface CustomerNoticeModalProps {
  onClose?: () => void;
}

export const CustomerNoticeModal: React.FC<CustomerNoticeModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const handleDismiss = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#080808] border-2 border-[#00E5FF]/60 p-6 sm:p-8 shadow-2xl shadow-[#00E5FF]/10 text-white">
        
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-black border border-white/10 transition-colors"
          aria-label="Close Notice"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo & Notice Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-black border border-[#00E5FF]/40 flex items-center justify-center p-1 flex-shrink-0">
            <img src={plsmLogo} alt="PLSM Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-2.5 py-0.5">
              Important Studio Announcement
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1">
              To My Loyal Customers
            </h3>
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed font-light border-y border-white/10 py-5 my-2">
          <p className="text-white font-medium">
            My website was recently hacked. Apologies for any confusion or inconvenience this may have caused!
          </p>
          <p>
            Our current site is actively being restored and is a work in progress. All studio services, Detailing, Ceramic Coating and Customization remain fully operational in Columbia, MO.
          </p>
          <p className="text-xs text-[#00E5FF] font-mono space-y-1">
            <div>
              Call or text directly: <a href="tel:5732198800" className="underline font-bold text-white">(573) 219-8800</a>
            </div>
            <div>
              Email us: <a href="mailto:plsmcustomization@gmail.com" className="underline font-bold text-white">plsmcustomization@gmail.com</a>
            </div>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="tel:5732198800"
            className="flex-1 flex items-center justify-center py-3.5 px-4 bg-[#00E5FF] hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-widest transition-colors shadow-lg shadow-[#00E5FF]/20"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Call: (573) 219-8800</span>
          </a>

          <a
            href="mailto:plsmcustomization@gmail.com"
            className="flex items-center justify-center py-3.5 px-4 bg-black hover:bg-neutral-900 text-[#00E5FF] border border-[#00E5FF]/40 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <Mail className="w-4 h-4 mr-1.5" />
            <span>Email</span>
          </a>

          <button
            onClick={handleDismiss}
            className="flex items-center justify-center py-3.5 px-4 bg-black hover:bg-neutral-900 text-neutral-300 hover:text-white border border-white/20 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-[#00E5FF]" />
          </button>
        </div>

      </div>
    </div>
  );
};
