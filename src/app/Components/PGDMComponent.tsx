'use client'

import CourseGrid from './CourseGrid'
import CourseCategories from './CourseCategories'
import PGDMhero from './PGDMhero'
import Swiper from './Swiper'
import EmploymentPartners from './EmploymentPartners'
import StatisticsSection from './StatisticsSection'
import WhatWeOfferSection from './WhatWeOfferSection'
import MBAApplicationCTA from './MBAApplicationCTA'
import PgdmMbaCategory from './pgdm-mba-category'
import PGDMFAQSection from './PGDMFAQSection'
import PGSpecializationsSection from './PGSpecializationsSection'
import PGDMHighlightsSection from './PGDMHighlightsSection'
import PGDMAdmissionSection from './PGDMAdmissionSection'

export default function PGDMComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PGDMhero />
      <PGSpecializationsSection />
      <StatisticsSection />
      <EmploymentPartners />
      <WhatWeOfferSection />
      <PGDMAdmissionSection />
      <PgdmMbaCategory />
      <MBAApplicationCTA />
      <CourseCategories />
      <PGDMFAQSection />
    </div>
  )
}
