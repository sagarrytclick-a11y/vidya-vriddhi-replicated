'use client'

import React, { useState, useMemo, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Search, Globe, MapPin, GraduationCap, ArrowRight, X, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCountries } from '@/hooks/useCountries'
import { Country } from '@/lib/types'
import { Button } from '@/components/ui/button'

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [displayedCountries, setDisplayedCountries] = useState<Country[]>([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const itemsPerPage = 12

  const { 
    data: countries = [], 
    isLoading, 
    error, 
    refetch 
  } = useCountries();

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    if (!searchTerm) return countries
    
    const searchLower = searchTerm.toLowerCase()
    return countries.filter(country => 
      country.name.toLowerCase().includes(searchLower) ||
      (country.description && country.description.toLowerCase().includes(searchLower))
    )
  }, [countries, searchTerm])

  // Reset displayed countries when search changes
  useEffect(() => {
    const initialBatch = filteredCountries.slice(0, itemsPerPage)
    setDisplayedCountries(initialBatch)
    setHasMore(filteredCountries.length > itemsPerPage)
  }, [filteredCountries, itemsPerPage])

  // Load more countries
  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return
    
    setIsLoadingMore(true)
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const currentLength = displayedCountries.length
      const nextBatch = filteredCountries.slice(currentLength, currentLength + itemsPerPage)
      
      setDisplayedCountries(prev => [...prev, ...nextBatch])
      setHasMore(currentLength + itemsPerPage < filteredCountries.length)
      setIsLoadingMore(false)
    }, 300)
  }, [displayedCountries.length, filteredCountries, hasMore, isLoadingMore, itemsPerPage])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm">Loading countries...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Countries</h2>
          <p className="text-gray-500 mb-6 text-sm">
            {error instanceof Error ? error.message : 'An unexpected error occurred'}
          </p>
          <button 
            onClick={() => refetch()}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2 inline" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#EF7D31]/5 via-[#F8FAFC] to-[#EF7D31]/5">
      {/* Simple Header */}
      <div className="bg-white border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">
                Study <span className="font-semibold text-[#EF7D31]">Abroad</span>
              </h1>
              <p className="text-gray-700 text-sm font-medium">
                Explore {filteredCountries.length} countries for international education
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#EF7D31] p-3 rounded-xl text-white">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xl font-light text-white">{filteredCountries.length}</p>
                <p className="text-xs text-white/80">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Search */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EF7D31] h-4 w-4" />
            <input
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:border-[#EF7D31] focus:bg-white"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Countries List */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {displayedCountries.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-linear-to-br from-[#EF7D31]/10 to-[#EF7D31]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={24} className="text-[#EF7D31]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No countries found</h3>
            <p className="text-gray-700 text-sm font-medium">Try adjusting your search</p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedCountries.map((country) => (
              <div
                key={country._id}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md hover:border-[#EF7D31] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Country Flag */}
                  <div className="w-full md:w-48 h-32 bg-linear-to-br from-[#EF7D31]/10 to-[#EF7D31]/20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <div className="text-5xl">
                      {country.flag}
                    </div>
                  </div>

                  {/* Country Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{country.name}</h3>
                        <div className="flex items-center text-[#EF7D31] text-sm font-medium mb-2">
                          <MapPin size={14} className="mr-1" />
                          Study Destination
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-linear-to-r from-[#EF7D31] to-[#EF7D31] text-white text-sm font-medium rounded-full">
                        Active
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm line-clamp-2 mb-4 font-medium">
                      {country.description || 'Discover educational opportunities in this amazing country'}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
                      <div className="flex items-center gap-1 text-[#EF7D31] font-medium">
                        <GraduationCap size={14} />
                        <span>Top Universities</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#EF7D31] font-medium">
                        <Globe size={14} />
                        <span>Global Recognition</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#EF7D31] font-medium">
                        <MapPin size={14} />
                        <span>PR Opportunities</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/countries/${country.slug}`}>
                        <button className="text-[#EF7D31] hover:text-[#4A90E2] font-semibold text-sm transition-colors flex items-center gap-1">
                          Explore Country
                          <span className="text-[#EF7D31]">→</span>
                        </button>
                      </Link>
                    </div>
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
          Showing {displayedCountries.length} of {filteredCountries.length} countries
        </div>
      </div>
    </div>
  )
}