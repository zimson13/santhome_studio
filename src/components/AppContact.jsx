import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact() {
  const teamContacts = [
    { id: 1, name: 'Jan Kowalski', role: 'Główny Architekt', phone: '+48 111 222 333' },
    { id: 2, name: 'Anna Nowak', role: 'Architekt Wnętrz', phone: '+48 444 555 666' },
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <Container className="py-5">
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Kontakt</h2>
          <p className="text-muted fs-5">Porozmawiajmy o Twoim projekcie.</p>
        </div>

        <Row className="g-5">
          
          {/* LEWA KOLUMNA: Dane kontaktowe i Formularz */}
          <Col lg={6} className="pe-lg-5">
            
            <Row className="mb-5">
              <Col sm={6} className="mb-4 mb-sm-0">
                <h5 className="fw-bold mb-3">Napisz do nas</h5>
                <a href="mailto:biuro@santhomestudio.pl" className="text-primary text-decoration-none fw-medium">
                  biuro@santhomestudio.pl
                </a>
              </Col>
              <Col sm={6}>
                <h5 className="fw-bold mb-3">Zadzwoń</h5>
                <ul className="list-unstyled mb-0">
                  {teamContacts.map((person) => (
                    <li key={person.id} className="mb-2">
                      <span className="fw-medium text-dark">{person.name}:</span> <br/>
                      <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="text-muted text-decoration-none small">
                        {person.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

            {/* FORMULARZ KONTAKTOWY */}
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
              <h4 className="fw-bold mb-4">Wyślij wiadomość</h4>
              
              {/* WAŻNE: W atrybucie action wpisz adres email, na który mają przychodzić wiadomości */}
              <Form action="https://formsubmit.co/matiq2006.zapasowe@gmail.com" method="POST">
                
                {/* Konfiguracja FormSubmit (ukryte pola) */}
                <input type="hidden" name="_subject" value="Nowa wiadomość ze strony Santhome Studio!" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Powrót na Twoją stronę po wysłaniu: */}
                <input type="hidden" name="_next" value="https://zimson13.github.io/santhome_studio/" />

                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="small fw-medium text-muted">Imię i nazwisko</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Jan Kowalski" required className="bg-light border-0 py-2" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="small fw-medium text-muted">Adres e-mail</Form.Label>
                  <Form.Control type="email" name="email" placeholder="jan@example.com" required className="bg-light border-0 py-2" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="small fw-medium text-muted">Treść wiadomości</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Opisz krótko swój projekt..." required className="bg-light border-0 py-2" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                  Wyślij wiadomość
                </Button>
              </Form>
            </div>

          </Col>

          {/* PRAWA KOLUMNA: Mapa Google */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden position-relative h-100" style={{ backgroundColor: '#DCE0E2', minHeight: '400px' }}>
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