import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work — Dev Shrimali | Product Designer",
  description:
    "Case studies across Fintech, Healthcare, SaaS, and E-Commerce by Dev Shrimali, Senior Product Designer.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
