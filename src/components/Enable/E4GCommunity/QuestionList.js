import React from 'react'
import { Card, ListGroup,Badge,Button  } from 'react-bootstrap';
export const QuestionList = ({selectedTag }) => {

    const questions = [
        {
          title: 'How to use React Router?',
          content: 'Can someone explain how to use React Router for navigation?',
          tags: ['React', 'Routing'],
          solutions: [
            { content: 'React Router is a library...', upvotes: 10 },
            { content: 'Here\'s an example code snippet...', upvotes: 5 },
          ],
        },
        {
          title: 'Best practices for Node.js authentication?',
          content: 'What are the recommended security practices for authenticating Node.js apps?',
          tags: ['Node.js', 'Authentication', 'Security'],
          solutions: [
            { content: 'When dealing with Node.js...', upvotes: 8 },
            { content: 'Here\'s how you can implement...', upvotes: 12 },
          ],
        },
        {
            title: 'How to start a successful e-commerce business?',
            content: 'I want to start an e-commerce business. What are the key steps and strategies for success?',
            tags: ['Entrepreneurship', 'E-commerce', 'Business'],
            solutions: [
              { content: 'Choosing the right niche and target audience...', upvotes: 15 },
              { content: 'Creating a user-friendly website with secure payment...', upvotes: 10 },
            ],
          },
          {
            title: 'Tips for effective business networking?',
            content: 'What are some proven strategies for networking and building meaningful connections in the business world?',
            tags: ['Entrepreneurship', 'Networking', 'Business'],
            solutions: [
              { content: 'Attend industry events and conferences...', upvotes: 8 },
              { content: 'Use social media platforms to connect with professionals...', upvotes: 6 },
            ],
          },
          {
            title: 'Securing funding for a startup?',
            content: 'I have a startup idea but need funding to get started. What are the best options for raising capital?',
            tags: ['Entrepreneurship', 'Startups', 'Funding'],
            solutions: [
              { content: 'Consider bootstrapping and self-funding...', upvotes: 12 },
              { content: 'Pitch to angel investors and venture capitalists...', upvotes: 18 },
            ],
          },
          {
            title: 'How to build a strong brand identity for a startup?',
            content: 'I\'m launching a startup and want to establish a compelling brand identity. What steps should I take?',
            tags: ['Entrepreneurship', 'Branding', 'Startups'],
            solutions: [
              { content: 'Define your brand values, mission, and vision...', upvotes: 9 },
              { content: 'Design a memorable logo and choose consistent brand colors...', upvotes: 14 },
            ],
          },
          {
            title: 'Navigating challenges in the early stages of a business?',
            content: 'What are some common challenges that entrepreneurs face in the early stages of their businesses and how can they overcome them?',
            tags: ['Entrepreneurship', 'Challenges', 'Startups'],
            solutions: [
              { content: 'Develop a solid business plan and set clear goals...', upvotes: 11 },
              { content: 'Build a supportive network and seek mentorship...', upvotes: 7 },
            ],
          },
      ];
    const filteredQuestions = selectedTag
    ? questions.filter((question) => question.tags.includes(selectedTag))
    : questions;

  return (
    <div>
    <Card>
      <Card.Header>Questions</Card.Header>
      <ListGroup variant="flush">
        {filteredQuestions.map((question, index) => (
          <ListGroup.Item key={index}>
            <h5>{question.title}</h5>
            <p>{question.content}</p>
            <div className="solution-thread">
              {question.solutions.map((solution, solutionIndex) => (
                <div key={solutionIndex} className="solution">
                <Badge variant="success">Solution</Badge>{' '}
                <p>{solution.content}</p>
                <Button variant="outline-primary">Upvote ({solution.upvotes})</Button>
                <Button variant="outline-danger">Downvote</Button>
                <Button variant="outline-success">Mark as Accepted</Button>
                <Button variant="outline-info">Add Comment</Button>
                {/* Other interaction buttons */}
              </div>
              ))}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
    </div>
  )
}
export default QuestionList
