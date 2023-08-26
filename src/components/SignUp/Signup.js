import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import {
  BsBuildingCheck,
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
  BsFillLockFill,
} from "react-icons/bs";
import { InputGroup, FormControl } from "react-bootstrap";

import "./Signup.css";

export const Signup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    workemail: "",
    mobileNo: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 2000);
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data sent to server:", data);
        setSubmittedData(data); // Update submittedData state with the received data
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="auth-wrapper">
       <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1 className="rlheading">Register as Entrepreneur!</h1>
            </div>
          </div>
        </div>
      <form className="auth-inner" onSubmit={handleSubmit}>
        <h3>Let's Hop in to create new Account</h3>
        <InputGroup>
          <InputGroup.Text>
            <BsBuildingCheck />
          </InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Startup Company name *"
            name="companyName"
            onChange={handleChange}
            required
          />
        </InputGroup>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="First Name *"
                name="firstName"
                onChange={handleChange}
                required
              />
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Last Name *"
                name="lastName"
                onChange={handleChange}
                required
              />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl
              type="email"
              placeholder="Work Email Address *"
              name="workemail"
              onChange={handleChange}
              required
            />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillPhoneFill />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Mobile Number *"
              name="mobileNo"
              onChange={handleChange}
              required
            />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillLockFill />
            </InputGroup.Text>
            <FormControl
              type="password"
              placeholder="Password *"
              name="password"
              onChange={handleChange}
              required
            />
          </InputGroup>
        </div>
        <div className="row">
          <button
            type="submit"
            className="btn btn-primary"
            loading={showLoader}
            disabled={showLoader}
          >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Log in</a>
        </p>
      </form>
      {submittedData && (
        <div className="row">
          <Alert variant="primary">
            <h3>SignUp Successfully</h3>
          </Alert>
        </div>
      )}
    </div>
  );
};
export default Signup;
