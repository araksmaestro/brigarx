import type { Metadata } from "next";
import { Outfit, Montserrat, Nunito_Sans } from "next/font/google";
import { DEFAULT_PALETTE } from "@/components/palette";
import "./globals.css";

// Headings are a token: Outfit for clay, Montserrat for plum / teal / sky /
// cyan. Both load up front — the handoff warns that loading them lazily makes
// the first palette switch flash unstyled text.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrigaRx — Specialized Psychiatry for Cognitive Challenges",
  description:
    "Virtual psychiatry practice serving Oregon. Expert prescribing care for individuals with intellectual and developmental delay or dementia struggling with challenging behavior.",
};

// Stable file — do not modify without explicit instruction.
//
// data-theme selects the palette from app/theme.css. It renders as
// DEFAULT_PALETTE so the first paint is correct; while the palette is still
// under review the client-side switcher may reassign it. Once the client signs
// off, this becomes the only value the page ever has.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_PALETTE}
      className={`${outfit.variable} ${montserrat.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-ink">
        {children}
      </body>
    </html>
  );
}
