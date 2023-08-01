import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/myHome';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
