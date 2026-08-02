import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Tabs, Tab, Pagination } from 'react-bootstrap';
// Importujemy naszego klienta Sanity
import { client, urlFor } from '../sanity'; 

function AppProjects() {
  const categories = ['Wnętrze', 'Meble', 'Sztuka', 'Warsztaty', 'Biżuteria', 'Rzemiosło'];

  // Zmieniamy stan allProjects na pustą tablicę z początku
  const [allProjects, setAllProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('Wnętrze');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  // POBIERANIE DANYCH Z SANITY
  useEffect(() => {
    // Zapytanie GROQ (język Sanity) - pobierz wszystkie dokumenty typu "project"
    client.fetch(`*[_type == "project"]`)
      .then((data) => {
        setAllProjects(data); // Zapisujemy pobrane dane do stanu
      })
      .catch(console.error);
  }, []); // Pusta tablica = wywołaj tylko raz po załadowaniu strony

  const handleTabSelect = (k) => {
    setActiveTab(k);
    setCurrentPage(1);
  };

  const filteredProjects = allProjects.filter(p => p.category === activeTab);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section id="portfolio" className="py-5 bg-light">
      <Container className="py-4">
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Nasze Prace</h2>
          <p className="text-muted fs-5">Wybierz kategorię, aby zobaczyć realizacje.</p>
        </div>

        <Tabs
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mb-5 justify-content-center border-bottom-0 custom-tabs"
        >
          {categories.map(category => (
            <Tab eventKey={category} title={category} key={category}>
              
              <Row xs={1} md={2} lg={3} className="g-4 mb-4">
                {currentProjects.length > 0 ? (
                  currentProjects.map((project) => (
                    // Jako klucz używamy Sanity ID (_id)
                    <Col key={project._id}>
                      <Link to={`/project/${project._id}`} className="text-decoration-none text-dark">
                      <Card className="h-100 border-0 shadow-sm bg-body">
                        {/* Jeśli projekt ma zdjęcie, renderujemy je przez funkcję urlFor */}
                        {project.mainImage && (
                          <Card.Img 
                            variant="top" 
                            src={urlFor(project.mainImage).width(600).url()} 
                            alt={project.title}
                            style={{ height: '250px', objectFit: 'cover' }}
                          />
                        )}
                        <Card.Body className="p-4">
                          <Card.Title className="fw-bold">{project.title}</Card.Title>
                          <Card.Text className="text-muted small">
                            {project.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Link>
                    </Col>
                  ))
                ) : (
                  <Col className="w-100 text-center py-5">
                    <p className="text-muted">Brak projektów w tej kategorii.</p>
                  </Col>
                )}
              </Row>

              {totalPages > 1 && (
                <Pagination className="justify-content-center mt-5">
                  <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
                  {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => setCurrentPage(idx + 1)}>
                      {idx + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
                </Pagination>
              )}
            </Tab>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}

export default AppProjects;