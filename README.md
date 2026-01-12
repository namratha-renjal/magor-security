# Magor Security - Official Website

Official website for Magor Security - providing comprehensive security services including close protection escorts for NGOs, operational facilitation, security systems, and cybersecurity solutions.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages

## Getting Started

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

3. **Build for Production**

```bash
npm run build
```

The static files will be generated in the `dist` directory.

## Project Structure

```
├── app/              # Next.js app directory (pages)
├── components/       # React components
├── public/           # Static assets
├── styles/           # Global styles
└── lib/              # Utility functions
```

## Deployment

This project is deployed on Cloudflare Pages. See `CLOUDFLARE_DEPLOY.md` for deployment instructions.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production base path
- `npm run lint` - Run ESLint
