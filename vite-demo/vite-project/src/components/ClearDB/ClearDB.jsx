import './ClearDB.css'
import { useState, useEffect, useContext } from "react"
import { MovieContext } from "../../contexts/movieContext"
import { AuthContext } from '../../contexts/authContext'
import { getAllComments } from "../../services/comment"
import { Navigate } from 'react-router-dom'

import MoviesData from './MoviesData/MoviesData'
import CommentsData from './CommentsData/CommentsData'

export default function ClearDB() {

    const [comments, setComments] = useState([]);

    const { movies } = useContext(MovieContext);

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        getAllComments()
            .then(data => {
                setComments(data.results);
            });
    }, []);


    if(auth.username == undefined || auth?.objectId != 'WUPIIfvKlP') {
        return <Navigate to="/404" />
    }


    return (
        <div className='wrapper'>
            <h2>Clear Database</h2>

            <div className="section">
                <MoviesData movies={movies} />

                <CommentsData comments={comments} />
            </div>

        </div>

    )
}
