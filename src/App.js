import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let getLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(getLocal);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="app">
      <div className="container">
        <header><h1>Lista de tarefas</h1></header>
        <Form inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus} />
        <List filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;