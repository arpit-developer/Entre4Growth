import React, { useState } from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
  BsLockFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import Toast from "react-bootstrap/Toast";

export const MentorsLogin = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      fetch("http://localhost:5000/login-mentor", {
        method: "POST",
        crossDomain: "true",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === "ok") {
            setSubmittedData(data);
            setShow(true);
            setShowLoader(true);
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "./mentor-dashboard";
          }
        });
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
              <h1>Log In for Mentor </h1>
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
                delay={3000}
                autohide
              >
                <Toast.Body className={"text-white"}>
                  <BsPatchCheckFill size={30} /> Login,Successfully!
                </Toast.Body>
              </Toast>
            )}
          </div>
        </div>
        <form className="auth-inner" onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div className="row">
            <InputGroup>
              <InputGroup.Text>
                <BsFillEnvelopeAtFill />
              </InputGroup.Text>
              <FormControl
                placeholder="Email Address"
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div className="row">
            <InputGroup>
              <InputGroup.Text>
                <BsLockFill />
              </InputGroup.Text>
              <FormControl
                placeholder="Password"
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
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
          <div className="row">
            <button
              type="submit"
              className="btn btn-primary"
              loading={showLoader}
              disabled={showLoader}
            >
              Log In
            </button>
          </div>
          <p className="forgot-password text-left">
            Don't have an account? <a href="/mentorships/mentor-signup">Sign Up!</a>
          </p>
          <p className="forgot-password text-right">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </form>
      </div>
    </Container>
  );
};
