# Cosmic Node Studio - AI Coding Guidelines

## Project Overview

**Cosmic Node Studio** is a React + TypeScript + Vite portfolio/landing page with a cosmic-themed design. It showcases full-stack development, mobile, UI/UX, SEO, consulting, and support services. The site uses a single-page application (SPA) architecture with scroll-based section navigation.

## Architecture Patterns

### Component Structure

- **Sections** (`src/components/sections/`): Page sections with content - HeroSection, SolutionsSection, PortfolioSection, AboutSection, ContactSection, FAQSection, ProcessSection
- **Reusable Components** (`src/components/`): GlassCard (glass-morphism cards), Navigation, CosmicBackground, TypewriterText, Footer, LoadingScreen
- **UI Library** (`src/components/ui/`): shadcn/ui components (pre-built: button, card, select, accordion, etc.) - use these for consistency
- **Figma Integration** (`src/components/figma/`): ImageWithFallback component for external image handling

### Navigation & Scroll Behavior

- App.tsx manages scroll state to track active section (stored in `activeSection` state)
- Smooth scroll handled via `element.scrollIntoView({ behavior: 'smooth' })`
- Sections identified by DOM `id` attributes (home, solutions, portfolio, process, about, contact, faq)
- Navigation component receives activeSection and onSectionClick callback for synchronized UI

### Animation Philosophy

- Use **motion** library (Framer Motion v12+) for all animations: `import { motion, AnimatePresence } from 'motion/react'`
- Common pattern: `initial={{ opacity: 0, y: 50 }}` → `animate={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}` for scroll-triggered animations
- GlassCard component demonstrates reusable animation patterns with configurable delay
- AnimatePresence for entry/exit animations (e.g., LoadingScreen)

### Design System

- **Color Palette**: Black backgrounds, cyan accents (#00FFFF), white text, white/10 borders, white/5 backgrounds
- **Glass Morphism**: `backdrop-blur-md bg-white/5 border border-white/10` with hover states
- **Hover Effects**: Scale, color shift to cyan, enhanced blur/shadow on glass cards
- **Fonts**: Titillium Web (body, loaded dynamically) + JetBrains Mono (code/headers)
- **Styling**: Tailwind CSS 4.1 with responsive design (mobile-first: `sm:`, `md:`, `lg:` breakpoints)

## Development Workflow

### Build & Run

```bash
npm run dev          # Start dev server (port 3000, auto-opens browser)
npm run build        # Production build → build/ directory
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on TypeScript files
npm run deploy       # Deploy to GitHub Pages (uses gh-pages package)
```

### File Organization Rules

- Keep components small and focused; extract helpers to separate files
- Section files go in `src/components/sections/`
- Reusable components go in `src/components/` (not sections)
- UI component imports: `import { Component } from '@/components/ui/component-name'`
- Use TypeScript interfaces for all props (strict: `no-implicit-any`)

## Key Technical Decisions

### Why Vite?

- Fast HMR, Fast Refresh via React plugin
- ESBuild-based bundling (faster than Webpack)
- Minimal configuration; tsconfig.app.json for app, tsconfig.node.json for config files

### Why Motion Over react-spring?

- Simpler API, better viewport-triggered animations out-of-box
- Better performance for particle animations (50 particles in CosmicBackground)

### Image Strategy

- External Unsplash URLs for hero/background images (cosmic theme search)
- ImageWithFallback component handles broken image links gracefully
- Opacity overlays and gradients for readability over images

### Styling Approach

- Tailwind utility classes for all styling (inline in className)
- No CSS modules or styled-components; keep styling inline for React component co-location
- Global imports in index.css: `@import "tailwindcss"`

## Common Patterns

### Adding a New Section

1. Create `src/components/sections/NewSection.tsx` with `id="new-section"` in root element
2. Import in App.tsx and add to sections array for scroll tracking
3. Use motion.div with `whileInView={{ opacity: 1, y: 0 }}` and `viewport={{ once: true }}`
4. Wrap content in GlassCard for consistent styling
5. Add navigation link in Navigation.tsx sections array

### Reusable Component with Motion

```tsx
// GlassCard pattern - always include optional delay prop
interface MyComponentProps {
  children: React.ReactNode;
  delay?: number;
}
const MyComponent: React.FC<MyComponentProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="..."
  >
    {children}
  </motion.div>
);
```

### Inline Event Handlers in Components

- Use arrow functions for scroll listeners in useEffect
- Always clean up listeners in return function: `return () => window.removeEventListener(...)`
- Example: Navigation.tsx scroll detection at line 24-28

## Code Quality

- ESLint config: TypeScript recommended + React Hooks + React Refresh
- No experimental/unstable APIs without explicit reasoning
- Responsive design defaults: mobile-first Tailwind classes
- TypeScript strict mode enforced (files use `.tsx` extension)

## When Adding Features

- Check if shadcn/ui has the component before creating from scratch
- Maintain cosmic black/cyan theme consistency
- Add scroll-triggered animations for section visibility
- Document inline if logic differs from convention
- Keep file sizes under ~200 lines; extract helpers if needed
