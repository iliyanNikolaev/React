import { useContext } from "react"
import { usePagination } from "../../../hooks/usePagination";
import { MovieContext } from '../../../contexts/movieContext'

export default function MoviesData() {
    const { movies } = useContext(MovieContext);

    const {start, end, next, prev} = usePagination(movies, 10);
    
    return (
        <div className="movies">
            <div>
                <h3>Movies</h3>

                {movies.slice(start, end).map(x => <p key={x.objectId}>{x.title}</p>)}
            </div>

            <div className="paginationBtns">
                <button onClick={prev}>&lt; Prev</button>
                <button onClick={next}>Next &gt;</button>
            </div>
        </div>
    )
}
