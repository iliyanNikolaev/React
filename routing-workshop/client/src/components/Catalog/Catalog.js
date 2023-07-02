import React from "react";
import { GameCard } from "./GameCard";
import { GameContext } from "../../contexts/gameContext";

export const Catalog = () => {

    const {games} = React.useContext(GameContext);
    
    return <>
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(x => <GameCard key={x._id} game={x}/>)}

            {games.length === 0 ? <h3 className="no-articles">No articles yet</h3> : null} 
        </section>
        </>
}