import Movie from './Movie';

const MovieList = ({movies}) => {

    return <ul>
        {movies.map(x => <li><Movie {...x}/></li>)}
        </ul> ;
}

export default MovieList;