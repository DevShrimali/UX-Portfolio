import { ArrowLeft, Github, ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, getProjectById } from "@/lib/projects-data"
import { BehanceIcon } from "@/components/behance-icon"

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Dev - UI/UX Designer`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project) {
    notFound()
  }

  const hasCaseStudy = project.challenge && project.solution

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category.some((c) => project.category.includes(c)))
    .slice(0, 3)

  return (
    <main className="pt-24">
      {/* Back Button */}
      <div className="px-6 md:px-20 lg:px-40 py-8">
        <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-20 lg:px-40 pb-16">
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-border rounded-full text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-[family-name:var(--font-syne)] font-bold mb-8">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">{project.description}</p>

        {/* External Links - Added Dribbble option */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Website
            </a>
          )}
          {project.behanceUrl && (
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              <BehanceIcon className="w-5 h-5" />
              View on Behance
            </a>
          )}
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full h-[40vh] md:h-[50vh] lg:h-[70vh] relative">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        {/* Meta Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
          {project.role && (
            <div className="p-5 md:p-6 bg-card rounded-xl border border-white/10">
              <h4 className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">Role</h4>
              <p className="text-base md:text-lg font-bold">{project.role}</p>
            </div>
          )}
          {project.timeline && (
            <div className="p-5 md:p-6 bg-card rounded-xl border border-white/10">
              <h4 className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">Timeline</h4>
              <p className="text-base md:text-lg font-bold">{project.timeline}</p>
            </div>
          )}
          {project.tools && (
            <div className="p-5 md:p-6 bg-card rounded-xl border border-white/10">
              <h4 className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">Tools</h4>
              <p className="text-base md:text-lg font-bold">{project.tools.join(", ")}</p>
            </div>
          )}
        </div>

        {/* Case Study Content */}
        {hasCaseStudy && (
          <>
            {/* Challenge */}
            <div className="mb-16">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">The Challenge</h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-syne)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">The Solution</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* Results */}
            {project.results && (
              <div className="mb-16">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="p-5 md:p-6 bg-card rounded-xl border border-border text-center">
                      <p className="text-xl md:text-2xl font-[family-name:var(--font-syne)] font-bold text-accent">
                        {result.split(" ")[0]}
                      </p>
                      <p className="text-muted-foreground text-xs md:text-sm mt-2">{result.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Gallery</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {relatedProjects.length > 0 && (
        <section className="px-6 md:px-20 lg:px-40 py-16 border-t border-white/10">
          <h3 className="text-2xl font-[family-name:var(--font-syne)] font-bold mb-8">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/work/${relatedProject.id}`}
                scroll={true}
                className="group bg-card rounded-[24px] overflow-hidden border border-border hover:border-primary/20 transition-all flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-[240px] overflow-hidden w-full m-2 mb-0 rounded-[20px] self-center w-[calc(100%-16px)]">
                  <img
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedProject.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h5 className="text-2xl font-bold font-[family-name:var(--font-syne)] mb-3 text-foreground">
                    {relatedProject.title}
                  </h5>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {relatedProject.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-bold text-sm rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* View All Projects */}
      <section className="px-6 md:px-20 lg:px-40 py-16 border-t border-white/10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          View All Projects
        </Link>
      </section>
    </main>
  )
}
