import { useState, useEffect } from "react";
import { LogoutBtn } from "./components/LogoutBtn";
import { LoginForm } from "./components/loginForm";
import { auth, db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const moviesCollectionRef = collection(db, 'movies');

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getDocs(moviesCollectionRef);
        const leanData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(leanData);
        setMovies(leanData);
      } catch (err) {
        alert(err.code);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <LoginForm />
      <LogoutBtn />

      {!movies && <p>Loading...</p>}

      { movies.length == 0 && <p>No movies yet...</p>}
      
      { movies.map(x => <div key={x.id}>
        <h2>{x.title}</h2>
        <p>{x.year}</p>
        <p>{x.resume}</p>
      </div>) }
    </>
  )
}

export default App
