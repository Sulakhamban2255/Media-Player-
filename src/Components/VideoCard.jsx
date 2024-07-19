import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { addHistory, deleteVideo } from "../Services/allApis";
import { toast } from "react-toastify";

function VideoCard({ videoItem, setdel, cat}) {
  const [show, setShow] = useState(false);

  const delData = async () => {
    const result = await deleteVideo(videoItem.id);
    console.log(result);
    if (result.status === 200) {
      setdel(result);
      toast.success("Video Deleted Successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  console.log(videoItem);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    const dt = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const data = {
      videoId: videoItem.id,
      caption: videoItem.caption,
      image: videoItem.image,
      videoUrl: videoItem.videoUrl,
      datetime: dt.toLocaleString("en-US", options),
    };
    const res = await addHistory(data);
    console.log(res);
    setShow(true);
  };
  const handleDrag = (ev, val) => {
    console.log("dragging");
    console.log(val);
    ev.dataTransfer.setData("videoItem", JSON.stringify(val));
  };

  return (
    <>
      <Card
        style={
          cat
            ? { width: "100%", backgroundColor: "black", color: "white" }
            : { width: "18rem", backgroundColor: "black", color: "white" }
        }
        className="mb-4 p-2 "
        draggable="true"
        onDragStart={(e) => {
          handleDrag(e, videoItem);
        }}
      >
        <Card.Img
          variant="top"
          style={{
            cursor: "pointer",
            height: "200px",
            objectFit: "cover",
            width: "100%",
          }}
          src={videoItem.image}
          onClick={handleShow}
        />
        <Card.Body className="d-flex justify-content-between align-items-center ">
          <Card.Title>{videoItem.caption}</Card.Title>
          {!cat && (
            <Button onClick={delData} variant="light" className="delete-button">
              <i className="fa-solid fa-trash" style={{ color: "#e70404" }}></i>
            </Button>
          )}
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{videoItem.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={videoItem.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Watch Again</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoCard;
