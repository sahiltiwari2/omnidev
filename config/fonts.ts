import { Fira_Code as FontMono, Inter as FontSans, Roboto_Condensed as FontCondensed } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontCondensed = FontCondensed({
  subsets: ["latin"],
  variable: "--font-condensed",
});
