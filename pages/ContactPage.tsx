
import React from 'react';
import { MagnetizeButton } from '@/components/ui/magnetize-button';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Hablemos de tu operación.</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos listos para entender tus procesos y diseñar un plan de acción. Agenda una sesión de diagnóstico sin costo y sin compromiso.
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
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">Teléfono</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Mensaje</label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="Cuéntanos, ¿cuál es el proceso que más te duele hoy?"
                    className="mt-1 block w-full bg-secondary border border-border rounded-md p-3 text-foreground focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-muted-foreground"
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
    </div>
  );
};

export default ContactPage;
