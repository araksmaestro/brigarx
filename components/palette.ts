// The five candidate palettes from the design handoff.
//
// REVIEW SCAFFOLDING — the palette is open item #1 and the client has not
// signed off. Once they choose, hard-code DEFAULT_PALETTE as the only value,
// delete palette-switcher.tsx and its import in app/page.tsx, and drop the
// unused logo and hero assets from public/.
//
// Logo and hero photograph are palette-specific. The plum-toned photograph
// serves plum and clay; the teal-toned one serves teal, sky and cyan.
export const PALETTES = [
  {
    id: "clay",
    label: "Clay",
    logo: "/brigarx-logo-clay.png",
    hero: "/hero-visit.webp",
  },
  {
    id: "plum",
    label: "Plum",
    logo: "/brigarx-logo-plum.png",
    hero: "/hero-visit.webp",
  },
  {
    id: "teal",
    label: "Teal",
    logo: "/brigarx-logo-teal.png",
    hero: "/hero-visit-teal.webp",
  },
  {
    id: "sky",
    label: "Sky",
    logo: "/brigarx-logo-sky.png",
    hero: "/hero-visit-teal.webp",
  },
  {
    id: "cyan",
    label: "Cyan",
    logo: "/brigarx-logo-cyan.png",
    hero: "/hero-visit-teal.webp",
  },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

export const DEFAULT_PALETTE: PaletteId = "clay";

export function paletteAssets(id: PaletteId) {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
