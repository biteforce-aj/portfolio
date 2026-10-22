// Brand fonts. tokens.css maps them to `font-sans`/`font-heading` (Geist),
// `font-serif` (Instrument Serif, used italic for accent words) and `font-mono` (Geist Mono).
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

const body = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

const code = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
  display: "swap",
});

export const fontVariables = `${body.variable} ${accent.variable} ${code.variable}`;
