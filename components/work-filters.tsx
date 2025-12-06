"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { BehanceIcon } from "./behance-icon"
import type { Project, ProjectCategory } from "@/lib/projects-data"

const filterCategories: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ui-ux", label: "UI/UX" },
  { key: "branding", label: "Branding" },
  { key: "logo", label: "Logos" },
  { key: "brochure", label: "Print" },
  { key: "website", label: "Websites" },
  { key: "github", label: "GitHub" },
  { key: "behance", label: "Behance" },
]

export function WorkFilters({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <>
      {/* Filter Tabs */}
      <section className="px-6 md:px-20 lg:px-40 mb-12">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeFilter === cat.key
                  ? "bg-accent text-background"
                  : "bg-card border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-20 lg:px-40 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const hasExternalLink = project.websiteUrl || project.githubUrl || project.behanceUrl
  const hasCaseStudy = project.challenge && project.solution

  return (
    <div className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        {/* External Links Overlay */}
        {hasExternalLink && (
          <div className="absolute top-4 right-4 flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-background transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-background transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-background transition-all"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase tracking-widest text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg md:text-xl font-[family-name:var(--font-syne)] font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{project.description}</p>

        {/* Action - Made links more visible */}
        {hasCaseStudy ? (
          <Link
            href={`/work/${project.id}`}
            scroll={true}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent transition-colors"
          >
            View Case Study <ArrowUpRight className="w-4 h-4" />
          </Link>
        ) : hasExternalLink ? (
          <span className="inline-flex items-center gap-2 text-sm text-gray-400">External Project</span>
        ) : (
          <Link
            href={`/work/${project.id}`}
            scroll={true}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent transition-colors"
          >
            View Details <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
