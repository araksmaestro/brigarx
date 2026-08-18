import { BookButton } from "@/components/book-button";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/components/booking";
import { ctaOnDarkFilled, ctaOnDarkOutline } from "@/components/cta-styles";

const labelClass = "text-[13px] tracking-[0.2em] text-on-dark-muted uppercase";

/**
 * Section 12 — contact. The second dark band.
 *
 * There is deliberately no contact form: by client decision, scheduling
 * happens in a third-party system.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="bg-deep px-[20px] py-[56px] text-surface1 lg:px-[32px] lg:py-[104px]"
    >
      <div className="container-page grid grid-cols-1 items-start gap-[40px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-[80px]">
        <div>
          <h2 className="font-head text-[clamp(34px,4.2vw,56px)] leading-[1.05] font-semibold text-[var(--base)] text-pretty">
            We&rsquo;re There When You Need Us
          </h2>

          <p className="mt-[22px] max-w-[46ch] text-[18.5px] leading-[1.62] text-on-dark text-pretty">
            Scheduling is online. Pick a time that works, and bring whoever
            knows the patient best to the visit. If you would rather talk it
            through first, call or email us.
          </p>

          <div className="mt-[32px] flex flex-wrap gap-[14px]">
            <BookButton className={ctaOnDarkFilled}>
              Schedule a visit
            </BookButton>
            <a
              href={PHONE_HREF}
              className={`${ctaOnDarkOutline} no-underline hover:text-[var(--base)]`}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-[26px] max-w-[52ch] text-[15px] leading-[1.55] text-on-dark-muted text-pretty">
            Booking opens our scheduling system in a new window. Please do not
            send clinical details by email.
          </p>
        </div>

        <div className="grid gap-[30px] border-[rgba(var(--baseRGB),0.22)] lg:border-l lg:pl-[44px]">
          <div>
            <p className={labelClass}>Phone</p>
            <a
              href={PHONE_HREF}
              className="mt-[8px] inline-block font-head text-[27px] font-semibold text-[var(--base)] no-underline hover:underline hover:text-[var(--base)]"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <p className={labelClass}>Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-[8px] inline-block text-[19px] text-[var(--base)] no-underline hover:underline hover:text-[var(--base)]"
            >
              {EMAIL}
            </a>
          </div>

          <div>
            <p className={labelClass}>Hours</p>
            <p className="mt-[8px] text-[18px] leading-[1.5] text-on-dark">
              9AM &ndash; 4PM Mon&ndash;Fri
              <br />
              Excluding federal holidays
            </p>
          </div>

          <div>
            <p className={labelClass}>Location</p>
            <p className="mt-[8px] text-[18px] leading-[1.5] text-on-dark">
              Serving Oregon virtually
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
