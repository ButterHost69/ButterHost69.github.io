# Design Theme — Palash S Patel Portfolio

> **Guiding principle:** Every visual choice is anchored to the My Neighbor Totoro sunflower wallpaper. The palette is extracted from its tones — burnt earth, warm golds, muted creams — and rendered through a dark, glassmorphic lens. The result is warm, nostalgic, and quietly technical.

---

## 1. Philosophy

- **Mood:** Warm darkness. Not cold, clinical dark-mode — this is earthy, fire-lit, late-summer-evening dark.
- **Metaphor:** Looking at a field of sunflowers through smoked glass at dusk.
- **Texture:** The wallpaper is the soul. All UI sits on top of it via semi-transparent glass panes, never fully obscuring it.
- **Personality:** Minimal, monospace-leaning, slightly Japanese-aesthetic in restraint.

---

## 2. Wallpaper & Background Treatment

| Property | Value |
|----------|-------|
| **Image** | `my-neighbor-totoro-sunflowers.png` (hosted on GitHub raw) |
| **Sizing** | `cover` |
| **Position** | `center` |
| **Attachment** | `fixed` (parallax feel) |
| **Overlay** | Fixed pseudo-element `::before` with `rgba(20, 10, 5, 0.72)` — a burnt umber wash that dims the wallpaper without killing it |

The overlay opacity (`0.72`) is intentional. Going darker feels like a blackout curtain; going lighter makes the wallpaper compete with text. `0.72` is the sweet spot where the sunflowers are felt but not read.

---

## 3. Color Palette

All colors are derived from the wallpaper's dominant tones.

### Core Backgrounds

| Token | Hex | Role |
|-------|-----|------|
| `--burnt-bg` | `#140a05` | Deepest background color. Used as the CSS `background-color` fallback and the base tone behind glass panels. Matches the darkest shadows in the wallpaper. |

### Text Colors

| Token | Hex | Role |
|-------|-----|------|
| `--text` | `#f5f0e0` | Primary text. A warm cream, like aged paper or dried sunflowers. Not pure white — pure white would clash with the warm wallpaper. |
| `--text-muted` | `#a89878` | Secondary text, dates, prefixes, inactive nav items. A desaturated tan. |

### Accent Colors

| Token | Hex | Role |
|-------|-----|------|
| `--accent` | `#e0a820` | Primary accent. Warm sunflower gold. Used for: hover states, active nav items, tag pills, inline code background, blockquote borders, strong emphasis. |
| `--accent-soft` | `#c89420` | Secondary accent. Deeper, slightly burnt gold. Used for `strong` text inside prose to create hierarchy without shouting. |

### Glass Surfaces

| Token | Hex / Value | Role |
|-------|-------------|------|
| `--glass` | `rgba(20, 10, 5, 0.65)` | Standard glass panel. Sidebar, blog post container. Lets wallpaper show through at 35% opacity. |
| `--glass-hover` | `rgba(20, 10, 5, 0.82)` | Hover/active state for glass. Darkens to bring focus. |
| `--glass-border` | `rgba(224, 168, 32, 0.10)` | Subtle gold-tinted border on glass panels. Almost invisible, but catches light at edges. |

### Shadows & Highlights

| Token | Value | Role |
|-------|-------|------|
| `--highlight` | `inset 0 1px 0 rgba(255, 255, 255, 0.04)` | Top inner glow on glass panels. Simulates light hitting the top edge. |

### Markdown / Prose Surfaces

| Element | Treatment |
|---------|-----------|
| Inline code | Background: `rgba(224, 168, 32, 0.12)`, Text: `--accent` |
| Code blocks | Background: `rgba(0, 0, 0, 0.5)`, Border: `--glass-border`, Text: `--text` |
| Blockquotes | Left border: `3px solid --accent`, Background: `rgba(20, 10, 5, 0.3)`, Text: `--text-muted`, Italic |
| HR | `1px solid rgba(168, 152, 120, 0.18)` — barely visible warm divider |
| Images | `max-width: 100%`, no border-radius (sharp edges match the monospace vibe) |

