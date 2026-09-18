import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface EventSectionProps {
  onOpenConsult: () => void;
}

export function EventSection({ onOpenConsult }: EventSectionProps) {
  return (
    <section className="py-24 md:py-36 bg-[#F7F6F3]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-300">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-500 block mb-2">
              SPECIAL EVENT & INVITATION
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight">
              이번 달 리뉴업 프리미엄 초대
            </h2>
          </div>
          <button
            onClick={onOpenConsult}
            className="mt-4 md:mt-0 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            <span>전체 이벤트 보기</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Featured Event Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 overflow-hidden group relative aspect-[16/10]"
          >
            <img
              src="https://images.unsplash.com/photo-1512290900672-17f5afc2ff5b?auto=format&fit=crop&w=1600&q=85"
              alt="Renewal Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 text-[11px] font-serif-en uppercase tracking-[0.2em] text-neutral-900">
              LIMITED EVENT
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-xs uppercase tracking-[0.2em] font-serif-en text-neutral-500">
              01 / ANTISEED & LIFTING PROGRAM
            </div>
            
            <h3 className="text-2xl md:text-4xl font-light text-neutral-900 leading-tight">
              시간을 멈추는 정밀 안티에이징,<br />
              <span className="font-serif italic">울쎄라 + 써마지</span> 결합 솔루션
            </h3>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              피부 깊은 근막층부터 표피 탄력까지 동시에 케어하여 탄력을 잃은 얼굴 라인을 밀도 있게 채워줍니다. 과하지 않고 자연스러운 탄력 리프팅의 기준을 경험해보세요.
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <button
                onClick={onOpenConsult}
                className="inline-flex items-center gap-3 bg-[#111111] text-white px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium hover:bg-neutral-800 transition-colors"
              >
                <span>이벤트 혜택 신청하기</span>
                <ArrowUpRight size={14} />
              </button>
              <div className="text-xs text-neutral-500 font-serif-en tracking-wider">
                * 선착순 한정 진행
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
