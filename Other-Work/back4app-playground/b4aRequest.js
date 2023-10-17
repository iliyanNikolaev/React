import { APPID, JSKEY, B4AHOST } from './constants.js';

export async function b4aRequest(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': APPID,
            'X-Parse-JavaScript-Key': JSKEY
        }
    }

    const token = getToken();
    if(token) {
        options.headers['X-Parse-Session-Token'] = token;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(B4AHOST + url, options);
    const result = await response.json();
    return result;
}

// Примерна GET заявка: const result = await b4aRequest('get', '/classes/Laptops');
// Успех: result = {results: Array(3)}
// При грешка: result = {message: 'Not Found', error: {…}}

// Примерна POST заявка: const result = await b4aRequest('post', '/classes/Laptops', { brand: 'Acer', model: 'Aspire', price: 999});
// Успех: result = {objectId: 'MJWwPsd76f', createdAt: '2023-10-17T16:47:23.433Z'}
// При грешка: result = {code: 111, error: 'schema mismatch for Laptops.price; expected Number but got String'}

//Примерна PUT заявка: const result = await b4aRequest('put', '/classes/Laptops/MJWwPsd76f', { brand: 'Acer2', model: 'Aspire', price: 989});
// Успех: result = {updatedAt: '2023-10-17T16:53:37.745Z'}
// При грешка: result = {code: 101, error: 'Object not found.'}

//Примерна DELETE заявка: const result = await b4aRequest('delete', '/classes/Laptops/MJWwPsd76f');
// Успех: result = {}
// При грешка: result = {code: 101, error: 'Object not found.'}

//---------------------------------------------------------------------------------------//

//localStorageUtils
export function setToken(token) {
    localStorage.setItem('b4aToken', JSON.stringify(token));
}

export function getToken() {
    return JSON.parse(localStorage.getItem('b4aToken'));
}

export function deleteToken() {
    localStorage.removeItem('b4aToken');
}

//--------------------------------------------------------------------------------------//

//partials
export const b4aGET = b4aRequest.bind(null, 'get');
export const b4aPOST = b4aRequest.bind(null, 'post');
export const b4aPUT = b4aRequest.bind(null, 'put');
export const b4aDELETE = b4aRequest.bind(null, 'delete');