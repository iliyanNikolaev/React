import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { login, register, logout } from '../services/user';

export const AuthContext = createContext();

export function AuthProvider({
    children
}) {
    const [auth, setAuth] = useState({});

    const navigate = useNavigate;

    const onLoginSubmit = async (username, password) => {
        try {
            const authData = await login(username, password);
            
            setAuth({
                username,
                sessionToken: authData.sessionToken,
                objectId: authData.objectId
            });
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }
    

    const onRegisterSubmit = async (username, password) => {
        try {
            const authData = await register(username, password);

            setAuth({
                username,
                sessionToken: authData.sessionToken,
                objectId: authData.objectId
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    const onLogoutSubmit = async () => {
        try {
            await logout();
            setAuth({});
        } catch (err) {
            console.log(err.message);
        }
    }

    const ctx = {
        auth,
        onLoginSubmit,
        onRegisterSubmit,
        onLogoutSubmit
    }

    return (
        <>
            <AuthContext.Provider value={ctx}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


