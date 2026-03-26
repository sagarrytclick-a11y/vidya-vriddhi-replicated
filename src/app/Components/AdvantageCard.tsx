"use client"
import React from 'react';
import { GraduationCap, ShieldCheck, Landmark, Globe2, Zap, CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBg?: string;
}

const FeatureCard = ({ icon, title, description, className = "", iconBg = "bg-[#FFFFFF]" }: FeatureCardProps) => (
  <div className={`group relative p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A90E2]/50 ${className}`}>
    <div className="flex flex-col h-full space-y-5">
      <div className={`p-3.5 w-fit rounded-2xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight mb-2.5">{title}</h3>
        <p className="opacity-80 leading-relaxed text-sm lg:text-base font-medium">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function VidiyaVridhiAdvantage() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 overflow-hidden bg-[#F8FAFC]">
      {/* Decorative Gradient Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F8FAFC]/50 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F8FAFC]/50 rounded-full blur-[100px]" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF7D31] border border-[#EF7D31] text-white text-xs font-bold uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            2026 Global Standards
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#1E212B] leading-[1.05] mb-8">
            Your Future, <br />
            <span className="text-[#EF7D31]">Expertly Mapped.</span>
          </h2>

          <p className="text-[#64748B] text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Navigating international education requires more than just a visa. We provide a 360° ecosystem—from AI-driven matching to post-landing career support.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 py-8 border-y border-[#E2E8F0] mb-10">
            <div>
              <div className="text-3xl font-black text-[#4A90E2]">99.2%</div>
              <div className="text-xs font-bold text-[#64748B] uppercase mt-1">Visa Success</div>
            </div>
            <div className="w-px h-12 bg-slate-100 hidden sm:block" />
            <div>
              <div className="text-3xl font-black text-[#4A90E2]">15k+</div>
              <div className="text-xs font-bold text-[#64748B] uppercase mt-1">Global Alumni</div>
            </div>
            <div className="w-px h-12 bg-slate-100 hidden sm:block" />
            <div>
              <div className="text-3xl font-black text-[#4A90E2]">500+</div>
              <div className="text-xs font-bold text-[#64748B] uppercase mt-1">Uni Partners</div>
            </div>
          </div>

          <button className="group flex items-center gap-3 bg-[#1E212B] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#EF7D31] transition-all duration-300 shadow-xl shadow-[#E2E8F0] hover:shadow-[#4A90E2]">
            Book Free Session
            <Zap className="w-5 h-5 fill-current transition-transform group-hover:scale-125" />
          </button>
        </div>

        {/* Right Bento Grid Side */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
          <FeatureCard 
            className="bg-[#EF7D31] text-white md:col-span-2"
            icon={<GraduationCap className="w-7 h-7 text-[#4A90E2]" />}
            title="Strategic Ivy-League Mentorship"
            description="Consult with mentors who are alumni of world's top 1% universities. We offer firsthand insights into campus life and recruitment."
          />
          
          <FeatureCard 
            className="bg-[#FFFFFF] border-2 border-[#E2E8F0] shadow-sm text-[#1E212B]"
            iconBg="bg-[#F8FAFC]"
            icon={<ShieldCheck className="w-6 h-6 text-[#4A90E2]" />}
            title="Smart Visa Hub"
            description="Our 2026 automated compliance check ensures your GIC and Financial docs meet latest 2026 standards."
          />

          <FeatureCard 
            className="bg-[#FFFFFF] border-2 border-[#E2E8F0] shadow-sm text-[#1E212B]"
            iconBg="bg-[#F8FAFC]"
            icon={<Landmark className="w-6 h-6 text-[#4A90E2]" />}
            title="Scholarship Desk"
            description="Access exclusive 2026-27 waivers. We've secured over ₹45Cr in student aid this year alone."
          />

          <FeatureCard 
            className="bg-[#1E212B] text-white md:col-span-2"
            iconBg="bg-[#4A90E2]"
            icon={<Globe2 className="w-6 h-6 text-white" />}
            title="Global Career Network"
            description="Our service doesn't end at airport. Connect with our 15,000+ strong alumni network in tech, finance, and medicine hubs worldwide."
          />
        </div>
      </div>
    </section>
  );
}