import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SquareBookingModal } from './components/SquareBookingModal';
import { AboutAndLocation } from './components/AboutAndLocation';
import { Footer } from './components/Footer';
import { CustomerNoticeModal } from './components/CustomerNoticeModal';
import { BusinessService } from './types';
import { Calendar } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<BusinessService | null>(null);

  const handleOpenBookingForService = (service: BusinessService) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] font-sans text-white flex flex-col selection:bg-[#00E5FF] selection:text-black">
      
      {/* Lightbox Modal Announcement */}
      <CustomerNoticeModal />

      {/* Main Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setShowBookingModal(false);
        }}
        onOpenQuote={() => setShowBookingModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Square Appointment Booking View */}
        {showBookingModal ? (
          <div className="px-4 py-8 max-w-7xl mx-auto">
            <SquareBookingModal
              initialService={selectedService}
              onClose={() => setShowBookingModal(false)}
            />
          </div>
        ) : (
          <>
            {/* Home view */}
            {activeTab === 'home' && (
              <>
                <Hero
                  onOpenQuote={() => setShowBookingModal(true)}
                />
                <ServicesSection onSelectService={handleOpenBookingForService} />
                <AboutAndLocation />
              </>
            )}

            {activeTab === 'services' && (
              <ServicesSection onSelectService={handleOpenBookingForService} />
            )}

            {(activeTab === 'about' || activeTab === 'faq') && (
              <AboutAndLocation />
            )}
          </>
        )}

      </main>

      {/* Sticky Bottom Floating Booking CTA Bar on Mobile */}
      {!showBookingModal && (
        <div className="fixed bottom-4 right-4 z-40 sm:hidden">
          <button
            onClick={() => setShowBookingModal(true)}
            className="flex items-center space-x-2 bg-[#00E5FF] text-black px-4 py-3 font-black text-xs shadow-2xl uppercase tracking-widest border border-black"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer
        onOpenQuote={() => setShowBookingModal(true)}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setShowBookingModal(false);
        }}
      />

    </div>
  );
}
