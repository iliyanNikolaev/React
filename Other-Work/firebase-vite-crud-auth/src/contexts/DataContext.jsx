import { createContext, useContext, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
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

    const postMovieHandler = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const year = Number(e.target[1].value);
        const resume = e.target[2].value;

        // DATA MUST BE VALIDATED!!!

        try {
            await addDoc(moviesCollectionRef, { title, year, resume });
            await getMovies();
            e.target.reset();
        } catch (err) {
            alert(err.code);
        }
    } // used in PostMovie component

    const ctx = {
        movies,
        getMovies, 
        postMovieHandler
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