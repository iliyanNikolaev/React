import { useAuthContext } from "./contexts/AuthContext";
import { useDataContext } from "./contexts/DataContext";
import { useEffect } from "react";
import { LoginForm } from "./components/loginForm";
import { RegisterForm } from "./components/RegisterForm";
import { LogoutBtn } from "./components/LogoutBtn";

function App() {

  const { userData } = useAuthContext();
  const { movies, getMovies } = useDataContext();

  useEffect(() => {
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
