"use client";

import React from 'react';
import { ArrowRight, GraduationCap, Globe, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#F8FAFC] pt-20 pb-16 overflow-hidden">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EF7D31]/5 -skew-x-12 transform origin-top" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-[#EF7D31] rounded-full blur-[100px] opacity-10 animate-pulse" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN - Messaging */}
          <div className="flex flex-col items-start text-left">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF7D31] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF7D31]"></span>
              </span>
              <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-widest">Globally Recognized Medical Schools</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-[75px] font-black text-[#1E212B] leading-[1.05] tracking-tight mb-8">
              Pursue Medical Education <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#EF7D31]">Beyond Borders</span>
                {/* Abstract underline effect */}
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#EF7D31]/10 -z-10 rounded-full opacity-60"></span>
              </span>
              <br />
              <span className="relative inline-flex flex-wrap items-center gap-3">
                {/* Universal Highlight */}
                <span className="relative z-10 px-5 py-1.5 text-white bg-[#EF7D31] rounded-2xl shadow-xl shadow-[#EF7D31]/20">
                  No Fees
                </span>
                {/* Sub-text inside heading for clarity */}
                <span className="text-2xl md:text-3xl font-bold text-[#64748B]">
                  Medicine • Technical • Management
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#64748B] max-w-xl leading-relaxed mb-10">
              Affordable medical education abroad with premier clinical training. Connect with top universities in <span className="text-[#1E212B] font-semibold underline decoration-[#EF7D31]">Kyrgyzstan, Tajikistan, Nepal</span> & other destinations.
            </p>

            {/* Feature Checkmarks (Quick Connectivity for Parents) */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {['Assured Admission', 'Best Fee Structure', 'Secure Housing', 'Indian Cuisine Available'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#EF7D31] shrink-0" />
                  <span className="text-sm font-medium text-[#1E212B]">{text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/colleges"
                className="group w-full sm:w-auto px-10 py-5 bg-[#EF7D31] text-white font-bold rounded-2xl hover:bg-[#EF7D31]/90 transition-all shadow-xl shadow-[#EF7D31]/20 flex items-center justify-center gap-3 text-lg hover:-translate-y-1"
              >
                Search Colleges
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/countries"
                className="group w-full sm:w-auto px-8 py-5 rounded-2xl border-2 border-[#E2E8F0] bg-white hover:border-[#EF7D31] transition-all flex items-center justify-center gap-3"
              >
                <Globe size={20} className="text-[#EF7D31]" />
                <span className="text-base font-bold text-[#1E212B]">View Destinations</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Visuals */}
          <div className="relative pt-10 lg:pt-0">
            {/* Experience Card (Floating) */}
            <div className="absolute -top-4 -right-4 md:right-0 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-[#E2E8F0] flex items-center gap-4 animate-float">
              <div className="w-12 h-12 bg-[#EF7D31]/10 rounded-full flex items-center justify-center text-[#EF7D31]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs text-[#64748B] font-bold uppercase tracking-tighter">Established</p>
                <p className="text-sm font-black text-[#1E212B]">15+ Years Trust</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 h-[450px] md:h-[550px]">
              {/* Main Image - Medical Students */}
              <div className="col-span-8 h-full relative group">
                <div className="absolute inset-0 bg-[#EF7D31] rounded-[2rem] rotate-3 transition-transform group-hover:rotate-1" />
                <div className="relative h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://i.pinimg.com/1200x/5b/5b/76/5b5b76ef67dd68bc22836887b7d2c132.jpg"
                    alt="International Medical Students"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <p className="text-white font-medium italic text-sm">"Quality medical education with international standards"</p>
                  </div>
                </div>
              </div>

              {/* Side Images */}
              <div className="col-span-4 flex flex-col gap-4 h-full">
                <div className="h-1/2 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg">
                  <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80" className="w-full h-full object-cover" alt="Hospital" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg bg-[#EF7D31] flex items-center justify-center text-center p-4">
                  <div>
                    <p className="text-white font-black text-2xl">5000+</p>
                    <p className="text-white/80 text-[10px] font-bold uppercase">Successful Students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Country Tags Overlay */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Kyrgyzstan', 'Tajikistan', 'Nepal', 'Bangladesh', 'Georgia', 'Armenia'].map((country) => (
                <span key={country} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-[#1E212B] shadow-sm border border-[#E2E8F0] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF7D31]" />
                  {country}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;