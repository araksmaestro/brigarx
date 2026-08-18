"use client";

import Image from "next/image";
import { usePaletteAssets } from "@/components/palette-provider";

// The logo files are all 380x162. Declaring the intrinsic size and letting CSS
// set the display height keeps next/image's srcset correct and avoids its
// "width or height modified, but not the other" warning — which fires when one
// declared dimension matches the rendered size and the other does not.
const LOGO_WIDTH = 380;
const LOGO_HEIGHT = 162;

/**
 * The logo is a palette-specific asset, so it follows the active theme.
 *
 * Pass the display size through `className`, e.g. "h-[42px] w-auto".
 */
export function ThemedLogo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  const { logo } = usePaletteAssets();

  return (
    <Image
      src={logo}
      alt="BrigaRx"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={className}
    />
  );
}
