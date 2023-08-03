import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';
import logo from './logoF.png';

const Footer = () => {
  return (
    <div className='container'>
        <div className="footer-div">
            <h1>Get started with ThreeFury</h1>
            <p>Book a free consultancy, let's your business take to a next step!</p>
            <button className="btn btn-outline-light">Get Started</button>
        </div>
        <div className="foot-sec ">
            <div className="footer-ogo">
                <img src={logo} className='logo-img' alt="ThreeFury" />
                <p>Our vision is to grow your business digitally!</p>
                <div className='foot-icon'>
                <FacebookIcon className='footer-icon'/>
                <LinkedInIcon className='footer-icon'/>
                <InstagramIcon className='footer-icon'/>
                <TwitterIcon className='footer-icon'/>
                <EmailIcon className='footer-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;