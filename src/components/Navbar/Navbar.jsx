import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import CartWidget from '../CartWidget/CartWidget';

function nuketNavbar() {
  return (
    <>
      <Navbar  className='nuket' variant='dark'>
        <Container>
            <Navbar.Brand className='brandTitle' href="#home">NUKET</Navbar.Brand>
            <Nav>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
      </Navbar>
      </>
  );
}

export default nuketNavbar;



/* const menu = ['Servicios', 'Nosotros', 'Portfolio', 'Contacto'];
          {menu.map(menuItem => {
            return <li><a>{menuItem}</a></li> */