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
  title: {
    default: "Dev Shrimali | Creative UX/UI Designer",
    template: "%s | Dev Shrimali"
  },
  description: "Senior UX/UI Designer specializing in user-centered digital products, immersive web experiences, and modern interface design.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "Web Developer", "Next.js", "React", "Dev Shrimali", "Portfolio", "Creative Developer", "Framer Motion"],
  authors: [{ name: "Dev Shrimali" }],
  creator: "Dev Shrimali",
  publisher: "Dev Shrimali",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/dev-pro.png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/dev-pro.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Dev Shrimali | Creative UX/UI Portfolio",
    description: "Explore the work of Dev Shrimali, a Senior UX/UI Designer creating immersive, user-centered digital experiences with modern web technologies.",
    url: "https://devshrimali.com", // Placeholder, ideally should be the real Vercel URL or domain
    siteName: "Dev Shrimali Portfolio",
    images: [
      {
        url: "/dev-pro.png",
        width: 800,
        height: 600,
        alt: "Dev Shrimali - UX/UI Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Shrimali | Creative UX/UI Portfolio",
    description: "Senior UX/UI Designer creating immersive digital products.",
    images: ["/dev-pro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'Dev Shrimali Portfolio',
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
