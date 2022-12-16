import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {

  return (
    <Col xs={6} md={4} lg={3} className="">
      <Card className="mb-4 itemCard">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[0]}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[1]}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[2]}
              alt=""
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.precio}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemDetail;
