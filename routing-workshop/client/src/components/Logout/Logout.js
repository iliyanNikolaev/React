import React from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { onLogout } = React.useContext(AuthContext);
    React.useEffect(() => {
        onLogout();
    }, [onLogout])
    
    return <Navigate to="/" />
}