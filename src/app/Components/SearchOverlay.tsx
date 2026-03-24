'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search, TrendingUp, X, Loader2, GraduationCap, Globe, FileText } from 'lucide-react'
import { useSearch, useTrendingSearches } from '@/hooks/useSearch'
import Link from 'next/link'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  // React Query hooks
  const { data: searchResults, isLoading: isSearchLoading, error: searchError } = useSearch(searchQuery)
  const { data: trendingSearches = [], isLoading: isTrendingLoading } = useTrendingSearches()
  
  // Check if user is actively typing (for debouncing indicator)
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    
    // Show typing indicator
    setIsTyping(true)
    
    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    
    // Hide typing indicator after user stops typing
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 300)
  }

  const handleItemClick = (item: string, type?: string) => {
    console.log('Searching for:', item, type)
    // Add navigation logic based on type
    if (type === 'college') {
      // Navigate to college page
    } else if (type === 'country') {
      // Navigate to country page
    } else if (type === 'exam') {
      // Navigate to exam page
    }
    onClose()
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      handleItemClick(searchQuery.trim())
    }
  }

  const hasSearchResults = searchResults && (
    searchResults.colleges.length > 0 || 
    searchResults.countries.length > 0 || 
    searchResults.exams.length > 0
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Search</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Search Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <form onSubmit={handleSearchSubmit} className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="What Are You Looking For?"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full pl-14 pr-14 py-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xl"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
              {isTyping && (
                <div className="flex items-center text-gray-400 text-sm mr-2">
                  <Loader2 className="w-4 h-4 animate-spin mr-1" />
                  <span>Typing...</span>
                </div>
              )}
              {isSearchLoading && !isTyping && (
                <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
              )}
            </div>
          </form>

          {/* Search Results */}
          {searchQuery.trim().length > 2 && (
            <div className="mb-8">
              {isTyping ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 text-gray-400 animate-spin mr-3" />
                  <span className="text-gray-500">Waiting for you to finish typing...</span>
                </div>
              ) : isSearchLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-8 h-8 text-orange-500 animate-spin mr-3" />
                  <span className="text-gray-600">Searching...</span>
                </div>
              ) : searchError ? (
                <div className="text-center py-8">
                  <p className="text-red-500">Error searching. Please try again.</p>
                </div>
              ) : hasSearchResults ? (
                <div className="space-y-6">
                  {/* Colleges Results */}
                  {searchResults.colleges.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-orange-500" />
                        Colleges
                      </h4>
                      <div className="space-y-3">
                        {searchResults.colleges.map((college) => (
                          <Link
                            key={college._id}
                            href={`/colleges/${college.slug}`}
                            onClick={() => onClose()}
                            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900">{college.name}</h5>
                                <p className="text-sm text-gray-600 flex items-center mt-1">
                                  <span>{college.country_ref?.flag}</span>
                                  <span className="ml-1">{college.country_ref?.name}</span>
                                </p>
                                {college.overview?.description && (
                                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {college.overview.description}
                                  </p>
                                )}
                              </div>
                              <div className="text-orange-500">
                                <Search className="w-5 h-5" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Countries Results */}
                  {searchResults.countries.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-orange-500" />
                        Countries
                      </h4>
                      <div className="space-y-3">
                        {searchResults.countries.map((country) => (
                          <Link
                            key={country._id}
                            href={`/countries/${country.slug}`}
                            onClick={() => onClose()}
                            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900 flex items-center">
                                  <span className="text-2xl mr-3">{country.flag}</span>
                                  {country.name}
                                </h5>
                                {country.description && (
                                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {country.description}
                                  </p>
                                )}
                              </div>
                              <div className="text-orange-500">
                                <Search className="w-5 h-5" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exams Results */}
                  {searchResults.exams.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-orange-500" />
                        Exams
                      </h4>
                      <div className="space-y-3">
                        {searchResults.exams.map((exam) => (
                          <Link
                            key={exam._id}
                            href={`/exams/${exam.slug}`}
                            onClick={() => onClose()}
                            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900">{exam.name}</h5>
                                {exam.description && (
                                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {exam.description}
                                  </p>
                                )}
                              </div>
                              <div className="text-orange-500">
                                <Search className="w-5 h-5" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : searchQuery.trim().length > 2 ? (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-400 mt-2">Try different keywords or browse popular searches</p>
                </div>
              ) : null}
            </div>
          )}

          {/* Popular Searches */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-900">Popular Searches</h3>
            </div>
            
            {isTrendingLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 text-orange-500 animate-spin mr-2" />
                <span className="text-gray-600">Loading popular searches...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingSearches.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(item.name)}
                    className="flex items-center justify-between p-4 text-left hover:bg-white rounded-lg transition-colors group border border-gray-200 hover:border-orange-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div>
                        <span className="text-gray-900 group-hover:text-orange-600 font-medium text-base">
                          {item.name}
                        </span>
                        <span className="text-gray-500 text-sm ml-2 block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    {item.trending && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                        Trending
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <span className="text-base text-gray-600 font-medium">Quick links:</span>
                {['Engineering Colleges', 'MBA Colleges', 'Medical Colleges', 'Law Colleges'].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(link)}
                    className="text-base text-orange-500 hover:text-orange-600 font-medium"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
