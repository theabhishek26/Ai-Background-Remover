import React from 'react'

const BuyCredits = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2",
      credits: 100,
      features: [
        "50 background removal credits",
        "Basic support",
        "Standard processing speed",
        "PNG & JPG formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5",
      credits: 500,
      features: [
        "150 background removal credits",
        "Priority support",
        "Faster processing",
        "All image formats",
        "Bulk processing (up to 10 images)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$10",
      credits: 2000,
      features: [
        "400 background removal credits",
        "24/7 premium support",
        "Instant processing",
        "All image formats",
        "Unlimited bulk processing",
        "API access"
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: "How do credits work?",
      answer: "Each credit allows you to remove the background from one image. Credits never expire."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can change your plan at any time. Unused credits will carry over."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a free trial with 5 credits so you can test our service before purchasing."
    }
  ]

  return (
    <div className='min-h-[75vh] text-center mb-10 pt-14 px-4'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Plan</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Get credits for background removal. Unused credits never expire.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col rounded-xl shadow-md overflow-hidden border transition-all duration-300 ease-in-out h-full
                ${plan.popular 
                  ? 'border-2 border-blue-500 transform md:-translate-y-3 hover:shadow-xl hover:border-blue-600' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    / {plan.credits} credits
                  </span>
                </p>
                
                <ul className="mb-8 space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center group">
                      <svg className="w-5 h-5 text-green-500 mr-2 group-hover:text-blue-500 transition-colors duration-300" 
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ease-in-out
                    ${plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md' 
                      : 'bg-gray-100 text-gray-800 hover:shadow-sm hover:bg-blue-50 hover:text-blue-600 hover:border hover:border-blue-200'}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto hover:shadow-sm transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="hover:bg-gray-100 p-3 rounded-lg transition-colors duration-200">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyCredits