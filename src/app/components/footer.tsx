import clubLogo from "../../imports/WhatsApp_Image_2026-10-08_at_10.49.35.jpeg";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'teams', label: 'Teams' },
    { id: 'fixtures', label: 'Fixtures' },
    { id: 'news', label: 'News' },
    { id: 'membership', label: 'Membership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={clubLogo} alt="Gacharage Sports Club crest" className="h-14 w-14 rounded-full object-cover bg-white" />
              <div>
                <h3>Gacharage FC</h3>
                <p className="text-sm opacity-75">Est. 1984</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Building champions on and off the field. Join our community and be part of our legacy.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onPageChange(link.id)}
                  className="block text-sm opacity-90 hover:text-accent hover:opacity-100 transition-all text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Gacharage Grounds, Murang'a County</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+254707124292" className="hover:text-accent">+254 707 124292</a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:gacharagesportsclub@gmail.com" className="break-all hover:text-accent">gacharagesportsclub@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div>
            <h4 className="mb-4">Sponsorship</h4>
            <p className="text-sm opacity-90">
              We are actively looking for sponsors to support Gacharage FC.
            </p>
            <a
              href="https://wa.me/254707124292?text=Hi%2C%20I%27m%20interested%20in%20sponsoring%20Gacharage%20FC."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-accent hover:underline"
            >
              Discuss Sponsorship
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Gacharage FC. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}