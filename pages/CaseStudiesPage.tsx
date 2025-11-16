
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { caseStudies } from '../constants';
import { MagnetizeButton } from '@/components/ui/magnetize-button';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';

const CaseStudiesPage: React.FC = () => {
  const navigate = useNavigate();
  const testimonialData = caseStudies.map((study, index) => ({
    author: {
      name: study.client,
      handle: study.title,
    },
    text: `${study.problem} ${study.solution} ${study.result}`,
  }));

  return (
    <div className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <TestimonialsSection
          title="Transformaciones reales con resultados medibles"
          description="Nuestros clientes comparten cómo la innovación aplicada ha mejorado sus operaciones y resultados."
          testimonials={testimonialData}
          className="mt-24"
        />

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <div className="mt-6 flex justify-center">
            <MagnetizeButton
              className="px-8 py-3 font-semibold"
              onClick={() => navigate('/contact')}
            >
              Agenda tu diagnóstico
            </MagnetizeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
