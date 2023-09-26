import Movie from './Movie';

const MovieList = ({movies, onMovieDelete, onMovieSelected}) => {

    return <ul>
        {movies.map(movie => 
            <Movie key={movie._id} {...movie} onMovieDelete={onMovieDelete} onMovieSelected={onMovieSelected} />
        )}
        </ul> ;
}

export default MovieList;