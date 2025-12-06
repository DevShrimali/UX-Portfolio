"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

const featuredProjects = projects.slice(0, 3)

const otherProjects = projects.slice(3, 9)

export function WorkSection() {
  return (
    <section id="work" className="relative bg-background pt-24 pb-40">
      <div className="px-6 md:px-20 lg:px-40 mb-20 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">03 / Selected Projects</h3>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold">
            Featured <span className="text-gray-600">Work</span>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-gray-400 text-sm max-w-xs md:text-right">
            A selection of e-commerce, healthcare, and fintech solutions.
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm rounded-full hover:bg-[#bef264] transition-colors"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Featured Project Cards - Cards with image, name, and view link */}
      <div className="relative w-full space-y-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="sticky top-20 h-[70vh] md:h-[80vh] flex items-center justify-center">
            <Link
              href={`/work/${project.id}`}
              scroll={true}
              className={`block w-[95%] md:w-[85%] h-[60vh] md:h-[75vh] ${project.bgColor} border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group shadow-2xl`}
            >
              {/* Image Background */}
              <img
                src={project.image || "/placeholder.svg"}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                alt={`${project.title} Project`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg max-w-xl leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-full group-hover:bg-[#bef264] transition-colors">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Additional Projects List - Updated cards with images */}
      <div className="px-6 md:px-20 lg:px-40 mt-32">
        <h4 className="text-2xl font-[family-name:var(--font-syne)] font-bold mb-12 border-b border-white/10 pb-4">
          More Projects
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              scroll={true}
              className="group bg-[#0A0A0A] rounded-[24px] overflow-hidden border border-white/5 hover:border-white/10 transition-all flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden w-full m-2 mb-0 rounded-[20px] self-center w-[calc(100%-16px)]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#1A1A1A] text-[#666] text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h5 className="text-2xl font-bold font-[family-name:var(--font-syne)] mb-3 text-white">
                  {project.title}
                </h5>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Button */}
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-full group-hover:bg-[#bef264] transition-colors duration-300">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#bef264] transition-colors"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
