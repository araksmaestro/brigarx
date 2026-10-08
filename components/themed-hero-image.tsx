"use client";

import Image from "next/image";
import { usePaletteAssets } from "@/components/palette-provider";

/**
 * The hero photograph comes from the active palette's assets. All palettes
 * currently share hero-bedroom.png.
 *
 * OPEN ITEM — the photograph is an AI-generated placeholder.
 */
export function ThemedHeroImage() {
  const { hero } = usePaletteAssets();

  return (
    <Image
      src={hero}
      alt="A teenager and his grandmother at a laptop in his bedroom, together on a video visit"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="block object-cover"
    />
  );
}
