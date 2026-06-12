# Dev Shrimali - UX/UI Design Portfolio

A premium, interactive, and high-performance portfolio website built to showcase UX/UI design work. This project features a modern aesthetic, smooth scroll-triggered animations, and a polished section-based architecture.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/) (React-based animations)
  - [GSAP](https://gsap.com/) (Complex timeline & scroll animations)
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Key Features

- **Dynamic Hero Section:** Engaging landing view with kinetic typography and smooth layout transitions.
- **Project Showcase:** Elegant 3D cards, project video loops, and interactive media behaviors.
- **Interactive UI Elements:** Custom floating badges, smooth scrolling, and scroll-reveal transitions.
- **Premium Aesthetics:** Modern aesthetic with smooth gradients, curated typography, and carefully crafted micro-interactions.
- **Fully Responsive:** Optimized for both mobile and desktop experiences.
- **Performance Optimized:** Built with modern Next.js features for maximum speed and SEO.

## 🛠️ Recent Updates

- **Performance-Optimized Media Loader:** YouTube videos/embeds in the project showcase are lazy-loaded via an `IntersectionObserver` wrapper (`ProjectVideo.tsx`), preventing heavy iframe bootstrapping on initial load and reducing CPU usage.
- **GSAP Scroll Reveal Scoping:** Implemented a custom `useGsapReveal` hook that scopes `ScrollTrigger` instances within components and cleanly handles cleanup on unmount, fully respecting user reduced-motion preferences.
- **Interactive Magnetic Elements:** Added a client-side `Magnetic` component utilizing GSAP elastic springs to wrap key call-to-actions, introducing premium tactile hover micro-interactions.
- **Scrambled & Copyable Contact Details:** Integrated a `ScrambleEmail` component featuring a character-scrambling hover transition and instant email copying with visual success confirmation.
- **Server/Client Boundary Refinement:** Separated the dynamic case study page `/work/[slug]` into a server-side route wrapper (`page.tsx` for build-time static path pre-rendering and dynamic SEO metadata generation) and a client-side presentation view (`CaseStudyClient.tsx`).
- **Semantic Theme Architecture:** Migrated static colors to semantically defined CSS Custom Properties (e.g. `bg-surface`, `text-accent`) for consistent styling and simplified theme configuration.

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application locally.

## 📁 Project Structure

- `src/app/` - Next.js App Router pages, layouts, and dynamic case study routes.
- `src/components/` - Reusable UI components (Navbar, Hero, Custom Cards, PageLoader, Magnetic, etc.).
- `src/hooks/` - Custom React hooks for dynamic interactions (e.g., `useGsapReveal`).
- `src/data/` - Static and structured data (e.g., project descriptions and case studies).
- `public/` - Static assets, project cover images, and brand logos.

## 👨‍💻 Author

**Dev Shrimali**
- [GitHub](https://github.com/DevShrimali)
- [LinkedIn](https://www.linkedin.com/in/dev-shrimali/)

