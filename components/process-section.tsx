"use client"

import { useState, useRef } from "react"
import { Search, Target, Lightbulb, PenTool, FlaskConical, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Immersing in the problem space to gather deep insights and understand the 'why' before the 'how'.",
    tags: ["User Research", "Market Analysis"],
    icon: Search,
    image: "/process/discover.png",
    color: "bg-blue-500"
  },
  {
    number: "02",
    title: "Define",
    description: "Synthesizing research into clear strategies, personas, and problem statements to guide direction.",
    tags: ["Prioritization", "Problem Statements"],
    icon: Target,
    image: "/process/define.png",
    color: "bg-purple-500"
  },
  {
    number: "03",
    title: "Design",
    description: "Creating high-fidelity interfaces where structure meets aesthetics for natural, intuitive interactions.",
    tags: ["UI Design", "Prototyping"],
    icon: PenTool,
    image: "/process/design.png",
    color: "bg-pink-500"
  },
  {
    number: "04",
    title: "Validate",
    description: "Conducting usability testing to iterate on designs, smoothing out friction points and enhancing usability.",
    tags: ["Usability Testing", "Feedback Loops"],
    icon: Lightbulb,
    image: "/process/validate.png",
    color: "bg-orange-500"
  },
  {
    number: "05",
    title: "Deliver",
    description: "Providing comprehensive assets and documentation to ensure the final product matches the vision perfectly.",
    tags: ["Design Systems", "Handoff"],
    icon: FlaskConical,
    image: "/process/deliver.png",
    color: "bg-green-500"
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-6 md:px-20 lg:px-40 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            03 / Process & Workflow
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            A strategic approach to digital product design, ensuring every pixel utilizes data-backed insights and creative innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Navigation List */}
          <div className="flex flex-col gap-4 relative">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <motion.div
                  key={step.number}
                  layout
                  onClick={() => setActiveStep(index)}
                  className={`
                    relative overflow-hidden cursor-pointer rounded-3xl transition-all duration-500 ease-out
                    ${isActive
                      ? "bg-background border-border shadow-xl scale-[1.02]"
                      : "bg-transparent hover:bg-background/50 border-transparent hover:border-border/50 scale-100 opacity-70 hover:opacity-100"
                    }
                    border
                  `}
                >
                  {/* Active Indicator Line - Adjusted to fit better */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-1 top-8 bottom-8 w-1 bg-primary rounded-full z-20"
                    />
                  )}

                  <div className="p-6 md:p-8 flex gap-6 items-start pl-8 md:pl-10">
                    {/* Icon Container */}
                    <div className={`
                        flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500
                        ${isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}
                    `}>
                      <step.icon className="w-6 h-6" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold font-[family-name:var(--font-syne)] transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.title}
                        </h3>
                        <span className="text-xs font-mono text-muted-foreground/50">{step.number}</span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <p className="text-muted-foreground leading-relaxed mb-6 pt-2 text-sm md:text-base pr-4">
                              {step.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {step.tags.map(tag => (
                                <span key={tag} className="text-[10px] md:text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow for inactive state hint */}
                    {!isActive && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground/30 self-center" />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - Visual Showcase (Sticky) */}
          <div className="hidden lg:block relative h-[600px] sticky top-32">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-background">
              {/* iPhone Dynamic Island / Notion notch lookalike for decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 opacity-20" />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full bg-background"
                >
                  {/* Fallback color/gradient if image fails or for styling */}
                  <div className={`absolute inset-0 opacity-10 ${processSteps[activeStep].color}`} />

                  {/* Actual Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={processSteps[activeStep].image}
                      alt={processSteps[activeStep].title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 50vw"
                      quality={90}
                      className="object-cover"
                      priority
                    />
                    {/* Gradient Overlay for text readability if we add text over image later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Elements / UI Overlay mockups over the image */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <motion.div
                  key={`overlay-${activeStep}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg inline-flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${processSteps[activeStep].color} text-white`}>
                    {(() => {
                      const Icon = processSteps[activeStep].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Phase {processSteps[activeStep].number}</p>
                    <p className="text-sm font-semibold">{processSteps[activeStep].title}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
