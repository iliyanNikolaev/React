import { useEffect } from 'react'
import { useDataContext } from '../contexts/DataContext';

export const GetMovies = () => {
    const { movies, getMovies } = useDataContext();

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h2>Movies List</h2>
            {!movies && <p>Loading...</p>}

            {movies?.length == 0 && <p>No movies yet...</p>}

            {movies?.map(x => <div key={x.id}>
                <h3>{x.title}</h3>
                <p>{x.year}</p>
                <p>{x.resume}</p>
            </div>)}
        </div>
    )
}
