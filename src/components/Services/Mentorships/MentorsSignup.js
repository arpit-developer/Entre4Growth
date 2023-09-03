import React, { useState } from "react";
import {
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
  BsFillLockFill,
  BsPatchCheckFill,
  BsFileText,
} from "react-icons/bs";
import {FaRegIdCard} from 'react-icons/fa';
import { InputGroup, FormControl, Container } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

export const MentorsSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    jobPost:"",
    email:"",
    mobileNo:"",
    password:"",
    aboutInfo:"",
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
      const response = await fetch("http://localhost:5000/signup-mentor", {
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
            fullName: "",
            jobPost:"",
            email:"",
            mobileNo:"",
            password:"",
            aboutInfo:"",
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
              <h1 className="rlheading">Register as Mentor!</h1>
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
          <h3>Let's Create new Account</h3>
          <InputGroup>
            <InputGroup.Text>
              <BsFillPersonFill />
            </InputGroup.Text>
            <FormControl
              type="text"
              value={formData.fullName}
              placeholder="Full Name *"
              name="fullName"
              onChange={handleChange}
              required
            />
          </InputGroup>
          <div className="row">
              <InputGroup>
                <InputGroup.Text>
                  <FaRegIdCard />
                </InputGroup.Text>
                <FormControl
                  type="text"
                  value={formData.jobPost}
                  placeholder="Designation *"
                  name="jobPost"
                  onChange={handleChange}
                  required
                />
              </InputGroup>
          </div>
          <div className="row">
            <InputGroup>
              <InputGroup.Text>
                <BsFillEnvelopeAtFill />
              </InputGroup.Text>
              <FormControl
                type="email"
                value={formData.email}
                placeholder="Email Address *"
                name="email"
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
          <InputGroup>
            <InputGroup.Text>
              <BsFileText />
            </InputGroup.Text>
            <FormControl
              as="textarea"
              rows={3}
              placeholder="About yourself"
              name="aboutInfo"
              onChange={handleChange}
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
              Create Account
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/mentorships/mentor-login">Log in</a>
          </p>
        </form>
      </div>
    </Container>
  );
};
export default MentorsSignup;
