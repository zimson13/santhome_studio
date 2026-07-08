import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

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

          
          <Col md={6} lg={4}>
            <h6 className="text-uppercase mb-4 fw-bold">Na skróty</h6>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-3 small">
              <li>
                <a href="#home" className="text-white-50 text-decoration-none">Strona główna</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white-50 text-decoration-none">Wybrane Realizacje</a>
              </li>
              <li>
                <a href="#team" className="text-white-50 text-decoration-none">Nasz Zespół</a>
              </li>
              <li>
                <a href="#contact" className="text-white-50 text-decoration-none">Kontakt</a>
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