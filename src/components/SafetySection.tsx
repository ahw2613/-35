import React from 'react';
import { motion } from 'motion/react';
import { SAFETY_ITEMS } from '../data';
import { ShieldCheck } from 'lucide-react';

export function SafetySection() {
  return (
    <section id="safety" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-3">
            UNCOMPROMISING SAFETY SYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-neutral-900 tracking-tight">
            환자의 안전이 곧 리뉴업의 자부심입니다
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85"
              alt="Safety System"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAFETY_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#F7F6F3] p-6 border-l-2 border-neutral-900 space-y-2"
              >
                <div className="flex items-center gap-2 text-neutral-900 font-medium text-sm">
                  <ShieldCheck size={16} className="text-neutral-900" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
