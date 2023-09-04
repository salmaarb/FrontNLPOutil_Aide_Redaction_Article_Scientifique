import React, { useState } from "react";
import axios from 'axios';
import SS from "../assets/images/artificial.png";
import "../assets/css copy/auth.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9004/api/auth/signin', {
        email: formData.email, // Change to 'email'
        password: formData.password,
      });
      console.log('Sign in successful:', response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      // Redirect to the desired location
      window.location.href = "/";
    } catch (error) {
      console.log('Sign in failed:', error);
    }
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={SS} alt="" />
          </div>
          <div className="back"></div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleSignIn}> {/* Use onSubmit */}
                <div >
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      name="email" 
                      placeholder="Enter your email"
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      name="password" 
                      placeholder="Enter your password"
                      value={formData.password} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <button type="submit">Login</button> {/* Change to button */}
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sign up now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <p className="text-center">This app was built by <a href="https://3dsmartfactory.csit.ma/" target="_blank" rel="noopener noreferrer">3D Smart Factory</a> interns</p>
      </footer>
    </>
  );
}

export default SignIn;
