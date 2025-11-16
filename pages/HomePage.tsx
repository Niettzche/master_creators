
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import {
  painPoints,
  hybridStudioMix,
  services,
  differentiators,
  heroFocuses,
  innovationStudyIntro,
  impactPillars,
  whoWeAre,
  purposeVision,
  philosophyPrinciples,
  selfViewStatements,
  aiLabSteps,
  aiLabMetrics,
  insightHighlights,
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
        badge="MASTERCREATORS"
        title1="Applied innovation"
        title2="for real impact"
        description="Elevamos la operación de las empresas que ya están en marcha combinando estrategia, automatización e inteligencia artificial con ejecución impecable."
        focusList={heroFocuses}
        primaryCta={{
          label: "Agendar sesión estratégica",
          onClick: () => navigate("/contact"),
        }}
        secondaryCta={{
          label: "Ver nuestros servicios",
          onClick: () => navigate("/services"),
        }}
      />

      <Section id="somos" className="bg-secondary">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {innovationStudyIntro}
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Cómo generamos impacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card p-8 rounded-lg border border-border shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pain Section */}
      <Section className="bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Los dolores reales que resolvemos</h2>
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

      {/* Hybrid Section */}
      <Section>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">No somos una consultora tradicional.</h2>
            <p className="text-xl text-muted-foreground mt-2">Somos un estudio híbrido.</p>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card border border-border p-8 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden">
                {hybridStudioMix.map((mix, index) => {
                  const isLastItem = index === hybridStudioMix.length - 1;
                  return (
                    <div
                      key={mix.name}
                      className={`${mix.color} p-4 text-center text-white font-bold flex flex-col justify-center ${
                        isLastItem ? "dark:text-gray-900" : ""
                      }`}
                      style={{ width: `${mix.percentage}%` }}
                    >
                      <span className="text-2xl">{mix.percentage}%</span>
                      <span className="text-xs md:text-sm">{mix.name}</span>
                    </div>
                  );
                })}
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

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Quiénes somos</h2>
            <div className="space-y-4 text-muted-foreground">
              {whoWeAre.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Nuestro propósito</h3>
              <p className="text-muted-foreground">{purposeVision.purpose}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Nuestra visión</h3>
              <p className="text-muted-foreground">{purposeVision.vision}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestra filosofía</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyPrinciples.map((principle) => (
            <div key={principle.title} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Cómo nos vemos a nosotros mismos</h2>
        <div className="space-y-4 max-w-4xl mx-auto text-center text-muted-foreground">
          {selfViewStatements.map((statement, index) => (
            <p key={index} className="text-lg">{statement}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm tracking-[0.4em] text-muted-foreground mb-3">Master Creators AI Lab</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimentación con IA aplicada</h2>
            <p className="text-muted-foreground mb-6">
              Diseñamos, prototipamos y validamos agentes virtuales y micro-soluciones especializadas que prueban valor en semanas antes de escalar.
            </p>
            <div className="space-y-4">
              {aiLabSteps.slice(0, 3).map((step) => (
                <div key={step.title}>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Iteramos hasta que haya valor</h3>
            <ul className="space-y-4">
              {aiLabSteps.slice(3).map((step) => (
                <li key={step.title}>
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {aiLabMetrics.map((metric) => (
                <div key={metric.metric} className="text-center border border-border rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary">{metric.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1">{metric.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <MagnetizeButton
                className="font-semibold"
                onClick={() => navigate("/services")}
              >
                Explorar el AI Lab
              </MagnetizeButton>
            </div>
          </div>
        </div>
      </Section>

      <Section id="insights" className="bg-muted">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Insights que compartimos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightHighlights.map((insight) => (
            <div key={insight.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
              <p className="text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Próximamente publicaremos nuevas guías, casos y aprendizajes accionables.
        </p>
      </Section>

      {/* Final CTA */}
      <Section className="text-center bg-secondary">
        <h2 className="text-3xl md:text-4xl font-bold">Sesión estratégica de 45 minutos.</h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Revisamos tu contexto, identificamos 2-3 oportunidades de mejora inmediata y te proponemos las primeras líneas de acción sin compromiso.
        </p>
        <div className="mt-8 flex justify-center">
          <MagnetizeButton
            className="px-8 py-3 font-semibold"
            onClick={() => navigate("/contact")}
          >
            Agendar sesión estratégica
          </MagnetizeButton>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
