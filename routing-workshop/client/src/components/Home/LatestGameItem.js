import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

export const LatestGameItem = ({
    game
}) => {

    const [stars, setStars] = React.useState([]);   
    
    const onGiveStarClick = useCallback(() => {
        if(stars.length < 5){
            setStars(state => [...state, <span key={Date.now()}>☆</span>]);
        }
    }, [stars.length]);

    // useCallback е hook, който се използва за оптимизация на работата на приложението, в конкретния случай функцията onGiveStarClick 
    // се инициализира само при първия рендер на компонента и след това вече useCallback пази старата референция и не създава нова, при
    // всеки пре-рендер на компонента. Като първи аргумент на useCallback се подава конкретната функция, а като втори масив с dependency-та
    // ако подадем дадено депенденси при промяна на неговата стойност useCallback ще се изпълни пак и ще създаде нова референция,
    // депенденси масива е със същата идея като примерно при useEffect 
    
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