import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { getAllGames, createGame } from './services/gameService';
import { Details } from './components/Details/Details';
import { AuthContext } from './contexts/authContext';
import { login } from './services/authService';
import { utils } from './utils/utils';

function App() {
    const navigate = useNavigate();

    const [games, setGames] = React.useState([]);
    const [auth, setAuth] = React.useState({});

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, []);

    const onCreateHandler = async (gameData) => {
        const game = await createGame(gameData);
        setGames(state => [...state, game]);
        navigate('/catalog');
    }

    const onLoginSubmit = async (loginData) => {
        
        try {
            
            const userData = await login(loginData);
            setAuth(userData);
            utils.setUserData(userData);
            navigate('/');

        } catch (err) {
            console.log('error in App.js -> onLoginSubmit');
        }
    }

    return (
        <AuthContext.Provider value={{ onLoginSubmit }}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/catalog' element={<Catalog
                        games={games}
                    />}></Route>
                    <Route path='/create' element={<Create
                        onCreateHandler={onCreateHandler}
                    />}></Route>
                    <Route path='/details/:gameId' element={<Details />}>

                    </Route>
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
