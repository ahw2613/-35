import React from 'react';
import { motion } from 'motion/react';

export function DoctorSection() {
  return (
    <section id="doctor" className="py-24 md:py-36 bg-[#F7F6F3]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative aspect-[3/4] overflow-hidden bg-neutral-200"
          >
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=85"
              alt="손승태 대표원장"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6">
              <span className="text-[11px] uppercase tracking-[0.2em] font-serif-en text-neutral-400 block mb-1">
                RENEW:UP MEDICAL DIRECTOR
              </span>
              <div className="text-xl font-light text-neutral-900">
                성형외과 전문의 <span className="font-medium">손승태 대표원장</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-serif-en text-neutral-400 block">
              CHIEF DOCTOR PROFILE
            </span>

            <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-[1.2]">
              "인위적 변화가 아닌,<br />
              <span className="font-serif italic font-normal">본연의 매력을</span> 균형 있게 디자인합니다."
            </h2>

            <p className="text-base text-neutral-700 font-light leading-relaxed">
              모든 사람은 각자 고유의 아름다운 골격과 비율을 가지고 있습니다. 리뉴업은 과장된 수술로 본래의 선을 잃게 만들기보다, 정밀한 분석을 통해 가장 조화롭고 빛나는 본연의 가치를 되찾아드립니다.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-600 font-light">
                <div>
                  <strong className="block text-neutral-900 font-medium mb-1 uppercase tracking-wider text-[11px]">EDUCATION & TRAINING</strong>
                  <p>• 서울대학교 의과대학 졸업</p>
                  <p>• 서울대학교병원 성형외과 전문의 수료</p>
                </div>
                <div>
                  <strong className="block text-neutral-900 font-medium mb-1 uppercase tracking-wider text-[11px]">ACADEMIC ACTIVITIES</strong>
                  <p>• 대한성형외과학회 정회원</p>
                  <p>• 대한미용성형외과학회 정회원</p>
                  <p>• 국제안티에이징 연구회 자문위원</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
