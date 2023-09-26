import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = (props) => {
  return (
    <div className='footer'>
        <p>&copy; React Horror Movies App created by  <Link className='my-github' to='https://github.com/iliyanNikolaev' target='_blank'>iliyanNikolaev <i class="fab fa-github"></i></Link></p>
    </div>
  )
}
