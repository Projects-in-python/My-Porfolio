// Which motifs make up each section's background.
//
// Order matters: layers paint back-to-front, so wide faint marks come first
// and bright focal elements (airplane, commit nodes) come last.

import {
  createAirplane,
  createCodeTokens,
  createGitGraph,
  createGlyphs,
  createNetwork,
  createPackets,
  createParticles,
  createTerminals,
  createTimeline,
} from "./layers";

const VARIANTS = {
  // Home hero — floating tech, data streams, network, and the flying plane.
  hero: () => [
    createNetwork({ density: 5, max: 30, linkDist: 160 }),
    createPackets({ count: 4 }),
    createCodeTokens({ set: "dart", density: 1.5, max: 12 }),
    createParticles({ density: 9, max: 55 }),
    createAirplane({ speed: 0.045 }),
  ],

  // Projects — terminals, API traffic, git activity, cloud/database glyphs.
  projects: () => [
    createGitGraph({ lanes: 2 }),
    createTerminals({ density: 0.7, max: 4 }),
    createPackets({ count: 4 }),
    createGlyphs({
      kinds: ["cloud", "database", "terminal", "branch"],
      density: 1.1,
      max: 8,
    }),
    createCodeTokens({ set: "devops", density: 1.3, max: 11 }),
    createParticles({ density: 6, max: 40 }),
  ],

  // Open source — branches/commits front and centre, with a plane hopping
  // between nodes for the collaboration story.
  opensource: () => [
    createGitGraph({ lanes: 3 }),
    createGlyphs({
      kinds: ["branch", "terminal", "braces"],
      density: 1,
      max: 7,
    }),
    createCodeTokens({ set: "devops", density: 1.2, max: 10 }),
    createParticles({ density: 7, max: 45 }),
    createAirplane({ speed: 0.05, start: 0.2 }),
  ],

  // Experience — scroll-driven timeline spine.
  experience: () => [
    createTimeline({ count: 5 }),
    createCodeTokens({ set: "general", density: 1, max: 8 }),
    createParticles({ density: 7, max: 45 }),
  ],

  // Education — knowledge network plus learning glyphs.
  education: () => [
    createNetwork({ density: 5, max: 28, linkDist: 155 }),
    createGlyphs({
      kinds: ["cap", "braces", "database"],
      density: 1.2,
      max: 9,
    }),
    createCodeTokens({ set: "learning", density: 1.3, max: 11 }),
    createParticles({ density: 8, max: 50 }),
  ],

  // Contact — communication lines, message glyphs with transmission rings.
  contact: () => [
    createNetwork({ density: 4.5, max: 26, linkDist: 170 }),
    createPackets({ count: 3 }),
    createGlyphs({
      kinds: ["envelope", "chat", "at"],
      density: 1.2,
      max: 8,
      ring: true,
    }),
    createParticles({ density: 7, max: 45 }),
  ],
};

export function buildLayers(variant) {
  const factory = VARIANTS[variant] || VARIANTS.hero;
  return factory();
}
