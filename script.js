/* Renders the page from content.js. You normally never need to edit this file. */
(function () {
  const S = window.SITE;
  if (!S) return;

  const esc = (v) =>
    String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const btn = (b, extra = '') =>
    `<a class="btn ${b.primary ? 'primary' : ''} ${extra}" href="${esc(b.href)}"${
      b.href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''
    }>${esc(b.label)}</a>`;

  const hero = S.hero || {};
  const work = S.work || {};
  const about = S.about || {};
  const contact = S.contact || {};

  // **double asterisks** become bold, like markdown.
  const rich = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  const aboutParagraphs = (about.paragraphs || []).map((p) => `<p>${rich(p)}</p>`);

  const project = work.project || {};
  const second = work.second || {};

  document.getElementById('app').innerHTML = `
    <section class="hero">
      <p class="eyebrow">${esc(hero.eyebrow)}</p>
      <h1>${esc(hero.headline)}<br />${esc(hero.headlineBreak)} <span class="accent">${esc(
        hero.highlight,
      )}</span></h1>
      <p class="lede">${esc(hero.lede)}</p>
      <div class="cta">${(hero.buttons || []).map((b) => btn(b)).join('')}</div>
      <ul class="stack" aria-label="Main technologies">${(hero.stack || [])
        .map((s) => `<li>${esc(s)}</li>`)
        .join('')}</ul>
    </section>

    <section id="work" class="section">
      <h2><span class="num">${esc(work.number)}</span> ${esc(work.title)}</h2>

      <article class="project">
        <div class="project-media">
          <img src="${esc(project.image)}" alt="${esc(project.imageAlt)}" loading="lazy" />
        </div>
        <div class="project-body">
          <div class="project-head">
            <h3>${esc(project.title)}</h3>
            <span class="badge">${esc(project.badge)}</span>
          </div>
          <p>${esc(project.description)}</p>
          <ul class="highlights">${(project.highlights || [])
            .map((h) => `<li>${esc(h)}</li>`)
            .join('')}</ul>
          <div class="project-links">${(project.links || [])
            .map((l) => btn({ ...l, primary: false }, `small ${l.ghost ? 'ghost' : ''}`))
            .join('')}</div>
          <p class="tags">${esc(project.tags)}</p>
        </div>
      </article>

      <div class="project-small">
        <img src="${esc(second.image)}" alt="${esc(second.imageAlt)}" loading="lazy" />
        <div>
          <h3>${esc(second.title)}</h3>
          <p>${esc(second.text)}</p>
          <a class="text-link" href="${esc(second.link?.href)}" target="_blank" rel="noreferrer">${esc(
            second.link?.label,
          )}</a>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <h2><span class="num">${esc(about.number)}</span> ${esc(about.title)}</h2>
      <div class="about">
        ${aboutParagraphs.join('')}
        <dl class="facts">${(about.facts || [])
          .map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
          .join('')}</dl>
      </div>
    </section>

    <section id="contact" class="section contact">
      <h2><span class="num">${esc(contact.number)}</span> ${esc(contact.title)}</h2>
      <p class="contact-lead">${esc(contact.lead)}</p>
      <div class="cta">${(contact.buttons || []).map((b) => btn(b)).join('')}</div>
    </section>
  `;

  document.querySelectorAll('.brand').forEach((el) => (el.textContent = S.name));
  document.querySelectorAll('.gh').forEach((el) => (el.href = S.github || '#'));
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const built = document.getElementById('built');
  if (built && S.footer) built.textContent = S.footer;

  // Fade sections in as they enter the viewport.
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
})();
