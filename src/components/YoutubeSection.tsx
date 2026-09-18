import React from 'react';
import { motion } from 'motion/react';
import { YOUTUBE_ITEMS } from '../data';
import { Play, ArrowUpRight } from 'lucide-react';

export function YoutubeSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-2">
              RENEW:UP MEDIA & TV
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 tracking-tight">
              YOUTUBE & TV CHANNEL
            </h2>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            <span>채널 바로가기</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Youtube Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {YOUTUBE_ITEMS.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110">
                    <Play size={20} className="fill-neutral-900 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2.5 py-1 text-[11px] font-serif-en tracking-wider">
                  {item.duration}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] font-serif-en text-neutral-400">
                  <span>RENEW:UP TV</span>
                  <span>{item.views}</span>
                </div>
                <h3 className="text-base font-light text-neutral-900 group-hover:text-black leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
