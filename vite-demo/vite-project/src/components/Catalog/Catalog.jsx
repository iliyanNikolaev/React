import React from 'react'
import CatalogItem from './CatalogItem'

export default function Catalog({
    movies
}) {
    return (
        <>
            <h2>Movies</h2>

            <ul>
                {movies.map(x => <CatalogItem key={x.objectId} movie={x}/>)}
            </ul>
        </>
    )
}

// { "__type": "Pointer", "className": "_User", "objectId": "WUPIIfvKlP" }