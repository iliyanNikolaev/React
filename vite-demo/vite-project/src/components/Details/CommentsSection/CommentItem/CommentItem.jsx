import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";
import { editCommentById } from "../../../../services/comment";
import EditCommentForm from "./EditCommentForm/EditCommentForm";
import LoadingSpinner from "../../../LoadingSpinner/LoadingSpinner";

export default function CommentItem({
  comment,
  onDeleteHandler
}) {

  const [currComment, setCurrComment] = useState(comment);

  const onChange = (e) => {
    setCurrComment(state => ({ ...state, content: e.target.value}))
  }
  const [isLoading, setIsLoading] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  const { auth } = useContext(AuthContext);


  const editClicked = (e) => {
    setOnEdit(true);
  }

  const onEditHandler = async () => {
    setIsLoading(true);
    try {
      const editedComment = await editCommentById(currComment.objectId, {
        content: currComment.content,
        username: currComment.username,
        movieId: currComment.movieId,
        owner: currComment.owner
      });

      setCurrComment(editedComment);
      setIsLoading(false);    
      setOnEdit(false);
  
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <li>

      <strong>{comment.username}:</strong> {onEdit ? null : `${currComment.content}`}

      { currComment.owner.objectId == auth?.objectId
        ? <>
          {onEdit
            ? <>{isLoading ? <LoadingSpinner/> : <EditCommentForm currComment={currComment} onChange={onChange} onEditHandler={onEditHandler}/>}</>
            : <>
              <Link to="#" onClick={editClicked}>Edit</Link>
              <Link to="#" onClick={() => onDeleteHandler(currComment.objectId, currComment.content)}>Delete</Link>
            </>
            }
        </>
        : null
      }
    </li>
  )
}
