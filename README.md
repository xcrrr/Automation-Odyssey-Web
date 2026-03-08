# Automation Odyssey — Website

Official website for Automation Odyssey AI Agency ([automationodyssey.pl](https://automationodyssey.pl)).

Built with **React + TypeScript + Tailwind CSS + Vite**, hosted on **GitHub Pages**.

---

## 🚀 How to Deploy (Easiest Method — 1 Step)

The site deploys **automatically** every time you merge a pull request into `main`.

**To publish your fix right now:**

1. Open this link: **https://github.com/xcrrr/Automation-Odyssey-Web/pull/9**
2. Scroll down and click **"Merge pull request"** → **"Confirm merge"**
3. Wait ~2 minutes — the site will be live at [automationodyssey.pl](https://automationodyssey.pl)

That's it. GitHub Actions handles the build and deployment automatically.

---

## 💻 How to Run Locally (For Development)

**Requirements:** Node.js 18+ (check with `node --version`)

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the local dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

Any changes you make to files are reflected instantly (hot reload).

---

## 📦 How to Build for Production (Optional)

The deploy workflow does this for you automatically, but if you want to check the build locally:

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🔁 Full Workflow Summary

```
Edit code  →  git push  →  Open a pull request  →  Merge to main  →  Auto-deployed ✅
```

No manual upload, no FTP, no server configuration needed.

---

## 📁 Project Structure

```
├── components/          # React components (Header, Hero, Footer, etc.)
├── src/                 # App entry point, CSS, translations (i18n)
├── public/              # Static files (CNAME for custom domain)
├── index.html           # HTML template
├── vite.config.ts       # Vite build config
├── tailwind.config.js   # Tailwind CSS config
└── .github/workflows/   # GitHub Actions deploy workflow
```
