import MBBSAbroadClient from './MBBSAbroadClient'

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

async function getMBBSAbroadColleges(): Promise<College[]> {
  try {
    console.log('🔍 [MBBS Abroad Page] Fetching colleges...')
    
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    
    // Fetch all MBBS colleges without limit
    let response = await fetch(`${baseUrl}/api/colleges?college_type=mbbs_abroad`, {
      cache: 'no-store'
    })
    let result = await response.json()

    if (result.success && result.data.colleges.length > 0) {
      console.log('🔍 [MBBS Abroad Page] Found MBBS colleges:', result.data.colleges.length)
      return result.data.colleges
    } else {
      // Fallback: fetch all colleges and filter for MBBS
      console.log('🔍 [MBBS Abroad Page] No colleges with college_type, fetching all colleges...')
      response = await fetch(`${baseUrl}/api/colleges`, {
        cache: 'no-store'
      })
      result = await response.json()

      if (result.success) {
        const allColleges = result.data.colleges
        console.log('🔍 [MBBS Abroad Page] Total colleges fetched:', allColleges.length)

        // Filter for MBBS colleges
        const mbbsColleges = allColleges.filter((college: any) =>
          college.slug?.toLowerCase().includes('mbbs') ||
          college.name?.toLowerCase().includes('medical') ||
          college.name?.toLowerCase().includes('mbbs') ||
          college.college_type === 'mbbs_abroad'
        )

        console.log('🔍 [MBBS Abroad Page] MBBS colleges found:', mbbsColleges.length)
        return mbbsColleges
      }
    }
    
    return []
  } catch (error) {
    console.error('Error fetching MBBS abroad colleges:', error)
    return []
  }
}

export default async function MBBSAbroadPage() {
  const colleges = await getMBBSAbroadColleges()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <div className="relative w-full h-screen max-h-[600px] overflow-hidden hidden md:block">
        <img
          src="/mbbsAbroad/image.jpg"
          alt="MBBS Abroad"
          className="absolute inset-0 w-full h-full object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
          {/* <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              MBBS <span className="text-green-300">Abroad</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Pursue your medical degree at top international universities
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">{filteredColleges.length}</p>
                <p className="text-sm">Medical Colleges</p>
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">{countries.length}</p>
                <p className="text-sm">Countries</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <MBBSAbroadClient initialColleges={colleges} />
    </div>
  )
}