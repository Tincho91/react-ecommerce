import { Container, Row, Col, Button, Carousel, Tabs, Tab, Table } from 'react-bootstrap';


const ItemDetail = (props) => {

  return (
    <Container className="itemDetailContainer">
      <Row>
        <Col xs={12} md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={props.images[0]} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={props.images[1]} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={props.images[2]} alt="" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="itemTitle text-center">{props.title}</h1>
          <p className="itemShortDescription">{props.description}</p>
          <h2 className="itemPrice">${props.price}</h2>
          <Button className="addToCartBtn" onClick={() => addToCart(item)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="description" className="itemDetailsTabs">
            <Tab
              eventKey="description"
              title="Descripcion"
              className="itemDetailsTabs--description"
            >
              <p className="itemDetailsTabs--description_text">
                {props.longDescription}
              </p>
            </Tab>
            <Tab
              eventKey="specifications"
              title="Especificaciones"
              className="itemDetailsTabs--specifications"
            >
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Marca</td>
                    <td>{props.brand}</td>
                  </tr>
                  <tr>
                    <td>Modelo</td>
                    <td>{props.model}</td>
                  </tr>
                  <tr>
                    <td>Dimensiones</td>
                    <td>{props.dimensions}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>{props.material}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

const addToCart = (item) => {
  // Add the item to the shopping cart
};
export default ItemDetail;
