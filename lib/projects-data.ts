export type ProjectCategory = "ui-ux" | "graphic" | "branding" | "logo" | "brochure" | "website" | "github" | "behance"

export interface Project {
  id: string
  title: string
  category: ProjectCategory[]
  tags: string[]
  description: string
  shortDescription?: string
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
  // Extended case study fields
  research?: string // Research & insights
  iterations?: string // Design iterations & decisions
  responsibilities?: string // My role & responsibilities (detailed)
  // Gallery images
  gallery?: string[]
  // Pinned status for top projects
  pinned?: boolean
}

export const projects: Project[] = [
  // Creative / Featured Projects
  {
    id: "transact-os",
    title: "TransactOS — Unified B2B Operations Dashboard",
    pinned: true,
    category: ["ui-ux", "behance"],
    tags: ["B2B", "SaaS", "Dashboard", "Enterprise"],
    description: "A B2B SaaS dashboard unifying user identity, inventory, and transaction management for ops, admin, and finance teams.",
    shortDescription: "A B2B SaaS dashboard unifying user identity, inventory, and transaction management.",
    image: "/532shots_so.png",
    bgColor: "bg-[#2A2B3D]",
    websiteUrl: "https://transact-os.vercel.app/",
    behanceUrl: "https://figma-design-dev.vercel.app/",
    challenge: "Operations teams, finance managers, and admins don't share the same tools or language. Inventory lives in one system, transactions in another, user access somewhere else entirely.",
    solution: "Designed TransactOS, an OS-level dashboard where identity, inventory, and transactions exist in the same linked, live, and role-aware space.",
    results: [
      "Unified identity layer",
      "Zero-friction transaction flow",
      "Scalable module architecture",
      "Role-based access UX"
    ],
    tools: ["Figma", "React", "Vercel", "HTML/CSS"],
    timeline: "2025",
    role: "End-to-end UX — IA, User Flows, UI Design, Front-end",
    gallery: [],
  },
  {
    id: "fintech-app-ux",
    title: "Fintech Mobile App — Payments & Wallet Experience",
    pinned: true,
    category: ["ui-ux", "behance"],
    tags: ["Fintech", "UX Research", "Mobile App", "Finance"],
    description: "A mobile-first fintech application designed to simplify peer-to-peer payments, wallet management, and transaction tracking while maintaining security and regulatory constraints.",
    shortDescription: "Sending money seamlessly and securely. Ready for a smoother wallet experience?",
    image: "/fintech-ux/cover.jpg",
    bgColor: "bg-[#0B1525]",
    behanceUrl: "https://www.behance.net/gallery/203498267/UX-Case-Study-Fintech-App",
    challenge: "Users faced friction during everyday money transfers due to unclear flows, excessive steps, and lack of transparency around transaction status.",
    solution: "Redesigned the payment flow with clear user paths, simplified inputs, and real-time feedback to reduce cognitive load and improve transaction confidence.",
    results: [
      "Reduced cognitive load",
      "Improved transaction confidence",
      "Simplified payment flow",
    ],
    tools: ["Figma", "Prototyping"],
    timeline: "2023",
    role: "UX research, user flow design, UI design, interaction design, and developer collaboration.",
    gallery: [],
  },
  {
    id: "crypto-coin-app",
    title: "Crypto Trading App — Buy, Sell & Portfolio Management",
    category: ["ui-ux", "behance"],
    tags: ["Fintech", "Crypto", "Mobile App", "UI Kit"],
    description: "A crypto trading application focused on real-time market tracking, secure transactions, and portfolio visibility for both new and experienced users.",
    shortDescription: "Trading crypto shouldn't be complicated. Want to see a clearer portfolio?",
    image: "/crypto-app/cover.png",
    bgColor: "bg-[#0F172A]",
    behanceUrl: "https://www.behance.net/gallery/240563559/Crypto-Coin-App-UI-Kit",
    challenge: "Users found existing crypto apps overwhelming due to dense data presentation and unclear transaction flows.",
    solution: "Created a clean, structured interface that prioritizes essential market information, clear buy/sell flows, and transparent transaction feedback.",
    results: [
      "Clean structured interface",
      "Clear buy/sell flows",
      "Transparent transaction feedback",
    ],
    tools: ["Figma", "Auto Layout", "Prototyping"],
    timeline: "2024",
    role: "UX strategy, dashboard design, UI design, and interaction design.",
    gallery: [],
  },
  {
    id: "msquare-cleaning",
    title: "Cleaning Brand: A Visual Sparkle",
    category: ["website", "branding", "logo"],
    tags: ["Web Design", "Cleaning Services", "Branding", "UI/UX"],
    description: "A professional brand identity and website design for MSquare Cleaning Services, a premier cleaning company in Australia. The project involved creating a fresh, trustworthy visual identity and a user-friendly digital platform to showcase their wide range of services—from residential and window cleaning to commercial office maintenance.",
    shortDescription: "A website that sparkles just like the clean houses this team fixes! Want to see the shine?",
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
    title: "E-commerce Platform — Furniture & Home Décor Shopping Experience",
    category: ["ui-ux", "behance"],
    tags: ["E-Commerce", "Web Design", "Furniture"],
    description:
      "A web-based e-commerce platform designed to offer a modern, visually engaging shopping experience for furniture and home décor products.",
    shortDescription: "Shop for your dream home with ease. Ready to explore?",
    image: "/furniture-cover-new.png",
    bgColor: "bg-[#0B1525]",
    behanceUrl: "https://www.behance.net/gallery/240056139/Furniture-Home-Dcor-Shopping-Experience",
    challenge: "Users struggled to explore products efficiently and lacked confidence in purchase decisions due to poor visual hierarchy and navigation.",
    solution: "Designed a visually clean interface with structured product discovery, improved filtering, and clear product detail layouts to support decision-making.",
    results: [
      "Visually clean interface",
      "Structured product discovery",
      "Improved filtering",
    ],
    tools: ["Figma", "Prototyping", "Design Systems"],
    timeline: "2024",
    role: "Information architecture, wireframing, UI design, and design system creation.",
    gallery: [
      "/furniture-gallery-3.png",
      "/furniture-gallery-1.png",
      "/furniture-gallery-2.png",
      "https://youtu.be/McOQzo-6PoA?si=CdMz9zttomrNY_gW",
    ],
  },
  {
    id: "event-ticket-app",
    title: "Event & Club Ticket Booking App",
    pinned: true,
    category: ["ui-ux", "behance"],
    tags: ["Events", "Booking", "App"],
    description:
      "A mobile application for discovering events, booking tickets, and managing digital passes for parties and club events.",
    shortDescription: "Discover the best events and book instantly. Ready to party?",
    image: "/flight-booking-cover-hq.jpg",
    bgColor: "bg-[#0F172A]",
    behanceUrl: "https://www.behance.net/gallery/240040967/Flight-Ticket-Booking-App-UIUX-Case-Study",
    challenge: "Users needed a faster way to browse events, secure tickets, and manage bookings without switching platforms.",
    solution: "Designed a streamlined browsing and booking flow with clear event details, secure payment experience, and digital ticket access.",
    results: ["Streamlined browsing flow", "Secure payment experience", "Digital ticket access"],
    tools: ["Figma", "Miro", "Illustrator"],
    timeline: "2024",
    role: "User flow design, UI design, interaction patterns, and developer handoff.",
    gallery: [
      "/travel-app-gallery-1.png",
      "/travel-app-gallery-2.png",
      "/travel-app-gallery-3.png",
    ],
  },
  {
    id: "healthcare-mobile-app",
    title: "Healthcare App — Appointment Booking & Patient Records",
    category: ["ui-ux", "behance"],
    tags: ["Healthcare", "Medical", "App", "Telemedicine"],
    description: "A healthcare mobile application aimed at streamlining appointment scheduling and providing secure access to patient medical records.",
    shortDescription: "Booking appointments made simple. Ready to take control of your health?",
    image: "/healthcare-app/cover.jpg",
    bgColor: "bg-[#0B1221]",
    behanceUrl: "https://www.behance.net/gallery/224890781/Healthcare-Mobile-App-UIUX-Case-Study",
    challenge: "Patients struggled with complex booking flows, unclear availability, and difficulty accessing medical information securely.",
    solution: "Designed an intuitive appointment booking experience supported by clear navigation, structured information hierarchy, and privacy-focused UI patterns.",
    results: [
      "Intuitive booking experience",
      "Clear navigation",
      "Privacy-focused UI",
    ],
    tools: ["Figma", "Prototyping", "Adobe XD"],
    timeline: "2024",
    role: "User research, wireframing, UI design, usability testing, and design handoff.",
    gallery: [
      "/healthcare-app/gallery-1.jpg",
      "/healthcare-app/gallery-2.jpg",
      "/healthcare-app/gallery-3.jpg",
    ],
  },

  // Other Projects from Behance
  {
    id: "vishva-kshetra",
    title: "Interior Brand: Designing Elegance",
    category: ["website", "branding", "logo", "brochure"],
    tags: ["Interior Design", "Branding", "Web Design", "Brochure"],
    description: "A complete branding identity and website design for Vishva Kshetra, an interior designing firm. The project included crafting a unique logo, designing professional brochures, and building a responsive website to showcase their portfolio.",
    shortDescription: "I turned a simple drawing of a house into a beautiful brand! Curious to see the magic?",
    image: "/vishva-kshetra-branding.jpg",
    bgColor: "bg-[#252525]",
    websiteUrl: "https://theme-interior-designer.netlify.app/",
    behanceUrl: "https://www.behance.net/gallery/205156817/VS-Branding-Brand-Identity",
    challenge: "To establish a distinct brand identity for a new interior design firm that conveys professionalism, creativity, and architectural precision.",
    solution: "Created a minimalist line-art logo depicting a house structure with interior elements. This visual language was extended to a professional brochure layout and a clean, gallery-focused website to display their work effectively.",
    results: [
      "Cohesive Brand Identity",
      "Professional Brochure Design",
      "Portfolio Website Launch",
    ],
    tools: ["Illustrator", "Photoshop", "HTML/CSS"],
    timeline: "2022",
    role: "Brand & Web Designer",
  },

  {
    id: "sports-news-game",
    title: "Sports News App — Daily Engagement Game Feature",
    category: ["ui-ux", "behance"],
    tags: ["Sports", "Game", "Engagement", "UI Design"],
    description: "A sports news application introducing a daily interactive game to increase user engagement and retention.",
    shortDescription: "More than just news—play the game! Can you guess the player?",
    image: "/placeholder.svg",
    bgColor: "bg-[#141414]",
    behanceUrl: "",
    challenge: "User engagement dropped after content consumption, with limited reasons to return daily.",
    solution: "Designed a “Guess the Player” game experience with progressive hints, timers, streak tracking, and social sharing to encourage repeat visits.",
    results: [
      "Increased user engagement",
      "Encouraged repeat visits",
      "Social sharing integration",
    ],
    tools: ["Figma", "Prototyping"],
    timeline: "2024",
    role: "Feature ideation, UX flows, UI design, and interaction logic.",
    gallery: [],
  },
  {
    id: "vr-gaming-experience",
    title: "VR Gaming Experience — Immersive Interaction Design",
    category: ["ui-ux", "behance"],
    tags: ["VR", "Gaming", "Immersive", "UI Design"],
    description: "A virtual reality gaming concept focused on immersive interaction and intuitive control systems.",
    shortDescription: "Immerse yourself in the game. Ready for a new reality?",
    image: "/vr-football/cover.jpg",
    bgColor: "bg-[#111]",
    behanceUrl: "https://www.behance.net/gallery/224975159/Immersive-VR-Football-Gaming-App-UIUX-Case-Study",
    challenge: "Complex controls and unclear interactions reduced immersion and accessibility for new users.",
    solution: "Designed simplified interaction patterns and visual cues to guide users naturally within the VR environment.",
    results: [
      "Simplified interaction patterns",
      "Visual cues for guidance",
      "Enhanced immersion",
    ],
    tools: ["Unity", "Figma", "Blender"],
    timeline: "2024",
    role: "Interaction design, UI elements for VR, and experience flow definition.",
    gallery: [
      "/vr-football/gallery-1.jpg",
      "/vr-football/gallery-2.jpg",
      "/vr-football/gallery-3.jpg",
      "https://youtu.be/w8lNGT98gzk",
    ],
  },
  {
    id: "financial-services-app",
    title: "Banking App: Secure and Simple",
    category: ["ui-ux", "behance"],
    tags: ["Fintech", "Finance", "App", "React Native"],
    description: "A secure and user-friendly mobile banking application designed to simplify finance on the go. Features seamless fund transfers, bill payments, and robust security protocols.",
    shortDescription: "A money app that knows it's you just by your fingerprint! Want to see the secret security?",
    image: "/financial-app/cover.png",
    bgColor: "bg-[#141414]",
    behanceUrl: "https://www.behance.net/gallery/224883413/Financial-Services-Mobile-App-UIUX-Case-Study",
    challenge: "Users often worry about security and complexity in mobile banking. The challenge was to create a highly secure yet intuitive platform that simplifies daily financial transactions like payments, transfers, and tracking expenses while ensuring top-tier data protection.",
    solution: "Designed 'PayEasy', a comprehensive financial tool built with React Native. The app simplifies usage with a 'Simplifying Finance on the Go' philosophy. features include biometric authentication for secure logins, a sleek dashboard for account summaries, and a split-screen view for intuitive navigation. The system supports encrypted transactions, scan-and-pay, and detailed history tracking, all wrapped in a modern, green-themed UI that signals growth and security.",
    results: [
      "Secure Biometric Authentication",
      "Encrypted Payment Protocols",
      "Cross-platform Functionality",
      "Intuitive Dashboard Design",
    ],
    tools: ["Figma", "React Native", "TypeScript"],
    timeline: "2024",
    role: "UI/UX Designer",
    gallery: [
      "/financial-app/gallery-1.jpg",
      "/financial-app/gallery-2.jpg",
      "/financial-app/gallery-3.jpg",
    ],
  },
  {
    id: "agri-inspection-system",
    title: "AgriTech AI: Smart Quality Control",
    category: ["ui-ux", "behance"],
    tags: ["AgriTech", "AI", "Dashboard", "SaaS"],
    description: "AI-Powered Agriculture Quality Control System designed to optimize inspection processes. Features real-time defect detection, detailed analytics, and live monitoring to reduce manual effort.",
    shortDescription: "A robot eye that picks out the best fruit for you! Curious how the smart camera works?",
    image: "/agri-tech/cover.jpg",
    bgColor: "bg-[#0F0F0F]",
    behanceUrl: "https://www.behance.net/gallery/224976715/Computer-Vision-Based-Inspection-System-for-Agriculture",
    challenge: "Manual quality inspection in agriculture is time-consuming and prone to error. The challenge was to develop an automated system that uses computer vision to track quality trends, detect defects in real-time, and provide actionable analytics for improved decision-making.",
    solution: "We designed an AI-driven dashboard that offers real-time monitoring and defect classification for fruits and vegetables. The system integrates live video feeds for instant analysis, performance statistics for tracking quality over time, and a user-friendly summary screen for efficient inspection management. Its deployed on devices like Raspberry Pi for on-site, real-time analysis.",
    results: [
      "Real-time Defect Detection",
      "Reduced Manual Inspection Effort",
      "Detailed Analytics & Statistics",
      "Optimized Quality Control",
    ],
    tools: ["Figma", "Python", "YOLO"],
    timeline: "2024",
    role: "Product Designer",
    gallery: [
      "/agri-tech/gallery-1.jpg",
      "/agri-tech/gallery-2.jpg",
      "/agri-tech/gallery-3.jpg",
      "https://www.youtube.com/watch?v=dDOQrlsh7xs",
    ],
  },
  {
    id: "ai-healthcare-chatbot",
    title: "AI Chatbot: Your Health Buddy",
    category: ["ui-ux", "behance"],
    tags: ["AI", "Healthcare", "Chatbot", "Mobile App"],
    description: "An AI-powered healthcare assistant designed to provide instant medical support, symptom checking, and seamless appointment scheduling for patients.",
    shortDescription: "A robot friend that helps you feel better instantly! Want to meet your new health buddy?",
    image: "/ai-chatbot/cover.png",
    bgColor: "bg-[#111]",
    behanceUrl: "https://www.behance.net/gallery/234177525/AI-Chatbot-for-Healthcare-Support",
    challenge: "High demand on healthcare providers often leads to delayed support for patients. The challenge was to create a 'Personal Health Companion' that offers instant, 24/7 assistance for symptom checking and appointment scheduling while maintaining a user-friendly and sleek interface.",
    solution: "We developed 'MediAssist' to offer streamlined patient assistance. Key features include an engaging splash screen for easy onboarding, an AI interface with quick chat suggestions for medical symptoms, and seamless integration with human support. The system handles appointment scheduling and medication reminders, ensuring patients have quick access to healthcare services anytime, anywhere.",
    results: [
      "Streamlined Patient Assistance",
      "Instant AI & Human Support",
      "Quick Access to Healthcare",
      "Automated Symptom Checking",
    ],
    tools: ["Figma", "OpenAI API", "React Native"],
    timeline: "2024",
    role: "Product Designer",
    gallery: [
      "/ai-chatbot/gallery-1.jpg",
      "/ai-chatbot/gallery-2.jpg",
      "/ai-chatbot/gallery-3.jpg",
    ],
  },
  {
    id: "job-portal-app",
    title: "Job Portal: AI Career Matchmaker",
    category: ["ui-ux", "behance"],
    tags: ["Recruitment", "AI", "Mobile App"],
    description: "AI-Powered Job Portal App designed for smart hiring and career growth. JobNow connects candidates and employers with a simplified, user-friendly interface.",
    shortDescription: "Finding a job is now as easy as swiping on your favorite game! Ready to find a winner?",
    image: "/job-portal-cover-new.png",
    bgColor: "bg-[#141414]",
    behanceUrl: "https://www.behance.net/gallery/224808223/AI-Powered-Job-Portal-App-for-Job-Seekers-Recruiters",
    challenge: "Job seekers often face a cluttered and confusing application process, while employers struggle to manage resumes efficiently. The goal was to create a streamlined platform that simplifies hiring and job searching.",
    solution: "Designed 'JobNow' with a focus on 'Apply Now' efficiency and profile management. Features include advanced search filters for precise listings, a clean home screen for easy navigation, and personalized job alerts. The app facilitates seamless profile creation, easy application tracking, and direct in-app messaging between candidates and employers.",
    results: [
      "Seamless Profile & App Management",
      "Advanced Search Filters",
      "Direct In-App Messaging",
      "Personalized Job Alerts",
    ],
    tools: ["Figma", "Illustrator", "Notion"],
    timeline: "2024",
    role: "UI/UX Designer",
    gallery: [
      "/job-portal/gallery-1.png",
      "/job-portal/gallery-2.jpg",
      "/job-portal/gallery-3.jpg",
      "/job-portal/gallery-4.jpg",
      "https://youtu.be/Niv34S3n0jg",
    ],
  },
  {
    id: "brotomotive-website",
    title: "Auto Repair: Web Driving Sales",
    pinned: true,
    category: ["website"],
    tags: ["Auto Repair", "Web Design", "Local Business"],
    description: "A professional, responsive website designed to connect vehicle owners with reliable auto repair and maintenance services. It serves as a digital hub for Brotomotive, offering clear service details and easy contact options.",
    shortDescription: "A website for car heroes who save the day when engines break! Want to see under the hood?",
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
