import { Briefcase, GraduationCap } from "lucide-react"

const workExperience = [
  {
    title: "UI / UX designer",
    company: "EnlightVision Technologies Private Limited",
    period: "Aug 2024 — Present",
    current: true,
    responsibilities: [
      "Location: Ahmedabad, Gujarat, India",
      "Skills: UserResearch, Communication & Collaboration, Visual Design, Interaction Design, Prototyping.",
    ],
  },
  {
    title: "UI / UX Designer",
    company: "Konzept Solutions",
    period: "Mar 2021 — Mar 2024",
    current: false,
    responsibilities: [
      "Location: Ahmedabad, Gujarat, India",
      "Skills: UserResearch, Communication & Collaboration, Wireframing, Adobe XD, Design Systems.",
    ],
  },
  {
    title: "Website & Graphic Designer",
    company: "VMG Software Solutions Pvt. Ltd.",
    period: "Oct 2020 — Feb 2021",
    current: false,
    responsibilities: [
      "Location: Gandhinagar, Gujarat, India",
      "Skills: UserResearch, Communication & Collaboration, Web Design, HTML/CSS, Graphic Design.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Pixeltec Digital Wallpaper",
    period: "Apr 2019 — Oct 2020",
    current: false,
    responsibilities: [
      "Location: Ahmedabad, Gujarat, India",
      "Skills: UserResearch, Visual Design, Print Design, Branding, Custom Wallpapers.",
    ],
  },
]

const education = [
  {
    title: "Bachelor of Technology - BTech, Computer Science",
    institution: "U.V. Patel College of Engineering",
    period: "2016 - 2018",
    description: "Computer Science Engineering",
  },
  {
    title: "High School Diploma, Computer Science",
    institution: "Tolani Foundation, Gandhidham Polytechnic(SFI) 653",
    period: "2011 - 2015",
    description: "Grade: A. Activities: Built a Tic Tac Toe Game (C#) and Static Website (Asp.net) in final year.",
  },
  {
    title: "UI & UX Assessment",
    institution: "LearnTube.ai",
    period: "Aug 2024",
    description: "Skills: Visual / UI Design & Interaction, Figma, User Interface Design, Wireframing & Prototyping, UX Research.",
  },
  {
    title: "Learn Illustrator CC",
    institution: "Udemy",
    period: "Mar 2021",
    description: "Credential ID: UC-7c1f69ad-9c2a-4e95-a5cc-1a762a46b811",
  },
  {
    title: "UX UI Process & Adobe XD",
    institution: "Udemy",
    period: "Nov 2020",
    description: "Visual / UI Design & Interaction, Wireframing & Prototyping, Adobe XD, UX Research.",
  },
  {
    title: "Zero To Mastery : Web Developer",
    institution: "Zero To Mastery Academy",
    period: "Sep 2020",
    description: "Skills: DesignThinking, UserResearch, HTML5, GitHub, React.js.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 lg:px-40 bg-[#080808] border-t border-white/5">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-16">04 / Journey</h3>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Work Experience */}
        <div className="space-y-12">
          <h4 className="text-2xl font-[family-name:var(--font-syne)] font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-gray-500" /> Work Experience
          </h4>

          {workExperience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l border-white/10">
              <span
                className={`absolute -left-1.5 top-2 w-3 h-3 rounded-full ${job.current ? "bg-accent" : "bg-white"}`}
              />
              <h5 className="text-xl font-bold">{job.title}</h5>
              <p className="text-gray-400 text-sm mb-4">
                {job.company} • {job.period}
              </p>
              <ul className="list-disc ml-4 text-gray-500 text-sm space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Certificates */}
        <div className="space-y-12">
          <h4 className="text-2xl font-[family-name:var(--font-syne)] font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-gray-500" /> Education & Certification
          </h4>

          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l border-white/10">
              <span className="absolute -left-1.5 top-2 w-3 h-3 bg-muted rounded-full border border-white/20" />
              <h5 className="text-xl font-bold">{edu.title}</h5>
              <p className="text-gray-400 text-sm mb-2">
                {edu.institution} • {edu.period}
              </p>
              {edu.description && <p className="text-gray-500 text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
