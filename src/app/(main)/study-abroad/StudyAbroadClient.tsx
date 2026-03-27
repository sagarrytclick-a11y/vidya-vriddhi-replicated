'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Search, Building, Calendar, Award, ArrowRight, GraduationCap, MapPin } from 'lucide-react'
import Link from 'next/link'

interface College {
  _id: string
  name: string
  slug: string
  college_type: string
  country_ref: {
    _id: string
    name: string
    slug: string
    flag: string
  }
  establishment_year: string
  banner_url: string
  overview: {
    title: string
    description: string
  }
  key_highlights: {
    features: string[]
  }
  ranking: {
    country_ranking: string
  }
}

interface StudyAbroadClientProps {
  initialColleges: College[]
}

export default function StudyAbroadClient({ initialColleges }: StudyAbroadClientProps) {
  const [colleges, setColleges] = useState<College[]>(initialColleges)
  const [displayedColleges, setDisplayedColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const itemsPerPage = 9

  const filteredColleges = useMemo(() => colleges.filter(college => {
    const matchesSearch = !searchTerm ||
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.overview?.description?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCountry = selectedCountry === 'all' ||
      college.country_ref?.name === selectedCountry

    return matchesSearch && matchesCountry
  }), [colleges, searchTerm, selectedCountry])

  const countries = [...new Set(colleges.map(college => college.country_ref?.name).filter(Boolean))]

  // Reset displayed colleges when filters change
  useEffect(() => {
    const initialBatch = filteredColleges.slice(0, itemsPerPage)
    setDisplayedColleges(initialBatch)
    setHasMore(filteredColleges.length > itemsPerPage)
  }, [filteredColleges, itemsPerPage])

  // Load more colleges
  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return
    
    setIsLoadingMore(true)
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const currentLength = displayedColleges.length
      const nextBatch = filteredColleges.slice(currentLength, currentLength + itemsPerPage)
      
      setDisplayedColleges(prev => [...prev, ...nextBatch])
      setHasMore(currentLength + itemsPerPage < filteredColleges.length)
      setIsLoadingMore(false)
    }, 300)
  }, [displayedColleges.length, filteredColleges, hasMore, isLoadingMore, itemsPerPage])

  return (
    <>
      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EF7D31] h-4 w-4" />
              <input
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:border-[#EF7D31] focus:bg-white"
              />
            </div>

            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:border-[#EF7D31] focus:bg-white"
            >
              <option value="all">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <button
              onClick={() => { setSearchTerm(''); setSelectedCountry('all') }}
              className="w-full px-3 py-2 bg-[#EF7D31]/10 border border-[#EF7D31]/20 rounded-lg text-sm text-[#EF7D31] hover:bg-[#EF7D31]/20 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {displayedColleges.length === 0 ? (
          <div className="text-center py-16">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedColleges.map((college) => (
              <div key={college._id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                {/* College Image */}
                <div className="h-48 bg-linear-to-br from-[#EF7D31]/10 to-[#EF7D31]/20 rounded-t-xl overflow-hidden shrink-0">
                  {college.banner_url ? (
                    <img
                      src={college.banner_url}
                      alt={college.name}
                      className="w-full h-full object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-[#EF7D31]" />
                    </div>
                  )}
                </div>

                {/* College Info */}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{college.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{college.country_ref?.name}</span>
                        <span className="text-[#EF7D31] font-medium">• {college.country_ref?.flag}</span>
                      </div>
                    </div>
                    <span className="bg-[#EF7D31]/10 whitespace-normal text-[#EF7D31] text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center text-center leading-tight max-w-30">
                      Study Abroad
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {college.overview?.description || 'Quality international education with global opportunities.'}
                  </p>

                  {/* Key Highlights */}
                  {college.key_highlights?.features?.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {college.key_highlights.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="inline-block px-2 py-1 bg-[#EF7D31]/10 text-[#EF7D31] text-xs rounded-lg">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      <span>{college.establishment_year || 'N/A'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#EF7D31]" />
                      <span>{college.ranking?.country_ranking || 'Ranked'}</span>
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto">
                    <Link href={`/colleges/${college.slug}`}>
                      <button className="w-full bg-[#EF7D31] hover:bg-[#4A90E2] text-white py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="bg-[#EF7D31] hover:bg-[#4A90E2] disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
            >
              {isLoadingMore ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                <>
                  Load More
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Results count */}
        <div className="text-center mt-4 text-sm text-gray-600">
          Showing {displayedColleges.length} of {filteredColleges.length} colleges
        </div>
      </div>
    </>
  )
}
