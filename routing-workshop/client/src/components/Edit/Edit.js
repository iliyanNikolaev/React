import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getGameById } from "../../services/gameService";
import { AuthContext } from "../../contexts/authContext";
import { GameContext } from "../../contexts/gameContext";

export const Edit = () => {

  const { auth } = React.useContext(AuthContext);

  const { onEdit } = React.useContext(GameContext);

  const { gameId } = useParams();

  let gameOwnerId = ''

  const [formValues, setFormValues] = React.useState({
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
  });

  const onChange = (e) => {
    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
  }


  React.useEffect(() => {
    getGameById(gameId)
      .then(result => {
        setFormValues(state => ({
          title: result.title,
          category: result.category,
          maxLevel: result.maxLevel,
          imageUrl: result.imageUrl,
          summary: result.summary
        }));

        gameOwnerId = result._ownerId;
      });


  }, [gameId]);

  const formSubmit = (e) => {
    e.preventDefault();

    onEdit(gameId, formValues)
  }

  if(auth._id !== gameOwnerId) {
    return <Navigate to={`/details/${gameId}`} />
  }

  return (
    <>
      <section id="edit-page" className="auth">
        <form id="edit" onSubmit={formSubmit}>
          <div className="container">
            <h1>Edit Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formValues.title}
              onChange={onChange}
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formValues.category}
              onChange={onChange}
            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              value={formValues.maxLevel}
              onChange={onChange}
            />
            <label htmlFor="game-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={onChange}
            />
            <label htmlFor="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              value={formValues.summary}
              onChange={onChange}
            />
            <input className="btn submit" type="submit" defaultValue="Edit Game" />
          </div>
        </form>
      </section>
    </>
  );
}