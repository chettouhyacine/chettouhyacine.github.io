/* ============================================================
   EDIT THIS FILE — everything you read on the site lives here.
   ------------------------------------------------------------
   Rules (the only ones):
   1. Change the text between the quotes '...' or "..." .
   2. Do not remove commas, brackets { } or [ ].
   3. Save the file, commit, push — the live site updates in ~1 min.

   Lines starting with // are comments and never appear on the page.
   ============================================================ */

const SITE = {
  /* ---------- identity, used in the header and the footer ---------- */
  name: 'Yacine Chettouh',
  email: 'chettouhyacine2001@gmail.com',
  github: 'https://github.com/chettouhyacine',

  /* ---------- the big opening block ---------- */
  hero: {
    eyebrow: 'Full-stack developer · Algeria',
    // The headline is split so the last words can be highlighted.
    headline: 'I build software that keeps working',
    // If you change the line above, change this too or delete it (write '').
    headlineBreak: 'when the internet',
    highlight: "doesn't.",
    lede:
      'Small businesses run on a laptop and a prayer. I ship Windows desktop tools with a ' +
      'local database, local printing and local backups — no cloud bill, no connection ' +
      'required, nothing lost when the line drops.',
    buttons: [
      { label: 'See the work', href: '#work', primary: true },
      { label: 'Get in touch', href: 'mailto:chettouhyacine2001@gmail.com', primary: false },
    ],
    stack: ['TypeScript', 'React', 'Electron', 'Node.js', 'SQLite'],
  },

  /* ---------- section 01: what you have built ---------- */
  work: {
    number: '01',
    title: 'Featured work',
    project: {
      image: 'assets/showroom-dashboard.png',
      imageAlt: 'Showroom DZ dashboard showing stock value, monthly profit and alerts',
      title: 'Showroom DZ',
      badge: 'Desktop app · 2026',
      description:
        'Management software for Algerian car showrooms: own and consigned stock, sales ' +
        'with installments and trade-ins, consignment commissions, legal invoicing in ' +
        'French and Arabic, reports, roles and audit trail — all on one machine with no ' +
        'Internet connection.',
      highlights: [
        'Money stored as integer centimes; invoices numbered without gaps, issued documents locked.',
        'PDF printed from the same HTML as the live preview, plus Excel export with real formulas.',
        '35 unit tests and 27 end-to-end checks, including backup → wipe → restore.',
      ],
      links: [
        { label: 'Source code ↗', href: 'https://github.com/chettouhyacine/showroom-dz', ghost: false },
        {
          label: 'Windows installer ↗',
          href: 'https://github.com/chettouhyacine/showroom-dz/releases/latest',
          ghost: true,
        },
      ],
      tags: 'Electron · React · TypeScript · SQLite · Tailwind · esbuild · exceljs',
    },
    second: {
      image: 'assets/showroom-invoice.png',
      imageAlt: 'Generated A4 invoice with 19% VAT',
      title: 'The invoice that had to be right',
      text:
        'Every document type — invoice, quote, receipt, credit note, consignment mandate — ' +
        'is generated from one HTML template engine, with three VAT modes (none, 19 %, ' +
        'margin scheme), amounts written out in words, and a layout that survives printing ' +
        'on cheap A4 paper.',
      link: {
        label: 'Real generated samples ↗',
        href: 'https://github.com/chettouhyacine/showroom-dz/tree/main/samples',
      },
    },
  },

  /* ---------- section 02: who you are ---------- */
  about: {
    number: '02',
    title: 'About',
    paragraphs: [
      "I'm Yacine, a full-stack developer based in Algeria. I work on the unglamorous " +
        'software that actually runs a business: stock lists, receipts, unpaid invoices, ' +
        'commission owed to a car owner.',
      'My focus is **offline-first desktop applications**: a real local database instead ' +
        'of a subscription, exact ' +
        'money arithmetic instead of floating point, and documents that a tax inspector ' +
        'will accept. When a feature cannot be verified, it is not finished — that is why ' +
        'the domain logic is unit-tested and the whole flow is exercised end to end before ' +
        'a release.',
      'I care about low-end hardware, French and Arabic interfaces, and backups a ' +
        'non-technical owner can actually perform.',
    ],
    facts: [
      { label: 'Based in', value: 'Algeria' },
      { label: 'Focus', value: 'Offline-first business software' },
      { label: 'Stack', value: 'TypeScript, React, Electron, Node, SQLite' },
      { label: 'Languages', value: 'Arabic, French, English' },
    ],
  },

  /* ---------- section 03: how to reach you ---------- */
  contact: {
    number: '03',
    title: 'Contact',
    lead:
      'Available for freelance work and full-time roles — desktop apps, internal tools, ' +
      'anything that has to run without a reliable connection.',
    buttons: [
      { label: 'chettouhyacine2001@gmail.com', href: 'mailto:chettouhyacine2001@gmail.com', primary: true },
      { label: 'github.com/chettouhyacine ↗', href: 'https://github.com/chettouhyacine', primary: false },
    ],
  },

  footer: 'Built by hand — HTML, CSS, no framework.',
};

window.SITE = SITE;
