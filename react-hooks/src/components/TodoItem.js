import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { TodoContext } from '../contexts/todoContext';

export const TodoItem = ({
    todo
}) => {
    const { onDeleteTodo } = React.useContext(TodoContext);


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