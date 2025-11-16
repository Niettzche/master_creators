
import React, { useState } from 'react';
import { WavyBlock, WavyBlockItem } from '@/components/ui/wavy-text-block';
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

        <div className="overflow-hidden mb-16">
          <WavyBlock className="flex flex-col gap-4">
            {["Innovation", "Automation", "Academy", "AI Lab"].map((label, index) => (
              <WavyBlockItem key={label} index={index}>
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter whitespace-nowrap">
                  {label}
                </h2>
              </WavyBlockItem>
            ))}
          </WavyBlock>
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
                  <h2 className="text-3xl font-bold text-primary mb-2">{service.title}</h2>
                  <p className="text-lg text-muted-foreground font-semibold mb-4">{service.shortDescription}</p>
                  <p className="text-lg text-muted-foreground font-light mb-6">{service.fullDescription}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Qué incluye</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {service.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Para quién es</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {service.forWhom.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Qué se lleva el cliente</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {service.clientGets.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-secondary p-4 rounded-md border border-border">
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Duración típica:</span> {service.duration}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        <span className="font-semibold text-foreground">Inversión:</span> {service.investment}
                      </p>
                    </div>
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
