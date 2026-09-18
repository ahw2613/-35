import React from 'react';
import { motion } from 'motion/react';
import { REVIEW_ITEMS } from '../data';
import { Star } from 'lucide-react';

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 md:py-36 bg-[#F7F6F3]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-3">
            AUTHENTIC CUSTOMER STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-neutral-900 tracking-tight leading-[1.15]">
            "이제 필터 없이도,<br />
            <span className="font-serif italic font-normal">빛이 자연스럽게</span> 얼굴에 머물러요."
          </h2>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEW_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white p-8 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-6">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest font-serif-en text-neutral-900">
                    {item.procedure}
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-neutral-700 font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-900">
                  {item.author}
                </span>
                <span className="text-[11px] uppercase tracking-widest font-serif-en text-neutral-400">
                  VERIFIED REVIEW
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
