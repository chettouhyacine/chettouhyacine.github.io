/* Renders the page from content.js, then grows the city in the footer.
   You normally never need to edit this file. */
(function () {
  const S = window.SITE;
  if (!S) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const esc = (v) =>
    String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const btn = (b, extra = '') =>
    `<a class="btn ${b.primary ? 'primary' : ''} ${extra}" href="${esc(b.href)}"${
      String(b.href || '').startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''
    }>${esc(b.label)}</a>`;

  const hero = S.hero || {};
  const work = S.work || {};
  const about = S.about || {};
  const skills = S.skills || {};
  const contact = S.contact || {};
  const city = S.city || {};

  // LinkedIn and WhatsApp only appear once they are filled in content.js.
  const social = [];
  if (S.linkedin) social.push({ label: 'LinkedIn ↗', href: S.linkedin });
  if (S.whatsapp) {
    const digits = String(S.whatsapp).replace(/\D/g, '');
    if (digits) social.push({ label: 'WhatsApp ↗', href: `https://wa.me/${digits}` });
  }
  const socialButtons = social.map((s) => btn({ ...s, primary: false }, 'social')).join('');

  // **double asterisks** become bold, like markdown.
  const rich = (text) => esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  const aboutParagraphs = (about.paragraphs || []).map((p) => `<p>${rich(p)}</p>`);

  const project = work.project || {};
  const notaire = work.notaire || {};
  const second = work.second || {};

  /* ------------------------------- work cards ------------------------------ */

  const card = (p) => `
      <article class="project">
        <div class="project-head">
          <h3>${esc(p.title)}</h3>
          <span class="badge">${esc(p.badge)}</span>
        </div>
        <figure class="project-media">
          <img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy" />
        </figure>
        <div class="project-body">
          <p class="project-desc">${esc(p.description)}</p>
          <div class="project-detail">
            <ul class="highlights">${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
            <div class="project-links">${(p.links || [])
              .map((l) => btn({ ...l, primary: false }, `small ${l.ghost ? 'ghost' : ''}`))
              .join('')}</div>
            <p class="tags">${esc(p.tags)}</p>
          </div>
        </div>
      </article>`;

  /* --------------------------------- stack --------------------------------- */

  const stack = hero.stack || [];
  const marqueeWords = [...stack, 'Web apps', 'Desktop apps', 'Internal tools', 'Arabic & French'];
  const marqueeGroup = `<div class="marquee-group">${marqueeWords
    .map((w) => `<span>${esc(w)}</span><i aria-hidden="true">✳</i>`)
    .join('')}</div>`;

  // The portrait is optional: if the file is missing it removes itself and the
  // headline simply uses the full width.
  const photo = hero.photo
    ? `<figure class="hero-photo"><img src="${esc(hero.photo)}" alt="${esc(
        hero.photoAlt || S.name,
      )}" onerror="this.closest('figure').remove(); document.querySelector('.hero').classList.remove('has-photo')" /></figure>`
    : '';

  /* --------------------------------- page ---------------------------------- */

  document.getElementById('app').innerHTML = `
    <section class="hero${photo ? ' has-photo' : ''}">
      <div class="hero-meta">
        <span>${esc(hero.eyebrow)}</span>
        <span class="hero-meta-hide">Portfolio — Vol. 03</span>
        <span>${new Date().getFullYear()}</span>
      </div>

      <h1 class="hero-title">
        ${esc(hero.headline)}<br />
        ${esc(hero.headlineBreak)} <em class="accent">${esc(hero.highlight)}</em>
      </h1>

      <div class="hero-lower">
        <div class="hero-copy">
          <p class="lede">${esc(hero.lede)}</p>
          <div class="cta">${(hero.buttons || []).map((b) => btn(b)).join('')}</div>
        </div>
        ${photo}
        <ul class="stack" aria-label="Main technologies">${stack
          .map((s) => `<li>${esc(s)}</li>`)
          .join('')}</ul>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">${marqueeGroup}${marqueeGroup}</div>
    </div>

    <section id="work" class="section">
      <header class="section-head">
        <span class="num">(${esc(work.number)})</span>
        <h2>${esc(work.title)}</h2>
        <span class="section-aside">${esc(project.badge || '')}</span>
      </header>

      ${project.title ? card(project) : ''}

      ${
        second.title
          ? `<article class="project-small">
        <figure><img src="${esc(second.image)}" alt="${esc(second.imageAlt)}" loading="lazy" /></figure>
        <div>
          <h3>${esc(second.title)}</h3>
          <p>${esc(second.text)}</p>
          ${
            second.link
              ? `<a class="text-link" href="${esc(second.link.href)}" target="_blank" rel="noreferrer">${esc(
                  second.link.label,
                )}</a>`
              : ''
          }
        </div>
      </article>`
          : ''
      }

      ${notaire.title ? card(notaire) : ''}
    </section>

    <section id="about" class="section">
      <header class="section-head">
        <span class="num">(${esc(about.number)})</span>
        <h2>${esc(about.title)}</h2>
        <span class="section-aside">Based in Algeria</span>
      </header>

      <div class="about">
        <div class="about-copy">${aboutParagraphs.join('')}</div>
        <dl class="facts">${(about.facts || [])
          .map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
          .join('')}</dl>
      </div>
    </section>

    <section id="skills" class="section">
      <header class="section-head">
        <span class="num">(${esc(skills.number)})</span>
        <h2>${esc(skills.title)}</h2>
        <span class="section-aside">${esc(skills.aside || '')}</span>
      </header>

      <div class="skills">
        ${(skills.groups || [])
          .map(
            (g) => `<div class="skill-group">
          <h3>${esc(g.title)}</h3>
          <ul>${(g.items || []).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </div>`,
          )
          .join('')}
      </div>
    </section>

    <section id="contact" class="city">
      <div class="city-sky" aria-hidden="true">
        <div class="stars"></div>
        <div class="moon"></div>
        <div class="city-glow"></div>
      </div>

      <div class="city-body">
        <p class="city-label">(${esc(contact.number)}) — ${esc(contact.title)}</p>
        <h2 class="city-title">${esc(city.lead || "Let's make something")}<br /><em>${
          esc(city.italic || 'that runs offline.')
        }</em></h2>
        <p class="contact-lead">${esc(contact.lead)}</p>
        <div class="cta">${(contact.buttons || []).map((b) => btn(b)).join('')}${socialButtons}</div>
      </div>

      <div class="skyline" aria-hidden="true">
        <div class="skyline-layer" data-layer="back"></div>
        <div class="skyline-layer" data-layer="mid"></div>
        <div class="skyline-layer" data-layer="front"></div>
        <div class="skyline-haze"></div>
      </div>

      <footer class="site-footer">
        <div class="footer-row">
          <span>© <span id="year">2026</span> <span class="footer-name"></span></span>
          <span class="footer-time"><i class="dot"></i><span data-clock>--:--</span> Algiers</span>
        </div>
        <div class="footer-row footer-row-end">
          <span id="built">Built by hand with HTML and CSS. No framework.</span>
          <div class="footer-end">
            ${
              social.length
                ? `<nav class="footer-social">${social
                    .map(
                      (s) =>
                        `<a href="${esc(s.href)}" target="_blank" rel="noreferrer">${esc(
                          s.label.replace(' ↗', ''),
                        )}</a>`,
                    )
                    .join('')}</nav>`
                : ''
            }
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </section>
  `;

  document.querySelectorAll('.brand, .footer-name').forEach((el) => (el.textContent = S.name));
  document.querySelectorAll('.gh').forEach((el) => (el.href = S.github || '#'));

  // LinkedIn joins the header nav as soon as it is filled in.
  const ghLink = document.querySelector('.site-header .gh');
  if (S.linkedin && ghLink) {
    const link = document.createElement('a');
    link.href = S.linkedin;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = 'LinkedIn';
    ghLink.before(link);
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const built = document.getElementById('built');
  if (built && S.footer) built.textContent = S.footer;

  /* ------------------------------ reveal on scroll ------------------------- */

  const revealables = document.querySelectorAll(
    '.hero-title, .hero-lower, .section-head, .project, .project-small, .about-copy, .facts, .skill-group, .city-body > *',
  );

  if (reduceMotion) {
    revealables.forEach((el) => el.classList.add('is-in'));
  } else {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          reveal.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );
    revealables.forEach((el) => reveal.observe(el));
  }

  /* ---------------------------------- clock -------------------------------- */

  const clock = document.querySelector('[data-clock]');
  const tick = () => {
    if (!clock) return;
    clock.textContent = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Algiers',
    }).format(new Date());
  };
  tick();
  setInterval(tick, 15000);

  /* --------------------------------- stars --------------------------------- */

  function rng(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const starsEl = document.querySelector('.stars');
  if (starsEl) {
    const star = rng(77123);
    let html = '';
    for (let i = 0; i < 110; i++) {
      const top = (star() * 78).toFixed(2);
      const left = (star() * 100).toFixed(2);
      const size = star() > 0.86 ? 2 : 1;
      const delay = -(star() * 6).toFixed(2);
      const dur = (3 + star() * 5).toFixed(2);
      html += `<i style="top:${top}%;left:${left}%;width:${size}px;height:${size}px;--delay:${delay}s;--dur:${dur}s"></i>`;
    }
    starsEl.innerHTML = html;
  }

  /* -------------------------------- skyline -------------------------------- */

  // Three depth layers. Buildings tile each layer with a weighted flex-grow so
  // the silhouette fills any viewport width.
  const layers = [
    { key: 'back', count: 30, minH: 26, maxH: 62, minW: 0.7, maxW: 1.9, lit: 0.45, antenna: 0.1 },
    { key: 'mid', count: 24, minH: 38, maxH: 88, minW: 0.8, maxW: 2.0, lit: 0.75, antenna: 0.22 },
    { key: 'front', count: 16, minH: 30, maxH: 100, minW: 0.9, maxW: 2.2, lit: 1, antenna: 0.3 },
  ];

  const cityRng = rng(20261120);

  layers.forEach((layer, index) => {
    const host = document.querySelector(`.skyline-layer[data-layer="${layer.key}"]`);
    if (!host) return;
    let html = '';
    for (let i = 0; i < layer.count; i++) {
      const h = layer.minH + cityRng() * (layer.maxH - layer.minH);
      const w = layer.minW + cityRng() * (layer.maxW - layer.minW);
      const antenna = cityRng() < layer.antenna ? ' b-antenna' : '';
      const setback = cityRng() < 0.22 ? ' b-setback' : '';
      const cool = cityRng() < 0.28 ? ' b-cool' : '';
      const lit = (layer.lit * (0.45 + cityRng() * 0.55)).toFixed(2);
      html += `<div class="b${antenna}${setback}${cool}" style="height:${h.toFixed(
        1,
      )}%;flex-grow:${w.toFixed(2)};--lit:${lit}"></div>`;
    }
    host.innerHTML = html;
    host.style.zIndex = String(index + 1);
  });

  /* ------------------------------ scroll driver ---------------------------- */

  const root = document.documentElement;
  const progress = document.querySelector('.progress i');
  const skyline = document.querySelector('.skyline');
  const citySection = document.querySelector('.city');
  let ticking = false;

  function update() {
    ticking = false;

    const max = Math.max(1, root.scrollHeight - window.innerHeight);
    const p = Math.min(1, Math.max(0, window.scrollY / max));
    if (progress) progress.style.transform = `scaleX(${p})`;
    if (!skyline || !citySection) return;

    // The city lights up and zooms in as its section arrives; scrolling back up
    // reverses it.
    const rect = citySection.getBoundingClientRect();
    const enter = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
    const q = reduceMotion ? 0.7 : Math.min(1, Math.max(0, (enter - 0.02) / 0.85));
    skyline.style.setProperty('--q', q.toFixed(4));
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
