import ListGroup from 'react-bootstrap/ListGroup';

export const TodoItem = ({
    todo
}) => {
    return (
        <ListGroup.Item action>
            {todo.text}
        </ListGroup.Item>
    );
};