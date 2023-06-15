import './App.css';
import React from 'react';

function App() {
    const [username, setUserName] = React.useState('Ilich');

    React.useEffect(() => {
        setTimeout(() => {
            setUserName('iliyan');
        }, 3000);
    }, []);

    const onUsernameChange = (e) => {
        setUserName(e.target.value)
    }

    return (
        <div className="App">
            <h1>Forms Demo</h1>
            <hr />
            <form>
                <label htmlFor="username">Username:
                    <input type="text" name="username" id="username" 
                    value={username}
                    onChange={onUsernameChange}
                    />
                </label>

                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
}

export default App;
