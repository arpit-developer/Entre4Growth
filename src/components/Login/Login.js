import React,{useState} from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
  BsLockFill,
} from "react-icons/bs";
import "../SignUp/Signup.css";

export const Login = () => {
  const[formData,setFormData] =useState({
    workemail:"",
    passwrod:"",
  });
  const handleChange =(e) =>{
    const {name,value} =e.target;
    setFormData((prevData) =>({...prevData,[name]:value}));
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data sent to server:", data);
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  return (
    <div className="auth-wrapper">
       <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1>Log In</h1>
            </div>
          </div>
        </div>
      <form className="auth-inner" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl placeholder="Email Address" type="email" name="workemail" required onChange={handleChange} />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsLockFill />
            </InputGroup.Text>
            <FormControl placeholder="Password" type="password" name="password" required onChange={handleChange}/>
          </InputGroup>
        </div>
        <div className="row">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
        <p className="forgot-password text-left">
        Don't have an account? <a href="/signup">Sign Up!</a>
        </p>
        <p className="forgot-password text-right">
           <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};
