import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
