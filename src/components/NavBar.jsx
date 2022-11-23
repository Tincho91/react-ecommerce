import '../scss/sections/_NavBar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const NavBar = (ItemQtty) => {
    ItemQtty = 3; //palceholder

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" className="navbar shadow">
            <Container>
                <Navbar.Brand href="#home" className="navbar--brand">
                    <img
                        src="src/assets//img/logo2.png"
                        className="d-inline-block align-top navbar--brand--logo"
                        alt="Aquel Manzano Logo"
                    />
                </Navbar.Brand>
                <Nav.Link href="#cart" className="navbar--cart position-relative text-dark"><AiOutlineShoppingCart /><span className="position-absolute badge rounded-circle bg-danger">{ ItemQtty }</span></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar--btn"/>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar--toggler">
                    <Nav className="ms-auto navbar--toggler--items">
                        <Nav.Link href="#home" className="navbar--toggler--items--link text-dark">Home</Nav.Link>
                        <Nav.Link href="#link" className="navbar--toggler--items--link text-dark">Link</Nav.Link>
                        <Form className="d-flex navbar--toggler--items--form">
                            <Form.Control
                                type="search"
                                placeholder="Buscar"
                                className="me-2 navbar--toggler--items--form--search"
                                aria-label="Search"
                             />
                            <Button className="me-2 text-light navbar--toggler--items--form--btn">Buscar</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}