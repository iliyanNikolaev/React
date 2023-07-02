import { Routes, Route } from 'react-router-dom';

import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Logout } from './components/Logout/Logout';
import { Edit } from './components/Edit/Edit';
import { AuthProvider } from './contexts/authContext';
import { GameProvider } from './contexts/gameContext';
import { InvalidTokenGuard } from './components/RouteGuard/InvalidTokenGuard';

function App() {

    return (
        <AuthProvider>
            <GameProvider>
                <div id="box">
                    <Header />
                    <InvalidTokenGuard>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/register' element={<Register />}></Route>
                            <Route path='/logout' element={<Logout />}></Route>
                            <Route path='/catalog' element={<Catalog />}></Route>
                            <Route path='/create' element={<Create />}></Route>
                            <Route path='/details/:gameId' element={<Details />}></Route>
                            <Route path='/edit/:gameId' element={<Edit />}></Route>
                        </Routes>
                    </InvalidTokenGuard>
                </div>
            </GameProvider>
        </AuthProvider>
    );
}

export default App;
