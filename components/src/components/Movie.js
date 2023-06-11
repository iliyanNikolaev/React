import React from "react";

const Movie = ({_id, title, description, img, onMovieDelete, onMovieSelected, selected}) => {
    React.useEffect(() => {
        console.log(`Movie ${title} selected!`);
    }, [selected]);

    return <article>
        <h3>Title: {title}</h3>
        <main>
        <img src={img} alt="poster" width={200}/>
        {selected ? <p><b>Description: {description}</b></p> : <p>Description: {description}</p>}
        </main>
        <footer>
            <button onClick={() => onMovieDelete(_id)}>Delete</button>
            <button onClick={() => onMovieSelected(_id)}>Select</button>
        </footer>
        <hr />
    </article>
};

export default Movie;