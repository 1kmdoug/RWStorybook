# Quick Start Guide

Get your ReportAll Component Library running in 5 minutes!

## Step 1: Download & Extract

You should have downloaded a ZIP file. Extract it to your desired location.

## Step 2: Open in Terminal

```bash
cd reportall-component-library
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

### 3. Deploy to GitHub Pages (Optional)

To share with your team:

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/reportall-component-library.git
git push -u origin main

# Deploy to GitHub Pages
npm run deploy-storybook
```

Your Storybook will be live at:
`https://YOUR_USERNAME.github.io/reportall-component-library/`

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
