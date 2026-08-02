import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Dodajemy importy z routera
import logoImage from './images/LOGO.png';

function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  // Inteligentna funkcja przewijająca
  const scrollToSection = (sectionId) => {
    // Jeśli jesteśmy na podstronie projektu, najpierw wracamy na stronę główną
    if (location.pathname !== '/') {
      navigate('/');
      // Czekamy ułamek sekundy aż strona główna się załaduje i wtedy przewijamy
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Jeśli już jesteśmy na stronie głównej, po prostu przewijamy
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="py-3 bg-body shadow-sm" sticky="top">
      <Container>
        {/* Logo wraca na samą górę strony głównej */}
        <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo(0, 0)}>
          <Image src={logoImage} alt="logo" style={{ height: '40px', width: 'auto' }} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-medium gap-3 align-items-center">
            
            <Nav.Link as={Link} to="/" onClick={() => window.scrollTo(0, 0)}>
              Strona główna
            </Nav.Link>
            
            <NavDropdown title="Projekty" id="projects-dropdown">
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Wnętrze</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Meble</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Sztuka</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Warsztaty</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Biżuteria</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Rzemiosło</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => scrollToSection('portfolio')}>Wszystkie projekty</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => scrollToSection('team')} style={{ cursor: 'pointer' }}>
              Zespół
            </Nav.Link>
            
            <Nav.Link onClick={() => scrollToSection('testimonials')} style={{ cursor: 'pointer' }}>
              Opinie
            </Nav.Link>
            
            <Nav.Link onClick={() => scrollToSection('contact')} className="ms-lg-3" style={{ cursor: 'pointer' }}>
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