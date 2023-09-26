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
                        <li className='nav-link'><Link to='/'><i class="fas fa-home"></i> Home</Link></li>
                        <li className='nav-link'><Link to='/catalog'><i class="fas fa-list-alt"></i> Catalog</Link></li>
                        <li className='nav-link'><Link to='/login'><i class="fas fa-sign-in-alt"></i> Login</Link></li>
                        <li className='nav-link'><Link to='/register'><i class="fas fa-registered"></i> Register</Link></li>
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
