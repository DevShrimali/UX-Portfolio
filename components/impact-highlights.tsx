"use client"

import { CheckCircle2, Layers, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Layers,
        text: "30+ projects delivered",
    },
    {
        icon: Rocket,
        text: "Web & mobile products used by real users",
    },
    {
        icon: CheckCircle2,
        text: "Led design from research to handoff",
    },
    {
        icon: Users,
        text: "Worked directly with founders & dev teams",
    },
]

export function ImpactHighlights() {
    return (
        <section className="py-20 bg-background border-b border-white/5">
            <div className="px-6 md:px-20 lg:px-40">
                <div className="mb-12">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                        Impact Highlights
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug text-foreground/90">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
