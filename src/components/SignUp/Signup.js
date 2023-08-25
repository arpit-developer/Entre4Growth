import React from "react";
import {
  BsBuildingCheck,
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { InputGroup, FormControl } from "react-bootstrap";

import "./Signup.css";

export const Signup = () => {
  return (
    <div className="auth-wrapper">
      <h2>Register as Entrepreneur!</h2>
      <form className="auth-inner">
        <h3>Let's Hop in to create new Account</h3>
        <InputGroup>
          <InputGroup.Text>
            <BsBuildingCheck />
          </InputGroup.Text>
          <FormControl placeholder="Startup Company name *" />
        </InputGroup>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
              <FormControl placeholder="First Name *" />
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPersonFill />
              </InputGroup.Text>
              <FormControl placeholder="Last Name *" />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl placeholder="Work Email Address *" />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillPhoneFill />
            </InputGroup.Text>
            <FormControl placeholder="Mobile Number *" />
          </InputGroup>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
};
export default Signup;
