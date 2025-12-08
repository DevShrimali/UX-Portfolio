"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"

interface ImageGalleryProps {
    images: string[]
    title?: string
}

export function ImageGallery({ images, title = "Gallery" }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openGallery = (index: number) => setSelectedIndex(index)
    const closeGallery = () => setSelectedIndex(null)

    const showNext = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedIndex === null) return
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
    }

    const showPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (selectedIndex === null) return
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedIndex === null) return
        if (e.key === "Escape") closeGallery()
        if (e.key === "ArrowRight") showNext()
        if (e.key === "ArrowLeft") showPrev()
    }

    return (
        <>
            {/* Grid View */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors aspect-[4/3]"
                        onClick={() => openGallery(i)}
                    >
                        <Image
                            src={img}
                            alt={`${title} image ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                    </div>
                ))}
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
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
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
                            <Image
                                src={images[selectedIndex]}
                                alt={`${title} fullscreen image`}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
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
