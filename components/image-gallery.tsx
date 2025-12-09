"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react"
import Image from "next/image"

interface ImageGalleryProps {
    images: string[]
    title?: string
}


const isYouTubeUrl = (url: string) => url.includes("youtube.com") || url.includes("youtu.be")

const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtu.be")) {
        const id = url.split("youtu.be/")[1].split("?")[0]
        return `https://www.youtube.com/embed/${id}`
    }
    if (url.includes("youtube.com/watch")) {
        const id = new URLSearchParams(url.split("?")[1]).get("v")
        return `https://www.youtube.com/embed/${id}`
    }
    return url
}

const getYouTubeThumbnail = (url: string) => {
    let id = ""
    if (url.includes("youtu.be")) {
        id = url.split("youtu.be/")[1].split("?")[0]
    } else if (url.includes("youtube.com/watch")) {
        id = new URLSearchParams(url.split("?")[1]).get("v") || ""
    }
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}

export function ImageGallery({ images, title = "Gallery" }: ImageGalleryProps) {
    // ... (state and handlers remain same)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openGallery = (index: number) => setSelectedIndex(index)
    const closeGallery = useCallback(() => setSelectedIndex(null), [])

    const showNext = useCallback(
        (e?: React.MouseEvent | KeyboardEvent) => {
            e?.stopPropagation()
            setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
        },
        [images.length],
    )

    const showPrev = useCallback(
        (e?: React.MouseEvent | KeyboardEvent) => {
            e?.stopPropagation()
            setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
        },
        [images.length],
    )

    // Handle keyboard navigation
    useEffect(() => {
        if (selectedIndex === null) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeGallery()
            if (e.key === "ArrowRight") showNext(e)
            if (e.key === "ArrowLeft") showPrev(e)
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedIndex, closeGallery, showNext, showPrev])

    return (
        <>
            {/* Grid View */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((item, i) => {
                    const isVideo = isYouTubeUrl(item)
                    return (
                        <div
                            key={i}
                            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors aspect-[4/3]"
                            onClick={() => openGallery(i)}
                        >
                            <Image
                                src={isVideo ? getYouTubeThumbnail(item) : item}
                                alt={`${title} ${isVideo ? "video" : "image"} ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            {isVideo && (
                                <div className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 z-10">
                                    <Play className="w-3 h-3 text-white fill-white" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                {isVideo ? (
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                                    </div>
                                ) : (
                                    <ZoomIn className="w-8 h-8 text-white" />
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                        onClick={closeGallery}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeGallery}
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={showPrev}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            onClick={showNext}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            layoutId={`gallery-image-${selectedIndex}`}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        >
                            {isYouTubeUrl(images[selectedIndex]) ? (
                                <iframe
                                    src={getYouTubeEmbedUrl(images[selectedIndex])}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full max-h-[80vh] aspect-video rounded-xl"
                                />
                            ) : (
                                <Image
                                    src={images[selectedIndex]}
                                    alt={`${title} fullscreen image`}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            )}
                        </motion.div>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm px-4 py-2 bg-black/50 rounded-full">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
