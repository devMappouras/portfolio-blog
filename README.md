# Portfolio & Blog - Christos Mappouras

[![Deployed on Vercel]
Built with:
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A modern, professional portfolio and blog website showcasing projects, experience, and technical insights from a Full Stack Software Engineer.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This is a personal portfolio and blog application built with **Next.js 15**, **React 19**, and **TypeScript**. The website features a clean, modern design with dark mode support, showcasing professional experience, technical projects, and blog articles focused on software engineering best practices.

### About

The portfolio belongs to **Christos Mappouras**, a Full Stack Software Engineer based in Larnaca, Cyprus, specializing in:
- **Backend:** C#, ASP.NET Core, RESTful APIs, Microservices
- **Frontend:** Angular, React, Next.js, TypeScript
- **Database:** SQL Server, Query Optimization
- **Mobile:** Flutter, Dart
- **Methodologies:** Clean Architecture, Agile/Scrum, TDD

## ✨ Features

### 🏠 Home Page
- Hero section with professional introduction
- Skills showcase organized by categories (Languages, Frameworks, Tools, Methodologies)
- Featured blog posts section
- Call-to-action buttons for navigation
- Responsive design for all device sizes

### 💼 Experience Section
- Detailed work history and professional experience
- Timeline-based presentation
- Key responsibilities and achievements
- Technologies used in each role

### 🚀 Projects Section
- Showcase of technical projects
- Project descriptions and technologies used
- Links to live demos and source code
- Categorized by technology stack

### 📝 Blog
- Technical articles on software engineering topics
- Topics include: Clean Architecture, Angular Performance, Microservices, SQL Optimization
- Reading time estimates
- Tag-based categorization
- Full markdown support for blog posts
- Dynamic routing for individual blog posts

### 🎨 UI/UX Features
- **Dark Mode:** Seamless theme switching with `next-themes`
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Smooth Animations:** CSS animations for enhanced user experience
- **Accessible Components:** Built with Radix UI primitives
- **Modern Typography:** Geist font family for clean, professional look

## 🛠 Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[class-variance-authority](https://cva.style/docs)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional className utilities

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
  - Accordion, Alert Dialog, Avatar, Badge, Button, Card, Dialog
  - Dropdown Menu, Navigation Menu, Tabs, Toast, Tooltip, and more
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validators

### Additional Libraries
- **[date-fns](https://date-fns.org/)** - Date manipulation
- **[Recharts](https://recharts.org/)** - Charts and data visualization
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics

### Development Tools
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations

### Development

Run the development server:

```powershell
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The application will automatically reload when you make changes to the source files.

## 📁 Project Structure

```
portfolio-blog/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # 404 page
│   ├── globals.css          # Global styles
│   ├── blog/                # Blog section
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/          # Dynamic blog post routes
│   │       └── page.tsx     # Individual blog post page
│   ├── experience/          # Experience section
│   │   └── page.tsx         # Experience page
│   └── projects/            # Projects section
│       └── page.tsx         # Projects page
├── components/              # React components
│   ├── navigation.tsx       # Navigation bar
│   ├── footer.tsx           # Footer component
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Dark mode toggle
│   └── ui/                  # Reusable UI components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...              # Other Radix UI components
├── lib/                     # Utility functions and data
│   ├── utils.ts             # Helper functions
│   └── blog-posts.json      # Blog posts metadata
├── public/                  # Static assets
├── styles/                  # Additional styles
│   └── globals.css
├── components.json          # shadcn/ui configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## 🌐 Deployment

### Vercel Deployment (Recommended)

This project is configured for seamless deployment on **Vercel**:

1. **Push to GitHub:**
   ```powershell
   git add .
   git commit -m "Update project"
   git push origin main
   ```

2. **Automatic Deployment:**
   - Changes are automatically deployed via Vercel integration
   - Each push triggers a new deployment
   - Preview deployments for pull requests

3. **Live URL:**
   [https://devcmappouras.vercel.app/](https://devcmappouras.vercel.app/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Christos Mappouras**
- 📍 Location: Larnaca, Cyprus
- 💼 Company: D.G. Techlink
- 💻 GitHub: [@devMappouras](https://github.com/devMappouras)

---

<div align="center">

**Built with ❤️ using Next.js, React, and TypeScript**

⭐ Star this repository if you find it helpful!

</div>