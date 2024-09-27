import React from 'react';
import TodoItem from './TodoItem';
import { Card } from 'react-bootstrap';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <Card className="mt-3">
      <Card.Body>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default TodoList;
