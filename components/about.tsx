const STATS = [
  { value: "10+", caption: "Years in specialized psychiatry" },
  { value: "1", caption: "Prescriber, every visit" },
  { value: "OR", caption: "Serving Oregon virtually" },
];

/**
 * Section 9 — about.
 *
 * OPEN ITEM — the portrait slot is a placeholder. The only headshot of Esha
 * Bhardwaj available is 290x363, far too small for this 460px slot; a
 * high-resolution original has been requested from the client.
 *
 * OPEN ITEM — the second paragraph was written for the design and has not been
 * confirmed by the practice.
 */
export function About() {
  return (
    <section
      id="about"
      className="bg-base px-[20px] py-[56px] lg:px-[32px] lg:py-[104px]"
    >
      <div className="container-page grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[72px]">
        <div className="mb-[20px] flex h-[360px] min-w-0 items-center justify-center rounded-[14px] bg-surface1 lg:h-[460px]">
          <p className="px-[24px] text-center text-[13px] tracking-[0.16em] text-label uppercase">
            Portrait pending
          </p>
        </div>

        <div>
          <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
            About the practice
          </p>

          <h2 className="font-head text-[clamp(34px,4vw,54px)] leading-[1.06] font-semibold text-ink text-pretty">
            Esha Bhardwaj, PMHNP
          </h2>

          <p className="mt-[14px] mb-[32px] text-[17px] text-link">
            Practice owner · Over 10 years experience treating those with
            cognitive challenges
          </p>

          <p className="text-[19px] leading-[1.62] text-body text-pretty">
            Esha is a Yale graduate and has been providing specialized
            psychiatry services to individuals with cognitive challenges for 10
            years. Esha works with behavior support professionals and counselors
            to provide integrated care to our highest need patients.
          </p>

          <p className="mt-[18px] text-[19px] leading-[1.62] text-body text-pretty">
            BrigaRx is a small practice by design. Patients see the same
            prescriber at every visit, and caregivers reach a person who already
            knows the case.
          </p>

          <div className="mt-[32px] grid grid-cols-1 gap-[28px] border-t border-[rgba(var(--lineRGB),0.14)] pt-[28px] sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.value}>
                <p className="font-head text-[34px] font-semibold tracking-[-0.02em] text-deep">
                  {stat.value}
                </p>
                <p className="mt-[6px] text-[15px] leading-[1.45] text-muted">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
