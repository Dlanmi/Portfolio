/* Textos de la interfaz y rutas en los dos idiomas. El contenido largo vive en src/data/. */

export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Texto con versión en español e inglés. */
export type L10n = { es: string; en: string };
/** Lista con versión en español e inglés. */
export type L10nList = { es: string[]; en: string[] };

export const pick = <T>(v: { es: T; en: T }, lang: Lang): T => v[lang];

/** Antepone la base del sitio (útil si se publica en una subcarpeta, p. ej. GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const routes = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en/'),
  about: (lang: Lang) => (lang === 'es' ? '/sobre-mi/' : '/en/about/'),
  project: (lang: Lang, slug: string) => (lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`),
  section: (lang: Lang, id: string) => `${lang === 'es' ? '/' : '/en/'}#${id}`,
};

export const ui = {
  es: {
    'meta.title': 'Daniel Ojeda — Software Engineer y Data Analyst en Bogotá',
    'meta.description':
      'Portafolio de Daniel Ojeda, Software Engineer y Data Analyst en Bogotá, Colombia: plataformas web en producción (Renty, RadVision), apps como Casa Alberto, modelos de datos validados con rigor y hoja de vida descargable.',
    'nav.work': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.skip': 'Saltar al contenido',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.lang': 'English',
    'nav.langShort': 'EN',
    'cv.button': 'Hoja de vida',
    'cv.short': 'CV',
    'cv.title': 'Descargar hoja de vida',
    'cv.note': 'PDF · actualizada octubre 2026',
    'hero.kicker': 'Portafolio — edición 2026',
    'hero.local': 'Bogotá',
    'hero.statement':
      'Construyo software que la gente usa: plataformas web en producción, modelos de datos que se validan con rigor y herramientas para negocios reales.',
    'hero.role': 'Rol',
    'hero.roleValue': 'Software Engineer · Datos',
    'hero.study': 'Estudio',
    'hero.studyValue': 'Ing. de Software — 6.º semestre',
    'hero.base': 'Base',
    'hero.baseValue': 'Bogotá, Colombia · remoto',
    'hero.status': 'Estado',
    'hero.statusValue': 'Abierto a ofertas',
    'hero.ctaWork': 'Ver trabajo',
    'hero.scroll': 'Desliza',
    'work.kicker': 'Proyectos destacados',
    'work.title': 'Lo que he construido',
    'work.intro':
      'Seis proyectos de los que puedo hablar a fondo: qué problema resuelven, cómo están construidos y qué aprendí. Varios están en producción con usuarios reales.',
    'work.technique': 'Técnica',
    'work.role': 'Rol',
    'work.status': 'Estado',
    'work.case': 'Ver caso',
    'work.visit': 'Visitar',
    'work.code': 'Código',
    'work.no': 'N.º',
    'more.kicker': 'Archivo',
    'more.title': 'Más proyectos',
    'more.intro': 'Emprendimientos y proyectos anteriores. Algunos son de cuando estaba empezando — los dejo porque muestran el camino.',
    'about.kicker': 'Sobre mí',
    'about.cta': 'Leer mi historia completa',
    'exp.kicker': 'Experiencia',
    'exp.title': 'Dónde he trabajado y qué he estudiado',
    'edu.title': 'Formación',
    'certs.title': 'Certificaciones y reconocimientos',
    'skills.title': 'Conocimientos',
    'contact.kicker': 'Contacto',
    'contact.title': 'Contáctame',
    'contact.text':
      'Busco mi siguiente rol como Software Engineer o Data Analyst, en Bogotá o remoto. Si tienes una vacante, un proyecto o solo quieres conversar, escríbeme.',
    'contact.copy': 'Copiar correo',
    'contact.copied': 'Copiado',
    'footer.built': 'Diseñado y construido por mí con Astro, TypeScript, Tailwind y GSAP.',
    'footer.made': 'Hecho en Bogotá',
    'footer.top': 'Volver arriba',
    'case.back': 'Todos los proyectos',
    'case.year': 'Año',
    'case.role': 'Rol',
    'case.stack': 'Stack',
    'case.status': 'Estado',
    'case.links': 'Enlaces',
    'case.problem': 'El problema',
    'case.built': 'Qué construí',
    'case.decisions': 'Decisiones técnicas',
    'case.results': 'En números',
    'case.learned': 'Lo que aprendí',
    'case.next': 'Siguiente proyecto',
    'case.prev': 'Anterior',
    'case.visual': 'Lámina técnica dibujada a partir de los datos reales del proyecto.',
    '404.title': 'Esta página no existe',
    '404.text': 'Puede que el enlace esté roto o que la página se haya movido.',
    '404.home': 'Ir al inicio',
  },
  en: {
    'meta.title': 'Daniel Ojeda — Software Engineer & Data Analyst in Bogotá, Colombia',
    'meta.description':
      'Portfolio of Daniel Ojeda, Software Engineer and Data Analyst in Bogotá, Colombia: web platforms in production (Renty, RadVision), apps like Casa Alberto, rigorously validated data models and a downloadable resume.',
    'nav.work': 'Projects',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.lang': 'Español',
    'nav.langShort': 'ES',
    'cv.button': 'Resume',
    'cv.short': 'CV',
    'cv.title': 'Download resume',
    'cv.note': 'PDF · updated October 2026',
    'hero.kicker': 'Portfolio — 2026 edition',
    'hero.local': 'Bogotá',
    'hero.statement':
      'I build software people actually use: web platforms in production, rigorously validated data models and tools for real businesses.',
    'hero.role': 'Role',
    'hero.roleValue': 'Software Engineer · Data',
    'hero.study': 'Study',
    'hero.studyValue': 'B.S. Software Eng. — 6th semester',
    'hero.base': 'Based',
    'hero.baseValue': 'Bogotá, Colombia · remote',
    'hero.status': 'Status',
    'hero.statusValue': 'Open to opportunities',
    'hero.ctaWork': 'See work',
    'hero.scroll': 'Scroll',
    'work.kicker': 'Featured projects',
    'work.title': 'What I have built',
    'work.intro':
      'Six projects I can talk about in depth: what problem they solve, how they are built and what I learned. Several are in production with real users.',
    'work.technique': 'Medium',
    'work.role': 'Role',
    'work.status': 'Status',
    'work.case': 'Read case study',
    'work.visit': 'Visit',
    'work.code': 'Code',
    'work.no': 'No.',
    'more.kicker': 'Archive',
    'more.title': 'More projects',
    'more.intro': 'Ventures and earlier projects. Some are from when I was just starting out — I keep them because they show the path.',
    'about.kicker': 'About me',
    'about.cta': 'Read my full story',
    'exp.kicker': 'Experience',
    'exp.title': 'Where I have worked and studied',
    'edu.title': 'Education',
    'certs.title': 'Certifications & awards',
    'skills.title': 'Skills',
    'contact.kicker': 'Contact',
    'contact.title': 'Get in touch',
    'contact.text':
      "I'm looking for my next role as a Software Engineer or Data Analyst, in Bogotá or remote. If you have an opening, a project or just want to chat, drop me a line.",
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied',
    'footer.built': 'Designed and built by me with Astro, TypeScript, Tailwind and GSAP.',
    'footer.made': 'Made in Bogotá',
    'footer.top': 'Back to top',
    'case.back': 'All projects',
    'case.year': 'Year',
    'case.role': 'Role',
    'case.stack': 'Stack',
    'case.status': 'Status',
    'case.links': 'Links',
    'case.problem': 'The problem',
    'case.built': 'What I built',
    'case.decisions': 'Technical decisions',
    'case.results': 'By the numbers',
    'case.learned': 'What I learned',
    'case.next': 'Next project',
    'case.prev': 'Previous',
    'case.visual': "Technical plate drawn from the project's real data.",
    '404.title': 'This page does not exist',
    '404.text': 'The link may be broken or the page may have moved.',
    '404.home': 'Go home',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}
