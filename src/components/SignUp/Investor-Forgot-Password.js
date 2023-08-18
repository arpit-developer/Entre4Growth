import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import {
  BsFillEnvelopeAtFill,
} from "react-icons/bs";
import "../SignUp/Signup.css";

export const InvestorForgotPassword = () => {
  return (
    <div className="auth-wrapper">
    <h2>Login</h2>
      <form className="auth-inner">
        <h3>Forgot Password</h3>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillEnvelopeAtFill />
            </InputGroup.Text>
            <FormControl placeholder="Email Address" type="email" />
          </InputGroup>
        </div>
        <div className="row">
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};
