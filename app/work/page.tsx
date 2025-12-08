import { projects } from "@/lib/projects-data"
import { WorkFilters } from "@/components/work-filters"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work | Dev Shrimali - UI/UX Designer",
  description: "Explore my portfolio of UI/UX designs, branding, logos, websites, and case studies.",
  alternates: {
    canonical: "https://devshrimali.com/work",
  },
}

export default function WorkPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Portfolio</h3>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold mb-8">
          All <span className="text-gray-600">Work</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
          A comprehensive collection of UI/UX designs, branding projects, logo designs, websites, open-source
          contributions, and detailed case studies.
        </p>
      </section>

      {/* Filters and Projects */}
      <WorkFilters projects={projects} />
    </main>
  )
}
