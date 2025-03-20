import Navbar from './Navbar'
import HeroSection from './HeroSection'

export default function principal() {
  return (
    <div className='bg-gradient-to-b from-slate-950 to-slate-900 text-gray-200 min-h-screen sm:h-screen'>
       <Navbar />
       <HeroSection />
       {/* <FooterSection /> */}
      
    </div>
  )
}
