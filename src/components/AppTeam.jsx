import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Team() {

  const teamMembers = [
    {
      id: 1,
      name: 'Jan Kowalski',
      role: 'Główny Architekt',
      description: 'Specjalizuje się w minimalistycznych formach, dbając o idealne proporcje i zrównoważony rozwój.',
    
      imgUrl: 'https://placehold.co/400x500/DCE0E2/1A1A1A?text=Jan+K.'
    },
    {
      id: 2,
      name: 'Anna Nowak',
      role: 'Architekt Wnętrz',
      description: 'Łączy surowość betonu z ciepłem naturalnego drewna. Tworzy przestrzenie pełne światła.',
      imgUrl: 'https://placehold.co/400x500/DCE0E2/1A1A1A?text=Anna+N.'
    },
    {
      id: 3,
      name: 'Piotr Wiśniewski',
      role: 'Inżynier Krajobrazu',
      description: 'Dba o to, by każdy zaprojektowany budynek idealnie wpisywał się w otaczającą go naturę.',
      imgUrl: 'https://placehold.co/400x500/DCE0E2/1A1A1A?text=Piotr+W.'
    }
  ];

  return (
    <section id="team" className="py-5 my-5">
      <Container>
  
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Poznaj nasz zespół</h2>
          <p className="text-muted fs-5">Ludzie, którzy tworzą Twoją przestrzeń.</p>
        </div>

     
        <Row className="g-4">
          {teamMembers.map((member) => (
            <Col key={member.id} md={4}>
              
              <Card className="h-100 border-0 shadow-sm text-center bg-body">
                <Card.Img 
                  variant="top" 
                  src={member.imgUrl} 
                  alt={member.name}
                  style={{ objectFit: 'cover', height: '350px' }} 
                />
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold fs-4">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-primary fw-medium">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text className="text-muted">
                    {member.description}
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

export default Team;