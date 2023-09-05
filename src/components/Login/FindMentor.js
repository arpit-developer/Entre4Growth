import React, { useState } from "react";
import { Container, Form, Card, Row } from "react-bootstrap";

export const FindMentor = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleReset = () => {
    setQuery("");
    setResults([]);
  };
  const handleSearch = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(
        `http://localhost:5000/mentors?query=${query}`
      );
      if (!response.ok) {
        console.error("Request failed with status:", response.status);
        return;
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("Response is not in JSON format");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <div className="viewport">
      <Container>
        <h1>Search Mentors</h1>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Mentors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
                disabled={loading}
              >
                Search
              </button>{" "}
              <button
                type="button"
                className="btn btn-info"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
        <Row xs={1} md={2} className="g-4">
          {results.map((mentor) => (
            <Card
              key={mentor._id}
              className="mb-3"
              style={{ width: "18rem", margin: "10px" }}
            >
              <Card.Body>
                <Card.Title>{mentor.fullName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {mentor.jobPost}
                </Card.Subtitle>
                <Card.Text>
                  Mobile No: {mentor.mobileNo}
                  <br />
                  About: {mentor.aboutInfo}
                </Card.Text>
                {/* <Card.Link href="#">{mentor.website}</Card.Link>
              <Card.Link href="#">{mentor.linkedin}</Card.Link> */}
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default FindMentor;
