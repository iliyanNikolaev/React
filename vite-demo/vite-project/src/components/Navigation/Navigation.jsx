import './Navigation.css'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

export default function Navigation() {

    const { auth } = useContext(AuthContext);

    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/catalog'>Catalog</Link>
                {auth.username
                    ? <Link to='/create'>Create</Link>
                    : <div className='guest'>
                        <Link to='/login'>Login</Link> <Link to='/register'>Register</Link>
                    </div>
                }

                <p className='userGreeting'>Welcome, {auth.username ? `${auth.username}` : 'guest'}!</p>
            </nav>
        </>
    )
}
