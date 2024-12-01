import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FooterSection from './components/FooterSection'
import { BrowserRouter as Router } from 'react-router-dom'
import Principal from './components/principal'




export default function App() {
  return (
    <>
      <Router>
        <Principal />


      </Router>
    </>
  );
}
