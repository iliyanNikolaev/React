import { get, post } from "./requester";

const endpoints = {
    allGames: '/games',
    create: '/games',
    byId: '/games/'
}

export const getAllGames = async () => {
   return get(endpoints.allGames);
}

export const createGame = async (data) => {
    return post(endpoints.create, data);
}

export const getGameById = async (id) => {
    return get(endpoints.byId + id);
}

