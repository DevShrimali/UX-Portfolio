"use client"

import { useState } from "react"
import { Search, Target, Lightbulb, PenTool, FlaskConical } from "lucide-react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem through stakeholder discussions, user research, and requirement analysis.",
    icon: Search,
    image: "/process/discover.png",
  },
  {
    number: "02",
    title: "Define",
    description: "Translate insights into clear problem statements, user flows, and information architecture.",
    icon: Target,
    image: "/process/define.png",
  },
  {
    number: "03",
    title: "Design",
    description: "Create wireframes, high-fidelity interfaces, and scalable design systems focused on usability and clarity.",
    icon: PenTool,
    image: "/process/design.png",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test designs through usability reviews and iterations to ensure they are intuitive, equitable, and useful.",
    icon: Lightbulb,
    image: "/process/validate.png",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Collaborate closely with developers to ensure accurate handoff and smooth implementation.",
    icon: FlaskConical,
    image: "/process/deliver.png",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 bg-background overflow-hidden relative">
      <div className="px-6 md:px-20 lg:px-40 mb-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">03 / Process & Workflow</h3>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] mb-6">
          How I <span className="text-accent">Work</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          I follow a flexible, outcome-driven design process that adapts to product goals, timelines, and team constraints. Each stage is grounded in user insight and aligned with business objectives.
        </p>
      </div>

      <div className="px-6 md:px-20 lg:px-40 mb-20 bg-transparent">
        <LayoutGroup>
          <div className="flex flex-col md:flex-row h-[120vh] md:h-[600px] gap-2">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <motion.div
                  key={step.number}
                  layout
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`relative border overflow-hidden cursor-pointer group flex flex-col justify-end rounded-3xl ${isActive
                    ? "border-accent/50 flex-[3]"
                    : "border-border hover:border-primary/20 flex-1"
                    }`}
                  initial={false}
                  animate={{
                    flex: isActive ? 3 : 1,
                    opacity: isActive || activeStep === -1 ? 1 : 0.7
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={step.image}
                      alt=""
                      className={`w-full h-full object-cover transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-30 grayscale scale-110"
                        }`}
                    />
                    <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/60" : "bg-black/80"
                      }`} />
                  </div>

                  {/* Background Number */}
                  <motion.span
                    layout="position"
                    className={`absolute font-bold font-[family-name:var(--font-syne)] leading-none select-none pointer-events-none transition-colors duration-500 z-10 ${isActive
                      ? "-right-4 top-4 text-8xl text-accent/10"
                      : "left-4 top-4 text-4xl text-white/10"
                      }`}
                  >
                    {step.number}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    layout="position"
                    className={`absolute top-8 right-8 z-10 transition-colors duration-300 ${isActive ? "text-accent" : "text-white/50"
                      }`}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>

                  <div className="p-8 relative z-10 w-full">
                    <motion.div layout="position" className="flex items-center gap-2 mb-4">
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1.5 h-1.5 bg-accent rounded-full"
                        />
                      )}
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? "text-accent" : "text-white/60"
                        }`}>
                        Step_{step.number}
                      </span>
                    </motion.div>

                    <motion.h3
                      layout="position"
                      className={`font-bold font-[family-name:var(--font-syne)] mb-4 whitespace-nowrap origin-left ${isActive ? "text-3xl md:text-4xl text-white" : "text-xl md:text-2xl text-white/80"
                        }`}
                    >
                      {step.title}
                    </motion.h3>

                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-gray-300 leading-relaxed max-w-md hidden md:block">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile Description */}
                    {isActive && (
                      <p className="text-gray-300 leading-relaxed max-w-md md:hidden mt-2 text-sm">
                        {step.description}
                      </p>
                    )}
                  </div>

                  {/* Active Gradient Overlay */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
