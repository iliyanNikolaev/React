import { createContext, useContext, useState } from "react";
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        isAuthenticated: false
    });

    const getUserData = () => {
        const user = auth.currentUser;
        return user;
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            e.target.reset();
            const user = getUserData();
            setUserData(prev => ({
                isAuthenticated: true,
                ...user
            }));
        } catch (err) {
            console.log(err);
            return alert(err.code);
            // this is the alert message => auth/invalid-email
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            e.target.reset();
            const user = getUserData();
            setUserData(prev => ({
                isAuthenticated: true,
                ...user
            }));
        } catch (err) {
            return alert(err.code);
            // this is the alert message => auth/invalid-email
        }
    }

    const logoutHandler = async () => {
        try {
            await signOut(auth);
            setUserData(prev => ({
                isAuthenticated: false
            }));
        } catch (err) {
            return alert(err.code);
        }
    }

    const ctx = {
        loginHandler,
        registerHandler,
        logoutHandler,
        userData
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);

    return ctx;
}
