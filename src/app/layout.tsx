import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TransitionProvider from "@/components/layout/TransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dev Shrimali — Senior Product Designer | devux.in",
  description:
    "Portfolio of Dev Shrimali, a Senior Product Designer with 7 years of experience crafting digital products across Fintech, Healthcare, and SaaS.",
  keywords: [
    "Product Designer",
    "Dev Shrimali",
    "Fintech Design",
    "Healthcare UX",
    "SaaS Design",
    "Portfolio",
  ],
  authors: [{ name: "Dev Shrimali" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Dev Shrimali — Senior Product Designer",
    description:
      "7 years designing intuitive digital products across Fintech, Healthcare, and SaaS.",
    type: "website",
    url: "https://devux.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Marks returning visitors before hydration so the transition
            curtain doesn't flash shut on reload. */}
        <Script src="/has-visited.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
