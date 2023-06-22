import React from "react";
import { GameCard } from "./GameCard";

export const Catalog = ({
    games
}) => {

    return <>
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(x => <GameCard key={x._id} game={x}/>)}

            {games.length === 0 ? <h3 className="no-articles">No articles yet</h3> : null} 
        </section>
        </>
}