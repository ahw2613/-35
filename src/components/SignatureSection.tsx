import React from 'react';
import { motion } from 'motion/react';
import { SIGNATURE_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface SignatureSectionProps {
  onOpenConsult: () => void;
}

export function SignatureSection({ onOpenConsult }: SignatureSectionProps) {
  return (
    <section id="signature" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-3">
            RENEW:UP SIGNATURE PROCEDURES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.15]">
            과함 없이 깊이 있게,<br />
            <span className="font-serif italic font-normal">본질에 집중한</span> 리뉴업 시그니처
          </h2>
        </div>

        {/* Signature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {SIGNATURE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={onOpenConsult}
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-serif-en text-neutral-900">
                    {item.tag}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-serif-en text-neutral-400 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-serif-en italic">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.15em] font-medium text-neutral-900">
                  CONSULTATION
                </span>
                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
