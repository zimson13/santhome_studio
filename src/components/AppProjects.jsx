import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Pagination } from 'react-bootstrap';

function Projects() {
  const categories = ['Wnętrze', 'Meble', 'Sztuka', 'Warsztaty', 'Biżuteria', 'Rzemiosło'];

  // Generator fikcyjnych danych na potrzeby demonstracji paginacji
  // W prawdziwym życiu te dane będą pochodzić z bazy lub zewnętrznego pliku
  const allProjects = [
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `w-${i}`,
      title: `Projekt Wnętrza ${i + 1}`,
      category: 'Wnętrze',
      imgUrl: `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop&sig=${i}`,
      description: 'Nowoczesna przestrzeń zaprojektowana z dbałością o detale.'
    })),
    { id: 'm-1', title: 'Stół Dębowy', category: 'Meble', imgUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop', description: 'Ręcznie robiony stół z litego dębu.' },
    { id: 's-1', title: 'Rzeźba z Brązu', category: 'Sztuka', imgUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop', description: 'Abstrakcyjna forma przestrzenna.' },
  ];

  // Stany (State) komponentu
  const [activeTab, setActiveTab] = useState('Wnętrze');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Siatka 3x3

  // Funkcja resetująca stronę przy zmianie zakładki
  const handleTabSelect = (k) => {
    setActiveTab(k);
    setCurrentPage(1);
  };

  // Logika filtrowania i paginacji
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

        {/* Zakładki (Tabs) */}
        <Tabs
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mb-5 justify-content-center border-bottom-0 custom-tabs"
        >
          {categories.map(category => (
            <Tab eventKey={category} title={category} key={category}>
              
              {/* Siatka 3x3 */}
              <Row xs={1} md={2} lg={3} className="g-4 mb-4">
                {currentProjects.length > 0 ? (
                  currentProjects.map((project) => (
                    <Col key={project.id}>
                      <Card className="h-100 border-0 shadow-sm bg-body">
                        <Card.Img 
                          variant="top" 
                          src={project.imgUrl} 
                          alt={project.title}
                          style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Card.Body className="p-4">
                          <Card.Title className="fw-bold">{project.title}</Card.Title>
                          <Card.Text className="text-muted small">
                            {project.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col className="w-100 text-center py-5">
                    <p className="text-muted">Brak projektów w tej kategorii.</p>
                  </Col>
                )}
              </Row>

              {/* Paginacja Bootstrap */}
              {totalPages > 1 && (
                <Pagination className="justify-content-center mt-5">
                  <Pagination.Prev 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1} 
                  />
                  {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item 
                      key={idx + 1} 
                      active={idx + 1 === currentPage}
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages} 
                  />
                </Pagination>
              )}

            </Tab>
          ))}
        </Tabs>
        
      </Container>
    </section>
  );
}

export default Projects;