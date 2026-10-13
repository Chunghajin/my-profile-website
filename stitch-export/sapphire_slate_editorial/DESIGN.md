---
name: Sapphire Slate Editorial
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#5b598c'
  on-secondary: '#ffffff'
  secondary-container: '#c7c3fe'
  on-secondary-container: '#514f81'
  tertiary: '#006058'
  on-tertiary: '#ffffff'
  tertiary-container: '#007b71'
  on-tertiary-container: '#b3fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c4c1fb'
  on-secondary-fixed: '#181445'
  on-secondary-fixed-variant: '#444173'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined, architectural approach to personal portfolio presentations. Rooted in modern editorial minimalism, it balances generous negative space with authoritative typography and energetic electric-sapphire anchors. The emotional profile is credible, forward-thinking, and meticulously structured—projecting the poise of a seasoned practitioner.

The visual direction rejects ornamental clutter in favor of crisp delineation, translucent layering, and deliberate contrast. High-density content zones are counterbalanced by expansive canvas margins, producing an uncluttered, high-end studio aesthetic.

## Colors

The palette pairs high-luminance canvas backgrounds with grounded slate typography and focused kinetic blue accents.

- **Primary (`#2563EB`):** High-energy electric sapphire reserved for focal interactions, active states, key interactive links, and critical CTAs.
- **Secondary (`#1E1B4B`):** Deep indigo navy employed for structural contrast, featured badge fills, and contextual anchors.
- **Tertiary (`#0D9488`):** Deep teal used sparingly for live status indicators, production milestones, and positive metadata tags.
- **Neutral Core:**
  - Base Background: `#FFFFFF`
  - Subtle Canvas/Surface Container: `#F8FAFC`
  - Subtle Borders & Separators: `#E2E8F0`
  - Muted Text & Supporting Metas: `#64748B`
  - Primary Body & Subheadings: `#334155`
  - High-Contrast Headlines & Titles: `#0F172A`

## Typography

The type hierarchy prioritizes crisp vertical metrics and tight horizontal tracking for larger display weights, lending a contemporary editorial posture to project headlines and statements. 

- Use negative tracking (`-0.02em` to `-0.03em`) on sizes above `24px` to avoid loose character spacing.
- Set running text in `body-md` using slate `#334155` for high legibility without the harshness of pure black.
- Use `label-sm` with uppercase transformation and `0.04em` letter spacing for section tags, timeline milestones, and badge elements.

## Layout & Spacing

The layout is built upon a 12-column responsive fluid grid with a hard ceiling max-width of `1280px` centered on wide displays. 

- **Desktop (≥1024px):** 12 columns, `1.5rem` (`24px`) gutters, `3rem` (`48px`) minimum outer margins. Section blocks use `space-xl` multiplied for rhythm (`5rem` to `7.5rem` between distinct portfolio sections).
- **Tablet (768px - 1023px):** 8 columns, `1.25rem` (`20px`) gutters, `2rem` (`32px`) margins. Sidebar meta blocks collapse below primary case studies.
- **Mobile (<768px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) margins. Multi-column metric groups and cards collapse to single-column vertical stacks.

## Elevation & Depth

Visual hierarchy uses fine low-contrast borders (`1px solid #E2E8F0`) paired with ambient, cold-tinted shadows to prevent visually heavy or muddy surfaces:

- **Level 0 (Flat Canvas):** Clean surface (`#FFFFFF` or `#F8FAFC`) with no shadow. Structural separation relies entirely on `1px` borders in `#E2E8F0`.
- **Level 1 (Card Rest):** Used for project cards, skill modules, and input surfaces:
  `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.03); border: 1px solid #E2E8F0;`
- **Level 2 (Interactive Hover):** Dynamic translation on hover (`transform: translateY(-2px)`) with expanded ambient shadow:
  `box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.06), 0 4px 8px -4px rgba(15, 23, 42, 0.03); border-color: #CBD5E1;`
- **Level 3 (Overlay / Navigation Dock):** Floating fixed headers, interactive sheets, and command palettes:
  `background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.07), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid rgba(226, 232, 240, 0.8);`

## Shapes

The design language uses refined, balanced curves (`0.5rem` base, scaling to `1rem` for major modules) that balance technical precision with approachable modern surfaces:

- **Controls & Small Components:** `0.5rem` (`8px`) for buttons, text inputs, dropdown triggers, and interactive list tiles.
- **Badges & Meta Chips:** Fully rounded pills (`9999px`) to visually contrast against square-aligned layouts.
- **Cards & Case Study Containers:** `1rem` (`16px`) corner radius with matching inner image clip paths (`0.75rem` / `12px`).

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, radius `0.5rem`, padding `0.625rem 1.25rem`. Hover shifts to `#1D4ED8` with subtle translate-y; active compresses by `0.98` scale.
- **Secondary:** Background `#F8FAFC`, border `1px solid #E2E8F0`, text `#0F172A`. Hover transitions background to `#F1F5F9` and border to `#CBD5E1`.
- **Tertiary / Ghost:** Background transparent, text `#334155`, hover background `#F8FAFC`, text `#0F172A`.

### Chips & Badges
- **Category Badge:** Background `#EFF6FF`, text `#2563EB`, border `1px solid #DBEAFE`, radius `9999px`, padding `0.25rem 0.75rem`, typography `label-sm`.
- **Status Chip:** Outer pill container with a live pulsing dot (e.g., `#0D9488` for availability indicators). Background `#F0FDFA`, text `#115E59`, border `1px solid #CCFBF1`.

### Cards
- **Project Showcase Card:** Surface `#F8FAFC`, border `1px solid #E2E8F0`, radius `1rem`, inner padding `1.5rem`. Contains a high-resolution preview frame with `0.75rem` radius, followed by an inline category badge row, title in `headline-sm`, summary in `body-sm`, and an external link icon.

### Form Inputs
- **Text & Area Fields:** Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `0.5rem`, padding `0.75rem 1rem`. Active focus rings apply `outline: none; border-color: #2563EB; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`. Placeholder colored `#94A3B8`.

### Navigation Dock
- Floating top or bottom shell, wrapped in a frosted pill (`backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.8)`), bordered with `#E2E8F0`, offering smooth anchor navigation with active markers highlighted in `#2563EB`.