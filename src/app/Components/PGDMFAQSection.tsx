const PGDMFAQSection = () => {
  const faqs = [
    {
      question: "What is PGDM and how is it different from MBA?",
      answer: "PGDM (Post Graduate Diploma in Management) is a diploma program focused on practical management skills, while MBA is a degree program. PGDM is often more industry-oriented and flexible."
    },
    {
      question: "What are the eligibility criteria for PGDM programs?",
      answer: "Most PGDM programs require a bachelor's degree with minimum 50% marks, and some may require work experience or entrance exam scores."
    },
    {
      question: "What career opportunities are available after PGDM?",
      answer: "PGDM graduates can work in various roles like Business Analyst, Marketing Manager, HR Manager, Operations Manager, and can start their own ventures."
    },
    {
      question: "What is the average salary after PGDM?",
      answer: "PGDM graduates typically earn between 6-15 LPA depending on the institute, specialization, and work experience."
    },
    {
      question: "Are PGDM programs recognized by companies?",
      answer: "Yes, PGDM from AICTE-approved institutes are widely recognized by companies and equivalent to MBA for most job purposes."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about PGDM programs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PGDMFAQSection
