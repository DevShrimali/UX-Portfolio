import { Briefcase, GraduationCap, Award } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | Dev Shrimali",
  description: "Explore the professional journey of Dev Shrimali, detailing 6+ years of UX/UI design experience across various companies and projects.",
  alternates: {
    canonical: "https://devshrimali.com/experience",
  },
}


const workExperience = [
  {
    title: "UI/UX Designer",
    company: "EnlightVision Technologies Pvt. Ltd.",
    period: "Aug 2024 — Present",
    current: true,
    responsibilities: [
      "Lead end-to-end UX and UI design for mobile and web applications across e-commerce, healthcare, fintech, and booking platforms.",
      "Create user flows, wireframes, high-fidelity designs, and design systems.",
      "Collaborate with product and engineering teams to enhance user experience.",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Konzept Solutions Pvt. Ltd.",
    period: "Mar 2021 — Mar 2024",
    current: false,
    responsibilities: [
      "Directed UX processes from research to final UI for responsive web and mobile products.",
      "Conducted user interviews, usability tests, and A/B experiments.",
      "Built scalable design systems reducing rework.",
    ],
  },
  {
    title: "UI & Graphic Designer",
    company: "VMG Software Solutions Pvt. Ltd.",
    period: "Oct 2020 — Feb 2021",
    current: false,
    responsibilities: [
      "Designed dashboards, landing pages, and interface components.",
      "Produced marketing graphics and brand assets.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Pixeltec Digital Wallpaper",
    period: "Apr 2019 — Oct 2020",
    current: false,
    responsibilities: [
      "Designed custom wall graphics, digital wallpapers, and branding materials.",
      "Created print-ready artwork for marketing campaigns.",
    ],
  },
]

const education = [
  {
    title: "Bachelor of Design / Computer Applications",
    institution: "University Name",
    period: "2016 - 2019",
    description: "Specialization in User Interface Design and Visual Communication.",
  },
  {
    title: "Google UX Design Professional Certificate",
    institution: "Coursera",
    period: "2021",
    description:
      "Comprehensive training in the design process, including empathy, definition, ideation, prototyping, and testing.",
  },
  {
    title: "Human-Computer Interaction",
    institution: "Interaction Design Foundation",
    period: "2020",
    description: "Advanced principles of human-computer interaction and user experience design.",
  },
]

export default function ExperiencePage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <h1 className="text-5xl md:text-8xl font-[family-name:var(--font-syne)] font-bold mb-8">
          My <span className="outline-text">Journey</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
          Over 6 years of experience designing digital products across multiple industries and platforms.
        </p>
      </section>

      {/* Timeline Stats */}
      <section className="px-6 md:px-20 lg:px-40 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-card rounded-xl border border-white/10 text-center">
            <p className="text-4xl font-[family-name:var(--font-syne)] font-bold text-accent">6+</p>
            <p className="text-sm text-gray-500 mt-2">Years Experience</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-white/10 text-center">
            <p className="text-4xl font-[family-name:var(--font-syne)] font-bold">4</p>
            <p className="text-sm text-gray-500 mt-2">Companies</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-white/10 text-center">
            <p className="text-4xl font-[family-name:var(--font-syne)] font-bold">50+</p>
            <p className="text-sm text-gray-500 mt-2">Projects</p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-white/10 text-center">
            <p className="text-4xl font-[family-name:var(--font-syne)] font-bold">3</p>
            <p className="text-sm text-gray-500 mt-2">Certifications</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="px-6 md:px-20 lg:px-40 py-24 bg-[#080808] border-y border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-gray-500" />
          <h2 className="text-3xl font-[family-name:var(--font-syne)] font-bold">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-white/10">
              <span
                className={`absolute -left-2 top-2 w-4 h-4 rounded-full ${job.current ? "bg-accent" : "bg-white"}`}
              />
              <div className="bg-card rounded-xl p-6 border border-white/10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  {job.current && (
                    <span className="px-3 py-1 bg-accent text-black text-xs font-bold rounded-full">Current</span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">
                  {job.company} • {job.period}
                </p>
                <ul className="list-disc ml-4 text-gray-500 space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-20 lg:px-40 py-24">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-gray-500" />
          <h2 className="text-3xl font-[family-name:var(--font-syne)] font-bold">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-white/10">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {edu.institution} • {edu.period}
              </p>
              {edu.description && <p className="text-gray-500 text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
