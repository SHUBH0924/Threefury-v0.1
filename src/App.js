import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/myHome';
import OurProject from './components/OurProject/OurProject';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Home />
      <OurProject/>
      <Footer />
    </div>
  );
}

export default App;
