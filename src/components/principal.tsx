import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FooterSection from './FooterSection'

export default function principal() {
  return (
    <div className='bg-gradient-to-r from-white to-gray-100 min-h-screen p-6 text-gray-600'>
       <Navbar />
       <HeroSection />
       <FooterSection />
      
    </div>
  )
}
