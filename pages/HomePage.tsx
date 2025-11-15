
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import {
  painPoints,
  hybridStudioMix,
  services,
  differentiators,
} from "../constants";

const icons: { [key: string]: React.FC<{className: string}> } = {
  Repeat: ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 11a8 8 0 0114.93-2.93l.07.07M20 13a8 8 0 01-14.93 2.93l-.07-.07" /></svg>),
  Chaos: ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M5.636 18.364l-1.414 1.414M12 3v1m0 16v1m-8-9H3m18 0h-1m-4.243-4.243l-1.414-1.414M18.364 18.364l-1.414-1.414M5.636 5.636L4.222 4.222m14.142 14.142L19.778 19.778" /></svg>),
  Chart: ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
  Snail: ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
};

const DifferentiatorIcons: { [key: string]: React.FC<{className: string}> } = {
  'Impacto en Semanas, no Años': ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  'Honestidad Radical': ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
  'Ejecutamos, no solo Recomendamos': ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
  'A favor de tu gente': ({className}) => (<svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
};

const Section: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className = "", id }) => (
    <section id={id} className={`py-20 sm:py-28 bg-background text-foreground ${className}`}>
        <div className="container mx-auto px-6">
            {children}
        </div>
    </section>
);

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroGeometric
        badge="Master Creators"
        title1="Elevamos tu visión digital"
        title2="con sistemas inteligentes"
      />

      {/* Pain Section */}
      <Section className="bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">¿Tu operación se siente así?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point) => {
            const Icon = icons[point.icon];
            return (
              <div key={point.title} className="bg-card p-8 rounded-lg border border-border text-center transition-transform transform hover:-translate-y-2 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Solution Section */}
      <Section>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">No somos una consultora tradicional.</h2>
            <p className="text-xl text-muted-foreground mt-2">Somos un estudio híbrido.</p>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card border border-border p-8 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden">
                {hybridStudioMix.map((mix, index) => (
                  <div key={mix.name} className={`${mix.color} p-4 text-center text-white font-bold flex flex-col justify-center`} style={{ width: `${mix.percentage}%` }}>
                    <span className="text-2xl">{mix.percentage}%</span>
                    <span className="text-xs md:text-sm">{mix.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo que hacemos por ti.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-card p-8 rounded-lg border border-border transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
              <Link to="/services" className="text-primary font-semibold flex items-center group-hover:underline">
                Saber más 
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiators Section */}
       <Section className="bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué Master Creators?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {differentiators.map((d) => {
            const Icon = DifferentiatorIcons[d.title];
            return (
              <div key={d.title} className="text-center">
                  <div className="flex justify-center mb-4">
                     <div className="bg-card p-4 rounded-full border-2 border-primary">
                         <Icon className="w-8 h-8 text-primary"/>
                     </div>
                 </div>
                <h3 className="text-xl font-bold">{d.title}</h3>
                <p className="text-muted-foreground mt-2">{d.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center bg-secondary">
        <h2 className="text-3xl md:text-4xl font-bold">Deja de operar "como siempre".</h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo la innovación aplicada puede cambiar el rumbo de tu operación.
        </p>
        <div className="mt-8 flex justify-center">
          <MagnetizeButton
            className="px-8 py-3 font-semibold"
            onClick={() => navigate("/contact")}
          >
            Inicia tu Diagnóstico Operativo
          </MagnetizeButton>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
