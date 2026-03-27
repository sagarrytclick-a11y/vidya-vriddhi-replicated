import StudyAbroadClient from './StudyAbroadClient'

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

async function getStudyAbroadColleges(): Promise<College[]> {
  try {
    console.log('🔍 [Study Abroad Page] Fetching colleges...')
    
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    
    // Fetch all colleges without limit
    let response = await fetch(`${baseUrl}/api/colleges?college_type=study_abroad`, {
      cache: 'no-store'
    })
    let result = await response.json()
    
    console.log('🔍 [Study Abroad Page] API response with college_type filter:', result)
    
    let studyAbroadColleges: College[] = []
    
    if (result.success && result.data.colleges.length > 0) {
      studyAbroadColleges = result.data.colleges
      console.log('🔍 [Study Abroad Page] Found colleges with college_type:', studyAbroadColleges.length)
    } else {
      // Fallback: fetch all colleges and filter manually
      console.log('🔍 [Study Abroad Page] No colleges with college_type, fetching all colleges...')
      response = await fetch(`${baseUrl}/api/colleges`, {
        cache: 'no-store'
      })
      result = await response.json()
      
      if (result.success) {
        const allColleges = result.data.colleges
        console.log('🔍 [Study Abroad Page] Total colleges fetched:', allColleges.length)
        
        // Filter out MBBS colleges (keep everything else as study abroad)
        const mbbsColleges = allColleges.filter((college: any) => 
          college.slug?.toLowerCase().includes('mbbs') || 
          college.name?.toLowerCase().includes('medical') ||
          college.name?.toLowerCase().includes('mbbs') ||
          college.college_type === 'mbbs_abroad'
        )
        
        studyAbroadColleges = allColleges.filter((college: any) => !mbbsColleges.includes(college))
        console.log('🔍 [Study Abroad Page] MBBS colleges excluded:', mbbsColleges.length)
        console.log('🔍 [Study Abroad Page] Study abroad colleges after filtering:', studyAbroadColleges.length)
      }
    }
    
    return studyAbroadColleges
  } catch (error) {
    console.error('Error fetching study abroad colleges:', error)
    return []
  }
}

export default async function StudyAbroadPage() {
  const colleges = await getStudyAbroadColleges()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <div className="relative w-full h-screen max-h-[600px] overflow-hidden hidden md:block">
        <img
          src="/studyAbroad/image.png"
          alt="Study Abroad"
          className="absolute inset-0 w-full h-full object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
          {/* <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              Study <span className="text-blue-300">Abroad</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Pursue your degree at top international universities
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">{filteredColleges.length}</p>
                <p className="text-sm">Colleges</p>
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                <p className="text-3xl font-bold">{countries.length}</p>
                <p className="text-sm">Countries</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <StudyAbroadClient initialColleges={colleges} />
    </div>
  )
}
