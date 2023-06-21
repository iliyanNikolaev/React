import { get } from "./requester";

const endpoints = {
    allGames: '/games'
}

export const getAllGames = async () => {
   return get(endpoints.allGames);
}