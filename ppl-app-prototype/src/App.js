import './App.css';

import {Routes, Route} from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Requirements } from './components/Requirements/Requirements';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path='/requirements' element={<Requirements />}></Route>
			</Routes>
		</div>
	);
}

export default App;
