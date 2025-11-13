
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../constants';
import Button from './Button';

const Logo: React.FC = () => (
  <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
    <div className="flex space-x-1">
      <div className="w-3 h-8 bg-brand-accent"></div>
      <div className="w-3 h-8 bg-brand-light"></div>
    </div>
    <span>Master Creators</span>
  </Link>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#00F5D4',
  };

  return (
    <header className="bg-brand-mid/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-brand-text hover:text-brand-accent transition-colors duration-300 font-medium"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button to="/contact" variant="primary">Agendar Diagnóstico</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-brand-text hover:text-brand-accent transition-colors duration-300 font-medium text-center py-2"
              >
                {link.name}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" fullWidth onClick={() => setIsOpen(false)}>Agendar Diagnóstico</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
