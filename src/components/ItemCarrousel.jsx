import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export const ItemCarrousel = () => {

  return (
    <Container fluid className="carrousel px-0">
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/img/3.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/img/6.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/assets/img/7.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}