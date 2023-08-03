import React from 'react'
import './AboutUs.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCog,
  faEdit,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faTwitter,
  faFacebook,
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function AboutUs() {
  const options = {
    items: 3, // Number of items displayed in the carousel
    loop: true, // Infinite loop
    nav: true, // Show navigation buttons
    dots: true, // Show dots for pagination
    autoplay:true,
    autoplayTimeout:3000,
  };
  return (
    <>
      <div id='about'>
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <span className="sub-title">We are ThreeFury company</span>
              <h2>We are filling needs of our customers</h2>
              <p className="para">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum.
              </p>
              <button className="btn btn-pink-rounded mt-3">learn more</button>
            </div>
            <div className="col-lg-6">
              <div className="ms-lg-5 pt-4 mt-lg-0 pt-lg-0">
                <img
                  style={{ width: "90%", height: "50%" }}
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1690874206~exp=1690874806~hmac=0d06b1420f6b3d4b8ac71d43338359ad572a8bc939120fe4fed8b1fd1a6f2caa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{marginTop:'8rem',marginBottom:'8rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step blue">
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <h4 className="service-heading">
                  World leader in consulting and finance
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step midnight">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <h4 className="service-heading">
                  A focused team with a specialized skill
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step purple">
                  <FontAwesomeIcon icon={faCog} />
                </span>
                <h4 className="service-heading">
                  Trusted and professional advisors for you
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="process-wrapp">
                <span className="pro-step pink">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <h4 className="service-heading">
                  Experience to give you a better results
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-area mx-570 mb-5">
                <span className="sub-title">We are techfury company</span>
                <h2 className="title">We have some talented staff</h2>
                <p className="para">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="team-item">
                <img
                  alt="image"
                  className="team-image"
                  src="agency/img/team-img1.png"
                />
                <div className="name">
                  <h6>Srinjay Kapri</h6>
                </div>

                <p className="designation mb-2">Director</p>
                <FontAwesomeIcon icon={faFacebook}/>
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin} />
                 <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img
                  alt="image"
                  className="team-image"
                  src="agency/img/team-img2.png"
                />
                <div className="name">
                  <h6>Tanmoy Khanta</h6>
                </div>
                <p className="designation mb-2">Director</p>
                <div className="team-social social-icon-bg-hvr">
                <FontAwesomeIcon icon={faFacebook}/>
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin} />
                 <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-item">
                <img
                  alt="image"
                  className="team-image"
                  src="agency/img/team-img3.png"
                />
                <div className="name">
                  <h6>Shubhjeet Paul</h6>
                </div>
                <p className="designation mb-2">Director</p>
                {/* <div className="social-icon-bg-hvr"> */}
                <FontAwesomeIcon icon={faFacebook}/>
                 <FontAwesomeIcon className="ms-2  me-2" icon={faLinkedin} />
                 <FontAwesomeIcon icon={faTwitter} />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{marginTop:'8rem',marginBottom:'8rem'}} className='owl-animation'>
      <OwlCarousel className="owl-theme" {...options}>
      <div className="item"><img src="image1.jpg" alt="Image 1" /></div>
      <div className="item"><img src="image2.jpg" alt="Image 2" /></div>
      <div className="item"><img src="image3.jpg" alt="Image 3" /></div>
      {/* Add more carousel items as needed */}
      </OwlCarousel>
      </section>
      </div>
    </>
  )
}

export default AboutUs