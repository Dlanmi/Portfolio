/* Experiencia, formación, certificaciones y herramientas. Fuente: ~/Documents/hoja_de_vida/build.py y content_en.py. */
import type { L10n, L10nList } from '../i18n/ui';

export type Job = {
  role: L10n;
  org: string;
  orgUrl?: string;
  date: L10n;
  place: L10n;
  points: L10nList;
};

export const jobs: Job[] = [
  {
    role: { es: 'Practicante de Desarrollo', en: 'Software Development Intern' },
    org: 'PBS Group',
    date: { es: 'Ago 2025 — Mar 2026', en: 'Aug 2025 — Mar 2026' },
    place: { es: 'Bogotá', en: 'Bogotá' },
    points: {
      es: [
        'Validación e integración de APIs RESTful y apoyo en pruebas de sistemas, verificando el flujo correcto de datos entre plataformas.',
        'Desarrollo frontend con React y mantenimiento de páginas web existentes.',
        'Automatización de procesos y bots de llamadas con flujos conversacionales en Vapi, Make y n8n.',
      ],
      en: [
        'Validated and integrated RESTful APIs and supported system testing, making sure data flowed correctly across platforms.',
        'Built frontend features with React and maintained existing web pages.',
        'Automated business processes and built voice-bot conversational flows with Vapi, Make and n8n.',
      ],
    },
  },
  {
    role: { es: 'Anotador de IA', en: 'AI Data Annotator' },
    org: 'micro1',
    date: { es: 'Remoto', en: 'Remote' },
    place: { es: 'Remoto', en: 'Remote' },
    points: {
      es: [
        'Evaluación crítica de respuestas de modelos de lenguaje (LLMs): detección de errores e inconsistencias con justificaciones escritas, bajo guías de calidad y plazos definidos.',
      ],
      en: [
        'Critically evaluated large language model (LLM) outputs, flagging errors and inconsistencies with written justifications under strict quality guidelines and deadlines.',
      ],
    },
  },
  {
    role: { es: 'Fundador', en: 'Founder' },
    org: 'Astrobear',
    date: { es: 'Emprendimiento', en: 'Venture' },
    place: { es: 'E-commerce en Shopify', en: 'Shopify e-commerce' },
    points: {
      es: [
        'Diseño, desarrollo y operación de una tienda online: optimización para conversión, campañas en redes (un video con más de 2,5 millones de vistas) y paso del dropshipping a producción propia.',
      ],
      en: [
        'Designed, built and ran an online store end to end: conversion optimization, social campaigns (one video reached 2.5M+ views) and the shift from dropshipping to in-house production.',
      ],
    },
  },
];

export type Study = { title: L10n; org: string; date: L10n; current?: boolean };

export const education: Study[] = [
  {
    title: { es: 'Ingeniería de Software', en: 'B.S. in Software Engineering' },
    org: 'Fundación Universitaria Compensar, Bogotá',
    date: { es: 'En curso · 6.º semestre (jornada nocturna)', en: 'In progress · 6th semester (evening program)' },
    current: true,
  },
  {
    title: { es: 'Administración en Salud', en: 'Health Services Administration' },
    org: 'Fundación Universitaria de Ciencias de la Salud, Bogotá',
    date: { es: 'Terminado', en: 'Completed' },
  },
];

export type Cert = { title: L10n; issuer: string; date?: L10n; highlight?: boolean };

export const certs: Cert[] = [
  {
    title: { es: 'Uber Global Hackathon — Ganador Regional', en: 'Uber Global Hackathon — Regional Winner' },
    issuer: 'Uber',
    date: { es: 'Sep 2022', en: 'Sep 2022' },
    highlight: true,
  },
  {
    title: { es: 'Certificado Profesional de Análisis de Datos', en: 'Data Analytics Professional Certificate' },
    issuer: 'Google · Coursera',
    highlight: true,
  },
  { title: { es: 'CS50: Introduction to Computer Science', en: 'CS50: Introduction to Computer Science' }, issuer: 'Harvard · edX' },
  {
    title: { es: 'Full Stack Developer con JavaScript', en: 'Full Stack JavaScript Developer' },
    issuer: 'Platzi',
    date: { es: 'Jul 2023', en: 'Jul 2023' },
  },
  { title: { es: 'Java Fundamentals & Database Design', en: 'Java Fundamentals & Database Design' }, issuer: 'Oracle Academy' },
  {
    title: { es: 'Python for Everybody', en: 'Python for Everybody' },
    issuer: 'University of Michigan',
    date: { es: '2022', en: '2022' },
  },
  { title: { es: 'AI Fundamentals', en: 'AI Fundamentals' }, issuer: 'DataCamp', date: { es: 'Ene 2024', en: 'Jan 2024' } },
  {
    title: { es: 'Fundamentos de Data e IA', en: 'Data & AI Fundamentals' },
    issuer: 'Platzi',
    date: { es: 'Mar 2023', en: 'Mar 2023' },
  },
  {
    title: { es: 'Introduction to AI', en: 'Introduction to AI' },
    issuer: 'University of Helsinki',
    date: { es: 'Ene 2023', en: 'Jan 2023' },
  },
];

export type SkillGroup = { name: L10n; items: string[] };

export const skills: SkillGroup[] = [
  { name: { es: 'Lenguajes', en: 'Languages' }, items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java'] },
  {
    name: { es: 'Backend', en: 'Backend' },
    items: ['Node.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Event-driven', 'PostgreSQL', 'SQLite', 'Supabase', 'Docker'],
  },
  {
    name: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'GSAP', 'Electron', 'HTML', 'CSS'],
  },
  {
    name: { es: 'Datos e IA', en: 'Data & AI' },
    items: ['pandas', 'NumPy', 'SciPy', 'scikit-learn', 'statsmodels', 'matplotlib', 'FinBERT', 'LLM APIs'],
  },
  {
    name: { es: 'Calidad', en: 'Quality' },
    items: ['Vitest', 'Pytest', 'Playwright', 'Strict typing', 'Git / GitHub', 'GitHub Actions', 'Scrum'],
  },
  { name: { es: 'Automatización', en: 'Automation' }, items: ['n8n', 'Make', 'Vapi', 'Shopify / Liquid'] },
];

export const spoken: L10n = { es: 'Español (nativo) · Inglés (B2)', en: 'Spanish (native) · English (B2)' };
