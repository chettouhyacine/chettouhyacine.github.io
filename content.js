/* ============================================================
   EDIT THIS FILE. Everything you read on the site lives here.
   ------------------------------------------------------------
   Rules (the only ones):
   1. Change the text between the quotes '...' or "..." .
   2. Do not remove commas, brackets { } or [ ].
   3. Save the file, commit, push. The live site updates in ~1 min.

   Lines starting with // are comments and never appear on the page.
   ============================================================ */

const SITE = {
  /* ---------- identity, used in the header and the footer ---------- */
  name: 'Yacine Chettouh',
  email: 'chettouhyacine2001@gmail.com',
  github: 'https://github.com/chettouhyacine',

  /* ---------- other profiles, shown as buttons in Contact and in the footer ----------
     Paste the full URL for LinkedIn. For WhatsApp, give the number with its country
     code and no spaces, for example '213555123456' — the link is built for you.
     Leave '' (empty quotes) and that button simply does not appear. */
  linkedin: 'https://www.linkedin.com/in/yacine-chettouh-aa8407337/',
  whatsapp: '213563563198',

  /* ---------- the big opening block ---------- */
  hero: {
    eyebrow: 'Full-stack developer in Algeria',
    // The headline is split so the last words can be highlighted.
    headline: 'I build software that',
    // If you change the line above, change this too or write '' (empty).
    headlineBreak: 'businesses run on',
    highlight: 'every day.',

    /* Your photo, shown next to the headline.
       Put the file in assets/profile.jpg and it appears automatically.
       Write '' (empty quotes) to hide the picture. */
    photo: 'assets/profile.jpg',
    photoAlt: 'Yacine Chettouh',

    lede:
      'I design, build and ship business software end to end: the desktop app, the web ' +
      'interface and the database underneath. Exact money arithmetic, documents an ' +
      'accountant will accept, and nothing lost when the connection drops.',
    buttons: [
      { label: 'See the work', href: '#work', primary: true },
      { label: 'Get in touch', href: 'mailto:chettouhyacine2001@gmail.com', primary: false },
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Rust', 'Tauri', 'Electron', 'SQLite'],
  },

  /* ---------- section 01: what you have built ---------- */
  work: {
    number: '01',
    title: 'Featured work',
    project: {
      image: 'assets/showroom-dashboard.png',
      imageAlt: 'Showroom DZ dashboard showing stock value, monthly profit and alerts',
      title: 'Showroom DZ',
      badge: 'Desktop app, 2026',
      description:
        'Management software for Algerian car showrooms: own and consigned stock, sales ' +
        'with installments and trade-ins, consignment commissions, legal invoicing in ' +
        'French and Arabic, reports, roles and audit trail, all on one machine with no ' +
        'Internet connection.',
      highlights: [
        'Money stored as integer centimes. Invoices numbered without gaps, and issued documents locked.',
        'PDF printed from the same HTML as the live preview, plus Excel export with real formulas.',
        '35 unit tests and 27 end to end checks, including backup, wipe and restore.',
      ],
      links: [
        { label: 'Source code ↗', href: 'https://github.com/chettouhyacine/showroom-dz', ghost: false },
        {
          label: 'Windows installer ↗',
          href: 'https://github.com/chettouhyacine/showroom-dz/releases/latest',
          ghost: true,
        },
      ],
      tags: 'Electron, React, TypeScript, SQLite, Tailwind, esbuild, exceljs',
    },
    second: {
      image: 'assets/showroom-invoice.png',
      imageAlt: 'Generated A4 invoice with 19% VAT',
      title: 'The invoice that had to be right',
      text:
        'Every document type (invoice, quote, receipt, credit note, consignment mandate) ' +
        'is generated from one HTML template engine, with three VAT modes (none, 19 %, ' +
        'margin scheme), amounts written out in words, and a layout that survives printing ' +
        'on cheap A4 paper.',
      link: {
        label: 'See the generated samples ↗',
        href: 'https://github.com/chettouhyacine/showroom-dz/tree/main/samples',
      },
    },

    /* ---------- second full project ---------- */
    notaire: {
      image: 'assets/notaire-home.png',
      imageAlt: 'Notaire DZ home screen with daily summary cards and the Arabic sidebar',
      title: 'Notaire DZ',
      badge: 'Desktop app, 2026',
      description:
        'Practice software for an Algerian notary office: clients, case files, an encrypted ' +
        'document vault, a tamper evident audit trail and encrypted backups, on one Windows ' +
        'machine with no Internet connection. Arabic first interface, instant switch to French ' +
        'with the layout direction.',
      highlights: [
        'Records are sealed with AES-256-GCM before they reach SQLite, under an Argon2id derived key, so a copied database file is useless on its own.',
        'Every write, export and sensitive read is appended to a hash chained audit log that is verified on demand.',
        'Rates and deadlines live in versioned rule tables marked to be verified by a notary, so the software never invents a legal rule.',
      ],
      links: [
        { label: 'Source code ↗', href: 'https://github.com/chettouhyacine/notaire-dz', ghost: false },
        {
          label: 'Windows installer ↗',
          href: 'https://github.com/chettouhyacine/notaire-dz/releases/latest',
          ghost: true,
        },
        {
          label: 'Client guide, PDF ↗',
          href: 'https://github.com/chettouhyacine/notaire-dz/blob/main/docs/manual/NotaireDZ-Manuel.pdf',
          ghost: true,
        },
      ],
      tags: 'Rust, Tauri 2, React, TypeScript, SQLite, AES-256-GCM, Argon2id',
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
      'I work across the stack: **React interfaces, Node and Rust services, SQLite and SQL ' +
        'databases**, plus desktop shells in Tauri or Electron. My master\'s is in networks and ' +
        'security, so the encryption, the audit trail and the backups are part of the design, ' +
        'not an afterthought. When a feature cannot be verified, it is not finished: the ' +
        'domain logic is unit tested and the whole flow is exercised end to end before a release.',
      'I care about low-end hardware, French and Arabic interfaces, and backups that a ' +
        'non-technical owner can actually perform.',
    ],
    facts: [
      { label: 'Based in', value: 'Algeria' },
      { label: "Master's", value: 'Networks & security' },
      { label: 'Focus', value: 'Business software, desktop & web' },
      { label: 'Stack', value: 'TypeScript, React, Node.js, Rust, Tauri, Electron, SQLite' },
      { label: 'Languages', value: 'Arabic, French, English' },
    ],
  },

  /* ---------- section 03: skills ---------- */
  skills: {
    number: '03',
    title: 'Skills',
    aside: "Master's in networks & security",
    groups: [
      {
        title: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Rust', 'SQL', 'HTML & CSS'],
      },
      {
        title: 'Front-end',
        items: ['React', 'Tailwind CSS', 'Vite', 'Responsive layout', 'Arabic RTL & French UI'],
      },
      {
        title: 'Desktop & back-end',
        items: ['Electron', 'Tauri 2', 'Node.js', 'esbuild', 'REST APIs', 'Windows packaging'],
      },
      {
        title: 'Data',
        items: ['SQLite', 'Schema design', 'Migrations', 'Backup & restore', 'Excel / CSV export'],
      },
      {
        title: 'Networks & security',
        items: [
          'TCP/IP',
          'DNS & DHCP',
          'VPN & firewalls',
          'Linux administration',
          'AES-256-GCM',
          'Argon2id',
          'TLS / PKI',
          'Audit logging',
        ],
      },
      {
        title: 'Quality & tooling',
        items: ['Unit testing', 'End-to-end checks', 'Git & GitHub', 'Code review', 'Documentation'],
      },
      {
        title: 'Documents',
        items: [
          'PDF generation',
          'Invoicing & VAT',
          'French & Arabic documents',
          'Gap-free numbering',
        ],
      },
    ],
  },

  /* ---------- section 03: how to reach you ---------- */
  contact: {
    number: '04',
    title: 'Contact',
    lead:
      'Available for freelance work and full-time roles: business software, desktop and web ' +
      'apps, internal tools, and anything that has to keep running.',
    buttons: [
      { label: 'chettouhyacine2001@gmail.com', href: 'mailto:chettouhyacine2001@gmail.com', primary: true },
      { label: 'github.com/chettouhyacine ↗', href: 'https://github.com/chettouhyacine', primary: false },
    ],
  },

  /* ---------- the closing section: the city grows as you scroll ---------- */
  city: {
    // Set in the huge display type. The second line is italic.
    lead: "Let's make something",
    italic: 'that lasts.',
  },

  footer: 'Built by hand with HTML and CSS. No framework.',
};

window.SITE = SITE;
