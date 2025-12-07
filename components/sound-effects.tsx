"use client"

import { useEffect, useRef } from "react"

export function SoundEffects() {
    const hoverAudio = useRef<HTMLAudioElement | null>(null)
    const clickAudio = useRef<HTMLAudioElement | null>(null)
    const lastInteractive = useRef<Element | null>(null)

    useEffect(() => {
        hoverAudio.current = new Audio("/hover.mp3")
        clickAudio.current = new Audio("/click.mp3")

        // Set volumes
        hoverAudio.current.volume = 0.2
        clickAudio.current.volume = 0.4

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check for interactive elements
            const interactive = target.closest("a, button, [role='button'], input, select, textarea, .card-hover")

            if (interactive && interactive !== lastInteractive.current) {
                lastInteractive.current = interactive
                if (hoverAudio.current) {
                    hoverAudio.current.currentTime = 0
                    hoverAudio.current.play().catch(() => {
                        // Ignore autoplay errors (usually happen if user hasn't interacted with page yet)
                    })
                }
            } else if (!interactive) {
                lastInteractive.current = null
            }
        }

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const interactive = target.closest("a, button, [role='button'], input, select, textarea, .card-hover")

            if (interactive) {
                if (clickAudio.current) {
                    clickAudio.current.currentTime = 0
                    clickAudio.current.play().catch(() => { })
                }
            }
        }

        // 'mouseover' bubbles, so we can listen on document
        document.addEventListener("mouseover", handleMouseOver)
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("click", handleClick)
        }
    }, [])

    return null
}
