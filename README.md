# Mahima Agarwal — Portfolio

A modern, dark-mode personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion**.

## Run locally

```bash
# 1. install
npm install

# 2. start the dev server (auto-opens http://localhost:5173)
npm run dev

# 3. production build
npm run build
npm run preview
```

## Add your assets

Drop these two files into `public/` so they're served at the root:

| File | What it is |
| --- | --- |
| `public/profile.jpg` | Your headshot (square, ~600×600 works well). The Hero falls back to an "M" monogram if it's missing. |
| `public/CVMahima.pdf` | Your resume — linked from the Hero's "Resume" button. |

## Where to edit content

All copy, projects, experience, skills, writing, and social links live in **one file**:

```
src/data/content.js
```

Edit there — the components pick up the changes automatically.

## Wire up the contact form

`src/components/Note.jsx` simulates submission by default (logs to the console).
To send real emails, replace `simulateSubmit` with an [EmailJS](https://www.emailjs.com/) call:

```js
import emailjs from '@emailjs/browser';

await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', payload, 'PUBLIC_KEY');
```

The form already submits `{ name, email, message }`, which matches a typical EmailJS template.

## Pulling Medium posts dynamically (optional)

`src/components/Writing.jsx` ships with a static list. To fetch live, swap the array for a `useEffect` against:

```
https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@<your-handle>
```

…and map `data.items` into the same `{ title, preview, tag, date, url }` shape.

## Project layout

```
src/
├── App.jsx              # composes the page sections
├── main.jsx             # React entrypoint
├── index.css            # Tailwind + design tokens
├── data/
│   └── content.js       # single source of truth for all copy
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    ├── Skills.jsx
    ├── Writing.jsx
    ├── Note.jsx         # "Leave me a note" form
    ├── Contact.jsx
    ├── Footer.jsx
    └── ui/
        ├── Section.jsx  # consistent section header + spacing
        └── Reveal.jsx   # scroll-reveal wrapper for Framer Motion
```

## Design notes

- **Palette:** ink-black backgrounds with a single lime-green accent (`#a3e635`) — minimal and recruiter-friendly.
- **Type:** Space Grotesk for display, Inter for body, JetBrains Mono for accents.
- **Motion:** entrance fades, hover lifts, mouse-follow glow on project cards. Subtle, never excessive.
- **Responsive:** mobile-first, with a hamburger nav under `md`.

## Deploy

The build output is a static `dist/` folder — drop it on Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

```bash
npm run build
# upload ./dist
```
