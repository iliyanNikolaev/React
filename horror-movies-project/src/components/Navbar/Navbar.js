import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </nav>
        </>
    )
}
