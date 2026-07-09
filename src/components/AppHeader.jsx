import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import logoImage from './images/LOGO.png';

function AppHeader() {
  return (
    <Navbar expand="lg" className="py-3 bg-body shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logoImage} alt="logo" style={{ height: '40px', width: 'auto' }} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium gap-3 align-items-center">
            <Nav.Link href="#home">Strona główna</Nav.Link>
            <Nav.Link href="#team">Zespół</Nav.Link>
            <NavDropdown title="Projekty" id="projects-dropdown">
              <NavDropdown.Item href="#portfolio">Wnętrze</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio">Meble</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio">Sztuka</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio">Warsztaty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio">Biżuteria</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#portfolio">Rzemiosło</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#testimonials">Opinie</Nav.Link>
            <Nav.Link href="#contact" className="ms-lg-3">
              <button className="btn btn-primary px-4 rounded-pill">
                Skontaktuj się
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;