import type { Metadata } from "next"
import type { ReactNode } from "react"
import "../index.css"

export const metadata: Metadata = {
  title: "Serein Dental Studio | Thoughtful Dental Care",
  description:
    "A calmer, more personal approach to dentistry. Explore our care and get to know Serein Dental Studio.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
