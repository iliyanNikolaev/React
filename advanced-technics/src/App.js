import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            todos: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todos: data.todos
                })
            });
    }

    onTodoClick(id) {
        this.setState({
            todos: this.state.todos.map(x => x.id === id ? {...x, completed: !x.completed} : {...x})
        });
    }

    onTodoDelete(id) {
        console.log('on delete')
        console.log(id)
        this.setState({
            todos: this.state.todos.filter(x => x.id !== id)
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <TodoList 
                    todos={this.state.todos}
                    onTodoClick={this.onTodoClick.bind(this)}
                    onTodoDelete={this.onTodoDelete.bind(this)}
                />
            </div>
        );
    }
}

export default App;
