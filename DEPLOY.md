# Deploying AgriSurv to Cloudflare Pages (free)

The site is configured for **static export** (`output: "export"` in `next.config.ts`),
so `npm run build` produces a plain `out/` folder that Cloudflare Pages serves
for free — no server, no monthly cost. Custom domain + HTTPS are included free.

Three stages: **1) push to GitHub → 2) connect Cloudflare Pages → 3) add your domain.**

---

## 1. Push the code to GitHub

You'll need a free account at [github.com](https://github.com).

1. Create a new **empty** repository (e.g. `agrisurv-site`) — do **not** add a
   README/.gitignore (the project already has them).
2. Back in this project folder, connect it and push (the repo is already committed
   on the `main` branch):

   ```bash
   cd agrisurv-site
   git remote add origin https://github.com/<your-username>/agrisurv-site.git
   git push -u origin main
   ```

   If git asks you to sign in, use the browser prompt or a
   [Personal Access Token](https://github.com/settings/tokens) as the password.

---

## 2. Connect Cloudflare Pages

1. Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorise GitHub and pick the `agrisurv-site` repo.
4. Set the **build settings**:

   | Setting | Value |
   |---|---|
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `npx next build` |
   | Build output directory | `out` |
   | Root directory | *(leave blank)* |

   The repo includes an `.nvmrc` pinning **Node 20**, so the build uses the right
   version automatically. (If a build ever fails on Node version, add an
   environment variable `NODE_VERSION = 20` under Settings → Environment variables.)

5. Click **Save and Deploy**. In ~1–2 minutes you'll get a live URL like
   `https://agrisurv-site.pages.dev` — that's the site, live.

> **Every future `git push` automatically rebuilds and redeploys.** No manual steps.

---

## 3. Connect your domain (agrisurv.co.za)

The most reliable, fully-free option (gives apex-domain support, free SSL and a
global CDN for the whole domain) is to let Cloudflare manage the domain's DNS:

1. In Cloudflare dashboard → **Add a site** → enter `agrisurv.co.za` → choose the
   **Free** plan. Cloudflare scans your existing DNS records.
2. Cloudflare shows you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).
3. Log in to wherever you registered `agrisurv.co.za` (your .co.za registrar) and
   **replace the nameservers** with the two Cloudflare gave you. (This can take a
   few minutes to ~24 hours to take effect.)
4. Once the domain is "Active" in Cloudflare, open your **Pages project → Custom
   domains → Set up a domain** → enter `agrisurv.co.za`. Repeat for
   `www.agrisurv.co.za` if you want both. Cloudflare wires up the DNS and issues a
   free SSL certificate automatically.

That's it — `https://agrisurv.co.za` will serve the site with HTTPS.

*(Alternative without moving nameservers: in Custom domains, Cloudflare gives you a
CNAME target to add at your current DNS host. This works well for `www.` but apex/
root domains can be awkward depending on the registrar — the nameserver route above
avoids that.)*

---

## 4. Make the contact form live (do this before/after launch)

The form already works (it falls back to opening the visitor's email app), but to
have submissions emailed to you automatically:

1. Create a free form at [formspree.io](https://formspree.io), pointed at
   `info@technosurveys.co.za`.
2. Put the form ID into `src/lib/site.ts` (`formspreeId`).
3. `git commit` + `git push` — Cloudflare redeploys automatically.

Do the same to fill in `whatsappNumber` and `phoneDisplay` in `src/lib/site.ts`.
