import { get, post } from "./requester"

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export const login = async (loginData) => {
    try {
        return await post(endpoints.login, loginData);

    } catch (err) {
        console.log('error in authService.js -> login');
        throw err;
    }
}

export const register = async (registerData) => {
    try {
        return await post(endpoints.register, registerData);

    } catch (err) {
        console.log('error in authService.js -> register');
        throw err;
    }
}

export const logout = async () => {
    await get(endpoints.logout);
}
