"use client";

import Image from "next/image";
import { usePaletteAssets } from "@/components/palette-provider";

/**
 * The hero photograph is palette-specific: a plum-toned frame for plum and
 * clay, a teal-toned one for teal, sky and cyan.
 *
 * OPEN ITEM — both photographs are AI-generated placeholders, and clay is
 * currently served the plum-toned frame. The designer has been asked whether
 * clay wants its own colour grade.
 */
export function ThemedHeroImage() {
  const { hero } = usePaletteAssets();

  return (
    <Image
      src={hero}
      alt="An older woman and her adult daughter at home, together on a video visit"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="block object-cover"
    />
  );
}
