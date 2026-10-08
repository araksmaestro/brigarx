import type { ReactNode } from "react";

const PRINCIPLES: { title: string; body: ReactNode }[] = [
  {
    title: "One change at a time",
    body: "When too many things change at once, it is hard to know what helps and what doesn’t.",
  },
  {
    title: "Rule out the reversible first",
    body: (
      <>
        Many things can change behavior and mood: pain, constipation, poor
        sleep, a new staff member. We understand that behavior <em>is</em>{" "}
        communication. We first look for non-medication options.
      </>
    ),
  },
  {
    title: "Deprescribe on purpose",
    body: "Every medication carries a reason to keep it and a reason to stop. We revisit both at every visit.",
  },
];

/** Section 8 — how we prescribe. */
export function HowWePrescribe() {
  return (
    <section className="bg-base px-[20px] py-[56px] lg:px-[32px] lg:py-[104px]">
      <div className="container-page">
        <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
          How we prescribe
        </p>

        <h2 className="max-w-[26ch] font-head text-[clamp(32px,3.8vw,50px)] leading-[1.1] font-semibold text-ink text-pretty">
          The fewest medications that keep the patient steady
        </h2>

        <p className="mt-[20px] mb-[36px] max-w-[60ch] text-[18px] leading-[1.6] text-body text-pretty lg:mb-[52px]">
          Patients with cognitive challenges are among the most heavily
          medicated people in the health system, often after years of
          crisis-driven additions.
        </p>

        <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="border-t-2 border-accent pt-[24px]"
            >
              <h3 className="font-head text-[25px] leading-[1.2] font-semibold text-ink text-pretty">
                {principle.title}
              </h3>
              <p className="mt-[12px] text-[16.5px] leading-[1.6] text-body text-pretty">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
