import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

function Hero() {
  
  const imageStyle = {
    height: '75vh',
    objectFit: 'cover',
    width: '100%',
    filter: 'brightness(70%)'
  };

  return (
    <Carousel fade controls={false} indicators={true} className="mb-5" id='home'>
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Nowoczesna willa z zewnątrz"
          style={imageStyle}
        />
        <Carousel.Caption className="pb-5 mb-5 text-start w-75 mx-auto">
          <h1 className="display-3 fw-bold text-white mb-3">Przestrzeń, która oddycha.</h1>
          <p className="lead text-white-50 mb-4 fs-4">
            Tworzymy architekturę w harmonii z naturą. Odkryj nasze najnowsze projekty domów jednorodzinnych.
          </p>
          <Button variant="primary" size="lg" className="px-5 py-3 rounded-0">
            Zobacz portfolio
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
          alt="Minimalistyczne wnętrze"
          style={imageStyle}
        />
        <Carousel.Caption className="pb-5 mb-5 text-start w-75 mx-auto">
          <h1 className="display-3 fw-bold text-white mb-3">Wnętrza pełne światła.</h1>
          <p className="lead text-white-50 mb-4 fs-4">
            Skandynawski minimalizm spotyka się z funkcjonalnością. Zobacz, jak projektujemy przestrzenie do życia.
          </p>
          <Button variant="light" size="lg" className="px-5 py-3 rounded-0">
            Poznaj nasz zespół
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Hero;