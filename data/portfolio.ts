export const profile = {
  fullName: "Saadika Shaikh",
  name: "Saadika",
  role: "Software Developer - Frontend",
  location: "Mumbai, India",
  education: "BCA · KPB Hinduja College of Commerce, YCMOU",
  about:
    "Frontend Engineer with 1.6+ years of experience building scalable web applications and enterprise FinTech solutions using JavaScript, React.js, Next.js, and TypeScript. Experienced in frontend architecture, API integration, and team leadership, with a strong focus on clean code, performance, and creating seamless user experiences.",
  email: "shaikhsaadika@email.com", 
  github: "https://github.com/saadikashaikh", 
  linkedin: "https://www.linkedin.com/in/saadikashaikh",
  resume: "/Saadika Shaikh Resume.pdf", 
  photo: "/profile.png", 
};

export const stats = [
  { value: "1.6+", label: "years building for the web", color: "bg-sun" },
  { value: "Lead", label: "on an enterprise FinTech product", color: "bg-coral" },
  { value: "JavaScript", label: "React.js · Next.js · TypeScript · Tailwind", color: "bg-sky" },
];

export const highlights = [
  "Ship production-ready *React* and *Next.js* apps.",
  "Build fast, responsive UIs with *Tailwind CSS*.",
  "Lead a team and keep *code quality* high.",
  "Work with real *FinTech* data and business flows.",
  "Redesign *e-commerce* sites on WordPress & WooCommerce.",
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "MaterialUI", "PrimeReact"] },
  { title: "CMS & E-commerce", items: ["WordPress", "WooCommerce", "Elementor"] },
  { title: "Digital Marketing", items: ["SEO", "Keyword Research", "Content Planning", "Social Media Management"] },
];

export const skills = skillGroups.flatMap((g) => g.items);

export const experience = [
  {
    role: "Frontend Developer Lead",
    company: "Taxosmart",
    period: "Dec 2024 – June 2026",
    color: "bg-lime",
    points: [
      "Led frontend development for an Enterprise Vendor Payment & Procurement Platform (React.js + SpringBoot) architected the website structure and reusable UI component libraries, integrated pages with server-side REST APIs and JSON data, and collaborated directly with clients to align technical delivery with business requirements.",
      "Built and maintained a company-wide internal content management platform from scratch, developing semantic page structures, responsive layouts, rich-text editing, and publishing workflows, replacing manual database processes with a scalable, cross-browser-tested tool adopted across all teams.",
      "Migrated the company website from React.js to Next.js, applying semantic web best practices and Incremental Static Regeneration (ISR) while optimizing NGINX-based deployment pipelines, which eliminated manual release cycles and improved SEO and cross-browser performance.",
      "Collaborated on an Enterprise Litigation Management Platform - participated in client requirement gathering, development, testing, and cross-functional issue resolution to ensure timely feature delivery."
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Sahil Plastics",
    period: "Nov 2023 – March 2024",
    color: "bg-sun",
    points: [
      "Implemented on-page SEO across the website: meta titles and descriptions, headings, internal linking and content optimization.",
      "Managed Conducted keyword research and planning to identify high-intent search terms, and mapped them to pages and blog topics to improve organic visibility.",
      "Wrote and published SEO-focused blog posts on WordPress, aligned with the keyword plan and target audience.",
      "Managed and updated the WooCommerce store, including product listings, descriptions and categories, keeping content search-friendly.",
      "Created and scheduled social media content to grow brand presence and drive traffic to the website."
    ],
  },
];

export type Project = {
  title: string;
  tags: string[];
  points: string[];
  color: string; // Tailwind bg class for the card
  live?: string;
  repo?: string;
  note?: string;
};


export const projects: Project[] = [
  {
    title: "Vendor Payment System",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    points: [
      "Enterprise FinTech platform designed to streamline vendor management, procurement, payment processing and approval workflows.",
      "Led frontend development, coordinated tasks, and contributed to UI architecture and reusable component design.",
      "Integrated backend APIs and developed responsive interfaces for complex business workflows and dashboards.",
    ],
    color: "bg-lilac",
    note: "Private enterprise project",
  },
  {
    title: "Content Management System",
    tags: ["React.js", "JavaScript", "REST APIs", "Rich Text Editor"],
    points: [
      "Developed an internal content management platform for creating, editing and publishing website content.",
      "Implemented rich-text editing, media uploads and content management workflows.",
      "Built reusable UI components and streamlined content publishing for company-wide use.",
      "Helped in implementing SEO practice and eliminating a recurring manual release dependency."
    ],
    color: "bg-coral",
    note: "Private internal project",
  },
  {
    title: "Sharda Sewing Website Redesign",
    tags: ["WordPress", "WooCommerce", "Elementor"],
    points: [
      "Redesigned an existing e-commerce website with a focus on usability, visual consistency and product discovery.",
      "Improved homepage, product category and product detail page layouts.",
      "Worked on shop-by-need categories, featured product cards and trust-building UI elements.",
    ],
    color: "bg-sky",
    live: "", // Add live website URL when ready
  },
];
