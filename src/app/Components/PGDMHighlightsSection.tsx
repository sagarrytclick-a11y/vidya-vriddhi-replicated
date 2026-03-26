const PGDMHighlightsSection = () => {
  const highlights = [
    {
      icon: "🎯",
      title: "Industry-Focused Curriculum",
      description: "Practical learning approach with real-world case studies and industry projects"
    },
    {
      icon: "🤝",
      title: "Strong Industry Connections",
      description: "Regular guest lectures and networking opportunities with industry leaders"
    },
    {
      icon: "📊",
      title: "Placement Support",
      description: "Dedicated placement cell with 90%+ placement record"
    },
    {
      icon: "🌍",
      title: "Global Recognition",
      description: "Internationally recognized curriculum and exchange programs"
    },
    {
      icon: "💼",
      title: "Internship Opportunities",
      description: "Mandatory internships with top companies for practical exposure"
    },
    {
      icon: "🚀",
      title: "Entrepreneurship Support",
      description: "Incubation center and startup mentorship programs"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PGDM?</h2>
          <p className="text-lg text-gray-600">Discover the advantages that make PGDM a smart career choice</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PGDMHighlightsSection
