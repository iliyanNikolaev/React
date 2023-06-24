import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodoModal';
import React from 'react';

export const TodoList = ({
    todos,
    onAddTodo,
    onDeleteTodo
}) => {

    const [addTodoVisible, setAddTodoVisible] = React.useState(false);

    const addTodoClicked = () => {
        setAddTodoVisible(true);
    }

    const onClose = () => {
        setAddTodoVisible(false);
    }
    
    return (
        <>
            <div style={{margin:"10px auto", width:"30%"}}>
                <h3 style={{textAlign: 'center'}}>Todo List</h3>
                <ListGroup>
                    {todos.map(x => <TodoItem key={x._id} todo={x} onDeleteTodo={onDeleteTodo}/>)}
                </ListGroup>

                <Button variant="primary" 
                    style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: "10px"}}
                    onClick={addTodoClicked}
                    >Add</Button>
                
                <AddTodo onAddTodo={onAddTodo} onClose={onClose} addTodoVisible={addTodoVisible}/>
            </div>
        </>
    );
}