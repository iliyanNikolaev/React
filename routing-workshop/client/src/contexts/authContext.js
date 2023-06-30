import React from "react";
import { login, logout, register } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = React.useState({});
    
    const navigate = useNavigate();
    
    const onLoginSubmit = async (loginData) => {
        try {
            const userData = await login(loginData);
            setAuth(userData);
            navigate('/');
        } catch (err) {
            console.log('error in AuthContext.js -> onLoginSubmit');
        }
    }

    const onRegisterSubmit = async (registerData) => {
        try {
            const userData = await register(registerData);
            setAuth(userData);
            navigate('/');
        } catch (err) {
            console.log('error in AuthContext.js -> onRegisterSubmit')
        }
    }

    const onLogout = async () => {
        try {
            await logout(undefined, auth.accessToken); // Параметъра undefined se налага да се подаде понеже за get заявката за logout ни трябва
            // само токена на потребителя, а и GET заявка не може да има body
            setAuth({});
        } catch (err) {
            console.log('error in AuthContext.js -> onLogout');
        }
    }

    const ctx = {
        onLoginSubmit,
        onRegisterSubmit,
        auth,
        onLogout,
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

