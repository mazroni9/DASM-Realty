# 🧠 Cursor Implementation Prompt

## Copy this prompt into Cursor Chat when implementing new pages

```
You are implementing a real estate and auction platform UI for DASM.

Source of truth:
- Figma Dev Mode values
- DASM Design Tokens in /styles/tokens.css
- Arabic-first RTL layout

TASK:
1. Implement Property Details page based on the Figma frame:
   "Property / Details / Light & Dark"
2. Implement Dashboard Home page based on:
   "Dashboard / Home / RTL"

RULES:
- Use Next.js App Router
- Use React components
- Use CSS variables from tokens.css for light/dark
- Default language = Arabic (RTL)
- Language toggle switches to English (LTR)
- Theme toggle switches light/dark
- No inline styles unless unavoidable
- Match spacing, font sizes, and colors from Figma exactly

DESIGN TOKENS (from /styles/tokens.css):
- Colors: var(--navy), var(--green), var(--bg-main), var(--text-main)
- Spacing: var(--spacing-xs) through var(--spacing-2xl)
- Radius: var(--radius-sm), var(--radius-md), var(--radius-lg)
- Shadows: var(--shadow-sm), var(--shadow-md) (light mode only)
- Transitions: var(--transition-fast), var(--transition-normal)

IMPLEMENT:
- Header with logo, login icon, language toggle, theme toggle
- Property image gallery with fullscreen
- Property specs grid (2-3 columns)
- Auction status section (conditional - only if auctionEnabled)
- Dashboard sidebar (right in RTL, left in LTR)
- Dashboard KPI cards
- Properties table with actions

COMPONENT STRUCTURE:
- All components in /components directory
- Reusable Button component (Primary, Secondary, Green)
- Reusable Card component
- All components support dark mode
- All components support RTL/LTR

OUTPUT:
- Clean, readable, maintainable code
- Reusable components
- No placeholder styling
- Exact match with Figma design
- Use Tailwind classes with CSS variables where needed
```

---

## 📋 Quick Reference

### Colors
```css
var(--navy)        /* #0B3A63 */
var(--green)       /* #1FA971 */
var(--bg-main)     /* Light: #ffffff, Dark: #0b1220 */
var(--text-main)   /* Light: #0f172a, Dark: #e5e7eb */
```

### Spacing
```css
var(--spacing-xs)   /* 4px */
var(--spacing-sm)   /* 8px */
var(--spacing-md)   /* 16px */
var(--spacing-lg)   /* 24px */
var(--spacing-xl)   /* 32px */
var(--spacing-2xl)  /* 48px */
```

### Usage in Components
```tsx
// CSS Variables
<div style={{ padding: 'var(--spacing-lg)' }}>

// Tailwind with CSS Variables
<div className="bg-[var(--bg-main)] text-[var(--text-main)]">

// Tailwind with mapped colors
<div className="bg-dasm-navy text-dasm-green">
```
