import React from 'react'
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

export const LogoutBtn = () => {

    const onLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            return alert(err.code);
        }
    }
    
    return (
        <button onClick={onLogout}>
            Logout
        </button>
    )
}
