import React from 'react';

function PalettePreview() {
  const textColor = '#1A1A1A'; // Ciemny grafit, o którym wspominałem

  const palettes = [
    {
      title: 'Propozycja 1:',
      colors: [
        { hex: '#F7F7F9', name: 'Złamana biel (Tło główne)' },
        { hex: '#E2E0D9', name: 'Ciepły, jasny beton (Sekcje)' },
        { hex: '#A9B3A7', name: 'Zgaszona szałwia (Akcent)' },
        { hex: '#D4B499', name: 'Jasny dąb (Przyciski)' },
      ]
    },
    {
      title: 'Propozycja 2:',
      colors: [
        { hex: '#FCFBF9', name: 'Ciepła kość słoniowa (Tło główne)' },
        { hex: '#DCE0E2', name: 'Mglista stal (Sekcje)' },
        { hex: '#C4B7A6', name: 'Piaskowiec / Taupe (Obramowania)' },
        { hex: '#BC8A76', name: 'Zgaszona terakota (Akcent)' },
      ]
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      <h2 style={{ color: textColor, marginBottom: '30px' }}>Podgląd palet kolorystycznych</h2>
      
      {palettes.map((palette, index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <h3 style={{ color: textColor, marginBottom: '20px' }}>{palette.title}</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            
            {palette.colors.map((color, cIndex) => (
              <div 
                key={cIndex} 
                style={{
                  backgroundColor: color.hex,
                  width: '250px',
                  height: '150px',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  border: '1px solid #eee'
                }}
              >
                {/* Tekst testowy, aby sprawdzić czytelność */}
                <p style={{ 
                  color: textColor, 
                  margin: '0 0 10px 0', 
                  fontSize: '14px', 
                  fontWeight: 'bold' 
                }}>
                  {color.name}
                </p>
                <p style={{ 
                  color: textColor, 
                  margin: 0, 
                  fontSize: '12px',
                  opacity: 0.8 
                }}>
                  HEX: {color.hex}
                </p>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}

export default PalettePreview;