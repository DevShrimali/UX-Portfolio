import { Briefcase, MapPin, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <h1 className="text-5xl md:text-8xl font-[family-name:var(--font-syne)] font-bold mb-8">
          About <span className="outline-text">Me</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          I&apos;m Dev Shrimali, a passionate UI/UX Designer with over 6 years of experience creating digital products
          that make a difference.
        </p>
      </section>

      {/* Image Section */}
      <section className="px-6 md:px-20 lg:px-40 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] relative overflow-hidden rounded-3xl">
            <img src="/professional-portrait-photo-of-a-creative-designer.jpg" alt="Dev Shrimali" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold mb-6">
              Bridging the gap between complexity and simplicity
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Based in Ahmedabad, India, I specialize in designing scalable user-centered products for Fintech,
              HealthTech, and E-commerce. My approach combines thorough user research with meticulous attention to
              visual details.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-xl border border-white/10">
                <Briefcase className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl font-bold">6+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-white/10">
                <Award className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-white/10">
                <MapPin className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl font-bold">India</p>
                <p className="text-sm text-gray-500">Based In</p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-white/10">
                <Heart className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-[#080808] border-y border-white/5">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">My Philosophy</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-bold text-xl">
              1
            </div>
            <h4 className="text-xl font-bold">User First</h4>
            <p className="text-gray-500">
              Every design decision starts with understanding the user&apos;s needs, behaviors, and pain points.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-secondary border border-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h4 className="text-xl font-bold">Simplicity Wins</h4>
            <p className="text-gray-500">
              Complex problems deserve elegant, simple solutions that anyone can understand and use.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-secondary border border-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h4 className="text-xl font-bold">Iterate & Improve</h4>
            <p className="text-gray-500">
              Great design is never finished. Continuous testing and refinement lead to better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 lg:px-40 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold mb-8">
          Ready to work together?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
        >
          Start a Project
        </Link>
      </section>
    </main>
  )
}
