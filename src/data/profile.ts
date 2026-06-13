/**
 * All site-level copy and personal data — bio, capabilities, experience,
 * education, socials. Pages and components read from here so copy edits
 * never require touching layout code.
 */
import type { IconType } from "react-icons";
import {
  FaBehance,
  FaDribbble,
  FaFigma,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

export const identity = {
  name: "Dev Shrimali",
  role: "Senior Product Designer",
  location: "Ahmedabad, Gujarat, India",
  email: "devloper.ds@gmail.com",
  resumeUrl: "/Dev_Shrimali_March_2026.pdf",
  yearsOfExperience: "7+",
};

export const heroSkills = {
  inner: ["UX Research", "Wireframing", "UI Design", "Prototyping"],
  outer: ["Design Systems", "Information Architecture", "Interaction Design", "Dev Handoff", "User Flows", "Usability Testing"],
};

export const stats = [
  { value: "7+", label: "Years of design" },
  { value: "19", label: "Case studies" },
  { value: "5", label: "Industries" },
  { value: "13", label: "Brand identities" },
];

export const capabilities = [
  {
    num: "01",
    title: "UX Research & Strategy",
    desc: "Turning real user insight into product direction — interviews, audits, and journey mapping that de-risk decisions before they get expensive.",
    points: ["User interviews", "Competitive audits", "Journey mapping", "Problem framing"],
  },
  {
    num: "02",
    title: "Architecture & Flows",
    desc: "Organising content and flows so people always know where they are — and where to go next. Structure first, pixels second.",
    points: ["Information architecture", "User flows", "Wireframing", "Low-fi prototyping"],
  },
  {
    num: "03",
    title: "Interface & Visual Design",
    desc: "Clean, consistent interfaces with clear hierarchy — designed to feel effortless, not empty. Every element earns its place.",
    points: ["UI design", "Visual systems", "Typography", "Responsive layouts"],
  },
  {
    num: "04",
    title: "Systems & Interaction",
    desc: "Reusable, documented components that keep teams fast — plus meaningful motion that guides attention instead of decorating it.",
    points: ["Design systems", "Component libraries", "Micro-interactions", "Prototyping"],
  },
];

export const experience = [
  {
    role: "Senior Product Designer",
    company: "HoomanX Technologies",
    dates: "Feb 2026 — Present",
    location: "Ahmedabad, Gujarat, India",
    skills: "Product Strategy, User Research, Design Systems, Interaction Design, Prototyping",
    current: true,
  },
  {
    role: "Senior UI/UX Designer",
    company: "EnlightVision Technologies Private Limited",
    dates: "Aug 2024 — Feb 2026",
    location: "Ahmedabad, Gujarat, India",
    skills: "User Research, Communication & Collaboration, Visual Design, Interaction Design, Prototyping",
    current: false,
  },
  {
    role: "Product Designer",
    company: "Konzept Solutions",
    dates: "Mar 2021 — Mar 2024",
    location: "Ahmedabad, Gujarat, India",
    skills: "User Research, Communication & Collaboration, Wireframing, Adobe XD, Design Systems",
    current: false,
  },
  {
    role: "Website & Graphic Designer",
    company: "VMG Software Solutions Pvt. Ltd.",
    dates: "Oct 2020 — Feb 2021",
    location: "Gandhinagar, Gujarat, India",
    skills: "User Research, Communication & Collaboration, Web Design, Graphic Design",
    current: false,
  },
  {
    role: "Graphic Designer",
    company: "Pixeltec Digital Wallpaper",
    dates: "Apr 2019 — Oct 2020",
    location: "Ahmedabad, Gujarat, India",
    skills: "User Research, Visual Design, Print Design, Branding, Custom Wallpapers",
    current: false,
  },
];

export const education = [
  {
    course: "Bachelor of Technology - BTech, Computer Science",
    institution: "U.V. Patel College of Engineering",
    dates: "2016 - 2018",
    details: "",
  },
  {
    course: "High School Diploma, Computer Science",
    institution: "Tolani Foundation, Gandhidham Polytechnic(SFI) 653",
    dates: "2011 - 2015",
    details: "Grade: A. Built a Tic Tac Toe Game (C#) and a static website (ASP.NET) in the final year.",
  },
  {
    course: "UI & UX Assessment",
    institution: "LearnTube.ai",
    dates: "Aug 2024",
    details: "Visual / UI Design & Interaction, Figma, Wireframing & Prototyping, UX Research.",
  },
  {
    course: "Learn Illustrator CC",
    institution: "LearnTube.ai",
    dates: "Aug 2024",
    details: "Adobe Illustrator, Vector Graphics, Illustration.",
  },
  {
    course: "UX UI Process & Adobe XD",
    institution: "Udemy",
    dates: "Nov 2020",
    details: "Visual / UI Design & Interaction, Wireframing & Prototyping, Adobe XD, UX Research.",
  },
  {
    course: "Zero To Mastery : Web Developer",
    institution: "Zero To Mastery Academy",
    dates: "Sep 2020",
    details: "Design Thinking, User Research, HTML5, GitHub, React.js.",
  },
];

export const facts = [
  { label: "Based in", value: "Ahmedabad, Gujarat, India" },
  { label: "Education", value: "B.Tech CS, U.V. Patel College / Zero To Mastery Academy" },
  { label: "Industries", value: "Fintech, Healthcare, SaaS, E-commerce, Travel" },
  { label: "Tools", value: "Figma, Adobe XD, Illustrator, After Effects, Webflow, HTML, CSS" },
];

export type Social = { label: string; href: string; icon: IconType };

export const socials: Social[] = [
  { label: "Behance", href: "https://www.behance.net/dev-shrimali", icon: FaBehance },
  { label: "Dribbble", href: "https://dribbble.com/dev-shrimali", icon: FaDribbble },
  { label: "Figma", href: "https://www.figma.com/@devuxin", icon: FaFigma },
  { label: "Github", href: "https://github.com/DevShrimali", icon: FaGithub },
  { label: "YouTube", href: "https://www.youtube.com/@dev-shrimali", icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-shrimali/", icon: FaLinkedinIn },
];

export const marqueeWords = [
  "UX Research",
  "Design Systems",
  "Prototyping",
  "Developer Handoff",
  "Information Architecture",
  "Interaction Design",
];
