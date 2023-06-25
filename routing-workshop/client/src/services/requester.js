import { utils } from "../utils/utils";

const host = 'http://localhost:3030';

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    }

    const userData = utils.getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok !== true) { // Ако response.ok е различно от true, заявката е fail-нала

            if (response.status === 403) { //Invalid access token - пояснение най-долу
                utils.clearUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            // Статуса е 204 когато response-a на сървъра е "no-content", а не е някакво съдържание в JSON формат.
            // Такъв би бил случаят при logout, тогава сървъра ни връща response със статус 204, и ако се     
            // опитаме да го JSON парснем, това ще ни хвърли грешка.
            // Затова в този случай връщаме само response.
            return response;
        } else {
            return response.json()
        }

    } catch (err) {
        alert(err.message);
        throw err;
        // throw-ваме грешката нататък, защото ако друга функция извика текущата
        // то тя също ще спре своето изпълнение и ще може да catch-не грешката
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');

// Статуса е 204 когато response-a на сървъра е "no-content", а не е някакво съдържание в JSON формат.
// Такъв би бил случаят при logout, тогава сървъра ни връща response със статус 204, и ако се
// опитаме да го JSON парснем, това ще ни хвърли грешка.
// Затова в този случай връщаме само response.
