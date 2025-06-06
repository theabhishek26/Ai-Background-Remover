import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 lg:mx-20 xl:mx-44 mt-8 md:mt-14 min-h-[75vh]'>
      <div className="p-4 bg-white rounded-lg shadow-md">
        {/* Image comparison container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Original image side */}
          <div className="flex-1 flex flex-col">
            <div className="mb-2 flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">Original</p>
              <span className="text-sm text-gray-500">With background</span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex-1 min-h-[300px]">
              <img 
                src={assets.image_w_bg} 
                alt="Original image with background" 
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Background removed side */}
          <div className="flex-1 flex flex-col ">
            <div className="mb-2 flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">Processed</p>
              <span className="text-sm text-gray-500">Background removed</span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex-1 min-h-[300px] relative">
              {/* Checkerboard pattern */}
              <div 
                className="absolute inset-0 bg-repeat bg-[length:20px_20px]"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, #e5e5e5 25%, transparent 25%),
                    linear-gradient(-45deg, #e5e5e5 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #e5e5e5 75%),
                    linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)
                  `,
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }}
              ></div>
              
              {/* Processed image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* {assets.image_wo_bg ? (
                  <img 
                    src={assets.image_wo_bg} 
                    alt="Image with background removed" 
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="text-center p-4 bg-white/80 rounded-lg border border-gray-200">
                    <p className="text-gray-500">Processed image will appear here</p>
                  </div>
                )} */}

                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin  '>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons information */}

        <div className='mt-6 flex flex-wrap md:flex-row justify-center items-center gap-4 sm:justify-end'>
          <button className='bg-gray-700 text-white px-8 py-2 rounded-lg hover:bg-violet-700 transition-colors duration-300 '>
            Try another image
          </button >
          < a className='bg-violet-600 text-white px-8 py-2 rounded-lg hover:bg-violet-700 transition-colors duration-300 ' href=''  >Downlaod Image</a>
        </div>
      </div>
    </div>
  )
}

export default Result