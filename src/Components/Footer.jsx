import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light py-5">
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-4">
          <h4 className="text-warning">Media Player</h4>
          <p style={{ textAlign: "justify" }}>
            Welcome to our Media Player website, the ultimate destination for
            all your video browsing, storing, and uploading needs. Whether
            you're a video enthusiast, content creator, or simply looking to
            enjoy the best of online media, our platform offers a seamless and
            feature-rich experience. Uploading videos quickly and efficiently is
            essential for any modern web application that deals with multimedia
            content. Here are some key points and strategies to achieve simple
            and fast video uploads.
          </p>
        </Col>
        <Col md={3} className="mb-4">
          <h4 className="text-warning">Links</h4>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">
              <Link className="text-light text-decoration-none" to="/">
                Landing
              </Link>
            </li>
            <li className="mb-2">
              <Link className="text-light text-decoration-none" to="/home">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link className="text-light text-decoration-none" to="/history">
                Watch History
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h4 className="text-warning">Contact Us</h4>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> mediaplayer@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +356 6498 4656
          </p>
          <div className="mt-3">
            <textarea
              name="contactMessage"
              className="form-control mb-2"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-warning w-100">Send</button>
          </div>
          <div className="mt-4">
            <a href="https://facebook.com" className="text-light me-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-light">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <p className="mb-0">&copy; 2024 Media Player. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
