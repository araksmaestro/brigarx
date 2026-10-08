// The five candidate palettes from the design handoff.
//
// REVIEW SCAFFOLDING — the palette is open item #1 and the client has not
// signed off. Once they choose, hard-code DEFAULT_PALETTE as the only value,
// delete palette-switcher.tsx and its import in app/page.tsx, and drop the
// unused logo and hero assets from public/.
//
// The logo is palette-specific. Every palette currently shares the one hero
// photograph (hero-bedroom.png); the hero field stays per-palette so a
// colour-graded variant can be dropped back in.
export const PALETTES = [
  {
    id: "clay",
    label: "Clay",
    logo: "/brigarx-logo-clay.png",
    hero: "/hero-bedroom.png",
  },
  {
    id: "plum",
    label: "Plum",
    logo: "/brigarx-logo-plum.png",
    hero: "/hero-bedroom.png",
  },
  {
    id: "teal",
    label: "Teal",
    logo: "/brigarx-logo-teal.png",
    hero: "/hero-bedroom.png",
  },
  {
    id: "sky",
    label: "Sky",
    logo: "/brigarx-logo-sky.png",
    hero: "/hero-bedroom.png",
  },
  {
    id: "cyan",
    label: "Cyan",
    logo: "/brigarx-logo-cyan.png",
    hero: "/hero-bedroom.png",
  },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

export const DEFAULT_PALETTE: PaletteId = "clay";

export function paletteAssets(id: PaletteId) {
  return PALETTES.find((p) => p.id === id) ?? PALETTES[0];
}
