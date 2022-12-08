import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

const Item = (props) => {
  return (
    <Col xs={6} md={4}>
      <Card style={{ width: "18rem" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[0]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[1]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.imagen[2]}
              alt="Third slide"
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

export default Item;
