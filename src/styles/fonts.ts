// Brand fonts. Swap these two imports to rebrand; tokens.css maps them to
// `font-sans` (body) and `font-heading` via --font-body / --font-display.
import { Inter, Manrope } from "next/font/google";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontVariables = `${body.variable} ${display.variable}`;
