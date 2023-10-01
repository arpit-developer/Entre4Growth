import React, { useState } from "react";
// import "./EditProfile.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGlobal,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";

import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
export default function EditProfile({ userData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pic, setPic] = useState(
    "https://bootdey.com/img/Content/avatar/avatar7.png"
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/editprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          mobile: mobile,
          address: address,
          pic: pic,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const postDetails = (pics) => {
    if (!pics) {
      alert("Please select an image.");
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "entre4grow");
      data.append("cloud_name", "dvp2afuhl");
      fetch("https://api.cloudinary.com/v1_1/dvp2afuhl/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please select an image");
    }
  };

  return (
    <div className="container">
      <div className="main-body">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={pic}
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">
                        Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiOutlineGlobal size={25} />
                        Website
                      </h6>
                      <span className="text-secondary">
                        https://bootdey.com
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiOutlineGithub size={25} />
                        Github
                      </h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiOutlineTwitter size={25} />
                        Twitter
                      </h6>
                      <span className="text-secondary">@bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiFillInstagram size={25} />
                        Instagram
                      </h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiFillLinkedin size={25} />
                        Linkedin
                      </h6>
                      <span className="text-secondary">-</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <AiFillFacebook size={25} />
                        Facebook
                      </h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-5">
                      <h6 className="mb-0">Business Type</h6>
                      <InputGroup>
                        <InputGroup.Text>
                          <BsFillPinMapFill />
                        </InputGroup.Text>
                        <Form.Select value="" name="location">
                          <option value="">Business Type</option>
                          <option value="mumbai">LLC</option>
                          <option value="delhi">Startup</option>
                          <option value="agra">Corporation</option>
                          <option value="agra">SoleProprietorship</option>
                        </Form.Select>
                      </InputGroup>
                    </div>
                    <div className="col-sm-5">Business Location</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">Industry or Sector</div>
                    <div className="col-sm-6">Founding Date</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"></div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"></div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"></div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Country</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                      <h6 className="mb-0">State</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                      <h6 className="mb-0">City</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">About Business</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed doLorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed doLorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Team Members</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Business Model</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Funding Requirements
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Profile Picture</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => postDetails(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="submit"
                        className="btn btn-primary px-4"
                        value="Save Changes"
                      />{" "}
                      <a href="/">
                        <button className="btn btn-secondary px-4">Back</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
