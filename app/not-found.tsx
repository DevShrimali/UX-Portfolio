"use client"

import Link from "next/link"
import { AlertTriangle, ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* Glitch Effect Container */}
            <div className="relative z-10 mb-8">
                <h1 className="text-[8rem] md:text-[12rem] font-bold font-[family-name:var(--font-syne)] leading-none text-white mix-blend-difference select-none relative">
                    4
                    <span className="text-accent animate-pulse">0</span>
                    4
                </h1>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-accent/20 blur-sm animate-pulse" />
            </div>

            <div className="space-y-6 max-w-md relative z-10">
                <div className="flex items-center justify-center gap-2 text-[#bef264] font-mono text-sm uppercase tracking-widest border border-[#bef264]/20 bg-[#bef264]/5 px-4 py-2 rounded-full w-fit mx-auto">
                    <AlertTriangle className="w-4 h-4" />
                    <span>System Error: Page Not Found</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)]">
                    Signal Lost
                </h2>

                <p className="text-gray-400">
                    The requested protocol could not be established. The URL might be broken or the resource has been relocated.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Footer System Text */}
            <div className="absolute bottom-8 left-0 w-full text-center text-[10px] text-gray-700 font-mono uppercase tracking-[0.2em]">
                ERROR_CODE: 404_NOT_FOUND // SYSTEM_HALTED
            </div>
        </div>
    )
}
