/* Proyectos destacados (con caso de estudio) y archivo de proyectos anteriores.
   Las cifras salen de los repositorios, los README y la hoja de vida; si algo cambia, se cambia aquí. */
import type { ImageMetadata } from 'astro';
import type { L10n, L10nList } from '../i18n/ui';

import renty from '../assets/projects/renty.png';
import radvision from '../assets/projects/radvision.png';
import bowies from '../assets/projects/bowies.png';
import selfdriving from '../assets/projects/selfdriving.png';
import rickmorty from '../assets/projects/rickmorty.png';
import astrobearLogo from '../assets/projects/astrobear-logo.webp';

export type StatusKind = 'live' | 'use' | 'research' | 'private';
export type PlateKind = 'futpred' | 'trading' | 'cashly' | 'casa';

export type Visual =
  | { kind: 'image'; src: ImageMetadata; alt: L10n }
  | { kind: 'plate'; plate: PlateKind; alt: L10n };

export type Metric = { value: string | L10n; label: L10n };

export type Project = {
  slug: string;
  title: string;
  year: string;
  tagline: L10n;
  summary: L10n;
  role: L10n;
  stack: string[];
  status: { kind: StatusKind; label: L10n };
  links: { live?: string; liveLabel?: string; code?: string };
  visual: Visual;
  problem: L10n;
  built: L10nList;
  decisions: L10nList;
  metrics: Metric[];
  learned: L10n;
};

