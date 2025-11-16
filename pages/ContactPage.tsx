
import React from 'react';
import { motion } from 'framer-motion';
import { MagnetizeButton } from '@/components/ui/magnetize-button';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <motion.div
      className="bg-background text-foreground py-20 sm:py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Agenda tu sesión estratégica de 45 minutos.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Revisamos tu situación actual sin que tengas que preparar nada, identificamos cuellos de botella y te compartimos primeras líneas de acción sin compromiso.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Nombre</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-muted-foreground">Empresa</label>
                <input type="text" name="company" id="company" required className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-muted-foreground">Cargo / Posición</label>
                <input type="text" name="role" id="role" required className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">Teléfono</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="context" className="block text-sm font-medium text-muted-foreground">Cuéntanos brevemente tu situación</label>
                <textarea 
                    name="context" 
                    id="context" 
                    rows={4} 
                    placeholder="¿Cómo opera hoy tu empresa y qué te gustaría mejorar?"
                    className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground"
                    required
                ></textarea>
              </div>
              <div>
                <label htmlFor="main-pain" className="block text-sm font-medium text-muted-foreground">¿Cuál es el principal dolor operativo que te gustaría resolver?</label>
                <textarea 
                    name="main-pain" 
                    id="main-pain" 
                    rows={3} 
                    placeholder="Ej. procesos manuales, falta de visibilidad, retrasos en atención a clientes"
                    className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground"
                    required
                ></textarea>
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-muted-foreground">¿Qué te hizo buscar información sobre innovación aplicada?</label>
                <textarea 
                    name="motivation" 
                    id="motivation" 
                    rows={3} 
                    placeholder="Contexto, urgencia o cambios recientes en la organización"
                    className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground"
                    required
                ></textarea>
              </div>
              <div>
                <MagnetizeButton
                  type="submit"
                  className="w-full font-bold"
                >
                  Solicitar Sesión de Diagnóstico
                </MagnetizeButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
