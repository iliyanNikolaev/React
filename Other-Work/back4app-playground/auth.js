import { b4aPOST, deleteToken, setToken } from "./b4aRequest.js";

export async function b4aRegister(loginData) {
    const result = await b4aPOST('/users', loginData);
    if(!result.error) {
        setToken(result.sessionToken);
    }
    return result;
}

// Примерна REGISTER заявка: const user = await b4aRegister({username: 'ilich', password: '123'});
// Успех: user = {objectId: '...', createdAt: '...', sessionToken: '...'}
// освен user обекта, който ни връща функцията, тя сетва session токена в localStorage и при следваща заявка автоматично
// ще бъде изпратен към back4app като header и така ще можем да правим оторизирани заявки
// При грешка: user = {code: 202, error: 'Account already exists for this username.'}

export async function b4aLogin(loginData) {
    const result = await b4aPOST('/login', loginData);
    if(!result.error) {
        setToken(result.sessionToken);
    }
    return result;
}

// Примерна LOGIN заявка: const user = await b4aRegister({username: 'ilich', password: '123'});
// Успех: user = {createdAt: "...", objectId: "...", sessionToken: "...", updatedAt: "...", username: "..."}
// освен user обекта, който ни връща функцията, тя сетва session токена в localStorage и при следваща заявка автоматично
// ще бъде изпратен към back4app като header и така ще можем да правим оторизирани заявки
// При грешка: user = {code: 101, error: 'Invalid username/password.'}

export async function b4aLogout() {
    const result = await b4aPOST('/logout');
    deleteToken();
    return result;
}

// Примерна LOGOUT заявка: const result = await b4aLogout();
// Успех: user = {};
// функцията премахва запазения токен в localStorage, следващи заявки към back4app ще са неоторизирани
// При грешка: user = {code: 209, error: 'Invalid session token'}