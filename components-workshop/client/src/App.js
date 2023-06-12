import { getAllUsers } from './services/userService';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from './components/Search';
import Table from './components/Table';

function App() {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getAllUsers().then(users => {
            setUsers(users);
        })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />
                    <div className="table-wrapper">
                        <Table users={users}/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
