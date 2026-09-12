// Individual motifs used by the animated backgrounds.
//
// Every layer exposes the same shape:
//   { resize(env), update(dt, env), draw(ctx, env) }
// where env = { w, h, t, palette, glowSprite, scroll, reduced, density }.
//
// Layers never paint a background — they only stroke/fill marks — so whatever
// sits behind the canvas stays visible.

import { rgba } from "./palette";

const TAU = Math.PI * 2;

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Count scaled to the canvas area, with a hard ceiling so large desktop
// viewports don't quietly turn into a particle benchmark.
function scaleCount(env, per100k, max) {
  const area = env.w * env.h;
  return Math.max(3, Math.min(max, Math.round((area / 100000) * per100k)));
}

function softGlow(ctx, env, x, y, size, alpha) {
  if (!env.glowSprite || !env.palette.glow) return;
  ctx.globalAlpha = alpha * env.palette.glow;
  ctx.drawImage(env.glowSprite, x - size, y - size, size * 2, size * 2);
  ctx.globalAlpha = 1;
}

/* ------------------------------------------------------------------ particles */

export function createParticles(opts = {}) {
  let items = [];
  const density = opts.density || 9;
  const maxCount = opts.max || 60;

  return {
    resize(env) {
      const count = scaleCount(env, density, maxCount);
      items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          x: rand(0, env.w),
          y: rand(0, env.h),
          r: rand(0.8, 2.2),
          vx: rand(-6, 6),
          vy: rand(-14, -3),
          a: rand(0.25, 0.7),
          phase: rand(0, TAU),
          hue: Math.random() < 0.7 ? "primary" : "secondary",
        });
      }
    },
    update(dt, env) {
      for (const p of items) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.y < -10) {
          p.y = env.h + 10;
          p.x = rand(0, env.w);
        }
        if (p.x < -10) p.x = env.w + 10;
        if (p.x > env.w + 10) p.x = -10;
      }
    },
    draw(ctx, env) {
      const { palette } = env;
      for (const p of items) {
        const twinkle = 0.65 + 0.35 * Math.sin(env.t * 1.6 + p.phase);
        const alpha = p.a * twinkle * palette.intensity;
        const rgb = palette[p.hue];
        softGlow(ctx, env, p.x, p.y, p.r * 4, alpha * 0.8);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, TAU);
        ctx.fillStyle = rgba(rgb, alpha);
        ctx.fill();
      }
    },
  };
}

/* -------------------------------------------------------------------- network */

// Constellation of nodes that link up when close, with a gentle parallax drift.
export function createNetwork(opts = {}) {
  let nodes = [];
  const density = opts.density || 5;
  const maxCount = opts.max || 34;
  const linkDist = opts.linkDist || 150;

  return {
    resize(env) {
      const count = scaleCount(env, density, maxCount);
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: rand(0, env.w),
          y: rand(0, env.h),
          vx: rand(-9, 9),
          vy: rand(-9, 9),
          r: rand(1.4, 3),
          pulse: rand(0, TAU),
        });
      }
    },
    update(dt, env) {
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < 0 || n.x > env.w) n.vx *= -1;
        if (n.y < 0 || n.y > env.h) n.vy *= -1;
        n.x = Math.max(0, Math.min(env.w, n.x));
        n.y = Math.max(0, Math.min(env.h, n.y));
      }
    },
    draw(ctx, env) {
      const { palette } = env;
      const maxD2 = linkDist * linkDist;

      ctx.lineWidth = palette.lineWidth * 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxD2) continue;
          const strength = 1 - d2 / maxD2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = rgba(
            palette.ink,
            strength * 0.22 * palette.intensity
          );
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const pulse = 0.7 + 0.3 * Math.sin(env.t * 2 + n.pulse);
        const alpha = 0.5 * pulse * palette.intensity;
        softGlow(ctx, env, n.x, n.y, n.r * 5, alpha);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, TAU);
        ctx.fillStyle = rgba(palette.primary, alpha);
        ctx.fill();
      }
    },
  };
}

/* ----------------------------------------------------------------- codeTokens */

