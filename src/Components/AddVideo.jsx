import React, { useState } from "react";
import { FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddVideo.css";

function AddVideo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="add-video-container">
      <button className=" add-video-btn" onClick={handleShow}>
        <i
          className="fa-regular fa-square-plus fa-2x"
          style={{ color: "#63E6BE" }}
        ></i>
      </button>
      <Modal show={show} onHide={handleClose} backdrop="true" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <div className="form-container">
            <FloatingLabel
              className="mb-3"
              controlId="floatingVideoID"
              label="Video ID"
            >
              <Form.Control type="text" placeholder="1" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingCaption"
              label="Caption"
            >
              <Form.Control type="text" placeholder="Caption" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingImage"
              label="Video Image URL"
            >
              <Form.Control type="text" placeholder="ImageUrl" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingVideo"
              label="YouTube Video URL"
            >
              <Form.Control type="text" placeholder="VideoUrl" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddVideo;
