import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/MyHome";
import "./App.css";
import BlogAI from "./components/pages/Blogs/BlogAI";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogAI" element={<BlogAI />} />
      </Routes>
    </div>
  );
}

export default App;