const TOKEN_SETS = {
  general: [
    "const",
    "=>",
    "{ }",
    "async",
    "await",
    "return",
    "<Widget/>",
    "import",
    "()",
    "null",
    "final",
    "[ ]",
  ],
  dart: [
    "Widget build()",
    "setState()",
    "late final",
    "Future<T>",
    "Stream",
    "BuildContext",
    "@override",
    "Bloc",
    "Cubit",
    "MaterialApp",
  ],
  devops: [
    "git commit -m",
    "flutter build",
    "$ dart pub get",
    "POST /api/v1",
    "200 OK",
    "SELECT *",
    "docker run",
    "kubectl apply",
    "main ← feature",
    "npm run build",
  ],
  learning: [
    "O(n log n)",
    "01001010",
    "{ }",
    "λ",
    "Σ",
    "def solve()",
    "big-O",
    "DFS / BFS",
    "SQL",
    "∞",
  ],
};

export function createCodeTokens(opts = {}) {
  let items = [];
  const set = TOKEN_SETS[opts.set || "general"];
  const density = opts.density || 1.6;
  const maxCount = opts.max || 14;

  return {
    resize(env) {
      const count = scaleCount(env, density, maxCount);
      items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          text: pick(set),
          x: rand(0, env.w),
          y: rand(0, env.h),
          vy: rand(-12, -4),
          vx: rand(-3, 3),
          size: rand(10, 15),
          a: rand(0.16, 0.36),
          phase: rand(0, TAU),
        });
      }
    },
    update(dt, env) {
      for (const it of items) {
        it.y += it.vy * dt;
        it.x += it.vx * dt;
        if (it.y < -20) {
          it.y = env.h + 20;
          it.x = rand(0, env.w);
          it.text = pick(set);
        }
      }
    },
    draw(ctx, env) {
      const { palette } = env;
      ctx.textBaseline = "middle";
      for (const it of items) {
        const fade = 0.7 + 0.3 * Math.sin(env.t * 1.1 + it.phase);
        ctx.font = `${it.size}px "Courier New", Courier, monospace`;
        ctx.fillStyle = rgba(palette.ink, it.a * fade * palette.intensity);
        ctx.fillText(it.text, it.x, it.y);
      }
    },
  };
}

/* -------------------------------------------------------------------- packets */

// Dashes running along fixed diagonal rails — reads as data/API traffic.
export function createPackets(opts = {}) {
  let rails = [];
  const count = opts.count || 5;

  return {
    resize(env) {
      rails = [];
      for (let i = 0; i < count; i++) {
        const y = ((i + 0.5) / count) * env.h;
        rails.push({
          x1: -env.w * 0.1,
          y1: y + rand(-30, 30),
          x2: env.w * 1.1,
          y2: y + rand(-60, 60),
          packets: new Array(2).fill(0).map(() => ({
            p: Math.random(),
            speed: rand(0.05, 0.13),
            len: rand(0.03, 0.08),
          })),
        });
      }
    },
    update(dt) {
      for (const rail of rails) {
        for (const pk of rail.packets) {
          pk.p += pk.speed * dt;
          if (pk.p > 1 + pk.len) pk.p = -pk.len;
        }
      }
    },
    draw(ctx, env) {
      const { palette } = env;
      for (const rail of rails) {
        ctx.beginPath();
        ctx.moveTo(rail.x1, rail.y1);
        ctx.lineTo(rail.x2, rail.y2);
        ctx.strokeStyle = rgba(palette.ink, 0.1 * palette.intensity);
        ctx.lineWidth = palette.lineWidth * 0.7;
        ctx.stroke();

        for (const pk of rail.packets) {
          const a = Math.max(0, pk.p);
          const b = Math.min(1, pk.p + pk.len);
          if (b <= a) continue;
          const ax = rail.x1 + (rail.x2 - rail.x1) * a;
          const ay = rail.y1 + (rail.y2 - rail.y1) * a;
          const bx = rail.x1 + (rail.x2 - rail.x1) * b;
          const by = rail.y1 + (rail.y2 - rail.y1) * b;

          const grad = ctx.createLinearGradient(ax, ay, bx, by);
          grad.addColorStop(0, rgba(palette.primary, 0));
          grad.addColorStop(1, rgba(palette.primary, 0.75 * palette.intensity));
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = grad;
          ctx.lineWidth = palette.lineWidth * 1.6;
          ctx.stroke();
          softGlow(ctx, env, bx, by, 9, 0.5);
        }
      }
    },
  };
}

/* ------------------------------------------------------------------- airplane */

