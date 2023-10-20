import { useAuthContext } from '../contexts/AuthContext';

export const LoginForm = () => {

    const { loginHandler } = useAuthContext();

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Email..." />
                <input type="password" placeholder="Password..." />

                <button>
                    Next
                </button>
            </form>
        </div>
    )
}


//signInWithEmailAndPassword function
// При НЕУСПЕШНА заявка: Функцията хвърля грешка която хващаме в catch блока и в кода
// по-горе се вижда как взимаме инфото каква е грешката
// При УСПЕШНА заявка: Функцията логва потребителя в аппа
