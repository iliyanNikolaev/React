import CommentItem from './CommentItem/CommentItem'
import AddCommentForm from './AddCommentForm/AddCommentForm'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import './CommentsSection.css'
import { useEffect, useState } from "react"
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/authContext'
import { useForm } from '../../../hooks/useForm'
import { createCommentForMovie, deleteCommentById, getAllCommentsForMovie } from '../../../services/comment'


export default function CommentsSection({
    movieId
}) {
    const [isLoading, setIsLoading] = useState(false);

    const [comments, setComments] = useState([]);

    const { auth } = useContext(AuthContext);

    const { formValues, onChange } = useForm({ content: '' });

    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const createdComment = await createCommentForMovie({
                content: formValues.content,
                username: auth.username,
                movieId
            }, auth.objectId);

            setComments(state => [...state, createdComment]);

            formValues.content = '';
            setIsLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    }

    const onDeleteHandler = async (commentId, commentContent) => {
        try {
            const choice = confirm('Are you sure you want to delete this comment >>> ' + commentContent);

            if (choice) {
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
            <>
                {comments.length >= 1
                    ? <ul>
                        {comments.map(x => <CommentItem key={x.objectId} comment={x} onDeleteHandler={onDeleteHandler} />)}
                    </ul>
                    : <p>No comments yet for this movie...</p>
                }

                {
                    auth?.objectId != undefined
                        ? <>{isLoading ? <LoadingSpinner /> : <AddCommentForm formSubmit={formSubmit} formValues={formValues} onChange={onChange} />}</>
                        : null
                }
            </>
        </div>
    )
}
