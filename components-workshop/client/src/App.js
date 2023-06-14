import { getAllUsers, createUser, deleteUser } from './services/userService';
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

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);
        
        const user = await createUser(data);

        setUsers(state => [...state, user]);

        document.querySelector('.btn.close').click();
    }

    const onDeleteSubmit = async (id) => {
        await deleteUser(id);

        setUsers(state => state.filter(u => u._id !== id));

        document.querySelector('.btn.close').click();
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />
                    <div className="table-wrapper">
                        <Table users={users} onCreateSubmit={onCreateSubmit} onDeleteSubmit={onDeleteSubmit}/>
                    </div>


                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
