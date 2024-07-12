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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            dolorum repellendus, rerum nam nesciunt quis accusamus debitis quam
            labore repudiandae quasi id? Facere eos, sint autem iure quidem
            fugit rem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, illum doloremque vero eos vitae distinctio ullam nemo
            molestias cupiditate fuga esse culpa impedit blanditiis perspiciatis
            cum assumenda suscipit quidem mollitia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia molestiae expedita natus
            sequi, repudiandae est asperiores consectetur voluptate velit
            reprehenderit ut qui delectus dolorem sint quam possimus ad quas
            vero?
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
