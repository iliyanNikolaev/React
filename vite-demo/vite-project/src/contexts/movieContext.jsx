import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll, getById, createMovie, editMovie, deleteMovie } from "../services/movie";

export const MovieContext = createContext();

export function MovieCtxProvider({
    children
}) {
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAll()
            .then(data => {
                setMovies(data.results);
            })
    }, []);

    const createMovieHandler = async (movieData, userId) => {
        try {
            
            const { objectId } = await createMovie(movieData, userId);
            const createdMovie = await getById(objectId);

            setMovies(state => [...state, createdMovie]);

            navigate('/catalog');

        } catch (err) {
            console.log(err.message);
        }

    }

    const editMovieHandler = async (movieId, movieData, userId) => {

        try {
            editMovie(movieId, movieData, userId);

            setMovies(state => state.map(x => x.objectId == movieId 
                ? {...x, title: movieData.title, description: movieData.description, imgURL: movieData.imgURL} 
                : {...x}));

            navigate(`/details/${movieId}`);
        } catch (err) {
            console.log(err.message);
        }
    }

    const ctx = {
        movies, 
        createMovieHandler,
        editMovieHandler
    }

    return (
        <MovieContext.Provider value={ctx}>
            {children}
        </MovieContext.Provider>
    )
}
