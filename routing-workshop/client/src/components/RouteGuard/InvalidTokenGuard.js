import React from "react";
import { AuthContext } from "../../contexts/authContext";
import { utils } from "../../utils/utils";
import { Navigate } from "react-router-dom";

export const InvalidTokenGuard = ({
    children
}) => {
    const { resetLocalStorageState } = React.useContext(AuthContext);

    if(utils.accessTokenIsInvalid) {
        resetLocalStorageState();
        utils.accessTokenIsInvalid = false;
        return <Navigate to="login" />
    }

    return (
        {...children}
    );
}