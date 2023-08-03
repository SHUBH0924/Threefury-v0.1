import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logoF.png';
import 'font-awesome/css/font-awesome.min.css';



function navbar() {
  return (
    
    <div className='container '>
        <nav className="navbar navbar-expand-lg fixed-top style-sec">
  <div className="container">
    <img src={logo} className='me-auto logo-img' alt="ThreeFury" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
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
