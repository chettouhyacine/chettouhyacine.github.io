// Keep the footer year current and fade sections in as they enter the viewport.
document.getElementById('year').textContent = String(new Date().getFullYear());

const sections = document.querySelectorAll('.section, .hero');
sections.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
});

const reveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      reveal.unobserve(entry.target);
    });
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
);

sections.forEach((el) => reveal.observe(el));
