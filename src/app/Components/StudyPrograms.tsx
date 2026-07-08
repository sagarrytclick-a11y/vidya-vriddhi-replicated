"use client"
import React from 'react';
import Link from 'next/link';
import { BookOpen, Target, BrainCircuit, Lightbulb, Award, Globe, ArrowRight, GraduationCap, ShieldCheck, Users, Stethoscope } from 'lucide-react';

export default function StudyPrograms() {
  const programs = [
    {
      icon: GraduationCap,
      title: "MBBS Abroad",
      description: "Complete medical education in NMC approved universities with zero donation",
      features: ["NMC Approved", "Zero Donation", "Indian Food", "Hostel Facility"],
      color: "blue"
    },
    {
      icon: ShieldCheck,
      title: "Pre-Medical Foundation", 
      description: "Foundation programs to prepare for MBBS admissions abroad",
      features: ["Biology Focus", "Chemistry Prep", "Physics Basics", "English Support"],
      color: "green"
    },
    {
      icon: Users,
      title: "Medical Counseling",
      description: "Expert guidance for choosing the right medical university",
      features: ["Career Guidance", "University Selection", "Visa Support", "Admission Help"],
      color: "purple"
    },
    {
      icon: Stethoscope,
      title: "Post-MBBS Support",
      description: "Complete support after MBBS for licensing and career",
      features: ["FMGE Prep", "Internship Help", "Career Guidance", "Job Placement"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-[#F8FAFC]",
        iconBg: "bg-[#4A90E2]",
        text: "text-[#4A90E2]",
        border: "border-[#E2E8F0]"
      },
      green: {
        bg: "bg-[#F8FAFC]", 
        iconBg: "bg-[#4A90E2]",
        text: "text-[#4A90E2]",
        border: "border-[#E2E8F0]"
      },
      purple: {
        bg: "bg-[#F8FAFC]",
        iconBg: "bg-[#4A90E2]", 
        text: "text-[#4A90E2]",
        border: "border-[#E2E8F0]"
      },
      orange: {
        bg: "bg-[#F8FAFC]",
        iconBg: "bg-[#EF7D31]",
        text: "text-[#EF7D31]", 
        border: "border-[#E2E8F0]"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8FAFC] text-[#EF7D31] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            <span>🏥</span>
            MBBS Programs Abroad
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E212B] leading-[0.9] tracking-tighter mb-4 sm:mb-6">
            STUDY <span className="text-[#EF7D31]">MBBS</span> ABROAD
          </h2>
          <p className="text-[#64748B] font-semibold text-base sm:text-lg max-w-3xl mx-auto px-4">
            Complete MBBS education programs designed for Indian students seeking quality medical education abroad with NMC approved universities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {programs.map((program, index) => {
            const colors = getColorClasses(program.color);
            return (
              <div key={index} className={`group relative ${colors.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
                {/* Decorative Pattern */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.iconBg} opacity-10 rounded-bl-full -mr-10 -mt-10`} />
                
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${colors.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon size={28} className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                
                <h3 className={`text-lg sm:text-xl font-black text-[#1E212B] mb-2 sm:mb-3 group-hover:${colors.text} transition-colors`}>
                  {program.title}
                </h3>
                
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${colors.iconBg} rounded-full`} />
                      <span className="text-xs font-medium text-[#1E212B]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#EF7D31] cursor-pointer text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
            <Link href={`/mbbs-abroad`} className="flex items-center gap-3"> 
            <span className="text-sm sm:text-base">Explore MBBS Programs</span>
            <ArrowRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
