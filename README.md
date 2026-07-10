# AgriSurv — marketing website

Marketing site for **AgriSurv**, a drone-based NDVI crop-stress analysis service
for South African farmers. Built with **Next.js 16 + React 19 + Tailwind CSS v4**.

It's a single, responsive landing page with: hero, services, how-it-works,
sample NDVI deliverable, equipment, pricing, about, FAQ and a contact form
(with WhatsApp + email). Everything is statically pre-rendered.

**Bilingual (English / Afrikaans).** A header toggle switches the whole site
instantly and remembers the visitor's choice (`localStorage`). English is the
default and stays server-rendered for SEO. All copy lives in
**`src/lib/dictionaries.ts`** — edit the `en` and `af` objects to change wording.
The two must have identical keys (TypeScript enforces this at build time), so
add any new string to **both** languages.

---

## ⚙️ Before you launch — replace the placeholders

All site-wide content lives in **`src/lib/site.ts`**. Search for `{{ }}` tokens
and replace them:

| Placeholder | Where | What to put |
|---|---|---|
| `{{FORMSPREE_ID}}` | `src/lib/site.ts` | A free form ID from [formspree.io](https://formspree.io). *Until set, the contact form falls back to opening the visitor's email app pre-filled.* |

Phone & WhatsApp are set to the Techno Survey Solutions number (069 808 6428);
swap in a dedicated AgriSurv number in `src/lib/site.ts` if you get one.

Other content to review:

- **Pricing** — figures in `src/components/Pricing.tsx` are **indicative ZAR placeholders**. Update the `price` / `unit` values to your real rates.
- **Equipment** — specs in `src/components/Equipment.tsx` describe a typical pro multispectral setup. Confirm/swap for your exact drone + sensor.
- **About / team** — `src/components/About.tsx` has a `TODO` to add founder/operator bios + photos.
- **Email** is already set to `info@technosurveys.co.za`. Domain is `agrisurv.co.za`.

### Hooking up the contact form (recommended)

1. Create a free form at [formspree.io](https://formspree.io) and point it at `info@technosurveys.co.za`.
2. Paste the form ID into `formspreeId` in `src/lib/site.ts`.
3. Done — submissions now email you, with a success state shown to the visitor.

---

## 🚀 Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## ☁️ Deploy

This is a standard Next.js app and deploys with zero config to **Vercel**
(recommended) or **Netlify**:

- **Vercel:** import the repo → it auto-detects Next.js → deploy. Then add the
  `agrisurv.co.za` domain in the project's Domains settings.
- **Netlify:** build command `npm run build`, the Next.js plugin handles the rest.

---

## 🎨 Brand & design notes

- **Palette** (from the logo) is defined as Tailwind tokens in `src/app/globals.css`:
  `forest-*` (deep green), `leaf-*` (bright green), `soil-*` (brown).
- **Fonts:** Sora (display) + Inter (body), loaded via `next/font`.
- **Logo:** `public/agrisurv-logo.png` — trimmed & compressed to 55 KB from the
  original 1.5 MB export. The original is kept in the parent folder.
- The **NDVI heat-map visuals** (hero + sample report) are generated SVGs
  (`src/components/NdviField.tsx`) — no image files, infinitely crisp. Swap in
  a real exported NDVI map any time you have one.
