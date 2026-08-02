import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <footer className="bg-dark text-white py-5">
      <Container className="py-4">
        <Row className="gy-4">
          
          
          <Col lg={4} className="pe-lg-5">
            <h5 className="text-uppercase mb-3 fw-bold" style={{ letterSpacing: '2px' }}>
              Santhome Studio
            </h5>
            <p className="text-white-50 small lh-lg">
              Tworzymy nowoczesną architekturę i przestrzenie, które oddychają. 
              Minimalizm, światło i harmonia z naturą to nasze główne inspiracje projektowe.
            </p>
          </Col>

          
          <Col lg={4} md={6}>
            <h5 className="fw-bold mb-3">Szybkie linki</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-secondary text-decoration-none text-hover-white" style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => scrollToSection('portfolio')}>Projekty</span>
              </li>
              <li className="mb-2">
                <span className="text-secondary text-decoration-none text-hover-white" style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => scrollToSection('team')}>Zespół</span>
              </li>
              <li className="mb-2">
                <span className="text-secondary text-decoration-none text-hover-white" style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => scrollToSection('testimonials')}>Opinie</span>
              </li>
              <li className="mb-2">
                <span className="text-secondary text-decoration-none text-hover-white" style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => scrollToSection('contact')}>Kontakt</span>
              </li>
            </ul>
          </Col>

          
          <Col md={6} lg={4}>
            <h6 className="text-uppercase mb-4 fw-bold">Znajdź nas</h6>
            <address className="text-white-50 small mb-4 fst-normal lh-lg">
              Santhome Studio Architektury<br />
              ul. Przykładowa 12/34<br />
              00-000 Warszawa
            </address>
            <div className="d-flex gap-4 small fw-medium">
              <a href="#" className="text-white-50 text-decoration-none">Instagram</a>
              <a href="#" className="text-white-50 text-decoration-none">Facebook</a>
              <a href="#" className="text-white-50 text-decoration-none">Behance</a>
            </div>
          </Col>

        </Row>

    
        <hr className="my-5 border-secondary opacity-25" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span className="text-white-50 small">
              &copy; {currentYear} Santhome Studio. Wszelkie prawa zastrzeżone.
            </span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-white-50 small text-decoration-none me-3">Polityka prywatności</a>
            <a href="#" className="text-white-50 small text-decoration-none">Regulamin</a>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
}

export default Footer;