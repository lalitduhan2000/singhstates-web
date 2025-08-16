
# SinghStates (Realtor.com‑style starter)

Professional Next.js + Tailwind project inspired by Realtor.com layout.
Deployed on Vercel; forms send leads to your Gmail via **Google Apps Script Web App**.

## Quick Start (no terminal needed)
1) Upload this folder to a **new GitHub repo** (or drag‑drop on GitHub → "Upload files").  
2) On **Vercel → New Project → Import from GitHub** → Deploy.  
3) In Vercel → Project → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_LEAD_WEBHOOK` = (your Google Apps Script Web App URL)
4) Redeploy → Open your site.

## Local (optional)
```bash
npm install
npm run dev
```

## Where to edit
- Brand/phone/WhatsApp: `components/Header.tsx`, `app/contact/page.tsx`
- Homepage hero/sections: `app/page.tsx`
- Properties data (demo): `data/properties.json`
- Sell form webhook: set `NEXT_PUBLIC_LEAD_WEBHOOK` env
- Colors/styles: `tailwind.config.ts` and `app/globals.css`

## Google Apps Script (to Gmail)
1. Go to **script.new** → create a new Apps Script project.
2. Paste this minimal code and replace `TO_EMAIL` with your Gmail:
```js
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var body = Object.keys(data).map(k => k + ": " + data[k]).join("\n");
  MailApp.sendEmail("TO_EMAIL@gmail.com", "New SinghStates Lead", body);
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
}
```
3. Deploy → **Deploy as web app** → Who has access: **Anyone** → copy the **Web App URL**.
4. Put this URL into Vercel env `NEXT_PUBLIC_LEAD_WEBHOOK` and **Redeploy**.

## SEO
- robots + sitemap ready
- JSON‑LD `RealEstateAgent` in `app/layout.tsx`
- Fast, responsive, Lighthouse‑friendly

— generated 2025-08-16
