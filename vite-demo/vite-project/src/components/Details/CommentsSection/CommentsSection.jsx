import CommentItem from './CommentItem'
import './CommentsSection.css'

export default function CommentsSection({
    comments
}) {
    return (
        <div className="comments-section">
            <h2>Comments: </h2>
            { comments.length >= 1
            ? <ul>
                {comments.map(x => <CommentItem key={x.objectId} comment={x} />)}
            </ul>
            : <p>No comments for this game...</p> 
            }
            
        </div>
    )
}
