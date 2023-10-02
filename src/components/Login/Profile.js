import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineGlobal,
  AiFillLinkedin,
} from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";

const Profile = ({ userData }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Profile</h1>
        </div>
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />

                    {/* <button className="btn btn-primary btn-sm" type="button">
                      Upload new image
                    </button> */}
                    <div className="mt-3">
                      <h4>{userData.firstName}</h4>
                      <p className="text-secondary mb-1">
                        {userData.companyName}
                      </p>
                      <p className="text-muted font-size-sm">
                        {userData.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <AiOutlineGlobal size={25} />{' '}
                      Website
                    </h6>
                    <span className="text-secondary">-</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <AiOutlineGithub size={25} />
                      Github
                    </h6>
                    <span className="text-secondary">-</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <AiOutlineTwitter size={25} />
                      Twitter
                    </h6>
                    <span className="text-secondary">-</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <AiFillInstagram size={25} />
                      Instagram
                    </h6>
                    <span className="text-secondary">-</span>
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
                    <span className="text-secondary">-</span>
                  </li>
                </ul>
              </div>
              {/* <div className="card mt-3">
              <div className="col-sm-12 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          Business info
                        </i>
                      </h6>
                      <small>Web Design</small>
                      <ProgressBar striped variant="info" animated now={60} />
                      <small>Website Markup</small>
                      <ProgressBar
                        striped
                        variant="success"
                        animated
                        now={40}
                      />
                      <small>One Page</small>
                      <ProgressBar striped variant="danger" animated now={50} />
                      <small>Mobile Template</small>
                      <ProgressBar
                        striped
                        variant="secondary"
                        animated
                        now={30}
                      />
                      <small>Backend API</small>
                      <ProgressBar
                        striped
                        variant="warning"
                        animated
                        now={90}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Company Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userData.companyName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">
                      Business Type 
                    </div>
                    <div className="col-sm-6">Business Location</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">Industry or Sector</div>
                    <div className="col-sm-6">Founding Date</div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userData.firstName}&nbsp;{userData.lastName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userData.workemail}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {userData.mobileNo}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Country</h6>
                    </div>
                    <div className="col-sm-4 text-secondary">
                    <h6 className="mb-0">State</h6>{userData.address}
                    </div>
                    <div className="col-sm-4 text-secondary">
                    <h6 className="mb-0">City</h6>{userData.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">About Business</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do   
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
                        <Accordion.Header>Funding Requirements</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info btn-lg" href="/edit-profile">
                        Edit Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
