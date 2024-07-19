import React, { useState } from "react";
import { FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddVideo.css";
import { addVideo } from "../Services/allApis";
import { toast } from "react-toastify";

function AddVideo({ setadd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video, setVideo] = useState({
    videoId: "",
    caption: "",
    image: "",
    videoUrl: "",
  });

  console.log(video);
  const submitForm = async () => {
    const { videoId, caption, image, videoUrl } = video;
    if (!videoId || !caption || !image || !videoUrl) {
      toast.info("Entered the Invalid inputs !! ");
    } else {
      //changing watch url to embed URL //
      const code = videoUrl.split("v=")[1];
      const embedUrl = `https://www.youtube.com/embed/${code}?si=zyEwpjZB2pj5NRfW&autoplay=1`;
      video.videoUrl = embedUrl;
      const result = await addVideo(video);
      console.log(result);
      if (result.status === 201) {
        setadd(result);
        handleClose();
        setVideo({ videoId: "", caption: "", image: "", videoUrl: "" });
        toast.success("Video Uploaded Successfully");
      } else {
        console.log(result);
        toast.error("Video Uploaded Failed ");
      }
    }
  };
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
              onChange={(e) => {
                setVideo({ ...video, videoId: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="1" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingCaption"
              label="Caption"
              onChange={(e) => {
                setVideo({ ...video, caption: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="Caption" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingImage"
              label="Video Image URL"
              onChange={(e) => {
                setVideo({ ...video, image: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="ImageUrl" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingVideo"
              label="YouTube Video URL"
              onChange={(e) => {
                setVideo({ ...video, videoUrl: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="VideoUrl" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitForm} variant="success">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddVideo;
