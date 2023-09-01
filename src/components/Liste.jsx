/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React  from 'react';

import ExampleBackendQuery from './ExampleBackendQuery'; 


// Material Kit 2 React components
import A from '../assets/images/delivery.png';
import B from '../assets/images/control.png';
import C from '../assets/images/search2.png';
import D from '../assets/images/checkmark.png';
function Liste() {
  // Function to append a script element to the <head>
 
  return (
    <>

   
        {/* Header */}
     

        {/* Main Banner */}
        
        <div className="main-banner" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="caption header-text">
            <h6>Introducing PaperGenius</h6>
            <div className="line-dec"></div>
            <h4>Unlock Your <em>Scientific</em> Writing <span>Potential</span></h4>
            <p>Discover a smarter way to write research papers and theses with Paper Genius, your personal AI writing companion. Elevate your work while maintaining the utmost academic quality – all without the stress.</p>
            <div className="main-button scroll-to-section"><a href="#services">Get Started</a></div>
            <span>or</span>
            <div className="second-button"><a href="faqs.html">Check our FAQs</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Services */}
        <div className="services section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>We Provide <em>Different Services</em> &amp;
                  <span>Features</span> 
                </h2>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={A} alt="discover SEO" className="templatemo-feature" style={{ maxWidth: '280px' }}/>
                </div>
                <h4>Effortless Paper Structure</h4>
                <p>Generate essential parts of your research papers seamlessly.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={B} alt="data analysis" className="templatemo-feature" style={{ maxWidth: '280px' }}/>
                </div>
                <h4>Smart Paraphrasing</h4>
                <p>Effortlessly rephrase sentences while retaining meaning and coherence.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={C} alt="precise data" className="templatemo-feature" style={{ maxWidth: '280px' }}/>
                </div>
                <h4>Intelligent Suggestions</h4>
                <p>Receive recommendations for similar articles  to elevate your paper.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src={D} alt="SEO marketing" className="templatemo-feature" style={{ maxWidth: '280px' }}/>
                </div>
                <h4>Orthographic Excellence</h4>
                <p>Ensure precise spelling and grammar with built-in orthographic correction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Contact Us */}
        <div className="contact-us section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-4">
                <div id="map">
                
                </div>
              </div>
              <div className="col-lg-8">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2><em>Contact Us</em> &amp; Get In <span>Touch</span></h2>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" id="name" placeholder="Your First Name..." required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="surname" name="surname" id="surname" placeholder="Your Last Name..."
                           required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..."
                          required=""/>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="subject" name="subject" id="subject" placeholder="Subject..." />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
                <div className="more-info">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-phone"></i>
                        <h4><a href="#">+33 6 24 94 80 83</a></h4>
                        <h4><a href="#">+212 5 23 30 04 46</a></h4>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-envelope"></i>
                        <h4><a href="#">3dsmartfactory@gmail.com</a></h4>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-map-marker"></i>
                        <h4><a href="#">Villa Num 75, Subdivision station Mohammedia, Morocco</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Footer */}
        <footer>
    <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank">3D Smart Factory</a> interns</p>
  </footer>
  <ExampleBackendQuery />           









</>




  );
}

export default Liste;
