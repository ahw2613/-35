import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../data';
import { NavItem } from '../types';

interface HeaderProps {
  onOpenConsult: () => void;
}

export function Header({ onOpenConsult }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setScrollDirection('down');
        setActiveMegaMenu(null);
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-white/90 backdrop-blur-md border-b border-neutral-200/60 ${
          scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <span className="font-serif-en text-2xl md:text-3xl font-bold tracking-[0.18em] text-[#111] group-hover:opacity-80 transition-opacity">
              RENEW:UP
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-neutral-400 border-l border-neutral-300 pl-2">
              Plastic Surgery
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-4">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative py-4"
                onMouseEnter={() => item.subItems && setActiveMegaMenu(item.id)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs uppercase tracking-[0.12em] font-medium text-neutral-800 hover:text-black px-2.5 py-1.5 transition-colors flex items-center gap-1"
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronDown size={12} className={`transition-transform duration-200 ${activeMegaMenu === item.id ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {item.subItems && activeMegaMenu === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white border border-neutral-200 shadow-xl py-4 px-5 grid gap-3 animate-fadeIn">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-serif-en text-neutral-400 pb-2 border-b border-neutral-100">
                      {item.title} MENU
                    </div>
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.path}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(sub.path.replace('#', ''));
                        }}
                        className="group/sub block p-2 hover:bg-[#F7F6F3] transition-colors rounded-sm"
                      >
                        <div className="text-xs font-medium text-neutral-900 group-hover/sub:text-black flex items-center justify-between">
                          {sub.title}
                          <ArrowUpRight size={12} className="opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                        </div>
                        {sub.desc && (
                          <div className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                            {sub.desc}
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:0220880033"
              className="hidden sm:flex items-center gap-2 text-xs font-serif-en tracking-[0.1em] text-neutral-700 hover:text-black px-3 py-2 border border-neutral-200 hover:border-neutral-400 transition-all"
            >
              <Phone size={13} />
              <span>02-2088-0033</span>
            </a>

            <button
              onClick={onOpenConsult}
              className="bg-[#111111] text-white px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-neutral-800 transition-all shadow-sm"
            >
              상담 / 예약
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 overflow-y-auto pb-16 xl:hidden animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-serif-en">
                NAVIGATION
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.id} className="space-y-2">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-base font-medium text-neutral-900 tracking-tight flex items-center justify-between w-full py-1 text-left"
                  >
                    <span>{item.title}</span>
                  </button>
                  {item.subItems && (
                    <div className="pl-4 space-y-2 border-l border-neutral-200 my-2">
                      {item.subItems.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.path}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(sub.path.replace('#', ''));
                          }}
                          className="block text-xs text-neutral-600 hover:text-black py-1"
                        >
                          - {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-200 flex flex-col gap-4">
              <a
                href="tel:0220880033"
                className="flex items-center justify-center gap-2 py-3 bg-[#F7F6F3] text-neutral-900 font-serif-en text-sm tracking-wider"
              >
                <Phone size={16} />
                <span>02-2088-0033</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsult();
                }}
                className="w-full bg-[#111111] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium"
              >
                1:1 온라인 상담 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