// A small plane tracing a cubic bezier, trailing a dashed flight path that
// fades out behind it.
export function createAirplane(opts = {}) {
  let path = null;
  let p = opts.start != null ? opts.start : 0;
  const speed = opts.speed || 0.055;
  const trail = [];
  const maxTrail = 90;

  function pointAt(t) {
    const { p0, p1, p2, p3 } = path;
    const mt = 1 - t;
    const a = mt * mt * mt;
    const b = 3 * mt * mt * t;
    const c = 3 * mt * t * t;
    const d = t * t * t;
    return {
      x: a * p0.x + b * p1.x + c * p2.x + d * p3.x,
      y: a * p0.y + b * p1.y + c * p2.y + d * p3.y,
    };
  }

  return {
    resize(env) {
      const { w, h } = env;
      path = {
        p0: { x: -0.08 * w, y: h * 0.78 },
        p1: { x: w * 0.28, y: h * 0.12 },
        p2: { x: w * 0.7, y: h * 0.92 },
        p3: { x: 1.08 * w, y: h * 0.2 },
      };
      trail.length = 0;
    },
    update(dt, env) {
      p += speed * dt;
      if (p > 1.05) {
        p = -0.05;
        trail.length = 0;
      }
      if (env.reduced) return;
      const pt = pointAt(Math.max(0, Math.min(1, p)));
      trail.push(pt);
      if (trail.length > maxTrail) trail.shift();
    },
    draw(ctx, env) {
      const { palette } = env;
      if (!path) return;

      // Faint guide showing the whole route.
      ctx.save();
      ctx.setLineDash([5, 9]);
      ctx.beginPath();
      ctx.moveTo(path.p0.x, path.p0.y);
      ctx.bezierCurveTo(
        path.p1.x,
        path.p1.y,
        path.p2.x,
        path.p2.y,
        path.p3.x,
        path.p3.y
      );
      ctx.strokeStyle = rgba(palette.ink, 0.12 * palette.intensity);
      ctx.lineWidth = palette.lineWidth;
      ctx.stroke();
      ctx.restore();

      // Brighter contrail immediately behind the plane.
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const frac = i / trail.length;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.strokeStyle = rgba(
            palette.secondary,
            frac * 0.5 * palette.intensity
          );
          ctx.lineWidth = palette.lineWidth * 1.4 * frac;
          ctx.stroke();
        }
      }

      const tClamped = Math.max(0, Math.min(1, p));
      const pos = pointAt(tClamped);
      const ahead = pointAt(Math.min(1, tClamped + 0.01));
      const angle = Math.atan2(ahead.y - pos.y, ahead.x - pos.x);

      softGlow(ctx, env, pos.x, pos.y, 16, 0.75);

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(9, 0);
      ctx.lineTo(-5, -5.5);
      ctx.lineTo(-2, 0);
      ctx.lineTo(-5, 5.5);
      ctx.closePath();
      ctx.fillStyle = rgba(palette.primary, 0.85 * palette.intensity);
      ctx.fill();
      ctx.restore();
    },
  };
}

/* ------------------------------------------------------------------- gitGraph */

// Branch/merge diagram with commit nodes that light up in sequence.
export function createGitGraph(opts = {}) {
  let lanes = [];
  let commits = [];
  const laneCount = opts.lanes || 3;

  return {
    resize(env) {
      const { w, h } = env;
      const top = h * 0.18;
      const bottom = h * 0.82;
      lanes = [];
      for (let i = 0; i < laneCount; i++) {
        lanes.push(top + ((bottom - top) * i) / Math.max(1, laneCount - 1));
      }

      commits = [];
      const perLane = Math.max(4, Math.round(w / 260));
      for (let l = 0; l < laneCount; l++) {
        for (let i = 0; i < perLane; i++) {
          commits.push({
            x: (w * (i + 0.5)) / perLane + rand(-18, 18),
            y: lanes[l],
            lane: l,
            r: rand(2.2, 3.6),
            order: l * perLane + i,
          });
        }
      }
    },
    update() {},
    draw(ctx, env) {
      const { palette, w } = env;
      const cycle = (env.t * 0.35) % 1;

      ctx.lineWidth = palette.lineWidth * 1.2;

      // Lane rails.
      for (let l = 0; l < lanes.length; l++) {
        ctx.beginPath();
        ctx.moveTo(0, lanes[l]);
        ctx.lineTo(w, lanes[l]);
        ctx.strokeStyle = rgba(palette.ink, 0.14 * palette.intensity);
        ctx.stroke();
      }

      // Fork + merge curves between neighbouring lanes.
      for (let l = 0; l < lanes.length - 1; l++) {
        const y1 = lanes[l];
        const y2 = lanes[l + 1];
        const forkX = w * (0.2 + 0.16 * l);
        const mergeX = w * (0.62 + 0.14 * l);

        ctx.beginPath();
        ctx.moveTo(forkX, y1);
        ctx.bezierCurveTo(forkX + 50, y1, forkX + 20, y2, forkX + 80, y2);
        ctx.strokeStyle = rgba(palette.secondary, 0.3 * palette.intensity);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mergeX, y2);
        ctx.bezierCurveTo(mergeX + 60, y2, mergeX + 30, y1, mergeX + 110, y1);
        ctx.strokeStyle = rgba(palette.tertiary, 0.3 * palette.intensity);
        ctx.stroke();
      }

      // Commit nodes, lit in a travelling wave.
      for (const c of commits) {
        const phase = (c.x / w + c.lane * 0.12) % 1;
        let lit = 1 - Math.min(1, Math.abs(phase - cycle) * 6);
        lit = Math.max(0, lit);
        const alpha = (0.28 + 0.6 * lit) * palette.intensity;

        if (lit > 0.1) softGlow(ctx, env, c.x, c.y, 11 * lit, lit * 0.8);

        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r + lit * 1.6, 0, TAU);
        ctx.fillStyle = rgba(lit > 0.4 ? palette.primary : palette.ink, alpha);
        ctx.fill();
      }
    },
  };
}

