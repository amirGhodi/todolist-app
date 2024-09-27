import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddTodo;
