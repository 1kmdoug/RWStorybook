# ReportAll RW Component Library

A curated Storybook component library featuring approved Vristo UI components customized for ReportAll applications.

## 🎨 Theme

This library uses a **Hunter Green** (`#285D4D`) primary color scheme, aligned with ReportAll's brand guidelines.

## 📦 What's Included

This component library contains only the **approved variants** from your Confluence documentation:

### Components
- **Tabs** - Simple Tabs
- **Accordion** - Basic
- **Modal** - Vertically Centered, Custom examples
- **Cards** - Card 1 and 4
- **Carousel** - Basic
- **Countdown** - Simple Countdown
- **Counter** - Simple Counter
- **Sweet Alerts** - Basic, Title with text, Mixin
- **Timeline** - Basic
- **Notifications** - Basic, Background Color
- Plus: Media Object, List Group, Pricing Table, Lightbox

### Elements
- **Alerts** - Default Alerts
- **Badges** - Outline
- **Buttons** - Default
- **Progress Bar** - Basic
- Plus: Avatar, Breadcrumbs, Button Groups, Dropdown, Infobox, Jumbotron, Loader, Pagination, Popovers, Search, Tooltips, Treeview, Typography

### Data Display
- **Tables** - Hover, Captions, Dropdown, Checkboxes
- **Datatables** - Order Sorting
- **Charts** - All
- **Widgets** - All
- **Font Icons** - All

### Forms
- **Basic Forms** - All
- **Checkbox and Radio** - Default
- **Switches** - Rounded
- Plus: Form Layout, Validation, Input Mask, Select2, Wizards, File Upload, Quill Editor, Date Picker, Clipboard

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Storybook**
   ```bash
   npm run storybook
   ```

   Storybook will open at `http://localhost:6006`

### Building for Production

```bash
npm run build-storybook
```

This creates a static build in `storybook-static/` that you can deploy anywhere.

## 📤 Deploying to GitHub Pages

1. **Create a new repository on GitHub**
   - Name it something like `reportall-component-library`
   - Don't initialize with README (you already have one)

2. **Push this project to your new repository**
   ```bash
   # In the project directory
   git init
   git add .
   git commit -m "Initial commit: ReportAll Component Library"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/reportall-component-library.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy-storybook
   ```

   This builds and deploys your Storybook to GitHub Pages. It will be available at:
   `https://YOUR_USERNAME.github.io/reportall-component-library/`

## 📝 Project Structure

```
reportall-component-library/
├── .storybook/               # Storybook configuration
│   ├── main.ts              # Main Storybook config
│   ├── preview.ts           # Preview settings
│   └── vristo-theme.scss    # Custom theme with hunter green
├── src/
│   ├── app/                 # Angular app (minimal)
│   ├── stories/             # Component stories
│   │   ├── Introduction.mdx # Welcome page
│   │   ├── components/      # Component stories
│   │   ├── elements/        # Element stories
│   │   ├── tables/          # Table stories
│   │   └── forms/           # Form stories
│   └── styles.scss          # Global styles
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎯 Usage Guidelines

### For Developers (Darren, Chandler)

1. **Browse components** in Storybook to see what's approved
2. **Copy code** from the Storybook interface
3. **No guessing** - only the variants shown are approved
4. **Reference the notes** included in each component's documentation

### For Designers

1. Use this as the **single source of truth** for approved components
2. All components follow the **hunter green theme** (#285D4D)
3. Matches the **Vristo Confluence page** you've already documented

## 🔗 Links

- **Vristo Documentation**: https://angular.vristo.sbthemes.com/
- **Original Confluence Page**: Web UI Vristo Usage
- **Storybook Documentation**: https://storybook.js.org/

## 💡 Benefits Over Review Apps

Unlike the review app approach where components are hidden:

✅ **Only approved components exist** - nothing to hide  
✅ **Faster to load** - no full application deployment  
✅ **Better documentation** - interactive controls and notes  
✅ **Easier to maintain** - just add/remove story files  
✅ **Shareable** - deploy to GitHub Pages and share a URL  

## 🛠️ Customization

### Changing the Primary Color

Edit `.storybook/vristo-theme.scss`:

```scss
:root {
  --primary-color: #285D4D; // Change this to your color
  --primary-hover: #1f4a3d;
  --primary-light: #3a7462;
  --primary-dark: #1a3d32;
}
```

### Adding More Components

1. Create a new `.stories.ts` file in the appropriate folder
2. Follow the pattern of existing stories
3. Storybook will automatically detect it

### Removing Components

Simply delete the `.stories.ts` file for that component.

## 📧 Questions?

This POC was created to demonstrate how Storybook can replace the review app approach for component documentation. It includes all components from your Confluence page with the hunter green theme applied.

---

**Created:** February 2026  
**Purpose:** Proof of Concept for ReportAll Component Standardization
