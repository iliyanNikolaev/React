import { deleteUserData, setUserData } from '../utils/sessionStorage.js';
import { get, post } from './api.js';

const endpoints = {
    users: '/users',
    login: '/login',
    logout: '/logout'
}

export async function getAllUsers() {
    return get(endpoints.users);
}

export async function register(username, password) {
    try {
        const response = await post(endpoints.users, { username, password }); // {objectId: '...', createdAt: '...', sessionToken: '...'}
        
        const auth = {
            objectId: response.objectId,
            sessionToken: response.sessionToken,
            username
        }

        setUserData(auth);
 
        return auth;

    } catch (err) {
        console.log(err.message);
    }
}

export async function login(username, password) {
    try {
        const response = await post(endpoints.login, { username, password }); // {objectId: '...', username: '...', createdAt: '...', updatedAt: '...', sessionToken: '...' ACL: {…}, …}
        
        setUserData({
            objectId: response.objectId,
            sessionToken: response.sessionToken,
            username
        });

        return response;

    } catch (err) {
        console.log(err.message);
    }
}

export async function logout() {
    await post(endpoints.logout, {});

    deleteUserData();
}