import { get, post } from "./requester";

const endpoints = {
    allGames: '/games',
    create: '/games',
    byId: '/games/',
    commentsForGame: (gameId) => `/comments?where=gameId%3D%22${gameId}%22`,
    postComment: '/comments'
}

export const getAllGames = async () => {
   return get(endpoints.allGames);
}

export const createGame = async (gameData) => {
    return post(endpoints.create, gameData);
}

export const getGameById = async (gameId) => {
    return get(endpoints.byId + gameId);
}

export const getCommentsByGameId = (gameId) => {
    return get(endpoints.commentsForGame(gameId));
}

export const postCommentForGame = (commentData) => {
    return post(endpoints.postComment, commentData);
}