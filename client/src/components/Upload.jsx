import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
<div className="flex flex-col items-center gap-8 text-center py-12 md:py-16 ">
  {/* Heading */}
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium pb-10 md:pb-12">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
      See the magic of AI in action!
    </span>
  </h1>

  {/* Upload Button */}
  <div className="relative">
    <input 
      type="file" 
      id="upload1"
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      onChange={(e) => {
        if (e.target.files && e.target.files[0]) {
          // Handle the file upload here
          console.log("File selected:", e.target.files[0]);
        }
      }}
      accept="image/*"
    />
    <label 
      htmlFor="upload1" 
      className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white rounded-full cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
    >
      <img 
        src={assets.upload_btn_icon} 
        alt="Upload icon" 
        className="w-5 h-5"
      />
      <span className="text-white text-sm font-medium">Upload your image</span>
    </label>
  </div>
</div>
  )
}

export default Upload
