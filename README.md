# Talking Drummer Commerce

Modern talking drummer portfolio + commerce site built with Next.js 16, Tailwind CSS, Firebase (planned), and Paystack (planned).

## Project layout

```
ecom_dav/
├─ public/            # Static assets served by Next.js (icons, images, etc.)
├─ src/
│  ├─ pages/          # Next.js pages (Home has been refactored)
│  └─ styles/         # Global Tailwind styles
├─ legacy_html/       # Original static references (kept for visual guidance)
├─ package.json
├─ tailwind.config.ts
└─ next.config.mjs
```

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Next steps

- Wire Firebase Auth/Firestore/Storage for bookings, media, and shop data.
- Connect Paystack for checkout flows.
- Break the home page into reusable components inside `src/components/`.
- Gradually migrate or archive the legacy HTML once the Next.js routes are complete.

