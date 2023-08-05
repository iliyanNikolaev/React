import './Catalog.css'
import { useContext } from 'react'
import { MovieContext } from '../../contexts/movieContext'

import CatalogItem from './CatalogItem/CatalogItem'

export default function Catalog() {
    
    const { movies } = useContext(MovieContext);

    return (
        <>
            <h2>Movies</h2>

            <ul>
                {movies.map(x => <CatalogItem key={x.objectId} movie={x}/>)}
            </ul>
        </>
    )
}
