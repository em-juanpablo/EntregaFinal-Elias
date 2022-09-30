import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">gpIT</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Nuevo Proyecto</Nav.Link>
                        <Nav.Link href="">Proyectos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <CartWidget />
        </div>
    )
}

export default NavBar;