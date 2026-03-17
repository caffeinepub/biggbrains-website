# BiggBrains Website

## Current State
Highly animated dark-themed landing page for BiggBrains. All sections use dark background tokens (near-black) with light foreground text, and cyan/violet accent colors.

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- Switch color theme from dark to light: white/off-white backgrounds, dark text, adjusted card/border/muted tokens
- Update `index.css` CSS variables to a clean light palette
- Change `color-scheme` from `dark` to `light`
- Adjust any hardcoded dark background colors in components (dark section backgrounds, dark gradient overlays) to use light equivalents
- Keep cyan (primary) and violet (accent) accent colors but ensure they remain readable on light backgrounds
- Update `grid-bg` background grid lines to be slightly darker/visible on light backgrounds
- Ensure marquee banners, stats sections, showcase slides, and other sections look good on light

### Remove
- Nothing removed

## Implementation Plan
1. Update `index.css` CSS variables: background → near-white, foreground → near-black, card → white, muted → light gray, border → light gray, keep primary/accent
2. Scan all component files for hardcoded dark bg classes (bg-gray-900, bg-slate-800, etc.) and replace with light equivalents
3. Update section background gradients and overlays for light theme compatibility
4. Ensure text contrast ratios are maintained throughout
