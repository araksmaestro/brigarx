const ITEMS = [
  {
    numeral: "01",
    title: "Psychiatric evaluation",
    body: "A full hour to gather history from the patient and the people who support them daily.",
  },
  {
    numeral: "02",
    title: "Medication management",
    body: "Careful starts, careful changes, and ongoing monitoring of side effects and response.",
  },
  {
    numeral: "03",
    title: "Regimen review and simplification",
    body: "Many patients arrive on several psychotropics at once. We look for what can be reduced safely.",
  },
  {
    numeral: "04",
    title: "Coordination with your team",
    body: "Behavior support professionals, counselors, primary care and family, working from the same plan.",
  },
];

/** Section 5 — what we do. */
export function WhatWeDo() {
  return (
    <section className="bg-base px-[20px] pb-[56px] lg:px-[32px] lg:pb-[104px]">
      <div className="container-page border-t border-[rgba(var(--lineRGB),0.12)] pt-[40px] lg:pt-[56px]">
        <div className="mb-[32px] grid grid-cols-1 items-end gap-[28px] lg:mb-[44px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[64px]">
          <div>
            <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
              What we do
            </p>
            <h2 className="font-head text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-semibold text-ink text-pretty">
              A prescribing practice, not a portal
            </h2>
          </div>

          <div>
            <p className="max-w-[46ch] text-[17.5px] leading-[1.6] text-body text-pretty">
              Every visit is with the same prescriber, who already knows the
              history and the people around the patient. Four things make up the
              work.
            </p>
            <a
              href="#contact"
              className="mt-[18px] inline-block border-b border-[rgba(var(--inkRGB),0.3)] pb-[4px] text-[16px] font-semibold text-ink no-underline hover:border-link hover:text-link"
            >
              Ask whether we are a fit &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {ITEMS.map((item) => (
            <div
              key={item.numeral}
              className="grid grid-cols-[34px_1fr] gap-[20px] rounded-[14px] bg-surface1 px-[24px] pt-[26px] pb-[28px] lg:px-[30px] lg:pt-[30px] lg:pb-[32px]"
            >
              <span className="font-head text-[20px] text-label">
                {item.numeral}
              </span>
              <div>
                <h3 className="font-head text-[24px] leading-[1.2] font-semibold text-ink text-pretty">
                  {item.title}
                </h3>
                <p className="mt-[10px] text-[16.5px] leading-[1.6] text-body text-pretty">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
