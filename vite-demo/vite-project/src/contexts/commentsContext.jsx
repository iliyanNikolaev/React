import { createContext } from "react";
import { getAllCommentsForMovie } from "../services/comment"

export const CommentsContext = createContext();

export function CommentsCtxProvider({
    children
}) {

    const getCommentsForCurrentMovie = async (movieId) => {
        try {
            return getAllCommentsForMovie(movieId);
        } catch (err) {
            throw err;
        }
    }

    const ctx = {
        getCommentsForCurrentMovie
    }

    return (
        <CommentsContext.Provider value={ctx}>
            {children}
        </CommentsContext.Provider>
    )
}
