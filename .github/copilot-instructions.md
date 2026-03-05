# SV Buchenau Website – AI Agent Instructions

## Project Overview

This is a **Next.js 16.1.6** website for a German sports club (Schützenverein Buchenau), featuring news articles, club information, and shooting sports content. The site uses **DatoCMS** as a headless CMS and is deployed on **Vercel**.

**Key Technologies:**
- Next.js 16.1.6 (App Router) with Turbopack
- React 19.2 + TypeScript/JavaScript (mixed)
- DatoCMS (GraphQL CMS) with `@datocms/cda-client`
- HeroUI + Tailwind CSS v3.4.17
- Vercel Analytics (opt-in via cookie consent)

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build (validates deployment)
npm run start    # Start production server locally
npm run lint     # Run ESLint
```

**Important:** Always run `npm run build` before deploying to catch build-time errors.

## Environment Variables

Required in `.env.local`:
```env
DATOCMS_READONLY_TOKEN=<your-token>  # DatoCMS read-only API token
NEXT_PUBLIC_SITE_URL=<production-url> # Optional: for sitemap generation
```

⚠️ **Security:** Never commit `.env.local` – token should remain private.

## Project Structure

```
app/
  ├── Components/       # Shared UI components
  │   ├── Navbar.js    # Site navigation (client component)
  │   ├── Footer.js    # Site footer
  │   ├── Button.tsx   # File download button (client)
  │   ├── CookieBanner.tsx # GDPR consent (client)
  │   ├── GoogleMaps.tsx   # Embedded map with consent (client)
  │   └── calendar.tsx     # Event calendar (client)
  ├── aktuelles/       # News/articles
  │   ├── page.jsx     # Article list (server component)
  │   └── [slug]/      # Dynamic article detail
  ├── api/file/        # File download endpoint
  ├── verein/          # Club info pages
  ├── schiesssport/    # Shooting sports pages
  └── layout.tsx       # Root layout with fonts
lib/
  ├── datocms.js       # DatoCMS query helper (React cache)
  └── articles.ts      # Fallback article data
```

## Key Patterns & Conventions

### Server vs Client Components
- **Server Components** (default): All pages, data fetching in `app/aktuelles/`, `app/verein/`
- **Client Components** (`'use client'`): Navbar, Footer, Button, CookieBanner, GoogleMaps, calendar
  - Use client components only for state, events, localStorage, or browser APIs

### Data Fetching (DatoCMS)
```javascript
import { performRequest } from "@/lib/datocms";

const data = await performRequest({
  query: `query { allArticles { id, title, slug } }`
});
```

**Pattern:** 
- `performRequest()` in `lib/datocms.js` wraps DatoCMS queries with React `cache()` for automatic deduplication
- Always use async server components for data fetching
- Fallback data available in `lib/articles.ts` if CMS unavailable

### Images
- **DatoCMS images:** Use `<DatoImage>` from `react-datocms` (responsive, optimized)
- **External images:** Use Next.js `<Image>` with `remotePatterns` configured for `images.ctfassets.net`
- **Local images:** Use Next.js `<Image>` from `/public` directory

### Styling
- **Tailwind CSS** (utility-first) – primary styling method
- **HeroUI components** – pre-built UI components (@heroui/react)
- **Custom colors:** Brand green `bg-lime-600` (#65a30d)
- **Responsive:** Always use `sm:` / `md:` / `lg:` breakpoints
- **Dark mode:** Not currently implemented

### Files & Downloads
File download pattern (see `app/Components/Button.tsx`):
```typescript
const response = await fetch('/api/file?path=/file.pdf');
const blob = await response.blob();
const url = URL.createObjectURL(blob);
// Trigger download via <a> element
```

## Recent Changes (2026-03-05)

✅ **Migrated to Next.js 16.1.6** from 15.5.12
- Turbopack File System Caching enabled (`experimental.turbopackFileSystemCacheForDev: true`)
- React 19.2.0 upgrade
- All routes validated and building successfully
- New logging structure: compile + render times

## Constraints & Gotchas

### Mixed TypeScript/JavaScript
- ⚠️ Project uses `.ts`, `.tsx`, `.js`, `.jsx` inconsistently
- When creating new files, match the file extension pattern of similar existing files
- Components in `app/Components/` are mostly `.tsx` and `.js`
- Pages can be `.tsx` or `.jsx`

### DatoCMS Queries
- ⚠️ No error handling for failed CMS requests – queries assume success
- If implementing error handling, consider fallback to `lib/articles.ts`
- Token is required but may be missing in dev environments

### German Language
- ⚠️ All content is in German, no i18n configured
- Keep all UI text, comments, and error messages in German
- Component names and code can be in English

### HeroUI + Tailwind Types
- If you encounter Tailwind config type errors with HeroUI plugin, cast the plugin type:
  ```typescript
  plugins: [heroui() as any]
  ```
  (See `/memories/repo/dependency-notes.md` for details)

### Metadata & SEO
- ⚠️ Only root layout has metadata – individual pages lack metadata exports
- When adding new pages, consider adding page-level metadata for SEO

### Cookie Consent & Analytics
- Vercel Analytics only loads after user accepts cookies via `CookieBanner`
- `localStorage.getItem('cookiesAccepted')` gates the analytics load

## Common Tasks

### Adding a New Static Page
1. Create `app/[page-name]/page.tsx`
2. Add metadata export for SEO
3. Use server component for static content
4. Add route to `app/sitemap.ts`

### Adding a New DatoCMS Query
1. Define GraphQL query in the component
2. Use `performRequest({ query: '...' })` – auto-cached
3. Handle the response data structure
4. Consider adding fallback data to `lib/articles.ts`

### Creating a New Client Component
1. Add `'use client'` directive at top
2. Place in `app/Components/` (consistent with existing structure)
3. Match file extension (`.tsx` for TypeScript, `.js` for JavaScript)
4. Import and use in server components as needed

### Testing Production Build
```bash
npm run build  # Must succeed before deployment
npm run start  # Test locally
```

## Architecture Decisions

### Why DatoCMS?
- Lightweight headless CMS for non-technical editors
- GraphQL API with good DX
- Image optimization built-in

### Why HeroUI?
- Pre-built accessible components
- Good Tailwind integration
- Reduces custom component code

### Why Mixed .js/.ts?
- Legacy: Project started before full TypeScript adoption
- Gradual migration in progress
- New files should prefer TypeScript

### Why No i18n?
- Single-language (German) site
- Target audience is local
- Can add `next-intl` if internationalization needed

## Debugging Tips

1. **DatoCMS not loading?** Check `DATOCMS_READONLY_TOKEN` in `.env.local`
2. **Images not showing?** Verify `remotePatterns` in `next.config.mjs` matches image domain
3. **Client component errors?** Ensure `'use client'` is first line, no server-only imports
4. **Build failures?** Run `npm run build` locally – same errors will appear in Vercel
5. **TypeScript errors?** Check `tsconfig.json` includes – manually maintained list

## Next Steps for Improvements

- [ ] Add error boundaries for better UX
- [ ] Implement page-level metadata for all routes
- [ ] Consider full TypeScript migration
- [ ] Add error handling to DatoCMS queries
- [ ] Extract environment-specific config to separate file
- [ ] Add unit tests for critical components
- [ ] Consider adding stale-while-revalidate caching strategy

---

*Last updated: 2026-03-05 after Next.js 16.1.6 migration*
