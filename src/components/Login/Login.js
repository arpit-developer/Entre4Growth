import React, { useState } from "react";
import { InputGroup, FormControl, Container } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
  BsLockFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import Toast from "react-bootstrap/Toast";
import "../SignUp/Signup.css";

export const Login = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    workemail: "",
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
      fetch("http://localhost:5000/login-user", {
        method: "POST",
        crossDomain: "true",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        // if (response.ok) {
        //   const data = await response.json();
        //   console.log("Data sent to server:", data);
        //   alert("login done");
        //   window.localStorage.setItem("token", data.data);
        //     window.localStorage.setItem("loggedIn", true);
        //     window.location.href = "./userDetails";
        // } else {
        //   console.error("Failed to send data to server");
        // }
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setShowLoader(true);
          if (data.status === "ok") {
            setShowLoader(true);
            setShow(true);
            setSubmittedData(data);
            
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "./userdetails";
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
              <h1>Log In to Unlock New World </h1>
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
                name="workemail"
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
              disabled={showLoader}
            >
              {showLoader ? "Logging In..." : "Log In"}
            </button>
          </div>
          {/* {token && <p>Token: {token}</p>} */}
          <p className="forgot-password text-left">
            Don't have an account? <a href="/signup">Sign Up!</a>
          </p>
          <p className="forgot-password text-right">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </form>
        <img
        src="/enter.png"
        alt="login-icon"
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
      
    </Container>
  );
};
