import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


export default function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex justify-between items-center">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
