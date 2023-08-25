import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
  BsLockFill,
} from "react-icons/bs";
import "../SignUp/Signup.css";

export const InvestorLogin = () => {
  return (
    <div className="auth-wrapper">
    <h2>Login</h2>
      <form className="auth-inner">
        <h3>Log In as Investor!</h3>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl placeholder="Email Address" type="email" />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsLockFill />
            </InputGroup.Text>
            <FormControl placeholder="Password" type="password" />
          </InputGroup>
        </div>
        <div className="mb-3">
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
            Submit
          </button>
        </div>
        <p className="forgot-password text-left">
        Don't have an account? <a href="/investor-signup">Sign Up!</a>
        </p>
        <p className="forgot-password text-right">
           <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};
