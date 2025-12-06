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
  // UI/UX Projects
  {
    id: "retailhub",
    title: "RetailHub",
    category: ["ui-ux"],
    tags: ["E-Commerce", "Book & Fashion"],
    description:
      "Comprehensive e-commerce platforms designed for both book retailers and fashion brands, focusing on conversion and user flow.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    challenge:
      "Creating a unified e-commerce experience that works seamlessly for both book retailers and fashion brands while maintaining high conversion rates.",
    solution:
      "Developed a modular design system that adapts to different product categories while maintaining consistent user experience patterns.",
    results: [
      "45% increase in conversion rate",
      "30% reduction in cart abandonment",
      "60% improvement in mobile engagement",
    ],
    tools: ["Figma", "Protopie", "Webflow"],
    timeline: "3 months",
    role: "Lead UI/UX Designer",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2700&auto=format&fit=crop",
    ],
  },
  {
    id: "medicare",
    title: "MediCare",
    category: ["ui-ux"],
    tags: ["Healthcare", "App"],
    description:
      "A holistic mobile application for booking doctor appointments and managing digital medical records securely.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    challenge:
      "Designing an intuitive healthcare app that simplifies complex medical workflows for users of all ages and technical abilities.",
    solution: "Created an accessible interface with large touch targets, clear typography, and simplified navigation.",
    results: ["50% reduction in booking time", "85% user satisfaction rate", "40% increase in app adoption"],
    tools: ["Figma", "Notion", "Miro"],
    timeline: "4 months",
    role: "UI/UX Designer",
  },
  {
    id: "easyloan",
    title: "EasyLoan",
    category: ["ui-ux"],
    tags: ["Fintech", "Loan App"],
    description:
      "A loan origination mobile app featuring seamless integration with PAN, GST, and Aadhaar for instant approvals.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    challenge:
      "Simplifying a complex loan application process while ensuring regulatory compliance and secure document verification.",
    solution: "Designed a step-by-step wizard interface with real-time validation and progress tracking.",
    results: [
      "70% faster application completion",
      "90% document verification success rate",
      "25% increase in loan approvals",
    ],
    tools: ["Figma", "Adobe XD", "Notion"],
    timeline: "5 months",
    role: "Senior UI/UX Designer",
  },
  {
    id: "travelhub",
    title: "TravelHub",
    category: ["ui-ux"],
    tags: ["Travel", "Booking"],
    description:
      "Comprehensive booking system for Hotels, Flights, Buses & Trains with real-time availability and pricing.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    challenge:
      "Building a unified travel booking experience that handles multiple service types without overwhelming users.",
    solution: "Created a tab-based interface with smart search suggestions and predictive pricing displays.",
    results: ["35% increase in bookings", "50% faster search completion", "4.8 star app rating"],
    tools: ["Figma", "Principle", "Zeplin"],
    timeline: "6 months",
    role: "Lead Product Designer",
  },
  {
    id: "eventix",
    title: "Eventix",
    category: ["ui-ux"],
    tags: ["Events", "Ticketing"],
    description: "Mobile application for booking party and club tickets with social features and VIP experiences.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    challenge: "Creating an engaging ticketing app that captures the excitement of nightlife and events.",
    solution: "Designed a dark-themed interface with vibrant accents, event discovery features, and social sharing.",
    results: ["60% increase in ticket sales", "45% social share rate", "92% checkout completion"],
    tools: ["Figma", "After Effects", "Lottie"],
    timeline: "3 months",
    role: "UI/UX Designer",
  },
  {
    id: "neuralai",
    title: "Neural AI",
    category: ["ui-ux"],
    tags: ["AI/ML", "Dashboard"],
    description: "Advanced dashboard designs for Artificial Intelligence applications with data visualization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    challenge:
      "Visualizing complex AI data and model performance in an understandable way for non-technical stakeholders.",
    solution:
      "Built intuitive dashboards with progressive disclosure, showing high-level metrics first with drill-down capabilities.",
    results: ["80% reduction in training time", "65% improvement in decision making", "3x faster model iteration"],
    tools: ["Figma", "D3.js", "Framer"],
    timeline: "4 months",
    role: "Product Designer",
  },

  // Branding Projects
  {
    id: "zenith-branding",
    title: "Zenith Studios",
    category: ["graphic", "branding"],
    tags: ["Brand Identity", "Strategy"],
    description:
      "Complete brand identity design for a creative production studio including logo, guidelines, and collateral.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    behanceUrl: "https://behance.net/gallery/zenith-studios",
    challenge: "Creating a bold yet versatile brand identity that works across digital and print media.",
    solution: "Developed a geometric logo system with flexible color applications and comprehensive brand guidelines.",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    timeline: "6 weeks",
    role: "Brand Designer",
  },
  {
    id: "bloom-cafe",
    title: "Bloom Café",
    category: ["graphic", "branding"],
    tags: ["Restaurant", "Identity"],
    description: "Warm and inviting brand identity for an organic café chain focusing on sustainability.",
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://behance.net/gallery/bloom-cafe",
    challenge: "Conveying organic and sustainable values while maintaining a modern, approachable aesthetic.",
    solution: "Created a nature-inspired visual language with earthy tones and hand-drawn elements.",
    tools: ["Illustrator", "Procreate", "InDesign"],
    timeline: "4 weeks",
    role: "Brand Designer",
  },
  {
    id: "nexus-tech",
    title: "Nexus Tech",
    category: ["graphic", "branding"],
    tags: ["Tech", "Startup"],
    description: "Modern tech startup branding with a focus on innovation and forward-thinking design.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    challenge: "Standing out in the crowded tech startup space while conveying trust and innovation.",
    solution: "Designed a minimal, geometric brand mark with a gradient system that feels futuristic yet professional.",
    tools: ["Illustrator", "Figma", "After Effects"],
    timeline: "5 weeks",
    role: "Creative Director",
  },

  // Logo Projects
  {
    id: "logo-collection-1",
    title: "Logo Collection Vol. 1",
    category: ["graphic", "logo"],
    tags: ["Logos", "Marks"],
    description: "A curated collection of logo designs spanning various industries from tech to lifestyle brands.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    behanceUrl: "https://behance.net/gallery/logo-collection",
    tools: ["Illustrator", "Photoshop"],
    role: "Logo Designer",
  },
  {
    id: "monogram-series",
    title: "Monogram Series",
    category: ["graphic", "logo"],
    tags: ["Monograms", "Lettermarks"],
    description: "Elegant monogram and lettermark designs for luxury and premium brands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://behance.net/gallery/monogram-series",
    tools: ["Illustrator", "Procreate"],
    role: "Logo Designer",
  },
  {
    id: "icon-system",
    title: "Icon System",
    category: ["graphic", "logo"],
    tags: ["Icons", "Symbol Design"],
    description: "Comprehensive icon system design with 200+ custom icons for various applications.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    tools: ["Illustrator", "Figma"],
    role: "Icon Designer",
  },

  // Brochure Projects
  {
    id: "luxury-estates",
    title: "Luxury Estates",
    category: ["graphic", "brochure"],
    tags: ["Real Estate", "Print"],
    description: "Premium real estate brochure design showcasing luxury properties with elegant typography.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    tools: ["InDesign", "Photoshop", "Lightroom"],
    role: "Print Designer",
  },
  {
    id: "annual-report",
    title: "TechCorp Annual Report",
    category: ["graphic", "brochure"],
    tags: ["Corporate", "Report"],
    description: "Clean and data-driven annual report design with infographics and visual storytelling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    tools: ["InDesign", "Illustrator", "Excel"],
    role: "Publication Designer",
  },
  {
    id: "travel-magazine",
    title: "Wanderlust Magazine",
    category: ["graphic", "brochure"],
    tags: ["Magazine", "Editorial"],
    description: "Travel magazine layout design with immersive photography and modern typography.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    tools: ["InDesign", "Photoshop", "Lightroom"],
    role: "Editorial Designer",
  },

  // Website Projects
  {
    id: "agency-portfolio",
    title: "Vortex Agency",
    category: ["website"],
    tags: ["Agency", "Portfolio"],
    description: "Bold and dynamic agency website with smooth animations and immersive storytelling.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    websiteUrl: "https://vortex-agency.com",
    tools: ["Figma", "Webflow", "GSAP"],
    role: "Web Designer",
  },
  {
    id: "saas-landing",
    title: "CloudSync SaaS",
    category: ["website"],
    tags: ["SaaS", "Landing Page"],
    description: "Modern SaaS landing page with product demos, pricing tables, and conversion optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    websiteUrl: "https://cloudsync-demo.com",
    tools: ["Figma", "Framer", "Webflow"],
    role: "Product Designer",
  },
  {
    id: "ecommerce-fashion",
    title: "NOIR Fashion",
    category: ["website"],
    tags: ["E-commerce", "Fashion"],
    description: "Minimalist fashion e-commerce website with focus on product photography and seamless checkout.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    websiteUrl: "https://noir-fashion-demo.com",
    tools: ["Figma", "Shopify", "Liquid"],
    role: "E-commerce Designer",
  },
  {
    id: "restaurant-web",
    title: "Sakura Restaurant",
    category: ["website"],
    tags: ["Restaurant", "Hospitality"],
    description: "Elegant Japanese restaurant website with online reservations and menu showcase.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    websiteUrl: "https://sakura-restaurant-demo.com",
    tools: ["Figma", "WordPress", "Elementor"],
    role: "Web Designer",
  },

  // GitHub Projects
  {
    id: "react-dashboard",
    title: "React Admin Dashboard",
    category: ["github"],
    tags: ["React", "Open Source"],
    description: "A comprehensive admin dashboard template built with React, TypeScript, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    githubUrl: "https://github.com/dev/react-admin-dashboard",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    role: "Full Stack Developer",
  },
  {
    id: "ui-components",
    title: "UI Component Library",
    category: ["github"],
    tags: ["Components", "Design System"],
    description: "A reusable UI component library with 50+ components following accessibility standards.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    githubUrl: "https://github.com/dev/ui-components",
    tools: ["React", "Storybook", "Radix UI"],
    role: "Frontend Developer",
  },
  {
    id: "nextjs-starter",
    title: "Next.js Starter Kit",
    category: ["github"],
    tags: ["Next.js", "Boilerplate"],
    description: "Production-ready Next.js starter with authentication, database, and deployment configured.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    githubUrl: "https://github.com/dev/nextjs-starter",
    tools: ["Next.js", "Prisma", "NextAuth"],
    role: "Full Stack Developer",
  },
  {
    id: "animation-library",
    title: "Motion Library",
    category: ["github"],
    tags: ["Animation", "JavaScript"],
    description: "Lightweight animation library for smooth web animations with minimal bundle size.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    githubUrl: "https://github.com/dev/motion-library",
    tools: ["TypeScript", "GSAP", "Vite"],
    role: "JavaScript Developer",
  },

  // Behance Case Studies
  {
    id: "fintech-case-study",
    title: "PayFlow Fintech Case Study",
    category: ["behance"],
    tags: ["Case Study", "Fintech"],
    description: "In-depth case study of a digital payment app redesign improving user engagement by 200%.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    behanceUrl: "https://behance.net/gallery/payflow-case-study",
    challenge: "Users were abandoning the app due to complex navigation and unclear transaction flows.",
    solution: "Redesigned the entire user journey with simplified navigation and clear visual hierarchy.",
    results: ["200% increase in engagement", "75% reduction in support tickets", "4.9 star rating"],
    tools: ["Figma", "Maze", "Hotjar"],
    timeline: "8 weeks",
    role: "Lead UX Designer",
  },
  {
    id: "healthcare-case-study",
    title: "HealthFirst UX Research",
    category: ["behance"],
    tags: ["Case Study", "Healthcare"],
    description: "Comprehensive UX research and redesign for a telemedicine platform serving 50k+ users.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://behance.net/gallery/healthfirst-case-study",
    challenge: "Elderly users struggled with video consultations and appointment booking.",
    solution: "Conducted user research and redesigned with larger touch targets and simplified flows.",
    results: ["150% increase in elderly user adoption", "60% faster booking time", "NPS score of 72"],
    tools: ["Figma", "UserTesting", "Dovetail"],
    timeline: "12 weeks",
    role: "UX Researcher & Designer",
  },
  {
    id: "ecommerce-case-study",
    title: "ShopEase E-commerce Redesign",
    category: ["behance"],
    tags: ["Case Study", "E-commerce"],
    description: "Full e-commerce platform redesign focusing on mobile conversion and checkout optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#141414]",
    behanceUrl: "https://behance.net/gallery/shopease-case-study",
    challenge: "Mobile conversion rate was 70% lower than desktop with high cart abandonment.",
    solution: "Redesigned mobile experience with one-tap checkout and persistent cart.",
    results: ["85% increase in mobile conversion", "45% reduction in cart abandonment", "$2M revenue increase"],
    tools: ["Figma", "Google Analytics", "Amplitude"],
    timeline: "10 weeks",
    role: "Product Designer",
  },
  {
    id: "education-case-study",
    title: "LearnHub Education Platform",
    category: ["behance"],
    tags: ["Case Study", "EdTech"],
    description: "Gamified learning platform design increasing student engagement and course completion rates.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2700&auto=format&fit=crop",
    bgColor: "bg-[#111]",
    behanceUrl: "https://behance.net/gallery/learnhub-case-study",
    challenge: "Low course completion rates and declining student engagement over time.",
    solution: "Introduced gamification elements, progress tracking, and social learning features.",
    results: ["120% increase in completion rate", "80% daily active user increase", "300% growth in referrals"],
    tools: ["Figma", "Principle", "Lottie"],
    timeline: "14 weeks",
    role: "Product Designer",
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
