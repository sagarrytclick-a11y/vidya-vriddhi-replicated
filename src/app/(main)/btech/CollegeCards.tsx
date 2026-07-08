import React from 'react'

const CollegeCards = () => {

    const colleges = [
        {
            name: "IIT DELHI",
            est: "1961",
            fees: "2L - 2.5L/yr",
            rank: "NIRF #2",
            tag: "TOP ENGINEERING INSTITUTE",
            location: "New Delhi",
            courses: "B.Tech, M.Tech",
            placement: "Avg 20 LPA",
            image: "https://i.pinimg.com/736x/f8/e0/47/f8e0473676b29706f68059fb91d6d570.jpg",
        },
        {
            name: "IIM AHMEDABAD",
            est: "1961",
            fees: "23L total",
            rank: "NIRF #1 (MBA)",
            tag: "INDIA'S BEST B-SCHOOL",
            location: "Ahmedabad",
            courses: "BBA (IPM), MBA",
            placement: "Avg 34 LPA",
            image: "https://storage.googleapis.com/web_cms_content/banner_3ddadc6b8b/banner_3ddadc6b8b.webp",
        },
        {
            name: "BITS PILANI",
            est: "1964",
            fees: "5L/yr",
            rank: "Top Private",
            tag: "PREMIER PRIVATE TECH",
            location: "Pilani",
            courses: "B.Tech, MBA",
            placement: "Avg 18 LPA",
            image: "https://images.shiksha.com/mediadata/images/articles/1677134801phpMbAHiY.jpeg",
        },
        {
            name: "DELHI UNIVERSITY",
            est: "1922",
            fees: "10K - 50K/yr",
            rank: "Top Arts & Commerce",
            tag: "BEST FOR BBA & COMMERCE",
            location: "Delhi",
            courses: "BBA, B.Com",
            placement: "Avg 6 LPA",
            image: "https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2Fd8877ad0-6e83-487a-b0a4-57763b8190bc%2Fdelhi-university-557ca474-c1d1-45b2-a97b-152043fd14ab.jpg&w=3840&q=75",
        },
        {
            name: "NMIMS MUMBAI",
            est: "1981",
            fees: "3L - 5L/yr",
            rank: "Top Private B-School",
            tag: "INDUSTRY-ORIENTED PROGRAMS",
            location: "Mumbai",
            courses: "BBA, MBA",
            placement: "Avg 10 LPA",
            image: "https://www.nmims.edu/images/home-slide/m-school-1.jpg",
        },
        {
            name: "VIT VELLORE",
            est: "1984",
            fees: "2L - 4L/yr",
            rank: "Top Pvt Engineering",
            tag: "STRONG PLACEMENTS",
            location: "Vellore",
            courses: "B.Tech, MBA",
            placement: "Avg 9 LPA",
            image: "https://images.shiksha.com/mediadata/images/articles/1656187006phpmZp2II.jpeg",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Top Colleges & Universities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Same Design for All Cards */}
                {colleges.map((college, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative">
                            <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                {college.tag}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
                            <div className="flex items-center text-sm text-gray-600 mb-4">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {college.location}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <div className="text-blue-600 font-semibold">{college.rank}</div>
                                    <div className="text-gray-600 text-xs">Rank</div>
                                </div>
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <div className="text-green-600 font-semibold">{college.placement}</div>
                                    <div className="text-gray-600 text-xs">Package</div>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Est:</span>
                                    <span className="font-semibold text-gray-800">{college.est}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Courses:</span>
                                    <span className="font-semibold text-gray-800">{college.courses}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Fees:</span>
                                    <span className="font-semibold text-gray-800">{"\u20B9"}{college.fees}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollegeCards
