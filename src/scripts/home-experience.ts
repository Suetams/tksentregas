const header = document.querySelector<HTMLElement>('[data-home-header]');
const menu = document.querySelector<HTMLDetailsElement>('[data-home-menu]');
const summary = menu?.querySelector<HTMLElement>('summary');
const content = document.querySelector<HTMLElement>('#conteudo');
const footer = document.querySelector<HTMLElement>('[data-home-footer]');
const contact = document.querySelector<HTMLAnchorElement>('[data-home-contact]');

function syncMenu() {
  const open = Boolean(menu?.open);
  header?.classList.toggle('is-menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (content) content.inert = open;
  if (footer) footer.inert = open;
  if (contact) contact.inert = open;
  summary?.setAttribute('aria-expanded', String(open));
  summary?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  if (open) menu?.querySelector<HTMLAnchorElement>('nav a')?.focus();
}
menu?.addEventListener('toggle', syncMenu);
menu?.querySelectorAll<HTMLAnchorElement>('nav a').forEach(link => link.addEventListener('click', () => {
  if (menu) menu.open = false;
  syncMenu();
}));
document.addEventListener('keydown', event => {
  if (!menu?.open) return;
  if (event.key === 'Escape') {
    menu.open = false;
    syncMenu();
    summary?.focus();
  }
  if (event.key === 'Tab') {
    const controls = [...(header?.querySelectorAll<HTMLElement>('a, summary') ?? [])].filter(el => el.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }
});

const needs = [...document.querySelectorAll<HTMLButtonElement>('[data-need-select]')];
const needPhotos = [...document.querySelectorAll<HTMLElement>('[data-need-photo]')];
function chooseNeed(index: number) {
  needs.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  needPhotos.forEach((photo, i) => { photo.hidden = i !== index; });
}
needs.forEach((button, index) => {
  button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') chooseNeed(index); });
  button.addEventListener('focus', () => chooseNeed(index));
  button.addEventListener('click', () => chooseNeed(index));
  button.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? needs.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + needs.length) % needs.length;
    needs[next]?.focus();
  });
});

const scaleTabs = [...document.querySelectorAll<HTMLButtonElement>('[data-scale-tab]')];
const scalePanels = [...document.querySelectorAll<HTMLElement>('[data-scale-panel]')];
const scaleQuote = document.querySelector<HTMLAnchorElement>('[data-scale-quote]');
const quoteValues = [...document.querySelectorAll<HTMLElement>('[data-scale-quote-value]')];
function chooseScale(index: number) {
  scaleTabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
  scalePanels.forEach((panel, i) => { panel.hidden = i !== index; });
  const href = quoteValues[index]?.dataset.scaleQuoteValue;
  if (scaleQuote && href) scaleQuote.href = href;
  document.querySelector<HTMLElement>('[data-fleet-experience]')?.setAttribute('data-active-scale', String(index));
}
scaleTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => chooseScale(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? scaleTabs.length - 1 : (index + (['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1) + scaleTabs.length) % scaleTabs.length;
    chooseScale(next); scaleTabs[next]?.focus();
  });
});

let scheduled = false;
function syncScroll() {
  scheduled = false;
  header?.classList.toggle('is-scrolled', window.scrollY > 40);
  contact?.classList.toggle('is-compact', window.scrollY > window.innerHeight * 0.7);
  let obscured = false;
  if (contact && window.innerWidth <= 700) {
    const float = contact.getBoundingClientRect();
    obscured = [...document.querySelectorAll<HTMLElement>('.h6-safe-action')].some(action => {
      const rect = action.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rect.left < float.right + 6 && rect.right > float.left - 6 && rect.top < float.bottom + 6 && rect.bottom > float.top - 6;
    });
  }
  if (contact) {
    contact.classList.toggle('is-obscured', obscured);
    contact.tabIndex = obscured ? -1 : 0;
    if (obscured) contact.setAttribute('aria-hidden', 'true');
    else contact.removeAttribute('aria-hidden');
  }
}
function scheduleScroll() { if (!scheduled) { scheduled = true; requestAnimationFrame(syncScroll); } }
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1180 && menu?.open) { menu.open = false; syncMenu(); }
  scheduleScroll();
}, { passive: true });
window.addEventListener('pagehide', () => { if (menu) menu.open = false; syncMenu(); });
syncScroll();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-in-view'); observer.unobserve(entry.target); } });
  }, { threshold: 0.18 });
  document.querySelectorAll('.h6-business-window').forEach(element => observer.observe(element));
  reducedMotion.addEventListener('change', () => observer.disconnect(), { once: true });
}
