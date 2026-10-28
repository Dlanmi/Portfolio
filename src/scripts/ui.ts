/* Interacciones de la interfaz (sin animaciones): header, menú móvil, menú del CV, copiar correo, hora local. */

// ── Header: fondo al hacer scroll y se esconde al bajar ───────────────────
const header = document.querySelector<HTMLElement>('[data-header]');
let lastY = window.scrollY;
function onScroll() {
  if (!header) return;
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 24);
  const menuOpen = header.classList.contains('menu-open');
  const anyCvOpen = document.querySelector('[data-cv-menu][open]');
  if (!menuOpen && !anyCvOpen) header.classList.toggle('is-hidden', y > 320 && y > lastY + 4);
  if (y < lastY - 4) header.classList.remove('is-hidden');
  lastY = y;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Menú móvil ────────────────────────────────────────────────────────────
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const menuLabel = document.querySelector<HTMLElement>('[data-menu-label]');
const labels = { open: menuLabel?.textContent ?? 'Menu', close: document.documentElement.lang.startsWith('es') ? 'Cerrar' : 'Close' };

function setMenu(open: boolean) {
  if (!toggle || !menu || !header) return;
  toggle.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  header.classList.toggle('menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (menuLabel) menuLabel.textContent = open ? labels.close : labels.open;
}
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ── Menús del CV: uno abierto a la vez; se cierran al hacer clic fuera o con Esc ─
const cvMenus = Array.from(document.querySelectorAll<HTMLDetailsElement>('[data-cv-menu]'));
cvMenus.forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) cvMenus.filter((o) => o !== d).forEach((o) => (o.open = false));
  });
});
document.addEventListener('click', (e) => {
  cvMenus.forEach((d) => {
    if (d.open && !d.contains(e.target as Node)) d.open = false;
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  cvMenus.forEach((d) => {
    if (d.open) {
      d.open = false;
      d.querySelector('summary')?.focus();
    }
  });
  if (toggle?.getAttribute('aria-expanded') === 'true') setMenu(false);
});

// ── Copiar correo ────────────────────────────────────────────────────────
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.querySelector<HTMLElement>('[data-copy-label]');
  const original = label?.textContent ?? '';
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      if (label) label.textContent = `${btn.dataset.copiedLabel ?? 'OK'} ✓`;
      setTimeout(() => label && (label.textContent = original), 1800);
    } catch {
      window.location.href = `mailto:${btn.dataset.copy}`;
    }
  });
});

// ── Volver arriba ────────────────────────────────────────────────────────
document.querySelectorAll<HTMLAnchorElement>('[data-to-top]').forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }),
);

// ── Hora en Bogotá ──────────────────────────────────────────────────────
const clocks = document.querySelectorAll<HTMLTimeElement>('[data-local-time]');
const fmt = new Intl.DateTimeFormat('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Bogota' });
function tick() {
  const now = new Date();
  const text = fmt.format(now);
  clocks.forEach((c) => {
    c.textContent = text;
    c.dateTime = now.toISOString();
  });
}
if (clocks.length) {
  tick();
  setInterval(tick, 30_000);
}
