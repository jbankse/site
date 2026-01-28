# UNMARKED LABEL STUDIOS Website

Professional website for UNMARKED LABEL STUDIOS built with Next.js 16.

## Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Bundler**: Turbopack

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Global styles & design tokens
│   ├── sitemap.ts      # Dynamic sitemap generator
│   └── robots.ts       # Robots.txt configuration
```

## SEO Features

- ✅ Metadata API with Open Graph and Twitter cards
- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Semantic HTML structure
- ✅ Responsive viewport configuration
- ✅ Font optimization with `next/font`

## Configuration

Update these values in `src/app/layout.tsx`:

- `siteConfig.name` - Your site name
- `siteConfig.description` - Site description
- `siteConfig.url` - Production URL
- `siteConfig.ogImage` - Open Graph image path

## Adding New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file with your content
3. Uncomment the route in `src/app/sitemap.ts`

## License

Private - UNMARKED LABEL STUDIOS
# site
