"use client";

import React from "react";
import Link from "next/link";
import { useFormModal } from "@/context/FormModalContext";


const CtaSection: React.FC = () => {
  const { openModal } = useFormModal();

  
  return (
    <section id="contact" className="relative overflow-hidden bg-linear-to-br from-[#1E212B] via-[#1E212B] to-[#1E212B]">
      {/* Enhanced pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#1E212B]/20 via-transparent to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#4A90E2] rounded-full blur-[60px] opacity-20" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#EF7D31] rounded-full blur-[80px] opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Pre-heading badge */}
        <div className="inline-flex items-center gap-2 bg-[#4A90E2]/10 border border-[#4A90E2]/20 text-[#64748B] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <span>🚀</span>
          Limited Time Offer
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6">
          Ready to Take <span className="text-[#EF7D31]">Leap?</span>
        </h2>

        {/* Enhanced sub text */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-lg sm:text-xl text-[#64748B] leading-relaxed mb-6 sm:mb-8 px-4">
          Join <strong className="text-[#4A90E2]">15,000+ successful students</strong> who've transformed their lives through our expert guidance.
          Book your <strong className="text-[#EF7D31]">FREE consultation</strong> today and discover your path to global success.
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-[#4A90E2] mb-1 sm:mb-2">FREE</div>
            <div className="text-white font-semibold mb-1 text-sm sm:text-base">Initial Consultation</div>
            <div className="text-[#64748B] text-xs sm:text-sm">No obligation assessment</div>
          </div>
          <div className="bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-[#4A90E2] mb-1 sm:mb-2">24/7</div>
            <div className="text-white font-semibold mb-1 text-sm sm:text-base">Expert Support</div>
            <div className="text-[#64748B] text-xs sm:text-sm">Always available guidance</div>
          </div>
          <div className="bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl font-bold text-[#4A90E2] mb-1 sm:mb-2">100%</div>
            <div className="text-white font-semibold mb-1 text-sm sm:text-base">Success Guarantee</div>
            <div className="text-[#64748B] text-xs sm:text-sm">Your dream or money back</div>
          </div>
        </div>

        {/* Enhanced Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row">
          <button
            onClick={openModal}
            className="group bg-[#EF7D31] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full items-center gap-2 sm:gap-3 flex hover:bg-[#4A90E2] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book FREE Consultation
            <span className="text-xl sm:text-2xl">⚡</span>
          </button>

          <Link href={'/colleges'} className="rounded-full border-2 border-white/30 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transform hover:scale-105">
            Explore Universities
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-[#64748B] text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-[#4A90E2]">✓</span>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4A90E2]">✓</span>
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#4A90E2]">✓</span>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;