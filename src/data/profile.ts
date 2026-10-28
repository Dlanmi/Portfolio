/* Datos personales, enlaces y hojas de vida descargables. */
import type { L10n } from '../i18n/ui';

export const profile = {
  name: 'Daniel Ojeda',
  fullName: 'Daniel David Ojeda',
  email: 'danielgamier1@gmail.com',
  location: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } satisfies L10n,
  links: {
    github: 'https://github.com/Dlanmi',
    linkedin: 'https://www.linkedin.com/in/daniel-ojeda-1b4155217/',
  },
};

export type CvFile = {
  role: L10n;
  lang: 'ES' | 'EN';
  file: string;
};

/** Las dos versiones de la hoja de vida en los dos idiomas (copiadas desde ~/Documents/hoja_de_vida). */
export const cvs: CvFile[] = [
  {
    role: { es: 'Software Engineer', en: 'Software Engineer' },
    lang: 'ES',
    file: '/cv/Daniel_Ojeda_CV_Software_Engineer.pdf',
  },
  {
    role: { es: 'Software Engineer', en: 'Software Engineer' },
    lang: 'EN',
    file: '/cv/Daniel_Ojeda_Resume_Software_Engineer_EN.pdf',
  },
  {
    role: { es: 'Analista de Datos', en: 'Data Analyst' },
    lang: 'ES',
    file: '/cv/Daniel_Ojeda_CV_Analista_de_Datos.pdf',
  },
  {
    role: { es: 'Analista de Datos', en: 'Data Analyst' },
    lang: 'EN',
    file: '/cv/Daniel_Ojeda_Resume_Data_Analyst_EN.pdf',
  },
];
