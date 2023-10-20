import { createContext, useContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
    }

    const ctx = {
        movies,
        getMovies
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