import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsult: () => void;
}

export function HeroSection({ onOpenConsult }: HeroSectionProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111111] text-white">
      {/* Background Image with subtle zoom / parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=2000&q=90')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12 flex flex-col justify-between min-h-[75vh]">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between border-b border-white/20 pb-6"
        >
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-300">
              RENEW:UP PLASTIC SURGERY CLINIC
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-xs tracking-widest text-neutral-400 font-serif-en">
            <span>GANGNAM, SEOUL</span>
            <span><span>•</span></span>
            <span>02-2088-0033</span>
          </div>
        </motion.div>

        {/* Center Main Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] text-neutral-300 font-serif-en">
              Face Rebuilding & Anti-Aging
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white">
              무너진 균형을 바로 잡아,<br />
              <span className="font-serif italic font-normal text-neutral-200">당신 안의 또 다른 빛</span>을 깨웁니다.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed pt-2">
              무너진 비율과 조화를 정밀하게 분석하여 얼굴 전체의 균형을 다시 설계하고, 
              본래의 선과 분위기를 되살려 자연스럽고 만족도 높은 변화를 이끌어냅니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-6"
          >
            <div className="text-left lg:text-right space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-serif-en block">
                Brand Philosophy
              </span>
              <p className="text-xl font-light tracking-tight text-white">
                얼굴의 시간을 되돌리는 리뉴업
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:0220880033"
                className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs uppercase tracking-[0.15em] transition-all border border-white/20"
              >
                <Phone size={14} />
                <span>02-2088-0033</span>
              </a>
              <button
                onClick={onOpenConsult}
                className="px-6 py-3.5 bg-white text-neutral-900 hover:bg-neutral-200 text-xs uppercase tracking-[0.15em] font-medium transition-all"
              >
                상담 예약하기
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-between pt-6 border-t border-white/20 text-xs text-neutral-400 font-serif-en tracking-wider"
        >
          <div>SCROLL TO DISCOVER</div>
          <div className="flex items-center gap-2">
            <span>RENEW:UP SIGNATURE</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
