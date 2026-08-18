const CARDS = [
  {
    title: "Intellectual & developmental delay.",
    description:
      "Adults and adolescents whose behavior has become difficult to manage at home, at a day program, or in supported living. Often already on several medications.",
    chips: [
      "Aggression toward staff or family",
      "Self-injury",
      "Property destruction",
      "Elopement",
      "Placement at risk",
      "Repeat ER visits",
      "Too many medications",
    ],
  },
  {
    title: "Dementia.",
    description:
      "Behavioral symptoms in older adults, treated with attention to fall risk, drug interactions and total medication burden.",
    chips: [
      "Agitation late in the day",
      "Up all night",
      "Aggression during care tasks",
      "Suspicion or paranoia",
      "Wandering",
      "Caregiver burnout",
    ],
  },
];

/** Section 4 — who we help. */
export function WhoWeHelp() {
  return (
    <section
      id="who"
      className="bg-base px-[20px] pt-[56px] pb-[56px] lg:px-[32px] lg:pt-[88px] lg:pb-[104px]"
    >
      <div className="container-page">
        <p className="mb-[16px] text-[13px] tracking-[0.22em] text-label uppercase">
          Who we help
        </p>

        <h2 className="max-w-[22ch] font-head text-[clamp(32px,3.8vw,52px)] leading-[1.1] font-semibold text-ink text-pretty">
          Care built for the people most often turned away
        </h2>

        <p className="mt-[20px] mb-[36px] max-w-[58ch] text-[18px] leading-[1.6] text-body text-pretty lg:mb-[52px]">
          Most psychiatry practices are not set up for patients who cannot
          easily describe what they are feeling. Ours is. We work with families,
          guardians, group homes and case managers as part of the care team.
        </p>

        <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[14px] border-t-2 border-accent bg-surface1 px-[26px] pt-[32px] pb-[34px] lg:px-[36px] lg:pt-[40px] lg:pb-[42px]"
            >
              <h3 className="font-head text-[29px] leading-[1.15] font-semibold text-ink text-pretty">
                {card.title}
              </h3>

              <p className="mt-[14px] text-[17px] leading-[1.6] text-body text-pretty">
                {card.description}
              </p>

              <p className="mt-[26px] mb-[14px] text-[13px] tracking-[0.16em] text-label uppercase">
                What families describe
              </p>

              <div className="flex flex-wrap gap-[9px]">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[rgba(var(--lineRGB),0.16)] bg-base px-[14px] py-[8px] text-[15px] text-deep"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
