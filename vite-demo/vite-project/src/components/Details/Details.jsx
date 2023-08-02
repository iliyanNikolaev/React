import './Details.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getById } from "../../services/movie"

export default function Details() {
    const [currentMovie, setCurrentMovie] = useState({});

    const { movieId } = useParams();

    useEffect(() => {
        getById(movieId)
            .then(data => {
                setCurrentMovie(data);
            });
    }, [movieId]);


    return (
        <>
            <h2>{currentMovie.title} details</h2>
            <div className="movieCard">
                <p className="descr">Description: {currentMovie.description}</p>

                <img src={currentMovie.imgURL} alt="poster" className="poster" />
            </div>
        </>
    )
}
