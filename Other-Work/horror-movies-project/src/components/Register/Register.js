import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

export const Register = (props) => {
  return (
    <div className="register-page">
            <div className='form-wrapper'>
                <form>
                    <h1 className='form-title'>Register</h1>

                    <div className="input-box">
                        <input type="text" placeholder='username' required />
                        <i class="fas fa-user"></i>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='password' required />
                        <i class="fas fa-lock"></i>
                    </div>
        
                    <div className="input-box">
                        <input type="password" placeholder='repeat password' required />
                        <i class="fas fa-redo-alt"></i>
                    </div>

                    <button type='submit' className='btn'>
                        Register
                    </button>

                    <div className="redirect-link">
                        <p>Already have an account? <Link to='/login'>Login here!</Link></p>
                    </div>
                </form>
            </div>
        </div>
  )
}
