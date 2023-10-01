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
  BsLockFill,
  BsPatchCheckFill,
} from "react-icons/bs";
import Toast from "react-bootstrap/Toast";
import { InputGroup, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Signup.css";

export const InvestorSignup = () => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const [formData, setFormData] = useState({
    investorcompanyName: "",
    firstName: "",
    lastName: "",
    emailid: "",
    mobileNo: "",
    password: "",
    about: "",
    website: "",
    linkedin: "",
    location: "",
    investmentSector: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [show, setShow] = useState(false);
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
      const response = await fetch("http://localhost:5000/signup-investor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data sent to server:", data);
        setSubmittedData(data);
        setShow(true);
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
            <h1 className="rlheading">Register as Investor!</h1>
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
            <BsPatchCheckFill size={30} /> Woohoo, Account Created!
          </Toast.Body>
        </Toast>
      )}
      </div></div>
      <form className="auth-inner" onSubmit={handleSubmit}>
        <h3>Let's Create your account!</h3>
        <InputGroup>
          <InputGroup.Text>
            <BsBuildingCheck />
          </InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Investor Company name *"
            name="investorcompanyName"
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
              placeholder="Work Email Address"
              name="emailid"
              onChange={handleChange}
              required
            />
          </InputGroup>
        </div>
        <div className="row">
          <InputGroup>
            <InputGroup.Text>
              <BsFillTelephoneFill />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Mobile Number"
              name="mobileNo"
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
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
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
              placeholder="About Investor's Company"
              name="about"
              onChange={handleChange}
            />
          </InputGroup>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsGlobe />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Website Link"
                name="website"
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsLinkedin />
              </InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Linkedin Page Link"
                name="linkedin"
                onChange={handleChange}
              />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsFillPinMapFill />
              </InputGroup.Text>
              <Form.Select
                value={formData.location}
                name="location"
                onChange={handleChange}
              >
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="agra">Agra</option>
                <option value="prayagraj">Prayagraj</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </Form.Select>
            </InputGroup>
          </div>
          <div className="col-md-6 col-sm-6">
            <InputGroup>
              <InputGroup.Text>
                <BsBuildingsFill />
              </InputGroup.Text>

              <Form.Select
                value={formData.investmentSector}
                name="investmentSector"
                onChange={handleChange}
              >
                <option value="">Investment Sector</option>
                <option value="Advertising">Advertising</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Analytics and Visualisation">Analytics and Visualisation</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Security Solutions">Security Solutions</option>
                <option value="Sports">Sports</option>
                <option value="Travel and Tourism<">Travel and Tourism</option>
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
            required
          />
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
          Already registered? <a href="/investor-login">Log in</a>
        </p>
      </form>
      <img
        src="/investor2.png"
        alt="investor-icon"
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
export default InvestorSignup;
