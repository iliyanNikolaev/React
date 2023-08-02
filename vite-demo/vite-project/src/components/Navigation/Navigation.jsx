import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <nav>
                <Link to='/catalog'>Catalog</Link>
                <Link to='/create'>Create</Link>
            </nav>
        </>
    )
}
