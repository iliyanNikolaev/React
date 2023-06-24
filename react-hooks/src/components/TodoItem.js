import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const TodoItem = ({
    todo,
    onDeleteTodo
}) => {

    const onDeleteClicked = (e) => {
        onDeleteTodo(e.target.id);
    }
    
    return (
        <>
            <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
                {todo.text}
                <Button variant="danger" id={todo._id} onClick={onDeleteClicked}>X</Button>
            </ListGroup.Item>
        </>
    );
};