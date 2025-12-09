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
  // Pinned status for top projects
  pinned?: boolean
}

export const projects: Project[] = [
  // Creative / Featured Projects
  {
    id: "msquare-cleaning",
    title: "MSquare Cleaning Services",
    category: ["website", "branding", "logo"],
    tags: ["Web Design", "Cleaning Services", "Branding", "UI/UX"],
    description: "A professional brand identity and website design for MSquare Cleaning Services, a premier cleaning company in Australia. The project involved creating a fresh, trustworthy visual identity and a user-friendly digital platform to showcase their wide range of services—from residential and window cleaning to commercial office maintenance.",
    image: "/msquare/cover.png",
    bgColor: "bg-[#0F172A]",
    websiteUrl: "https://msquarecleaningservices.com/",
    behanceUrl: "https://www.behance.net/gallery/240115255/Cleaning-Services-Brand-Identity-Logo",
    challenge: "MSquare needed to establish a strong digital presence in a highly competitive market. The challenge was to communicate their core values—reliability, meticulous quality, and an eco-friendly approach—while streamlining the booking process for diverse services like End of Lease, Oven, and Builders cleaning.",
    solution: "We designed a cohesive brand identity and a responsive website that emphasizes trust and clarity. The site features a detailed service catalog, an intuitive 'Get a Quote' flow to capture leads effectively, and transparent information to build confidence. Visually, we utilized a clean color palette and consistent typography to reflect their commitment to spotless results and professional reliability.",
    results: [
      "Streamlined Booking/Quote System",
      "Integrated 7+ Service Categories",
      "Enhanced Brand Trust & Visibility",
      "Mobile-Optimized User Experience",
    ],
    tools: ["Figma", "Illustrator", "Next.js", "Tailwind CSS"],
    timeline: "2024",
    role: "Brand & Web Designer",
    gallery: [
      "/msquare/mockup-1.jpg",
      "/msquare/mockup-2.jpg",
    ],
  },
  {
    id: "furniture-decor-app",
    title: "Furnique - Furniture Store",
    category: ["ui-ux", "behance"],
    tags: ["E-Commerce", "Web Design", "Furniture"],
    description:
      "A modern and minimal web experience designed for seamless furniture and home décor shopping. Focusing on clean UI, strong visual hierarchy, and personalized product recommendations.",
    image: "/furniture-cover-new.png",
    bgColor: "bg-[#0B1525]",
    behanceUrl: "https://www.behance.net/gallery/240056139/Furniture-Home-Dcor-Shopping-Experience",
    challenge: "To design a cohesive and inspiring online shopping experience that translates the tactile nature of furniture buying into a digital format, ensuring users feel confident in their purchases.",
    solution: "Developed a comprehensive design system with high-fidelity screens, featuring interactive prototypes, detailed product views, and a streamlined checkout process to enhance user confidence and conversion.",
    results: [
      "25+ High-fidelity screens",
      "Complete Design System",
      "Interactive Prototype",
    ],
    tools: ["Figma", "Prototyping", "Design Systems"],
    timeline: "2024",
    role: "UI/UX Designer",
    gallery: [
      "/furniture-gallery-3.png",
      "/furniture-gallery-1.png",
      "/furniture-gallery-2.png",
      "https://youtu.be/McOQzo-6PoA?si=CdMz9zttomrNY_gW",
    ],
  },
  {
    id: "travel-booking-app",
    title: "Flight Ticket Booking App",
    pinned: true,
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
    id: "metrolink-branding",
    title: "Metrolink Outsourcing Services",
    pinned: true,
    category: ["branding", "logo"],
    tags: ["Branding", "Corporate Identity", "Logo Design"],
    description: "A premium brand identity created for Metrolink Outsourcing Services, designed to reflect trust, growth, and professional excellence through clean geometry and a refined gold-black palette.",
    image: "/metrolink-cover.jpg",
    bgColor: "bg-[#000000]",
    behanceUrl: "https://www.behance.net/gallery/240053139/Metrolink-Outsourcing-Services-Logo-Identity",
    challenge: "To create a brand identity that embodies professional excellence and trust while symbolizing expansive growth and partnership.",
    solution: "Developed a sophisticated visual identity centered around a golden bird motif with clean geometry and a refined serif typeface, utilizing a luxurious gold and black color palette to establish a strong corporate presence.",
    results: ["Established premium brand image", "Unified visual identity", "Versatile application across media"],
    tools: ["Illustrator", "Photoshop"],
    timeline: "2024",
    role: "Brand Designer",
    gallery: [
      "/metrolink-process-1.jpg",
      "/metrolink-process-2.jpg",
      "/metrolink-colors.jpg",
      "/metrolink-mockups.jpg",
    ],
  },
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
    id: "brotomotive-website",
    title: "Brotomotive – Auto Repair",
    pinned: true,
    category: ["website"],
    tags: ["Auto Repair", "Web Design", "Local Business"],
    description: "A professional, responsive website designed to connect vehicle owners with reliable auto repair and maintenance services. It serves as a digital hub for Brotomotive, offering clear service details and easy contact options.",
    image: "/brotomotive-laptop-mockup.png",
    bgColor: "bg-[#1a1a1a]",
    websiteUrl: "https://www.brotomotive.com.au/",
    challenge: "Brotomotive needed a digital presence to clearly communicate their comprehensive auto repair services to local customers. The goal was to build trust and make it easy for users to find service information and book appointments.",
    solution: "Developed a lightweight, high-performance website using semantic HTML, CSS, and Vanilla JavaScript. The design prioritizes information hierarchy and mobile responsiveness, ensuring that users can quickly access location details, services, and contact forms from any device.",
    results: ["Professional online presence", "Optimized mobile experience", "Fast loading speeds"],
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    timeline: "2024",
    role: "Web Designer & Developer",
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
