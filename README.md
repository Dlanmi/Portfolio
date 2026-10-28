# Daniel Ojeda — Portafolio

Portafolio personal en español e inglés: proyectos destacados con caso de estudio, archivo de
proyectos anteriores, página «Sobre mí», experiencia, formación, certificaciones y descarga de la
hoja de vida.

## Tecnologías

- [Astro 7](https://astro.build) con TypeScript estricto (sitio estático)
- Tailwind CSS 4
- GSAP (ScrollTrigger, DrawSVG, TextPlugin) para las animaciones
- Tipografías: Poppins (títulos y texto) y Fira Code (nombre, etiquetas y botones), alojadas con Fontsource
- Íconos de tecnologías: Simple Icons, incrustados en el build

## Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # revisa tipos y genera el sitio final en dist/
npm run preview  # previsualiza la versión final
```

## Dónde está cada cosa

| Qué quieres cambiar | Archivo |
| --- | --- |
| Proyectos destacados, casos de estudio y archivo | `src/data/projects.ts` |
| Experiencia, formación, certificaciones, herramientas | `src/data/career.ts` |
| Tu historia y los principios de «Sobre mí» | `src/data/about.ts` |
| Correo, enlaces y hojas de vida descargables | `src/data/profile.ts` |
| Textos de la interfaz (botones, títulos) en ES y EN | `src/i18n/ui.ts` |
| Colores, tipografía y estilos globales | `src/styles/global.css` |
| Animaciones | `src/scripts/motion.ts` |
| Láminas técnicas en SVG (futpred, trading, Cashly, Casa Alberto) | `src/components/plates/` |

- **Hojas de vida:** los PDF viven en `public/cv/`. Si regeneras los CV con `~/Documents/hoja_de_vida/build.py`,
  vuelve a copiar los cuatro PDF a esa carpeta con el mismo nombre.
- **Tu foto:** guárdala como `src/assets/me.jpg` (o `.png` / `.webp`) y reemplaza a la ilustración en «Sobre mí».
- **Ilustraciones:** el astronauta, la mancha morada y el personaje de «Sobre mí» están en `src/assets/illus/` (vienen del sitio anterior).
- **Capturas de proyectos:** están en `src/assets/projects/`. Para cambiar una, reemplaza el archivo con el mismo nombre.

## Rutas

| Español | Inglés |
| --- | --- |
| `/` | `/en/` |
| `/sobre-mi/` | `/en/about/` |
| `/proyectos/<slug>/` | `/en/projects/<slug>/` |

## Publicar

El sitio es estático: cualquier hosting sirve (Vercel, Netlify, GitHub Pages).

- **Vercel o dominio propio:** define `SITE_URL` con la URL final (p. ej. `https://tudominio.com`).
- **GitHub Pages en `dlanmi.github.io/Portfolio`:** `SITE_URL=https://dlanmi.github.io BASE_PATH=/Portfolio npm run build`.

## SEO

- Cada página tiene título, descripción, `canonical`, `hreflang` (es / en / x-default), Open Graph y Twitter Card.
- Datos estructurados (schema.org): `Person` y `WebSite` en todas las páginas, `SoftwareSourceCode` + `BreadcrumbList` en los casos de estudio y `ProfilePage` en «Sobre mí».
- `public/robots.txt` y el sitemap (`/sitemap-index.xml`) apuntan a `SITE_URL`: cámbialo al dominio final antes de publicar.
- Después de publicar: registra el sitio en Google Search Console y envía el sitemap; pon la URL en tu perfil de GitHub y LinkedIn.

## Notas

- Agrega `?static` a cualquier URL para desactivar las animaciones (útil para tomar capturas).
- Se respeta la preferencia del sistema «reducir movimiento».
- El sitio anterior quedó en `_old/` (ignorado por git; también está en github.com/Dlanmi/Portfolio).
