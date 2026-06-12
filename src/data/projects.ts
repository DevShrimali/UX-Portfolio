/**
 * Single source of truth for all project/case-study data.
 * Home (featured), /work (listing + filters) and /work/[slug] (detail)
 * all derive from this file — edit here and every page stays in sync.
 */

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  /** Filter key used on /work — must match one of `categories` */
  category: string;
  /** Display label on the detail page (may be more specific) */
  categoryLabel: string;
  tags: string[];
  description: string;
  image: string;
  gallery: string[];
  video?: string; // YouTube embed URL
  year: string;
  role: string;
  tools: string[];
  websiteUrl?: string;
  appStoreUrl?: string;
  behanceUrl?: string;
  behanceLabel?: string;
  challenge: string;
  responsibilities: string;
  research: string;
  solution: string;
  skills: string[];
  results: string[];
  /** Shown in the home "Selected Work" section, in this order */
  featured?: number;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "transact-os",
    title: "TransactOS",
    subtitle: "Unified B2B Operations Dashboard",
    category: "SaaS",
    categoryLabel: "SaaS / Dashboard",
    tags: ["B2B", "SaaS", "Dashboard", "Enterprise"],
    description:
      "A B2B SaaS dashboard that unifies user identity, inventory, and transaction management for ops, admin, and finance teams — all in one role-aware space.",
    image: "/project%20assets/532shots_so.png",
    gallery: [],
    year: "2024",
    role: "End-to-end UX — IA, User Flows, UI Design, Front-end",
    tools: ["Figma", "React", "Vercel", "HTML/CSS"],
    websiteUrl: "https://transact-os.vercel.app/",
    behanceUrl: "https://figma-design-dev.vercel.app/",
    behanceLabel: "Information architecture",
    challenge:
      "Operations teams, finance managers, and admins don't share the same tools or language. Inventory lives in one system, transactions in another, user access somewhere else entirely. This fragmentation causes errors, delays, and critical blind spots in day-to-day operations.",
    responsibilities:
      "I led end-to-end product design — from stakeholder interviews and information architecture, through user flow mapping, wireframing, and final high-fidelity UI. I also built the front-end prototype for live validation with enterprise users.",
    research:
      "Interviewed 8 ops, admin and finance professionals across 3 companies. Key finding: 100% switched between 3+ tools daily. Pain points centred on context-switching and lack of cross-module visibility — neither a UX nor a data problem, but a structural architecture problem.",
    solution:
      "Designed TransactOS as an OS-level dashboard where identity, inventory, and transactions exist in the same linked, live, role-aware space. Every module communicates. Every role sees only what it needs to act effectively.",
    skills: ["UX Research", "IA", "User Flows", "Wireframing", "UI Design", "Prototyping", "Front-end"],
    results: ["Unified identity layer", "Zero-friction transaction flow", "Scalable module architecture", "Role-based access UX"],
    featured: 1,
  },
  {
    id: 2,
    slug: "fintech-app",
    title: "Fintech Mobile App",
    subtitle: "Payments & Wallet Experience",
    category: "Fintech",
    categoryLabel: "Fintech",
    tags: ["Fintech", "UX Research", "Mobile App", "Finance"],
    description:
      "A mobile-first fintech application simplifying peer-to-peer payments, wallet management, and transaction tracking with full security compliance.",
    image: "https://img.youtube.com/vi/VGJqwOx-qAY/maxresdefault.jpg",
    gallery: [],
    video: "https://www.youtube.com/embed/VGJqwOx-qAY",
    year: "2024",
    role: "UX Research, User Flow Design, UI Design, Interaction Design",
    tools: ["Figma", "Prototyping"],
    behanceUrl: "https://www.behance.net/gallery/203498267/UX-Case-Study-Fintech-App",
    challenge:
      "Users faced friction during everyday money transfers due to unclear flows, excessive steps, and lack of transparency around transaction status. Trust was eroded by confusing error states and non-descriptive feedback.",
    responsibilities:
      "Led UX research through user interviews and competitive audit. Designed all user flows, wireframes, and high-fidelity screens. Collaborated on handoff documentation with the dev team.",
    research:
      "5 user interviews revealed the biggest drop-off point: users abandoned transfers mid-flow when they couldn't tell if their action had been registered. Anxiety around money movement demanded immediate, clear feedback at every step.",
    solution:
      "Redesigned the payment flow with a 3-step model: initiate, confirm, done. Clear progress indicators, real-time feedback, and explicit error states reduced cognitive load and improved transaction confidence significantly.",
    skills: ["UX Research", "User Interviews", "User Flows", "Wireframing", "UI Design", "Interaction Design"],
    results: ["Reduced cognitive load", "Simplified 3-step payment flow", "Improved transaction confidence"],
    featured: 2,
  },
  {
    id: 3,
    slug: "event-ticket-booking",
    title: "Flight Ticket Booking App",
    subtitle: "UI/UX Case Study",
    category: "Travel",
    categoryLabel: "Travel / Booking",
    tags: ["Flight Booking", "Travel", "Mobile App"],
    description:
      "A comprehensive UI/UX case study for a flight ticket booking application, streamlining flight discovery, seat selection, and checkout.",
    image: "/project%20assets/flight-booking-cover-hq.jpg",
    gallery: [
      "/project%20assets/travel-app-gallery-1.png",
      "/project%20assets/travel-app-gallery-2.png",
      "/project%20assets/travel-app-gallery-3.png",
    ],
    year: "2024",
    role: "User Flow Design, UI Design, Interaction Patterns, Developer Handoff",
    tools: ["Figma", "Miro", "Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/240040967/Flight-Ticket-Booking-App-UIUX-Case-Study",
    challenge:
      "Users needed a faster way to search flights, compare prices, and manage bookings — but existing solutions often had cluttered interfaces, hidden fees, and complex multi-step checkouts.",
    responsibilities:
      "End-to-end UX from flight discovery flows to boarding pass management. Designed the search funnel, interactive seat selection, digital boarding pass system, and developer handoff docs.",
    research:
      "Competitive analysis of 6 flight booking apps. Key insight: users abandon at payment when uncertainty strikes — hidden baggage fees, unclear pricing, poor confirmation feedback. Checkout clarity was the biggest opportunity.",
    solution:
      "Streamlined a unified booking flow with clear flight details, transparent pricing, secure payment, and instant digital boarding pass delivery. A seamless app for the full travel experience.",
    skills: ["User Research", "User Flows", "Wireframing", "UI Design", "Prototyping", "Dev Handoff"],
    results: ["Streamlined search flow", "Transparent pricing experience", "Digital boarding pass access"],
  },
  {
    id: 4,
    slug: "auto-repair-brotomotive",
    title: "Auto Repair: Web Driving Sales",
    subtitle: "Brotomotive — A Local Business Website",
    category: "Web Design",
    categoryLabel: "Web Design",
    tags: ["Auto Repair", "Web Design", "Local Business"],
    description:
      "A professional, responsive website connecting vehicle owners with reliable auto repair services. Digital hub for Brotomotive with clear services and easy contact.",
    image: "/project%20assets/brotomotive-cover.png",
    gallery: ["/project%20assets/brotomotive-laptop-mockup.png"],
    year: "2024",
    role: "Web Designer & Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    websiteUrl: "https://www.brotomotive.com.au/",
    challenge:
      "Brotomotive needed a digital presence to clearly communicate their auto repair services to local customers — and make it effortless for users to find service info and book appointments.",
    responsibilities:
      "Handled design, development and deployment. Designed all pages and components, wrote semantic HTML/CSS, implemented responsive breakpoints, and deployed on a shared hosting environment.",
    research:
      "Analysed local auto repair competitors. Found that 80% had outdated mobile experiences and buried contact info. Making service info and CTA instantly accessible on mobile was the primary opportunity.",
    solution:
      "Built a lightweight, high-performance site using semantic HTML, CSS, and Vanilla JS. Prioritised information hierarchy, mobile responsiveness, and direct CTAs so users can access location, services, and contact from any device in under 2 taps.",
    skills: ["Web Design", "HTML5/CSS3", "JavaScript", "Responsive Design", "SEO"],
    results: ["Professional online presence", "Optimised mobile experience", "Fast loading speeds"],
  },
  {
    id: 5,
    slug: "crypto-trading-app",
    title: "Crypto Trading App",
    subtitle: "Buy, Sell & Portfolio Management",
    category: "Fintech",
    categoryLabel: "Fintech / Crypto",
    tags: ["Fintech", "Crypto", "Mobile App", "UI Kit"],
    description:
      "A crypto trading application focused on real-time market tracking, secure transactions, and portfolio visibility for both new and experienced users.",
    image: "/project%20assets/crypto-app/cover.png",
    gallery: [],
    year: "2024",
    role: "UX Strategy, Dashboard Design, UI Design, Interaction Design",
    tools: ["Figma", "Auto Layout", "Prototyping"],
    behanceUrl: "https://www.behance.net/gallery/240563559/Crypto-Coin-App-UI-Kit",
    challenge:
      "Existing crypto apps overwhelmed users with dense data, volatile charts, and unclear transaction flows — creating anxiety instead of confidence when making financial decisions.",
    responsibilities:
      "Led UX strategy and visual design. Designed the full app UI system including dashboard, market view, portfolio tracker, and buy/sell flows.",
    research:
      "Surveyed 12 crypto users. Primary finding: 75% felt uncertain whether their order went through. Data density ranked as the top pain point — users wanted to see only what they needed to act, not everything at once.",
    solution:
      "Created a clean, structured interface that surfaces essential market data, guides clear buy/sell flows, and provides transparent, immediate transaction confirmation. Calming design reduces decision anxiety.",
    skills: ["UX Strategy", "UI Design", "Design Systems", "Auto Layout", "Prototyping"],
    results: ["Clean structured interface", "Clear buy/sell flows", "Transparent transaction feedback"],
  },
  {
    id: 6,
    slug: "cleaning-brand-msquare",
    title: "Cleaning Brand: A Visual Sparkle",
    subtitle: "MSquare Cleaning Services — Brand Identity & Website",
    category: "Brand Identity",
    categoryLabel: "Brand Identity",
    tags: ["Web Design", "Branding", "Logo Design"],
    description:
      "A comprehensive brand identity and website for MSquare Cleaning Services, communicating reliability, quality, and eco-friendliness.",
    image: "/project%20assets/msquare/cover.png",
    gallery: ["/project%20assets/msquare/mockup-1.jpg", "/project%20assets/msquare/mockup-2.jpg"],
    year: "2024",
    role: "Brand & Web Designer",
    tools: ["Figma", "Illustrator", "Next.js", "Tailwind CSS"],
    websiteUrl: "https://msquarecleaningservices.com/",
    behanceUrl: "https://www.behance.net/gallery/240115255/Cleaning-Services-Brand-Identity-Logo",
    challenge:
      "MSquare needed to stand out in a saturated cleaning services market and communicate trust, quality, and eco-friendliness — while making it easy for customers to get a quote for 7+ service types.",
    responsibilities:
      "Created the full brand identity including logo, colour system, and typography. Designed and developed the website including a service catalog and lead-capture quote flow.",
    research:
      "Analysed 10 competitor sites. Found that generic blue/white palettes dominated the space. Opportunity: a distinctive, fresh brand with a streamlined booking flow would immediately stand out and convert better.",
    solution:
      "Delivered a cohesive brand identity with a fresh visual system and a responsive website featuring a detailed service catalogue, intuitive 'Get a Quote' flow, and transparent service information to build confidence.",
    skills: ["Brand Identity", "Logo Design", "Web Design", "UI/UX", "Front-end Development"],
    results: ["Streamlined Booking/Quote System", "Integrated 7+ Service Categories", "Enhanced Brand Trust & Visibility", "Mobile-Optimised UX"],
    featured: 6,
  },
  {
    id: 7,
    slug: "furniture-ecommerce",
    title: "Furniture & Home Décor E-Commerce",
    subtitle: "A Modern Shopping Experience",
    category: "E-Commerce",
    categoryLabel: "E-Commerce",
    tags: ["E-Commerce", "Web Design", "Furniture"],
    description:
      "A web-based e-commerce platform for furniture and home décor — visual, intuitive, and built for confident purchase decisions.",
    image: "/project%20assets/furniture-cover-new.png",
    gallery: [
      "/project%20assets/furniture-gallery-3.png",
      "/project%20assets/furniture-gallery-1.png",
      "/project%20assets/furniture-gallery-2.png",
    ],
    video: "https://www.youtube.com/embed/McOQzo-6PoA",
    year: "2024",
    role: "IA, Wireframing, UI Design, Design System",
    tools: ["Figma", "Prototyping", "Design Systems"],
    behanceUrl: "https://www.behance.net/gallery/240056139/Furniture-Home-Dcor-Shopping-Experience",
    challenge:
      "Users struggled to explore a large product catalogue efficiently and lacked confidence making purchase decisions due to poor visual hierarchy, weak filtering, and unclear product details.",
    responsibilities:
      "Designed the full IA, navigation system, product catalogue, filtering UX, product detail pages, and design system. Focused on reducing drop-off at the detail page stage.",
    research:
      "Heatmap analysis and user interviews with 6 online furniture shoppers revealed that 70% of drop-offs happened at the product detail page — not enough imagery, unclear dimensions, and no room context.",
    solution:
      "Redesigned with a visual-first approach: multiple high-quality product images, contextual room photos, clear dimension specs, and guided 'Add to Cart' flow. A structured filtering system accelerated product discovery.",
    skills: ["IA", "Wireframing", "UI Design", "E-Commerce UX", "Design Systems"],
    results: ["Visually-led product discovery", "Improved filtering system", "Higher detail page engagement"],
  },
  {
    id: 8,
    slug: "healthcare-app",
    title: "Healthcare App",
    subtitle: "Appointment Booking & Patient Records",
    category: "Healthcare",
    categoryLabel: "Healthcare",
    tags: ["Healthcare", "Medical", "App", "Telemedicine"],
    description:
      "A healthcare mobile app streamlining appointment scheduling and providing secure access to patient medical records.",
    image: "/project%20assets/healthcare-app/cover.jpg",
    gallery: [
      "/project%20assets/healthcare-app/gallery-1.jpg",
      "/project%20assets/healthcare-app/gallery-2.jpg",
      "/project%20assets/healthcare-app/gallery-3.jpg",
    ],
    year: "2024",
    role: "User Research, Wireframing, UI Design, Usability Testing, Design Handoff",
    tools: ["Figma", "Prototyping", "Adobe XD"],
    behanceUrl: "https://www.behance.net/gallery/224890781/Healthcare-Mobile-App-UIUX-Case-Study",
    challenge:
      "Patients abandoned the app mid-flow due to complex booking steps, unclear doctor availability, and anxiety around accessing sensitive medical data. Trust and privacy were existential UX concerns.",
    responsibilities:
      "Conducted user research with 8 patients and 3 doctors. Led product design from research to final handoff — including all flows for booking, record access, and notifications.",
    research:
      "Patient interviews highlighted: 'I never know if my appointment is confirmed.' The key insight: the absence of clear confirmation states was driving abandonment — not the number of steps.",
    solution:
      "Designed an intuitive booking experience with persistent confirmation states at every step. Clear navigation, structured record hierarchy, and privacy-focused patterns restored user confidence throughout.",
    skills: ["User Research", "Wireframing", "UI Design", "Usability Testing", "Design Handoff"],
    results: ["Intuitive booking experience", "Clear navigation architecture", "Privacy-focused UI patterns"],
  },
  {
    id: 9,
    slug: "interior-brand-vishva-kshetra",
    title: "Interior Brand: Designing Elegance",
    subtitle: "Vishva Kshetra — Branding & Website",
    category: "Brand Identity",
    categoryLabel: "Brand Identity",
    tags: ["Interior Design", "Branding", "Web Design"],
    description:
      "Complete branding identity and website design for Vishva Kshetra, a premium interior designing firm.",
    image: "/project%20assets/vishva-kshetra-branding.jpg",
    gallery: [],
    year: "2023",
    role: "Brand & Web Designer",
    tools: ["Illustrator", "Photoshop", "HTML/CSS"],
    websiteUrl: "https://theme-interior-designer.netlify.app/",
    behanceUrl: "https://www.behance.net/gallery/205156817/VS-Branding-Brand-Identity",
    challenge:
      "Vishva Kshetra needed a brand identity that conveyed architectural precision and creative vision — distinguishing them from generic interior design firms with cookie-cutter logos.",
    responsibilities:
      "Created the logo system and full brand identity. Designed and developed the portfolio website. Also produced brochure layouts for print use.",
    research:
      "Audited 15 interior design brands. Found that the strongest performers used negative space and line-art to suggest both space and structure — aligned with what interior design communicates conceptually.",
    solution:
      "Designed a minimalist line-art logo depicting a house with interior architectural details. Extended the visual language to a clean, gallery-focused website and professional print brochure.",
    skills: ["Brand Identity", "Logo Design", "Web Design", "Print Design", "HTML/CSS"],
    results: ["Cohesive Brand Identity", "Professional Brochure Design", "Portfolio Website Launch"],
  },
  {
    id: 10,
    slug: "sports-news-app",
    title: "Sports Condensed",
    subtitle: "60-Word Fast Sports News & Gamification",
    category: "Sports",
    categoryLabel: "Sports / Media",
    tags: ["Sports News", "Gamification", "Mobile App"],
    description:
      "A mobile app delivering sharp, 60-word sports news with a personalized feed, swipe-to-read UX, and an engaging 'Player of the Day' trivia game.",
    image: "/project%20assets/sport%20news/cover.png",
    gallery: [],
    year: "2023",
    role: "Feature Ideation, UX Flows, UI Design, Interaction Logic",
    tools: ["Figma", "Prototyping"],
    appStoreUrl: "https://play.google.com/store/apps/details?id=com.sportscondensed.news&hl=en_IN&pli=1",
    challenge:
      "Modern sports apps overwhelm users with bloated articles and clickbait, burying actual news. Additionally, news consumption alone often fails to build strong daily retention habits.",
    responsibilities:
      "Led end-to-end UX/UI design. Designed the core 60-word personalized feed, intuitive swipe-to-read mechanics, and the gamified 'Player of the Day' (POTD) feature.",
    research:
      "Analysis revealed users want fast, fact-packed news without filler. Habit loop analysis also highlighted that adding a daily trivia challenge drastically increases 7-day retention.",
    solution:
      "Created a clutter-free, personalized feed with an infinite-scroll swipe mechanic. Integrated the 'Player of the Day' trivia game using progressive hints to create a rewarding daily reason to return.",
    skills: ["UX Strategy", "Interaction Design", "Gamification", "UI Design"],
    results: ["Reduced reading time to < 10 mins", "Increased 7-day retention", "Streamlined personalized feeds"],
  },
  {
    id: 11,
    slug: "vr-gaming-experience",
    title: "VR Gaming Experience",
    subtitle: "Immersive Interaction Design",
    category: "Gaming",
    categoryLabel: "Gaming / XR",
    tags: ["VR", "Gaming", "Interaction Design"],
    description:
      "A virtual reality gaming concept focused on immersive spatial interaction and world-embedded UI systems.",
    image: "/project%20assets/vr-football.png",
    gallery: [
      "/project%20assets/vr-football/gallery-1.jpg",
      "/project%20assets/vr-football/gallery-2.jpg",
      "/project%20assets/vr-football/gallery-3.jpg",
    ],
    video: "https://www.youtube.com/embed/w8lNGT98gzk",
    year: "2023",
    role: "Interaction Design, VR UI Elements, Experience Flow Definition",
    tools: ["Unity", "Figma", "Blender"],
    behanceUrl: "https://www.behance.net/gallery/224975159/Immersive-VR-Football-Gaming-App-UIUX-Case-Study",
    challenge:
      "VR interfaces borrowed too heavily from 2D flat paradigms — overlaid menus broke immersion and made new users feel lost in 3D space without clear spatial context.",
    responsibilities:
      "Defined the full spatial interaction language. Designed world-embedded UI elements, controller interaction patterns, and the onboarding flow for new VR users.",
    research:
      "Tested 3 existing VR games with 6 users. Every user instinctively reached for physical space around them before resorting to controller menus — confirming that diegetic UI (embedded in the world) was the right direction.",
    solution:
      "Designed a fully diegetic UI system: interaction indicators embedded in the physical game world, spatial audio cues for feedback, and controller gestures that matched natural human motion — eliminating flat menu overlays entirely.",
    skills: ["VR/XR Design", "Spatial Interaction", "3D UI Design", "User Testing"],
    results: ["Fully diegetic UI system", "Intuitive spatial interactions", "Enhanced immersion & accessibility"],
  },
  {
    id: 12,
    slug: "banking-app",
    title: "Banking App: Secure and Simple",
    subtitle: "Personal Finance, Simplified",
    category: "Fintech",
    categoryLabel: "Fintech / Banking",
    tags: ["Fintech", "Mobile Banking", "Finance"],
    description:
      "A secure, user-friendly mobile banking app for seamless fund transfers, bill payments, and financial tracking on the go.",
    image: "/project%20assets/financial-app/cover.png",
    gallery: [
      "/project%20assets/financial-app/gallery-1.jpg",
      "/project%20assets/financial-app/gallery-2.jpg",
      "/project%20assets/financial-app/gallery-3.jpg",
    ],
    year: "2023",
    role: "Product Designer",
    tools: ["Figma", "React Native", "TypeScript"],
    behanceUrl: "https://www.behance.net/gallery/224883413/Financial-Services-Mobile-App-UIUX-Case-Study",
    challenge:
      "Mobile banking users felt a deep tension between security and ease of use — they wanted both, but perceived them as mutually exclusive. Complex authentication flows reinforced this anxiety.",
    responsibilities:
      "Designed the full product: biometric auth flows, dashboard, transfer and payment screens, transaction history, and the design system across Android and iOS.",
    research:
      "Survey of 200 mobile banking users: 68% said they'd abandon a transfer if the process felt 'too complicated'. Biometric login scored highest in trust — users associated fingerprint/face with security rather than risk.",
    solution:
      "Built 'PayEasy' around biometric-first authentication, a single-glance dashboard, and scan-to-pay. Green UI accents signal financial growth and safety. Encrypted transactions wrapped in an interface that feels effortless.",
    skills: ["UI/UX Design", "Mobile Design", "Design Systems", "React Native Handoff"],
    results: ["Biometric Authentication", "Encrypted Payment Protocols", "Intuitive Dashboard", "Cross-platform Design"],
  },
  {
    id: 13,
    slug: "agritech-ai",
    title: "AgriTech AI: Smart Quality Control",
    subtitle: "Computer Vision for Agriculture",
    category: "AgriTech",
    categoryLabel: "AgriTech / AI",
    tags: ["AgriTech", "AI/ML", "Dashboard", "SaaS"],
    description:
      "AI-Powered Agriculture Quality Control System with real-time defect detection, live monitoring, and actionable analytics.",
    image: "/project%20assets/agri-tech/cover.jpg",
    gallery: [
      "/project%20assets/agri-tech/gallery-1.jpg",
      "/project%20assets/agri-tech/gallery-2.jpg",
      "/project%20assets/agri-tech/gallery-3.jpg",
    ],
    year: "2023",
    role: "Product Designer",
    tools: ["Figma", "Python", "YOLO"],
    behanceUrl: "https://www.behance.net/gallery/224976715/Computer-Vision-Based-Inspection-System-for-Agriculture",
    challenge:
      "Manual quality inspection in agriculture is slow, inconsistent, and labor-intensive. Defects missed at inspection reached consumers — damaging brand trust and creating financial waste.",
    responsibilities:
      "Designed the full AI dashboard product experience — from live camera feed UI, defect classification display, analytics views, to the summary reporting screen for daily quality oversight.",
    research:
      "Field visits to 2 packing facilities revealed inspectors were managing multiple conveyor lines simultaneously. Cognitive overload was the root problem — they couldn't watch everything. The system needed to notify, not demand constant attention.",
    solution:
      "Designed an AI-driven dashboard with real-time defect flagging, sound alerts for high-severity items, and clean analytics charts for trend tracking. Deployed on Raspberry Pi for on-site edge processing.",
    skills: ["Product Design", "Dashboard UX", "Data Visualization", "Edge Computing UX"],
    results: ["Real-time Defect Detection", "Reduced Manual Effort", "Detailed Analytics", "Optimised Quality Control"],
  },
  {
    id: 14,
    slug: "ai-health-chatbot",
    title: "AI Chatbot: Your Health Buddy",
    subtitle: "MediAssist — 24/7 AI Healthcare Support",
    category: "Healthcare",
    categoryLabel: "Healthcare / AI",
    tags: ["AI", "Healthcare", "Chatbot", "Mobile"],
    description:
      "An AI-powered healthcare assistant providing instant symptom checking, medical guidance, and appointment scheduling — 24/7.",
    image: "/project%20assets/ai-chatbot.png",
    gallery: [
      "/project%20assets/ai-chatbot/gallery-1.jpg",
      "/project%20assets/ai-chatbot/gallery-2.jpg",
      "/project%20assets/ai-chatbot/gallery-3.jpg",
    ],
    video: "https://www.youtube.com/embed/Lq87TMxFI8w",
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "OpenAI API", "React Native"],
    behanceUrl: "https://www.behance.net/gallery/234177525/AI-Chatbot-for-Healthcare-Support",
    challenge:
      "High demand on healthcare systems creates delays in patient support. People with urgent but non-emergency concerns had no reliable, immediate guide — leading to unnecessary ER visits and underuse of appropriate resources.",
    responsibilities:
      "Designed the full product: onboarding, AI conversation UI, symptom checker, appointment booking, medication reminders, and the handoff to human support.",
    research:
      "Interviews with 10 patients revealed a key behavioural pattern: people searched symptoms on Google before calling a doctor, but mistrusted the results. They wanted a trusted, conversational guide — not bare search results.",
    solution:
      "Built 'MediAssist' around a conversational AI interface with quick-suggestion chips for common symptoms, clear escalation to human doctors, and seamless appointment scheduling — all in one app.",
    skills: ["Conversational UX", "AI Interface Design", "Mobile Design", "Interaction Design"],
    results: ["Streamlined Patient Assistance", "Instant AI & Human Support", "24/7 Healthcare Access", "Symptom Checking Flow"],
  },
  {
    id: 15,
    slug: "job-portal-ai",
    title: "Job Portal: AI Career Matchmaker",
    subtitle: "JobNow — Smart Hiring & Career Growth",
    category: "SaaS",
    categoryLabel: "SaaS / Recruitment",
    tags: ["Recruitment", "AI", "Mobile App"],
    description:
      "AI-Powered Job Portal connecting job seekers and employers with a simplified, smart application process.",
    image: "/project%20assets/job-portal-cover-new.png",
    gallery: [
      "/project%20assets/job-portal/gallery-1.png",
      "/project%20assets/job-portal/gallery-2.jpg",
      "/project%20assets/job-portal/gallery-3.jpg",
      "/project%20assets/job-portal/gallery-4.jpg",
    ],
    video: "https://www.youtube.com/embed/4RxCHb3m8M4",
    year: "2023",
    role: "Product Designer",
    tools: ["Figma", "Illustrator", "Notion"],
    behanceUrl: "https://www.behance.net/gallery/224808223/AI-Powered-Job-Portal-App-for-Job-Seekers-Recruiters",
    challenge:
      "Job seekers faced a cluttered, confusing application process. Employers struggled to manage incoming resumes without context. Both sides were under-served by the same interface.",
    responsibilities:
      "Designed both the candidate and employer sides of the platform — including search, application, profile management, messaging, and the AI matching interface.",
    research:
      "Surveyed 30 job seekers and 10 recruiters. Job seekers: 'I apply and hear nothing.' Recruiters: 'I get 200 applications and can't find the right one.' The AI match layer had to solve both problems simultaneously.",
    solution:
      "Designed 'JobNow' with AI-match at the core: precise search filters, personalised job alerts, one-tap applications, and direct in-app messaging. Clean candidate cards for employers; clear application tracking for seekers.",
    skills: ["Two-sided Marketplace UX", "AI Interface Design", "Mobile Design", "Prototyping"],
    results: ["Seamless Profile Management", "Advanced Search & Filters", "Direct In-App Messaging", "Personalised Job Alerts"],
    featured: 5,
  },
  {
    id: 16,
    slug: "finance-management-app",
    title: "Finance Management App",
    subtitle: "Smart UPI, KPIs & Secure Money Tracking",
    category: "Fintech",
    categoryLabel: "Fintech",
    tags: ["Fintech", "UI Design", "Mobile App", "UPI"],
    description:
      "A modern mobile finance management app built for fast, intuitive, and secure personal finance control — featuring UPI payments, KPI dashboards, and real-time money tracking.",
    image: "https://img.youtube.com/vi/2F0TF7iKCgs/maxresdefault.jpg",
    gallery: [],
    video: "https://www.youtube.com/embed/2F0TF7iKCgs",
    year: "2025",
    role: "Product Designer",
    tools: ["Figma", "Prototyping", "Auto Layout"],
    challenge:
      "Users managing personal finances across multiple UPI apps, bank accounts, and expense categories had no single, clear view of their money. Fragmentation led to overspending, missed payments, and financial anxiety.",
    responsibilities:
      "Led full UI/UX design — from information architecture and user flows through high-fidelity screens and interactive prototype. Designed the UPI payment flow, KPI dashboard, and transaction tracking views.",
    research:
      "Interviewed 8 young professionals managing finances on mobile. Key finding: 80% track expenses in a separate notes app because their banking apps don't show spending patterns. They needed a finance OS, not just a payment app.",
    solution:
      "Designed a unified finance management app with a clear KPI dashboard (income, spend, savings), smart UPI payment flows, category-based expense tracking, and a secure money movement experience — all in one clean interface.",
    skills: ["UI Design", "UX Strategy", "User Flows", "Dashboard Design", "Interaction Design", "Prototyping"],
    results: ["Unified Finance Dashboard", "Smart UPI Payment Flow", "KPI-driven Spending Insights", "Secure Money Tracking"],
  },
  {
    id: 17,
    slug: "plant-based-meal-plan",
    title: "Plant-Based Meal Planning App",
    subtitle: "UX/UI Case Study",
    category: "Healthcare",
    categoryLabel: "Healthcare / Wellness",
    tags: ["UX/UI Design", "Health", "Mobile App"],
    description:
      "A plant-based meal planning application designed to help users discover healthy recipes, track nutrition, and plan meals effortlessly.",
    image: "/project%20assets/Everygreen-Cover.png",
    gallery: [],
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/246522999/Plant-Based-Meal-Planning-App-UXUI-Case-Study",
    challenge:
      "Users struggled to transition to a plant-based diet due to lack of recipe variety, difficult meal planning, and confusing nutritional tracking. They needed a unified solution.",
    responsibilities:
      "Designed the end-to-end user experience including onboarding, meal discovery, planner interface, and grocery list integration.",
    research:
      "Conducted interviews with 15 individuals attempting a plant-based diet. 80% reported that meal planning and finding reliable recipes were the biggest hurdles to maintaining the diet.",
    solution:
      "Created an intuitive app featuring personalized recipe recommendations, an automated weekly meal planner, and a smart grocery list generator that simplifies plant-based living.",
    skills: ["User Research", "Wireframing", "UI Design", "Prototyping"],
    results: ["Streamlined meal planning", "Automated grocery lists", "Personalized recipe engine"],
    featured: 3,
  },
  {
    id: 18,
    slug: "grocery-e-commerce",
    title: "Grocery E-Commerce Platform",
    subtitle: "Seamless Online Shopping",
    category: "E-Commerce",
    categoryLabel: "E-Commerce",
    tags: ["E-Commerce", "Web Design", "App"],
    description:
      "A comprehensive grocery e-commerce platform enhancing the online shopping experience with smart inventory, fast checkout, and personalized recommendations.",
    image: "/project-2.jpg",
    gallery: [],
    video: "https://www.youtube.com/embed/78bCyDFaxsE",
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "Prototyping"],
    challenge:
      "Shoppers found online grocery platforms clunky, with poor search functionality and tedious checkout processes leading to high cart abandonment rates.",
    responsibilities:
      "Led the redesign of the core shopping experience, focusing on product discovery, cart management, and a streamlined checkout flow.",
    research:
      "Analyzed cart abandonment data which revealed a 60% drop-off during the multi-step checkout. Users also reported difficulty finding specific staple items quickly.",
    solution:
      "Introduced a one-page checkout, predictive search, and personalized re-order lists based on past purchases, drastically reducing the time needed to complete a weekly shop.",
    skills: ["UX Strategy", "E-Commerce UX", "UI Design", "Interaction Design"],
    results: ["Reduced cart abandonment", "Faster checkout times", "Improved product discovery"],
    featured: 4,
  },
  {
    id: 99,
    slug: "logo-design-showcase",
    title: "Brand Logo Showcase",
    subtitle: "Identity & Marks Showcase",
    category: "Brand Identity",
    categoryLabel: "Brand Identity / Logo Design",
    tags: ["Branding", "Logo Design", "Visual Identity", "Vector Graphics"],
    description:
      "A presentation of premium logo marks and visual identities designed for modern startups, agencies, and enterprises.",
    image: "/brand-logos/Yowza-logo.png",
    gallery: [
      "/brand-logos/Yowza-logo.png",
      "/brand-logos/Avron-bgs.png",
      "/brand-logos/BC-R.png",
      "/brand-logos/Janny-point.png",
      "/brand-logos/Metrolink.png",
      "/brand-logos/Shehnai.png",
      "/brand-logos/kp.png",
      "/brand-logos/lone-app.png",
      "/brand-logos/msq.png",
      "/brand-logos/old-automotive.png",
      "/brand-logos/raise-fitness.png",
      "/brand-logos/rj-build.png",
      "/brand-logos/vishwashetra.png",
    ],
    year: "2025",
    role: "Visual & Identity Designer",
    tools: ["Figma", "Adobe Illustrator", "Photoshop"],
    challenge:
      "Creating memorable, scale-resilient, and concept-driven marks that represent a company's core values in a fraction of a second, across print and digital surfaces.",
    responsibilities:
      "Designed the core concept, custom typography, color theory applications, and responsive layout scaling for all 13 brand identities.",
    research:
      "Analysed market trends and brand landscapes. Balanced geometric symmetry with thematic storytelling to ensure uniqueness and high brand recall.",
    solution:
      "Developed an array of visual systems, including playful custom wordmarks, minimalist monograms, structural line art, and calligraphic symbols.",
    skills: ["Visual Design", "Logo Design", "Brand Systems", "Color Theory", "Vector Art"],
    results: ["13 unique identities", "100% vector scalability", "Multi-surface adaptability", "High brand recognition"],
  },
];

