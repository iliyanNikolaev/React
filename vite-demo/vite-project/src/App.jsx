import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import Catalog from "./components/Catalog/Catalog"
import { useState, useEffect } from 'react';
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
    <>
      <Navigation />

      <Routes>
        <Route
          path="/catalog"
          element={<Catalog movies={movies}/>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
