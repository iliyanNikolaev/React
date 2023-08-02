import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import Navigation from "./components/Navigation/Navigation"
import Catalog from "./components/Catalog/Catalog"
import Footer from "./components/Footer/Footer"
import Create from "./components/Create/Create"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from "./components/Logout/Logout"

import { AuthProvider } from './contexts/authContext';

import { getAll } from './services/movie.js';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAll()
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  return (
    <AuthProvider>

      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}>
        </Route>
        <Route
          path="/create"
          element={<Create />}>
        </Route>
        <Route
          path="/catalog"
          element={<Catalog movies={movies} />}>
        </Route>
        <Route 
          path="/login"
          element={ <Login /> }>
        </Route>
        <Route 
          path="/register"
          element={ <Register /> }>
        </Route>
        <Route 
          path="/logout"
          element={ <Logout /> }>
        </Route>
      </Routes>

      <Footer />
    </AuthProvider>
  )
}

export default App
