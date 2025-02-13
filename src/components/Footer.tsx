import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@finitsolutions.be" className="hover:text-blue-400 transition-colors">
                  info@finitsolutions.be
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+32495702314" className="hover:text-blue-400 transition-colors">
                  +32 (0)495 702 314
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Antwerpen, België</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Oplossingen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/business-process-suite" className="hover:text-blue-400 transition-colors">
                  Business Process Suite
                </Link>
              </li>
              <li>
                <Link to="/analytics-platform" className="hover:text-blue-400 transition-colors">
                  Analytics Platform
                </Link>
              </li>
              <li>
                <Link to="/integration-hub" className="hover:text-blue-400 transition-colors">
                  Integration Hub
                </Link>
              </li>
              <li>
                <Link to="/performance-engine" className="hover:text-blue-400 transition-colors">
                  Performance Engine
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Over Ons</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="hover:text-blue-400 transition-colors">
                  Ontdek FinitSolutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FinitSolutions. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}