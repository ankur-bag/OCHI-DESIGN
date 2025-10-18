# OCHI DESIGN — UI Practice Project

A small React + Vite UI practice project that recreates a stylized agency landing experience using modern animation and scroll libraries.

## Quick links
- Config: [vite.config.js](vite.config.js)  
- Scripts & deps: [package.json](package.json)  
- Entrypoint: [src/main.jsx](src/main.jsx)  
- App root: [`App`](src/App.jsx) ([src/App.jsx](src/App.jsx))  
- Global styles: [src/index.css](src/index.css), [src/App.css](src/App.css)

Key components:
- [`Navbar`](src/components/Navbar.jsx) — [src/components/Navbar.jsx](src/components/Navbar.jsx)  
- [`LandingPage`](src/components/LandingPage.jsx) — [src/components/LandingPage.jsx](src/components/LandingPage.jsx)  
- [`Marquee`](src/components/Marquee.jsx) — [src/components/Marquee.jsx](src/components/Marquee.jsx)  
- [`About`](src/components/About.jsx) — [src/components/About.jsx](src/components/About.jsx)  
- [`Eyes`](src/components/Eyes.jsx) — [src/components/Eyes.jsx](src/components/Eyes.jsx)  
- [`Featured`](src/components/Featured.jsx) — [src/components/Featured.jsx](src/components/Featured.jsx)  
- [`Card`](src/components/Card.jsx) — [src/components/Card.jsx](src/components/Card.jsx)  
- [`Footer`](src/components/Footer.jsx) — [src/components/Footer.jsx](src/components/Footer.jsx)

## Tech / libraries
- Vite — fast dev server ([vite.config.js](vite.config.js))
- React 19
- Tailwind CSS (imported in [src/index.css](src/index.css) / [src/App.css](src/App.css))
- Framer Motion — animations ([src/components/Marquee.jsx](src/components/Marquee.jsx), [src/components/Featured.jsx](src/components/Featured.jsx))
- Locomotive Scroll — smooth scrolling initialized in [`App`](src/App.jsx) ([src/App.jsx](src/App.jsx))
- react-icons for small icon usage

## Run locally

1. Install
```sh
npm install
```

2. Start dev server
```sh
npm run dev
```

3. Build / preview
```sh
npm run build
npm run preview
```

(See scripts in [package.json](package.json))

## Project notes
- [`App`](src/App.jsx) sets up LocomotiveScroll on the top-level container. If you see scroll issues, confirm the library version and initialization element (`data-scroll-container`).
- Tailwind is imported directly in [src/index.css](src/index.css) and [src/App.css](src/App.css). Adjust your tailwind config if you add new utility classes or custom fonts.
- The [`Eyes`](src/components/Eyes.jsx) component listens for `mousemove` and applies rotation to the pupils; it uses inline style transforms.
- Animations in [`Featured`](src/components/Featured.jsx) and [`Marquee`](src/components/Marquee.jsx) rely on Framer Motion transitions — tune durations/delays for different pacing.

## Recommended improvements
- Add a Tailwind config and purge paths for production builds.
- Convert repeated large text blocks into smaller components for accessibility.
- Add ESLint / Prettier automation to catch style and formatting issues (there is an eslint config in the repo: [eslint.config.js](eslint.config.js)).
- Add alt text improvements for images for better accessibility.

## License
Use this code for learning and experimentation.
