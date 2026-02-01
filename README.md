# Debaprakash Jena — Portfolio Website

## Overview
A personal portfolio website that showcases projects, skills, and contact information. Built with semantic HTML and modern CSS (responsive layout, accessible UI, and subtle animations). This repository contains the full static site (no build tool required), ready to deploy to GitHub Pages or serve from any static host.

## Live Demo
`https://<your-username>.github.io/<repo-name>/`

## Features
- Clean, responsive design with mobile-first breakpoints
- Hero section with profile, CTA and social links (GitHub & LinkedIn)
- Projects gallery with tags, featured flags, and scrollable details
- About page with skills, timeline, projects list and resume download
- Contact form with enhanced styles and accessibility
- Dark mode support and reduced-motion respect for accessibility
- Lightweight, semantic HTML and CSS-only interactions (no JS required for the core site)

## Tech Stack
- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, CSS variables)
- Lightweight JS only for on-scroll reveal (progressive enhancement)

## Files & Structure
- index.html — Home / Hero / CTA
- about.html — About / Skills / Projects / Resume link
- projects.html — Project gallery (cards with details)
- contact.html — Contact form, multiple fields and validation attributes
- styles/style.css — Main stylesheet (responsive + dark mode)
- styles/responsive.css — Additional responsive rules (if present)
- scripts/main.js — Small enhancement: on-scroll reveal (respects prefers-reduced-motion)
- assets/ — images and `resume.pdf`

## Installation (local preview)
1. Clone the repository:

   git clone https://github.com/debaprakash2021/your-repo.git
   cd your-repo

2. Preview locally:
- Open `index.html` in your browser, or
- Run a simple static server (recommended):

  - Python 3: `python -m http.server 8000`
  - VS Code: Install "Live Server" extension and click "Go Live"

3. Open http://localhost:8000 in your browser.

## Deployment
- GitHub Pages: Push your repo to GitHub, enable Pages from the repository settings (use `main` branch / root or `gh-pages`), then visit the provided URL.
- Any static host (Netlify, Vercel, Surge) will also work.

## Accessibility & Best Practices
- Uses semantic headings, labels, and landmarks for screen readers
- Respects `prefers-reduced-motion` and has high-contrast dark-mode styles
- Form inputs include validation attributes (required, minlength)

## Customization Tips
- Replace `assets/resume.pdf` with your actual resume (same filename) for the Resume download button to work.
- Replace `mr_jena.jpg`, `momentum.png`, `mahalaxmiVendor.png`, and `labourLaws.png` with your preferred images (keep aspect ratios for best visuals).
- Update the social links in `index.html` to point to your live profiles.

## Contributing
- Feel free to open issues or submit pull requests for improvements. Keep changes focused and include screenshots where helpful.

## License
This project is licensed under the MIT License (see `LICENSE` if present).

## Contact
- GitHub: https://github.com/debaprakash2021
- LinkedIn: https://www.linkedin.com/in/debaprakashjena/

---

If you want, I can also:
- Add a screenshot gallery to this README (SVG or PNG),
- Add a CI workflow to deploy automatically to GitHub Pages,
- Or generate a `LICENSE` file and small contributing guidelines — tell me which one you prefer.
