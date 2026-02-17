
import React from 'react';
import { Heart, Sun, Smile, Users, Star, Phone, MessageCircle, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#4A5568] font-sans selection:bg-[#81E6D9] selection:text-[#234E52]">
      {/* Top Banner */}
      <div className="bg-[#2D3748] text-white text-xs py-2 px-4 text-center tracking-wide">
        <span className="opacity-80">마음쉼터 아동발달센터는 </span>
        <span className="font-bold text-[#81E6D9]">100% 예약제</span>
        <span className="opacity-80">로 운영됩니다.</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#38B2AC] rounded-[14px] flex items-center justify-center text-white shadow-lg shadow-teal-100 transform rotate-3">
                <Heart size={20} fill="currentColor" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-bold text-[#2D3748]">마음쉼터</span>
                <span className="block text-[10px] text-[#718096] font-medium tracking-wider">CHILD CARE CENTER</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-10 text-sm font-bold text-[#718096]">
              <a href="#about" className="hover:text-[#38B2AC] transition-colors">센터소개</a>
              <a href="#program" className="hover:text-[#38B2AC] transition-colors">치료프로그램</a>
              <a href="#process" className="hover:text-[#38B2AC] transition-colors">이용안내</a>
              <a href="#contact" className="hover:text-[#38B2AC] transition-colors">오시는길</a>
            </div>
            <button className="bg-[#38B2AC] hover:bg-[#319795] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-teal-100 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
              <MessageCircle size={16} />
              상담 예약하기
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Soft Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6FFFA] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FEFCBF] rounded-full blur-[80px] opacity-60 translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] rounded-full text-xs font-bold text-[#319795] shadow-sm">
              <Sun size={14} className="text-[#F6E05E]" />
              <span>우리아이 마음 성장 파트너</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D3748] leading-[1.2]">
              느려도 괜찮아요,<br/>
              <span className="text-[#38B2AC]">올바르게</span> 자라도록<br/>
              함께 걷겠습니다.
            </h1>
            <p className="text-lg text-[#718096] leading-relaxed">
              아이마다 꽃피우는 시기는 다릅니다.<br/>
              전문 치료사가 아이의 눈높이에서 잠재력을 깨워드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#2D3748] text-white rounded-2xl font-bold text-lg hover:bg-[#1A202C] transition-all shadow-xl shadow-gray-200">
                초기상담 신청하기
              </button>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://source.unsplash.com/random/100x100?face&sig=${i}`} className="w-full h-full object-cover"/>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-[#718096]">
                  <span className="font-bold text-[#2D3748]">1,200+</span> 명의 아이들이<br/>함께 성장하고 있어요
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#38B2AC] rounded-[3rem] rotate-3 opacity-10 transform scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1596464716127-f9a865e0cb31?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
              alt="Counseling"
            />
            
            {/* Floating Card */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-xs animate-bounce-slow hidden md:block">
              <div className="flex gap-4 items-center mb-3">
                <div className="w-12 h-12 bg-[#FEFCBF] rounded-2xl flex items-center justify-center text-[#D69E2E]">
                  <Smile size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#2D3748]">놀이치료</p>
                  <p className="text-xs text-[#718096]">정서적 안정감 형성</p>
                </div>
              </div>
              <div className="w-full bg-[#EDF2F7] rounded-full h-2 overflow-hidden">
                <div className="bg-[#38B2AC] w-3/4 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="program" className="py-24 bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D3748] mb-4">맞춤형 치료 프로그램</h2>
            <p className="text-[#718096]">각 분야 전문가가 아이의 특성에 맞는 1:1 솔루션을 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "언어치료", desc: "의사소통 능력 향상 및 언어 발달 촉진", icon: "🗣️", bg: "bg-red-50", text: "text-red-500" },
              { title: "놀이치료", desc: "놀이를 통한 심리 정서적 안정 도모", icon: "🧸", bg: "bg-yellow-50", text: "text-yellow-600" },
              { title: "인지치료", desc: "학습 기초 능력 및 주의집중력 향상", icon: "🧠", bg: "bg-blue-50", text: "text-blue-500" },
              { title: "감각통합", desc: "감각 정보 처리 능력 및 운동 발달", icon: "🧩", bg: "bg-green-50", text: "text-green-500" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#E2E8F0]">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D3748] mb-3">{item.title}</h3>
                <p className="text-sm text-[#718096] leading-relaxed mb-6 h-10">{item.desc}</p>
                <div className="flex items-center text-xs font-bold text-[#CBD5E0] gap-2">
                  <CheckCircle2 size={14} className={item.text} />
                  <span>전문가 1:1 매칭</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info / Footer */}
      <footer className="bg-white border-t border-[#E2E8F0] pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#38B2AC] rounded-[10px] flex items-center justify-center text-white">
                  <Heart size={16} fill="currentColor" />
                </div>
                <span className="font-bold text-xl text-[#2D3748]">마음쉼터</span>
              </div>
              <p className="text-sm text-[#718096] leading-relaxed">
                보건복지부 발달재활서비스 제공기관<br/>
                교육청 치료지원 서비스 제공기관<br/>
                아동 심리 바우처 사용 가능
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-[#2D3748] mb-6">운영 시간</h4>
              <ul className="space-y-3 text-sm text-[#718096]">
                <li className="flex justify-between border-b border-[#EDF2F7] pb-2">
                  <span>평일</span>
                  <span className="font-bold">10:00 - 19:00</span>
                </li>
                <li className="flex justify-between border-b border-[#EDF2F7] pb-2">
                  <span>토요일</span>
                  <span className="font-bold">09:00 - 15:00</span>
                </li>
                <li className="text-xs text-[#A0AEC0] pt-2">* 일요일 및 공휴일은 휴무입니다.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#2D3748] mb-6">오시는 길</h4>
              <div className="text-sm text-[#718096] space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#38B2AC]" />
                  서울시 송파구 위례성대로 123<br/>마음빌딩 3층
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[#38B2AC]" />
                  02-1234-5678
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-[#EDF2F7] pt-10 text-xs text-[#A0AEC0]">
            <p>Copyright © 2024 Maum Shelter Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
