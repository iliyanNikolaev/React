const host = 'http://localhost:3000'

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if(!response.ok) {
            throw new Error('todo..... error message');
        }

        const data = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');