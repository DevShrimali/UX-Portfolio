import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import CaseStudy from "@/components/case-study/CaseStudy";
import { getProject, projects } from "@/data/projects";

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
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <SmoothScroll>
      <Header />
      <CaseStudy project={project} />
    </SmoothScroll>
  );
}
