---
name: FleetPulse Matrix V2R8
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbd9db'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedef'
  surface-container-high: '#e9e7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#44474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f2'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#211200'
  on-tertiary: '#ffffff'
  tertiary-container: '#38260b'
  on-tertiary-container: '#a88c69'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#feddb5'
  tertiary-fixed-dim: '#e1c29b'
  on-tertiary-fixed: '#281802'
  on-tertiary-fixed-variant: '#584326'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e4e2e3'
typography:
  display-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  stack-tight: 0.5rem
  stack-dense: 0.25rem
  sidebar-width: 240px
---

## Brand & Style
The design system is engineered for high-precision fleet management and logistics oversight. The brand personality is **authoritative, analytical, and reliable**, prioritizing functional utility over aesthetic flourish. It targets maintenance managers and logistics coordinators who require a "single pane of glass" view of complex operations.

The design style is **Corporate / Modern** with a focus on **Information Density**. It utilizes a systematic approach to hierarchy, where whitespace is used surgically to separate data clusters rather than for purely decorative "breathing room." The interface should evoke the feeling of a professional dashboard—calm under pressure, structured for speed, and entirely predictable.

## Colors
The palette is rooted in a **Deep Navy** primary, conveying stability and professional rigor. The neutral scale uses cool-toned slates and grays to maintain a "calm" atmosphere even when the UI is dense with information.

**Functional Color Application:**
- **Primary:** Navigation headers, primary action buttons, and active state indicators.
- **Surface & Background:** The main canvas is a light slate (`#F8FAFC`) to reduce eye strain, while active work surfaces (cards, table rows) are pure white.
- **Status Indicators:** These are the only high-chroma elements allowed. Use **Emerald** for "In Service," **Amber** for "Maintenance Required," and **Rose** for "Overdue/Critical." These must be used consistently across badges, icons, and progress bars.

## Typography
The typography system prioritizes legibility and vertical rhythm in data-heavy environments. 

- **Headings:** Use **Hanken Grotesk** for its sharp, contemporary terminals and excellent clarity at medium sizes.
- **Body:** **Inter** is the workhorse for all UI labels, inputs, and general text, chosen for its neutral tone and high x-height.
- **Technical Data:** **JetBrains Mono** is reserved for VIN numbers, part IDs, timestamps, and coordinates to ensure character distinction (e.g., 0 vs O) in critical data fields.

Font sizes are capped to prevent excessive scrolling; the standard body size is 14px, scaling down to 12px for secondary metadata.

## Layout & Spacing
This design system employs a **Fixed-Fluid Hybrid Grid**. Sidebars and utility panels are fixed-width to maintain tool consistency, while the main data workspace expands fluidly.

- **Spacing Rhythm:** Based on a **4px baseline**. Most internal component padding should use `8px` (2 units) or `12px` (3 units) to maintain a compact feel.
- **Data Density:** In table views, use a "Dense" setting with `4px` vertical cell padding. For standard forms, use `8px` or `12px` vertical spacing.
- **Breakpoints:**
  - **Desktop (1280px+):** Full 12-column grid. Permanent sidebar.
  - **Tablet (768px - 1279px):** Collapsed sidebar (icon only). 8-column grid.
  - **Mobile:** Not recommended for the full Matrix view; provide simplified "Field Technician" views with single-column stacks and larger touch targets.

## Elevation & Depth
To keep the UI "calm," elevation is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** `#F8FAFC` — The base canvas.
- **Level 1 (Surface):** `#FFFFFF` with a 1px border of `#E2E8F0`. Used for main content cards and table containers.
- **Level 2 (Overlay):** Used for dropdowns and popovers. Applies a very soft, diffused shadow: `0 4px 12px rgba(26, 43, 60, 0.08)` to provide lift without breaking the structural grid.
- **Depth Cueing:** Use subtle inner shadows for input fields to indicate "recessed" interactive areas.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the high-density layout, making the interface feel modern and precise without being "bubbly" or "friendly." 

- **Small Components (Buttons, Inputs, Badges):** 4px radius.
- **Large Components (Cards, Modals):** 8px radius.
- **Status Dots:** 100% (Circular) for immediate recognition.

## Components
Consistent styling across data-heavy components is vital for reducing cognitive load.

- **Tables:** Use a "Zebra-stripe" layout on hover only. Table headers should be `label-caps` typography with a subtle bottom border.
- **Status Badges:** Use a "Soft Fill" style—low-opacity background of the status color with high-contrast text of the same hue (e.g., light emerald background with dark emerald text).
- **Buttons:**
  - **Primary:** Solid Deep Navy with white text.
  - **Secondary:** White background, Slate border, Slate text.
  - **Actionable Icons:** Ghost buttons (no border/background until hover) for table-row actions.
- **Input Fields:** 1px solid `#CBD5E1` borders that darken to Primary on focus. Use "inline labels" or "top-aligned labels" to save horizontal space.
- **Functional Sidebars:** Use a darker variant of the background (`#F1F5F9`) to visually "lock" navigation to the side. Icons should be 20px, stroke-based (2px weight).
- **KPI Cards:** Compact cards with a 4px status-colored "top border" to indicate health at a glance.