import { useAuthContext } from "../contexts/AuthContext"

export const RegisterForm = () => {

    const { registerHandler } = useAuthContext();

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={registerHandler}>
                <input type="text" placeholder="Email..." />
                <input type="password" placeholder="Password..." />

                <button>
                    Next
                </button>
            </form>
        </div>
    )
}


//createUserWithEmailAndPassword function
// При НЕУСПЕШНА заявка: Функцията хвърля грешка която хващаме в catch блока и в кода 
// по-горе се вижда как взимаме инфото каква е грешката
// При УСПЕШНА заявка: Функцията създава нов потребител в базата
