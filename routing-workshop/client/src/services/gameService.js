import { get, post, del, put } from "./requester";

const endpoints = {
    allGames: '/data/games',
    create: '/data/games',
    byId: '/data/games/',
    commentsForGame: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    postComment: '/data/comments',
    latestGames: '/data/games?sortBy=_createdOn%20desc&distinct=category/'
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

export const deleteGameById = (id) => {
    return del(endpoints.byId+id);   
}

export const editGameById = (id, data) => {
    return put(endpoints.byId+id, data);   
}

export const getCommentsByGameId = (gameId) => {
    return get(endpoints.commentsForGame(gameId));
}

export const postCommentForGame = (commentData) => {
    return post(endpoints.postComment, commentData);
}

export const getLatestGames = () => {
    return get(endpoints.latestGames);
}

