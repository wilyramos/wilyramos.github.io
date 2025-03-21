import './App.css'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Principal from './components/principal'
import Layout from './layout/layout'
import Projects from './components/Project';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Principal />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/proyectos' element={<Projects />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}
