import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import React from 'react';

const baseUrl = 'http://localhost:3030/jsonstore/todos'

function App() {
	const [todos, setTodos] = React.useState([]);

	React.useEffect(() => {
		fetch(baseUrl)
			.then(res => res.json())
			.then(data => {
				setTodos(Object.values(data));
			});
	}, [todos]);

	return (
		<>
			<Header />
			<TodoList todos={todos}/>
		</>
	);
}

export default App;
