"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { FiArrowLeft, FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiLayers } from "react-icons/fi";
import { FaBehance, FaGooglePlay } from "react-icons/fa6";

/* ─── FULL PROJECT DATA (15 projects, all local assets) ─── */
const projects = [
  {
    id: 1, slug: "transact-os",
    title: "TransactOS",
    subtitle: "Unified B2B Operations Dashboard",
    category: "SaaS / Dashboard",
    tags: ["B2B", "SaaS", "Dashboard", "Enterprise"],
    description: "A B2B SaaS dashboard that unifies user identity, inventory, and transaction management for ops, admin, and finance teams — all in one role-aware space.",
    image: "/project%20assets/532shots_so.png",
    gallery: [],
    year: "2024",
    role: "End-to-end UX — IA, User Flows, UI Design, Front-end",
    tools: ["Figma", "React", "Vercel", "HTML/CSS"],
    websiteUrl: "https://transact-os.vercel.app/",
    behanceUrl: "https://figma-design-dev.vercel.app/",
    behanceLabel: "Information architecture",
    challenge: "Operations teams, finance managers, and admins don't share the same tools or language. Inventory lives in one system, transactions in another, user access somewhere else entirely. This fragmentation causes errors, delays, and critical blind spots in day-to-day operations.",
    responsibilities: "I led end-to-end product design — from stakeholder interviews and information architecture, through user flow mapping, wireframing, and final high-fidelity UI. I also built the front-end prototype for live validation with enterprise users.",
    research: "Interviewed 8 ops, admin and finance professionals across 3 companies. Key finding: 100% switched between 3+ tools daily. Pain points centred on context-switching and lack of cross-module visibility — neither a UX nor a data problem, but a structural architecture problem.",
    solution: "Designed TransactOS as an OS-level dashboard where identity, inventory, and transactions exist in the same linked, live, role-aware space. Every module communicates. Every role sees only what it needs to act effectively.",
    skills: ["UX Research", "IA", "User Flows", "Wireframing", "UI Design", "Prototyping", "Front-end"],
    results: ["Unified identity layer", "Zero-friction transaction flow", "Scalable module architecture", "Role-based access UX"],
  },
  {
    id: 2, slug: "fintech-app",
    title: "Fintech Mobile App",
    subtitle: "Payments & Wallet Experience",
    category: "Fintech",
    tags: ["Fintech", "UX Research", "Mobile App", "Finance"],
    description: "A mobile-first fintech application simplifying peer-to-peer payments, wallet management, and transaction tracking with full security compliance.",
    image: "/project%20assets/financial-app.png",
    gallery: [],
    year: "2024",
    role: "UX Research, User Flow Design, UI Design, Interaction Design",
    tools: ["Figma", "Prototyping"],
    behanceUrl: "https://www.behance.net/gallery/203498267/UX-Case-Study-Fintech-App",
    videoUrl: "https://www.youtube.com/embed/VGJqwOx-qAY",
    challenge: "Users faced friction during everyday money transfers due to unclear flows, excessive steps, and lack of transparency around transaction status. Trust was eroded by confusing error states and non-descriptive feedback.",
    responsibilities: "Led UX research through user interviews and competitive audit. Designed all user flows, wireframes, and high-fidelity screens. Collaborated on handoff documentation with the dev team.",
    research: "5 user interviews revealed the biggest drop-off point: users abandoned transfers mid-flow when they couldn't tell if their action had been registered. Anxiety around money movement demanded immediate, clear feedback at every step.",
    solution: "Redesigned the payment flow with a 3-step model: initiate, confirm, done. Clear progress indicators, real-time feedback, and explicit error states reduced cognitive load and improved transaction confidence significantly.",
    skills: ["UX Research", "User Interviews", "User Flows", "Wireframing", "UI Design", "Interaction Design"],
    results: ["Reduced cognitive load", "Simplified 3-step payment flow", "Improved transaction confidence"],
  },
  {
    id: 3, slug: "event-ticket-booking",
    title: "Flight Ticket Booking App",
    subtitle: "UI/UX Case Study",
    category: "Travel / Booking",
    tags: ["Flight Booking", "Travel", "Mobile App"],
    description: "A comprehensive UI/UX case study for a flight ticket booking application, streamlining flight discovery, seat selection, and checkout.",
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
    challenge: "Users needed a faster way to search flights, compare prices, and manage bookings — but existing solutions often had cluttered interfaces, hidden fees, and complex multi-step checkouts.",
    responsibilities: "End-to-end UX from flight discovery flows to boarding pass management. Designed the search funnel, interactive seat selection, digital boarding pass system, and developer handoff docs.",
    research: "Competitive analysis of 6 flight booking apps. Key insight: users abandon at payment when uncertainty strikes — hidden baggage fees, unclear pricing, poor confirmation feedback. Checkout clarity was the biggest opportunity.",
    solution: "Streamlined a unified booking flow with clear flight details, transparent pricing, secure payment, and instant digital boarding pass delivery. A seamless app for the full travel experience.",
    skills: ["User Research", "User Flows", "Wireframing", "UI Design", "Prototyping", "Dev Handoff"],
    results: ["Streamlined search flow", "Transparent pricing experience", "Digital boarding pass access"],
  },
  {
    id: 4, slug: "auto-repair-brotomotive",
    title: "Auto Repair: Web Driving Sales",
    subtitle: "Brotomotive — A Local Business Website",
    category: "Web Design",
    tags: ["Auto Repair", "Web Design", "Local Business"],
    description: "A professional, responsive website connecting vehicle owners with reliable auto repair services. Digital hub for Brotomotive with clear services and easy contact.",
    image: "/project%20assets/brotomotive-cover.png",
    gallery: [
      "/project%20assets/brotomotive-laptop-mockup.png",
    ],
    year: "2024",
    role: "Web Designer & Developer",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    websiteUrl: "https://www.brotomotive.com.au/",
    challenge: "Brotomotive needed a digital presence to clearly communicate their auto repair services to local customers — and make it effortless for users to find service info and book appointments.",
    responsibilities: "Handled design, development and deployment. Designed all pages and components, wrote semantic HTML/CSS, implemented responsive breakpoints, and deployed on a shared hosting environment.",
    research: "Analysed local auto repair competitors. Found that 80% had outdated mobile experiences and buried contact info. Making service info and CTA instantly accessible on mobile was the primary opportunity.",
    solution: "Built a lightweight, high-performance site using semantic HTML, CSS, and Vanilla JS. Prioritised information hierarchy, mobile responsiveness, and direct CTAs so users can access location, services, and contact from any device in under 2 taps.",
    skills: ["Web Design", "HTML5/CSS3", "JavaScript", "Responsive Design", "SEO"],
    results: ["Professional online presence", "Optimised mobile experience", "Fast loading speeds"],
  },
  {
    id: 5, slug: "crypto-trading-app",
    title: "Crypto Trading App",
    subtitle: "Buy, Sell & Portfolio Management",
    category: "Fintech",
    tags: ["Fintech", "Crypto", "Mobile App", "UI Kit"],
    description: "A crypto trading application focused on real-time market tracking, secure transactions, and portfolio visibility for both new and experienced users.",
    image: "/project%20assets/crypto-app/cover.png",
    gallery: [],
    year: "2024",
    role: "UX Strategy, Dashboard Design, UI Design, Interaction Design",
    tools: ["Figma", "Auto Layout", "Prototyping"],
    behanceUrl: "https://www.behance.net/gallery/240563559/Crypto-Coin-App-UI-Kit",
    challenge: "Existing crypto apps overwhelmed users with dense data, volatile charts, and unclear transaction flows — creating anxiety instead of confidence when making financial decisions.",
    responsibilities: "Led UX strategy and visual design. Designed the full app UI system including dashboard, market view, portfolio tracker, and buy/sell flows.",
    research: "Surveyed 12 crypto users. Primary finding: 75% felt uncertain whether their order went through. Data density ranked as the top pain point — users wanted to see only what they needed to act, not everything at once.",
    solution: "Created a clean, structured interface that surfaces essential market data, guides clear buy/sell flows, and provides transparent, immediate transaction confirmation. Calming design reduces decision anxiety.",
    skills: ["UX Strategy", "UI Design", "Design Systems", "Auto Layout", "Prototyping"],
    results: ["Clean structured interface", "Clear buy/sell flows", "Transparent transaction feedback"],
  },
  {
    id: 6, slug: "cleaning-brand-msquare",
    title: "Cleaning Brand: A Visual Sparkle",
    subtitle: "MSquare Cleaning Services — Brand Identity & Website",
    category: "Brand Identity",
    tags: ["Web Design", "Branding", "Logo Design"],
    description: "A comprehensive brand identity and website for MSquare Cleaning Services, communicating reliability, quality, and eco-friendliness.",
    image: "/project%20assets/msquare/cover.png",
    gallery: [
      "/project%20assets/msquare/mockup-1.jpg",
      "/project%20assets/msquare/mockup-2.jpg",
    ],
    year: "2024",
    role: "Brand & Web Designer",
    tools: ["Figma", "Illustrator", "Next.js", "Tailwind CSS"],
    websiteUrl: "https://msquarecleaningservices.com/",
    behanceUrl: "https://www.behance.net/gallery/240115255/Cleaning-Services-Brand-Identity-Logo",
    challenge: "MSquare needed to stand out in a saturated cleaning services market and communicate trust, quality, and eco-friendliness — while making it easy for customers to get a quote for 7+ service types.",
    responsibilities: "Created the full brand identity including logo, colour system, and typography. Designed and developed the website including a service catalog and lead-capture quote flow.",
    research: "Analysed 10 competitor sites. Found that generic blue/white palettes dominated the space. Opportunity: a distinctive, fresh brand with a streamlined booking flow would immediately stand out and convert better.",
    solution: "Delivered a cohesive brand identity with a fresh visual system and a responsive website featuring a detailed service catalogue, intuitive 'Get a Quote' flow, and transparent service information to build confidence.",
    skills: ["Brand Identity", "Logo Design", "Web Design", "UI/UX", "Front-end Development"],
    results: ["Streamlined Booking/Quote System", "Integrated 7+ Service Categories", "Enhanced Brand Trust & Visibility", "Mobile-Optimised UX"],
  },
  {
    id: 7, slug: "furniture-ecommerce",
    title: "Furniture & Home Décor E-Commerce",
    subtitle: "A Modern Shopping Experience",
    category: "E-Commerce",
    tags: ["E-Commerce", "Web Design", "Furniture"],
    description: "A web-based e-commerce platform for furniture and home décor — visual, intuitive, and built for confident purchase decisions.",
    image: "/project%20assets/furniture-cover-new.png",
    gallery: [
      "/project%20assets/furniture-gallery-3.png",
      "/project%20assets/furniture-gallery-1.png",
      "/project%20assets/furniture-gallery-2.png",
    ],
    year: "2024",
    role: "IA, Wireframing, UI Design, Design System",
    tools: ["Figma", "Prototyping", "Design Systems"],
    behanceUrl: "https://www.behance.net/gallery/240056139/Furniture-Home-Dcor-Shopping-Experience",
    videoUrl: "https://www.youtube.com/embed/McOQzo-6PoA",
    challenge: "Users struggled to explore a large product catalogue efficiently and lacked confidence making purchase decisions due to poor visual hierarchy, weak filtering, and unclear product details.",
    responsibilities: "Designed the full IA, navigation system, product catalogue, filtering UX, product detail pages, and design system. Focused on reducing drop-off at the detail page stage.",
    research: "Heatmap analysis and user interviews with 6 online furniture shoppers revealed that 70% of drop-offs happened at the product detail page — not enough imagery, unclear dimensions, and no room context.",
    solution: "Redesigned with a visual-first approach: multiple high-quality product images, contextual room photos, clear dimension specs, and guided 'Add to Cart' flow. A structured filtering system accelerated product discovery.",
    skills: ["IA", "Wireframing", "UI Design", "E-Commerce UX", "Design Systems"],
    results: ["Visually-led product discovery", "Improved filtering system", "Higher detail page engagement"],
  },
  {
    id: 8, slug: "healthcare-app",
    title: "Healthcare App",
    subtitle: "Appointment Booking & Patient Records",
    category: "Healthcare",
    tags: ["Healthcare", "Medical", "App", "Telemedicine"],
    description: "A healthcare mobile app streamlining appointment scheduling and providing secure access to patient medical records.",
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
    challenge: "Patients abandoned the app mid-flow due to complex booking steps, unclear doctor availability, and anxiety around accessing sensitive medical data. Trust and privacy were existential UX concerns.",
    responsibilities: "Conducted user research with 8 patients and 3 doctors. Led product design from research to final handoff — including all flows for booking, record access, and notifications.",
    research: "Patient interviews highlighted: 'I never know if my appointment is confirmed.' The key insight: the absence of clear confirmation states was driving abandonment — not the number of steps.",
    solution: "Designed an intuitive booking experience with persistent confirmation states at every step. Clear navigation, structured record hierarchy, and privacy-focused patterns restored user confidence throughout.",
    skills: ["User Research", "Wireframing", "UI Design", "Usability Testing", "Design Handoff"],
    results: ["Intuitive booking experience", "Clear navigation architecture", "Privacy-focused UI patterns"],
  },
  {
    id: 9, slug: "interior-brand-vishva-kshetra",
    title: "Interior Brand: Designing Elegance",
    subtitle: "Vishva Kshetra — Branding & Website",
    category: "Brand Identity",
    tags: ["Interior Design", "Branding", "Web Design"],
    description: "Complete branding identity and website design for Vishva Kshetra, a premium interior designing firm.",
    image: "/project%20assets/vishva-kshetra-branding.jpg",
    gallery: [],
    year: "2023",
    role: "Brand & Web Designer",
    tools: ["Illustrator", "Photoshop", "HTML/CSS"],
    websiteUrl: "https://theme-interior-designer.netlify.app/",
    behanceUrl: "https://www.behance.net/gallery/205156817/VS-Branding-Brand-Identity",
    challenge: "Vishva Kshetra needed a brand identity that conveyed architectural precision and creative vision — distinguishing them from generic interior design firms with cookie-cutter logos.",
    responsibilities: "Created the logo system and full brand identity. Designed and developed the portfolio website. Also produced brochure layouts for print use.",
    research: "Audited 15 interior design brands. Found that the strongest performers used negative space and line-art to suggest both space and structure — aligned with what interior design communicates conceptually.",
    solution: "Designed a minimalist line-art logo depicting a house with interior architectural details. Extended the visual language to a clean, gallery-focused website and professional print brochure.",
    skills: ["Brand Identity", "Logo Design", "Web Design", "Print Design", "HTML/CSS"],
    results: ["Cohesive Brand Identity", "Professional Brochure Design", "Portfolio Website Launch"],
  },
  {
    id: 10, slug: "sports-news-app",
    title: "Sports Condensed",
    subtitle: "60-Word Fast Sports News & Gamification",
    category: "Sports",
    tags: ["Sports News", "Gamification", "Mobile App"],
    description: "A mobile app delivering sharp, 60-word sports news with a personalized feed, swipe-to-read UX, and an engaging 'Player of the Day' trivia game.",
    image: "/project%20assets/sport%20news/cover.png",
    gallery: [],
    year: "2023",
    role: "Feature Ideation, UX Flows, UI Design, Interaction Logic",
    tools: ["Figma", "Prototyping"],
    appStoreUrl: "https://play.google.com/store/apps/details?id=com.sportscondensed.news&hl=en_IN&pli=1",
    challenge: "Modern sports apps overwhelm users with bloated articles and clickbait, burying actual news. Additionally, news consumption alone often fails to build strong daily retention habits.",
    responsibilities: "Led end-to-end UX/UI design. Designed the core 60-word personalized feed, intuitive swipe-to-read mechanics, and the gamified 'Player of the Day' (POTD) feature.",
    research: "Analysis revealed users want fast, fact-packed news without filler. Habit loop analysis also highlighted that adding a daily trivia challenge drastically increases 7-day retention.",
    solution: "Created a clutter-free, personalized feed with an infinite-scroll swipe mechanic. Integrated the 'Player of the Day' trivia game using progressive hints to create a rewarding daily reason to return.",
    skills: ["UX Strategy", "Interaction Design", "Gamification", "UI Design"],
    results: ["Reduced reading time to < 10 mins", "Increased 7-day retention", "Streamlined personalized feeds"],
  },
  {
    id: 11, slug: "vr-gaming-experience",
    title: "VR Gaming Experience",
    subtitle: "Immersive Interaction Design",
    category: "Gaming",
    tags: ["VR", "Gaming", "Interaction Design"],
    description: "A virtual reality gaming concept focused on immersive spatial interaction and world-embedded UI systems.",
    image: "/project%20assets/vr-football.png",
    gallery: [
      "/project%20assets/vr-football/gallery-1.jpg",
      "/project%20assets/vr-football/gallery-2.jpg",
      "/project%20assets/vr-football/gallery-3.jpg",
    ],
    year: "2023",
    role: "Interaction Design, VR UI Elements, Experience Flow Definition",
    tools: ["Unity", "Figma", "Blender"],
    videoUrl: "https://www.youtube.com/embed/w8lNGT98gzk",
    behanceUrl: "https://www.behance.net/gallery/224975159/Immersive-VR-Football-Gaming-App-UIUX-Case-Study",
    challenge: "VR interfaces borrowed too heavily from 2D flat paradigms — overlaid menus broke immersion and made new users feel lost in 3D space without clear spatial context.",
    responsibilities: "Defined the full spatial interaction language. Designed world-embedded UI elements, controller interaction patterns, and the onboarding flow for new VR users.",
    research: "Tested 3 existing VR games with 6 users. Every user instinctively reached for physical space around them before resorting to controller menus — confirming that diegetic UI (embedded in the world) was the right direction.",
    solution: "Designed a fully diegetic UI system: interaction indicators embedded in the physical game world, spatial audio cues for feedback, and controller gestures that matched natural human motion — eliminating flat menu overlays entirely.",
    skills: ["VR/XR Design", "Spatial Interaction", "3D UI Design", "User Testing"],
    results: ["Fully diegetic UI system", "Intuitive spatial interactions", "Enhanced immersion & accessibility"],
  },
  {
    id: 12, slug: "banking-app",
    title: "Banking App: Secure and Simple",
    subtitle: "PersonalFinance, Simplified",
    category: "Fintech",
    tags: ["Fintech", "Mobile Banking", "Finance"],
    description: "A secure, user-friendly mobile banking app for seamless fund transfers, bill payments, and financial tracking on the go.",
    image: "/project%20assets/financial-app/cover.png",
    gallery: [
      "/project%20assets/financial-app/gallery-1.jpg",
      "/project%20assets/financial-app/gallery-2.jpg",
      "/project%20assets/financial-app/gallery-3.jpg",
    ],
    year: "2023",
    role: "UI/UX Designer",
    tools: ["Figma", "React Native", "TypeScript"],
    behanceUrl: "https://www.behance.net/gallery/224883413/Financial-Services-Mobile-App-UIUX-Case-Study",
    challenge: "Mobile banking users felt a deep tension between security and ease of use — they wanted both, but perceived them as mutually exclusive. Complex authentication flows reinforced this anxiety.",
    responsibilities: "Designed the full product: biometric auth flows, dashboard, transfer and payment screens, transaction history, and the design system across Android and iOS.",
    research: "Survey of 200 mobile banking users: 68% said they'd abandon a transfer if the process felt 'too complicated'. Biometric login scored highest in trust — users associated fingerprint/face with security rather than risk.",
    solution: "Built 'PayEasy' around biometric-first authentication, a single-glance dashboard, and scan-to-pay. Green UI accents signal financial growth and safety. Encrypted transactions wrapped in an interface that feels effortless.",
    skills: ["UI/UX Design", "Mobile Design", "Design Systems", "React Native Handoff"],
    results: ["Biometric Authentication", "Encrypted Payment Protocols", "Intuitive Dashboard", "Cross-platform Design"],
  },
  {
    id: 13, slug: "agritech-ai",
    title: "AgriTech AI: Smart Quality Control",
    subtitle: "Computer Vision for Agriculture",
    category: "AgriTech",
    tags: ["AgriTech", "AI/ML", "Dashboard", "SaaS"],
    description: "AI-Powered Agriculture Quality Control System with real-time defect detection, live monitoring, and actionable analytics.",
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
    challenge: "Manual quality inspection in agriculture is slow, inconsistent, and labor-intensive. Defects missed at inspection reached consumers — damaging brand trust and creating financial waste.",
    responsibilities: "Designed the full AI dashboard product experience — from live camera feed UI, defect classification display, analytics views, to the summary reporting screen for daily quality oversight.",
    research: "Field visits to 2 packing facilities revealed inspectors were managing multiple conveyor lines simultaneously. Cognitive overload was the root problem — they couldn't watch everything. The system needed to notify, not demand constant attention.",
    solution: "Designed an AI-driven dashboard with real-time defect flagging, sound alerts for high-severity items, and clean analytics charts for trend tracking. Deployed on Raspberry Pi for on-site edge processing.",
    skills: ["Product Design", "Dashboard UX", "Data Visualization", "Edge Computing UX"],
    results: ["Real-time Defect Detection", "Reduced Manual Effort", "Detailed Analytics", "Optimised Quality Control"],
  },
  {
    id: 14, slug: "ai-health-chatbot",
    title: "AI Chatbot: Your Health Buddy",
    subtitle: "MediAssist — 24/7 AI Healthcare Support",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Chatbot", "Mobile"],
    description: "An AI-powered healthcare assistant providing instant symptom checking, medical guidance, and appointment scheduling — 24/7.",
    image: "/project%20assets/ai-chatbot.png",
    gallery: [
      "/project%20assets/ai-chatbot/gallery-1.jpg",
      "/project%20assets/ai-chatbot/gallery-2.jpg",
      "/project%20assets/ai-chatbot/gallery-3.jpg",
    ],
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "OpenAI API", "React Native"],
    behanceUrl: "https://www.behance.net/gallery/234177525/AI-Chatbot-for-Healthcare-Support",
    videoUrl: "https://www.youtube.com/embed/Lq87TMxFI8w",
    challenge: "High demand on healthcare systems creates delays in patient support. People with urgent but non-emergency concerns had no reliable, immediate guide — leading to unnecessary ER visits and underuse of appropriate resources.",
    responsibilities: "Designed the full product: onboarding, AI conversation UI, symptom checker, appointment booking, medication reminders, and the handoff to human support.",
    research: "Interviews with 10 patients revealed a key behavioural pattern: people searched symptoms on Google before calling a doctor, but mistrusted the results. They wanted a trusted, conversational guide — not bare search results.",
    solution: "Built 'MediAssist' around a conversational AI interface with quick-suggestion chips for common symptoms, clear escalation to human doctors, and seamless appointment scheduling — all in one app.",
    skills: ["Conversational UX", "AI Interface Design", "Mobile Design", "Interaction Design"],
    results: ["Streamlined Patient Assistance", "Instant AI & Human Support", "24/7 Healthcare Access", "Symptom Checking Flow"],
  },
  {
    id: 15, slug: "job-portal-ai",
    title: "Job Portal: AI Career Matchmaker",
    subtitle: "JobNow — Smart Hiring & Career Growth",
    category: "SaaS",
    tags: ["Recruitment", "AI", "Mobile App"],
    description: "AI-Powered Job Portal connecting job seekers and employers with a simplified, smart application process.",
    image: "/project%20assets/job-portal-cover-new.png",
    gallery: [
      "/project%20assets/job-portal/gallery-1.png",
      "/project%20assets/job-portal/gallery-2.jpg",
      "/project%20assets/job-portal/gallery-3.jpg",
      "/project%20assets/job-portal/gallery-4.jpg",
    ],
    year: "2023",
    role: "UI/UX Designer",
    tools: ["Figma", "Illustrator", "Notion"],
    behanceUrl: "https://www.behance.net/gallery/224808223/AI-Powered-Job-Portal-App-for-Job-Seekers-Recruiters",
    videoUrl: "https://www.youtube.com/embed/4RxCHb3m8M4",
    challenge: "Job seekers faced a cluttered, confusing application process. Employers struggled to manage incoming resumes without context. Both sides were under-served by the same interface.",
    responsibilities: "Designed both the candidate and employer sides of the platform — including search, application, profile management, messaging, and the AI matching interface.",
    research: "Surveyed 30 job seekers and 10 recruiters. Job seekers: 'I apply and hear nothing.' Recruiters: 'I get 200 applications and can't find the right one.' The AI match layer had to solve both problems simultaneously.",
    solution: "Designed 'JobNow' with AI-match at the core: precise search filters, personalised job alerts, one-tap applications, and direct in-app messaging. Clean candidate cards for employers; clear application tracking for seekers.",
    skills: ["Two-sided Marketplace UX", "AI Interface Design", "Mobile Design", "Prototyping"],
    results: ["Seamless Profile Management", "Advanced Search & Filters", "Direct In-App Messaging", "Personalised Job Alerts"],
  },
  {
    id: 16, slug: "finance-management-app",
    title: "Finance Management App",
    subtitle: "Smart UPI, KPIs & Secure Money Tracking",
    category: "Fintech",
    tags: ["Fintech", "UI Design", "Mobile App", "UPI"],
    description: "A modern mobile finance management app built for fast, intuitive, and secure personal finance control — featuring UPI payments, KPI dashboards, and real-time money tracking.",
    image: "/project%20assets/finance-management/cover.jpg",
    gallery: [],
    year: "2025",
    role: "UI/UX Designer",
    tools: ["Figma", "Prototyping", "Auto Layout"],
    videoUrl: "https://www.youtube.com/embed/2F0TF7iKCgs",
    challenge: "Users managing personal finances across multiple UPI apps, bank accounts, and expense categories had no single, clear view of their money. Fragmentation led to overspending, missed payments, and financial anxiety.",
    responsibilities: "Led full UI/UX design — from information architecture and user flows through high-fidelity screens and interactive prototype. Designed the UPI payment flow, KPI dashboard, and transaction tracking views.",
    research: "Interviewed 8 young professionals managing finances on mobile. Key finding: 80% track expenses in a separate notes app because their banking apps don\'t show spending patterns. They needed a finance OS, not just a payment app.",
    solution: "Designed a unified finance management app with a clear KPI dashboard (income, spend, savings), smart UPI payment flows, category-based expense tracking, and a secure money movement experience — all in one clean interface.",
    skills: ["UI Design", "UX Strategy", "User Flows", "Dashboard Design", "Interaction Design", "Prototyping"],
    results: ["Unified Finance Dashboard", "Smart UPI Payment Flow", "KPI-driven Spending Insights", "Secure Money Tracking"],
  },
  {
    id: 17, slug: "plant-based-meal-plan",
    title: "Plant-Based Meal Planning App",
    subtitle: "UX/UI Case Study",
    category: "Healthcare / Wellness",
    tags: ["UX/UI Design", "Health", "Mobile App"],
    description: "A plant-based meal planning application designed to help users discover healthy recipes, track nutrition, and plan meals effortlessly.",
    image: "/project%20assets/Everygreen-Cover.png",
    gallery: [],
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Illustrator"],
    behanceUrl: "https://www.behance.net/gallery/246522999/Plant-Based-Meal-Planning-App-UXUI-Case-Study",
    challenge: "Users struggled to transition to a plant-based diet due to lack of recipe variety, difficult meal planning, and confusing nutritional tracking. They needed a unified solution.",
    responsibilities: "Designed the end-to-end user experience including onboarding, meal discovery, planner interface, and grocery list integration.",
    research: "Conducted interviews with 15 individuals attempting a plant-based diet. 80% reported that meal planning and finding reliable recipes were the biggest hurdles to maintaining the diet.",
    solution: "Created an intuitive app featuring personalized recipe recommendations, an automated weekly meal planner, and a smart grocery list generator that simplifies plant-based living.",
    skills: ["User Research", "Wireframing", "UI Design", "Prototyping"],
    results: ["Streamlined meal planning", "Automated grocery lists", "Personalized recipe engine"],
  },
  {
    id: 18, slug: "grocery-e-commerce",
    title: "Grocery E-Commerce Platform",
    subtitle: "Seamless Online Shopping",
    category: "E-Commerce",
    tags: ["E-Commerce", "Web Design", "App"],
    description: "A comprehensive grocery e-commerce platform enhancing the online shopping experience with smart inventory, fast checkout, and personalized recommendations.",
    image: "/project%20assets/placeholder.jpg",
    gallery: [],
    videoUrl: "https://www.youtube.com/embed/78bCyDFaxsE",
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "Prototyping"],
    behanceUrl: "wip",
    challenge: "Shoppers found online grocery platforms clunky, with poor search functionality and tedious checkout processes leading to high cart abandonment rates.",
    responsibilities: "Led the redesign of the core shopping experience, focusing on product discovery, cart management, and a streamlined checkout flow.",
    research: "Analyzed cart abandonment data which revealed a 60% drop-off during the multi-step checkout. Users also reported difficulty finding specific staple items quickly.",
    solution: "Introduced a one-page checkout, predictive search, and personalized re-order lists based on past purchases, drastically reducing the time needed to complete a weekly shop.",
    skills: ["UX Strategy", "E-Commerce UX", "UI Design", "Interaction Design"],
    results: ["Reduced cart abandonment", "Faster checkout times", "Improved product discovery"],
  },
];

