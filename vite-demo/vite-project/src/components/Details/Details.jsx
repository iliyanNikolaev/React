import './Details.css'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getById } from "../../services/movie"
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { MovieContext } from '../../contexts/movieContext'

export default function Details() {
    const [currentMovie, setCurrentMovie] = useState({});

    const { movieId } = useParams();

    const { auth } = useContext(AuthContext);
    const { deleteMovieHandler } = useContext(MovieContext);

    useEffect(() => {
        getById(movieId)
            .then(data => {
                setCurrentMovie(data);
            });
    }, [movieId]);

    const onDelete = () => {
        const choice = confirm(`Are you sure you want to delete ${currentMovie.title}?`);

        if (choice) {
            deleteMovieHandler(movieId);
        }
    }

    return (
        <>
            <h2>{currentMovie.title} details</h2>
            <div className="movieCard">
                <p className="descr">Description: {currentMovie.description}</p>

                <img src={currentMovie.imgURL} alt="poster" className="poster" />

                {auth.username !== undefined && auth.objectId == currentMovie.owner?.objectId
                    ? <div className='ownerBtns'>
                        <Link to={`/edit/${currentMovie.objectId}`} className='editBtn'>Edit movie</Link>
                        <Link onClick={onDelete} to='#' className='deleteBtn'>Delete movie</Link>
                    </div>
                    : null
                }
            </div>
        </>
    )
}

// { "__type": "Pointer", "className": "_User", "objectId": "WUPIIfvKlP" }