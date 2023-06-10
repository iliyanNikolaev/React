const Movie = ({title, description, img}) => {
    return <article>
        <h3>Title: {title}</h3>
        <main>
        <img src={img} alt="poster" width={300}/>
        <p>Description: {description}</p>
        </main>
    </article>
};

export default Movie;