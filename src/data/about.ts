/* Textos de «Sobre mí». Están en primera persona: revísalos y ajústalos a tu voz. */
import type { L10n, L10nList } from '../i18n/ui';

export const about = {
  headline: {
    es: 'Ingeniero en formación, constructor de tiempo completo.',
    en: 'Engineer in training, full-time builder.',
  } satisfies L10n,

  /** Título de la sección en el inicio. */
  title: {
    es: 'Estudiante de Ingeniería de Software en Bogotá',
    en: 'Software Engineering student in Bogotá',
  } satisfies L10n,

  /** Versión corta para el inicio. */
  lead: {
    es: 'Soy Daniel. Estudio Ingeniería de Software en la jornada nocturna y el resto del tiempo construyo cosas que alguien termina usando.',
    en: 'I’m Daniel. I study Software Engineering in the evening program, and the rest of the time I build things that someone ends up using.',
  } satisfies L10n,

  short: {
    es: [
      'Empecé a programar en 2020, cuando descubrí el desarrollo web. Antes terminé Administración en Salud, y esa mezcla me dejó una costumbre: entender primero el problema del negocio y después escoger la tecnología.',
      'Me interesa el software que sale de la carpeta: la app con la que mi papá maneja su marquetería, una plataforma de arriendos en producción, un modelo de datos que reporta también cuando falla.',
    ],
    en: [
      'I started coding in 2020, when I discovered web development. Before that I completed a degree in Health Services Administration, and that mix left me with a habit: understand the business problem first, then pick the technology.',
      'I care about software that leaves the folder: the app my dad runs his frame shop with, a rental platform in production, a data model that also reports when it fails.',
    ],
  } satisfies L10nList,

  /** Historia completa para /sobre-mi. */
  story: {
    es: [
      'Soy Daniel David Ojeda, de Bogotá. Empecé a programar en 2020, cuando descubrí el desarrollo web, y desde entonces no he parado: cursos, certificaciones y, sobre todo, proyectos propios.',
      'Antes de la ingeniería terminé Administración en Salud. No fue un desvío: me enseñó a pensar en procesos, en usuarios que no son técnicos y en que la tecnología solo vale si resuelve algo concreto. Hoy curso 6.º semestre de Ingeniería de Software en la Fundación Universitaria Compensar, en la jornada nocturna.',
      'En 2022 gané a nivel regional el Uber Global Hackathon. Después fundé Astrobear, una tienda online que llevé del dropshipping a producción propia y que tuvo un video de más de 2,5 millones de vistas. Ahí aprendí que el código es solo una parte: también hay que vender, medir y atender clientes.',
      'Entre 2025 y 2026 hice mi práctica en PBS Group, integrando y validando APIs, construyendo con React y automatizando procesos con Vapi, Make y n8n. También evalúo respuestas de modelos de lenguaje como anotador de IA en micro1.',
      'El proyecto del que más orgullo tengo es Casa Alberto: el software de la marquetería de mi papá, que funcionó 36 años con papel. Mi usuario más exigente es él, y eso me ha enseñado más sobre producto que cualquier curso.',
    ],
    en: [
      'I’m Daniel David Ojeda, from Bogotá, Colombia. I started coding in 2020, when I discovered web development, and I haven’t stopped since: courses, certifications and, above all, my own projects.',
      'Before engineering I completed a degree in Health Services Administration. It wasn’t a detour: it taught me to think in processes, in non-technical users, and that technology is only worth it if it solves something concrete. Today I’m in the 6th semester of Software Engineering at Fundación Universitaria Compensar, in the evening program.',
      'In 2022 I was a regional winner of the Uber Global Hackathon. Later I founded Astrobear, an online store I took from dropshipping to in-house production, with one video passing 2.5 million views. That is where I learned that code is only one part: you also have to sell, measure and look after customers.',
      'Between 2025 and 2026 I interned at PBS Group, integrating and validating APIs, building with React and automating processes with Vapi, Make and n8n. I also evaluate language model outputs as an AI data annotator at micro1.',
      'The project I’m proudest of is Casa Alberto: the software for my dad’s frame shop, which ran on paper for 36 years. My toughest user is him, and that has taught me more about product than any course.',
    ],
  } satisfies L10nList,

  looking: {
    es: 'Busco un equipo de ingeniería donde crecer como Software Engineer o Data Analyst, en Bogotá o remoto.',
    en: 'I’m looking for an engineering team to grow with as a Software Engineer or Data Analyst, in Bogotá or remote.',
  } satisfies L10n,

  principles: [
    {
      title: { es: 'Software que se usa', en: 'Software that gets used' },
      text: {
        es: 'Prefiero algo pequeño en producción que algo enorme en una carpeta. Casa Alberto, Renty y RadVision tienen usuarios reales.',
        en: 'I’d rather ship something small to production than keep something huge in a folder. Casa Alberto, Renty and RadVision have real users.',
      },
    },
    {
      title: { es: 'Rigor antes que opinión', en: 'Rigor over opinion' },
      text: {
        es: 'Pruebas automatizadas (más de 120 en el bot de trading, 137 en futpred), tipado estricto y validación sin fuga de datos.',
        en: 'Automated tests (120+ in the trading bot, 137 in futpred), strict typing and leak-free validation.',
      },
    },
    {
      title: { es: 'Honestidad con los datos', en: 'Honesty with data' },
      text: {
        es: 'Reporto también lo que no funciona. futpred no le gana al mercado, y está documentado con la misma claridad que sus aciertos.',
        en: 'I report what doesn’t work too. futpred does not beat the market, and that is documented as clearly as its hits.',
      },
    },
  ] satisfies { title: L10n; text: L10n }[],
};
