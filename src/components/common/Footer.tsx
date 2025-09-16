import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Ghana Coat of Arms and GNRF Logo */}
              <img
                src="/coat.png"
                alt="Ghana Coat of Arms"
                className="w-10 h-10 rounded-full object-cover"
              />
              <img
                src="/gnrf.png"
                alt="GNRF Logo"
                className="w-20 h-20 object-contain ml-2"
              />
              <div>
                <div className="text-xl font-bold" style={{ fontFamily: 'nanotech, sans-serif' }}>
                  GHANA NATIONAL RESEARCH FUND
                </div>
                <div className="text-sm text-gray-300">Advancing Research Excellence</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Supporting innovative research and development initiatives that contribute to Ghana's 
              socio-economic transformation and national development goals.
            </p>
            <div className="flex space-x-1">
              <div className="w-6 h-4 bg-red-600"></div>
              <div className="w-6 h-4 bg-yellow-400"></div>
              <div className="w-6 h-4 bg-green-600"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About GNRF
                </Link>
              </li>
              <li>
                <Link to="/grants" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Grants
                </Link>
              </li>
              <li>
                <Link to="/funded-projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Funded Projects
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors duration-200">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-gray-300">Ministry of Education</div>
                  <div className="text-gray-300">Accra, Ghana</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div className="text-gray-300">+233 (0) 302 123 456</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div className="text-gray-300">info@gnrf.gov.gh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Ghana National Research Fund. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;