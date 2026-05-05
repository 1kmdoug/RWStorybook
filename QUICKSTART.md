# Quick Start Guide

Get your ReportAll Component Library running in 5 minutes!

## Step 1: Clone the Repository

```bash
git clone https://github.com/1kmdoug/RWStorybook.git
```

## Step 2: Open in Terminal

```bash
cd RWStorybook
```

## Step 3: Install Dependencies

```bash
npm install
```

This will take 2-3 minutes to download all packages.

## Step 4: Start Storybook

```bash
npm run storybook
```

Your browser will automatically open to `http://localhost:6006`

## 🎉 That's It!

You now have a running Storybook with all your approved Vristo components!

---

## Next Steps

### 1. Show it to Matt

Share the URL `http://localhost:6006` or deploy it to GitHub Pages (see README.md)

### 2. Compare to Review Apps

Open the Simple Tabs component and compare it to your review app - you'll see it's the same component, but:
- ✅ No other tab options visible
- ✅ Loads instantly
- ✅ Has interactive controls
- ✅ Includes documentation

### 3. Deploy to GitHub Pages

This repo deploys from GitHub Actions. Push to `main`, then confirm that GitHub Pages is using **GitHub Actions** as the source:

1. Open the repo on GitHub
2. Go to **Settings** > **Pages**
3. Set **Source** to **GitHub Actions**
4. Push a commit or run **Deploy Storybook to GitHub Pages** from the Actions tab

Your Storybook will be live at:
`https://1kmdoug.github.io/RWStorybook/`

---

## Troubleshooting

**Port 6006 already in use?**
```bash
npx storybook dev -p 6007
```

**npm install fails?**
Make sure you have Node.js 18+ installed:
```bash
node --version
```

**Need help?**
Check the full README.md for detailed instructions.
