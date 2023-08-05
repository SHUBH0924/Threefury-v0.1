import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logoF.png';
import 'font-awesome/css/font-awesome.min.css';
import home from './pages/Home/MyHome';
import AboutUs from './pages/AboutUs/AboutUs';



function navbar() {
  return (
<div className="container">
<nav className="navbar navbar-expand-lg navbar-dark static-top  navbar-dark fixed-top style-sec">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img className="logo-img" src={logo} alt="..." height="100" onClick={() => window.location.replace("/#home")}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={() => window.location.replace("/#home")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => window.location.replace("/#about")}>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li>
        <button type="button" className="btn-hover-1 color-1" href="12"><span>Get a Quote</span></button></li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default navbar
