import ListGroup from 'react-bootstrap/ListGroup';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos
}) => {
    return (
        <>
            <div style={{margin:"10px auto", width:"30%"}}>
                <h3 style={{textAlign: 'center'}}>Todo List</h3>
                <ListGroup>
                    {todos.map(x => <TodoItem key={x._id} todo={x} />)}
                </ListGroup>
            </div>
        </>
    );
}