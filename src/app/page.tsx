
import React from 'react';
import { Heart, Sun, Smile, Users, Calendar, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAF8] text-[#4A5568] font-sans selection:bg-[#9AE6B4] selection:text-[#276749]">
      {/* Top Bar */}
      <div className="bg-[#E2E8F0] text-[#4A5568] py-2 px-4 text-xs flex justify-center md:justify-end gap-6 items-center">
        <span className="flex items-center gap-1"><Phone size={12} /> 02-1234-5678</span>
        <span className="flex items-center gap-1"><MapPin size={12} /> 서울시 송파구 위례성대로</span>
        <span className="text-xs bg-white px-2 py-0.5 rounded-full font-bold text-[#48BB78]">상담 예약 필수</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#EDF2F7] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E6FFFA] rounded-full flex items-center justify-center">
                <Heart size={20} className="text-[#38B2AC]" fill="#38B2AC" />
              </div>
              <div>
                <span className="block text-lg font-bold text-[#2D3748] tracking-tight">마음쉼터</span>
                <span className="block text-xs text-[#718096]">아동발달센터</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-[#718096]">
              <a href="#about" className="hover:text-[#38B2AC] transition-colors">센터소개</a>
              <a href="#program" className="hover:text-[#38B2AC] transition-colors">치료프로그램</a>
              <a href="#experts" className="hover:text-[#38B2AC] transition-colors">전문가소개</a>
              <a href="#process" className="hover:text-[#38B2AC] transition-colors">이용안내</a>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-[#38B2AC] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#319795] transition-colors shadow-md shadow-teal-100">
              <MessageCircle size={16} />
              예약 상담하기
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0FFF4] rounded-l-[100px] -z-10 transform translate-x-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6FFFA] text-[#319795] rounded-full text-sm font-bold">
              <Sun size={16} />
              <span>우리아이 마음 성장 파트너</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
              천천히, 바르게 <br/>
              <span className="text-[#38B2AC] relative inline-block">
                함께 성장합니다
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#38B2AC] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-[#718096] leading-relaxed">
              아이마다 피어나는 시기가 다릅니다.<br/>
              조급해하지 않고 아이의 속도에 맞춰<br/>
              잠재력을 깨워주는 따뜻한 동행이 되겠습니다.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-[#2D3748] text-white rounded-lg font-bold hover:bg-[#1A202C] transition-colors shadow-lg">
                초기 상담 신청
              </button>
              <button className="px-8 py-4 bg-white border border-[#E2E8F0] text-[#4A5568] rounded-lg font-bold hover:bg-[#F7FAFC] transition-colors">
                치료 영역 보기
              </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#F6E05E] rounded-full opacity-20 animate-bounce"></div>
             <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#F687B3] rounded-full opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1596464716127-f9a865e0cb31?q=80&w=2070&auto=format&fit=crop" 
               alt="Counseling" 
               className="rounded-[2rem] shadow-2xl w-full object-cover z-10 relative transform rotate-2 hover:rotate-0 transition-transform duration-500" 
             />
             <div className="absolute bottom-10 left-[-20px] bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-float">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-10 bg-[#E6FFFA] rounded-full flex items-center justify-center text-[#38B2AC]">
                   <Smile size={24} />
                 </div>
                 <div>
                   <p className="font-bold text-[#2D3748]">맞춤형 발달 검사</p>
                   <p className="text-xs text-[#718096]">전문 임상심리사 진행</p>
                 </div>
               </div>
               <p className="text-sm text-[#718096] bg-[#F7FAFC] p-3 rounded-lg">
                 "우리 아이의 강점을 발견하고 부족한 부분을 채워주세요."
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-24 bg-[#F9FAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D3748] mb-4">전문 치료 프로그램</h2>
            <p className="text-[#718096]">각 분야별 전문가가 아이의 특성에 맞는 1:1 맞춤 치료를 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "언어치료", icon: "🗣️", desc: "의사소통에 어려움이 있는 아동을 위한 언어 발달 촉진", color: "bg-[#FED7D7]", text: "text-[#C53030]" },
              { title: "놀이치료", icon: "🧸", desc: "놀이를 통해 정서를 표현하고 심리적 안정감 형성", color: "bg-[#FEFCBF]", text: "text-[#B7791F]" },
              { title: "미술치료", icon: "🎨", desc: "미술 활동으로 내면을 표현하고 자아존중감 향상", color: "bg-[#C6F6D5]", text: "text-[#276749]" },
              { title: "감각통합", icon: "🧩", desc: "감각 정보를 조직화하여 운동 능력과 학습 기초 형성", color: "bg-[#BEE3F8]", text: "text-[#2C5282]" },
            ].map((prog, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-[#EDF2F7] group hover:-translate-y-1">
                <div className={`w-14 h-14 ${prog.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {prog.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${prog.text}`}>{prog.title}</h3>
                <p className="text-sm text-[#718096] leading-relaxed mb-6 h-12">{prog.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-[#4A5568] hover:text-[#38B2AC] transition-colors">
                  자세히 보기 <span className="ml-1">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D3748] mb-4">상담 및 이용 절차</h2>
            <p className="text-[#718096]">체계적인 프로세스로 아이의 성장을 지원합니다.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E2E8F0] -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "예약 문의", desc: "전화 및 온라인 예약" },
                { step: "02", title: "초기 상담", desc: "주호소 문제 파악" },
                { step: "03", title: "평가 및 검사", desc: "전문적인 발달 검사" },
                { step: "04", title: "치료 계획", desc: "맞춤형 목표 설정" },
              ].map((proc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center md:bg-transparent">
                  <div className="w-12 h-12 bg-[#38B2AC] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg shadow-teal-100 z-10 relative">
                    {proc.step}
                  </div>
                  <h3 className="font-bold text-[#2D3748] mb-2">{proc.title}</h3>
                  <p className="text-sm text-[#718096]">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-[#E6FFFA] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B2F5EA]">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-[#38B2AC]">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#2D3748] mb-1">상담 시간 안내</h4>
                <p className="text-sm text-[#718096]">평일 10:00 - 19:00 / 토요일 09:00 - 15:00 (일, 공휴일 휴무)</p>
              </div>
            </div>
            <button className="bg-[#38B2AC] hover:bg-[#319795] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors w-full md:w-auto text-center">
              온라인 예약 바로가기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-[#CBD5E0] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <Heart size={20} className="text-[#38B2AC]" fill="#38B2AC" />
              <span className="font-bold text-lg">마음쉼터 아동발달센터</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              보건복지부 발달재활서비스 제공기관<br/>
              교육청 치료지원 서비스 제공기관
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-8 bg-[#4A5568] rounded-full flex items-center justify-center hover:bg-[#38B2AC] transition-colors cursor-pointer">
                 <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" className="w-4 h-4 invert opacity-70" alt="Blog"/>
               </div>
               <div className="w-8 h-8 bg-[#4A5568] rounded-full flex items-center justify-center hover:bg-[#38B2AC] transition-colors cursor-pointer">
                 <Instagram size={16} />
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">센터 정보</h4>
            <ul className="space-y-2 text-sm">
              <li>대표: 김마음 (임상심리전문가 1급)</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>주소: 서울특별시 송파구 위례성대로 123 3층</li>
              <li>이메일: help@maum-center.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">협력 기관</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#A0AEC0]">
              <span>한국심리학회</span>
              <span>한국발달지원학회</span>
              <span>송파구청</span>
              <span>강동송파교육지원청</span>
            </div>
            <p className="mt-8 text-xs text-[#718096]">&copy; 2024 Maum Shelter Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
