import './ClearDB.css'

import { AuthContext } from '../../contexts/authContext'
import { useContext } from "react"

import { Navigate } from 'react-router-dom'

import MoviesData from './MoviesData/MoviesData'
import CommentsData from './CommentsData/CommentsData'
import UsersData from './UsersData/UsersData'

export default function ClearDB() {

    const { auth } = useContext(AuthContext);

    if (auth.username == undefined || auth?.objectId != 'WUPIIfvKlP') {
        return <Navigate to="/404" />
    }

    return (
        <div className='wrapper'>
            <h2>Clear Database</h2>

            <div className="section">
                <MoviesData />

                <CommentsData />

                <UsersData />
            </div>

        </div>
    )
}
