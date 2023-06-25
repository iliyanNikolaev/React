import { get, post } from "./requester"

const endpoints = {
    login: '/users/login',
    register: '/users/logout',
    logout: '/users/logout'
}

export const login = async (loginData) => {
    return await post(endpoints.login, loginData);
}

export const register = async (registerData) => {
    return await post(endpoints.register, registerData);
}

export const logout = async () => {
    await get(endpoints.logout);
}
