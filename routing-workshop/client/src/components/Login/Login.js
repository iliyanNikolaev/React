import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/authContext';

export const Login = (props) => {
    const { formValues, onChange } = useForm({ email: '', password: '' });

    const {onLoginSubmit} = React.useContext(AuthContext);

    const formSubmit = async (e) => {
        e.preventDefault();

        onLoginSubmit(formValues);
    }

    return <>
        <section id="login-page" className="auth">
            <form id="login" onSubmit={formSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={formValues.email}
                        onChange={onChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password" 
                        value={formValues.password} 
                        onChange={onChange}
                    />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    </>
}