import { ThemedHeroImage } from "@/components/themed-hero-image";
import { BookButton } from "@/components/book-button";
import { ctaFilled, ctaOutline } from "@/components/cta-styles";

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

          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <BookButton className={ctaFilled}>Book an intake visit</BookButton>
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
