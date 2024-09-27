import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import '../styles.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        const initialTodos = data.todos || [];
        
        localStorage.setItem('todos', JSON.stringify(initialTodos));
        setTodos(initialTodos);
      } catch (err) {
        setError('Error fetching tasks from the server.');
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) {
      setError('Task cannot be empty.');
      return;
    }
    setError('');
    const newTodo = {
      id: Date.now(),
      todo: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      {error && <p className="error">{error}</p>}
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
