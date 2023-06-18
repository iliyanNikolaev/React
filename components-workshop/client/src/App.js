import { getAllUsers, createUser, deleteUser, updateUser } from './services/userService';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from './components/Search';
import Table from './components/Table';

function App() {
    const [users, setUsers] = React.useState([]);
    const [userProps, setUserProps] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        imageUrl: '',
        country: '',
        city: '',
        street: '',
        streetNumber: ''
    });

    const [formErrors, setFormErrors] = React.useState({});

    React.useEffect(() => {
        getAllUsers().then(users => {
            setUsers(users);
        })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    const onChangeUserProps = (e) => {
        const value = e.target.value;

        if (e.target.name === 'firstName' && value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'firstName' && value.length >= 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'lastName' && value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'lastName' && value.length >= 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'email' && !value.includes('@')) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'email' && value.includes('@')) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'phoneNumber' && value.length < 10) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'phoneNumber' && value.length >= 10) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'imageUrl' && !value.includes('http')) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'imageUrl' && value.includes('http')) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'country' && value.length < 2) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'country' && value.length >= 2) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'city' && value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'city' && value.length >= 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'street' && value.length < 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'street' && value.length >= 3) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }

        if (e.target.name === 'streetNumber' && (Number.isNaN(Number(value)) || Number(value) < 0)) {
            setFormErrors(state => ({ ...state, [e.target.name]: true }));
        }

        if (e.target.name === 'streetNumber' && Number(value) >= 0) {
            setFormErrors(state => ({ ...state, [e.target.name]: false }));
        }


        setUserProps(state => ({ ...state, [e.target.name]: value}));
    }

    const onCreateSubmit = async (e) => {
        e.preventDefault();

        const user = await createUser(userProps);

        setUsers(state => [...state, user]);
        setUserProps({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            imageUrl: '',
            country: '',
            city: '',
            street: '',
            streetNumber: ''
        })

        document.querySelector('.btn.close').click();
    }

    const onDeleteSubmit = async (id) => {
        await deleteUser(id);

        setUsers(state => state.filter(u => u._id !== id));

        document.querySelector('.btn.close').click();
    }

    const onUpdateSubmit = async (e, id) => {
        e.preventDefault();

        const updatedUser = await updateUser(id, userProps);

        setUsers(state => state.map(u => u._id === id ? updatedUser : u));

        document.querySelector('.btn.close').click();
    }

    const onUpdateClicked = (user) => {
        const newUserProps = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            imageUrl: user.imageUrl,
            country: user.address.country,
            city: user.address.city,
            street: user.address.street,
            streetNumber: user.address.streetNumber
        }

        setUserProps(newUserProps);
    }

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">

                    <Search />
                    <div className="table-wrapper">
                        <Table
                            users={users}
                            userProps={userProps}
                            onCreateSubmit={onCreateSubmit}
                            onDeleteSubmit={onDeleteSubmit}
                            onUpdateSubmit={onUpdateSubmit}
                            onChangeUserProps={onChangeUserProps}
                            formErrors={formErrors}
                            onUpdateClicked={onUpdateClicked}
                        />
                    </div>


                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
