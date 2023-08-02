import React from 'react'

export default function Register() {
    return (
        <>
        <h2>Register page</h2>

        <form>
            <label htmlFor="username">Username: 
                <input type="text" name="username" id="username" />
            </label>
            <label htmlFor="password">Password: 
                <input type="password" name="password" id="password"/>
            </label>

            <button>Register</button>
        </form>
        </>
    )
}
