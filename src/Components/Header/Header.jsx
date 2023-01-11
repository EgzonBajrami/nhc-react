import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import './Header.css';
import NHCLogo from '../../Assets/NHCLogo.png'


function Header() {
  return (
    <Navbar className="header-container" expand="lg">
      <Container>
        <Navbar.Brand className="logo-wrapper" href="/">
            <img src={NHCLogo} alt="nhc-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profili i kompanisë</Nav.Link>
            <NavDropdown title="Shërbimet" id="basic-nav-dropdown">
              <NavDropdown.Item href="/vizitat">Vizitat Mjeksore</NavDropdown.Item>
              <NavDropdown.Item href="/diagnoza">Diagnoza</NavDropdown.Item>
              <NavDropdown.Item href="/aksidenti">Shpenzimet e aksidentit personal</NavDropdown.Item>
              <NavDropdown.Item href="/oftamologjia">Oftamologjia</NavDropdown.Item>
              <NavDropdown.Item href="/dentare">Dentare</NavDropdown.Item>
              <NavDropdown.Item href="/fiziatrike">Fiziatrike</NavDropdown.Item>
              <NavDropdown.Item href="/nutricioniste">Nutricioniste</NavDropdown.Item>
              <NavDropdown.Item href="/ambulanca">Ambulanca</NavDropdown.Item>
          
            </NavDropdown>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;