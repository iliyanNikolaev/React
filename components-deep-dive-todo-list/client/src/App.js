import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import TodoList from './components/TodoList';

function App() {

    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                const todosData = Object.values(data);
                setTodos(todosData);
            })
    }, []);

    const onChangeStatus = (id) => {
        const newTodos = todos.map(t => t._id === id ? { ...t, isCompleted: !t.isCompleted } : t);
        setTodos(newTodos);
    }

    const onAddTodo = () => {
        const userText = prompt('Write a text!');

        const lastId = Number(todos[todos.length - 1]._id.split('_')[1]);
        const newId = lastId + 1;

        const newTodo = {
            _id: `todo_${newId}`,
            text: userText,
            isCompleted: false
        }

        
        const newTodos = [...todos, newTodo];

        setTodos(newTodos);
    }

    return (
        <div className="App">
            <Header />

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={() => onAddTodo()}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">

                        {/* Loading here.. */}

                        {/*Table here..*/}
                        <TodoList todos={todos} onChangeStatus={onChangeStatus} />


                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
