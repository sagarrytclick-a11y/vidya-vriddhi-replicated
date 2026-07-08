'use client'

import CourseGrid from './CourseGrid'
import CourseCategories from './CourseCategories'
import Onlinehero from './Onlinehero'
import Swiper from './Swiper'
import EmploymentPartners from './EmploymentPartners'
import StatisticsSection from './StatisticsSection'
import WhatWeOfferSection from './WhatWeOfferSection'

export default function OnlineMBAComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Onlinehero />
      <StatisticsSection />
      <Swiper />
      <EmploymentPartners />
      <WhatWeOfferSection />
      <CourseGrid />
      <CourseCategories />
    </div>
  )
}