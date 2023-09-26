import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export const Login = (props) => {
    return (
        <div className="login-page">
            <div className='form-wrapper'>
                <form>
                    <h1 className='form-title'>Login</h1>

                    <div className="input-box">
                        <input type="text" placeholder='username' required />
                        <i class="fas fa-user"></i>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='password' required />
                        <i class="fas fa-lock"></i>
                    </div>

                    <button type='submit' className='btn'>
                        Login
                    </button>

                    <div className="redirect-link">
                        <p>Don't have an account? <Link to='/register'>Register here!</Link></p>
                    </div>
                </form>
            </div>
        </div>

    )
}
