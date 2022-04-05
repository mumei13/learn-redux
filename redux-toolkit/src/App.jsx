import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Todos } from './components/todo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