type Project = typeof projects[number];

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

function getRelated(project: Project) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const next: Project[] = [];
  for (let i = 1; i <= 3; i++) {
    next.push(projects[(currentIndex + i) % projects.length]);
  }
  return next;
}

/* ─── COMPONENTS ─── */
function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#bef264] shrink-0">{n}</span>
      <div className="h-px bg-white/10 flex-1" />
      <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-700 shrink-0">{title}</span>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 bg-white/[0.03]">
      {label}
    </span>
  );
}

function InsightCard({ text, i }: { text: string; i: number }) {
  return (
    <div className="flex gap-4 py-5 border-b border-white/6 last:border-0">
      <span className="text-[10px] font-mono text-[#bef264] shrink-0 mt-0.5">0{i + 1}</span>
      <p className="text-sm text-neutral-300 leading-relaxed">{text}</p>
    </div>
  );
}

function ResultStat({ text }: { text: string }) {
  const words = text.split(" ");
  const stat = words[0];
  const label = words.slice(1).join(" ");
  const isStat = /^\d/.test(stat) || stat.length <= 3;

  return (
    <div className="border border-white/8 rounded-xl p-5 bg-white/[0.02]">
      {isStat && label ? (
        <>
          <p className="text-xl font-bold text-[#bef264] leading-none mb-1">{stat}</p>
          <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-500">{label}</p>
        </>
      ) : (
        <p className="text-sm text-neutral-300 font-medium leading-snug">{text}</p>
      )}
    </div>
  );
}

