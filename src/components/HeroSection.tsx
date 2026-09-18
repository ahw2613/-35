import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult: () => void;
}

export function HeroSection({ onOpenConsult }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f4f1ed] text-[#252321]">
      <div className="absolute inset-0">
        <img
          src="https://www.renewupps.com/images/main/info/bg.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f1ed]/95 via-[#f4f1ed]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-end px-6 pb-14 pt-32 sm:px-10 md:pb-20 lg:px-16">
        <div className="w-full max-w-[760px]">
          <p className="mb-8 text-[11px] tracking-[0.22em] text-[#8c8780]">RENEW:UP PLASTIC SURGERY</p>
          <h1 className="max-w-[700px] text-[clamp(2.8rem,5.5vw,6.5rem)] font-light leading-[1.08] tracking-[-0.055em]">
            무너진 균형을 바로 잡아,
            <br />
            <span className="font-serif-en">당신 안의 또 다른 빛</span>을 깨웁니다.
          </h1>
          <p className="mt-9 max-w-[500px] text-[14px] font-light leading-8 text-[#6e6963] md:text-[15px]">
            무너진 비율과 조화를 정밀하게 분석하여 얼굴 전체의 균형을 다시 설계하고,
            본래의 선과 분위기를 되살려 자연스럽고 만족도 높은 변화를 이끌어냅니다.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsult}
              className="bg-[#252321] px-7 py-4 text-[12px] tracking-[0.08em] text-white transition-opacity hover:opacity-80"
            >
              온라인 예약
            </button>
            <a
              href="tel:0220880033"
              className="inline-flex items-center gap-2 border border-[#aaa49c] bg-white/30 px-6 py-4 text-[12px] tracking-[0.06em] text-[#37332f] backdrop-blur-sm transition-colors hover:bg-white/70"
            >
              <Phone size={14} strokeWidth={1.5} />
              02-2088-0033
            </a>
          </div>

          <div className="mt-16 flex items-center gap-5 text-[10px] tracking-[0.16em] text-[#9a948c]">
            <span>FACE BALANCE</span>
            <span className="h-px w-12 bg-[#bdb7ae]" />
            <span>NATURAL CHANGE</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 hidden items-center gap-3 text-[10px] tracking-[0.18em] text-[#918b83] md:flex">
        <span>SCROLL</span>
        <ArrowDown size={13} strokeWidth={1} />
      </div>
    </section>
  );
}
