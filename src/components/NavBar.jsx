import '../scss/sections/_NavBar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const NavBar = (ItemQtty) => {
    ItemQtty = 3; //palceholder

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" className="navbar shadow">
            <Container>
                <Navbar.Brand className="navbar--brand">
                    <Link to='/'>
                        <img
                            src="src/assets/img/logo2.png"
                            className="d-inline-block align-top navbar--brand--logo"
                            alt="Aquel Manzano Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav.Link href="#cart" className="navbar--cart position-relative text-dark"><AiOutlineShoppingCart /><span className="position-absolute badge rounded-circle bg-danger">{ ItemQtty }</span></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar--btn"/>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar--toggler">
                    <Nav className="ms-auto navbar--toggler--items">
                        <Navbar.Text><Link to='/category/1' className="navbar--toggler--items--link text-dark">Categoría 1</Link></Navbar.Text>
                        <Navbar.Text><Link to='/category/2' className="navbar--toggler--items--link text-dark">Categoría 2</Link></Navbar.Text>
                        <Navbar.Text><Link to='/category/3' className="navbar--toggler--items--link text-dark">Categoría 3</Link></Navbar.Text>
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