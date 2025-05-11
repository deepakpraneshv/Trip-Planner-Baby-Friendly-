
import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Heart, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Baby className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BabyTrips
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Making travel with babies easier and more enjoyable for new parents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/map" className="text-sm text-gray-600 hover:text-primary">
                  Map Explorer
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-gray-600 hover:text-primary">
                  Community Tips
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-sm text-gray-600 hover:text-primary">
                  Emergency Information
                </Link>
              </li>
              <li>
                <Link to="/saved-trips" className="text-sm text-gray-600 hover:text-primary">
                  Saved Trips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Packing Checklists
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Baby-Friendly Hotels
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Travel Safety Tips
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} BabyTrips. All rights reserved. Made with <Heart className="h-4 w-4 inline text-secondary" /> for parents.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
