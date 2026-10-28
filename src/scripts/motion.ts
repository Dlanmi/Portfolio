/* Animaciones con GSAP, discretas. Respetan «reducir movimiento»; `?static` las apaga (útil para capturas). */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);

const html = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('static');
const EASE = 'power3.out';

const ready = () => html.classList.add('motion-ready');

/* ── Portada: entrada suave, máquina de escribir y astronauta flotando ─ */
function hero() {
  const fades = gsap.utils.toArray<HTMLElement>('[data-hero-fade]');
  if (fades.length) {
    // clearProps: al terminar no queda ningún transform inline; un ancestro transformado rompería el position: fixed del menú del CV.
    gsap.fromTo(fades, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.1, delay: 0.15, clearProps: 'opacity,transform' });
  }

  // La frase se escribe letra a letra, como en el sitio anterior, y va rotando.
  const typed = document.querySelector<HTMLElement>('[data-typewriter]');
  if (typed) {
    const phrases = [typed.textContent ?? '', ...(JSON.parse(typed.dataset.phrases ?? '[]') as string[])];
    typed.textContent = '';
    const tl = gsap.timeline({ delay: 0.7, repeat: phrases.length > 1 ? -1 : 0 });
    phrases.forEach((p) => {
      tl.to(typed, { duration: p.length * 0.055, text: p, ease: 'none' });
      tl.to({}, { duration: 2.6 });
      if (phrases.length > 1) tl.to(typed, { duration: 0.45, text: '', ease: 'none' });
    });
  }

  const astro = document.querySelector('[data-float]');
  if (astro) gsap.to(astro, { y: -16, rotation: 2, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  gsap.utils.toArray<HTMLElement>('[data-float-slow]').forEach((el, i) => {
    gsap.to(el, { y: -10, duration: 3 + i * 0.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.3 });
  });
}

/* ── Bloques que suben con fundido al hacer scroll ───────────────────── */
function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal="up"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE,
        delay: Number(el.dataset.delay ?? 0),
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
    gsap.set(el, { opacity: 1 });
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: EASE,
        stagger: Number(el.dataset.stagger ?? 0.08),
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

/* ── Láminas técnicas en SVG: se dibujan al entrar en pantalla ───────── */
function plates() {
  gsap.utils.toArray<SVGSVGElement>('[data-draw]').forEach((svg) => {
    const draw = svg.querySelectorAll('.draw');
    const fade = svg.querySelectorAll('.fade');
    const grow = svg.querySelectorAll('.grow');
    const pop = svg.querySelectorAll('.pop');
    gsap.set(fade, { opacity: 0 });
    gsap.set(pop, { opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    if (draw.length) tl.fromTo(draw, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.6, ease: 'power2.inOut', stagger: 0.025 }, 0);
    if (grow.length) tl.fromTo(grow, { scaleX: 0 }, { scaleX: 1, transformOrigin: '0% 50%', duration: 1.2, ease: EASE, stagger: 0.08 }, 0.5);
    // Algunos trazos tienen su propia opacidad en el SVG: se respeta.
    if (fade.length) tl.to(fade, { opacity: (_i: number, el: Element) => Number(el.getAttribute('opacity') ?? 1), duration: 0.6, stagger: 0.02 }, 0.7);
    if (pop.length) tl.fromTo(pop, { opacity: 0, scale: 0, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.5)', stagger: 0.04 }, 1);
    ScrollTrigger.create({ trigger: svg, start: 'top 85%', once: true, onEnter: () => tl.play() });
  });
}

/* ── Contadores: respetan prefijos, sufijos, decimales y separador de miles ─ */
function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const text = el.textContent?.trim() ?? '';
    const m = text.match(/^(\D*?)(\d[\d.,]*)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    // «23.000» o «7,700» son miles; «0,152» o «7.3» son decimales.
    const thousands = /^\d{1,3}([.,]\d{3})+$/.test(num) && !num.startsWith('0');
    const sep = num.match(/[.,]/)?.[0] ?? '';
    const decimals = !thousands && sep ? num.split(sep)[1].length : 0;
    const end = thousands ? Number(num.replace(/[.,]/g, '')) : Number(num.replace(',', '.'));
    if (!isFinite(end) || end === 0) return;
    const format = (v: number) => {
      if (thousands) return Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
      const s = v.toFixed(decimals);
      return sep ? s.replace('.', sep) : s;
    };
    const obj = { v: 0 };
    el.textContent = `${pre}${format(0)}${post}`;
    gsap.to(obj, {
      v: end,
      duration: 1.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = `${pre}${format(obj.v)}${post}`;
      },
      onComplete: () => {
        el.textContent = text;
      },
    });
  });
}

function init() {
  if (reduced) {
    ready();
    return;
  }
  document.fonts.ready.then(() => {
    hero();
    reveals();
    plates();
    counters();
    ready();
    ScrollTrigger.refresh();
  });
}

init();
