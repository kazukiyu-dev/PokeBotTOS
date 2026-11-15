const printButton = document.getElementById('print');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
const links = [...document.querySelectorAll('nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin: '-5% 0px -65% 0px'});
  document.querySelectorAll('article section').forEach(section => observer.observe(section));
}
