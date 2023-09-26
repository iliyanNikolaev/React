import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';
import { useForm } from '../hooks/useForm';

export const AddTodo = ({
    onAddTodo,
    onClose,
    addTodoVisible
}) => {
    
    const { formValues, onChangeHandler } = useForm({
        text: '',
        isComplete: false
    })

    const formSubmit = (e) => {
        e.preventDefault();
        onAddTodo(formValues, onClose);
        formValues.text = '';
    }


    return (
        <Modal show={addTodoVisible}>
            <Modal.Header closeButton onClick={onClose} id='closeButton'>
                <Modal.Title>Add new task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputGroup style={{display: 'block'}}>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                            name="text" 
                            type="text" 
                            placeholder="Enter todo..." 
                            value={formValues.text}
                            onChange={onChangeHandler}
                            />
                        </Form.Group>

                        <Button type="submit" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Submit</Button>
                    </Form>
                </InputGroup>
            </Modal.Body>
        </Modal>
    );
}