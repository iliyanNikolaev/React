import React from "react";
import { useParams, Link } from "react-router-dom"
import { getGameById, getCommentsByGameId, postCommentForGame } from "../../services/gameService";
import { CommentsList } from "./CommentsList";
import { AuthContext } from "../../contexts/authContext";

export const Details = ({
  onDelete
}) => {
  const { gameId } = useParams(); // така се взима ид-то на конкретната игра което сме настроили в раутовете в аппа
  
  const [currentGame, setCurrentGame] = React.useState({});

  const [comments, setComments] = React.useState([]);

  const [currentComment, setCurrentComment] = React.useState('');

  const { auth } = React.useContext(AuthContext);

  const onDeleteHandler = async () => {
    try {
      await onDelete(gameId, auth.accessToken);
    } catch (err) {
      console.log('error in Details.js -> onDeleteHandler');
    }
  }

  React.useEffect(() => {
    getGameById(gameId)
      .then(res => setCurrentGame(res));
  }, [gameId]);

  React.useEffect(() => {
    getCommentsByGameId(gameId, auth.accessToken)
      .then(res => setComments(res));
  }, [gameId, auth.accessToken]);

  const onCommentChange = (e) => {
    setCurrentComment(e.target.value);
  }

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      gameId,
      comment: currentComment
    }

    const comment = await postCommentForGame(commentData, auth.accessToken);

    setComments(state => ([...state, comment]));
    setCurrentComment('');
  }

  return <>
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={currentGame.imageUrl} alt="game-poster" />
          <h1>{currentGame.title}</h1>
          <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
          <p className="type">{currentGame.category}</p>
        </div>
        <p className="text">
          {currentGame.summary}
        </p>

        <CommentsList comments={comments} />

        {/* Edit/Delete buttons ( Only for creator of this game )  */}

        {auth._id === currentGame._ownerId
          ? <div className="buttons">
            <Link to={`/edit/${currentGame._id}`} className="button">
              Edit
            </Link>
            <Link className="button" onClick={onDeleteHandler}>
              Delete
            </Link>
          </div>
          : null}

      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}

      { auth._id !== undefined && auth._id !== currentGame._ownerId
        ? <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={onCommentSubmit}>
            <textarea
              name="comment"
              placeholder="Comment......"
              value={currentComment}
              onChange={onCommentChange}
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Add Comment"
            />
          </form>
        </article>
        : null
      }

    </section>
  </>
}