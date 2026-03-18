# BiggBrains Website

## Current State
The site is a light/white themed landing page with cyan and violet accent colors. It already has many animations (floating particles, scroll reveals, marquee, typewriter, tilt cards, etc.) but the overall design feels static and conservative with the white background.

## Requested Changes (Diff)

### Add
- Deep dark background theme (near-black base with rich gradient overlays)
- Vibrant neon cyan and violet glow effects on sections, cards, and headings
- Animated gradient mesh backgrounds on hero and key sections
- More intense glow/luminance on interactive elements
- Dynamic gradient borders on cards and sections
- Glowing orb blobs with stronger visibility in dark context

### Modify
- index.css: Switch to dark color tokens — dark background (~oklch 0.08), light foreground, keep cyan primary + violet accent but boost saturation for dark theme vibrancy
- Navbar: Glassmorphism dark style when scrolled
- HeroSection: Dark gradient mesh background, stronger particle glow, brighter heading with gradient shimmer
- ServicesSection: Dark card backgrounds with glowing gradient borders
- StatsSection: Dark variant with stronger glowing stats
- AboutSection: Dark section background with stronger SVG glow
- All other sections: Dark backgrounds with consistent neon accents
- Footer: Dark with subtle grid and gradient accents

### Remove
- Light/white background tokens
- Subtle/muted glow effects (replace with bold neon versions)

## Implementation Plan
1. Update `index.css` CSS variables to dark theme OKLCH tokens
2. Update all section components to use dark variants — stronger glows, vivid gradients, dark card backgrounds
3. Update Navbar for dark glassmorphism
4. Enhance particle effects and background meshes for dark theme vibrancy
