---
name: Academic Core
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00017'
  primary: '#b90015'
  on-primary: '#ffffff'
  primary-container: '#e21e26'
  on-primary-container: '#fff9f8'
  inverse-primary: '#ffb4ac'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#4d5c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#65758c'
  on-tertiary-container: '#fcfbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000f'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is built on a foundation of **Technical Minimalism**. It targets a high-intellect academic audience, balancing the rigor of computer science with the modern energy of a student-led society. The aesthetic is "Studio Tech"—reminiscent of high-end developer tools and architectural portfolios.

The UI must feel expansive and focused. We achieve this through:
- **Intentional Negative Space:** Generous margins and padding to allow complex technical information to breathe.
- **High-Contrast Utility:** Absolute black typography on stark white backgrounds for maximum readability.
- **Functional Accents:** Vibrant red is used sparingly but decisively to signal action, importance, or brand presence.
- **Abstract Geometricity:** Use of subtle grid patterns and mono-spaced accents to evoke the feeling of an IDE without becoming a cliché.

## Colors

This design system utilizes a high-contrast, professional palette designed for clarity and impact.

- **Primary (Red):** Used exclusively for primary calls to action, active states, and critical brand identifiers. It should never be used for large background areas.
- **Secondary (Black):** Used for primary text and structural elements like heavy borders or icons.
- **Neutral/Surface:** A range of cool grays (`#F8FAFC` for secondary surfaces, `#F1F5F9` for tertiary) provides depth without adding visual noise.
- **Border:** A consistent light gray (`#E2E8F0`) is used to define containers where shadows would be too distracting.

## Typography

Typography is the primary vehicle for the brand’s "rigorous" personality. We employ a tri-font strategy:

1.  **Geist (Headings):** Tight, technical, and modern. Use for all major titles.
2.  **Inter (Body):** Highly legible and neutral. Used for all long-form content and UI labels.
3.  **JetBrains Mono (Accents):** Used for tags, metadata, small labels, and actual code snippets. It reinforces the computer science identity.

**Formatting Rules:**
- Keep line lengths for body text between 60-75 characters.
- Use `label-mono` for small categorization tags above headlines.
- Headlines should use "Optical" spacing—tighter tracking for larger sizes.

## Layout & Spacing

The design system employs a **12-column fixed grid** for desktop and a **fluid single-column** layout for mobile.

- **Desktop (1280px+):** 12 columns, 24px gutters, 80px side margins.
- **Tablet (768px - 1279px):** 8 columns, 24px gutters, 40px side margins.
- **Mobile (< 767px):** 4 columns, 16px gutters, 20px side margins.

Spacing follows an 8px base grid. Use `lg` (48px) and `xl` (80px) for vertical section spacing to maintain the "minimalist" and "academic" feel of a high-end publication.

## Elevation & Depth

To maintain a "clean and modern" tech feel, this design system avoids traditional heavy shadows. Depth is communicated through:

- **Tonal Layering:** The main background is white (`#FFFFFF`). Content cards or sidebars use a soft gray (`#F8FAFC`) with a subtle 1px border.
- **Soft Outlines:** Elements are primarily separated by 1px borders in `#E2E8F0`. 
- **Active Elevation:** Only when an element is hovered or "lifted" should a shadow be applied. Use a very large blur (32px) with very low opacity (4% Black) to create an "ambient glow" effect rather than a hard shadow.
- **Glassmorphism (Optional):** For navigation bars or modal backdrops, use a `blur(12px)` effect with a 70% opaque white background to maintain context of the page behind.

## Shapes

The shape language is "Modern Geometric." We use a consistent `rounded-md` (8px) for standard components like buttons and inputs, and `rounded-xl` (24px) for large layout containers and cards.

- **Buttons/Inputs:** 8px radius.
- **Content Cards:** 24px radius.
- **Selection Chips:** Full pill-shape (999px) to contrast against the geometric grid.

## Components

### Buttons
- **Primary:** Solid Black background, White text. No shadow. Hover state: Primary Red background.
- **Secondary:** Transparent background, 1px Black border.
- **Ghost:** Transparent background, JetBrains Mono text with an arrow icon `->`.

### Input Fields
- **Style:** 1px border (`#E2E8F0`), 8px radius.
- **Focus:** Border changes to Black with a 2px "inner" focus ring of Primary Red.
- **Label:** Small, JetBrains Mono, uppercase.

### Cards
- **Style:** White background, 1px border, 24px radius, 32px internal padding.
- **Feature Cards:** May include a subtle `#F8FAFC` header section to separate metadata from content.

### Chips & Tags
- **Style:** Small, pill-shaped, light gray background (`#F1F5F9`). Text in JetBrains Mono.
- **Active:** Primary Red background with White text.

### Lists
- Clean, no-bullet lists. Use 1px bottom borders to separate items. Hover states should use a subtle shift to a `#F8FAFC` background.