const NODES = [
  { title: "BrigaRx prescriber", sub: "Diagnosis and medication" },
  { title: "Behavior consultant", sub: "Behavior plan and data" },
  { title: "Counselor", sub: "Ongoing therapy" },
  { title: "Primary care", sub: "Medical causes, labs" },
  { title: "Case manager", sub: "Services and coordination" },
];

// Radial placement, desktop only. The percentages and the 128px cap keep the
// side labels clear of the centre bubble and inside the 32px page gutter.
const POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2 text-center max-w-[180px]",
  "top-[33%] right-0 max-w-[128px]",
  "bottom-[3%] right-0 max-w-[128px]",
  "bottom-[3%] left-0 max-w-[128px]",
  "top-[33%] left-0 max-w-[128px]",
];

const labelClass =
  "rounded-[12px] border border-[rgba(var(--lineRGB),0.18)] bg-base px-[14px] py-[10px]";

/**
 * The care-circle diagram from section 7. Purely presentational — a CSS
 * composition, no SVG, as specified.
 *
 * Below `lg` the handoff calls for the labels to stack as a plain list rather
 * than be positioned radially, so the rings and bubble are desktop-only.
 */
export function CareCircle() {
  return (
    <div className="min-w-0">
      {/* Stacked list — narrow viewports. */}
      <ul className="grid list-none grid-cols-1 gap-[12px] p-0 sm:grid-cols-2 lg:hidden">
        {NODES.map((node) => (
          <li key={node.title} className={labelClass}>
            <p className="font-head text-[17px] text-ink">{node.title}</p>
            <p className="text-[12.5px] text-muted">{node.sub}</p>
          </li>
        ))}
      </ul>

      {/* Radial diagram — desktop. */}
      <div
        aria-hidden
        className="relative hidden aspect-square max-h-[520px] items-center justify-center lg:flex"
      >
        <div className="absolute h-[66%] w-[66%] rounded-full border border-[rgba(var(--lineRGB),0.2)]" />
        <div className="absolute h-[44%] w-[44%] rounded-full border border-dashed border-[rgba(var(--lineRGB),0.22)]" />

        <div className="flex h-[24%] min-h-[104px] w-[24%] min-w-[104px] flex-col items-center justify-center rounded-full bg-deep px-[10px] text-center">
          <span className="font-head text-[22px] text-[var(--base)]">
            Patient
          </span>
          <span className="text-[12.5px] leading-[1.3] text-on-dark">
            and the people with them daily
          </span>
        </div>

        {NODES.map((node, index) => (
          <div
            key={node.title}
            className={`absolute ${labelClass} ${POSITIONS[index]}`}
          >
            <p className="font-head text-[16px] text-ink">{node.title}</p>
            <p className="text-[12.5px] text-muted">{node.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
