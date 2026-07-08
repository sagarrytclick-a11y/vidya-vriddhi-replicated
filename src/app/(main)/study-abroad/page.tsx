import StudyAbroadClient from './StudyAbroadClient'
import { connectDB } from '@/lib/db'
import College from '@/models/College'

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
    console.log('🔍 [Study Abroad Page] Connecting to database...')
    await connectDB()
    console.log('🔍 [Study Abroad Page] Database connected. Fetching colleges...')
    
    // Fetch all active study abroad colleges directly from MongoDB
    const collegesData = await College.find({
      is_active: true,
      college_type: 'study_abroad'
    })
      .populate('country_ref', 'name slug flag')
      .sort({ ranking: 1, name: 1 })
      .lean()

    console.log('🔍 [Study Abroad Page] Found study abroad colleges in DB:', collegesData.length)

    // Map Mongoose documents to plain JSON-serializable types expected by client component
    const studyAbroadColleges: College[] = collegesData.map((college: any) => ({
      _id: college._id.toString(),
      name: college.name || '',
      slug: college.slug || '',
      college_type: college.college_type || '',
      country_ref: college.country_ref ? {
        _id: college.country_ref._id.toString(),
        name: college.country_ref.name || '',
        slug: college.country_ref.slug || '',
        flag: college.country_ref.flag || ''
      } : {
        _id: '',
        name: 'Unknown',
        slug: 'unknown',
        flag: ''
      },
      establishment_year: college.establishment_year || '',
      banner_url: college.banner_url || '',
      overview: {
        title: college.overview?.title || '',
        description: college.overview?.description || ''
      },
      key_highlights: {
        features: college.key_highlights?.features || []
      },
      ranking: {
        country_ranking: college.ranking?.country_ranking || ''
      }
    }))

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
