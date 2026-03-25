'use client'

import CourseCategories from './CourseCategories'

import PGDMhero from './PGDMhero'
import MBAApplicationCTA from './MBAApplicationCTA'
import PgdmMbaCategory from './pgdm-mba-category'

export default function PGDMComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PGDMhero />
      <PgdmMbaCategory />
      <MBAApplicationCTA />
      <CourseCategories />
    </div>
  )
}
