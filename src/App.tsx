import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'




export default function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="">
        <HeroSection />
        </div>
        <FooterSection />
      </div>
    </>
  );
}
