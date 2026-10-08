import { useState } from 'react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Homepage } from './components/homepage';
import { AboutUs } from './components/about-us';
import { Teams } from './components/teams';
import { FixturesResults } from './components/fixtures-results';
import { NewsMedia } from './components/news-media';
import { Membership } from './components/membership';
import { Contact } from './components/contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutUs />;
      case 'teams':
        return <Teams />;
      case 'fixtures':
        return <FixturesResults />;
      case 'news':
        return <NewsMedia />;
      case 'membership':
        return <Membership />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}