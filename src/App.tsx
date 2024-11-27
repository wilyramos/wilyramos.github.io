import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import { BrowserRouter as Router } from 'react-router-dom'




export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="">
        <HeroSection />
        </div>
        <FooterSection />

      </Router>
    </>
  );
}
