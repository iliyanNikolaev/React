import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    render() {


        return (
            <ListGroup>
                {this.props.todos.map(x =>
                    <TodoItem key={x.id} todo={x}
                        onTodoClick={this.props.onTodoClick}
                        onTodoDelete={this.props.onTodoDelete}
                    />
                )}
            </ListGroup>
        );
    }
}