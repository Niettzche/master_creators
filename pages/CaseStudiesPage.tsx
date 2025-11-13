
import React from 'react';
import { caseStudies } from '../constants';
import Button from '../components/Button';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Innovación Aplicada: Historias Reales</h1>
          <p className="mt-4 text-lg text-brand-text/80 max-w-3xl mx-auto">
            No vendemos humo tecnológico, entregamos sistemas que funcionan y generan resultados medibles.
          </p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-brand-mid rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-brand-light flex flex-col justify-center items-center p-8 text-center">
                <p className="text-sm uppercase tracking-widest text-brand-text/70">Resultado</p>
                <p className="text-6xl font-bold text-brand-accent my-2">{study.metric}</p>
                <p className="text-white text-lg font-semibold">{study.client}</p>
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                <div>
                  <h3 className="font-semibold text-brand-accent">El Problema:</h3>
                  <p className="text-brand-text/80 mt-1 mb-4">{study.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-accent">La Solución:</h3>
                  <p className="text-brand-text/80 mt-1 mb-4">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-accent">El Impacto:</h3>
                  <p className="text-brand-text/80 mt-1">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <div className="mt-6">
            <Button to="/contact" variant="primary">Agenda tu diagnóstico</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
