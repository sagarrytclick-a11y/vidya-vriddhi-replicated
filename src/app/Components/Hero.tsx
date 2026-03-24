'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, GraduationCap, FileText, MonitorPlay, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import SearchOverlay from './SearchOverlay'

const Hero = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    
    // Lightweight slide data - minimal objects
    const slides = [
        {
            image: "https://i.pinimg.com/1200x/87/0a/9f/870a9fd2c38d42373301bd563c4c055b.jpg",
            title: "Explore Top Colleges, Exams, Results & More",
            subtitle: "Search from 1000+ colleges worldwide",
            collegeName: "Technical University of Munich"
        },
        {
            image: "https://i.pinimg.com/1200x/93/72/da/9372da992291ceb01345624c9efed85b.jpg",
            title: "Explore Top Colleges, Exams, Results & More",
            subtitle: "Explore opportunities in top countries",
            collegeName: "University of Toronto"
        },
        {
            image: "https://i.pinimg.com/1200x/2d/08/8c/2d088c85755726cb50647c7c5eb3c0f9.jpg",
            title: "Explore Top Colleges, Exams, Results & More",
            subtitle: "Pursue medical education globally",
            collegeName: "National University of Singapore"
        }
    ]
    
    const stats = [
        { icon: <GraduationCap size={20} />, label: "6000+ Institutions" },
        { icon: <FileText size={20} />, label: "200+ Exams" },
        { icon: <MonitorPlay size={20} />, label: "200+ Online Courses" },
        { icon: <BookOpen size={20} />, label: "200+ Courses" },
    ]

    // Optimized auto-rotate with cleanup
    useEffect(() => {
        const startRotation = () => {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length)
            }, 5000)
        }
        
        startRotation()
        
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [slides.length])

    // Simple navigation functions
    const nextSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        // Restart auto-rotation
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
    }

    const prevSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        // Restart auto-rotation
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
    }

    return (
        <section className="relative h-150 w-full flex items-center justify-center overflow-hidden">
            {/* Simple Slider Container - No heavy animations */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                        backgroundImage: `url('${slides[currentSlide].image}')`,
                    }}
                >
                    {/* College Name - Bottom Left */}
                    <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
                            <p className="text-sm font-semibold text-gray-900">{slides[currentSlide].collegeName}</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            </div>

            {/* Simple Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>
            
            <button
                onClick={nextSlide}
                className="absolute right-4 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            {/* Simple Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (intervalRef.current) clearInterval(intervalRef.current)
                            setCurrentSlide(index)
                            intervalRef.current = setInterval(() => {
                                setCurrentSlide((prev) => (prev + 1) % slides.length)
                            }, 5000)
                        }}
                        className={`transition-colors ${
                            index === currentSlide
                                ? 'w-6 h-1.5 bg-white'
                                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70'
                        } rounded-full`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content Container - Simplified */}
            <div className="relative z-10 w-full max-w-5xl px-6 text-center text-white">

                {/* Dynamic Main Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                    {slides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-100">
                    {slides[currentSlide].subtitle}
                </p>

                {/* Stats - Simplified */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                        >
                            <span className="text-[#F27121] bg-white p-1 rounded-full flex items-center justify-center">
                                {item.icon}
                            </span>
                            <span className="text-sm font-medium">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Search Bar - Simplified */}
                <div 
                    className="max-w-3xl mx-auto bg-white rounded-lg p-1.5 flex items-center shadow-lg cursor-pointer"
                    onClick={() => setIsSearchOpen(true)}
                >
                    <div className="flex-1 flex items-center px-4">
                        <input
                            type="text"
                            placeholder="Search Colleges, Courses, Exams..."
                            className="w-full py-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-500 outline-none cursor-pointer"
                            readOnly
                        />
                    </div>

                    <button 
                        className="bg-[#F27121] text-white px-6 py-2 rounded-md font-medium hover:bg-[#E05A1B] transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsSearchOpen(true)
                        }}
                    >
                        Search
                    </button>
                </div>

            </div>
            
            {/* Search Overlay */}
            <SearchOverlay 
                isOpen={isSearchOpen} 
                onClose={() => setIsSearchOpen(false)} 
            />
        </section>
    )
}

export default Hero