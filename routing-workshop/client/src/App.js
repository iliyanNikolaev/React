import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { getAllGames, createGame, deleteGameById } from './services/gameService';
import { Details } from './components/Details/Details';
import { AuthContext } from './contexts/authContext';
import { login, logout, register } from './services/authService';
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();

    const [games, setGames] = React.useState([]);
    const [auth, setAuth] = React.useState({});

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, []);

    const onCreateHandler = async (gameData) => {
        const game = await createGame(gameData, auth.accessToken);
        setGames(state => [...state, game]);
        navigate('/catalog');
    }

    const onLoginSubmit = async (loginData) => {
        try {
            const userData = await login(loginData);
            setAuth(userData);
            navigate('/');
        } catch (err) {
            console.log('error in App.js -> onLoginSubmit');
        }
    }

    const onRegisterSubmit = async (registerData) => {
        try {
            const userData = await register(registerData);
            setAuth(userData);
            navigate('/');
        } catch (err) {
            console.log('error in App.js -> onRegisterSubmit')
        }
    }

    const onLogout = async () => {
        try {
            await logout(undefined, auth.accessToken); // Параметъра undefined se налага да се подаде понеже за get заявката за logout ни трябва
            // само токена на потребителя, а и GET заявка не може да има body
            setAuth({});
        } catch (err) {
            console.log('error in App.js -> onLogout');
        }
    }

    const onDelete = async (gameId) => {
        try {
            await deleteGameById(gameId, auth.accessToken);

            setGames(state => state.filter(x => x._id !== gameId));

            navigate('/catalog');
        } catch (err) {
            console.log('error in App.js -> onDelete');
        }

    }

    const ctx = {
        onLoginSubmit,
        onRegisterSubmit,
        auth,
        onLogout,
        onDelete
    }

    return (
        <AuthContext.Provider value={ctx}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/logout' element={<Logout />}></Route>
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
