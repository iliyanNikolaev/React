import './App.css';
import Movie from './components/Movie';
import Timer from './components/Timer';

function App() {
    return (
        <div className="App">
        <Timer start={0} />
        <h1>Movie List</h1>
        <Movie name="Pope's exsrocist" year="2023" />
        <Movie name="Evil Dead Rise" year="2023" />
        <Movie name="Insidious" year="2012" />
        </div>
    );
}

export default App;
