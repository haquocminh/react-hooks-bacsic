import React from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center" }}>Welcome to React Hooks Basic </h1>
      <ColorBox/>
      <TodoList />
    </div>
  );
}

export default App;
