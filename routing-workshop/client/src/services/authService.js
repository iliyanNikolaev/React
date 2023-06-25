import { get, post } from "./requester"

const endpoints = {
    login: '/users/login',
    register: '/users/logout',
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
    return await post(endpoints.register, registerData);
}

export const logout = async () => {
    await get(endpoints.logout);
}
