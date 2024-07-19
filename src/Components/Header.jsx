import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="container-fluid bg-dark text-light border rounded">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"} className="text-decoration-none">
              {" "}
              <div>
                <i
                  className="fa-solid fa-cloud-arrow-up fa-bounce"
                  style={{ color: "#74C0FC" }}
                ></i>

                <span className="h3" style={{ color: "white" }}>
                  Media Player{" "}
                </span>
              </div>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
