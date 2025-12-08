export type ProjectCategory = "ui-ux" | "graphic" | "branding" | "logo" | "brochure" | "website" | "github" | "behance"

export interface Project {
  id: string
  title: string
  category: ProjectCategory[]
  tags: string[]
  description: string
  image: string
  bgColor: string
  // Optional external links
  websiteUrl?: string
  githubUrl?: string
  behanceUrl?: string
  // Case study details
  challenge?: string
  solution?: string
  results?: string[]
  tools?: string[]
  timeline?: string
  role?: string
  // Gallery images
  gallery?: string[]
}

export const projects: Project[] = [
  // Creative / Featured Projects
  {
    id: "furniture-decor-app",
    title: "Furniture & Home Décor App",
    category: ["ui-ux", "behance"],
    tags: ["E-Commerce", "Furniture", "Mobile App"],
    description:
      "A sophisticated shopping experience for furniture and home décor. Focusing on clean aesthetics and seamless user journey for browsing and purchasing high-end items.",
    image: "/furniture-app.png",
    bgColor: "bg-[#1C1A17]",
    behanceUrl: "https://www.behance.net/gallery/237961725/Furniture-Home-Dcor-Shopping-Experience",
    challenge: "Creating a luxurious yet accessible mobile shopping experience that inspires users while making purchase decisions easy.",
    solution: "Designed a minimalist interface with immersive product imagery, AR placement features, and a simplified checkout process.",
    results: [
      "Enhanced product discovery",
      "Increased average order value",
      "Seamless mobile checkout flow",
    ],
    tools: ["Figma", "Adobe Photoshop"],
    timeline: "Ongoing",
    role: "Lead UI/UX Designer",
  },
  {
    id: "travel-booking-app",
    title: "Flight Ticket Booking App",
    category: ["ui-ux", "behance"],
    tags: ["Travel", "Booking", "App"],
    description:
      "A seamless and intuitive flight ticket booking experience designed to simplify complex steps like searching, seat selection, and payment into a clean, guided user journey.",
    image: "/flight-booking-cover.png",
    bgColor: "bg-[#0F172A]",
    behanceUrl: "https://www.behance.net/gallery/240040967/Flight-Ticket-Booking-App-UIUX-Case-Study",
    challenge: "Booking flights is often overwhelming due to complex checkouts and lack of real-time feedback. The goal was to build a mobile booking flow that feels effortless, transparent, and efficient.",
    solution: "Designed a linear flow that reduces cognitive load with real-time updates (timers, availability), visual seat maps, and transparent pricing to build trust and speed up decision-making.",
    results: ["Faster decision-making", "Higher ease of use", "Improved trust through transparency"],
    tools: ["Figma", "Miro", "Illustrator"],
    timeline: "2024",
    role: "UI/UX Designer",
    gallery: [
      "/travel-app-gallery-1.png",
      "/travel-app-gallery-2.png",
      "/travel-app-gallery-3.png",
    ],
  },
  {
    id: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    category: ["ui-ux", "behance"],
    tags: ["Healthcare", "Medical", "App"],
    description:
      "A patient-centric mobile application streamlining doctor appointments, health records, and telemedicine services.",
    image: "/healthcare-app.png",
    bgColor: "bg-[#0B1221]",
    behanceUrl: "https://www.behance.net/gallery/224890781/Healthcare-Mobile-App-UIUX-Case-Study",
    challenge: "Designing a trust-inspiring and accessible interface for patients to manage sensitive health data and appointments easily.",
    solution: "Created a calming, clean user interface with simplified navigation, large accessible touch targets, and secure data visualization.",
    results: ["Improved patient engagement", "Simplified appointment booking", "Easy access to medical records"],
    tools: ["Figma", "Prototyping"],
    timeline: "2024",
    role: "UI/UX Designer",
  },

  // Other Projects from Behance
  {
    id: "vr-football-gaming",
    title: "Immersive VR Football Gaming",
    category: ["ui-ux", "behance"],
    tags: ["VR", "Gaming", "Immersive"],
    description: "UI/UX Case Study for an immersive Virtual Reality football gaming application.",
    image: "/vr-football.png",
    bgColor: "bg-[#111]",
    behanceUrl: "https://www.behance.net/gallery/224975159/Immersive-VR-Football-Gaming-App-UIUX-Case-Study",
  },
  {
    id: "financial-services-app",
    title: "Financial Services App",
    category: ["ui-ux", "behance"],
    tags: ["Fintech", "Finance", "App"],
    description: "Mobile App UI/UX Case Study for a modern financial services platform.",
    image: "/financial-app.png",
    bgColor: "bg-[#141414]",
    behanceUrl: "https://www.behance.net/gallery/224883413/Financial-Services-Mobile-App-UIUX-Case-Study",
  },
  {
    id: "agri-inspection-system",
    title: "Agri-Tech Inspection System",
    category: ["ui-ux", "behance"],
    tags: ["AgriTech", "AI", "Dashboard"],
    description: "Computer Vision-Based Inspection System for Agriculture.",
    image: "/agri-tech.png",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://www.behance.net/gallery/224976715/Computer-Vision-Based-Inspection-System-for-Agriculture",
  },
  {
    id: "ai-healthcare-chatbot",
    title: "AI Healthcare Chatbot",
    category: ["ui-ux", "behance"],
    tags: ["AI", "Healthcare", "Chatbot"],
    description: "AI Chatbot for Healthcare Support designed to assist patients.",
    image: "/ai-chatbot.png",
    bgColor: "bg-[#111]",
    behanceUrl: "https://www.behance.net/gallery/234177525/AI-Chatbot-for-Healthcare-Support",
  },
  {
    id: "job-portal-app",
    title: "AI Job Portal App",
    category: ["ui-ux", "behance"],
    tags: ["Recruitment", "AI", "App"],
    description: "AI-Powered Job Portal App for Job Seekers & Recruiters.",
    image: "/job-portal.png",
    bgColor: "bg-[#141414]",
    behanceUrl: "https://www.behance.net/gallery/224808223/AI-Powered-Job-Portal-App-for-Job-Seekers-Recruiters",
  },
  {
    id: "gadgets-ecommerce",
    title: "Gadgets E-Commerce",
    category: ["ui-ux", "behance"],
    tags: ["E-Commerce", "Gadgets"],
    description: "Shopping for a Gadgets & Accessories E-Commerce App.",
    image: "/gadgets-shop.png",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://www.behance.net/gallery/224833971/Shopping-for-a-Gadgets-Accessories-E-Commerce-App",
  },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  "ui-ux": "UI/UX Design",
  graphic: "Graphic Design",
  branding: "Branding",
  logo: "Logo Design",
  brochure: "Brochure & Print",
  website: "Websites",
  github: "GitHub Projects",
  behance: "Behance Case Studies",
}

export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") return projects
  return projects.filter((p) => p.category.includes(category))
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 6)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
