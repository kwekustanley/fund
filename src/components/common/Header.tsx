import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/grants', label: 'GRANTS' },
    { path: '/funded-projects', label: 'FUNDED PROJECTS' },
    { path: '/resources', label: 'RESOURCES' },
    { path: '/media', label: 'NEWS & EVENTS' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {/* Ghana Coat of Arms */}
              <img
                src="/coat.png"
                alt="Ghana Coat of Arms"
                className="w-12 h-12 rounded-full object-cover mr-0"
              />
              {/* GNRF Logo (clickable to Home) */}
              <div className="flex items-center">
                <Link to="/">
                  <img
                    src="/gnrf.png"
                    alt="GNRF Logo"
                    className="w-40 h-40 object-contain mr-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Opportunities Button */}
            <Link
              to="/opportunities"
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              OPPORTUNITIES
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Opportunities Button for mobile */}
            <Link
              to="/opportunities"
              className="block w-full text-center mt-2 px-4 py-2 bg-red-600 text-white rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
