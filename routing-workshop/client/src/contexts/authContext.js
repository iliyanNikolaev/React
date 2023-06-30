import React from "react";
import { login, logout, register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = React.createContext();

export const AuthProvider = ({
    children
}) => {

    const [state, setLocalStorageState] = useLocalStorage('auth', {});
    
    const navigate = useNavigate();
    
    const onLoginSubmit = async (loginData) => {
        try {
            const userData = await login(loginData);
            setLocalStorageState(userData);
            navigate('/');
        } catch (err) {
            console.log('error in AuthContext.js -> onLoginSubmit');
        }
    }

    const onRegisterSubmit = async (registerData) => {
        try {
            const userData = await register(registerData);
            setLocalStorageState(userData);
            navigate('/');
        } catch (err) {
            console.log('error in AuthContext.js -> onRegisterSubmit')
        }
    }

    const onLogout = async () => {
        try {
            await logout(undefined, state.accessToken); // Параметъра undefined se налага да се подаде понеже за get заявката за logout ни трябва
            // само токена на потребителя, а и GET заявка не може да има body
            setLocalStorageState({});
        } catch (err) {
            console.log('error in AuthContext.js -> onLogout');
        }
    }

    const ctx = {
        onLoginSubmit,
        onRegisterSubmit,
        auth: state,
        onLogout,
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

