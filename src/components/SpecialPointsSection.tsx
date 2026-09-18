import React from 'react';
import { motion } from 'motion/react';
import { SPECIAL_POINTS } from '../data';

export function SpecialPointsSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-3">
            RENEW:UP CORE VALUES & EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-neutral-900 tracking-tight">
            SPECIAL POINTS
          </h2>
          <p className="text-sm md:text-base text-neutral-600 font-light mt-2">
            타협하지 않는 원칙으로 안전하고 확실한 결과를 약속합니다.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {SPECIAL_POINTS.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 group">
                    <img
                      src={item.image}
                      alt={item.enTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-serif-en tracking-widest text-neutral-900">
                      POINT {item.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-5xl md:text-7xl font-serif-en font-light text-neutral-300 tracking-tighter">
                    {item.number}
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-500 block">
                    {item.enTitle}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-light text-neutral-900 leading-snug">
                    {item.krTitle}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-700 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed border-l-2 border-neutral-300 pl-4 py-1">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
