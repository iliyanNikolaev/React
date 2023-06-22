const host = 'http://localhost:3030/data'

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    }

    const accessToken = localStorage.getItem('accessToken'); // Токена е сложен ръчно в браузъра понеже за някои заявки се изисква оторизация
    // пък в следващата лекция ще се говори за оторизация и аутентикация и го добавям само за да ми работи демото

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-Authorization'] = accessToken;
        options.body = JSON.stringify(data);
    }

    const response = await fetch(host + url, options);

    const result = await response.json();

    return result;
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');