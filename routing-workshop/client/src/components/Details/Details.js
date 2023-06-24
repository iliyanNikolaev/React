import React from "react";
import { useParams } from "react-router-dom"
import { getGameById, getCommentsByGameId, postCommentForGame } from "../../services/data";
import { CommentsList } from "./CommentsList";

export const Details = (props) => {
  const { gameId } = useParams(); // така се взима ид-то на конкретната игра което сме настроили в раутовете в аппа
  const [currentGame, setCurrentGame] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [currentComment, setCurrentComment] = React.useState('');



  React.useEffect(() => {
    getGameById(gameId)
      .then(res => setCurrentGame(res));
  }, [gameId]);

  React.useEffect(() => {
    getCommentsByGameId(gameId)
      .then(res => setComments(res));
  }, [gameId]);

  const onCommentChange = (e) => {
    setCurrentComment(e.target.value);
  }

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      gameId,
      comment: currentComment
    }

    const comment = await postCommentForGame(commentData);
    
    setComments(state => ([...state, comment]));
    setCurrentComment('');
  }

   return <> 
   <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" src={currentGame.imageUrl} alt="game-poster"/>
        <h1>{currentGame.title}</h1>
        <span className="levels">MaxLevel: {currentGame.maxLevel}</span>
        <p className="type">{currentGame.category}</p>
      </div>
      <p className="text">
        {currentGame.summary}
      </p>

      <CommentsList comments={comments} />
      
      {/* Edit/Delete buttons ( Only for creator of this game )  */}
      <div className="buttons">
        <a href="/" className="button">
          Edit
        </a>
        <a href="/" className="button">
          Delete
        </a>
      </div>
    </div>
    {/* Bonus */}
    {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
    <article className="create-comment">
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
  </section>
  </>
}