/* ------------------------------------------------------------------- timeline */

// Vertical spine with milestone nodes revealed by scroll progress, plus
// pulses running down the line.
export function createTimeline(opts = {}) {
  let nodes = [];
  let x = 0;
  let top = 0;
  let bottom = 0;
  const count = opts.count || 5;
  const pulses = new Array(3).fill(0).map((_, i) => ({ p: i / 3 }));

  return {
    resize(env) {
      x = env.w < 700 ? env.w * 0.12 : env.w * 0.5;
      top = env.h * 0.08;
      bottom = env.h * 0.92;
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          y: top + ((bottom - top) * i) / (count - 1),
          r: 4,
          phase: rand(0, TAU),
        });
      }
    },
    update(dt) {
      for (const pulse of pulses) {
        pulse.p += 0.18 * dt;
        if (pulse.p > 1.1) pulse.p = -0.1;
      }
    },
    draw(ctx, env) {
      const { palette, scroll } = env;

      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.strokeStyle = rgba(palette.ink, 0.16 * palette.intensity);
      ctx.lineWidth = palette.lineWidth * 1.4;
      ctx.stroke();

      // The "progress" portion of the spine tracks how far the section has
      // been scrolled through.
      const reveal = top + (bottom - top) * Math.max(0, Math.min(1, scroll));
      const grad = ctx.createLinearGradient(x, top, x, reveal);
      grad.addColorStop(0, rgba(palette.primary, 0.1 * palette.intensity));
      grad.addColorStop(1, rgba(palette.primary, 0.7 * palette.intensity));
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, reveal);
      ctx.strokeStyle = grad;
      ctx.lineWidth = palette.lineWidth * 2;
      ctx.stroke();

      for (const pulse of pulses) {
        const py = top + (bottom - top) * pulse.p;
        if (py < top || py > bottom) continue;
        softGlow(ctx, env, x, py, 12, 0.6);
        ctx.beginPath();
        ctx.arc(x, py, 2.4, 0, TAU);
        ctx.fillStyle = rgba(palette.tertiary, 0.8 * palette.intensity);
        ctx.fill();
      }

      nodes.forEach((n, i) => {
        const active = n.y <= reveal + 6;
        const breathe = 0.75 + 0.25 * Math.sin(env.t * 1.8 + n.phase);
        const alpha = (active ? 0.85 : 0.25) * breathe * palette.intensity;

        if (active) {
          softGlow(ctx, env, x, n.y, 16, 0.5);
          ctx.beginPath();
          ctx.arc(x, n.y, n.r + 6 * breathe, 0, TAU);
          ctx.strokeStyle = rgba(palette.primary, alpha * 0.4);
          ctx.lineWidth = palette.lineWidth;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(x, n.y, n.r, 0, TAU);
        ctx.fillStyle = rgba(active ? palette.primary : palette.ink, alpha);
        ctx.fill();

        // Short ticks out to where the content sits.
        const dir = i % 2 === 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(x + dir * 10, n.y);
        ctx.lineTo(x + dir * 46, n.y);
        ctx.strokeStyle = rgba(palette.ink, alpha * 0.35);
        ctx.lineWidth = palette.lineWidth;
        ctx.stroke();
      });
    },
  };
}

