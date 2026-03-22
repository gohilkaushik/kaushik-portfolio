# 3D Animated Portfolio

A modern, dark-themed portfolio built with **Next.js 14** (App Router), **Tailwind CSS**, and **GSAP**.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- GSAP (ScrollTrigger, timeline animations)
- Responsive, mobile-first, dark theme by default

## Features

- **Hero**: Fullscreen, animated name reveal, parallax mouse effect, smooth intro
- **About**: Two-column layout, scroll-triggered fade-in
- **Skills**: Grid of skill cards with 3D tilt on hover, GSAP-animated progress bars
- **Projects**: Card layout with hover scale/glow, scroll reveal
- **Contact**: Minimal form with animated submit button
- Smooth scrolling, custom cursor (desktop), glassmorphism, gradient backgrounds

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CursorEffect.tsx
│   ├── GSAPProvider.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Projects.tsx
│   ├── SectionTransition.tsx
│   ├── SkillCard.tsx
│   ├── Skills.tsx
│   └── SmoothScroll.tsx
└── hooks/
    ├── use3DTilt.ts
    ├── useIsomorphicLayoutEffect.ts
    └── useParallax.ts
```

## Customization

- **Name & subtitle**: Edit `NAME` and `SUBTITLE` in `src/components/Hero.tsx`
- **About content**: Edit `ABOUT` in `src/components/About.tsx`
- **Skills**: Edit `SKILLS` in `src/components/Skills.tsx`
- **Projects**: Edit `PROJECTS` in `src/components/Projects.tsx`
- **Theme**: Adjust `tailwind.config.ts` and `globals.css` for colors and gradients
