const host = 'http://localhost:3030/data'

const request = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json';
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