'use client'

import { useState, useMemo } from 'react'
import { Search, Clock, Star, Users, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useFormModal } from '@/context/FormModalContext'

interface Course {
  id: number
  title: string
  provider: string
  duration: string
  level: string
  rating: number
  students: number
  price: string
  originalPrice?: string
  category: string
  image: string
  description: string
  highlights: string[]
}

export default function PgdmMbaCategory() {
  const [searchTerm, setSearchTerm] = useState('')
  const { openModal } = useFormModal()

  // Updated Content: Premium PGDM & MBA focus
  const courses: Course[] = [
    {
      id: 1,
      title: 'Global PGDM in Strategic Leadership',
      provider: 'VidhyaVriddhi Elite',
      duration: '24 Months',
      level: 'Post Graduate',
      rating: 4.9,
      students: 12400,
      price: '₹1,50,000',
      originalPrice: '₹2,20,000',
      category: 'PGDM',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      description: 'Industry-aligned PGDM focusing on disruptive business strategies and global leadership.',
      highlights: ['AICTE Approved', 'Dual Specialization', 'International Immersion']
    },
    {
      id: 2,
      title: 'MBA in Digital Business Transformation',
      provider: 'Premier University',
      duration: '24 Months',
      level: 'Masters',
      rating: 4.8,
      students: 8900,
      price: '₹1,35,000',
      originalPrice: '₹1,90,000',
      category: 'MBA',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Master the digital landscape with specialized modules in E-commerce and Data Analytics.',
      highlights: ['Cloud Computing', 'Digital Marketing', 'Innovation Lab']
    },
    {
      id: 3,
      title: 'Executive PGDM for Professionals',
      provider: 'Global Business School',
      duration: '15 Months',
      level: 'Executive Masters',
      rating: 4.9,
      students: 4500,
      price: '₹2,10,000',
      originalPrice: '₹2,80,000',
      category: 'PGDM',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      description: 'Accelerated program designed for working leads transitioning into C-suite roles.',
      highlights: ['Weekend Batches', 'Networking Events', 'Case Study Focus']
    },
    {
      id: 4,
      title: 'MBA in Finance & Fintech Operations',
      provider: 'Financial Excellence Inst.',
      duration: '24 Months',
      level: 'Masters',
      rating: 4.7,
      students: 6700,
      price: '₹1,25,000',
      originalPrice: '₹1,75,000',
      category: 'MBA',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
      description: 'Bridging traditional financial management with the future of digital banking and blockchain.',
      highlights: ['Stock Market Sim', 'Fintech Certifications', 'UGC Approved']
    }
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6">
      {/* Search & Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
              Premium <span className="text-orange-500">PGDM & MBA</span> Programs
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Elevate your career trajectory with industry-recognized management programs from top-tier global institutions.
            </p>
          </div>
      
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16"
        >
          {filteredCourses.map(course => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:border-orange-300 transition-all duration-300 flex flex-col h-full shadow-lg">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {course.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-orange-500 text-xs font-medium uppercase">
                    <GraduationCap className="w-4 h-4" />
                    {course.provider}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-800">
                        <ShieldCheck className="w-4 h-4 text-orange-500" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Footer */}
                  <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-orange-500">{course.price}</div>
                      <div className="text-xs text-gray-500 line-through">{course.originalPrice}</div>
                    </div>
                    <button 
                      onClick={() => openModal()}
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                      Enquire <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #cbd5e1 !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { background: #f97316 !important; opacity: 1; }
      `}</style>
    </div>
  )
}