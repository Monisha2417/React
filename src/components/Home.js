
import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images\skin-1_LE_auto_x2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Natural Skincare Products</h3>
            <p>Discover the best natural skincare solutions for your skin type.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images\pic-2_LE_auto_x2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Achieve Radiant Skin</h3>
            <p>Our products are designed to give you a glowing complexion.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/skin-3_LE_auto_x2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Pure Ingredients</h3>
            <p>Only the best ingredients for your skin.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <h1 className="text-center">Welcome to Our Skincare Store</h1>
        <p className="text-center">Find the perfect products to pamper your skin.</p>

        {/* Promotional Section */}
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="images/moisturizer.png" />
              <Card.Body>
                <Card.Title>Hydrating Moisturizers</Card.Title>
                <Card.Text>
                  Keep your skin hydrated and soft with our range of natural moisturizers.
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="images\rhode-2_LE_auto_x2.jpg" />
              <Card.Body>
                <Card.Title>Revitalizing Serums</Card.Title>
                <Card.Text>
                  Discover serums that will rejuvenate and brighten your skin.
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="images\rhode-3_LE_auto_x2.jpg" />
              <Card.Body>
                <Card.Title>Nourishing Face Masks</Card.Title>
                <Card.Text>
                  Treat your skin to our nourishing and detoxifying face masks.
                </Card.Text>
                <Button variant="primary">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row className="mt-5">
          <Col>
            <h2 className="text-center">What Our Customers Are Saying</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "I've never felt my skin so soft and healthy. These products are amazing!" - Jane D.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "The best skincare products I've ever used. Highly recommend!" - Sarah W.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Text>
                  "My skin has never looked better. I'm so glad I found this store." - Emily R.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
