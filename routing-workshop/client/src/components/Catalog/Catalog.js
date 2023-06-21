import React from "react";
import { GameCard } from "./GameCard";

export const Catalog = ({
    games
}) => {

    return <>
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {games.map(x => <GameCard key={x._id} game={x}/>)}
            {/* Display paragraph: If there is no games  
            <h3 className="no-articles">No articles yet</h3>
            */}
        </section>
        </>
}