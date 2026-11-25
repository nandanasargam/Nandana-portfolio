# Nandana Sargam Madhu: Portfolio

Suggested repository name: `nandana-portfolio`

## Overview
A single-page portfolio for a full-stack software engineer (.NET and React). It leads with two live projects, then experience, skills, education and contact details. The hero is styled as a REST API response, reflecting the candidate's API development work. Light and dark themes are supported, and all content comes from the resume and LinkedIn profile.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables are needed, and no external fonts or services are loaded.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. For a production check, run `npm run build` then `npm start`.

## Customize
- **Content:** edit `data/content.js`: profile, projects, experience, skills, education, certifications.
- **Colors and theme:** edit the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).
- **Layout:** each section is a component in `components/`; reorder them in `app/page.jsx`.
- **Resume download:** place your PDF in `public/` and add a link in `components/Contact.jsx`.

## Structure
```
app/         layout, page, global styles
components/  Header, Hero, Projects, About, Experience, Skills, Education, Contact, Footer
data/        content.js (all site text)
public/      static files
```

## Before publishing
- The resume lists the technologies "React, TypeScript, Tailwind CSS, ASP.NET, SQL Server" without tying them to a specific project, so they are shown on both projects. Adjust `tech` in `data/content.js` if they differ.
- Add a metrics line to each project's `outcome` once you have real numbers.
