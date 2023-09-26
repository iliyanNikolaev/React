import React from 'react';
import { LatestGameItem } from './LatestGameItem';
import { GameContext } from '../../contexts/gameContext';

export const Home = (props) => {
  
  const [latestGames, setLatestGames] = React.useState([]);

  const { games } = React.useContext(GameContext);

  React.useEffect(() => {
    setLatestGames(state => games.slice(-3).reverse());
  }, [games])

  return <section id="welcome-world">
    <div className="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />
    <div id="home-page">
      <h1>Latest Games</h1>

      {latestGames.map(x => <LatestGameItem key={x._id} game={x} />)}
      
    {latestGames.length === 0 ? <p className="no-articles">No games yet</p> : null}

    </div>
  </section>
}