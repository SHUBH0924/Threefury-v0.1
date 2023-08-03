import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/MyHome";
import "./App.css";
import BlogAI from "./components/pages/Blogs/BlogAI";
import Chandrayaaan from "./components/pages/Blogs/chandryaan"
import Microservices from "./components/pages/Blogs/microservicesblog"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogAI" element={<BlogAI />} />
        <Route path="/chandrayaan" element={<Chandrayaaan />} />
        <Route path="/microservices" element={<Microservices />} />
      </Routes>
    </div>
  );
}

export default App;
