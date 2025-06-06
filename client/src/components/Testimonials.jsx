import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div>
        {/* Title */}
        <div className='mx-8 lg:mx-32 py-8 xl:py-16'>  {/* Reduced padding and margins */}
  <h1 className="text-center mb-1">  {/* Reduced bottom margin */}
    <div className="text-xl md:text-2xl lg:text-[2rem] font-bold text-gray-900">  {/* Slightly smaller text */}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
        Customer Testimonials
      </span>
    </div>
  </h1>
</div>

{/* Testimonials Section - Compact version */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-32 py-8'>  {/* Reduced gaps and padding */}
  {testimonialsData.map((items, index) => (
    <div 
      key={index} 
      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"  
    >
      <p className="text-3xl font-bold text-gray-700 mb-1">"</p>  {/* Smaller quote mark */}
      <p className="text-gray-600 mb-4 text-sm md:text-base italic">{items.text}</p>  {/* Smaller text with responsive sizing */}
      <div className="flex items-center gap-3">  {/* Reduced gap */}
        <img 
          src={items.image} 
          alt={items.name} 
          className="w-10 h-10 rounded-full object-cover"  
        />
        <div>
          <p className="font-medium text-gray-800 text-sm md:text-base">{items.author}</p>  {/* Slightly smaller text */}
          <p className="text-xs text-gray-500">{items.jobTitle}</p>  {/* Smaller text */}
        </div>
      </div>
    </div>
  ))}
</div>
        
    
    </div>
  )
}

export default Testimonials
