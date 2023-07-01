const Counter = () => {

    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.INCREMENT: 
                return { count: state.count + 1 }
            case ACTIONS.DECREMENT: 
                return { count: state.count - 1 }
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, { count: 0 });

    const increment = () => {
        dispatch( {type: ACTIONS.INCREMENT} );
    }

    const decrement = () => {
        dispatch( {type: ACTIONS.DECREMENT} );
    }

    return (
        <section>
        <h3>Counter useReducer Demo</h3>
        <button onClick={decrement}>-</button>
        <p>{state.count}</p>
        <button onClick={increment}>+</button>
        </section>
    );
}

const TodoList = () => {

    const ACTIONS = {
        ADD_TODO: 'add-todo',
        TOGGLE_TODO: 'toggle-todo',
        DELETE_TODO: 'delete-todo'
    }

    const reducer = (todos, action) => {
        switch (action.type){
            case ACTIONS.ADD_TODO:
                return [...todos, newTodo(action.payload.name)];
            case ACTIONS.TOGGLE_TODO:
                return todos.map(x => {
                    if(x.id === action.payload.id) {
                        return { ...x, completed: !x.completed }
                    }

                    return x;
                });
            case ACTIONS.DELETE_TODO:
                return todos.filter(x => x.id !== action.payload.id);
            default: 
                return todos;
        }
    }

    const [todos, dispatch] = React.useReducer(reducer, []);

    const [todoName, setTodoName] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: todoName } });
        console.log(todos)
        setTodoName('');
    }

    function newTodo(name) {
        return { id: Date.now(), name: name, completed: false };
    }



    return (
        <>
            <h3>Todo List useReducer Demo</h3>
            <form onSubmit={onSubmit}>
            <input type="text" name="todoName" value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
            </form>

            {todos.map(x => <Todo key={x.id} todo={x} dispatch={dispatch} />)}
        </>
    );
}

const Todo = ({
    todo,
    dispatch
}) => {
    return (
        <div>
        <span style={{color: todo.completed ? 'green' : 'red' }}>
            {todo.name}
        </span>

        <button onClick={() => dispatch({ type: 'toggle-todo', payload: { id: todo.id } })}>Toggle</button>
        <button onClick={() => dispatch({type: 'delete-todo', payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
    <>
    <Counter />
    <hr />
    <TodoList />
    </>
)

