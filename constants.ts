
export const navLinks = [
  { name: 'Servicios', path: '/services' },
  { name: 'Metodología', path: '/methodology' },
  { name: 'Casos de Éxito', path: '/case-studies' },
];

export const painPoints = [
    { 
        icon: 'Repeat', 
        title: 'Procesos Repetitivos', 
        description: 'Tu equipo pierde horas en tareas manuales y Excel.' 
    },
    { 
        icon: 'Chaos', 
        title: 'Caos Operativo', 
        description: "'Así lo hemos hecho siempre', pero nadie sabe dónde se atoran las cosas." 
    },
    { 
        icon: 'Chart', 
        title: 'Falta de Datos', 
        description: 'Decisiones basadas en intuición, no en métricas.' 
    },
    { 
        icon: 'Snail', 
        title: 'Procesos Lentos', 
        description: 'Leads que se enfrían y cotizaciones que llegan tarde.' 
    },
];

export const hybridStudioMix = [
    { name: 'Consultora Estratégica', percentage: 30, color: 'bg-blue-500' },
    { name: 'Oficina de Diseño de Procesos', percentage: 30, color: 'bg-sky-500' },
    { name: 'Estudio de Automatización', percentage: 20, color: 'bg-teal-500' },
    { name: 'AI Lab', percentage: 20, color: 'bg-brand-accent' },
];

export const services = [
  {
    title: 'Innovation (Estrategia)',
    shortDescription: 'Claridad y Roadmap.',
    fullDescription: 'Entender cómo funcionas hoy y diseñar cómo deberías funcionar mañana. Es el Blueprint de tu nueva operación.',
    components: ['Mapeo de Procesos', 'Diagnóstico de Madurez Digital', 'Diseño de Flujos "To-Be"', 'Roadmap Tecnológico.'],
    value: 'Por fin sabrás exactamente qué, dónde y cuánto está fallando en tu operación.'
  },
  {
    title: 'Automation (Eficiencia)',
    shortDescription: 'Flujos automáticos que liberan a tu equipo.',
    fullDescription: 'Implementar automatizaciones que impactan directo en tiempo y costos.',
    components: ['Integraciones (Make, Zapier, n8n)', 'Flujos automáticos (altas de clientes, recordatorios, reportes)', 'Bots internos.'],
    value: 'Libera a tu gente valiosa del trabajo repetitivo y reduce el error humano.'
  },
  {
    title: 'AI Lab (Inteligencia)',
    shortDescription: 'Agentes virtuales y prototipos que escalan tu capacidad.',
    fullDescription: 'Probar e implementar soluciones de IA en contextos reales y controlados.',
    components: ['Agentes Virtuales Comerciales (que califican leads 24/7)', 'Asistentes Internos (que ayudan a redactar propuestas)', 'Agentes de Soporte (FAQs).'],
    value: 'Obtén más inteligencia en tu día a día sin que tu equipo tenga que ser experto en IA.'
  },
  {
    title: 'Academy (Adopción)',
    shortDescription: 'Capacitación para que tu gente use las nuevas herramientas.',
    fullDescription: 'Asegurar que tu equipo use bien los nuevos sistemas y los adopte.',
    components: ['Workshops directivos', 'Talleres prácticos de herramientas', 'Guías y checklists.'],
    value: 'Reducimos la resistencia al cambio y logramos que la inversión se aproveche.'
  }
];

export const differentiators = [
    { title: 'Impacto en Semanas, no Años', description: 'Construimos MVPs funcionales.' },
    { title: 'Honestidad Radical', description: 'Si algo no conviene, te lo diremos.' },
    { title: 'Ejecutamos, no solo Recomendamos', description: 'Somos tu "partner" que ejecuta.' },
    { title: 'A favor de tu gente', description: 'No reemplazamos personas, les quitamos lo que los frena.' }
];

export const methodologyPhases = [
  {
    phase: 1,
    title: 'Descubrir',
    description: 'Reunión inicial para entender tus dolores y objetivos.'
  },
  {
    phase: 2,
    title: 'Diagnosticar',
    description: 'Mapeo visual de tus procesos actuales. (Aquí generamos alineación).'
  },
  {
    phase: 3,
    title: 'Diseñar',
    description: 'Creación del Blueprint "To-Be" y el Roadmap tecnológico.'
  },
  {
    phase: 4,
    title: 'Prototipar (MVP)',
    description: 'Construimos una versión funcional en 3-8 semanas para probarla con usuarios reales.'
  },
  {
    phase: 5,
    title: 'Automatizar y Escalar',
    description: 'Formalizamos los flujos que funcionaron y los escalamos.'
  },
  {
    phase: 6,
    title: 'Formar y Acompañar',
    description: 'Capacitamos a tu equipo y ajustamos métricas. (No te dejamos solo).'
  }
];

export const caseStudies = [
  {
    client: 'Empresa Industrial / Logística',
    title: 'Automatización de Procesos de Pedidos',
    problem: 'Procesos manuales de pedidos y seguimiento en Excel, causando demoras y errores costosos.',
    solution: 'Se diseñó y automatizó el flujo de pedidos de punta a punta, integrando su ERP con el CRM y sistemas de notificación en tiempo real.',
    result: 'Reducción del 40% en tiempo de procesamiento y 90% menos errores.',
    metric: '40%'
  },
  {
    client: 'Empresa de Servicios / Comercial',
    title: 'Implementación de IA Comercial',
    problem: 'El área comercial estaba saturada y los leads calientes se perdían por falta de seguimiento oportuno.',
    solution: 'Se implementó un Agente Virtual que califica leads 24/7 vía web y WhatsApp, y un flujo automatizado de recordatorios para el equipo de ventas.',
    result: '+30% de reuniones agendadas sin contratar más vendedores.',
    metric: '+30%'
  }
];
