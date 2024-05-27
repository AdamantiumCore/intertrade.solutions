import type { Metadata } from "next";
import { Afacad, Lexend, Instrument_Sans } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad",
  adjustFontFallback: false,
});
const lexend = Lexend({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lexend",
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "InterTrade",
  description: "The world is your market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${afacad.variable} ${lexend.variable}`}
    >
      <body className="font-instrument h-full">{children}</body>
    </html>
  );
}