export const projects: Project[] = [
  {
    slug: 'renty',
    title: 'Renty',
    year: '2026',
    tagline: {
      es: 'Arriendos en Bogotá sin codeudor: aquí vale cómo pagas, no cuánto tienes.',
      en: 'Renting in Bogotá without a co-signer: what counts is how you pay, not what you own.',
    },
    summary: {
      es: 'Plataforma para buscar y publicar arriendos con contacto directo por WhatsApp y un puntaje de inquilino (Renty Score) que reemplaza al codeudor con finca raíz.',
      en: 'A platform to find and list rentals with direct WhatsApp contact and a tenant score (Renty Score) that replaces the property-owning co-signer.',
    },
    role: { es: 'Producto, diseño y desarrollo full stack', en: 'Product, design and full-stack development' },
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'AWS S3', 'Vercel'],
    status: { kind: 'live', label: { es: 'En producción', en: 'In production' } },
    links: { live: 'https://www.rentyco.app/', liveLabel: 'rentyco.app' },
    visual: {
      kind: 'image',
      src: renty,
      alt: {
        es: 'Página de inicio de Renty: titular «El arriendo sin barreras» y una tarjeta con el Renty Score 785.',
        en: 'Renty home page: headline “Renting without barriers” and a card showing a Renty Score of 785.',
      },
    },
    problem: {
      es: 'En Colombia 7,3 millones de familias arriendan, pero el sistema las trata como un riesgo: si no tienes un codeudor con finca raíz, no existes, aunque lleves años pagando cumplido. Encontrar arriendo en Bogotá también es lento: anuncios desactualizados, intermediarios y cero transparencia.',
      en: 'In Colombia 7.3 million families rent, yet the system treats them as a risk: without a co-signer who owns property you basically don’t exist, even after years of paying on time. Finding a rental in Bogotá is slow too: outdated listings, middlemen and zero transparency.',
    },
    built: {
      es: [
        'Buscador y publicación de inmuebles con contacto directo por WhatsApp, sin intermediarios.',
        'Renty Score: un puntaje de 0 a 1000 que mide el historial de pago del inquilino, con su propio formulario.',
        'Panel de administración con roles (admin y editor) sobre Supabase Auth para gestionar inmuebles.',
        'Páginas por ciudad pensadas para SEO (/bogota/arriendos) y un blog.',
        'Subida de fotos a S3 con URLs prefirmadas y analítica con Vercel Analytics y Speed Insights.',
      ],
      en: [
        'Listing search and publishing with direct WhatsApp contact, no middlemen.',
        'Renty Score: a 0–1000 score that measures a tenant’s payment history, with its own application form.',
        'Admin panel with roles (admin and editor) on top of Supabase Auth to manage listings.',
        'SEO-oriented city pages (/bogota/arriendos) and a blog.',
        'Photo uploads to S3 with presigned URLs, plus Vercel Analytics and Speed Insights.',
      ],
    },
    decisions: {
      es: [
        'Next.js con App Router y Server Components: las páginas de inmuebles se renderizan en el servidor para que Google las indexe.',
        'La lógica de datos vive en PostgreSQL (PL/pgSQL) con roles en la base de datos, no repartida en el frontend.',
        'Las fotos van directo del navegador a S3 con URLs prefirmadas: el servidor nunca carga archivos pesados.',
        'WhatsApp en vez de un chat propio: es como ya se habla de arriendos en Bogotá, y quita fricción.',
      ],
      en: [
        'Next.js App Router with Server Components: listing pages render on the server so Google can index them.',
        'Data logic lives in PostgreSQL (PL/pgSQL) with roles in the database, not scattered across the frontend.',
        'Photos go straight from the browser to S3 with presigned URLs: the server never handles heavy files.',
        'WhatsApp instead of an in-app chat: it is how people in Bogotá already talk about rentals, and it removes friction.',
      ],
    },
    metrics: [
      { value: { es: '7,3 M', en: '7.3M' }, label: { es: 'familias que arriendan en Colombia', en: 'renting households in Colombia' } },
      { value: '1000', label: { es: 'puntos en la escala del Renty Score', en: 'points on the Renty Score scale' } },
      { value: '2', label: { es: 'roles en el panel de administración', en: 'roles in the admin panel' } },
    ],
    learned: {
      es: 'Un producto no es solo código. Tuve que explicar una idea nueva —el score— en una sola frase y lograr que alguien confíe en una página con sus datos. Eso se diseña igual que la base de datos.',
      en: 'A product is not just code. I had to explain a new idea —the score— in a single sentence and earn enough trust for someone to share their data. That gets designed just like the database does.',
    },
  },
  {
    slug: 'casa-alberto',
    title: 'Casa Alberto',
    year: '2026',
    tagline: {
      es: 'El software de la marquetería de mi papá, después de 36 años en papel.',
      en: 'The software for my dad’s frame shop, after 36 years on paper.',
    },
    summary: {
      es: 'App de escritorio para una marquetería de barrio: cotizador de marcos, pedidos en kanban, facturas con numeración consecutiva y actualizaciones automáticas.',
      en: 'A desktop app for a neighborhood frame shop: frame quoting, kanban orders, sequentially numbered invoices and automatic updates.',
    },
    role: {
      es: 'Todo: levantamiento con el cliente, diseño, desarrollo y soporte',
      en: 'Everything: requirements with the client, design, development and support',
    },
    stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS', 'Vitest', 'GitHub Actions'],
    status: { kind: 'use', label: { es: 'En uso en la marquetería', en: 'In use at the shop' } },
    links: { code: 'https://github.com/Dlanmi/casa-alberto-app' },
    visual: {
      kind: 'plate',
      plate: 'casa',
      alt: {
        es: 'Plano técnico de un marco con sus cotas: moldura, paspartú y vidrio, como los calcula el cotizador.',
        en: 'Technical drawing of a frame with its dimensions: moulding, mat and glass, as the quoting tool computes them.',
      },
    },
    problem: {
      es: 'Casa Alberto es la marquetería de mi papá en el barrio Verbenal, en Bogotá. Durante 36 años las cotizaciones, los pedidos y las listas de precios vivieron en papel. Cotizar un marco con vidrio y paspartú era hacer cuentas a mano cada vez, y saber qué pedidos estaban listos o sin reclamar dependía de la memoria.',
      en: 'Casa Alberto is my dad’s frame shop in the Verbenal neighborhood of Bogotá. For 36 years quotes, orders and price lists lived on paper. Quoting a frame with glass and a mat meant doing the math by hand every time, and knowing which orders were ready or unclaimed depended on memory.',
    },
    built: {
      es: [
        'Cotizador paso a paso con auto-guardado que calcula moldura, vidrio (redondeado a múltiplos de 10 cm) y paspartú con precios configurables.',
        'Tablero kanban de pedidos con arrastrar y soltar, matriz de urgencia y reclasificación automática de pedidos sin reclamar.',
        'Facturas, contratos y cuentas de cobro con numeración consecutiva que nunca se repite, en tres formatos de impresión.',
        'Exportación a Excel y PDF, y control de los pagos mensuales de las clases del taller.',
        'Instalador para Windows que se actualiza solo: publico una versión y la app se actualiza al abrirse.',
      ],
      en: [
        'Step-by-step quoting wizard with autosave that prices moulding, glass (rounded to 10 cm multiples) and mat with configurable prices.',
        'Kanban order board with drag and drop, an urgency matrix and automatic reclassification of unclaimed orders.',
        'Invoices, contracts and billing statements with sequential numbering that never repeats, in three print formats.',
        'Excel and PDF export, plus monthly payment tracking for the shop’s classes.',
        'Self-updating Windows installer: I publish a release and the app updates itself on next launch.',
      ],
    },
    decisions: {
      es: [
        'Offline primero: SQLite local con Drizzle ORM. La marquetería no puede depender de que haya internet.',
        'Cada regla de negocio está escrita y numerada (BR-001, SPEC-007…) y tiene pruebas que la protegen.',
        'Publicar es un comando: `npm version patch` + push del tag → GitHub Actions construye el .exe → electron-updater lo instala.',
        'El changelog está escrito para el dueño, en lenguaje claro: qué va a notar y qué se arregló.',
      ],
      en: [
        'Offline first: local SQLite with Drizzle ORM. A frame shop can’t depend on the internet being up.',
        'Every business rule is written down and numbered (BR-001, SPEC-007…) and guarded by tests.',
        'Shipping is one command: `npm version patch` + tag push → GitHub Actions builds the .exe → electron-updater installs it.',
        'The changelog is written for the owner, in plain language: what he will notice and what got fixed.',
      ],
    },
    metrics: [
      { value: '36', label: { es: 'años de cotizaciones en papel reemplazados', en: 'years of paper quotes replaced' } },
      { value: '70', label: { es: 'archivos de pruebas automatizadas', en: 'automated test files' } },
      { value: 'v2.3.2', label: { es: 'versión actual, publicada con auto-actualización', en: 'current release, shipped with auto-update' } },
    ],
    learned: {
      es: 'Mi usuario más exigente es mi papá. Aprendí a escribir el changelog para él y no para mí, y que un error en la numeración de facturas no es un problema técnico: es un problema del negocio.',
      en: 'My toughest user is my dad. I learned to write the changelog for him, not for me — and that a bug in invoice numbering is not a technical problem, it is a business problem.',
    },
  },
  {
    slug: 'futpred',
    title: 'futpred',
    year: '2026',
    tagline: {
      es: 'Un motor de predicción de fútbol honesto con sus propios límites.',
      en: 'A soccer prediction engine that is honest about its own limits.',
    },
    summary: {
      es: 'Modelo estadístico y de machine learning validado sobre más de 23.000 partidos. En 79 partidos reales del Mundial 2026 acertó el 65 % y le ganó al baseline Elo.',
      en: 'A statistical and machine learning model validated on 23,000+ matches. On 79 real 2026 World Cup matches it was 65% accurate and beat the Elo baseline.',
    },
    role: { es: 'Proyecto personal — de punta a punta', en: 'Personal project — end to end' },
    stack: ['Python', 'pandas', 'NumPy', 'SciPy', 'scikit-learn', 'SQLite', 'matplotlib', 'Pytest'],
    status: { kind: 'research', label: { es: 'Investigación personal', en: 'Personal research' } },
    links: {},
    visual: {
      kind: 'plate',
      plate: 'futpred',
      alt: {
        es: 'Diagrama de calibración: la probabilidad predicha frente a la frecuencia observada sigue casi exactamente la diagonal ideal (ECE 0,007).',
        en: 'Calibration plot: predicted probability versus observed frequency follows the ideal diagonal almost exactly (ECE 0.007).',
      },
    },
    problem: {
      es: '¿Se pueden estimar las probabilidades de un partido mejor que el mercado? Casi todos los «modelos» que circulan muestran solo sus aciertos. Quise construir uno con el rigor de un estudio: validación sin fuga de datos, métricas adecuadas y reportar también cuando el modelo no funciona.',
      en: 'Can you estimate match probabilities better than the market? Almost every “model” out there only shows its hits. I wanted to build one with the rigor of a study: leak-free validation, proper metrics, and reporting the results when the model does not work too.',
    },
    built: {
      es: [
        'Paquete de Python instalable con CLI: ingesta → normalización → modelo → evaluación, reproducible de punta a punta.',
        'Ingesta de 5+ fuentes (resultados, xG, cuotas) normalizadas en SQLite, con snapshots inmutables y nombres de equipos canonizados.',
        'Modelo Dixon-Coles + ratings + meta-modelo de regresión logística.',
        'Simulador Monte Carlo de torneos (Mundial 2026, Copa América) con probabilidad por ronda.',
        'Reportes con diagramas de calibración y un documento de resultados por cada fase.',
      ],
      en: [
        'Installable Python package with a CLI: ingest → normalize → model → evaluate, reproducible end to end.',
        'Ingestion of 5+ sources (results, xG, odds) normalized into SQLite, with immutable snapshots and canonical team names.',
        'Dixon-Coles model + ratings + a logistic-regression meta-model.',
        'Monte Carlo tournament simulator (2026 World Cup, Copa América) with per-round probabilities.',
        'Reports with calibration plots and a results write-up for every phase.',
      ],
    },
    decisions: {
      es: [
        'Validación walk-forward sin data leakage: el modelo solo ve el pasado de cada partido que predice.',
        'Métricas probabilísticas (RPS, Brier, log-loss, ECE) en vez de solo «porcentaje de acierto».',
        'Comparación contra el cierre de Pinnacle: el modelo no le gana al mercado (CLV −3 a −4 %) y quedó documentado.',
        'Cada mejora se prueba con significancia estadística: agregar xG fue la primera robusta (p < 0,001, 6 de 6 temporadas).',
      ],
      en: [
        'Walk-forward validation with no data leakage: the model only sees the past of each match it predicts.',
        'Probabilistic metrics (RPS, Brier, log-loss, ECE) instead of just “hit rate”.',
        'Benchmarked against Pinnacle’s closing line: the model does not beat the market (CLV −3 to −4%) and that is documented.',
        'Every improvement is tested for statistical significance: adding xG was the first robust one (p < 0.001, 6 of 6 seasons).',
      ],
    },
    metrics: [
      { value: { es: '65 %', en: '65%' }, label: { es: 'de acierto en 79 partidos del Mundial 2026', en: 'accuracy on 79 matches of the 2026 World Cup' } },
      { value: { es: '0,152', en: '0.152' }, label: { es: 'RPS del modelo, frente a 0,164 del baseline Elo', en: 'model RPS, versus 0.164 for the Elo baseline' } },
      { value: { es: '0,007', en: '0.007' }, label: { es: 'error de calibración (ECE)', en: 'calibration error (ECE)' } },
      { value: { es: '23.000+', en: '23,000+' }, label: { es: 'partidos en la validación walk-forward', en: 'matches in walk-forward validation' } },
      { value: '137', label: { es: 'pruebas automatizadas', en: 'automated tests' } },
    ],
    learned: {
      es: 'El resultado más valioso fue uno negativo: el modelo no le gana al cierre de Pinnacle. Documentarlo con honestidad me enseñó más que cualquier acierto, y me obligó a separar «estimar bien» de «ganar plata».',
      en: 'The most valuable result was a negative one: the model does not beat Pinnacle’s closing line. Documenting that honestly taught me more than any hit did, and forced me to separate “estimating well” from “making money”.',
    },
  },
  {
    slug: 'trading',
    title: 'Trading Lab',
    year: '2026',
    tagline: {
      es: 'Un bot de trading construido como un sistema crítico, no como una apuesta.',
      en: 'A trading bot built like a critical system, not like a bet.',
    },
    summary: {
      es: 'Plataforma de trading algorítmico y paper trading: arquitectura orientada a eventos de 8 módulos en TypeScript estricto, capa de riesgo con 7 validaciones y más de 120 pruebas.',
      en: 'An algorithmic and paper trading platform: an 8-module event-driven architecture in strict TypeScript, a risk layer with 7 checks and 120+ tests.',
    },
    role: { es: 'Proyecto personal — arquitectura e investigación', en: 'Personal project — architecture and research' },
    stack: ['TypeScript', 'Node.js', 'Python', 'FastAPI', 'Docker', 'SQLite', 'WebSockets', 'Vitest'],
    status: { kind: 'research', label: { es: 'Paper trading · devnet', en: 'Paper trading · devnet' } },
    links: {},
    visual: {
      kind: 'plate',
      plate: 'trading',
      alt: {
        es: 'Diagrama de arquitectura: datos de Coinbase → señales → riesgo → ejecución, con el servicio de sentimiento y el journal en SQLite.',
        en: 'Architecture diagram: Coinbase data → signals → risk → execution, with the sentiment service and the SQLite journal.',
      },
    },
    problem: {
      es: 'Quería entender el trading cuantitativo en serio, no con indicadores sueltos. El objetivo nunca fue «hacer plata»: fue decidir con datos en vez de intuición, con gestión de riesgo formal, y sin dejar que el sobreajuste me engañara.',
      en: 'I wanted to understand quantitative trading properly, not with random indicators. The goal was never “making money”: it was deciding with data instead of gut feeling, with formal risk management, without letting overfitting fool me.',
    },
    built: {
      es: [
        'Arquitectura orientada a eventos de 8 módulos (datos → señales → riesgo → ejecución) en TypeScript estricto, ~7.700 líneas.',
        'Feed en tiempo real de Coinbase por WebSocket, velas OHLCV, journal append-only en SQLite, healthcheck HTTP y alertas por caída del feed.',
        'Capa de riesgo con 7 validaciones antes de cada operación, kill switch y circuit breaker de pérdida diaria.',
        'Microservicio en FastAPI + Docker que sirve FinBERT (NLP) para medir el sentimiento de las noticias.',
        'Investigación de 4 hipótesis cuantitativas (cointegración, regímenes HMM, sizing GARCH, métricas on-chain).',
      ],
      en: [
        '8-module event-driven architecture (data → signals → risk → execution) in strict TypeScript, ~7,700 lines.',
        'Real-time Coinbase WebSocket feed, OHLCV bars, an append-only SQLite journal, HTTP health check and feed-outage alerts.',
        'Risk layer with 7 pre-trade checks, a kill switch and a daily-loss circuit breaker.',
        'FastAPI + Docker microservice serving FinBERT (NLP) to score news sentiment.',
        'Research on 4 quantitative hypotheses (cointegration, HMM regimes, GARCH sizing, on-chain metrics).',
      ],
    },
    decisions: {
      es: [
        'Seguro por construcción: solo devnet y paper trading; mainnet no está implementado y la fábrica lo rechaza.',
        'Los límites rechazan, no recortan: si una orden supera el máximo, se cancela en vez de ajustarse en silencio.',
        'Ejecución intercambiable por un adapter: la misma lógica corre simulada o contra devnet.',
        'Reproducible: cada corrida guarda la config, el hash del commit y el hash de los datos; los reportes nunca se sobrescriben.',
        'Validación walk-forward, k-fold purgado y una sola evaluación out-of-sample, con Sharpe deflactado.',
      ],
      en: [
        'Safe by construction: devnet and paper trading only; mainnet is not implemented and the factory rejects it.',
        'Limits reject, they don’t trim: if an order exceeds the cap it is cancelled instead of silently resized.',
        'Execution is swappable through an adapter: the same logic runs simulated or against devnet.',
        'Reproducible: every run stores its config, commit hash and data hash; reports are never overwritten.',
        'Walk-forward validation, purged k-fold and a single out-of-sample evaluation, with a deflated Sharpe ratio.',
      ],
    },
    metrics: [
      { value: '8', label: { es: 'módulos en la arquitectura', en: 'architecture modules' } },
      { value: '120+', label: { es: 'pruebas unitarias', en: 'unit tests' } },
      { value: '7', label: { es: 'validaciones antes de cada operación', en: 'pre-trade checks' } },
      { value: { es: '7.700', en: '7,700' }, label: { es: 'líneas de TypeScript estricto', en: 'lines of strict TypeScript' } },
    ],
    learned: {
      es: 'Lo difícil no es escribir una estrategia: es no engañarse. Por eso el out-of-sample se toca una sola vez y el log de experimentos reporta todo, también lo que salió mal.',
      en: 'The hard part is not writing a strategy, it is not fooling yourself. That is why the out-of-sample set is touched only once and the experiment log reports everything, including what went wrong.',
    },
  },
  {
    slug: 'radvision',
    title: 'RadVision',
    year: '2026',
    tagline: {
      es: 'Inteligencia artificial en imagen diagnóstica, de la consola al informe.',
      en: 'Artificial intelligence in diagnostic imaging, from the console to the report.',
    },
    summary: {
      es: 'Sitio del proyecto formativo de Radiología del SENA: catálogo técnico de 32 equipos con IA, comparador, buscador y esquemas animados de cada modalidad.',
      en: 'Website for a SENA radiology training project: a technical catalog of 32 AI-enabled machines, with a comparator, search and animated schematics for each modality.',
    },
    role: { es: 'Diseño y desarrollo', en: 'Design and development' },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    status: { kind: 'live', label: { es: 'En producción', en: 'In production' } },
    links: { live: 'https://radvision.site', liveLabel: 'radvision.site', code: 'https://github.com/Dlanmi/radvision' },
    visual: {
      kind: 'image',
      src: radvision,
      alt: {
        es: 'Inicio de RadVision: titular «Inteligencia artificial, de la consola al informe» y el esquema técnico de un equipo de radiología digital.',
        en: 'RadVision home: headline “Artificial intelligence, from the console to the report” and a technical schematic of a digital radiography machine.',
      },
    },
    problem: {
      es: 'Un grupo de aprendices de Tecnología en Radiología del SENA tenía que presentar una lista detallada de herramientas de IA en imagen diagnóstica. En un documento, 32 equipos de 4 fabricantes son imposibles de comparar. Hacía falta algo que se pudiera explorar, comparar y buscar.',
      en: 'A group of SENA radiology students had to present a detailed list of AI tools in diagnostic imaging. In a document, 32 machines from 4 manufacturers are impossible to compare. They needed something you could explore, compare and search.',
    },
    built: {
      es: [
        '32 fichas técnicas (8 modalidades × 4 fabricantes) generadas desde datos tipados.',
        'Comparador entre fabricantes, buscador con ⌘K y glosario con definiciones en contexto.',
        'Esquemas técnicos de cada modalidad dibujados en SVG que se trazan al hacer scroll.',
        'Tema claro y oscuro, y respeto por la preferencia de «reducir movimiento».',
      ],
      en: [
        '32 technical sheets (8 modalities × 4 manufacturers) generated from typed data.',
        'Manufacturer comparator, ⌘K search and a glossary with in-context definitions.',
        'SVG technical schematics for each modality that draw themselves on scroll.',
        'Light and dark themes, and support for the “reduce motion” preference.',
      ],
    },
    decisions: {
      es: [
        'Una sola fuente de verdad: si cambia un dato, se actualiza la ficha, el comparador, el buscador y las tablas a la vez.',
        'Sitio estático con Astro: carga rápido y cuesta casi nada mantenerlo publicado.',
        'Animaciones con GSAP (ScrollTrigger, SplitText, DrawSVG) que se desactivan si el sistema pide menos movimiento.',
      ],
      en: [
        'A single source of truth: change one data point and the sheet, comparator, search and tables all update.',
        'A static Astro site: it loads fast and costs next to nothing to keep online.',
        'GSAP animations (ScrollTrigger, SplitText, DrawSVG) that switch off when the system asks for less motion.',
      ],
    },
    metrics: [
      { value: '32', label: { es: 'fichas de equipos', en: 'equipment sheets' } },
      { value: '8', label: { es: 'modalidades de imagen', en: 'imaging modalities' } },
      { value: '4', label: { es: 'fabricantes comparados', en: 'manufacturers compared' } },
    ],
    learned: {
      es: 'Un buen modelo de datos es la mitad del diseño. Con los 32 equipos bien tipados, cada vista nueva —comparador, buscador, tablas— salió casi gratis.',
      en: 'A good data model is half of the design. With the 32 machines properly typed, every new view —comparator, search, tables— came almost for free.',
    },
  },
  {
    slug: 'cashly',
    title: 'Cashly',
    year: '2026',
    tagline: {
      es: 'Un asistente financiero con IA: callado por defecto, inteligente cuando hace falta.',
      en: 'An AI finance assistant: quiet by default, intelligent when needed.',
    },
    summary: {
      es: 'PWA de finanzas personales: captura de gastos en menos de 5 segundos, chat en lenguaje natural con Claude y 14 agentes programados que avisan solo cuando vale la pena.',
      en: 'A personal finance PWA: expense capture in under 5 seconds, natural-language chat with Claude and 14 scheduled agents that only speak up when it matters.',
    },
    role: { es: 'Producto, diseño y desarrollo full stack', en: 'Product, design and full-stack development' },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK', 'Claude', 'Gemini', 'PostgreSQL', 'Playwright'],
    status: { kind: 'private', label: { es: 'Uso personal · repositorio privado', en: 'Personal use · private repo' } },
    links: {},
    visual: {
      kind: 'plate',
      plate: 'cashly',
      alt: {
        es: 'Reloj de 24 horas con los 14 agentes programados de Cashly marcados a la hora de Bogotá en que se ejecutan.',
        en: '24-hour clock with Cashly’s 14 scheduled agents marked at the Bogotá time when they run.',
      },
    },
    problem: {
      es: 'Las apps de finanzas tradicionales son frías, piden formularios eternos y nunca aprenden. Con ingresos irregulares lo que importa es otra cosa: cuánto runway te queda, quién te debe y qué suscripciones se te escapan sin darte cuenta.',
      en: 'Traditional finance apps are cold, ask for endless forms and never learn. With irregular income what matters is different: how much runway you have left, who owes you, and which subscriptions slip by unnoticed.',
    },
    built: {
      es: [
        'Captura de gastos en menos de 5 segundos, sin formularios.',
        'Chat en lenguaje natural con Claude, que consulta la base de datos mediante herramientas (tool use).',
        'Importación de extractos bancarios en PDF y seguimiento de deudas entre personas.',
        '14 agentes programados: resumen matutino, aviso de corte de tarjeta, anomalías, suscripciones, runway y cierre de mes.',
        'App instalable (PWA) con notificaciones push.',
      ],
      en: [
        'Expense capture in under 5 seconds, no forms.',
        'Natural-language chat with Claude, which queries the database through tools (tool use).',
        'PDF bank statement import and tracking of debts between people.',
        '14 scheduled agents: morning digest, card cut-off warning, anomalies, subscriptions, runway and month close.',
        'Installable app (PWA) with push notifications.',
      ],
    },
    decisions: {
      es: [
        'Capa de abstracción de proveedores: Claude para razonar, Gemini Flash para tareas rápidas y baratas.',
        'Seguridad en profundidad: verificación de sesión en una capa de acceso a datos más Row Level Security en PostgreSQL.',
        'Prompts versionados y arquitectura por features (captura, dashboard, importación) en vez de por tipo de archivo.',
        'Pruebas unitarias con Vitest y de punta a punta con Playwright.',
      ],
      en: [
        'Provider abstraction layer: Claude for reasoning, Gemini Flash for fast, cheap tasks.',
        'Defense in depth: session checks in a data access layer plus Row Level Security in PostgreSQL.',
        'Versioned prompts and a feature-based architecture (capture, dashboard, import) instead of grouping by file type.',
        'Unit tests with Vitest and end-to-end tests with Playwright.',
      ],
    },
    metrics: [
      { value: '14', label: { es: 'agentes programados', en: 'scheduled agents' } },
      { value: '<5 s', label: { es: 'para registrar un gasto', en: 'to log an expense' } },
      { value: '2', label: { es: 'modelos de IA con una sola interfaz', en: 'AI models behind one interface' } },
    ],
    learned: {
      es: 'Diseñar IA que no estorbe es más difícil que diseñar IA que hable. La regla fue: callado por defecto, inteligente cuando hace falta, nunca en el camino.',
      en: 'Designing AI that stays out of the way is harder than designing AI that talks. The rule was: quiet by default, intelligent when needed, never in your way.',
    },
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

/* ── Archivo ─────────────────────────────────────────────────────────── */

export type ArchiveItem = {
  title: string;
  year: string;
  kind: L10n;
  text: L10n;
  stack: string[];
  image?: { src: ImageMetadata; alt: L10n };
  links: { live?: string; code?: string };
};

export const archive: ArchiveItem[] = [
  {
    title: 'Astrobear',
    year: '—',
    kind: { es: 'Emprendimiento · fundador', en: 'Venture · founder' },
    text: {
      es: 'Tienda de peluches coleccionables que diseñé, construí y operé de punta a punta, con secciones a medida en Liquid. Un video promocional pasó los 2,5 millones de vistas.',
      en: 'A collectible plush store I designed, built and ran end to end, with custom Liquid sections. One promo video passed 2.5 million views.',
    },
    stack: ['Shopify', 'Liquid', 'Marketing digital'],
    image: {
      src: astrobearLogo,
      alt: { es: 'Logo de Astrobear', en: 'Astrobear logo' },
    },
    links: {},
  },
  {
    title: 'Self-driving car',
    year: '2022',
    kind: { es: 'Experimento', en: 'Experiment' },
    text: {
      es: 'Un carro que aprende a esquivar el tráfico con una red neuronal escrita desde cero en JavaScript, sin librerías.',
      en: 'A car that learns to dodge traffic with a neural network written from scratch in JavaScript, no libraries.',
    },
    stack: ['JavaScript', 'Canvas'],
    image: { src: selfdriving, alt: { es: 'Simulación del carro autónomo y su red neuronal', en: 'Self-driving car simulation and its neural network' } },
    links: { live: 'https://self-driving-car-self.vercel.app/', code: 'https://github.com/Dlanmi/Self-Driving-Car-with-JavaScript' },
  },
  {
    title: 'Bowies Club',
    year: '2022',
    kind: { es: 'Sitio web', en: 'Website' },
    text: {
      es: 'Sitio de una colección NFT con ilustraciones dibujadas a mano, hecho con React y styled-components.',
      en: 'Website for an NFT collection with hand-drawn illustrations, built with React and styled-components.',
    },
    stack: ['React', 'styled-components'],
    image: { src: bowies, alt: { es: 'Inicio del sitio Bowies Club', en: 'Bowies Club home page' } },
    links: { live: 'https://bowiesclub.vercel.app/', code: 'https://github.com/Dlanmi/Bowies-Club' },
  },
  {
    title: 'Rick & Morty App',
    year: '2025',
    kind: { es: 'App web', en: 'Web app' },
    text: {
      es: 'App en React y TypeScript que consume la API de Rick and Morty, con detalle y creación de personajes.',
      en: 'React and TypeScript app on the Rick and Morty API, with character details and creation.',
    },
    stack: ['React', 'TypeScript', 'REST API'],
    image: { src: rickmorty, alt: { es: 'Listado de personajes de Rick y Morty', en: 'Rick and Morty character list' } },
    links: { live: 'https://rick-and-morty-app-gray-ten.vercel.app/', code: 'https://github.com/Dlanmi/rick-and-morty-app' },
  },
];
