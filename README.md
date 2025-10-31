# GearsMap Website

A modern, performant Next.js website for GearsMap, featuring an interactive 3D globe hero section and comprehensive information about our services.

## 🚀 Features

- **Interactive 3D Globe**: Built with Cobe for an engaging visual experience
- **Modern Stack**: Next.js 15.2.4, React 19, TypeScript
- **Optimized Performance**: ~121KB First Load JS, Static Site Generation
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dark Mode**: Supported by default with next-themes
- **SEO Optimized**: Complete metadata and Open Graph support

## 📋 Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📁 Project Structure

```
gearsmapwebsite/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   └── scroll-to-top.tsx # Scroll to top button
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
│   └── images/         # Image files
└── styles/             # Additional styles
```

## 🤖 GitHub Copilot Agents

This project supports GitHub Copilot agents for AI-assisted development. For detailed information on how to use GitHub Copilot agents, especially the Claude HQ agent, see:

- **[GitHub Copilot Agents Guide (English)](./GITHUB_COPILOT_AGENTS.md)**
- **[Guía de Agentes de GitHub Copilot (Español)](./GITHUB_COPILOT_AGENTS_ES.md)**

## 📚 Documentation

- [Migration Guide](./MIGRATION.md) - Details about the completed migration
- [Improvement Plan](./PLAN_DE_MEJORA.md) - Roadmap and future enhancements

## 🌐 Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **3D Graphics**: Cobe
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 🎯 Performance Metrics

- **Build Time**: ~20 seconds
- **First Load JS**: 121 KB
- **Rendering**: Static Site Generation (SSG)
- **Lighthouse Score**: 90+

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Quality

The project follows best practices:
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Responsive design principles

## 📄 License

Private project - All rights reserved

## 🤝 Contributing

For internal team members only. Please follow the established coding standards and submit pull requests for review.

## 📧 Contact

For more information, visit our website or contact the development team.

---

**Last Updated**: October 31, 2025
