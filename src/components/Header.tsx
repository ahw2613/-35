import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../data';

interface HeaderProps {
  onOpenConsult: () => void;
}

export function Header({ onOpenConsult }: HeaderProps) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-14 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-serif-en text-[25px] tracking-[0.1em] text-[#111]">RENEW:UP</span>
            <span className="hidden md:inline text-[9px] tracking-[0.12em] text-neutral-400">PLASTIC SURGERY</span>
          </a>

          <nav className="hidden xl:flex items-center gap-7">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveMegaMenu(item.id)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="py-5 text-[12px] text-neutral-700 hover:text-black transition-colors flex items-center gap-1"
                >
                  {item.title}
                  {item.subItems && <ChevronDown size={11} />}
                </button>
                {item.subItems && activeMegaMenu === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white border border-neutral-200 shadow-lg p-4">
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.path}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(sub.path.replace('#', ''));
                        }}
                        className="group/sub flex items-center justify-between py-3 border-b last:border-0 border-neutral-100 text-[12px] text-neutral-700 hover:text-black"
                      >
                        {sub.title}
                        <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:0220880033" className="hidden md:flex items-center gap-2 text-[11px] tracking-wide text-neutral-600">
              <Phone size={13} /> 02-2088-0033
            </a>
            <button onClick={onOpenConsult} className="bg-[#111] text-white px-5 py-2.5 text-[11px] hover:bg-neutral-800 transition-colors">
              상담 예약
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-1" aria-label="메뉴 열기">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-[100px] px-6 pb-12 overflow-y-auto xl:hidden">
          <div className="flex flex-col">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.id} className="border-b border-neutral-200 py-5">
                <button onClick={() => scrollToSection(item.id)} className="w-full text-left text-lg text-neutral-900">
                  {item.title}
                </button>
                {item.subItems && (
                  <div className="mt-4 pl-4 space-y-3">
                    {item.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.path} onClick={(e) => { e.preventDefault(); scrollToSection(sub.path.replace('#', '')); }} className="block text-sm text-neutral-500">
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:0220880033" className="mt-6 py-4 bg-[#F7F6F3] text-center text-sm">02-2088-0033</a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenConsult(); }} className="mt-2 py-4 bg-[#111] text-white text-sm">1:1 상담 신청</button>
          </div>
        </div>
      )}
    </>
  );
}
