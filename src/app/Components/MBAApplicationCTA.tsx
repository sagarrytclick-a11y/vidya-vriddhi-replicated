'use client'

import { useFormModal } from '@/context/FormModalContext'
import { ArrowRight } from 'lucide-react'

export default function MBAApplicationCTA() {
  const { openModal } = useFormModal()

  return (
    <section className="bg-[#0A2463] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Circular Button on Left */}
        <button
          onClick={() => openModal()}
          className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg group"
        >
          <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-[#0A2463] group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Text on Right */}
        <div className="max-w-2xl text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Apply Now for MBA Admission
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Talk to our team for college shortlisting, eligibility support, application guidance, and faster admission planning.
          </p>
        </div>
      </div>
    </section>
  )
}
