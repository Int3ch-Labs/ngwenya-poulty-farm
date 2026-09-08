# Ngwenyama Poultry Farm — Website

A responsive Next.js website for Ngwenyama Poultry Farm, built with the App
Router, TypeScript, and Tailwind CSS. It includes a password-protected admin
portal for posting farm updates/announcements — there is **no online
ordering or checkout** on this site by design; all sales enquiries are
handled by phone, WhatsApp, or the contact form.

## Features

- Fully responsive marketing site (Home, About, Our Eggs, Gallery, Farm
  Updates, Contact)
- Admin portal at `/admin` to sign in, then `/admin/dashboard` to create,
  edit, publish/unpublish, and delete farm updates — no coding required
- Farm updates are stored in a local JSON file (`data/posts.json`) via
  Next.js API routes, so posts persist between restarts without needing an
  external database
- Contact form that stores enquiries to `data/messages.json` (see "Email
  notifications" below if you want messages emailed to you instead/also)
- Four policy pages: Privacy Policy, Terms of Service, Cookie Policy, and a
  Food Safety & Quality page — written for an informational, no-checkout
  site and adapted for a South African business (references POPIA)
- Accessible by default: skip link, visible focus states, semantic HTML,
  reduced-motion support
- SEO basics: metadata per page, `sitemap.xml`, `robots.txt`

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then edit the values inside
npm run dev
```

Open http://localhost:3000 to view the site.

### Admin credentials

Set these in `.env.local` (see `.env.local.example`):

```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this-password
ADMIN_SESSION_SECRET=change-this-to-a-long-random-string
```

Then sign in at `/admin`. **Change the default password and session secret
before deploying** — the values baked in as fallbacks are for local
development only.

## Posting farm updates (no code required)

1. Go to `/admin` and sign in.
2. Click **New update**, fill in a title, category, summary, and the full
   post text (leave a blank line between paragraphs).
3. Toggle **Published** on to make it live immediately, or leave it off to
   save as a draft.
4. Published updates automatically appear on the **Farm Updates** page and
   the two most recent ones are featured on the homepage.
5. Use **Edit**, **Unpublish**, or **Delete** from the dashboard list at any
   time.

## Project structure

```
src/
  app/                 Pages and API routes (App Router)
    admin/             Login page + protected dashboard
    api/               posts, auth, and contact API routes
    blog/              Public farm-updates list + detail pages
    policies/          Privacy, terms, cookies, food safety
    ...                about, products, gallery, contact, home
  components/          Navbar, Footer, forms, admin UI, shared layout
  lib/
    posts.ts           File-backed CRUD helpers for farm updates
    auth.ts            Signed-cookie session helpers (Web Crypto, edge-safe)
  middleware.ts        Protects /admin/dashboard and post-mutating API routes
data/
  posts.json           Farm updates data (seeded with two sample posts)
  messages.json        Contact form submissions (created automatically)
```

## Notes on data storage

This project uses simple JSON files on disk instead of a database, which
keeps setup to `npm install` and nothing else. This works well for small
deployments (e.g. a single server or a platform with a persistent
filesystem). If you deploy to a platform with an ephemeral/read-only
filesystem (e.g. most serverless platforms), writes to `data/*.json` won't
persist between deployments — in that case, swap `src/lib/posts.ts` for a
real database (Postgres, SQLite via Turso, etc.) or a hosted CMS. The rest
of the app (pages, components, admin UI) will keep working unchanged since
they only call the functions exported from `src/lib/posts.ts`.

## Email notifications for contact form (optional)

Right now, contact form submissions are saved to `data/messages.json` only.
To also receive them by email, add an email provider (e.g. Resend, SendGrid)
inside `src/app/api/contact/route.ts` after the file is written.

## Before going live

- [ ] Change `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET`
- [ ] Replace the placeholder circular illustrations with real farm photos
      (Hero, About, Gallery)
- [ ] Update `BASE_URL` in `src/app/sitemap.ts` and `src/app/robots.ts` to
      your real domain
- [ ] Update social links in `src/components/Footer.tsx`
- [ ] Review the four policy pages with a qualified professional before
      publishing — they're solid templates, not legal advice
- [ ] Set up persistent storage (see "Notes on data storage") if deploying
      to a serverless/ephemeral host

## Scripts

```bash
npm run dev     # start local dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Google Fonts: Fraunces (display) + Inter (body), loaded via `next/font`
- No external database — JSON file storage for posts and messages
