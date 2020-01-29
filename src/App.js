import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <h1>
        Simple Form
      </h1>
      <div>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button> Submit </button>
      </div>
    </div>
  );
}
export default App;
