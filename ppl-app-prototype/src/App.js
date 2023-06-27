import './App.css';

import {Routes, Route} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Requirements } from './components/Requirements/Requirements';
import { CourseStructure } from './components/CourseStructure/CourseStructure';
import { Exams } from './components/Exams/Exams';
import { About } from './components/About/About';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path='/requirements' element={<Requirements />}></Route>
				<Route path='/courseStructure' element={<CourseStructure />}></Route>
				<Route path='/exams' element={<Exams />}></Route>
				<Route path='/about' element={<About />}></Route>
			</Routes>
		</div>
	);
}

export default App;
