import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <Container className="py-5">
                <Row>
                    <Col md={4} className="mb-4">
                        <Link to="/" className="d-flex align-items-center mb-3 link-light text-decoration-none">
                            <Image
                                src="images/logo-1-removebg-preview.png"
                                className="me-2"
                                height="40"
                                alt="Logo"
                            />
                        </Link>
                        <p className="text-white">one of everything really good.</p>
                    </Col>
                    <Col md={2} className="mb-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="link-light text-decoration-none">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="link-light text-decoration-none">About</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-4">
                        <h5>Follow us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-light text-decoration-none">Instagram</a>
                            </li>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link-light text-decoration-none">Facebook</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-4">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="#" className="link-light text-decoration-none">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="link-light text-decoration-none">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row className="d-flex justify-content-between align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <p className="text-muted mb-0">&copy; 2024 Rhode Skin. All Rights Reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <Link to="#" className="text-white me-3">
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link to="#" className="text-white me-3">
                            <i className="bi bi-discord"></i>
                        </Link>
                        <Link to="#" className="text-white me-3">
                            <i className="bi bi-twitter"></i>
                        </Link>
                        <Link to="#" className="text-white me-3">
                            <i className="bi bi-github"></i>
                        </Link>
                        <Link to="#" className="text-white">
                            <i className="bi bi-dribbble"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
