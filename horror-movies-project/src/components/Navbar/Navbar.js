import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <>
            <header className="header">
                <img
                    className="logo"
                    src="horror-logo.png"
                    alt="logo"
                />
                <nav className="navigation">
                    <ul className="list">
                        <li className='nav-link'><Link to='/'>Home</Link></li>
                        <li className='nav-link'><Link to='/catalog'>Catalog</Link></li>
                        <li className='nav-link'><Link to='/login'>Login</Link></li>
                        <li className='nav-link'><Link to='/register'>Register</Link></li>
                    </ul>
                </nav>
                <button className="btn search">
                    <i className="fas fa-search" />
                </button>
                <button className="btn profile">
                    <i className="fas fa-user-circle" />
                </button>
            </header>

        </>
    )
}
