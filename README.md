# Cortex Landing Page

The official landing page for Cortex - An Autonomous Terminal Agent.

## Overview

Cortex is an autonomous terminal agent that executes end-to-end operations. This landing page showcases the product with a live terminal demo, interactive features, and clean modern design.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Features

- ✨ Live terminal demo with auto-rotating workflows
- 🎨 Modern, minimal design with sea-blue accents
- 📱 Fully responsive (mobile-first)
- ⌨️ Interactive command copying
- 🚀 Performance-optimized with < 2s load time
- ♿ Fully accessible (WCAG AA compliant)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cortex-ai/cortex-landing.git
cd cortex-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check

# Format code
npm run format
```

## Project Structure

```
cortex-landing/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── sections/     # Page sections (Hero, Capabilities, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── contexts/         # React contexts
│   ├── data/             # Static data (workflows, commands, etc.)
│   ├── utils/            # Utility functions
│   └── styles/           # CSS and design tokens
├── public/               # Static assets (if any)
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

The project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment (if needed)
4. Deploy

```bash
# One-command deployment (if Vercel CLI is installed)
vercel --prod
```

## Design System

### Colors

- **Background**: `#0a0b0d` (deep oceanic black)
- **Accent**: `#3ea8ff` (sea blue)
- **Text**: `#e6edf3` (warm off-white)
- **Dim Text**: `#8892a6` (gray-blue)

### Typography

- **Headings**: Inter (300-400 weight)
- **Body**: Inter (400 weight)
- **Code**: JetBrains Mono (400-500 weight)

### Spacing

Base 4px grid system:
- `4px`: `0.25rem`
- `8px`: `0.5rem`
- `16px`: `1rem`
- `24px`: `1.5rem`
- `32px`: `2rem`
- `48px`: `3rem`
- `64px`: `4rem`

## Performance

- **Target**: < 2s load time on 3G
- **Bundle**: < 40KB gzipped (core)
- **Lighthouse**: 95+ score across all metrics
- **Accessibility**: 100/100 score

## Accessibility

- WCAG AA compliant
- Keyboard navigation
- Screen reader support
- Reduced motion support
- High contrast colors

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this landing page design for your own projects.

## Questions?

- **Documentation**: [Cortex Wiki](https://github.com/cortex-ai/cortex/wiki)
- **Community**: [Discord](https://discord.gg/cortex)
- **Issues**: [GitHub Issues](https://github.com/cortex-ai/cortex/issues)

---

**Built with ❤️ for the Cortex community**