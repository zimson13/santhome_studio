import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { client, urlFor } from '../sanity';

function AppProjectDetails() {
  // Pobieramy ID projektu z paska adresu URL
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Odpytujemy Sanity o projekt, którego _id zgadza się z naszym z URL
    window.scrollTo(0, 0); // Zawsze przewijaj na górę po wejściu na podstronę
    client.fetch(`*[_type == "project" && _id == $id][0]`, { id })
      .then((data) => setProject(data))
      .catch(console.error);
  }, [id]);

  // Ekran ładowania, dopóki dane nie przyjdą z Sanity
  if (!project) {
    return (
      <Container className="py-5 text-center my-5">
        <h4 className="text-muted">Ładowanie projektu...</h4>
      </Container>
    );
  }

  return (
    <section className="py-5 my-5">
      <Container>
        
        {/* Przycisk powrotu do strony głównej */}
        <Link to="/">
          <Button variant="outline-secondary" className="mb-5 rounded-pill px-4">
            &larr; Wróć do portfolio
          </Button>
        </Link>

        <Row className="g-5 align-items-center">
          
          {/* LEWA STRONA: Zdjęcie */}
          <Col lg={6}>
            {project.mainImage && (
              <Image 
                src={urlFor(project.mainImage).width(800).url()} 
                alt={project.title} 
                fluid 
                className="rounded-4 shadow-sm w-100"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
            )}
          </Col>

          {/* PRAWA STRONA: Opis */}
          <Col lg={6}>
            <div className="mb-2 text-primary fw-medium text-uppercase tracking-wider">
              {project.category}
            </div>
            <h1 className="display-5 fw-bold mb-4">{project.title}</h1>
            <p className="lead text-muted lh-lg mb-4">
              {project.description}
            </p>
            
            {/* Tutaj w przyszłości możesz dodać więcej pól z Sanity, 
                np. rok realizacji, materiały, cena itp. */}
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AppProjectDetails;