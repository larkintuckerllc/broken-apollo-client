import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTodo from './CreateTodo';
import Todos from './Todos';
import TodosBroken from './TodosBroken';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <h1>Create Todo</h1>
      <CreateTodo />
      <h1>Todos</h1>
      <Todos />
      <h2>Todos Broken</h2>
      <TodosBroken />
    </header>
  </div>
);

export default App;
