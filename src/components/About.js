
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">About Our Skincare Brand</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Image src="images/charity.jpg" alt="Our Brand" fluid />
        </Col>
        <Col md={6}>
          <h2>Our Commitment to Giving Back</h2>
          <p>
            At Rhode, we're passionate about making a positive impact in the world. That's why we donate
            5% of our profits to charitable organizations each year. From environmental conservation to social justice,
            education to healthcare, we're committed to supporting causes that matter.
          </p>
          <p>
            By choosing Rhode, you're not just investing in high-quality skincare products – you're also
            supporting a company that is dedicated to giving back. Together, we can make a difference and create a
            brighter future for generations to come.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
