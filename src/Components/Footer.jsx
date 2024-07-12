import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            and fast video uploads
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
          <p>mediaplayer@gmail.com</p>
          <p>+356 6498 4656</p>
          <div className="mt-3">
            <textarea
              name="contactMessage"
              className="form-control mb-2"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-warning w-100">Send</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
