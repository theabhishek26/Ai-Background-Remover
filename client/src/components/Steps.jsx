import React from 'react'
import { assets } from '../assets/assets'
// import '../../public'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className="text-center mb-16">
  <div className="text-2xl md:text-4xl lg:text-[3.5rem] font-bold text-gray-900">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
      Instant Background Removal
    </span>
  </div>
  <div className="mt-3">
    <span className="text-2xl md:text-3xl font-medium text-gray-700">
      Powered by AI Technology
    </span>
  </div>
  <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full"></div>
</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8'>
        {/* Step 1 */}
        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
          <div className='bg-blue-50 p-4 rounded-full mb-4'>
            <img src={assets.upload_icon} alt="Upload icon" className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>Upload Image</h3>
          <p className='text-gray-600'>Drag & drop your image or browse files to upload</p>
          <div className='text-blue-500 mt-4 font-medium'>Step 1</div>
        </div>

        {/* Step 2 */}
        <div className='bg-white p-6   rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
          <div className='bg-purple-50 p-4 rounded-full mb-4'>
            <img src={assets.remove_bg_icon} alt="Process icon" className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>AI Processing</h3>
          <p className='text-gray-600'>Our AI automatically removes the background in seconds</p>
          <div className='text-purple-500 mt-4 font-medium'>Step 2</div>
        </div>

        {/* Step 3 */}
        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
          <div className='bg-green-50 p-4 rounded-full mb-4'>
            <img src={"./edit_icon.jpg"} alt="Preview icon" className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>Preview & Edit</h3>
          <p className='text-gray-600'>Review the result and make adjustments if needed</p>
          <div className='text-green-500 mt-4 font-medium'>Step 3</div>
        </div>

        {/* Step 4 */}
        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'>
          <div className='bg-orange-50 p-4 rounded-full mb-4'>
            <img src={assets.download_icon} alt="Download icon" className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>Download</h3>
          <p className='text-gray-600'>Get your image with transparent background instantly</p>
          <div className='text-orange-500 mt-4 font-medium'>Step 4</div>
        </div>
      </div>

      {/* CTA Button */}
      <div className='flex justify-center mt-16'>
        <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
          Try It Now - It's Free
        </button>
      </div>
    </div>
  )
}

export default Steps