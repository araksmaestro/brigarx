"use client";

import Image from "next/image";
import { usePaletteAssets } from "@/components/palette-provider";

/** The logo is a palette-specific asset, so it follows the active theme. */
export function ThemedLogo({
  width,
  height,
  className,
  priority,
}: {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const { logo } = usePaletteAssets();

  return (
    <Image
      src={logo}
      alt="BrigaRx"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
