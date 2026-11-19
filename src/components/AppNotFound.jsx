import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNotFound() {
  return (
    <section className="py-5 my-5">
      <Container className="text-center py-5">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h2 className="fw-bold mb-3">Nie znaleziono strony</h2>
        <p className="text-muted fs-5 mb-4">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" className="rounded-pill px-4">
            Wróć na stronę główną
          </Button>
        </Link>
      </Container>
    </section>
  );
}

export default AppNotFound;