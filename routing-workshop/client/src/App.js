import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { getAllGames, createGame } from './services/data';
import React from 'react';
import { Details } from './components/Details/Details';

function App() {
    const navigate = useNavigate(); // ползва се за редиректи, част е от react-router-dom библиотеката

    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, []);

    const onCreateHandler = async (data) => {
        const game = await createGame(data);
        setGames(state => [...state, game]);
        navigate('/catalog');   
    }

    return (
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
    );
}

export default App;
