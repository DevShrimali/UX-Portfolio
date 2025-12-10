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
  // Gallery images
  gallery?: string[]
  // Pinned status for top projects
  pinned?: boolean
}

export const projects: Project[] = [
  // Creative / Featured Projects
  {
    id: "fintech-app-ux",
    title: "Fintech UX: Making Money Simple",
    pinned: true,
    category: ["ui-ux", "behance"],
    tags: ["Fintech", "UX Research", "Mobile App", "Finance"],
    description: "This case study presents a complete UX design for a fintech app, showing how user research, intuitive flows, and clean UI come together to make finance easy, secure, and accessible. It walks through mockups, screens, and user flows to highlight how design choices solve real user problems — simplifying tasks like payments, transfers, and account management — and ultimately deliver a smooth, trustworthy experience for users.",
    shortDescription: "Sending money should be as fun as high-fiving! See how I made it super easy?",
    image: "/fintech-ux/cover.jpg",
    bgColor: "bg-[#0B1525]",
    behanceUrl: "https://www.behance.net/gallery/203498267/UX-Case-Study-Fintech-App",
    challenge: "Simplify tasks like payments, transfers, and account management and solve real user problems in finance.",
    solution: "A complete UX design showing how user research, intuitive flows, and clean UI come together to make finance easy, secure, and accessible.",
    results: [
      "Smooth, trustworthy experience",
      "Simplified payments & transfers",
      "Accessible finance management",
    ],
    tools: ["Figma", "Prototyping"],
    timeline: "2023",
    role: "UI/UX Designer",
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
    title: "Furniture App: Shop Dream Homes",
    category: ["ui-ux", "behance"],
    tags: ["E-Commerce", "Web Design", "Furniture"],
    description:
      "A modern and minimal web experience designed for seamless furniture and home décor shopping. Focusing on clean UI, strong visual hierarchy, and personalized product recommendations.",
    shortDescription: "Hunting for the coolest chair just got like a fun game! Ready to design your dream room?",
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
    title: "Travel App: Fly Without Stress",
    pinned: true,
    category: ["ui-ux", "behance"],
    tags: ["Travel", "Booking", "App"],
    description:
      "A seamless and intuitive flight ticket booking experience designed to simplify complex steps like searching, seat selection, and payment into a clean, guided user journey.",
    shortDescription: "Booking a flight is now as easy as picking a vacation spot! Ready to fly away?",
    image: "/flight-booking-cover-hq.jpg",
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
    title: "Health App: Care in Your Pocket",
    category: ["ui-ux", "behance"],
    tags: ["Healthcare", "Medical", "App", "Telemedicine"],
    description: "A secure and efficient healthcare app designed to simplify patient care. Focuses on fast logins, instant doctor search, and real-time medical access.",
    shortDescription: "Talking to a doctor is now as fast as texting a friend! Want to see how it works?",
    image: "/healthcare-app/cover.jpg",
    bgColor: "bg-[#0B1221]",
    behanceUrl: "https://www.behance.net/gallery/224890781/Healthcare-Mobile-App-UIUX-Case-Study",
    challenge: "Patients often struggle with complex appointment booking systems and fragmented medical records. The goal was to create a unified platform that offers secure access, fast doctor discovery, and effortless communication.",
    solution: "Developed a user-friendly interface with secure login and instant search functionality. Key features include real-time messaging with doctors, detailed provider profiles, and a streamlined appointment booking flow. The design ensures patients can quickly access medical records and manage their health journey with confidence.",
    results: [
      "Fast & Secure Login",
      "Instant Doctor Search",
      "Real-time Messaging",
      "Simplified Scheduling",
    ],
    tools: ["Figma", "Prototyping", "Adobe XD"],
    timeline: "2024",
    role: "UI/UX Designer",
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
    id: "metrolink-branding",
    title: "Corporate Identity: Building Trust",
    pinned: true,
    category: ["branding", "logo"],
    tags: ["Branding", "Corporate Identity", "Logo Design"],
    description: "A premium brand identity created for Metrolink Outsourcing Services, designed to reflect trust, growth, and professional excellence through clean geometry and a refined gold-black palette.",
    shortDescription: "I made a shiny golden bird to show how strong this team is! Want to see the gold?",
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
    title: "VR Football: The Future of Play",
    category: ["ui-ux", "behance"],
    tags: ["VR", "Gaming", "Immersive", "UI Design"],
    description: "An immersive Virtual Reality football gaming experience allowing players to train, play, and compete. Features realistic training modes, diverse game modes, and a dynamic UI.",
    shortDescription: "Imagine playing football inside your computer! Want to see what the future of sports looks like?",
    image: "/vr-football/cover.jpg",
    bgColor: "bg-[#111]",
    behanceUrl: "https://www.behance.net/gallery/224975159/Immersive-VR-Football-Gaming-App-UIUX-Case-Study",
    challenge: "Creating a UI for VR requires balancing immersion with usability. The challenge was to design an intuitive interface for game mode selection, team management, and real-time feedback that doesn't break the player's immersion.",
    solution: "Designed a spatial UI that feels native to the VR environment. The interface focuses on ease of discovery for games and teams, using a smooth and dynamic layout. We implemented real-time success feedback for goals and a seamless flow for switching between Quick Match, Custom Match, and Multiplayer modes.",
    results: [
      "Intuitive VR Navigation",
      "Real-time Logic Feedback",
      "Dynamic Game Mode Selection",
      "Cross-platform VR Experience",
    ],
    tools: ["Unity", "Figma", "Blender"],
    timeline: "2024",
    role: "VR UI/UX Designer",
    gallery: [
      "/vr-football/gallery-1.jpg",
      "/vr-football/gallery-2.jpg",
      "/vr-football/gallery-3.jpg",
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
