import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import CaseStudyClient from "./CaseStudyClient";

/** Pre-render every case study at build time. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Case study not found — Dev Shrimali" };
  }
  return {
    title: `${project.title} — ${project.subtitle} | Dev Shrimali`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <CaseStudyClient />;
}
