"use client"
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    
    const ctx = {
        auth,
        setAuth
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const { auth, setAuth } = useContext(AuthContext);

    return {
        auth,
        setAuth
    }
}