/** Projects shown on the home page, in `featured` order */
export const featuredProjects = projects
  .filter((p): p is Project & { featured: number } => p.featured !== undefined)
  .sort((a, b) => a.featured - b.featured);

/** Filter categories for /work, derived from the data so they never drift */
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getRelated(project: Project, count = 3) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  return Array.from({ length: count }, (_, i) => projects[(currentIndex + i + 1) % projects.length]);
}

/** The single next project, for prev/next case-study navigation. */
export function getNext(project: Project) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  return projects[(currentIndex + 1) % projects.length];
}

export function getYtId(url?: string) {
  if (!url) return null;
  const m = url.match(/embed\/([^?]+)/);
  return m ? m[1] : null;
}

export function ytThumb(ytId: string) {
  return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
}

export const logosMetadata = [
  { name: "Yowza", file: "/brand-logos/Yowza-logo.png", category: "SaaS Platform", concept: "Playful monogram combining 'Y' and a speech bubble." },
  { name: "Avron", file: "/brand-logos/Avron-bgs.png", category: "Corporate Services", concept: "Minimalist geometric identity signaling growth and structure." },
  { name: "BC-R", file: "/brand-logos/BC-R.png", category: "Automotive Tech", concept: "Interlinked bold monogram expressing speed and precision." },
  { name: "Janny Point", file: "/brand-logos/Janny-point.png", category: "Consulting", concept: "Dynamic arrow-point emblem conveying direction and strategy." },
  { name: "Metrolink", file: "/brand-logos/Metrolink.png", category: "Logistics & Transport", concept: "Connected geometric lines representing seamless transit routes." },
  { name: "Shehnai", file: "/brand-logos/Shehnai.png", category: "Event Management", concept: "Elegant calligraphy motif reflecting festive cultural music." },
  { name: "KP", file: "/brand-logos/kp.png", category: "Real Estate", concept: "Symmetrical typography forming an architectural logomark." },
  { name: "Lone App", file: "/brand-logos/lone-app.png", category: "Fintech Startup", concept: "Modern abstract icon evoking trust and singularity." },
  { name: "MSquare", file: "/brand-logos/msq.png", category: "Professional Services", concept: "Clean double-M geometry representing cleanliness and order." },
  { name: "Old Automotive", file: "/brand-logos/old-automotive.png", category: "Restoration Services", concept: "Vintage script mark embodying heritage and craftsmanship." },
  { name: "Raise Fitness", file: "/brand-logos/raise-fitness.png", category: "Health & Fitness", concept: "Forward-leaning active symbol denoting strength and elevation." },
  { name: "RJ Build", file: "/brand-logos/rj-build.png", category: "Construction & Dev", concept: "Bold blocks forming 'R' and 'J' to signify stable foundations." },
  { name: "Vishvashetra", file: "/brand-logos/vishwashetra.png", category: "Interior Design", concept: "Refined linear emblem detailing layout and spatial luxury." },
];
