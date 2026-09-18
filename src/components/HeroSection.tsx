import React from 'react';
import { Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult: () => void;
}

export function HeroSection({ onOpenConsult }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#151515] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.34) 52%, rgba(0,0,0,.16) 100%), linear-gradient(0deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.05) 62%), url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=2200&q=90')`
        }}
      />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-14 pt-32 pb-14 md:pb-20">
        <div className="max-w-[820px]">
          <p className="mb-7 text-[11px] tracking-[0.18em] text-white/65">RENEW:UP PLASTIC SURGERY</p>
          <h1 className="text-[clamp(2.7rem,6vw,6.3rem)] font-light leading-[1.05] tracking-[-0.045em]">
            무너진 균형을 바로 잡아,
            <br />
            <span className="font-serif-en italic text-white/85">당신 안의 또 다른 빛</span>을 깨웁니다.
          </h1>
          <p className="mt-8 max-w-[610px] text-sm md:text-base leading-8 text-white/70 font-light">
            얼굴의 비율과 조화를 세밀하게 분석해 본래의 선과 분위기를 살립니다.
            과한 변화보다 오래 만족할 수 있는 자연스러운 결과를 지향합니다.
          </p>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-white/20 pt-6">
          <div className="flex items-center gap-6 text-[11px] tracking-[0.12em] text-white/55">
            <span>GANGNAM, SEOUL</span>
            <span>02-2088-0033</span>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:0220880033"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/30 text-xs tracking-[0.08em] hover:bg-white hover:text-black transition-colors"
            >
              <Phone size={14} />
              전화 상담
            </a>
            <button
              onClick={onOpenConsult}
              className="px-6 py-3.5 bg-white text-black text-xs tracking-[0.08em] hover:bg-white/85 transition-colors"
            >
              상담 예약
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
