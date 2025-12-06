"use client"

import { useState } from "react"
import { Search, Target, Lightbulb, PenTool, FlaskConical } from "lucide-react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

const processSteps = [
  {
    number: "01",
    title: "Empathize",
    description: "Deep dive into user needs through behavioral analysis and empathy mapping.",
    icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description: "Synthesizing research to construct precise problem statements and user personas.",
    icon: Target,
  },
  {
    number: "03",
    title: "Ideate",
    description: "Divergent thinking sessions to generate solution architectures and feature sets.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Prototype",
    description: "Iterative development of low-to-high fidelity interactive models.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Test",
    description: "Rigorous usability testing and validation loops for data-driven refinement.",
    icon: FlaskConical,
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="py-24 bg-background overflow-hidden relative">
      <div className="px-6 md:px-20 lg:px-40 mb-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">02 / Process & Stack</h3>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)]">
          Workflow <span className="text-[#bef264]">Protocol</span>
        </h2>
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
                  className={`relative border overflow-hidden cursor-pointer group flex flex-col justify-end backdrop-blur-sm ${isActive
                      ? "border-[#bef264]/50 bg-[#bef264]/5 flex-[3]"
                      : "border-white/10 hover:border-white/20 flex-1 bg-card"
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
                  {/* Background Number */}
                  <motion.span
                    layout="position"
                    className={`absolute font-bold font-[family-name:var(--font-syne)] leading-none select-none pointer-events-none transition-colors duration-500 ${isActive
                        ? "-right-4 top-4 text-8xl text-[#bef264]/10"
                        : "left-4 top-4 text-4xl text-white/5"
                      }`}
                  >
                    {step.number}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    layout="position"
                    className={`absolute top-8 right-8 z-10 transition-colors duration-300 ${isActive ? "text-[#bef264]" : "text-gray-600"
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
                          className="w-1.5 h-1.5 bg-[#bef264] rounded-full"
                        />
                      )}
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? "text-[#bef264]" : "text-gray-500"
                        }`}>
                        Step_{step.number}
                      </span>
                    </motion.div>

                    <motion.h3
                      layout="position"
                      className={`font-bold font-[family-name:var(--font-syne)] mb-4 text-white whitespace-nowrap origin-left ${isActive ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
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
                          <p className="text-gray-400 leading-relaxed max-w-md hidden md:block">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile Description */}
                    {isActive && (
                      <p className="text-gray-400 leading-relaxed max-w-md md:hidden mt-2 text-sm">
                        {step.description}
                      </p>
                    )}
                  </div>

                  {/* Active Gradient Overlay */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-t from-[#bef264]/10 to-transparent pointer-events-none"
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
