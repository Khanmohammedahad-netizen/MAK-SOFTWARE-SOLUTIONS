import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { HowWeWork } from './pages/HowWeWork';
import { WhyUs } from './pages/WhyUs';
import { Contact } from './pages/Contact';

type PageType = 'home' | 'services' | 'how-we-work' | 'why-us' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currentRegion, setCurrentRegion] = useState<string>('global');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo(0, 0);
  };

  const handleRegionChange = (region: string) => {
    setCurrentRegion(region);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currentRegion={currentRegion}
        onRegionChange={handleRegionChange}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} currentRegion={currentRegion} />
        )}
        {currentPage === 'services' && (
          <Services onNavigate={handleNavigate} currentRegion={currentRegion} />
        )}
        {currentPage === 'how-we-work' && (
          <HowWeWork onNavigate={handleNavigate} currentRegion={currentRegion} />
        )}
        {currentPage === 'why-us' && (
          <WhyUs onNavigate={handleNavigate} currentRegion={currentRegion} />
        )}
        {currentPage === 'contact' && (
          <Contact onNavigate={handleNavigate} currentRegion={currentRegion} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
