# Manish Rao — Senior Software Engineer Portfolio

Personal portfolio website showcasing 5+ years of experience building distributed backend systems, financial platforms, and AI/ML integrations across JP Morgan Chase, Accenture, and Tatvasoft.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (Static Export), React 18 |
| **Styling** | Tailwind CSS, Framer Motion (page transitions, animations) |
| **UI Components** | Radix UI (Tabs, Dialog, ScrollArea, Tooltip), react-icons |
| **Font** | JetBrains Mono |
| **Contact Form** | Web3Forms (email notifications on form submission) |
| **Analytics** | Google Analytics 4 (visitor tracking, demographics), Microsoft Clarity (session recordings, heatmaps) |
| **Deployment** | GitHub Pages via GitHub Actions CI/CD |

## Pages

### Home
Hero section with profile photo, animated SVG ring, download CV button, social links (GitHub, LinkedIn), animated stat counters (5+ years, 16 projects, 50+ technologies, 230+ commits), and embedded graduation video. Hidden easter egg: rapid-tap the profile photo 5 times to reveal an intro video overlay.

### Domains & Expertise
Six domain cards (Web Development, Machine Learning, AI Engineering, AI Agent Development, DevOps & Cloud, Testing & Reliability) with a comprehensive tech stack section organized into 9 categories with 40+ technology icons with hover effects and color-coded branding.

### Resume
Tabbed interface with 6 sections:
- **Overview** — Quick stats, professional summary, recent experience preview, core technologies
- **Experience** — 3 roles: JP Morgan Chase (Software Engineer, Dallas), Accenture (Software Engineer, India), Tatvasoft (Software Engineer, India)
- **Education** — MS in Software Engineering Systems (Northeastern University), BE in Computer Science (NMAM Institute of Technology)
- **Skills** — 7 categories: Languages, Backend & Frameworks, Frontend, Databases & Messaging, Cloud & DevOps, Observability & Testing, AI/ML & Tools
- **Projects** — 4 featured projects with tech tags and highlights
- **Achievements** — 17+ certifications from LangChain Academy, DeepLearning.AI, Neo4j, and Accenture ACE Award

### Projects
16 project cards in a responsive grid with expandable "Key Highlights" sections, tech stack tags, GitHub links, and live demo links. Categories span full-stack, AI/ML, DevOps, computer vision, and data engineering.

### Contact
Working contact form powered by Web3Forms with loading state, success/error feedback. Displays phone, email, address, and relocation info.

### Interactive Quizzes
Three quiz pages with scored MCQs and detailed explanations:
- **ML System Design** — 16 questions (Two-Tower architecture, Feature Store, model distillation, etc.)
- **DevOps & SRE** — 18 questions (Chaos Monkey, error budgets, SLOs, CI/CD, IaC, etc.)
- **System Design** — 30 questions (consistent hashing, rate limiting, CAP theorem, event sourcing, etc.)

## Features

- Dark/light theme toggle with animated Star Wars transition (Darkside/Lightside)
- Responsive design (mobile, tablet, desktop)
- Page transitions with stair-step animation effect
- Prefetching for instant page navigation
- Static export for GitHub Pages compatibility
- `basePath` configuration for subdirectory deployment

## Project Structure

```
app/
  page.jsx              # Home
  layout.jsx            # Root layout (analytics, theme, fonts)
  contact/page.jsx      # Contact form
  domains/page.jsx      # Expertise & tech stack
  resume/page.jsx       # Resume (tabbed)
  projects/page.jsx     # Project showcase
  devops/page.jsx       # DevOps quiz
  ml/page.jsx           # ML System Design quiz
  system-design/page.jsx # System Design quiz

components/
  Header.jsx            # Logo + navigation + theme toggle
  Nav.jsx / MobileNav.jsx
  Photo.jsx             # Profile photo with easter egg
  Stats.jsx             # Animated counters
  Social.jsx            # Social media links
  ThemeToggle.jsx       # Dark/light toggle with animation
  PageTransition.jsx / StairTransition.jsx
  ui/                   # Shadcn/ui components

public/assets/
  resume/               # Downloadable resume PDF
  photo.jpg             # Profile photo
  work/                 # Project screenshots
  certificates/         # Award PDFs
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

Pushes to `main` auto-deploy to GitHub Pages via `.github/workflows/deploy.yml`.

To build locally:

```bash
npm run build
```

Static output goes to `./out/`.
