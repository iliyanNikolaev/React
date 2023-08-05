
export default function MoviesData({
    movies
}) {
    return (
        <div className="movies">
            <h3>Movies</h3>
            {movies.map(x => <p key={x.objectId}>{x.title}</p>)}
        </div>
    )
}
