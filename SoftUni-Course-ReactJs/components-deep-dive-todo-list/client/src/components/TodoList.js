import TodoItem from "./TodoItem";

const TodoList = ({
    todos,
    onChangeStatus
}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {/* Todo items here..*/}
                {todos.map(t => <TodoItem key={t._id} todo={t} onChangeStatus={onChangeStatus} />)}
            </tbody>
        </table>
    );
}

export default TodoList;