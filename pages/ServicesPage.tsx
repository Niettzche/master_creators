
import React, { useState } from 'react';
import { services } from '../constants';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-6 py-20 sm:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Servicios Modulares para tu Evolución</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestros servicios son modulares y se adaptan a tus necesidades, desde el diagnóstico hasta la implementación y adopción.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <ul className="flex flex-col space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-6 py-4 rounded-md transition-colors duration-300 font-semibold border border-transparent ${
                      activeTab === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-foreground hover:bg-secondary border-border'
                    }`}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-card p-8 rounded-lg border border-border min-h-[400px] shadow-sm">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${activeTab === index ? 'block' : 'hidden'}`}
                >
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground font-light mb-6">{service.fullDescription}</p>

                  <h3 className="text-xl font-semibold mb-3">Componentes Clave:</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                    {service.components.map((component, i) => (
                      <li key={i}>{component}</li>
                    ))}
                  </ul>

                  <div className="bg-secondary p-4 rounded-md border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-1">Valor para tu Empresa:</h3>
                    <p className="text-muted-foreground italic">"{service.value}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
            <h2 className="text-3xl font-bold">¿Ves cómo podemos ayudarte?</h2>
            <p className="text-lg text-muted-foreground mt-2">Mira los resultados que hemos generado para otros.</p>
            <div className="mt-8">
                <Button to="/case-studies" variant="secondary">Ver Casos de Éxito</Button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
