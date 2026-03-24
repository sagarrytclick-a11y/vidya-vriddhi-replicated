import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

interface SearchResult {
  colleges: Array<{
    _id: string
    name: string
    slug: string
    country_ref: {
      name: string
      slug: string
      flag: string
    }
    college_type: string
    banner_url?: string
    overview?: {
      description: string
    }
  }>
  countries: Array<{
    _id: string
    name: string
    slug: string
    flag: string
    description?: string
  }>
  exams: Array<{
    _id: string
    name: string
    slug: string
    description?: string
  }>
}

const fetchSearchResults = async (query: string): Promise<SearchResult> => {
  if (!query.trim()) {
    return {
      colleges: [],
      countries: [],
      exams: []
    }
  }

  const params = new URLSearchParams({
    search: query.trim(),
    limit: '5' // Limit results for better UX in search overlay
  })

  // Search colleges
  const collegesResponse = await fetch(`/api/colleges?${params}`)
  let colleges = []
  if (collegesResponse.ok) {
    const collegesResult = await collegesResponse.json()
    if (collegesResult.success) {
      colleges = collegesResult.data.colleges || []
    }
  }

  // Search countries
  const countriesResponse = await fetch(`/api/countries`)
  let countries = []
  if (countriesResponse.ok) {
    const countriesResult = await countriesResponse.json()
    if (countriesResult.success) {
      countries = countriesResult.data
        .filter((country: any) => 
          country.name.toLowerCase().includes(query.toLowerCase()) ||
          country.description?.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5) // Limit results
    }
  }

  // Search exams (if exams API exists)
  let exams: any[] = []
  try {
    const examsResponse = await fetch(`/api/exams`)
    if (examsResponse.ok) {
      const examsResult = await examsResponse.json()
      if (examsResult.success) {
        exams = (examsResult.data || [])
          .filter((exam: any) => 
            exam.name.toLowerCase().includes(query.toLowerCase()) ||
            exam.description?.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5) // Limit results
      }
    }
  } catch (error) {
    // Exams API might not exist, that's okay
    console.log('Exams API not available')
  }

  return {
    colleges,
    countries,
    exams
  }
}

export function useSearch(query: string) {
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  // Debounce the query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300) // 300ms delay

    return () => {
      clearTimeout(timer)
    }
  }, [query])

  return useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => fetchSearchResults(debouncedQuery),
    enabled: debouncedQuery.trim().length > 2, // Only search when query has more than 2 characters
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  })
}

// Hook for trending/popular searches
export function useTrendingSearches() {
  return useQuery({
    queryKey: ['trending-searches'],
    queryFn: async () => {
      // This could be an API call to get trending searches
      // For now, return mock data
      return [
        { name: 'IIMA', category: 'College', trending: true },
        { name: 'IIT Bombay', category: 'College', trending: true },
        { name: 'AIIMS Delhi', category: 'College', trending: true },
        { name: 'JEE Main', category: 'Exam', trending: true },
        { name: 'GATE', category: 'Exam', trending: true },
        { name: 'CAT', category: 'Exam', trending: true },
        { name: 'Master of Business Administration (MBA)', category: 'Course', trending: true },
        { name: 'Bachelor of Technology (B.Tech)', category: 'Course', trending: false },
        { name: 'NEET', category: 'Exam', trending: true },
        { name: 'Delhi University', category: 'College', trending: false }
      ]
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
  })
}
