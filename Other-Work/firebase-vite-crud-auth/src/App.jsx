import { LoginForm } from "./components/loginForm";
import { RegisterForm } from "./components/RegisterForm";
import { LogoutBtn } from "./components/LogoutBtn";
import { MoviesList } from "./components/MoviesList";
import { PostMovie } from "./components/PostMovie";
import { LoggedUser } from "./components/LoggedUser";

function App() {

  return (
    <>
      <LoginForm />

      <RegisterForm />

      <LogoutBtn />

      <LoggedUser />

      <MoviesList />

      <PostMovie />
    </>
  )
}

export default App
