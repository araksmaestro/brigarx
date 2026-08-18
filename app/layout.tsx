import type { Metadata } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Clay palette: Outfit headings, Nunito Sans body.
// Switching to plum / teal / sky / cyan means Montserrat headings — import it
// here and re-point --head in globals.css.
const outfit = Outfit({
  variable: "--font-outfit",
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
// data-theme selects the palette from app/theme.css. Change this one word to
// preview plum, teal, sky or cyan.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="clay"
      className={`${outfit.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-ink">
        {children}
      </body>
    </html>
  );
}
