

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";


function Landing() {
  
  return (
    <div className="container-fluid p-5">
      <Row className="align-items-center">
        <Col
          sm={12}
          md={6}
          className="d-flex flex-column justify-content-center p-5"
        >
          <h1 className="display-4">Media Player</h1>
          <p className="lead">
            Media Player is a web application designed to enhance the way you
            manage and enjoy YouTube videos. Whether you're a content creator, a
            video enthusiast, or someone who likes to keep their favorite videos
            organized, this platform offers a seamless experience for uploading,
            playing, and categorizing YouTube videos.
          </p>
          <Link
            to="/home"
            className="btn btn-success btn-lg shadow rounded-pill mt-3"
          >
            Let's Go
          </Link>
        </Col>
        <Col sm={12} md={6} className="text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-8044271-6369983.png"
            alt="Media Player Illustration"
            className="img-fluid"
            
          />
        </Col>
      </Row>
      <div className="mt-5 p-5 bg-light">
        <h1 className="text-center text-info">Features</h1>
        <div className="d-flex flex-wrap justify-content-around mt-5">
          <Card style={{ width: "18rem" }} className="shadow-sm border-0 mb-4">
            <Card.Img
              variant="top"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNoa3ZsZ2E4Y2hzNjQ1Y3pobHdkNHczenlpYzJrcXpob2JucGMzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFmjWifrj9DJ50YaXj/giphy.webp"
              className="card-img-top"
              height={'50%'}
            />
            <Card.Body>
              <Card.Title>Manage Videos</Card.Title>
              <Card.Text>
                This section allows you to efficiently organize and oversee your
                video content. With a user-friendly interface, you can easily
                upload, edit, and delete videos, ensuring your collection is
                always up-to-date and relevant.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="shadow-sm border-0 mb-4">
            <Card.Img
              variant="top"
              src="https://cdn.dribbble.com/users/80138/screenshots/1688685/media/fa7f3804d8eb7eb6be2885ac4178c90b.gif"
              className="card-img-top"
              height={'50%'}
            />
            <Card.Body>
              <Card.Title>Upload Video</Card.Title>
              <Card.Text>
                Add new content to your platform with a simple upload process.
                Support for various video formats ensures compatibility and ease
                of use.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="shadow-sm border-0 mb-4">
            <Card.Img
              variant="top"
              src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif"
              className="card-img-top"
              height={'50%'}
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Stay organized and effortlessly keep track of your previously
                watched videos with our comprehensive Watch History feature.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Container className="container-fluid">
      <div className="mt-5 p-3">
        <Row>
          <Col md={6} className="mb-2">
            <h3 className="text-info">Simple and Fast</h3>
            <p style={{ textAlign: "justify" }}>
              Uploading videos quickly and efficiently is essential for any
              modern web application that deals with multimedia content. Here
              are some key points and strategies to achieve simple and fast
              video uploads.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <iframe
            width={'100%'}
            height={'150%'}
              className="iframe-Video"
              src="https://www.youtube.com/embed/tsu01TR7Ofk?si=JW2yjJYQqXmOYWoN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </div>
      </Container>
      
    </div>
  );
}

export default Landing;
