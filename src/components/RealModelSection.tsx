import React from 'react';
import { motion } from 'motion/react';

interface RealModelSectionProps {
  onOpenConsult: () => void;
}

export function RealModelSection({ onOpenConsult }: RealModelSectionProps) {
  return (
    <section id="real-model" className="py-24 md:py-36 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block">
              RENEW:UP REAL MUSE & MODEL
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
              당신의 변화가<br />
              <span className="font-serif italic font-normal text-neutral-300">기준이 되는</span> 순간
            </h2>

            <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              정형화된 아름다움을 넘어, 오직 당신만이 가진 고유의 결점 없는 선과 분위기를 발굴합니다. 리뉴업의 리얼 모델들이 증명하는 품격 있는 변화를 만나보세요.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenConsult}
                className="bg-white text-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium hover:bg-neutral-200 transition-colors"
              >
                리얼 모델 지원하기
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7 relative aspect-[16/10] overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=90"
              alt="Real Model"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-104"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-serif-en text-neutral-300">
                  MUSE PROFILE 01
                </span>
                <div className="text-xl font-light text-white mt-1">
                  "과하지 않은 디테일이 완성하는 압도적인 우아함"
                </div>
              </div>
              <span className="text-xs font-serif-en uppercase tracking-widest text-neutral-400">
                RENEW:UP
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
