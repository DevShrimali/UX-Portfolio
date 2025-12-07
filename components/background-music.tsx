"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"

export function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio("/background-music.mp3")
        audio.loop = true
        audio.volume = 0

        // safe guard for missing file
        audio.addEventListener('error', (e) => {
            console.warn("Background music file not found or not supported. Please ensure 'public/background-music.mp3' exists.")
            setIsPlaying(false)
            audioRef.current = null // Disable audio if it fails
        })

        audioRef.current = audio

        // Attempt Auto-play
        const attemptPlay = async () => {
            try {
                await audio.play()
                setIsPlaying(true)
                // Fade in
                let vol = 0
                audio.volume = vol
                const fadeIn = setInterval(() => {
                    if (vol < 0.15) {
                        vol += 0.01
                        audio.volume = vol
                    } else {
                        clearInterval(fadeIn)
                    }
                }, 100)
            } catch (error) {
                console.log("Autoplay blocked by browser. User interaction required.")
                setIsPlaying(false)
            }
        }

        // Slight delay to ensure DOM is ready? Not strictly necessary but safe.
        attemptPlay()

        // Fallback for mobile/browsers blocking autoplay:
        // Try to play on the very first interaction
        const enableAudio = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true)
                    // Fade in logic if needed, or just set volume
                    if (audioRef.current) audioRef.current.volume = 0.15
                }).catch(e => console.log("Still blocked or failed", e))
            }
            // Remove listeners once tried
            document.removeEventListener('click', enableAudio)
            document.removeEventListener('touchstart', enableAudio)
            document.removeEventListener('keydown', enableAudio)
        }

        document.addEventListener('click', enableAudio)
        document.addEventListener('touchstart', enableAudio)
        document.addEventListener('keydown', enableAudio)

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
            document.removeEventListener('click', enableAudio)
            document.removeEventListener('touchstart', enableAudio)
            document.removeEventListener('keydown', enableAudio)
        }
    }, [])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            // Fade out
            const fadeOut = setInterval(() => {
                if (audioRef.current && audioRef.current.volume > 0.05) {
                    audioRef.current.volume -= 0.05
                } else {
                    clearInterval(fadeOut)
                    audioRef.current?.pause()
                    setIsPlaying(false)
                }
            }, 100)
        } else {
            // Play and Fade in
            audioRef.current.play().then(() => {
                setIsPlaying(true)
                let vol = 0
                audioRef.current!.volume = vol
                const fadeIn = setInterval(() => {
                    if (vol < 0.15) { // Max volume 0.15 for subtle background
                        vol += 0.01
                        if (audioRef.current) audioRef.current.volume = vol
                    } else {
                        clearInterval(fadeIn)
                    }
                }, 100)
            }).catch((e) => {
                console.error("Audio playback interrupted", e)
                // alert("Please click anywhere on the page first, or enable audio permissions.")
            })
        }
    }

    return (
        <button
            onClick={togglePlay}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] p-3 bg-secondary/80 dark:bg-black/20 backdrop-blur-md border border-border dark:border-white/10 rounded-full text-foreground dark:text-white hover:bg-accent hover:text-white hover:border-accent dark:hover:bg-white/10 dark:hover:border-white/30 dark:hover:text-white transition-all hover:scale-110 group shadow-2xl"
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
        >
            {isPlaying ? (
                <div className="relative">
                    <Music className="w-4 h-4 md:w-5 md:h-5 text-current animate-pulse" />
                </div>
            ) : (
                <div className="relative">
                    <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
            )}
        </button>
    )
}
