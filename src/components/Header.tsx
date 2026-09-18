import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e8e4df] bg-[#faf9f7]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[78px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#" className="shrink-0">
            <img src="https://www.renewupps.com/images/common/renewup.png" alt="RENEW:UP" className="h-auto w-[128px] opacity-90" />
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            {NAVIGATION_ITEMS.slice(0, 10).map(item => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveMegaMenu(item.id)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button onClick={() => scrollToSection(item.id)} className="flex items-center gap-1 py-7 text-[12px] text-[#4e4944] transition-colors hover:text-black">
                  {item.title}
                  {item.subItems && <ChevronDown size={10} strokeWidth={1.3} />}
                </button>
                {item.subItems && activeMegaMenu === item.id && (
                  <div className="absolute left-1/2 top-full w-[250px] -translate-x-1/2 border border-[#e6e1db] bg-[#faf9f7] px-5 py-3 shadow-[0_12px_40px_rgba(40,35,30,.08)]">
                    {item.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.path} onClick={e => { e.preventDefault(); scrollToSection(sub.path.replace('#', '')); }} className="block border-b border-[#eeeae5] py-3 text-[11px] text-[#6e6861] last:border-0 hover:text-black">
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:0220880033" className="hidden items-center gap-2 text-[11px] text-[#6d675f] lg:flex">
              <Phone size={13} strokeWidth={1.4} />
              02-2088-0033
            </a>
            <button onClick={onOpenConsult} className="hidden bg-[#2a2724] px-5 py-3 text-[11px] text-white transition-opacity hover:opacity-80 sm:block">
              온라인 예약
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 xl:hidden" aria-label="메뉴 열기">
              {mobileMenuOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#faf9f7] px-6 pb-12 pt-[100px] xl:hidden">
          <div className="flex flex-col">
            {NAVIGATION_ITEMS.map(item => (
              <div key={item.id} className="border-b border-[#e7e2dc] py-5">
                <button onClick={() => scrollToSection(item.id)} className="w-full text-left text-lg font-light text-[#292623]">{item.title}</button>
                {item.subItems && (
                  <div className="mt-4 grid gap-3 pl-2">
                    {item.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.path} onClick={e => { e.preventDefault(); scrollToSection(sub.path.replace('#', '')); }} className="text-sm text-[#817b74]">{sub.title}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:0220880033" className="mt-6 flex items-center justify-center gap-2 border border-[#d8d2cb] py-4 text-sm">02-2088-0033</a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenConsult(); }} className="mt-2 bg-[#292623] py-4 text-sm text-white">온라인 예약</button>
          </div>
        </div>
      )}
    </>
  );
}
