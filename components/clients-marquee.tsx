"use client"

const clients = [
  { name: "Pixeltech", logo: "/clients/pixeltec.png" },
  { name: "VMG Software", logo: "/clients/vmg-software.png" },
  { name: "Konzept Solutions", logo: "/clients/konzept-solutions.png" },
  { name: "EnlightVision Tech.", logo: "/clients/enlight-vision.png" },
]

export function ClientsMarquee() {
  return (
    <section className="py-10 bg-background border-b border-white/5 overflow-hidden">
      <div className="px-6 md:px-20 lg:px-40 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">Trusted by Teams & Startups</h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee items-center">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-8 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain bg-white/5 p-2 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
