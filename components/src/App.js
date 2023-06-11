import './App.css';
import React from 'react';
import { movies as moviesData} from './movies';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = React.useState(moviesData);

    const onMovieDelete = (id) => {
        setMovies(oldMovies => oldMovies.filter(x => x._id !== id));
    }

    const onMovieSelected = (id) => {
        setMovies(oldMovies => oldMovies.map(movie => movie._id === id ? {...movie, selected: true} : {...movie, selected: false}));
    }

    return (
        <div className="App">
            <h1>ReactJS-Components-Demo</h1>
            <h2>Movie collection</h2>
            <hr />

            <MovieList movies={movies} onMovieDelete={onMovieDelete} onMovieSelected={onMovieSelected}/>
        </div>
    );
}

export default App;
