import React from 'react';
import { SIGNATURE_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface SignatureSectionProps {
  onOpenConsult: () => void;
}

export function SignatureSection({ onOpenConsult }: SignatureSectionProps) {
  const lead = SIGNATURE_ITEMS[0];
  const rest = SIGNATURE_ITEMS.slice(1);

  return (
    <section id="signature" className="bg-[#f8f6f3] py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[11px] tracking-[0.22em] text-[#9b958e]">SIGNATURE</p>
            <h2 className="text-[clamp(2.2rem,4vw,4.6rem)] font-light leading-[1.1] tracking-[-0.05em] text-[#292623]">
              과함 없이 깊이 있게,
              <br />
              <span className="font-serif-en">본질에 집중한</span> 리뉴업 시그니처
            </h2>
          </div>
          <p className="max-w-[330px] text-[13px] font-light leading-7 text-[#817b74]">
            개인의 얼굴 구조와 비율을 먼저 살피고 필요한 변화만 정교하게 설계합니다.
          </p>
        </div>

        <article
          onClick={onOpenConsult}
          className="group grid cursor-pointer overflow-hidden bg-white md:grid-cols-[1.35fr_0.65fr]"
        >
          <div className="aspect-[1.25/1] overflow-hidden md:aspect-auto md:min-h-[620px]">
            <img
              src={lead.image}
              alt={lead.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-[10px] tracking-[0.18em] text-[#9a948d]">{lead.tag}</p>
              <h3 className="mt-8 text-3xl font-light leading-[1.25] tracking-[-0.035em] text-[#292623] lg:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-5 text-sm font-light leading-7 text-[#77716a]">{lead.subtitle}</p>
              <p className="mt-8 text-[13px] font-light leading-7 text-[#8a847d]">{lead.description}</p>
            </div>
            <div className="mt-16 flex items-center justify-between border-t border-[#e7e2dc] pt-5 text-[11px] tracking-[0.12em] text-[#4d4843]">
              <span>VIEW MORE</span>
              <ArrowUpRight size={16} strokeWidth={1.3} />
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((item) => (
            <article
              key={item.id}
              onClick={onOpenConsult}
              className="group cursor-pointer bg-white"
            >
              <div className="aspect-[1.2/1] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="p-7">
                <p className="text-[10px] tracking-[0.16em] text-[#9b958e]">{item.tag}</p>
                <h3 className="mt-4 text-xl font-light tracking-[-0.02em] text-[#292623]">{item.title}</h3>
                <p className="mt-2 text-xs font-light leading-6 text-[#817b74]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