/* --------------------------------------------------------------------- glyphs */

// Simple line-art icons drawn from paths, so there are no image assets to load
// and they recolour with the theme for free.
const GLYPH_DRAWERS = {
  envelope(ctx, s) {
    ctx.strokeRect(-s, -s * 0.66, s * 2, s * 1.32);
    ctx.beginPath();
    ctx.moveTo(-s, -s * 0.66);
    ctx.lineTo(0, s * 0.15);
    ctx.lineTo(s, -s * 0.66);
    ctx.stroke();
  },
  chat(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(-s, -s * 0.7);
    ctx.lineTo(s, -s * 0.7);
    ctx.lineTo(s, s * 0.35);
    ctx.lineTo(-s * 0.3, s * 0.35);
    ctx.lineTo(-s * 0.65, s * 0.85);
    ctx.lineTo(-s * 0.65, s * 0.35);
    ctx.lineTo(-s, s * 0.35);
    ctx.closePath();
    ctx.stroke();
  },
  at(ctx, s) {
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.4, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.85, -0.4, Math.PI * 1.45);
    ctx.stroke();
  },
  cap(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(-s, -s * 0.15);
    ctx.lineTo(0, -s * 0.7);
    ctx.lineTo(s, -s * 0.15);
    ctx.lineTo(0, s * 0.4);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s * 0.55, s * 0.06);
    ctx.lineTo(s * 0.55, s * 0.7);
    ctx.stroke();
  },
  braces(ctx, s) {
    ctx.beginPath();
    ctx.moveTo(-s * 0.25, -s * 0.8);
    ctx.quadraticCurveTo(-s * 0.8, -s * 0.8, -s * 0.8, 0);
    ctx.quadraticCurveTo(-s * 0.8, s * 0.8, -s * 0.25, s * 0.8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s * 0.25, -s * 0.8);
    ctx.quadraticCurveTo(s * 0.8, -s * 0.8, s * 0.8, 0);
    ctx.quadraticCurveTo(s * 0.8, s * 0.8, s * 0.25, s * 0.8);
    ctx.stroke();
  },
  cloud(ctx, s) {
    ctx.beginPath();
    ctx.arc(-s * 0.4, 0, s * 0.42, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(0, -s * 0.22, s * 0.5, Math.PI, TAU);
    ctx.arc(s * 0.45, 0, s * 0.4, Math.PI * 1.5, Math.PI * 0.5);
    ctx.closePath();
    ctx.stroke();
  },
  database(ctx, s) {
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.55, s * 0.7, s * 0.25, 0, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.7, -s * 0.55);
    ctx.lineTo(-s * 0.7, s * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s * 0.7, -s * 0.55);
    ctx.lineTo(s * 0.7, s * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(0, s * 0.5, s * 0.7, s * 0.25, 0, 0, Math.PI);
    ctx.stroke();
  },
  branch(ctx, s) {
    ctx.beginPath();
    ctx.arc(-s * 0.55, -s * 0.5, s * 0.22, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-s * 0.55, s * 0.6, s * 0.22, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(s * 0.6, -s * 0.5, s * 0.22, 0, TAU);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.55, -s * 0.28);
    ctx.lineTo(-s * 0.55, s * 0.38);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.33, -s * 0.5);
    ctx.lineTo(s * 0.38, -s * 0.5);
    ctx.stroke();
  },
  terminal(ctx, s) {
    ctx.strokeRect(-s, -s * 0.72, s * 2, s * 1.44);
    ctx.beginPath();
    ctx.moveTo(-s * 0.62, -s * 0.18);
    ctx.lineTo(-s * 0.3, s * 0.05);
    ctx.lineTo(-s * 0.62, s * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.1, s * 0.3);
    ctx.lineTo(s * 0.6, s * 0.3);
    ctx.stroke();
  },
};

