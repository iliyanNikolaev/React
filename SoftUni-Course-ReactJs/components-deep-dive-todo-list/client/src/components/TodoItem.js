const TodoItem = ({
    todo,
    onChangeStatus
}) => {
    return (
        <tr className={todo.isCompleted ? 'todo is-completed' : 'todo'}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => onChangeStatus(todo._id)}>Change status</button>
            </td>
        </tr>
    );
}

export default TodoItem;