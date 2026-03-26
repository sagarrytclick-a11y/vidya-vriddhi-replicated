const PGDMAdmissionSection = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Ensure you have a bachelor's degree with minimum 50% marks from a recognized university"
    },
    {
      step: "2", 
      title: "Apply Online",
      description: "Fill out the application form with your personal and academic details"
    },
    {
      step: "3",
      title: "Entrance Exam",
      description: "Appear for management entrance exams like CAT, XAT, MAT, or CMAT"
    },
    {
      step: "4",
      title: "GD & PI",
      description: "Clear Group Discussion and Personal Interview rounds"
    },
    {
      step: "5",
      title: "Final Selection",
      description: "Receive admission offer based on overall performance"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
          <p className="text-lg text-gray-600">Your path to PGDM admission made simple</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {admissionSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Documents Required</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">10th and 12th Mark Sheets</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">Bachelor's Degree Certificate</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">Entrance Exam Score Card</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">ID Proof (Aadhar/Pan)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">Passport Size Photographs</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-semibold">✓</span>
              </div>
              <span className="text-gray-700">Work Experience Certificate (if applicable)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PGDMAdmissionSection