---

## 4. Typography

### Primary Font

| Property | Value |
|----------|-------|
| **Family** | `Iosevka Charon` |
| **Source** | Google Fonts CDN |
| **Weights loaded** | 300, 400, 500, 700 (both upright and italic) |

Iosevka Charon is a variant of the Iosevka monospace superfamily. It is narrow, highly legible, and carries a technical/editorial personality. It is used for **everything** — headings, body text, nav, tags, code. This monolithic font choice unifies the site and reinforces the "terminal / editor" aesthetic.

### Usage Patterns

| Element | Weight | Style | Size | Notes |
|---------|--------|-------|------|-------|
| Hero name (`h1`) | 700 | normal | `clamp(2.5rem, 6vw, 4.5rem)` | Large, commanding |
| Page titles (`h1`) | 700 | normal | `clamp(2.4rem, 4vw, 3.4rem)` | Blog listing, post headers |
| Post title | 700 | normal | `clamp(1.8rem, 4vw, 2.6rem)` | Inside post layout |
| Section headings (`h2`) | 700 | normal | `1.5rem` | Prose subheadings |
| Sub-sections (`h3`) | 600 | normal | `1.2rem` | Prose sub-subheadings |
| Nav links | 500 | *italic* | `1rem` | Sidebar nav, hero nav. Italic gives them a command-line flag feel (`/home`, `/blogs`) |
| Body text | 400 | normal | `1rem` (17px base) | Line-height: `1.75` |
| Dates / metadata | 400 | normal | `0.85rem` | `--text-muted` |
| Tag pills | 500 | normal | `0.78rem` | Monospace, uppercase feel via weight |
| Tree prefixes (`├─`, `└─`) | 400 | normal | `0.93rem` | Monospace, `--text-muted` at 60% opacity |
| Back link | 500 | *italic* | `0.95rem` | Post footer |

### Fallback Stack

```css
font-family: "Iosevka Charon", monospace;
```

---

## 5. Layout System

### Breakpoint

| Name | Width | Behavior |
|------|-------|----------|
| Mobile | `<= 768px` | Sidebar hidden. Content spans full width. Padding reduces. |
| Desktop | `> 768px` | Sidebar visible at `280px` fixed width. Content offset by `280px`. |

### The Sidebar

- **Position:** Fixed, left edge, full height
- **Width:** `280px`
- **Background:** `--glass` with `backdrop-filter: blur(24px) saturate(170%)`
- **Padding:** `2.5rem 1.8rem`
- **Structure:** Flex column, `justify-content: space-between`
  - **Top:** Navigation links
  - **Bottom:** Social icons (GitHub, LinkedIn) with top separator border
- **Nav link hover:** Background shifts to `--glass-hover`, text shifts to `--text`, subtle gold shadow (`0 2px 12px rgba(224, 168, 32, 0.12)`)
- **Social icon hover:** Color shifts to `--accent`, background to `--glass-hover`, `translateY(-3px)` bounce

### Content Areas

- **Blog listing (`/blogs`):**
  - Margin-left: `280px`
  - Padding: `3rem 3.5rem`
  - No glass container around the whole page — the tree groups sit directly on the wallpaper overlay for a lighter feel

- **Blog post (`/blogs/[slug]`):**
  - Margin-left: `280px`
  - Padding: `1.5rem`
  - Post container: full `--glass` panel with blur, `3rem` internal padding
  - Post header centered: tags → title → date
  - Divider (`<hr>`) separates header from content

- **Hero (`/`):**
  - Full viewport height (`min-height: 100vh`)
  - Centered flex column
  - No sidebar, no glass panel — just the name and links floating on the wallpaper

---

## 6. Spacing Tokens

While not fully tokenized in CSS custom properties yet, the following spacing values are used consistently:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight gaps, icon padding |
| `--space-sm` | `1rem` | Nav gaps, small margins |
| `--space-md` | `2rem` | Section padding, container padding |
| `--space-lg` | `4rem` | Large section gaps |
| `--space-xl` | `8rem` | Footer margin-top |

