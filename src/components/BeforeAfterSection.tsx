import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenConsult: () => void;
}

export function BeforeAfterSection({ onOpenConsult }: BeforeAfterSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const categories = ['전체', '리프팅/안티에이징', '지방이식/볼륨', '코성형'];
  const filteredItems = selectedCategory === '전체' ? BEFORE_AFTER_ITEMS : BEFORE_AFTER_ITEMS.filter(item => item.category === selectedCategory);
  const featured = filteredItems[0];

  if (!featured) return null;

  return (
    <section id="before-after" className="bg-white py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[11px] tracking-[0.22em] text-[#9b958e]">BEFORE & AFTER</p>
            <h2 className="text-[clamp(2.2rem,4vw,4.6rem)] font-light leading-[1.08] tracking-[-0.05em] text-[#292623]">
              전후사진으로 검증하는
              <br />
              <span className="font-serif-en">아름다운 변화</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-[#8a847d]">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border-b pb-1 transition-colors ${selectedCategory === category ? 'border-[#292623] text-[#292623]' : 'border-transparent'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <article className="grid overflow-hidden bg-[#f5f2ee] lg:grid-cols-[1.65fr_0.35fr]">
          <div className="relative aspect-[1.25/1] overflow-hidden lg:aspect-[1.6/1]">
            <img
              src={activeTab === 'after' ? featured.afterImage : featured.beforeImage}
              alt={featured.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 flex bg-white/90 p-1 backdrop-blur-sm">
              <button onClick={() => setActiveTab('before')} className={`px-4 py-2 text-[10px] tracking-[0.1em] ${activeTab === 'before' ? 'bg-[#292623] text-white' : 'text-[#5d5751]'}`}>BEFORE</button>
              <button onClick={() => setActiveTab('after')} className={`px-4 py-2 text-[10px] tracking-[0.1em] ${activeTab === 'after' ? 'bg-[#292623] text-white' : 'text-[#5d5751]'}`}>AFTER</button>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-[10px] tracking-[0.18em] text-[#9b958e]">REAL RESULT</p>
              <h3 className="mt-6 text-2xl font-light leading-[1.3] tracking-[-0.03em] text-[#292623]">{featured.title}</h3>
              <p className="mt-5 text-[13px] font-light leading-7 text-[#817b74]">{featured.summary}</p>
              <p className="mt-8 text-[11px] text-[#9b958e]">담당 {featured.doctor}</p>
            </div>
            <button onClick={onOpenConsult} className="mt-12 flex items-center justify-between border-t border-[#ded8d1] pt-5 text-[11px] tracking-[0.12em] text-[#4d4843]">
              <span>MORE VIEW</span>
              <ArrowUpRight size={15} strokeWidth={1.2} />
            </button>
          </div>
        </article>

        {filteredItems.length > 1 && (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {filteredItems.slice(1).map(item => (
              <button key={item.id} onClick={onOpenConsult} className="group grid grid-cols-[0.9fr_1.1fr] bg-[#f8f6f3] text-left">
                <div className="aspect-square overflow-hidden">
                  <img src={item.afterImage} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="text-[10px] tracking-[0.16em] text-[#9b958e]">{item.category}</p>
                  <h3 className="mt-4 text-xl font-light tracking-[-0.02em] text-[#292623]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#817b74]">{item.summary}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        <p className="mt-10 text-[11px] leading-5 text-[#aaa49d]">수술 후 출혈, 감염, 염증 등 부작용이 있을 수 있으므로 주의가 필요합니다.</p>
      </div>
    </section>
  );
}
