import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Item = (props) => {

  return (
    <Col xs={6} md={4} lg={3} className="">
      <Card className="mb-4 itemCard">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[0]}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[1]}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[2]}
              alt=""
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <Link to={`/details/${props.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
