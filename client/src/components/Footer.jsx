import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-400 to-gray-600 py-8 px-6 lg:px-0">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      
      {/* Logo with subtle shine effect */}
      <div className="group">
        <img 
          src={assets.logo} 
          alt="Technooq" 
          className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 filter drop-shadow-lg"
        />
      </div>

      {/* Copyright text with animated underline */}
      <div className="relative">
        <p className="text-gray-300 text-sm font-light tracking-wide">
          Copyright © {new Date().getFullYear()} <span className="font-medium text-white">Technooq.dev</span> | All rights reserved
        </p>
        <div className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Social icons with floating effect */}
      <div className="flex space-x-5">
        <a href="https://www.instagram.com/a_k_kashyap__/" className="social-icon">
          <img 
            src={assets.facebook_icon} 
            alt="Facebook" 
            className="h-6 w-6 transition-all duration-300 hover:-translate-y-1"
          />
          <span className="icon-tooltip">Instagram</span>
        </a>
        <a href="https://x.com/akkashyap34525" className="social-icon">
          <img 
            src={assets.twitter_icon} 
            alt="Twitter" 
            className="h-6 w-6 transition-all duration-300 hover:-translate-y-1"
          />
          <span className="icon-tooltip">Twitter</span>
        </a>
        <a href="https://mail.google.com/mail/u/1/#inbox" className="social-icon">
          <img 
            src={assets.google_plus_icon} 
            alt="Google+" 
            className="h-6 w-6 transition-all duration-300 hover:-translate-y-1"
          />
          <span className="icon-tooltip">Gmail</span>
        </a>
      </div>
    </div>

    {/* Subtle divider */}
    {/* <div className="mt-10 border-t border-gray-700 opacity-30"></div> */}

    {/* Optional secondary links */}
    {/* <div className="flex flex-wrap justify-center gap-6 mt-8">
      <a href="#" className="text-gray-400 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors duration-200">Privacy Policy</a>
      <a href="#" className="text-gray-400 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors duration-200">Terms of Service</a>
      <a href="#" className="text-gray-400 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors duration-200">Contact Us</a>
    </div> */}
  </div>
</footer>
  )
}

export default Footer
