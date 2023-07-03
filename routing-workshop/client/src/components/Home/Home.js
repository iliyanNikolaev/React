import React from 'react';
import { getLatestGames } from '../../services/gameService';
import { LatestGameItem } from './LatestGameItem';

export const Home = (props) => {
  
  const [latestGames, setLatestGames] = React.useState([]);

  React.useEffect(() => {
    getLatestGames()
      .then(data => setLatestGames(data));
  }, [])

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