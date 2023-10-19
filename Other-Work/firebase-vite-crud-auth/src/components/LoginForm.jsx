import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const LoginForm = () => {

    const formSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            e.target.reset();
        } catch (err) {
            return alert(err.code);
            // this is the alert message => auth/invalid-email
        }
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>

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