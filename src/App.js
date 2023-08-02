import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/myHome';
import Blog from './components/pages/blog'
import BlogAI from './components/pages/blog1'
function App() {
  return (
    <div className="App">
      

      
        <Home />
        <Blog />
        {/* <Routes> 
          <Router path='/blogAI' component={BlogAI} />
        </Routes> */}
         
        
        
    </div>
  );
}

export default App;
