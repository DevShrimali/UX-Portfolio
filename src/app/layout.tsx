import type { Metadata } from "next";
import { Geist, Geist_Mono, Playball } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playball = Playball({
  variable: "--font-playball",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Shrimali — Senior UI/UX Designer | devux.in",
  description:
    "Portfolio of Dev Shrimali, a Senior UI/UX Designer with 7 years of experience crafting digital products across Fintech, Healthcare, and SaaS.",
  keywords: [
    "UI/UX Designer",
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
    title: "Dev Shrimali — Senior UI/UX Designer",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playball.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
