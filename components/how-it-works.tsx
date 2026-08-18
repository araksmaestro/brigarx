const STEPS = [
  {
    label: "Step one",
    title: "Reach out.",
    body: "Book online, or call if you would rather talk first. Tell us who the patient is and what you are seeing.",
  },
  {
    label: "Step two",
    title: "One-hour intake visit.",
    body: "By video, from home or the patient’s program. Caregivers and guardians are welcome to join.",
  },
  {
    label: "Step three",
    title: "A plan everyone can follow.",
    body: "Written in plain language and shared with the behavior and support professionals already involved.",
  },
  {
    label: "Step four",
    title: "Steady follow-up.",
    body: "Twenty-minute routine appointments to adjust, monitor and hold the gains over time.",
  },
];

/** Section 6 — how it works. A dark band inside the light page. */
export function HowItWorks() {
  return (
    <section
      id="how"
      className="bg-deep px-[20px] py-[56px] text-surface1 lg:px-[32px] lg:py-[100px]"
    >
      <div className="container-page">
        <p className="mb-[16px] text-[13px] tracking-[0.22em] text-on-dark-muted uppercase">
          How it works
        </p>

        <h2 className="mb-[40px] max-w-[26ch] font-head text-[clamp(32px,3.8vw,50px)] leading-[1.1] font-semibold text-[var(--base)] text-pretty lg:mb-[60px]">
          Four steps, from first call to steady care
        </h2>

        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.label}
              className="border-t border-[rgba(var(--baseRGB),0.28)] pt-[22px]"
            >
              <p className="font-head text-[15px] tracking-[0.16em] text-on-dark-muted uppercase">
                {step.label}
              </p>
              <h3 className="mt-[12px] font-head text-[24px] font-semibold text-[var(--base)] text-pretty">
                {step.title}
              </h3>
              <p className="mt-[10px] text-[16px] leading-[1.6] text-on-dark text-pretty">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
