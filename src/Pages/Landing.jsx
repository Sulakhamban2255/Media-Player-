import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
            Media Player is a web application designed to enhance the way
            you manage and enjoy YouTube videos. Whether you're a content
            creator, a video enthusiast, or someone who likes to keep their
            favorite videos organized, this platform offers a seamless
            experience for uploading, playing, and categorizing YouTube videos.
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
        <div className="d-flex justify-content-around mt-5">
          <Card style={{ width: "18rem" }} className="shadow-sm border-0">
            <Card.Img
              variant="top"
              height="200px"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNoa3ZsZ2E4Y2hzNjQ1Y3pobHdkNHczenlpYzJrcXpob2JucGMzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFmjWifrj9DJ50YaXj/giphy.webp"
            />
            <Card.Body>
              <Card.Title>Manage Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="shadow-sm border-0">
            <Card.Img
              variant="top"
              height="200px"
              src="https://cdn.dribbble.com/users/80138/screenshots/1688685/media/fa7f3804d8eb7eb6be2885ac4178c90b.gif"
            />
            <Card.Body>
              <Card.Title>Upload Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="shadow-sm border-0">
            <Card.Img
              variant="top"
              height="200px"
              src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif"
            />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="mt-5 p-5">
        <Row>
          <Col sm={12} md={6}>
            <h3 className="text-info">Simple and Fast</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quam expedita sit esse modi, consequuntur quisquam reprehenderit
              nisi illum molestiae quasi voluptatibus tenetur mollitia. Ratione
              est mollitia labore quod id! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla consectetur aliquid nemo
              dignissimos quasi reprehenderit ex cumque, eius, esse atque velit
              minus quod. Ea quo nostrum quam repudiandae et nemo!
            </p>
          </Col>
          <Col sm={12} md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tsu01TR7Ofk?si=JW2yjJYQqXmOYWoN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