(Note: These exist in `global.css` but are overridden by the dark theme pages. They are preserved here as the intended spacing vocabulary.)

---

## 7. Component Patterns

### Navigation Links

```
Style: italic, monospace, command-flag syntax
Format: /home, /blogs, /projects, /about, /resume
Hover: color → --text, background → --glass-hover
Active: not explicitly styled yet (future enhancement)
```

### Tag Pills

```
Background: rgba(224, 168, 32, 0.15)
Text: --accent
Border-radius: 999px (fully rounded)
Padding: 0.2em 0.75em
Font: 0.78rem, weight 500, monospace
```

### Tree View (Blog Listing)

```
Group header: --accent color, italic monospace, bottom border
Tree connectors: ├─ / └─ / │ prefixes in --text-muted at 60% opacity
Item hover: background → rgba(20, 10, 5, 0.35), text → --accent, title underline
Date: right-aligned, --text-muted, 0.78rem
```

The tree view intentionally avoids glass cards. It uses plain text with ASCII art connectors, reinforcing the terminal/editor aesthetic.

### Code Blocks

```
Background: rgba(0, 0, 0, 0.5) — deeper than glass, reads as a recessed panel
Border: 1px solid --glass-border
Border-radius: 0 (sharp, like everything else)
Padding: 1.4em
```

### Social Icons

```
Size: 1.4rem (sidebar), 1.1rem (hero)
Color: --text-muted
Hover: --accent with bounce translateY(-3px) and circular glass background
```

---

## 8. Interaction & Motion

| Interaction | Behavior |
|-------------|----------|
| Nav link hover | `0.3s ease` — color + background |
| Social icon hover | `0.25s cubic-bezier(0.34, 1.56, 0.64, 1)` — overshoot bounce |
| Tree item hover | `0.2s ease` — background + color |
| Link underline | `text-underline-offset: 3px`, color transition `0.2s` |
| Page load | None currently (future: subtle fade-in) |

---

## 9. Anti-Patterns / What to Avoid

| Don't | Why |
|-------|-----|
| Use border-radius on images or code blocks | Sharp edges are part of the monospace/technical identity |
| Use pure white (`#fff`) for text | It fights the warm wallpaper. Always use `--text` (`#f5f0e0`) |
| Use cool blues or purples | They clash with the warm sunflower palette. Stay in the burnt-gold family |
| Add heavy drop shadows | The glass + blur + fixed wallpaper already creates depth. Extra shadow looks muddy |
| Use the legacy light theme (`global.css` ivory palette) | It is deprecated. All pages use the burnt dark palette defined here |

---

## 10. Future Pages

The following pages are planned and will inherit this theme. Specific layout patterns for each will be appended to this document after implementation:

- **`/projects`** — Likely project cards with glass panels, tags, and external links
- **`/resume`** — Likely a timeline or structured list layout

Both will use:
- The same sidebar (if full-page) or centered layout (if hero-style)
- `--glass` containers
- `--accent` for key highlights and interactive elements
- Iosevka Charon throughout

---

## 11. Quick Reference Sheet

```css
/* Paste at the top of any new component/page style block */
:root {
  --burnt-bg:    #140a05;
  --text:        #f5f0e0;
  --text-muted:  #a89878;
  --accent:      #e0a820;
  --accent-soft: #c89420;
  --glass:       rgba(20, 10, 5, 0.65);
  --glass-hover: rgba(20, 10, 5, 0.82);
  --glass-border: rgba(224, 168, 32, 0.10);
  --highlight:   inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* Background wallpaper treatment */
:global(body) {
  background-color: var(--burnt-bg);
  background-image: url('https://github.com/ButterHost69/ButterHost69.github.io/blob/main/images/wallpapers/my-neighbor-totoro-sunflowers.png?raw=true');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: var(--text);
}

:global(body::before) {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(20, 10, 5, 0.72);
  z-index: -1;
  pointer-events: none;
}
```

---

*Last updated: 2026-05-13*
