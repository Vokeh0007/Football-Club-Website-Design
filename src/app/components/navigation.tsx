import clubLogo from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.35.jpeg";
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    const closeMenuOnDesktop = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    window.addEventListener('resize', closeMenuOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeMenuOnEscape);
      window.removeEventListener('resize', closeMenuOnDesktop);
    };
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'teams', label: 'Teams' },
    { id: 'fixtures', label: 'Fixtures & Results' },
    { id: 'news', label: 'News & Media' },
    { id: 'membership', label: 'Membership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          {/* Logo */}
          <div className="flex min-w-0 items-center space-x-3">
            <img
              src={clubLogo}
              alt="Gacharage Sports Club crest"
              className="h-10 w-10 shrink-0 rounded-full bg-white object-cover sm:h-11 sm:w-11"
            />
            <div>
              <h1 className="text-lg font-bold sm:text-xl">Gacharage FC</h1>
              <p className="text-xs opacity-75">Est. 1984</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                aria-current={currentPage === item.id ? 'page' : undefined}
                className={`whitespace-nowrap px-1 py-2 text-xs xl:text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                  currentPage === item.id ? 'text-accent border-b-2 border-accent' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="secondary" 
              className="bg-accent hover:bg-accent/90 text-white whitespace-nowrap"
              onClick={() => onPageChange('membership')}
            >
              Join Club
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-foreground hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary border-t border-primary-foreground/20">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  className={`block min-h-11 px-3 py-2 text-left w-full transition-colors hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                    currentPage === item.id ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="secondary" 
                  className="bg-accent hover:bg-accent/90 text-white w-full"
                  onClick={() => {
                    onPageChange('membership');
                    setIsMenuOpen(false);
                  }}
                >
                  Join Club
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}