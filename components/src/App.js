import './App.css';
import movies from './movies';
import MovieList from './components/MovieList';

function App() {
    return (
        <div className="App">
            <h1>ReactJS-Components-Demo</h1>
            <h2>Movie collection</h2>

            <MovieList movies={movies} />
        </div>
    );
}

export default App;
