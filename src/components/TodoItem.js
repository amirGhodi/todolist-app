import React from 'react';
import { Button } from 'react-bootstrap';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleComplete(todo.id, todo.completed)}
      >
        {todo.todo}
      </span>
      <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
