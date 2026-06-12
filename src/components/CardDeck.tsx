"use client";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import type { Project } from "@/data/projects";

export default function CardDeck({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full">
      {projects.map((project, idx) => (
        <Link
          key={project.id}
          href={`/work/${project.slug}`}
          className="block w-full h-full outline-none"
        >
          <WorkCard project={project} index={idx} />
        </Link>
      ))}
    </div>
  );
}
