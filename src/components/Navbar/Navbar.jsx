import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.scss';

const section = [
  { label: "Servicios", link: "/servicios" },
  { label: "Nosotros", link: "/nosotros" },
  { label: "Portfolio", link: "/portolio" },
  { label: "Marketing", link: "/category/marketing" },
  { label: "Desarrollo", link: "/category/desarrollo" },
];

function nuketNavbar() {
  return (
    <>
      <Navbar  className='nuket' variant='dark'>
        <Container>
            <Navbar.Brand className='brandTitle' as={Link} to="/home">NUKET</Navbar.Brand>
            <Nav>
              {section.map((e) => (
                <NavLink key={e.label} as={Link} to={e.link}>{e.label}</NavLink>
              ))}
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