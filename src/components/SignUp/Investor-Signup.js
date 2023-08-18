import React, { useState } from "react";
import {
  BsBuildingCheck,
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsFillTelephoneFill,
  BsFileText,
  BsGlobe,
  BsLinkedin,
  BsFillPinMapFill,
  BsBuildingsFill,
} from "react-icons/bs";

import { InputGroup, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Signup.css";

export const InvestorSignup = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="auth-wrapper">
      <h2>Register as Investor!</h2>
      <form className="auth-inner">
        <h3>Let's Create your account!</h3>
        <InputGroup>
          <InputGroup.Text>
            <BsBuildingCheck />
          </InputGroup.Text>
          <FormControl placeholder="Investor Company name *" />
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
            <FormControl placeholder="Work Email Address" />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillTelephoneFill />
            </InputGroup.Text>
            <FormControl placeholder="Mobile Number" />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFileText />
            </InputGroup.Text>
            <FormControl placeholder="About Investor's Company" />
          </InputGroup>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsGlobe />
              </InputGroup.Text>
              <FormControl placeholder="Website Link" />
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsLinkedin />
              </InputGroup.Text>
              <FormControl placeholder="Linkedin Page" />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPinMapFill />
              </InputGroup.Text>
              <Form.Select aria-label="Default select example">
                <option>Location </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsBuildingsFill />
              </InputGroup.Text>
              <Form.Select aria-label="Default select example">
                <option>Investment Sector</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions and Privacy Policy"
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/investor-login">Log in</a>
        </p>
      </form>
    </div>
  );
};
export default InvestorSignup;
