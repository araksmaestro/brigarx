// Button styles from the handoff, shared across the six CTAs on the page.
//
// `text-[var(--base)]` rather than `text-base`: --color-base makes `text-base`
// collide with Tailwind's default font-size utility of the same name, so the
// base colour is always addressed through the raw variable.

const ctaBase =
  "inline-flex items-center justify-center rounded-[10px] font-bold text-[16px] cursor-pointer";

/** Filled accent — primary conversion action on light sections. */
export const ctaFilled = `${ctaBase} px-[30px] py-[16px] bg-accent text-on-accent hover:bg-deep hover:text-[var(--base)]`;

/** Outline — secondary action on light sections. */
export const ctaOutline = `${ctaBase} px-[30px] py-[16px] text-deep border border-[rgba(var(--lineRGB),0.28)] hover:border-accent hover:bg-surface1`;

/** Light fill — primary action on the dark contact band. */
export const ctaOnDarkFilled = `${ctaBase} px-[30px] py-[16px] bg-base text-deep hover:bg-surface2`;

/** Outline — secondary action on the dark contact band. */
export const ctaOnDarkOutline = `${ctaBase} px-[30px] py-[16px] text-[var(--base)] border border-[rgba(var(--baseRGB),0.4)] hover:border-[var(--base)] hover:bg-[rgba(var(--baseRGB),0.08)]`;

/** Header CTA — smaller than the section CTAs. */
export const ctaHeader =
  "inline-flex items-center justify-center rounded-[10px] font-bold text-[15px] cursor-pointer px-[20px] py-[11px] bg-accent text-on-accent hover:bg-deep hover:text-[var(--base)]";

/** Pricing-card buttons sit at the foot of the card and fill its width. */
const ctaCard =
  "mt-auto inline-flex items-center justify-center rounded-[10px] font-bold text-[16px] px-[26px] py-[15px] text-center";

export const ctaCardFilled = `${ctaCard} bg-accent text-on-accent hover:bg-deep hover:text-[var(--base)]`;
export const ctaCardOutline = `${ctaCard} text-deep border border-[rgba(var(--lineRGB),0.3)] hover:border-accent hover:bg-surface1`;
