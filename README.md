# nikcholer.github.io

Personal portfolio site showcasing AI orchestration, SDLC automation, and systems architecture work.

**Live at:** [https://nikcholer.github.io](https://nikcholer.github.io)

## Tech Stack

- **Vite** + **React** + **TypeScript**
- Deployed via **GitHub Actions** → **GitHub Pages**
- Client-side routing with **React Router**

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

Pushes to `main` / `master` trigger the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.

## Structure

```
src/
  components/   # Header, Footer, ProjectCard
  pages/        # Home, Projects, About
  data/         # Project metadata
```