import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { useForm } from '../../hooks/useForm';

export const Register = (props) => {
    const { formValues, onChange } = useForm({
        email: '',
        password: '',
        'confirm-password': ''
    });

    const { onRegisterSubmit } = React.useContext(AuthContext);

    const formSubmit = (e) => {
        e.preventDefault();

        if(formValues.password === formValues['confirm-password']) {
            onRegisterSubmit({ email: formValues.email, password: formValues.password });
        } else {
            alert('Passwords don\'t match!')
        }
    }

    return <>
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={formSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={formValues.email}
                        onChange={onChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={formValues.password}
                        onChange={onChange}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password" 
                        value={formValues['confirm-password']}
                        onChange={onChange}
                        />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    </>
}