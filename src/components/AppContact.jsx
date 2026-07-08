import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Contact() {
  // Lista kontaktowa z numerami do poszczególnych członków zespołu
  const teamContacts = [
    { id: 1, name: 'Jan Kowalski', role: 'Główny Architekt', phone: '+48 111 222 333' },
    { id: 2, name: 'Anna Nowak', role: 'Architekt Wnętrz', phone: '+48 444 555 666' },
    { id: 3, name: 'Piotr Wiśniewski', role: 'Inżynier Krajobrazu', phone: '+48 777 888 999' }
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <Container className="py-5">
        
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Kontakt</h2>
          <p className="text-muted fs-5">Porozmawiajmy o Twoim projekcie.</p>
        </div>

        <Row className="g-5 align-items-center">
          
         
          <Col lg={5} className="pe-lg-5">
            
    
            <div className="mb-5">
              <h4 className="fw-bold mb-2">Napisz do nas</h4>
              <p className="text-muted mb-1">Odpowiadamy zazwyczaj w ciągu 24 godzin.</p>
              <a href="mailto:biuro@santhomestudio.pl" className="fs-4 text-primary text-decoration-none fw-medium">
                biuro@santhomestudio.pl
              </a>
            </div>

     
            <div>
              <h4 className="fw-bold mb-4">Telefony bezpośrednie</h4>
              <ul className="list-unstyled mb-0">
                {teamContacts.map((person) => (
                  <li key={person.id} className="mb-3 border-bottom pb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold fs-5">{person.name}</div>
                        <div className="text-muted small">{person.role}</div>
                      </div>
                      <a 
                        href={`tel:${person.phone.replace(/\s/g, '')}`} 
                        className="text-decoration-none text-dark fw-medium fs-5 text-nowrap"
                      >
                        {person.phone}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          </Col>


          <Col lg={7}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden position-relative" style={{ backgroundColor: '#DCE0E2', height: '450px' }}>
              
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1269.829591729662!2d21.74490841910884!3d49.63467422709972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1783538002561!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, zIndex: 2 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja biura"
              >
              </iframe>

            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Contact;