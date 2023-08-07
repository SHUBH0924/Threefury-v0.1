import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/MyHome";
import "./App.css";
import BlogAI from "./components/pages/Blogs/BlogAI";
import Chandrayaaan from "./components/pages/Blogs/BlogChandryaan"
import Microservices from "./components/pages/Blogs/BlogMicroservices"
import ReactWhatsappButton from "react-whatsapp-button";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogAI" element={<BlogAI />} />
        <Route path="/blogChandrayaan" element={<Chandrayaaan />} />
        <Route path="/blogMicroservices" element={<Microservices />} />
      </Routes>
      <ReactWhatsappButton
        countryCode="91"
        phoneNumber="8777388386"
        animated
        style={{
          right: "unset",
          left: "10px",
      }}
      />
    </div>
  );
}

export default App;
