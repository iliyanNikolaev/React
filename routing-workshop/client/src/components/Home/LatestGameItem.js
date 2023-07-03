import React from 'react';
import { Link } from 'react-router-dom';

export const LatestGameItem = ({
    game
}) => {

    const [stars, setStars] = React.useState([]);   
    
    const onGiveStarClick = () => {
        setStars(state => [...state, <span>☆</span>]);
    }

    
    return (
        <>
        <div className="game">
        <div className="image-wrap">
          <img src={game.imageUrl} alt="poster"/>
        </div>
        <h3>{game.title}</h3>
        <div className="rating">
          {stars}
        </div>
        <div className="data-buttons">
          <Link to={`/details/${game._id}`} className="btn details-btn">
            Details
          </Link>
          <button className="btn details-btn" onClick={onGiveStarClick}>Give a star</button>
        </div>
      </div>
        </>
    );
} 