# Project: Brittany's Personal Website

## Overview
A personal brand website that combines:
- Portfolio showcasing professional work and projects
- Personal story and "getting to know me" content
- Curated recommendations of tools and technologies
- Professional presence and networking

## Tech Stack
- **Framework**: Next.js (React-based with SSR/SSG capabilities)
- **Styling**: TailwindCSS (to be added)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended for Next.js)
- **Version Control**: Git

## Project Structure
```
brittany-site/
├── app/              # Next.js 13+ app directory
│   ├── page.tsx      # Homepage
│   ├── about/        # About/Bio page
│   ├── projects/     # Portfolio/Projects showcase
│   ├── tools/        # Tool recommendations
│   └── layout.tsx    # Root layout
├── components/       # Reusable React components
├── public/           # Static assets (images, etc.)
└── styles/           # Global styles
```

## Site Sections Planned
1. **Home** - Hero section with introduction and quick links
2. **About** - Personal story, background, interests
3. **Projects** - Portfolio of work with descriptions and links
4. **Tools & Stack** - Curated list of favorite tools, frameworks, and resources
5. **Contact** - Ways to connect (social links, email, etc.)

## Design Direction
- Clean, modern, and professional
- Showcase personality while maintaining professionalism
- Easy navigation and mobile-responsive
- Fast loading and optimized performance

## Code Style Preferences
- Use TypeScript for type safety
- Functional components with hooks
- Clean, readable code with descriptive names
- Component-based architecture
- Responsive design (mobile-first)

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Current Work
Setting up initial Next.js project structure and core pages

## Guidelines for Claude
- Focus on modern, clean design
- Prioritize user experience and accessibility
- Use Next.js best practices (App Router, Server Components where appropriate)
- Keep components modular and reusable
- Add comments for complex logic
- Ensure mobile responsiveness
- Optimize images and performance
