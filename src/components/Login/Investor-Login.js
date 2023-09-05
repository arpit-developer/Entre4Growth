import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
  BsLockFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import Toast from "react-bootstrap/Toast";
import "../SignUp/Signup.css";

export const InvestorLogin = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    emailid: "",
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
      fetch("http://localhost:5000/login-investor", {
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
            window.localStorage.setItem("investorLoggedIn", true);
            window.location.href = "./investor-dashboard";
          }
        });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <h1>Log In </h1>
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
        <h3>Log In as Investor!</h3>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl
              placeholder="Email Address"
              type="email"
              name="emailid"
              onChange={handleChange}
              required
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
              onChange={handleChange}
              required
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
            disabled={showLoader}
          >
            {showLoader ? "Logging In..." : "Log In"}
          </button>
        </div>
        <p className="forgot-password text-left">
          Don't have an account? <a href="/investor-signup">Sign Up!</a>
        </p>
        <p className="forgot-password text-right">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
      <img
        src="/investor1.png"
        alt="Investor1"
        className="bottom-right-image"
        style={{
          position: 'fixed',
          bottom: '10px',   // Adjust the distance from the bottom as needed
          right: '10px',    // Adjust the distance from the right as needed
          width: '100px',    // Set the width to your desired size
          height: '100px',
          opacity : 0.4,
        }}
      />
    </div>
  );
};
