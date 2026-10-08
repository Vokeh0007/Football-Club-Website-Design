import clubLogo from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.35.jpeg";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={clubLogo} alt="Gacharage Sports Club crest" className="h-11 w-11 rounded-full object-cover bg-white" />
            <div>
              <h1 className="font-bold text-xl">Gacharage FC</h1>
              <p className="text-xs opacity-75">Est. 1984</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`transition-colors hover:text-accent ${
                  currentPage === item.id ? 'text-accent border-b-2 border-accent' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="secondary" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => onPageChange('membership')}
            >
              Join Club
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:text-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary border-t border-primary-foreground/20">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-left w-full transition-colors hover:text-accent ${
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