import React from "react";
import { AppContext } from "../../contexts/appContext";
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { onLogout } = React.useContext(AppContext);
    React.useEffect(() => {
        onLogout();
    }, [onLogout])
    
    return <Navigate to="/" />
}