"use client"

import { useState, useRef } from "react"
import { Search, Target, Lightbulb, PenTool, FlaskConical, ArrowRight, ChevronUp, ChevronDown } from "lucide-react"
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

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length)
  }

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  return (
    <section id="process" className="py-20 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Content Container - Aligned with Work/Hero sections */}
      <div className="w-full px-6 md:px-20 lg:px-40 relative z-10 flex flex-col justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            03 / Process & Workflow
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
            How I <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            A strategic approach to digital product design, ensuring every pixel utilizes data-backed insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start relative">
          {/* Controls - Centered vertically in sticky view */}
          <div className="hidden lg:flex flex-col gap-4 sticky top-[45vh] lg:col-span-1 z-20 -mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-105"
              aria-label="Previous Step"
            >
              <ChevronUp className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-muted flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-105"
              aria-label="Next Step"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Left Column - Navigation List */}
          <div className="flex flex-col gap-3 relative lg:col-span-5">
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
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-1 top-6 bottom-6 w-1 bg-primary rounded-full z-20"
                    />
                  )}

                  <div className="p-5 md:p-6 flex gap-5 items-start pl-8 md:pl-10">
                    {/* Icon Container */}
                    <div className={`
                        flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500
                        ${isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}
                    `}>
                      <step.icon className="w-5 h-5" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-lg font-bold font-[family-name:var(--font-syne)] transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
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
                            <p className="text-muted-foreground leading-relaxed mb-4 pt-1 text-sm pr-4 line-clamp-2">
                              {step.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {step.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {!isActive && (
                      <div className="self-center opacity-0 md:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - Visual Showcase (Sticky) */}
          <div className="hidden lg:block relative h-[500px] sticky top-24 lg:col-span-6">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-background">
              {/* iPhone Dynamic Island Decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-20 opacity-20" />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute inset-0 w-full h-full bg-background"
                >
                  <div className={`absolute inset-0 opacity-10 ${processSteps[activeStep].color}`} />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <motion.div
                  key={`overlay-${activeStep}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-background/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg inline-flex items-center gap-3"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${processSteps[activeStep].color} text-white`}>
                    {(() => {
                      const Icon = processSteps[activeStep].icon;
                      return <Icon className="w-4 h-4" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Phase {processSteps[activeStep].number}</p>
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
