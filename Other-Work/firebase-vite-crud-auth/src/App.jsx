import { useState, useEffect } from "react";
import { LogoutBtn } from "./components/LogoutBtn";
import { LoginForm } from "./components/loginForm";
import { RegisterForm } from "./components/RegisterForm";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const moviesCollectionRef = collection(db, 'movies');

  const [movies, setMovies] = useState(null);

  const { userData } = useAuthContext();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getDocs(moviesCollectionRef);
        const leanData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

      <RegisterForm />

      <LogoutBtn />

      <p>User logged in app {'=> '} {userData.isAuthenticated ? `${userData.email}` : 'guest'}</p>

      <div>
        {!movies && <p>Loading...</p>}

        {movies?.length == 0 && <p>No movies yet...</p>}

        {movies?.map(x => <div key={x.id}>
          <h3>{x.title}</h3>
          <p>{x.year}</p>
          <p>{x.resume}</p>
        </div>)}
      </div>
    </>
  )
}

export default App
