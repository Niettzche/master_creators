
import React from 'react';
import { methodologyPhases } from '../constants';

const MethodologyPage: React.FC = () => {
  return (
    <div className="bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">De la Idea a la Ejecución</h1>
          <p className="mt-4 text-lg text-brand-text/80 max-w-3xl mx-auto">
            Nuestro proceso de 6 fases está diseñado para entregar valor rápido, reducir riesgos y asegurar la adopción.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-brand-light hidden md:block"></div>
          
          {methodologyPhases.map((phase, index) => (
            <div key={phase.phase} className="relative mb-12 flex flex-col md:flex-row items-center">
              {/* Timeline Point */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-mid border-4 border-brand-accent flex items-center justify-center font-bold text-white z-10 hidden md:flex">
                {phase.phase}
              </div>

              {/* Card */}
              <div className={`w-full md:w-1/2 p-6 rounded-lg bg-brand-mid border border-brand-light/50 shadow-lg ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                <div className="md:hidden text-brand-accent font-bold text-2xl mb-2">Fase {phase.phase}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-brand-text/80">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyPage;
