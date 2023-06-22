import { get, post } from "./requester";

const endpoints = {
    allGames: '/games',
    create: '/games'
}

export const getAllGames = async () => {
   return get(endpoints.allGames);
}

export const createGame = async (data) => {
    return post(endpoints.create, data);
}

