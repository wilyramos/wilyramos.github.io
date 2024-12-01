import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FooterSection from './FooterSection'

export default function principal() {
  return (
    <div className='bg-gradient-to-r from-blue-950 to-gray-950 min-h-screen p-6 text-gray-200'>
       <Navbar />
       <HeroSection />
       <FooterSection />
      
    </div>
  )
}
