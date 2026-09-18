import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BEFORE_AFTER_ITEMS } from '../data';
import { BeforeAfterItem } from '../types';
import { ArrowUpRight, Eye } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenConsult: () => void;
}

export function BeforeAfterSection({ onOpenConsult }: BeforeAfterSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  const categories = ['전체', '리프팅/안티에이징', '지방이식/볼륨', '코성형'];

  const filteredItems = selectedCategory === '전체' 
    ? BEFORE_AFTER_ITEMS 
    : BEFORE_AFTER_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="before-after" className="py-24 md:py-36 bg-[#F7F6F3]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block mb-3">
              REAL CONVERSION RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-neutral-900 tracking-tight">
              BEFORE & AFTER
            </h2>
            <p className="text-sm md:text-base text-neutral-600 font-light mt-2">
              전후사진으로 검증하는 리뉴얼의 아름다운 변화
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-white p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-6 cursor-pointer" onClick={onOpenConsult}>
                <img
                  src={activeTab === 'after' ? item.afterImage : item.beforeImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 text-[10px] uppercase tracking-widest font-serif-en flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'after' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  {activeTab === 'after' ? 'AFTER (3개월)' : 'BEFORE'}
                </div>

                {/* Toggle Button on Image */}
                <div className="absolute bottom-4 right-4 flex bg-white/90 backdrop-blur-md p-1 border border-neutral-200">
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveTab('before'); }}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium transition-colors ${activeTab === 'before' ? 'bg-[#111111] text-white' : 'text-neutral-700'}`}
                  >
                    Before
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveTab('after'); }}
                    className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium transition-colors ${activeTab === 'after' ? 'bg-[#111111] text-white' : 'text-neutral-700'}`}
                  >
                    After
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] font-serif-en text-neutral-400">
                  <span>{item.category}</span>
                  <span>담당: {item.doctor}</span>
                </div>
                
                <h3 className="text-lg font-light text-neutral-900 group-hover:text-black">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={onOpenConsult}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>VIEW MORE</span>
                    <ArrowUpRight size={14} />
                  </button>
                  <span className="text-[11px] text-neutral-400 font-serif-en">VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
