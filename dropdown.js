document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.mobile-menu-toggle');

  if (!navbar || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      navbar.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
