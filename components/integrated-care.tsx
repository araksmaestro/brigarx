import { CareCircle } from "@/components/care-circle";

/** Section 7 — integrated care. First paragraph is verbatim client copy. */
export function IntegratedCare() {
  return (
    <section className="bg-surface1 px-[20px] py-[56px] lg:px-[32px] lg:py-[104px]">
      <div className="container-page grid grid-cols-1 items-center gap-[40px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[56px]">
        <CareCircle />

        <div>
          <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
            Integrated care
          </p>

          <h2 className="font-head text-[clamp(32px,3.6vw,48px)] leading-[1.1] font-semibold text-ink text-pretty">
            Medication is one part of the plan
          </h2>

          <p className="mt-[22px] text-[18.5px] leading-[1.62] text-body text-pretty">
            We collaborate closely with behavior support professionals to
            provide a holistic, integrated approach for our highest need
            patients, ensuring comprehensive care that addresses both cognitive
            and behavioral challenges.
          </p>

          <p className="mt-[18px] text-[18.5px] leading-[1.62] text-body text-pretty">
            That means asking what changed in the environment before reaching
            for a new prescription, and keeping every person on the team
            informed when something does change.
          </p>
        </div>
      </div>
    </section>
  );
}
