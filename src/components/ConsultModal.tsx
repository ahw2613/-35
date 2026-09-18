import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '울쎄라/리프팅',
    message: '',
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.agree) {
      alert('성함, 연락처 및 개인정보 수집에 동의해주세요.');
      return;
    }
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', category: '울쎄라/리프팅', message: '', agree: false });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <X size={24} />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-serif-en block mb-2">
                  RENEW:UP RESERVATION & CONSULT
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
                  온라인 상담 및 예약 신청
                </h3>
                <p className="text-sm text-neutral-500 mt-2">
                  작성해주신 연락처로 1:1 전담 실장이 친절하고 빠르게 상담을 도와드립니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                      성함 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="성함을 입력해주세요"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F6F3] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                      연락처 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F7F6F3] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                    관심 분야
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="울쎄라/리프팅">울쎄라 / 리프팅 / 안티에이징</option>
                    <option value="풀페이스 지방이식">풀페이스 지방이식 / 볼륨</option>
                    <option value="이마거상">내비게이션 이마거상</option>
                    <option value="코성형/재수술">코성형 / 재수술</option>
                    <option value="눈성형">눈성형 / 눈매교정</option>
                    <option value="기타 시술/문의">기타 시술 및 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-1 font-medium">
                    문의 내용 (선택)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="고민이신 부위나 궁금한 점을 자유롭게 적어주세요."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="w-4 h-4 text-neutral-900 border-neutral-300 rounded focus:ring-0"
                  />
                  <label htmlFor="agree" className="text-xs text-neutral-600">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <Phone size={14} />
                    <span>전화 문의: 02-2088-0033</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#111111] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-neutral-800 transition-colors"
                  >
                    상담 신청하기
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-light text-neutral-900 tracking-tight">
                상담 신청이 완료되었습니다
              </h3>
              <p className="text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
                리뉴업성형외과의원 전담 상담팀이 확인 후 빠른 시간 내에 연락드리겠습니다. 감사합니다.
              </p>
              <div className="pt-6">
                <button
                  onClick={resetAndClose}
                  className="bg-[#111111] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-neutral-800 transition-colors"
                >
                  확인
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
