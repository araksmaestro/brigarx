import { ThemedLogo } from "@/components/themed-logo";
import { EMAIL } from "@/components/booking";

/** Section 14 — footer. */
export function SiteFooter() {
  return (
    <footer className="bg-base px-[20px] py-[36px] lg:px-[32px] lg:py-[44px]">
      <div className="container-page flex flex-wrap items-center justify-between gap-[24px] lg:gap-[32px]">
        <ThemedLogo width={84} height={36} className="h-[36px] w-auto" />

        <div className="flex flex-wrap items-center gap-[20px] text-[14.5px] text-muted lg:gap-[28px]">
          <a href={`mailto:${EMAIL}`} className="text-muted no-underline hover:underline">
            {EMAIL}
          </a>
          <span>&copy; 2026 BrigaRx. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
