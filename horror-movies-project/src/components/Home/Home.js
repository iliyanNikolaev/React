import React from 'react'
import './Home.css'

export const Home = (props) => {
    return (
        <div className='home-page'>
            <img className='ghost-img' src="ghost-logo.png" alt="ghost" />
            <p className='slogan'>ATTENTION, this website contains horror movies that you should watch!!!</p>
        </div>
    )
}
