import { LoginForm } from "./components/loginForm";
import { RegisterForm } from "./components/RegisterForm";
import { LogoutBtn } from "./components/LogoutBtn";
import { GetMovies } from "./components/GetMovies";
import { PostMovie } from "./components/PostMovie";
import { LoggedUser } from "./components/LoggedUser";

function App() {

  return (
    <>
      <LoginForm />

      <RegisterForm />

      <LogoutBtn />

      <LoggedUser />

      <GetMovies />

      <PostMovie />
    </>
  )
}

export default App
