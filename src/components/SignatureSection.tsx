import React from 'react';
import { SIGNATURE_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface SignatureSectionProps {
  onOpenConsult: () => void;
}

export function SignatureSection({ onOpenConsult }: SignatureSectionProps) {
  return (
    <section id="signature" className="py-28 md:py-40 bg-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-14">
        <div className="max-w-[720px] mb-24">
          <p className="text-[11px] tracking-[0.14em] text-neutral-400 mb-5">SIGNATURE</p>
          <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-light text-neutral-900 tracking-[-0.04em] leading-[1.12]">
            과함 없이 깊이 있게,
            <br />
            <span className="font-serif-en italic">본질에 집중합니다.</span>
          </h2>
          <p className="mt-7 text-sm leading-7 text-neutral-500 max-w-[540px]">
            리뉴업의 시그니처 시술은 개인의 얼굴 구조와 비율을 먼저 살피고, 필요한 변화만 정교하게 설계합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-16">
          {SIGNATURE_ITEMS.map((item) => (
            <article key={item.id} className="group cursor-pointer" onClick={onOpenConsult}>
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.12em] text-white bg-black/55 px-2.5 py-1.5">{item.tag}</span>
              </div>
              <p className="text-[10px] tracking-[0.12em] text-neutral-400 mb-2">{item.category}</p>
              <h3 className="text-xl font-light text-neutral-900">{item.title}</h3>
              <p className="mt-2 text-xs text-neutral-500 leading-5">{item.description}</p>
              <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between text-[10px] tracking-[0.12em] text-neutral-700">
                <span>자세히 보기</span>
                <ArrowUpRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
