import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Willa Nordycka',
      category: 'Architektura Zewnętrzna',
      imgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      description: 'Nowoczesna, minimalistyczna bryła idealnie wpisana w leśny krajobraz. Zastosowanie surowego drewna i dużych przeszkleń.'
    },
    {
      id: 2,
      title: 'Apartament w Chmurach',
      category: 'Wnętrza',
      imgUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1964&auto=format&fit=crop',
      description: 'Jasne, otwarte przestrzenie z dominacją szkła i betonu. Projekt nastawiony na maksymalne doświetlenie światłem dziennym.'
    },
    {
      id: 3,
      title: 'Dom nad Jeziorem',
      category: 'Architektura Zewnętrzna',
      imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description: 'Harmonijne połączenie z naturą. Elewacja z ciemnego drewna i kamienia naturalnego.'
    },
    {
      id: 4,
      title: 'Loft Industrialny',
      category: 'Wnętrza',
      imgUrl: 'https://images.unsplash.com/photo-1600566753086-00f18efc204b?q=80&w=2070&auto=format&fit=crop',
      description: 'Surowość oryginalnej cegły zderzona z ciepłem dębowej podłogi w centrum tętniącego życiem miasta.'
    }
  ];

  return (
    
    <section id="portfolio" className="py-5 bg-light">
      <Container className="py-4">
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Wybrane Realizacje</h2>
          <p className="text-muted fs-5">Architektura, która inspiruje.</p>
        </div>
        
        
        <Row className="g-4">
          {projects.map((project) => (
            
            <Col key={project.id} md={6}>
              <Card className="h-100 border-0 shadow-sm bg-body">
                <Card.Img 
                  variant="top" 
                  src={project.imgUrl} 
                  alt={project.title}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4 text-start">
                  
                  <div className="text-primary fw-bold text-uppercase mb-2" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                    {project.category}
                  </div>
                  <Card.Title className="fw-bold fs-3 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    </section>
  );
}

export default Projects;