/* Replace empty values with your verified HTTPS profile/repository URLs. */
const portfolioLinks = {
  github: '',
  sunrise: '',
  kawshalya: '',
  portfolio: ''
};
const linkLabels = {
  github: 'Visit GitHub ↗',
  sunrise: 'View repository ↗',
  kawshalya: 'View repository ↗',
  portfolio: 'View repository ↗'
};
document.documentElement.classList.add('js');
const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
  const isLight = document.documentElement.dataset.theme === 'light';
  const next = isLight ? 'dark' : 'light';
  themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
  themeButton.title = `Switch to ${next} theme`;
  themeButton.querySelector('.theme-label').textContent = isLight ? 'Dark' : 'Light';
  themeButton.querySelector('.theme-icon').textContent = isLight ? '☾' : '☀';
  document.querySelector('meta[name="theme-color"]').content = isLight ? '#f5f3ef' : '#101011';
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('portfolio-theme', next); } catch { /* Theme still works without storage. */ }
  updateThemeButton();
});
document.querySelectorAll('[data-link]').forEach(link => {
  const value = portfolioLinks[link.dataset.link];
  if (!value) return;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return;
    link.href = url.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.classList.remove('placeholder-link');
    link.textContent = linkLabels[link.dataset.link];
  } catch { /* Unconfigured links remain visibly unavailable. */ }
});
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reducedMotion.matches) {
    const reveals = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04 });
    document.querySelectorAll('.reveal').forEach(section => reveals.observe(section));
    document.body.classList.add('motion-ready');
  }
  const sections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => sections.observe(section));
}
