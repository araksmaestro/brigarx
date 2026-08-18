"use client";

import { PALETTES } from "@/components/palette";
import { usePalette } from "@/components/palette-provider";

/**
 * REVIEW SCAFFOLDING — NOT FOR LAUNCH.
 *
 * The handoff ships this as a floating "Demo palette" switcher so the client
 * can compare the five candidates. It must come off the site once the palette
 * is signed off: delete this file and its single import in app/page.tsx.
 *
 * Sky is annotated because it is the one palette with a known accessibility
 * defect; globals.css already darkens its --accent to #0A70A6 to clear WCAG AA.
 */
export function PaletteSwitcher() {
  const { palette, setPalette } = usePalette();

  return (
    <div className="fixed bottom-[20px] left-1/2 z-90 flex -translate-x-1/2 flex-col items-center gap-[8px] rounded-[14px] border border-[rgba(var(--lineRGB),0.18)] bg-[rgba(var(--baseRGB),0.94)] px-[16px] py-[12px] shadow-[0_10px_30px_rgba(var(--inkRGB),0.18)] backdrop-blur-[12px]">
      <p className="text-[11px] tracking-[0.18em] text-label uppercase">
        Demo palette · not for launch
      </p>

      <div className="flex flex-wrap justify-center gap-[6px]">
        {PALETTES.map((option) => {
          const isActive = option.id === palette;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setPalette(option.id)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-[14px] py-[6px] text-[13px] font-semibold ${
                isActive
                  ? "border-accent bg-accent text-on-accent"
                  : "border-[rgba(var(--lineRGB),0.22)] bg-base text-deep hover:border-accent"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
