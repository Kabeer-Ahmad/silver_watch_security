# Silver Watch Security LTD

Professional website for **Silver Watch Security LTD** – a UK-based security services company offering manned guarding, mobile patrols, alarm response, key holding, and more.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Fonts:** Geist (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/silver-watch-security.git
cd silver-watch-security

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and set your site URL for production:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL (used for sitemap, Open Graph, canonical links). Default: `https://www.silverwatchsecurity.co.uk` |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # robots.txt
│   ├── about/                # About Us
│   ├── book-now/             # Get a quote
│   ├── clients/              # Our clients
│   ├── reviews/              # Client reviews
│   └── services/             # Services list + detail pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ReviewsSlider.tsx
│   ├── SectorsBubbles.tsx
│   ├── ExperienceCardsSlider.tsx
│   └── icons.tsx
├── lib/
│   ├── services-data.ts      # Service content
│   ├── reviews-data.ts       # Reviews
│   └── seo.ts                # SEO helpers
└── public/                   # Static assets (images, logos)
```

## Features

- **Responsive design** – Mobile-first layout with Tailwind
- **SEO** – Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **Service pages** – 14 security services with images and detail pages
- **Reviews** – Client testimonials with slider
- **Contact** – WhatsApp, phone, email CTAs
- **Client showcase** – Featured clients with ratings and partnership info

## Deployment

The app can be deployed to [Vercel](https://vercel.com), Netlify, or any Node.js host. Set `NEXT_PUBLIC_SITE_URL` to your production domain before building.

## License

Private – Silver Watch Security LTD.
