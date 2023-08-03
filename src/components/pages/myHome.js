import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar';
import 'bootstrap/dist/css/bootstrap.css';
import icon from '../../assets/contact-us-customer-support-concept-vector_prev_ui.png';


function home() {
  return (
    <>
      <div>
       <Navbar/> 
      </div>
      <div class="content" >
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          

          <div class="row justify-content-center">
            <div class="col-md-6">
              
              <p><img src={icon} alt="Image" class="img-fluid "/></p>


            </div>
            <div class="col-md-6 mb-10">
              
            {/* <div class="heading-area pb-2 mx-570">
            <span class="sub-title">We are megaone company</span>
            <h2 class="title mt-2">Lets start your <span class="alt-color js-rotating">project, website</span></h2>
        </div> */}
        {/* <!--Contact Form--> */}
        <form class="contact-form" id="modal-contact-form-data">
        <h3 class="heading mb-4">Let's talk about everything!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>
            <div class="row">
                {/* <!--Result--> */}
                <div class="col-12" id="quote_result"></div>

                {/* <!--Left Column--> */}
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="quote_name" name="quoteName" placeholder="Name" required=""
                               type="text"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="quote_contact" name="userPhone" placeholder="Contact" required=""
                               type="text"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="quote_type" name="projectType" placeholder="Project type" required=""
                               type="text"/>
                    </div>
                </div>

                {/* <!--Right Column--> */}
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="quote_email" name="userEmail" placeholder="Email" required=""
                               type="email"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="quote_address" name="userAddress" placeholder="City / Country"
                               required="" type="text"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="quote_budget" name="quoteBudget" placeholder="Budget" required=""
                               type="text"/>
                    </div>
                </div>

                {/* <!--Full Column--> */}
                <div class="col-md-12">
                    <div class="form-group">
                        <textarea class="form-control" id="quote_message"
                                  name="userMessage" placeholder="Please explain your project in detail."></textarea>
                    </div>
                </div>

                {/* <!--Button--> */}
                <div class="col-md-16">

                    

                    <button type="button" class="btn-hover color-2" ><span>Send Message</span></button>
                </div>

            </div>
        </form>
    </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>

      </>






  )
}

export default home
