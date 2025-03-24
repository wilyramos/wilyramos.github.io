import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'; // 👈 Cambia BrowserRouter por HashRouter
import Principal from './components/principal';
import Layout from './layout/layout';
import Projects from './components/projects/Project';
import About from './components/About';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Principal />} />
					<Route path="*" element={<h1>Not Found</h1>} />
					<Route path="/about" element={<About />} />
					<Route path="/proyectos" element={<Projects />} />
				</Route>
			</Routes>
		</Router>
	);
}
