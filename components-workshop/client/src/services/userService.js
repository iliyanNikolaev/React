const baseUrl = 'http://localhost:3005/api/users';

export async function getAllUsers() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
}

export async function getUserById(id) {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    return data.user;
}