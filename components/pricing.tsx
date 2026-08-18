import { SCHEDULING_URL, VISIT_TYPES } from "@/components/booking";
import { ctaCardFilled, ctaCardOutline } from "@/components/cta-styles";

// The pricing cards name the visit type already, so they link straight to the
// scheduler rather than opening the visit-type chooser.
const CARD_CTA = [
  { label: "Click to Enroll", className: ctaCardFilled },
  { label: "Book Visit", className: ctaCardOutline },
];

/** Section 10 — transparent pricing. Prices and the note are verbatim. */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-surface2 px-[20px] py-[56px] lg:px-[32px] lg:py-[100px]"
    >
      <div className="container-page">
        <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
          Pricing
        </p>

        <h2 className="mb-[32px] font-head text-[clamp(32px,3.8vw,50px)] leading-[1.1] font-semibold text-ink text-pretty lg:mb-[44px]">
          Transparent Pricing
        </h2>

        <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {VISIT_TYPES.map((visit, index) => (
            <div
              key={visit.id}
              className="flex flex-col gap-[8px] rounded-[14px] bg-base px-[26px] py-[32px] lg:px-[36px] lg:py-[40px]"
            >
              <h3 className="font-head text-[26px] font-semibold text-ink">
                {visit.name}
              </h3>
              <p className="font-head text-[44px] font-semibold tracking-[-0.02em] text-deep">
                {visit.price}
              </p>
              <p className="mb-[28px] text-[16px] text-muted">{visit.meta}</p>

              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener"
                className={`${CARD_CTA[index].className} no-underline`}
              >
                {CARD_CTA[index].label}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-[32px] max-w-[74ch] text-[16px] leading-[1.6] text-muted text-pretty">
          Please note. All visits are payable by credit card at the time of the
          visit. For people with private insurance, a superbill can be provided
          for submission to your health insurer. All of our rates are Oregon
          Medicaid rates.
        </p>
      </div>
    </section>
  );
}
