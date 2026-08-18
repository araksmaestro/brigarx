import { BookingProvider } from "@/components/booking-provider";
import { PaletteProvider } from "@/components/palette-provider";
import { PaletteSwitcher } from "@/components/palette-switcher";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { WhoWeHelp } from "@/components/who-we-help";
import { WhatWeDo } from "@/components/what-we-do";
import { HowItWorks } from "@/components/how-it-works";
import { IntegratedCare } from "@/components/integrated-care";
import { HowWePrescribe } from "@/components/how-we-prescribe";
import { About } from "@/components/about";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { CrisisNotice } from "@/components/crisis-notice";
import { SiteFooter } from "@/components/site-footer";

// Sections run in the order the handoff specifies. BookingProvider wraps the
// page because the visit-type chooser is opened from three of them.
//
// PaletteProvider and PaletteSwitcher are REVIEW SCAFFOLDING for the client's
// palette decision (open item #1). Once the palette is signed off, delete the
// PaletteSwitcher import and its element below — see components/palette.ts for
// the rest of the removal.
export default function Home() {
  return (
    <PaletteProvider>
      <BookingProvider>
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <TrustStrip />
          <WhoWeHelp />
          <WhatWeDo />
          <HowItWorks />
          <IntegratedCare />
          <HowWePrescribe />
          <About />
          <Pricing />
          <Faq />
          <Contact />
          <CrisisNotice />
        </main>
        <SiteFooter />
        <PaletteSwitcher />
      </BookingProvider>
    </PaletteProvider>
  );
}
