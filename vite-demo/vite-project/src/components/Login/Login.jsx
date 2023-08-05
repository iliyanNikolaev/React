import './Login.css'
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useForm } from "../../hooks/useForm"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


export default function Login() {

    const [isLoading, setIsLoading] = useState(false);

    const { onLoginSubmit } = useContext(AuthContext);

    const { formValues, onChange } = useForm({ username: '', password: '' });

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            await onLoginSubmit(formValues.username, formValues.password);

            setIsLoading(false);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="login-page">
            <h2>Login page</h2>

            <form className="login-form" onSubmit={formSubmit}>
                <label htmlFor="username">Username:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>

                { isLoading ? <LoadingSpinner /> : <button>Login</button> }
            </form>
        </div>
    )
}
