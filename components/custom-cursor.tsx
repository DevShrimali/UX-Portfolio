"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        const updateCursor = (e: MouseEvent) => {
            cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        // Add hover effect for clickable elements
        const handleLinkHover = () => setIsHovering(true)
        const handleLinkLeave = () => setIsHovering(false)

        window.addEventListener("mousemove", updateCursor)
        document.body.addEventListener("mouseenter", handleMouseEnter)
        document.body.addEventListener("mouseleave", handleMouseLeave)

        const clickableElements = document.querySelectorAll("a, button, .cursor-pointer")
        clickableElements.forEach(el => {
            el.addEventListener("mouseenter", handleLinkHover)
            el.addEventListener("mouseleave", handleLinkLeave)
        })

        // Initial visible
        setIsVisible(true)

        return () => {
            window.removeEventListener("mousemove", updateCursor)
            document.body.removeEventListener("mouseenter", handleMouseEnter)
            document.body.removeEventListener("mouseleave", handleMouseLeave)

            clickableElements.forEach(el => {
                el.removeEventListener("mouseenter", handleLinkHover)
                el.removeEventListener("mouseleave", handleLinkLeave)
            })
        }
    }, []) // Simplification: In a real app we'd use a robust observer for dynamic elements

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            style={{ willChange: "transform" }}
        >
            <div
                className={`absolute inset-0 rounded-full bg-[#bef264] opacity-20 blur-sm transition-transform duration-300 ${isHovering ? "scale-[2.5]" : "scale-100"
                    }`}
            />
        </div>
    )
}
