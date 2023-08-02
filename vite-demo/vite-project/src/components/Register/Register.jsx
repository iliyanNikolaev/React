import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useForm } from "../../hooks/useForm"

export default function Register() {

    const { formValues, onChange } = useForm({ username: '', password: '' });

    const { onRegisterSubmit } = useContext(AuthContext);

    const formSubmit = (e) => { 
        e.preventDefault();

        onRegisterSubmit(formValues.username, formValues.password);
    }
 
    return (
        <>
            <h2>Register page</h2>

            <form onSubmit={formSubmit}>
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

                <button>Register</button>
            </form>
        </>
    )
}
