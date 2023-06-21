import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { getAllGames } from './services/GamesApi';
import React from 'react';

function App() {
    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        getAllGames()
            .then(res => setGames(res));
    }, [])

    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/catalog' element={<Catalog
                    games={games} 
                    />}>
                    </Route>
                <Route path='/create' element={<Create />}></Route>
            </Routes>
        </div>
    );
}

export default App;
