import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Principal from './components/principal'
import Layout from './layout/layout'
import Projects from './components/Project';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Principal />} />
            <Route path='*' element={<h1>Not Found</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/proyectos' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
