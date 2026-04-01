# Aditya Prasanna Portfolio

React + Vite portfolio tailored for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish After Valid Changes

Use this after your changes are committed on `main`:

```bash
npm run publish:site
```

What it does:

1. Verifies you are on `main` with a clean working tree.
2. Builds the site.
3. Pushes `main`.
4. Publishes `dist` to `gh-pages` and force-pushes that branch.

Requirements:

- Node.js 18+
- Git auth already configured for push access to origin

## GitHub Pages

1. Create a GitHub repository for this project.
2. Push the `main` branch.
3. Enable GitHub Pages from the repository settings using the GitHub Actions source.
4. The workflow in `.github/workflows/deploy.yml` will publish the built site.
