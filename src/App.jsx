import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppHero from './components/AppHero';
import AppProjects from './components/AppProjects';
import AppTeam from './components/AppTeam';
import AppTestimonials from './components/AppTestimonials';
import AppContact from './components/AppContact';
import AppFooter from './components/AppFooter';
import AppProjectDetails from './components/AppProjectDetails'; // Import nowej podstrony

// Wydzielamy stronę główną (Landing Page) do osobnego komponentu wewnątrz
function HomePage() {
  return (
    <>
      <AppHero />
      <AppProjects />
      <AppTeam />
      <AppTestimonials />
      <AppContact />
    </>
  );
}

function App() {
  return (
    // HashRouter jest wymagany, aby routing działał poprawnie na GitHub Pages
    <BrowserRouter basename="/santhome_studio/">
      {/* Header i Footer są poza Routes - będą widoczne na każdej podstronie */}
      <AppHeader />
      
      <Routes>
        {/* Ścieżka podstawowa - ładuje całą stronę główną */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ścieżka podstrony - ładuje tylko szczegóły projektu. 
            Zmienna :id wyłapie unikalny kod projektu z Sanity */}
        <Route path="/project/:id" element={<AppProjectDetails />} />
      </Routes>

      <AppFooter />
    </BrowserRouter>
  );
}

export default App;