'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Institution {
  name: string
  logo: string
}

interface SwiperSliderProps {
  institutions: Institution[]
}

export default function SwiperSlider({ institutions }: SwiperSliderProps) {
  return (
    <div className="max-w-7xl mx-auto px-12 py-10 relative group bg-white">
      {/* Custom Navigation Buttons (Using your Primary Blue for hover) */}
      <button className="swiper-prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-[#4A90E2] transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button className="swiper-next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-[#4A90E2] transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }}
        className="pb-14"
      >
        {institutions.map((inst, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-50 flex items-center justify-center bg-white rounded-xl border border-gray-100 hover:border-[#4A90E2] transition-all duration-300 shadow-sm hover:shadow-md p-6">
              {/* Removed grayscale filter to show original colors */}
              <img 
                src={inst.logo} 
                alt={inst.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              
              {/* Fallback text using Muted Text color #94A3B8 */}
              <div className="text-[#94A3B8] font-semibold text-sm text-center hidden px-2">
                {inst.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #4A90E2 !important;
        }
        /* Optional: Hide buttons if they are disabled (at ends of loop) */
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}