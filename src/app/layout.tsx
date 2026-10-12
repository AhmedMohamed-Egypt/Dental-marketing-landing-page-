
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "../index.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serein Dental Studio | Thoughtful Dental Care",
  description:
    "A calmer, more personal approach to dentistry. Explore our care and get to know Serein Dental Studio.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
