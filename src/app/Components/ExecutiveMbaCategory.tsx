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

export default function ExecutiveMbaCategory() {
  const [searchTerm, setSearchTerm] = useState('')
  const { openModal } = useFormModal()

  const courses: Course[] = [
    {
      id: 1,
      title: 'Executive MBA in General Management',
      provider: 'IIM Ahmedabad',
      duration: '24 Months',
      level: 'Executive',
      rating: 4.9,
      students: 8500,
      price: '₹25,00,000',
      originalPrice: '₹30,00,000',
      category: 'EMBA',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
      description: 'World-class executive education from India\'s premier management institute for senior professionals.',
      highlights: ['IIM Alumni Status', 'Global Immersion', 'Peer Networking']
    },
    {
      id: 2,
      title: 'Executive MBA in Business Analytics',
      provider: 'ISB Hyderabad',
      duration: '12 Months',
      level: 'Executive',
      rating: 4.8,
      students: 6200,
      price: '₹18,50,000',
      originalPrice: '₹22,00,000',
      category: 'EMBA',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Data-driven decision making program for executives looking to leverage analytics.',
      highlights: ['ISB Certificate', 'Capstone Project', 'Industry Mentorship']
    },
    {
      id: 3,
      title: 'Global Executive MBA',
      provider: 'SPJIMR Mumbai',
      duration: '18 Months',
      level: 'Executive',
      rating: 4.9,
      students: 4200,
      price: '₹15,00,000',
      originalPrice: '₹18,50,000',
      category: 'EMBA',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      description: 'Accelerated program with international exposure for fast-track career growth.',
      highlights: ['Weekend Classes', 'Global Faculty', 'Leadership Labs']
    },
    {
      id: 4,
      title: 'Executive MBA in Finance',
      provider: 'XLRI Jamshedpur',
      duration: '18 Months',
      level: 'Executive',
      rating: 4.7,
      students: 5800,
      price: '₹14,50,000',
      originalPrice: '₹17,00,000',
      category: 'EMBA',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
      description: 'Advanced financial management program for senior finance professionals.',
      highlights: ['XLRI Certification', 'CFA Alignment', 'Case Studies']
    }
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-white text-gray-900 py-12 px-6">
      {/* Search & Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-3 tracking-tight text-gray-900">
              Executive <span className="text-[#EF7D31]">MBA</span> Programs
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              Advance your leadership skills with our executive MBA programs designed for working professionals.
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search programs..."
              className="bg-white border border-gray-200 rounded-xl pl-12 pr-6 py-3 w-full md:w-80 focus:outline-none focus:border-[#EF7D31] transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-[#EF7D31]/50 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-xl">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#EF7D31] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {course.category}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-40" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-2 mb-3 text-[#EF7D31] text-xs font-medium uppercase">
                    <GraduationCap className="w-4 h-4" />
                    {course.provider}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#EF7D31] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <ShieldCheck className="w-4 h-4 text-[#EF7D31]" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Footer */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[#EF7D31]">{course.price}</div>
                      <div className="text-xs text-gray-400 line-through">{course.originalPrice}</div>
                    </div>
                    <button 
                      onClick={() => openModal()}
                      className="flex items-center gap-2 bg-[#EF7D31] hover:bg-[#f66505] text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-orange-500/20"
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
        .swiper-pagination-bullet-active { background: #EF7D31 !important; opacity: 1; }
      `}</style>
    </div>
  )
}
