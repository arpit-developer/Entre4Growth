import React, { useState } from "react";
import {
  BsBuildingCheck,
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
  BsFillLockFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import { InputGroup, FormControl, Container } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
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
  const [show, setShow] = useState(false);
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
        setShow(true);
        setFormData({
          companyName: "",
          firstName: "",
          lastName: "",
          workemail: "",
          mobileNo: "",
          password: "",
        });
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <Container>
      <div className="auth-wrapper">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title text-center">
              <h1 className="rlheading">Register as Entrepreneur!</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            {submittedData && (
              <Toast
                className="d-inline-block m-1"
                bg={"success"}
                onClose={() => setShow(false)}
                show={show}
                delay={5000}
                autohide
              >
                <Toast.Body className={"text-white"}>
                  <BsPatchCheckFill size={30} /> Woohoo, Acount Created. Login
                  Now!
                </Toast.Body>
              </Toast>
            )}
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
              value={formData.companyName}
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
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                value={formData.workemail}
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
                value={formData.mobileNo}
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
                value={formData.password}
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
        <img
        src="/add-user.png"
        alt="signup-icon"
        className="bottom-right-image"
        style={{
          position: 'fixed',
          bottom: '10px',   // Adjust the distance from the bottom as needed
          right: '10px',    // Adjust the distance from the right as needed
          width: '100px',    // Set the width to your desired size
          height: '100px',
          opacity : 0.6,
        }}
      />
      </div>
    </Container>
  );
};
export default Signup;
