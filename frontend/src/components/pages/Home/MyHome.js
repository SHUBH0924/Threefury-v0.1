import React, { useState,useEffect } from "react";
import Navigation from "../../navbar";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../../assets/contact-us-customer-support-concept-vector_prev_ui.png";
import BlogAIHome from "../Blogs/BlogAIHome";
import AboutUs from "../AboutUs/AboutUs";
import { faEmber } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

function home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("CY5A1KuW954jeFg5k"), []);

  const handleInput = (e) => {
    if (e.target.name === "quoteName") {
      setName(e.target.value);
    } else if (e.target.name === "userPhone") {
      setContact(e.target.value);
    } else if (e.target.name === "projectType") {
      setType(e.target.value);
    } else if (e.target.name === "userEmail") {
      setEmail(e.target.value);
    } else if (e.target.name === "userAddress") {
      setAddress(e.target.value);
    } else if (e.target.name === "quoteBudget") {
      setBudget(e.target.value);
    } else if (e.target.name === "userMessage") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    const serviceId = "service_exyu2dc";
    const templateId = "template_ds6ptms";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        Name:name,
        Email:email,
        Contact:contact,
        Address:address,
        Budget:budget,
        Message:message,
        Type:type
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSendMessage = async () => {
    try {
      if(name===''||budget===''||contact===''||message===''||email===''||address===''||type===''){
        alert("please fill all fields")
        return
      }
      const response = await fetch(
        "http://localhost:5000/api/projectDetails/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            user_name: name,
            user_email: email,
            user_contact: contact,
            user_address: address,
            user_type: type,
            user_budget: budget,
            user_explaination: message,
          }),
        }
      );
      const result = await response.json();
      console.log("rrr",result)
      if(result)
      {
        await handleSubmit()
        setName('')
        setAddress('')
        setBudget('')
        setContact('')
        setEmail('')
        setMessage('')
        setType('')
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div id="home" class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <p>
                    <img src={icon} alt="Image" class="img-fluid" />
                  </p>
                </div>
                <div class="col-md-6 mb-10">
                  {/* <div class="heading-area pb-2 mx-570">
            <span class="sub-title">We are megaone company</span>
            <h2 class="title mt-2">Lets start your <span class="alt-color js-rotating">project, website</span></h2>
        </div> */}
                  {/* <!--Contact Form--> */}
                  <form class="contact-form" id="modal-contact-form-data">
                    <h3 class="heading mb-4">Let's talk about everything!</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptas debitis, fugit natus?
                    </p>
                    <div class="row">
                      {/* <!--Result--> */}
                      <div class="col-12" id="quote_result"></div>

                      {/* <!--Left Column--> */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_name"
                            name="quoteName"
                            placeholder="Name"
                            required=""
                            type="text"
                            value={name}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_contact"
                            name="userPhone"
                            placeholder="Contact"
                            required=""
                            type="text"
                            value={contact}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_type"
                            name="projectType"
                            placeholder="Project type"
                            required=""
                            type="text"
                            value={type}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                      </div>

                      {/* <!--Right Column--> */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_email"
                            name="userEmail"
                            placeholder="Email"
                            required=""
                            type="email"
                            value={email}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_address"
                            name="userAddress"
                            placeholder="Address"
                            required=""
                            type="text"
                            value={address}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control"
                            id="quote_budget"
                            name="quoteBudget"
                            placeholder="Budget"
                            required=""
                            type="text"
                            value={budget}
                            onChange={(e) => handleInput(e)}
                          />
                        </div>
                      </div>

                      {/* <!--Full Column--> */}
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            id="quote_message"
                            name="userMessage"
                            placeholder="Please explain your project in detail."
                            value={message}
                            onChange={(e) => handleInput(e)}
                          ></textarea>
                        </div>
                      </div>

                      {/* <!--Button--> */}
                      <div class="col-md-16">
                        <button
                          type="button"
                          class="btn-hover color-2"
                          onClick={handleSendMessage}
                          disabled={loading}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<AboutUs />}
      {<BlogAIHome />}
    </>
  );
}

export default home;
