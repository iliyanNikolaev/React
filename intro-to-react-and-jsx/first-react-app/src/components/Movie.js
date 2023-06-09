const Movie = (props) => {
    return <article>
        <h3>{props.name}</h3>
        <h4>Year: {props.year}</h4>
        <hr />
    </article>
}

export default Movie;