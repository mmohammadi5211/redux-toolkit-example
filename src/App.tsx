import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h1>A simple todo list app to experiment with Redux Toolkit</h1>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
