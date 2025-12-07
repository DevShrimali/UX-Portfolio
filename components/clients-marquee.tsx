"use client"

const clients = [
  "EnlightVision Technologies",
  "Konzept Solutions",
  "VMG Software Solutions",
  "Pixeltec Digital Wallpaper",
  "EnlightVision Technologies",
  "Konzept Solutions",
  "VMG Software Solutions",
  "Pixeltec Digital Wallpaper",
]

export function ClientsMarquee() {
  return (
    <section className="py-16 bg-background border-b border-white/5 overflow-hidden">
      <div className="px-6 md:px-20 lg:px-40 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Company or brand i work with</h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 px-8 py-4 text-xl md:text-3xl font-bold text-gray-700 hover:text-accent transition-colors duration-300 cursor-default font-[family-name:var(--font-syne)]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
