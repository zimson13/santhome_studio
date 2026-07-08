import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

function Testimonials() {
  // Baza danych opinii
  const testimonials = [
    {
      id: 1,
      name: 'Katarzyna i Michał Z.',
      stars: 5,
      text: 'Projekt naszego domu przekroczył nasze najśmielsze oczekiwania. Zespół zadbał o każdy detal, od minimalistycznej bryły budynku po ciepłe oświetlenie wnętrza. Całość idealnie wpisuje się w otoczenie.'
    },
    {
      id: 2,
      name: 'Tomasz Kowalski',
      stars: 5,
      text: 'Pełen profesjonalizm i niesamowite wyczucie przestrzeni. Połączenie betonu i naturalnego drewna w naszym nowym biurze robi ogromne wrażenie na wszystkich klientach. Polecam z całego serca!'
    },
    {
      id: 3,
      name: 'Marta Lewandowska',
      stars: 5,
      text: 'Współpraca to czysta przyjemność. Architekci potrafili uważnie wysłuchać naszych potrzeb i przełożyć je na piękny, funkcjonalny projekt. Przestrzeń jest jasna i pełna powietrza.'
    }
  ];

  // Funkcja pomocnicza do renderowania gwiazdek
  const renderStars = (count) => {
    return '★'.repeat(count);
  };

  return (
    <section id="testimonials" className="py-5 my-5">
      <Container>
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Opinie Klientów</h2>
          <p className="text-muted fs-5">Zaufali nam w kwestii swojej przestrzeni.</p>
        </div>

        {/* Karuzela z opiniami */}
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          {/* variant="dark" zmienia strzałki na ciemne, co jest kluczowe na jasnym tle */}
          <Carousel variant="dark" indicators={true} className="text-center p-5 shadow-sm bg-white rounded-4">
            
            {testimonials.map((review) => (
              <Carousel.Item key={review.id} className="px-md-5 pb-4">
                
                {/* Gwiazdki w kolorze Primary (Zgaszona terakota) */}
                <div className="text-primary fs-3 mb-3">
                  {renderStars(review.stars)}
                </div>
                
                {/* Tekst opinii */}
                <p className="lead fst-italic mb-4 text-muted px-3">
                  "{review.text}"
                </p>
                
                {/* Imię i nazwisko */}
                <h5 className="fw-bold mb-0">{review.name}</h5>
                
              </Carousel.Item>
            ))}
            
          </Carousel>
        </div>

      </Container>
    </section>
  );
}

export default Testimonials;