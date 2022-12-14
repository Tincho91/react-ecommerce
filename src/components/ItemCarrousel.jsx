import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaStore } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

export const ItemCarrousel = () => {

  return (
    <Container fluid className="carrousel px-0">
      <Image className="main-logo" fluid roundedCircle src="src/assets/img/logo.png"/>
      <LinkContainer to="/category/">
        <Button className="main-button justify-content-center align-items-center">Ir a la Tienda! <FaStore className="main-button--icon ms-3"/></Button>
      </LinkContainer>
      <Carousel fade controls={false} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="src/assets/img/3.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="src/assets/img/6.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="src/assets/img/7.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}