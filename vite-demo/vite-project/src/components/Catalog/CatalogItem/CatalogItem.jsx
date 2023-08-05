import React from 'react'
import { Link } from 'react-router-dom'

export default function CatalogItem({
    movie
}) {
    return (
        <>
            <li key={movie.objectId}>
                {movie.title}
                
                <Link to={`/details/${movie.objectId}`}> view</Link>
            </li>
        </>
    )
}
