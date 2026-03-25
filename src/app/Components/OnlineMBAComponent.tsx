'use client'

import CourseGrid from './CourseGrid'
import CourseCategories from './CourseCategories'
import Onlinehero from './Onlinehero'
import Swiper from './Swiper'

export default function OnlineMBAComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Onlinehero />
      <Swiper />
      <CourseGrid />
      <CourseCategories />
    </div>
  )
}