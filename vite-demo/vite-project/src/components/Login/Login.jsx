import React from 'react'

export default function Login() {
    return (
        <>
        <h2>Login page</h2>

        <form>
            <label htmlFor="username">Username: 
                <input type="text" name="username" id="username" />
            </label>
            <label htmlFor="password">Password: 
                <input type="password" name="password" id="password"/>
            </label>

            <button>Login</button>
        </form>
        </>
    )
}
