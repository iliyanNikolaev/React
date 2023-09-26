import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

export class TodoItem extends React.Component {

    render() {
        return (
            <ListGroup.Item
                style={{ color: this.props.todo.completed ? 'green' : 'red' }}>
                <span onClick={() => this.props.onTodoClick(this.props.todo.id)}>{this.props.todo.label}</span>
                <button onClick={() => this.props.onTodoDelete(this.props.todo.id)}>Delete</button>
            </ListGroup.Item>
        );
    }
}