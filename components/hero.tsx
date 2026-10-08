import { ThemedHeroImage } from "@/components/themed-hero-image";
import { ctaOutline } from "@/components/cta-styles";

/** Section 2 — hero. Body copy is verbatim from the client's existing site. */
export function Hero() {
  return (
    <section
      id="top"
      className="bg-surface1 px-[20px] pt-[56px] pb-[52px] lg:px-[32px] lg:pt-[96px] lg:pb-[88px]"
    >
      <div className="container-page grid grid-cols-1 items-center gap-[40px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[72px]">
        <div>
          <p className="mb-[26px] text-[13px] tracking-[0.22em] text-label uppercase">
            Virtual Psychiatry Practice
          </p>

          <h1 className="font-head text-[clamp(40px,4.8vw,64px)] leading-[1.05] font-bold tracking-[-0.035em] text-ink text-pretty">
            Better Days Every Day
          </h1>

          <h2 className="mt-[18px] font-head text-[clamp(20px,2.1vw,27px)] leading-[1.3] font-normal tracking-[-0.01em] text-subhead text-pretty">
            Specialized Psychiatry for Cognitive Challenges
          </h2>

          <p className="mt-[26px] max-w-[44ch] text-[19px] leading-[1.62] text-body text-pretty">
            We provide expert prescribing care tailored for individuals with
            intellectual and developmental delay or dementia struggling with
            challenging behavior.
          </p>

          <p className="mt-[18px] max-w-[44ch] text-[19px] leading-[1.62] text-body text-pretty">
            Our virtual practice ensures accessible, high-quality psychiatric
            support from the comfort of our patients&rsquo; homes, focusing on
            integrated care and long-term stability.
          </p>

          {/* The practice books by phone only, so the primary hero action is a
              tel: link rather than the visit-type modal. */}
          <div className="mt-[34px] flex flex-wrap items-center gap-[28px]">
            <a
              href="tel:+18023287369"
              aria-label="Call BrigaRx to book a visit at (802) 328-7369"
              className="flex items-center gap-[16px] text-ink no-underline hover:text-accent"
            >
              <span className="flex size-[56px] flex-none items-center justify-center rounded-full bg-accent">
                <svg
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--onAccent)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="flex flex-col gap-[2px]">
                <span className="font-sans text-[13px] tracking-[0.18em] text-label uppercase">
                  Call to book a visit
                </span>
                <span className="font-head text-[28px] leading-[1.15] font-semibold tracking-[-0.02em]">
                  (802) 328-7369
                </span>
              </span>
            </a>
            <a href="#how" className={`${ctaOutline} no-underline`}>
              See how it works
            </a>
          </div>
        </div>

        {/* Offset accent block sits behind the photograph, down and to the right. */}
        <div className="relative min-w-0">
          <div
            aria-hidden
            className="absolute inset-[22px_-22px_-22px_22px] bg-surface2"
          />
          <div className="relative h-[360px] lg:h-[520px]">
            <ThemedHeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
