import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { editCommentById } from "../../../services/comment";

export default function CommentItem({
  comment,
  onDeleteHandler
}) {

  const [currComment, setCurrComment] = useState(comment);

  const onChange = (e) => {
    setCurrComment(state => ({ ...state, content: e.target.value}))
  }
  const [onEdit, setOnEdit] = useState(false);

  const { auth } = useContext(AuthContext);


  const editClicked = (e) => {
    setOnEdit(true);
  }

  const onEditHandler = async () => {
    try {
      const editedComment = await editCommentById(currComment.objectId, {
        content: currComment.content,
        username: currComment.username,
        movieId: currComment.movieId,
        owner: currComment.owner
      });

      setCurrComment(editedComment);
      
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
            ? <>
              <input 
                type="text"
                name="content" 
                value={currComment.content}
                onChange={onChange}
                />
              <input
                type="submit"
                value="Save Changes"
                onClick={onEditHandler}
              />
            </>
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
