// Colour treatments for the animated backgrounds.
//
// Light mode leans on muted blue/violet ink at low opacity so the animation
// reads as a faint technical drawing behind the content. Dark mode swaps to
// neon-ish accents plus a pre-rendered glow sprite, which is far cheaper than
// setting ctx.shadowBlur on every draw call.

export function getPalette(theme) {
  const dark = !!theme.isDark;

  return dark
    ? {
        dark: true,
        primary: [56, 189, 248], // sky
        secondary: [167, 139, 250], // violet
        tertiary: [45, 212, 191], // teal
        ink: [186, 205, 233],
        // Global multiplier applied to every layer's alpha.
        intensity: 1,
        glow: 0.55,
        lineWidth: 1,
      }
    : {
        dark: false,
        primary: [21, 101, 163],
        secondary: [99, 86, 191],
        tertiary: [13, 138, 128],
        ink: [42, 68, 108],
        // Light backgrounds show marks more readily than dark ones, so stay
        // below full strength — but not so far that the scene disappears.
        intensity: 0.92,
        glow: 0,
        lineWidth: 1.1,
      };
}

export function rgba(rgb, alpha) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

// A soft radial dot baked into an offscreen canvas once per palette. Drawing
// this with drawImage costs a fraction of a blurred shadow per particle.
export function makeGlowSprite(rgb, size) {
  const canvas = document.createElement("canvas");
  const d = size * 2;
  canvas.width = d;
  canvas.height = d;
  const g = canvas.getContext("2d");
  const grad = g.createRadialGradient(size, size, 0, size, size, size);
  grad.addColorStop(0, rgba(rgb, 0.9));
  grad.addColorStop(0.4, rgba(rgb, 0.35));
  grad.addColorStop(1, rgba(rgb, 0));
  g.fillStyle = grad;
  g.fillRect(0, 0, d, d);
  return canvas;
}
