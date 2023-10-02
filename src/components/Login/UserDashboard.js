import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FaSquareOdnoklassniki, FaSquareXmark } from "react-icons/fa6";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faChartBar,
  faChartPie,
  faPercent,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
} from "react-icons/ai";

const UserDashboard = () => {
  return (
    <div>
      <Container fluid>
        <div className="header-body">
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Traffic
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">350,500</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape text-white rounded-square shadow">
                        <FontAwesomeIcon
                          icon={faChartBar}
                          size="2xl"
                          style={{ color: "red" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="sm"
                        style={{ color: "green" }}
                      />{" "}
                      3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        New users
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">2,356</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon rounded-circle shadow">
                        <FontAwesomeIcon
                          icon={faChartPie}
                          size="2xl"
                          style={{ color: "orange" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size="sm"
                        style={{ color: "red" }}
                      />{" "}
                      3.48%
                    </span>{" "}
                    <span className="text-nowrap">Since last week</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Sales
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <FontAwesomeIcon
                          icon={faUsers}
                          size="2xl"
                          style={{ color: "#c8d053" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size="sm"
                        style={{ color: "red" }}
                      />
                      1.10%
                    </span>{" "}
                    <span className="text-nowrap">Since yesterday</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Performance
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape  text-white rounded-circle shadow">
                        <FontAwesomeIcon
                          icon={faPercent}
                          size="lg"
                          style={{ color: "blue" }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="sm"
                        style={{ color: "green" }}
                      />{" "}
                      12%
                    </span>{" "}
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-dim">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/E4G/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="sm"
                        style={{ color: "green" }}
                      />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/E4G/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size="sm"
                        style={{ color: "red" }}
                      />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/E4G/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size="sm"
                        style={{ color: "red" }}
                      />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/E4G/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size="sm"
                        style={{ color: "green" }}
                      />{" "}
                      50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/E4G/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size="sm"
                        style={{ color: "red" }}
                      />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{' '}Thread</th>
                    <td>1,480</td>
                    <td><ProgressBar striped variant="secondary" animated now={40} /></td>
                  </tr> 
                  <tr>
                    <th scope="row"><AiFillFacebook/>{' '}Facebook</th>
                    <td>5,480</td>
                    <td><ProgressBar striped variant="primary" animated now={70} /></td>
                  </tr>
                  <tr>
                    <th scope="row"><AiFillGoogleSquare/>{' '}Google</th>
                    <td>4,807</td>
                    <td><ProgressBar striped variant="success" animated now={90} /></td>
                  </tr>
                  <tr>
                    <th scope="row"><AiFillInstagram/>{' '}Instagram</th>
                    <td>3,678</td>
                    <td><ProgressBar striped variant="danger" animated now={30} /></td>
                  </tr>
                  <tr>
                    <th scope="row"><FaSquareXmark/>{' '}X (Twitter)</th>
                    <td>2,645</td>
                    <td><ProgressBar striped variant="info" animated now={80} /></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
