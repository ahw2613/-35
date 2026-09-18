import React from 'react';
import { Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsult: () => void;
}

export function Footer({ onOpenConsult }: FooterProps) {
  return (
    <footer id="footer" className="bg-[#111111] text-white pt-24 pb-16 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-serif-en text-3xl font-bold tracking-[0.2em] block text-white">
              RENEW:UP
            </span>
            <p className="text-sm text-neutral-400 font-serif-en italic">
              "Your Face, Renew Your Life."
            </p>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              리뉴업성형외과의원은 과함 없는 본질에 집중하며, 정밀한 진단과 안전 시스템을 바탕으로 당신의 가장 빛나는 균형을 찾아드립니다.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsult}
                className="bg-white text-neutral-900 px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-neutral-200 transition-colors"
              >
                1:1 온라인 상담 예약
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-light text-neutral-400">
            <div className="space-y-3">
              <span className="font-serif-en uppercase tracking-[0.2em] text-white font-medium block pb-1 border-b border-white/10">
                CONTACT
              </span>
              <p className="text-white text-base font-serif-en font-normal">02-2088-0033</p>
              <p>상담 및 예약 문의</p>
              <p className="pt-2 text-[11px] text-neutral-500">
                카카오톡 플러스친구: @리뉴업성형외과
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif-en uppercase tracking-[0.2em] text-white font-medium block pb-1 border-b border-white/10">
                HOURS
              </span>
              <p><strong className="text-white">평일</strong> 10:00 - 19:00</p>
              <p><strong className="text-white">토요일</strong> 10:00 - 17:00</p>
              <p className="text-neutral-500">일요일 및 공휴일 휴진</p>
              <p className="text-[11px] text-neutral-500 pt-1">* 점심시간 없이 진료</p>
            </div>

            <div className="space-y-3">
              <span className="font-serif-en uppercase tracking-[0.2em] text-white font-medium block pb-1 border-b border-white/10">
                LOCATION
              </span>
              <p>서울특별시 강남구 강남대로 382 (역삼동)</p>
              <p className="text-neutral-500">강남역 11번 출구 도보 3분</p>
              <div className="pt-2">
                <a
                  href="#footer"
                  onClick={(e) => { e.preventDefault(); alert('강남구 강남대로 382, 리뉴업성형외과 빌딩'); }}
                  className="inline-flex items-center gap-1 text-white hover:underline text-xs"
                >
                  <span>오시는 길 자세히 보기</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 font-serif-en tracking-wider">
          <div>
            © RENEW:UP PLASTIC SURGERY CLINIC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">비급여수가표</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
