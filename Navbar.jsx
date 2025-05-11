
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Baby, Map, Users, AlertCircle, BookmarkCheck, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, signOut } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Baby className="w-5 h-5 mr-2" /> },
    { name: 'Map Explorer', path: '/map', icon: <Map className="w-5 h-5 mr-2" />, protected: true },
    { name: 'Community Tips', path: '/community', icon: <Users className="w-5 h-5 mr-2" />, protected: true },
    { name: 'Emergency Info', path: '/emergency', icon: <AlertCircle className="w-5 h-5 mr-2" />, protected: true },
    { name: 'Saved Trips', path: '/saved-trips', icon: <BookmarkCheck className="w-5 h-5 mr-2" />, protected: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const filteredNavLinks = navLinks.filter(link => !link.protected || isAuthenticated);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Baby className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BabyTrips
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {filteredNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <Button
                variant="ghost"
                className="flex items-center text-gray-600 hover:bg-gray-100"
                onClick={signOut}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="flex items-center text-gray-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/signin">
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {filteredNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <button
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </button>
            ) : (
              <Link
                to="/signin"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
