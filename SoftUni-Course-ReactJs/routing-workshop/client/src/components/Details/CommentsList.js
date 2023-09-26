import { CommentItem } from "./CommentItem"

export const CommentsList = ({
    comments
}) => {
    return <>
        <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {comments.map(x => <CommentItem key={x._id} comment={x.comment}/>)}   
        </ul>
        {/* Display paragraph: If there are no games in the database */}
        {comments.length === 0 ? <p className="no-comment">No comments.</p> : null}
      </div>
    </>
}