import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mi portafolio</h1>
      
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      
    </>
  )
}

export default App
