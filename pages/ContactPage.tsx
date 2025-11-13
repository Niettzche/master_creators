
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-brand-mid py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hablemos de tu operación.</h1>
            <p className="mt-4 text-lg text-brand-text/80">
              Estamos listos para entender tus procesos y diseñar un plan de acción. Agenda una sesión de diagnóstico sin costo y sin compromiso.
            </p>
          </div>
          <div className="bg-brand-dark p-8 rounded-lg shadow-2xl border border-brand-light/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text/90">Nombre</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-brand-mid border border-brand-light rounded-md p-3 text-white focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-text/90">Empresa</label>
                <input type="text" name="company" id="company" required className="mt-1 block w-full bg-brand-mid border border-brand-light rounded-md p-3 text-white focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text/90">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-brand-mid border border-brand-light rounded-md p-3 text-white focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-text/90">Teléfono</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-brand-mid border border-brand-light rounded-md p-3 text-white focus:ring-brand-accent focus:border-brand-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text/90">Mensaje</label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="Cuéntanos, ¿cuál es el proceso que más te duele hoy?"
                    className="mt-1 block w-full bg-brand-mid border border-brand-light rounded-md p-3 text-white focus:ring-brand-accent focus:border-brand-accent placeholder:text-brand-text/50"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full px-8 py-3 font-bold rounded-md text-center transition-all duration-300 transform bg-brand-accent text-brand-dark hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent"
                >
                  Solicitar Sesión de Diagnóstico
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
