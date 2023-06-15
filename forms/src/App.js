import './App.css';
import React from 'react';

function App() {
    const [username, setUserName] = React.useState('Ilich');

    React.useEffect(() => {
        setTimeout(() => {
            setUserName('iliyan');
        }, 3000);
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log(e.target.parentElement.parentElement.querySelector('#username').value);
    }

    return (
        <div className="App">
            <h1>Forms Demo</h1>
            <hr />
            <form>
                <label htmlFor="username">Username:
                    <input type="text" name="username" id="username" defaultValue={username}/>
                </label>

                <div>
                    <input type="submit" value="submit" onClick={(e) => onSubmitHandler(e)}/>
                </div>
            </form>
        </div>
    );
}

export default App;