/* ─── LIGHTBOX ─── */
function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10 p-2"
      >
        <FiX size={22} />
      </button>

      {/* Counter */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
        >
          <FiChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
        >
          <FiChevronRight size={28} />
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-[#bef264] w-4" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── VIDEO COVER (click-to-play) ─── */
function VideoCover({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  // Extract YouTube video ID from embed URL
  const videoId = videoUrl.match(/embed\/([^?]+)/)?.[1] ?? "";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/8 bg-neutral-950 mb-12 group">
      {playing ? (
        <iframe
          src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          {/* Thumbnail */}
          <img
            src={thumbnail}
            alt={`${title} video thumbnail`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
          {/* Play button */}
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#bef264]/20 group-hover:border-[#bef264]/40 transition-all duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-white ml-1" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
          {/* Label */}
          <div className="absolute bottom-4 left-4">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">Design Walkthrough</span>
          </div>
        </>
      )}
    </div>
  );
}


export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProject(String(slug));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <p className="text-[11px] uppercase tracking-widest text-[#bef264]">404</p>
        <h1 className="text-4xl font-bold">Case study not found</h1>
        <Link href="/work" className="text-sm text-neutral-400 hover:text-white underline underline-offset-4">
          ← Back to work
        </Link>
      </main>
    );
  }

  const related = getRelated(project);
  const videoUrl = (project as any).videoUrl as string | undefined;

  /* ── Dynamic page title ── */
  useEffect(() => {
    document.title = `${project.title} — ${project.subtitle} | Dev Shrimali`;
    return () => { document.title = "Dev Shrimali — Senior UI/UX Designer"; };
  }, [project.title, project.subtitle]);

  /* ─── Research insights (split by sentence) ─── */
  const researchInsights = project.research
    ? project.research.split(". ").filter(Boolean).map((s) => s.trim().replace(/\.$/, ""))
    : [];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Sticky Subnav ── */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/work" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={13} />
            Back to Work
          </Link>
          <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-700">
            Case Study · {String(project.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      <article className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ════════════════════════ HEADER ════════════════════════ */}
        <header className="pt-20 pb-10 md:pt-32 md:pb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#bef264] bg-[#bef264]/8 border border-[#bef264]/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-[0.1em] px-2.5 py-1 border border-white/10 text-neutral-500 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-4 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-500 font-light mb-6">{project.subtitle}</p>
          <p className="text-base text-neutral-400 leading-relaxed max-w-2xl mb-10">{project.description}</p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            {"websiteUrl" in project && (project as any).websiteUrl && (
              <a href={(project as any).websiteUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#bef264] transition-colors">
                <FiExternalLink size={13} /> Live Site
              </a>
            )}
            {"appStoreUrl" in project && (project as any).appStoreUrl && (
              <a href={(project as any).appStoreUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A73E8] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#2083FF] transition-colors">
                <FaGooglePlay size={13} /> Get it on Play Store
              </a>
            )}
            {"behanceUrl" in project && (project as any).behanceUrl && (
              <a 
                href={(project as any).behanceUrl === "wip" ? "#" : (project as any).behanceUrl} 
                target={(project as any).behanceUrl === "wip" ? "_self" : "_blank"} 
                rel="noopener noreferrer"
                onClick={(e) => {
                  if ((project as any).behanceUrl === "wip") {
                    e.preventDefault();
                    alert("Work in progress");
                  }
                }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                  (project as any).behanceLabel === "Information architecture"
                    ? "bg-neutral-900 border border-white/20 text-white hover:bg-[#bef264] hover:text-black hover:border-[#bef264]"
                    : "bg-[#0057ff] text-white hover:bg-[#0046cc]"
                }`}
              >
                {(project as any).behanceLabel === "Information architecture" ? (
                  <FiLayers size={13} className="shrink-0" />
                ) : (
                  <FaBehance size={13} className="shrink-0" />
                )}
                <span className="truncate max-w-[200px]">{(project as any).behanceLabel || "Behance Case Study"}</span>
              </a>
            )}
          </div>
        </header>

        {/* META GRID HAS BEEN MOVED BELOW GALLERY */}
        {/* ════════════════════════ HERO: VIDEO or IMAGE ════════════════════════ */}
        {videoUrl ? (
          <VideoCover videoUrl={videoUrl} title={project.title} />
        ) : (
          <div className="w-full rounded-2xl overflow-hidden border border-white/8 mb-12">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* ════════════════════════ GALLERY (below cover) ════════════════════════ */}
        {project.gallery.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6 border-b border-white/8 pb-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Project Gallery</p>
              <span className="text-[10px] text-neutral-700">{project.gallery.length} screens — click to expand</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="relative group aspect-[4/3] overflow-hidden rounded-xl border border-white/8 bg-neutral-900 cursor-zoom-in"
                >
                  <img
                    src={img}
                    alt={`${project.title} — Screen ${String(i + 1).padStart(2, "0")}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      View
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[9px] font-mono text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {lightboxIndex !== null && (
          <Lightbox
            images={project.gallery as string[]}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}

        {/* ════════════════════════ META GRID ════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/8 rounded-2xl divide-x divide-y md:divide-y-0 divide-white/8 mb-20">
          {[
            { label: "Role", value: project.role },
            { label: "Year", value: project.year },
            { label: "Tools", value: project.tools.join(", ") },
            { label: "Category", value: project.category },
          ].map(({ label, value }) => (
            <div key={label} className="p-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2">{label}</p>
              <p className="text-sm font-medium text-white leading-snug">{value}</p>
            </div>
          ))}
        </div>

        {/* ════════════════════════ CASE STUDY NARRATIVE ════════════════════════ */}
        <div className="max-w-3xl mx-auto space-y-28 mb-32">

          {/* 01 — Problem & Context */}
          <section>
            <SectionLabel n="01" title="Problem & Context" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Challenge</h2>
            <p className="text-base md:text-lg text-neutral-400 leading-[1.8]">{project.challenge}</p>
          </section>

          {/* 02 — Role & Responsibilities */}
          <section>
            <SectionLabel n="02" title="Role & Responsibilities" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">My Role</h2>
            <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-8">
              {(project as any).responsibilities ?? project.role}
            </p>
            <div className="flex flex-wrap gap-2">
              {((project as any).skills as string[] | undefined)?.map((s: string) => <SkillPill key={s} label={s} />)}
            </div>
          </section>

          {/* 03 — Research & Insights */}
          <section>
            <SectionLabel n="03" title="Research & Insights" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What I Found</h2>
            <div className="border-t border-white/8">
              {researchInsights.slice(0, 4).map((insight, i) => (
                <InsightCard key={i} text={insight} i={i} />
              ))}
            </div>
          </section>

          {/* 04 — Final Solution & Impact */}
          <section>
            <SectionLabel n="04" title="Final Solution & Impact" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Solution</h2>
            <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-12">{project.solution}</p>

            {project.results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.results.map((r, i) => <ResultStat key={i} text={r} />)}
              </div>
            )}
          </section>
        </div>



        {/* ════════════════════════ RELATED PROJECTS ════════════════════════ */}
        {related.length > 0 && (
          <div className="border-t border-white/8 pt-20 pb-28">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-2">More work</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Next Projects</h2>
              </div>
              <Link href="/work" className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 hover:text-[#bef264] transition-colors hidden md:block">
                View all →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/work/${rel.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-neutral-900 border border-white/6">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        View Case
                      </span>
                    </div>
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#bef264] mb-1">{rel.category}</p>
                  <h3 className="text-base font-bold tracking-tight group-hover:text-[#bef264] transition-colors duration-300 leading-snug">{rel.title}</h3>
                  <p className="text-xs text-neutral-600 mt-1">{rel.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

      {/* ── Footer bar ── */}
      <div className="border-t border-white/5 px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/work" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors group">
            <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>
          <p className="text-[11px] uppercase tracking-widest text-neutral-700">© 2026 Dev Shrimali</p>
        </div>
      </div>
    </main>
  );
}
