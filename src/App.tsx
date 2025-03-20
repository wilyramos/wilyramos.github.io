import './App.css'
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
