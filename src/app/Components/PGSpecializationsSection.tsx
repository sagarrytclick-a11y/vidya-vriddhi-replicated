const PGSpecializationsSection = () => {
  const specializations = [
    {
      name: "Marketing Management",
      description: "Brand management, digital marketing, market research",
      icon: "📈",
      jobs: "Marketing Manager, Brand Manager, Digital Marketing Head"
    },
    {
      name: "Finance Management",
      description: "Corporate finance, investment banking, financial analysis",
      icon: "💰",
      jobs: "Financial Analyst, Investment Banker, CFO"
    },
    {
      name: "Human Resources",
      description: "Talent acquisition, organizational development, HR analytics",
      icon: "👥",
      jobs: "HR Manager, Talent Acquisition Specialist, HR Business Partner"
    },
    {
      name: "Operations Management",
      description: "Supply chain, logistics, quality management",
      icon: "⚙️",
      jobs: "Operations Manager, Supply Chain Analyst, Quality Manager"
    },
    {
      name: "Business Analytics",
      description: "Data analysis, machine learning, business intelligence",
      icon: "📊",
      jobs: "Business Analyst, Data Scientist, Analytics Consultant"
    },
    {
      name: "International Business",
      description: "Global trade, export-import, cross-cultural management",
      icon: "🌐",
      jobs: "International Business Manager, Export Manager, Global Consultant"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PGDM Specializations</h2>
          <p className="text-lg text-gray-600">Choose your path to success with specialized programs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{spec.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{spec.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{spec.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-orange-600">Career Roles:</p>
                <p className="text-sm text-gray-500">{spec.jobs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PGSpecializationsSection
