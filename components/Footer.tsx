
import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, services } from '../constants';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.199 1.561-4.113 3.668-4.113 2.105 0 3.332 1.913 3.332 4.113v8.399h4.988v-10.131c0-4.87-2.72-7.042-6.299-7.042-3.58 0-5.699 2.166-5.699 2.166v-1.827h-4.988v5.65z"/>
    </svg>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
             <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
                <div className="flex space-x-1">
                    <div className="w-3 h-8 bg-primary"></div>
                    <div className="w-3 h-8 bg-ring"></div>
                </div>
                <span>Master Creators</span>
            </Link>
            <p className="text-muted-foreground">Innovación útil, tecnología humana.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-muted-foreground">contacto@mastercreators.mx</p>
            <p className="text-muted-foreground">Tiempo de respuesta &lt; 24 hrs hábiles</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/master-creators"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Aviso de privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Master Creators. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
