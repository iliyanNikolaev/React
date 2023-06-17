import './App.css';
import React from 'react';

function App() {
    const [username, setUserName] = React.useState('Ilich');
    const [age, setAge] = React.useState(null);
    const [creditCard, setCreditCard] = React.useState('');
    const [car, setCar] = React.useState('mercedes');
    const [gender, setGender] = React.useState('male');

    const onUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    const onAgeChange = (e) => {
        setAge(Number(e.target.value));
    }

    const onCreditCardChange = (e) => {
        setCreditCard(e.target.value);
    }

    const onCarChange = (e) => {
        setCar(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(username);
        console.log(age);
        console.log(creditCard);
    }

    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    return (
        <div className="App">
            <h1>Forms Demo</h1>
            <hr />
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username:
                    <input type="text" name="username" id="username"
                        value={username}
                        onChange={onUsernameChange}
                    />
                </label>
                <div>
                    <label htmlFor="age">Age:
                        <input type="number" name="age" id="age"
                            value={age ?? ''}
                            onChange={onAgeChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="male" value="male" id="male" onChange={onChangeGender} checked={gender === 'male'} />

                    <label htmlFor="female">Female</label>
                    <input type="radio" name="female" value="female" id="female" onChange={onChangeGender} checked={gender === 'female'} />
                </div>
                {age >= 18
                    ? <div>
                        <label htmlFor="age">Credit Card:
                            <input type="text" name="creditCard" id="creaditCard"
                                value={creditCard}
                                onChange={onCreditCardChange}
                            />
                        </label>
                    </div>
                    : null
                }

                <select name="cars" id="cars" onChange={onCarChange} value={car}>
                    <option value="vw">Vw</option>
                    <option value="opel">Opel</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}

export default App;
