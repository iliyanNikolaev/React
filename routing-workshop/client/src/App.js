import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { getAllGames, createGame, deleteGameById, editGameById } from './services/gameService';
import { Details } from './components/Details/Details';
import { AuthProvider } from './contexts/authContext';
import { Logout } from './components/Logout/Logout';
import { Edit } from './components/Edit/Edit';

function App() {
    const navigate = useNavigate();

    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, []);


    const onCreateHandler = async (gameData) => {
        const game = await createGame(gameData);
        setGames(state => [...state, game]);
        navigate('/catalog');
    }

    const onDelete = async (gameId) => {
        try {
            await deleteGameById(gameId);

            setGames(state => state.filter(x => x._id !== gameId));

            navigate('/catalog');
        } catch (err) {
            console.log('error in App.js -> onDelete');
        }

    }

    const onEdit = async (gameId, data) => {
        try {
            const result = await editGameById(gameId, data);

            setGames(state => state.map(x => x._id === gameId ? result : {...x}));

            navigate(`/details/${gameId}`);

        } catch (err) {
            console.log('error in App.js -> onEdit')
        }
    }

    return (
        <AuthProvider>
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
                    <Route path='/details/:gameId' element={<Details 
                        onDelete={onDelete}/>}></Route>
                    <Route path='/edit/:gameId' element={<Edit 
                    onEdit={onEdit}
                        />}></Route>
                </Routes>
            </div>
            </AuthProvider>
    );
}

export default App;
