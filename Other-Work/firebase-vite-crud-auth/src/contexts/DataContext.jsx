import { createContext, useContext, useState } from "react";
import { addDoc, collection, getDocs, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuthContext } from "./AuthContext";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const { userData } = useAuthContext();
    //movies data
    const [movies, setMovies] = useState(null);
    const moviesCollectionRef = collection(db, 'movies');

    const getMovies = async () => {
        try {
            const res = await getDocs(moviesCollectionRef);
            const leanData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setMovies(leanData);
        } catch (err) {
            alert(err.code);
        }
    } // used in GetMovies component

    const getMovieById = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            const res = await getDoc(movieDoc);
            return res.data();
        } catch (err) {
            alert(err.code);
        }
    } // used in EditMovie component

    const postMovieHandler = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const year = Number(e.target[1].value);
        const resume = e.target[2].value;
        let owner;

        if(userData) {
            owner = userData.uid;
        }

        // DATA MUST BE VALIDATED!!!

        try {
            await addDoc(moviesCollectionRef, { title, year, resume, owner });
            await getMovies();
            e.target.reset();
        } catch (err) {
            console.log(err)
            alert(err.code);
        }
    } // used in PostMovie component

    const deleteMovieHandler = async (id) => {
        const movieDoc = doc(db, 'movies', id);

        try {
            await deleteDoc(movieDoc);
            await getMovies();
        } catch (err) {
            alert(err.code);
        }
    } // used in MovieList component

    const updateMovieHandler = async (id, data) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await updateDoc(movieDoc, data);
            await getMovies();
        } catch (err) {
            alert(err.code);
        }
    } // used in EditMovie component

    const ctx = {
        movies,
        getMovies,
        postMovieHandler,
        deleteMovieHandler,
        getMovieById,
        updateMovieHandler
    }

    return (
        <DataContext.Provider value={ctx}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    const ctx = useContext(DataContext);
    return ctx;
}