"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  DEFAULT_PALETTE,
  paletteAssets,
  type PaletteId,
} from "@/components/palette";

type PaletteContextValue = {
  palette: PaletteId;
  setPalette: (palette: PaletteId) => void;
};

const PaletteContext = createContext<PaletteContextValue>({
  palette: DEFAULT_PALETTE,
  setPalette: () => {},
});

export function usePalette() {
  return useContext(PaletteContext);
}

/** Logo and hero paths for the active palette. */
export function usePaletteAssets() {
  return paletteAssets(usePalette().palette);
}

/**
 * REVIEW SCAFFOLDING — see components/palette.ts.
 *
 * Mirrors the chosen palette onto <html data-theme>, which is where theme.css
 * keys every token. layout.tsx renders DEFAULT_PALETTE server-side, so the
 * first paint matches and there is no hydration mismatch.
 */
export function PaletteProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState<PaletteId>(DEFAULT_PALETTE);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", palette);
  }, [palette]);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
}
