import { ArrowLeft, Github, ExternalLink, ArrowUpRight, Calendar, User, Wrench } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, getProjectById } from "@/lib/projects-data"
import { BehanceIcon } from "@/components/behance-icon"
import { ImageGallery } from "@/components/image-gallery"


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

  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category.some((c) => project.category.includes(c)))
    .slice(0, 3)

  return (
    <main className="pt-24 pb-24 bg-background min-h-screen">
      <article className="max-w-screen-2xl mx-auto">
        {/* Navigation & Header */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-[11px] font-bold uppercase tracking-widest text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-white hover:text-black transition-all text-sm"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              )}
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-white hover:text-black transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Live Site
                </a>
              )}
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0057ff] text-white font-semibold rounded-full hover:bg-[#0046cc] transition-all text-sm"
                >
                  <BehanceIcon className="w-4 h-4" /> Case Study
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Info Grid (Blog Metadata Style) */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
            {project.role && (
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <User className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Role</span>
                </div>
                <p className="font-semibold">{project.role}</p>
              </div>
            )}
            {project.timeline && (
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Timeline</span>
                </div>
                <p className="font-semibold">{project.timeline}</p>
              </div>
            )}
            {project.tools && (
              <div className="col-span-2 md:col-span-2">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Wrench className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Tools</span>
                </div>
                <p className="font-semibold">{project.tools.join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Visuals Container */}
        <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24 space-y-12">
          {/* Main Cover Image */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/50">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Interactive Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Gallery</h3>
                <span className="text-xs text-muted-foreground">{project.gallery.length} Images</span>
              </div>
              <ImageGallery images={project.gallery} title={project.title} />
            </div>
          )}
        </div>

        {/* Narrative Content (Blog Reading Mode) */}
        {hasCaseStudy && (
          <div className="px-6 md:px-12 lg:px-24 xl:px-40 mb-24">
            <div className="max-w-3xl mx-auto space-y-16">
              {/* Challenge */}
              <section className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">The Challenge</h2>
                <div className="text-lg md:text-xl leading-relaxed text-muted-foreground/90 space-y-6">
                  <p>{project.challenge}</p>
                </div>
              </section>

              <hr className="border-border/50" />

              {/* Solution */}
              <section className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">The Solution</h2>
                <div className="text-lg md:text-xl leading-relaxed text-muted-foreground/90 space-y-6">
                  <p>{project.solution}</p>
                </div>
              </section>

              {/* Results Cards */}
              {project.results && (
                <section className="pt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {project.results.map((result, i) => (
                      <div key={i} className="bg-card p-6 rounded-2xl border border-border/50 hover:border-accent/50 transition-colors">
                        <p className="text-3xl font-[family-name:var(--font-syne)] font-bold text-accent mb-2">
                          {result.split(" ")[0]}
                        </p>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                          {result.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="px-6 md:px-12 lg:px-24 xl:px-40 py-24 border-t border-border/40">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-[family-name:var(--font-syne)] font-bold">Next Projects</h2>
              <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
                View All <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/work/${relatedProject.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-card border border-border/50">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay badge on hover */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2 group-hover:text-accent transition-colors">
                    {relatedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 md:hidden text-center">
              <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors">
                View All Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
