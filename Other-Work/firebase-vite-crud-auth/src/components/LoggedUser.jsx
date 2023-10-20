import { useAuthContext } from "../contexts/AuthContext";

export const LoggedUser = () => {
  const { userData } = useAuthContext();


  return (
    <p>User logged in app {'=> '} {userData.isAuthenticated ? `${userData.email}` : 'guest'}</p>
  )
}
