import type React from "react"
import type { Metadata } from "next"
import { Syne, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

import { SmoothScroller } from "@/components/smooth-scroller"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Dev - UI/UX Designer",
  description: "UI/UX Designer creating user-centered digital products for web and mobile",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <SmoothScroller />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
