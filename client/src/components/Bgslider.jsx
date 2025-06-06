import React from 'react'
import { assets } from '../assets/assets';

const Bgslider = () => {
    const [sliderPosition, setSliderPosition] = React.useState(50);

    const handleSliderChange = (E) => {
    const newPosition = E.target.value;
        setSliderPosition(newPosition);
        document.documentElement.style.setProperty('--slider-position', `${newPosition}%`);
    }

  return (
    <div>
        <h1 className="text-center my-12 md:my-16">
            <span className="inline-block text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 leading-snug">
                Studio-Quality Background Removal
            </span>
            <div className="mt-4 md:mt-6">
                <span className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                Pixel-Perfect Accuracy • Studio-Quality Results
                </span>
            </div>
            <div className="mt-6 flex justify-center">
                <div className="h-1 w-20 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"></div>
            </div>
            </h1>

            {/* Image with background - corrected version */}
            <div className="relative pb-10 text-center w-full max-w-2xl mx-auto">
  {/* Container for overlapping images - added min-h for mobile */}
        <div 
            className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-xl" 
            style={{ 
            height: "400px",
            minHeight: "400px" // Prevents shrinking on mobile
            }}
        >
            {/* Original image with background */}
            <img 
            src={assets.image_w_bg} 
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                transition: 'clip-path 0.3s ease',
                // Ensures image maintains size
                minWidth: "100%",
                minHeight: "100%"
            }}  
            alt="Original image with background" 
            />
            
            {/* Background-removed image */}
            <img 
            src={assets.image_wo_bg} 
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
                clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                transition: 'clip-path 0.3s ease',
                // Ensures image maintains size
                minWidth: "100%",
                minHeight: "100%"
            }}  
            alt="Background-removed image" 
            />
        </div>

        {/* Slider control - added padding for mobile */}
        <div className="px-4 mt-4">
            <input 
            type="range" 
            min={0}
            max={100}  
            value={sliderPosition} 
            onChange={handleSliderChange} 
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
                background: `linear-gradient(to right, #4f46e5 ${sliderPosition}%, #d1d5db ${sliderPosition}%)`
            }}    
            />
        </div>
        </div>
    </div>
  )
}

export default Bgslider
