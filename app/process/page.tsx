import { Wrench, CheckCircle } from "lucide-react"

const processSteps = [
  {
    number: 1,
    title: "Empathize",
    description: "Understanding user needs through research, interviews, and observation.",
    details: ["User interviews and surveys", "Competitive analysis", "Persona development", "Journey mapping"],
  },
  {
    number: 2,
    title: "Define",
    description: "Synthesizing research into clear problem statements and design goals.",
    details: [
      "Problem statement creation",
      "User needs prioritization",
      "Success metrics definition",
      "Stakeholder alignment",
    ],
  },
  {
    number: 3,
    title: "Ideate",
    description: "Generating creative solutions through brainstorming and exploration.",
    details: ["Brainstorming sessions", "Sketching and wireframing", "Concept exploration", "Feature prioritization"],
  },
  {
    number: 4,
    title: "Prototype",
    description: "Building interactive models to test and validate design concepts.",
    details: ["Low-fidelity wireframes", "High-fidelity mockups", "Interactive prototypes", "Design system creation"],
  },
  {
    number: 5,
    title: "Test",
    description: "Validating designs with real users and iterating based on feedback.",
    details: ["Usability testing", "A/B testing", "Feedback analysis", "Iterative refinement"],
  },
]

const tools = [
  { name: "Figma", description: "Primary design and prototyping tool" },
  { name: "Photoshop", description: "Image editing and manipulation" },
  { name: "Illustrator", description: "Vector graphics and icons" },
  { name: "After Effects", description: "Motion design and animations" },
  { name: "Miro", description: "Collaborative whiteboarding" },
  { name: "Notion", description: "Documentation and project management" },
  { name: "Webflow", description: "No-code web development" },
  { name: "Notion", description: "No-code mobile app development" },
]

export default function ProcessPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <h1 className="text-5xl md:text-8xl font-[family-name:var(--font-syne)] font-bold mb-8">
          My <span className="outline-text">Process</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          A systematic approach to creating user-centered designs that solve real problems and deliver measurable
          results.
        </p>
      </section>

      {/* Process Steps */}
      <section className="px-6 md:px-20 lg:px-40 py-16">
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="grid md:grid-cols-2 gap-8 items-start border-b border-white/10 pb-16 last:border-0"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${index === 0 ? "bg-accent text-black" : "bg-secondary border border-white/20 text-white"
                      }`}
                  >
                    {step.number}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-syne)] font-bold">{step.title}</h2>
                </div>
                <p className="text-xl text-gray-400">{step.description}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-white/10">
                <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-4">Key Activities</h4>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-[#080808] border-y border-white/5">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">Tools & Software</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="p-6 bg-card rounded-xl border border-white/10">
              <Wrench className="w-5 h-5 text-accent mb-4" />
              <h4 className="text-lg font-bold mb-2">{tool.name}</h4>
              <p className="text-sm text-gray-500">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-20 lg:px-40 py-24">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">Capabilities</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "User Research",
            "Wireframing",
            "High-Fidelity UI",
            "Design Systems",
            "Prototyping",
            "Visual Design",
            "Interaction Design",
            "Usability Testing",
            "Information Architecture",
            "Responsive Design",
          ].map((capability) => (
            <span key={capability} className="px-6 py-3 border border-white/10 bg-card rounded-full text-lg">
              {capability}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
