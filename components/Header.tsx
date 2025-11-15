import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";
import Button from "./Button";

const Logo: React.FC = () => (
  <Link
    to="/"
    className="flex items-center space-x-3 text-xl md:text-2xl font-semibold tracking-tight text-white"
  >
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/15">
      <div className="h-2 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-rose-400" />
    </div>
    <span className="uppercase text-xs tracking-[0.4em] text-white/70">Master Creators</span>
  </Link>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: "#f4f4f5",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Button to="/contact" variant="primary">
            Agendar Diagnóstico
          </Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-md border border-white/20 bg-white/5"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-[#030303] border-t border-white/5">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-white/70 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                {link.name}
              </NavLink>
            ))}
            <Button
              to="/contact"
              variant="primary"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Agendar Diagnóstico
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
