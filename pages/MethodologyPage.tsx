
import React from "react";
import { motion } from "framer-motion";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { methodologyPhases } from "../constants";

const MethodologyPage: React.FC = () => {
  return (
    <>
      <BackgroundPaths title="De la idea a la ejecución" />
      <div className="bg-background text-foreground py-20 sm:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nuestro mapa metodológico
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Seis fases diseñadas para entregar valor rápido, reducir riesgos y
              asegurar la adopción en toda tu organización.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {methodologyPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="relative mb-12 flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <motion.div
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center font-bold text-primary-foreground z-10 hidden md:flex"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  {phase.phase}
                </motion.div>

                <motion.div
                  className={`w-full md:w-1/2 p-6 rounded-lg bg-card border border-border shadow-lg ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left md:ml-auto"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                >
                  <div className="md:hidden text-primary font-bold text-2xl mb-2">
                    Fase {phase.phase}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MethodologyPage;