export function createGlyphs(opts = {}) {
  let items = [];
  const kinds = opts.kinds || ["braces"];
  const density = opts.density || 1.4;
  const maxCount = opts.max || 10;
  const ring = !!opts.ring;

  return {
    resize(env) {
      const count = scaleCount(env, density, maxCount);
      items = [];
      for (let i = 0; i < count; i++) {
        items.push({
          kind: pick(kinds),
          x: rand(env.w * 0.05, env.w * 0.95),
          y: rand(env.h * 0.05, env.h * 0.95),
          s: rand(11, 20),
          a: rand(0.2, 0.4),
          drift: rand(-5, 5),
          bob: rand(6, 16),
          phase: rand(0, TAU),
          spin: rand(-0.15, 0.15),
        });
      }
    },
    update(dt, env) {
      for (const it of items) {
        it.x += it.drift * dt;
        if (it.x < -30) it.x = env.w + 30;
        if (it.x > env.w + 30) it.x = -30;
      }
    },
    draw(ctx, env) {
      const { palette } = env;
      for (const it of items) {
        const bob = Math.sin(env.t * 0.9 + it.phase) * it.bob;
        const alpha = it.a * palette.intensity;
        const x = it.x;
        const y = it.y + bob;

        if (ring) {
          // Expanding "transmission" ring, restarting every few seconds.
          const cycle = (env.t * 0.4 + it.phase) % 1;
          const rr = it.s * (1 + cycle * 2.6);
          ctx.beginPath();
          ctx.arc(x, y, rr, 0, TAU);
          ctx.strokeStyle = rgba(
            palette.secondary,
            (1 - cycle) * 0.28 * palette.intensity
          );
          ctx.lineWidth = palette.lineWidth;
          ctx.stroke();
        }

        softGlow(ctx, env, x, y, it.s * 1.6, alpha * 0.5);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.sin(env.t * 0.5 + it.phase) * it.spin);
        ctx.strokeStyle = rgba(palette.primary, alpha);
        ctx.lineWidth = palette.lineWidth * 1.1;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        (GLYPH_DRAWERS[it.kind] || GLYPH_DRAWERS.braces)(ctx, it.s);
        ctx.restore();
      }
    },
  };
}

/* ------------------------------------------------------------------ terminals */

// Floating window frames with "typing" lines inside — the project/dev motif.
export function createTerminals(opts = {}) {
  let items = [];
  const density = opts.density || 0.7;
  const maxCount = opts.max || 4;

  return {
    resize(env) {
      const count = scaleCount(env, density, maxCount);
      items = [];
      for (let i = 0; i < count; i++) {
        const w = rand(120, 190);
        items.push({
          x: rand(env.w * 0.04, Math.max(env.w * 0.05, env.w * 0.92 - w)),
          y: rand(env.h * 0.06, env.h * 0.9),
          w,
          h: rand(70, 105),
          a: rand(0.14, 0.26),
          phase: rand(0, TAU),
          bob: rand(4, 12),
          lines: new Array(4).fill(0).map(() => rand(0.3, 0.92)),
          speed: rand(0.25, 0.5),
        });
      }
    },
    update() {},
    draw(ctx, env) {
      const { palette } = env;
      for (const it of items) {
        const y = it.y + Math.sin(env.t * 0.7 + it.phase) * it.bob;
        const alpha = it.a * palette.intensity;

        ctx.save();
        ctx.strokeStyle = rgba(palette.ink, alpha * 1.5);
        ctx.lineWidth = palette.lineWidth;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(it.x, y, it.w, it.h, 6);
        else ctx.rect(it.x, y, it.w, it.h);
        ctx.stroke();

        // Title bar + traffic lights.
        ctx.beginPath();
        ctx.moveTo(it.x, y + 16);
        ctx.lineTo(it.x + it.w, y + 16);
        ctx.stroke();
        for (let d = 0; d < 3; d++) {
          ctx.beginPath();
          ctx.arc(it.x + 10 + d * 9, y + 8, 2.2, 0, TAU);
          ctx.fillStyle = rgba(palette.ink, alpha * 1.6);
          ctx.fill();
        }

        // Lines that "type" in on a loop.
        const typed = (env.t * it.speed + it.phase) % (it.lines.length + 1.4);
        it.lines.forEach((len, li) => {
          const progress = Math.max(0, Math.min(1, typed - li));
          if (progress <= 0) return;
          const lw = it.w * 0.78 * len * progress;
          const ly = y + 30 + li * 13;
          if (ly > y + it.h - 8) return;
          ctx.beginPath();
          ctx.moveTo(it.x + 10, ly);
          ctx.lineTo(it.x + 10 + lw, ly);
          ctx.strokeStyle = rgba(
            li === 0 ? palette.primary : palette.ink,
            alpha * 1.9
          );
          ctx.lineWidth = palette.lineWidth * 1.8;
          ctx.stroke();
        });
        ctx.restore();
      }
    },
  };
}
