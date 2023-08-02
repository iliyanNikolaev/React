import { get, post, put } from "./api.js";
import { createPointer } from "../util.js";

const endpoints = {
    movies: '/classes/Movies',
    byId: '/classes/Movies/'
}

export async function getAll() {
    return get(endpoints.movies); // {results: Array(4)}
}

export async function getById(movieId) {
    return get(endpoints.byId + movieId); // {objectId: '...', title: '...', description: '...', imgURL: '...', owner: {…}, …}
}

export async function createMovie(movieData, userId) {
    const finalData = {
        ...movieData,
        owner: createPointer(userId)
    }

    return post(endpoints.movies, finalData);
}

export async function editMovie(movieId, movieData, userId) {
    
    const finalData = {
        ...movieData,
        owner: createPointer(userId)
    }

    return put(endpoints.byId + movieId, movieData); // {updatedAt: '2023-08-02T12:54:05.889Z'}
}

export async function deleteMovie(movieId) {
    return del(endpoints.byId);
}