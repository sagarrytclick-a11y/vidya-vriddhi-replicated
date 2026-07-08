"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,
  Globe,
  Mail,
  Phone,
  SendHorizontal,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { SITE_IDENTITY } from "@/site-identity";
import { useContactInfo, createMailtoLink, createTelLink, createWhatsAppLink } from "@/hooks/useContactInfo";
import { useFormModal } from '@/context/FormModalContext';

const Footer = () => {
  const { emails, phones, socials, address } = useContactInfo();
  const { openModal } = useFormModal();

  return (
    <footer className="bg-gradient-to-br from-[#1E212B] via-[#1E212B] to-[#1E212B] pt-24 pb-12 px-6 border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#4A90E2] rounded-full blur-[150px] opacity-5" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#EF7D31] rounded-full blur-[120px] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter CTA Section */}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand Section */}
          <div className="flex flex-col gap-4 sm:gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={"/favicon.png"}
                  alt={SITE_IDENTITY.name}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {SITE_IDENTITY.name}
                </span>
                <span className="text-sm sm:text-base text-white">
                  {SITE_IDENTITY.tagline}
                </span>
              </div>
            </div>
            <p className="text-white leading-relaxed text-sm sm:text-[15px] max-w-xs">
              {SITE_IDENTITY.description}
            </p>
            <div className="flex gap-3 sm:gap-4 text-white">
              <a
                href="https://wa.me/919839865347"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A90E2] hover:scale-110 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/vidyavriddhi?igsh=N3NoeGRlOG4ycTB6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A90E2] hover:scale-110 transition-all duration-200"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vidya-vriddhi/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A90E2] hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://youtube.com/@vidyavriddhi-u6y?si=D6bIbwNliMCbOGtW"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4A90E2] hover:scale-110 transition-all duration-200"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">SERVICES</h4>
            <ul className="flex flex-col gap-4 text-white text-[15px]">
              <li><Link href="/colleges" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">Study Abroad Programs</Link></li>
              <li><Link href="/mbbs-abroad" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">MBBS Abroad</Link></li>
              <li><Link href="/exams" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">Entrance Exam Prep</Link></li>
              <li><Link href="/blogs" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">Career Guidance</Link></li>
              <li><Link href="/contact" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">Admission Counseling</Link></li>
              <li><Link href="/study-abroad" className="hover:text-[#4A90E2] hover:translate-x-1 transition-all duration-200 inline-block">University Selection</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">CONTACT US</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white text-[15px]">
                <Phone size={16} className="text-[#4A90E2]" />
                <a href={createTelLink(phones.primary)} className="hover:text-[#4A90E2] transition-colors">
                  {phones.primary}
                </a>
              </div>
              {phones.additional.length > 0 && (
                <div className="flex items-center gap-3 text-white text-[15px]">
                  <Phone size={16} className="text-[#4A90E2]" />
                  <a href={createTelLink(phones.additional[0])} className="hover:text-[#4A90E2] transition-colors">
                    {phones.additional[0]}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3 text-white text-[15px]">
                <Mail size={16} className="text-[#4A90E2]" />
                <a href={createMailtoLink(emails.info)} className="hover:text-[#4A90E2] transition-colors">
                  {emails.info}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white text-[15px]">
                <MessageCircle size={16} className="text-[#4A90E2]" />
                <a href={createWhatsAppLink(phones.primaryRaw)} className="hover:text-[#4A90E2] transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-3 text-white text-[15px]">
                <MapPin size={50} className="text-[#4A90E2] mt-1" />
                <span className="leading-relaxed">{address.full}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 tracking-wide">STAY UPDATED</h4>
            <p className="text-white text-[15px] mb-6">
              Subscribe to our newsletter for scholarship updates and exclusive insights.
            </p>

            {/* Book Consultancy Button */}
            <button
              onClick={openModal}
              className="w-full bg-linear-to-r from-[#EF7D31] to-[#EF7D31] hover:from-[#4A90E2] hover:to-[#4A90E2] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Book Your Session
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-[#E2E8F0]/50">
          <div className="flex flex-col gap-8 sm:gap-12 mb-6 sm:mb-8">
            <div className="text-center lg:text-center">
              <p className="text-white text-xs sm:text-sm mb-2 font-medium"> {SITE_IDENTITY.business.established} {SITE_IDENTITY.name}. All rights reserved.</p>
              <p className="text-white text-xs">{SITE_IDENTITY.tagline}</p>
            </div>
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <p className="text-white text-xs leading-relaxed">
                Disclaimer: VidyaVriddhi provides guidance and counseling services
                based on experience and available information. We do not guarantee admission,
                visa approval, or outcomes, as final decisions are made by respective
                institutions and authorities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white">
              <Link href="/privacy" className="hover:text-[#4A90E2] hover:scale-105 transition-all duration-200">Privacy Policy</Link>
              <Link href="/term" className="hover:text-[#4A90E2] hover:scale-105 transition-all duration-200">Terms of Service</Link>
              <Link href="#" className="hover:text-[#4A90E2] hover:scale-105 transition-all duration-200">Cookie Policy</Link>
              <Link href="/contact" className="hover:text-[#4A90E2] hover:scale-105 transition-all duration-200">Contact Us</Link>

            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#4A90E2] text-sm sm:text-lg">●</span>
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4A90E2] text-sm sm:text-lg">●</span>
                <span className="font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="pt-6 sm:pt-8 border-t border-[#E2E8F0]/30">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white">
              <div className="flex items-center gap-2">
                <span className="text-[#4A90E2]">🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4A90E2]">📧</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4A90E2]">🏆</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span>4.9/5 Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;