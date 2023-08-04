import './ClearDB.css'
import { useState, useEffect, useContext } from "react"
import { MovieContext } from "../../contexts/movieContext"
import { AuthContext } from '../../contexts/authContext'
import { getAllComments, deleteCommentById } from "../../services/comment"
import { Navigate } from 'react-router-dom'

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

    const onClearHandler = () => {
        const unnecessaryComments = [];

        comments.forEach(comment => {

            const isExist = movies.some(movie => movie.objectId == comment.movieId);

            if(!isExist) {
                unnecessaryComments.push(comment);
            }
        }); 

        unnecessaryComments.forEach( async (comment) => {
            await deleteCommentById(comment.objectId);
            console.log(`${comment.content} >>> deleted`);
            setComments(state => state.filter(x => x.objectId != comment.objectId));
        });
    }

    return (
        <div className='wrapper'>
            <h2>Clear Database</h2>

            <div className="section">
                <div className="movies">
                    <h3>Movies</h3>
                    {movies.map(x => <p key={x.objectId}>{x.title}</p>)}
                </div>

                <div className="comments">
                    <h3>Comments</h3>
                    {comments.map(x => <p key={x.objectId}>{x.username}: {x.content}</p>)}
                </div>
            </div>

            <button onClick={onClearHandler}>Delete unnecessary comments</button>
        </div>

    )
}
