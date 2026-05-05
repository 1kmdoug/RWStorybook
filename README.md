# ReportAll — Vristo Component Library (Storybook)

A living reference of every [Vristo](https://angular.vristo.sbthemes.com) component approved for use across ReportAll/RW web products. Built with **Angular 18** and **Storybook 8**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run Storybook locally
npm run storybook
```

Storybook launches at **http://localhost:6006**.

---

## What's Inside

| Category       | Count | Description                                               |
|----------------|------:|-----------------------------------------------------------|
| Components     |    10 | Tabs, Accordion, Modal, Cards, Carousel, Countdown, etc.  |
| Elements       |    17 | Buttons, Alerts, Badges, Dropdown, Infobox, Pagination…   |
| Forms          |    10 | Basic inputs, validation, switches, wizards, file upload…  |
| Datatables     |     2 | Striped tables and order-sorting datatable                 |

Every story includes:

- **Rendered demo** of the approved Vristo variant
- **ReportAll overrides** (drop shadow removal, striped tables, green tabs, etc.)
- **Usage notes** and open questions from the component audit
- **Reference link** back to the Vristo documentation

---

## ReportAll Overrides vs. Vanilla Vristo

These global differences are baked into the base styles (`vristo-base.scss`):

- **Buttons / Button Groups / Dropdowns** — drop shadow removed
- **Tables** — default changed to striped
- **Tabs** — green (primary) border on active tab
- **Accordion** — no spacing between items
- **Switches** — rounded with solid background color
- **Avatars** — Initials variant only (no photos)

---

## Project Structure

```
.storybook/
  main.ts              # Storybook config
  preview.ts           # Global parameters & story sort order
  manager.ts           # ReportAll-branded sidebar theme
  vristo-base.scss     # Vristo design tokens + ReportAll overrides
src/stories/
  Introduction.mdx     # Landing page
  components/          # Higher-level components
  elements/            # Atomic UI elements
  forms/               # Form patterns
  datatables/          # Table & datatable patterns
```

---

## Building for Static Hosting

```bash
npm run build-storybook
```

Output lands in `storybook-static/`. Drop it on any static host — GitHub Pages, Netlify, S3, whatever you've got.

---

## Source References

- **Component audit:** [Web UI Vristo Usage](https://reportall.atlassian.net/) (Confluence — ReportAll General)
- **Vristo Angular docs:** https://angular.vristo.sbthemes.com
- **Design contact:** Matt Snavely

---

## To-Do

- [ ] Import actual Vristo SCSS source once available from the dev team
- [ ] Hook up live Angular components (replacing inline template demos)
- [ ] Add Chromatic or Percy for visual regression testing
- [ ] Migrate to company infrastructure when hosting is sorted
- [ ] Fill in usage guidance for Sweet Alerts, Notifications, Badges (awaiting design input)
