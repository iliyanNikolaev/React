import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import React from 'react';
import { TodoContext } from './contexts/todoContext';

const baseUrl = 'http://localhost:3030/jsonstore/todos'

function App() {
	const [todos, setTodos] = React.useState([]);

	React.useEffect(() => {
		fetch(baseUrl)
			.then(res => res.json())
			.then(data => {
				setTodos(Object.values(data));
			});
	}, []);

	const onAddTodo = async (data, onCloseModal) => {

		const response = await fetch(baseUrl, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const result = await response.json();

		setTodos(state => [...state, result]);

		//document.querySelector('#closeButton').click();
		onCloseModal();
	}

	const onDeleteTodo = async (id) => {
		await fetch(`${baseUrl}/${id}`, {
			method: 'delete'
		});

		setTodos(state => state.filter(x => x._id !== id));
	}

	const todoOnClick = async (id) => {
		const currentTodo = todos.find(x => x._id === id);

		await fetch(`${baseUrl}/${id}`, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({text: currentTodo.text, isComplete: !currentTodo.isComplete})
		})

		setTodos(state => state.map(x => x._id === id ? {...x, isComplete: !x.isComplete} : {...x}));
	}

	const contextValue = {
		onDeleteTodo,
		onAddTodo,
		todoOnClick
	}

	return (
		<>
			<TodoContext.Provider value={contextValue}>
				<Header />
				<TodoList todos={todos} onAddTodo={onAddTodo} />
			</TodoContext.Provider>
		</>
	);
}

export default App;
