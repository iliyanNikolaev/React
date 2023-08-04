import CommentItem from './CommentItem'
import './CommentsSection.css'
import { useEffect, useState } from "react"
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/authContext'
import { useForm } from '../../../hooks/useForm'
import { createCommentForMovie, deleteCommentById, getAllCommentsForMovie } from '../../../services/comment'


export default function CommentsSection({
    movieId
}) {

    const [comments, setComments] = useState([]);

    const { auth } = useContext(AuthContext);

    const { formValues, onChange } = useForm({ content: '' });

    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            const createdComment = await createCommentForMovie({
                content: formValues.content,
                username: auth.username,
                movieId
            }, auth.objectId);

            setComments(state => [...state, createdComment]);

            formValues.content = '';

        } catch (err) {
            console.log(err.message);
        }
    }

    const onDeleteHandler = async (commentId, commentContent) => {
        try {
            const choice = confirm('Are you sure you want to delete this comment >>> ' + commentContent);

            if(choice) {
                await deleteCommentById(commentId);

                setComments(state => state.filter(x => x.objectId != commentId));
            } 
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getAllCommentsForMovie(movieId)
            .then(data => setComments(data.results));

    }, [movieId]);


    return (
        <div className="comments-section">
            <h2>Comments: </h2>
            {comments.length >= 1
                ? <ul>
                    {comments.map(x => <CommentItem key={x.objectId} comment={x} onDeleteHandler={onDeleteHandler}/>)}
                </ul>
                : <p>No comments yet for this movie...</p>
            }

            {
                auth?.objectId != undefined
                    ? <form onSubmit={formSubmit}>
                        <label htmlFor='content'>Add a comment:
                            <input
                                type="text"
                                name='content'
                                id='content'
                                value={formValues.content}
                                onChange={onChange}
                            />
                            <input type="submit" value="Add" />
                        </label>
                    </form>
                    : null
            }


        </div>
    )
}
