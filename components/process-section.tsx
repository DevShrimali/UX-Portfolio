"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Search, Target, PenTool, Lightbulb, FlaskConical } from "lucide-react"

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description: "Immersing in the problem space to gather deep insights and understand the 'why' before the 'how'. We dive into user behavior and business goals.",
        tags: ["User Research", "Market Analysis", "Stakeholder Interviews"],
        icon: Search,
    },
    {
        number: "02",
        title: "Define",
        description: "Synthesizing research into clear strategies, personas, and problem statements to guide direction and ensure alignment across the board.",
        tags: ["Prioritization", "Problem Statements", "Journey Mapping"],
        icon: Target,
    },
    {
        number: "03",
        title: "Design",
        description: "Creating high-fidelity interfaces where structure meets aesthetics for natural, intuitive interactions that delight users.",
        tags: ["UI Design", "Prototyping", "Wireframing"],
        icon: PenTool,
    },
    {
        number: "04",
        title: "Validate",
        description: "Conducting usability testing to iterate on designs, smoothing out friction points and enhancing overall usability.",
        tags: ["Usability Testing", "Feedback Loops", "A/B Testing"],
        icon: Lightbulb,
    },
    {
        number: "05",
        title: "Deliver",
        description: "Providing comprehensive assets and documentation to ensure the final product matches the vision perfectly during development.",
        tags: ["Design Systems", "Handoff", "QA Support"],
        icon: FlaskConical,
    },
]

export function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
    })

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    })

    // Use a negative left margin to slide everything.
    // Starts centered by beginning with a left offset padding later, and transforms negative
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"])

    return (
        <section id="process" className="relative bg-background h-[300vh] border-b border-border" ref={containerRef}>
            <div className="sticky top-0 flex flex-col justify-start h-screen overflow-hidden pt-32 pb-10">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

                {/* Container aligned wrappers */}
                <div className="w-full">
                    {/* Header Row */}
                    <div className="px-6 md:px-20 lg:px-40 z-20 mb-12 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-muted-foreground/50"></span>
                                03 / Process & Workflow
                            </h3>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] leading-tight">
                                Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* Scrollable Cards Container */}
                    {/* Add a leading spacer so the first card sits cleanly in the center of the available space, and a trailing one so it ends center */}
                    <motion.div style={{ x }} className="flex gap-6 md:gap-8 items-stretch pt-2 pb-10">
                        {/* Leading Spacer: makes first card start from the center */}
                        <div className="w-[10vw] md:w-[25vw] lg:w-[35vw] flex-shrink-0" />

                        {processSteps.map((step) => (
                            <div
                                key={step.number}
                                className="w-[80vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 relative p-6 md:p-8 rounded-[2rem] border bg-secondary/10 border-border/50 shadow-xl overflow-hidden group hover:bg-secondary/30 transition-colors backdrop-blur-sm flex flex-col"
                            >
                                {/* Background oversized icon */}
                                <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 group-hover:-rotate-12">
                                    <step.icon className="w-48 h-48 text-primary" />
                                </div>

                                <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-primary text-primary-foreground shadow-lg">
                                        <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>

                                    <span className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-syne)] text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="relative z-10 flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-syne)] mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:gap-2">
                                        {step.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] md:text-[11px] font-medium px-3 py-1.5 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Trailing spacer to allow scrolling past the last card so it ends in center */}
                        <div className="w-[30vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
