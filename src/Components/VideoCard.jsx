import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./VideoCard.css"; // Assuming you have this CSS file

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="video-card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ cursor: "pointer" }}
          src="https://i.ytimg.com/vi/RLzC55ai0eo/maxresdefault.jpg"
          onClick={handleShow}
          className="card-img"
        />
        <Card.Body>
          <Card.Title>Heeriye</Card.Title>
          <Button variant="light" className="delete-button">
            <i className="fa-solid fa-trash" style={{ color: "#e70404" }}></i>
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/RLzC55ai0eo?si=iCDhkQSVwFyxlLtN&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Watch Again</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoCard;
