import React from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const RegisterForm = () => {

    console.log(auth?.currentUser?.email);

    const formSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
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
