import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EventSection } from './components/EventSection';
import { SignatureSection } from './components/SignatureSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { RealModelSection } from './components/RealModelSection';
import { YoutubeSection } from './components/YoutubeSection';
import { ReviewSection } from './components/ReviewSection';
import { SpecialPointsSection } from './components/SpecialPointsSection';
import { DoctorSection } from './components/DoctorSection';
import { SafetySection } from './components/SafetySection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F6F3] text-[#111111] selection:bg-[#111111] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenConsult={() => setConsultModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection onOpenConsult={() => setConsultModalOpen(true)} />
        <EventSection onOpenConsult={() => setConsultModalOpen(true)} />
        <SignatureSection onOpenConsult={() => setConsultModalOpen(true)} />
        <BeforeAfterSection onOpenConsult={() => setConsultModalOpen(true)} />
        <RealModelSection onOpenConsult={() => setConsultModalOpen(true)} />
        <YoutubeSection />
        <ReviewSection />
        <SpecialPointsSection />
        <DoctorSection />
        <SafetySection />
      </main>

      {/* Footer */}
      <Footer onOpenConsult={() => setConsultModalOpen(true)} />

      {/* Consultation Modal */}
      <ConsultModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />

      {/* Floating Quick Action Bar for Mobile/Tablet */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3 md:hidden">
        <a
          href="tel:0220880033"
          className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-lg"
          aria-label="전화 문의"
        >
          <Phone size={20} />
        </a>
        <button
          onClick={() => setConsultModalOpen(true)}
          className="w-12 h-12 rounded-full bg-white text-neutral-900 border border-neutral-300 flex items-center justify-center shadow-lg"
          aria-label="상담 예약"
        >
          <Calendar size={20} />
        </button>
      </div>
    </div>
  );
}
