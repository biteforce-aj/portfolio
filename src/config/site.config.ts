// All business content lives here. Components read from `siteConfig` only.

export type Link = { label: string; href: string };
export type ImageRef = { src: string; alt: string; width: number; height: number };
export type SocialPlatform = "instagram" | "facebook" | "x" | "linkedin" | "youtube" | "tiktok";

export type ProjectStatus = "live" | "coming-soon" | "concept";
export type ProjectTag = "Web" | "UI/UX" | "Graphic design" | "System";
/** Drawn mock screens in `ui/mocks`, used as covers until real screenshots exist. */
export type MockScreen = "wireframe" | "wmen" | "site-starter" | "soon";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  role: string;
  /** Short label for the work index row, e.g. "Web design & build". */
  category: string;
  year: string;
  tags: ProjectTag[];
  /** Real image cover; falls back to `preview` when absent. */
  cover?: ImageRef;
  preview?: MockScreen;
  /** "coming-soon" projects show no client name, screenshot or link. */
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  /** Internal page for projects without a case study, e.g. "/graphic-design". */
  href?: string;
  featured: boolean;
  hasCaseStudy: boolean;
  /** Shown on the case study when parts of the work belong to the client. */
  credit?: string;
}

export interface SiteConfig {
  brand: { name: string; tagline: string; logo: ImageRef; favicon: string };
  nav: { links: Link[]; cta: Link };
  person: {
    name: string;
    fullName: string;
    /** Shown in the portrait frame while there is no photo. */
    initials: string;
    role: string;
    location: string;
    /** Short form for the status bar, e.g. "Lagos, NG". */
    locationShort: string;
    /** IANA zone for the live clock. */
    timeZone: string;
    timeZoneLabel: string;
    workStyle: string;
    availability: string;
    availabilityShort: string;
    /** Status bar "Now:" line. Leave empty to hide. */
    now?: string;
    cvPath: string;
    /** Portrait. Leave unset to show `initials` in the annotated frame. */
    photo?: ImageRef;
    linkedin: string;
    github: string;
  };
  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    primaryCta: Link;
    secondaryCta?: Link;
    image?: ImageRef;
    stack: string[];
    compare: {
      url: string;
      caption: string;
      hint: string;
      sliderLabel: string;
      beforeLabel: string;
      afterLabel: string;
      cursorName: string;
    };
  };
  home: {
    credentials: { label: string; items: string[] };
    work: { label: string; title: string; more: Link };
    services: { label: string; title: string; text: string; more: Link };
    about: {
      label: string;
      quote: string;
      text: string;
      facts: { label: string; value: string }[];
      more: Link;
      cvLabel: string;
    };
    contact: { label: string; title: string; titleAccent: string };
  };
  projects: Project[];
  /** Cursor bubble labels on the work index. */
  workCtas: { caseStudy: string; live: string; repo: string; soon: string; view: string };
  work: { title: string; intro: string; filterLabel: string; allLabel: string; filters: ProjectTag[] };
  services: { title: string; text: string; icon: string; tags: string }[];
  process: { step: string; text?: string }[];
  quote: { title: string; button: Link; whatsappLabel: string; whatsappMessage: string; priceFrom?: string };
  about: { title: string; story: string[] };
  experience: { role: string; org: string; location: string; period: string; points: string[] }[];
  education: { degree: string; school: string; year: string; detail: string }[];
  skills: { group: string; items: string[] }[];
  graphics: ImageRef[];
  messages: {
    comingSoon: string;
    emailCopied: string;
    emailSelected: string;
    copy: string;
    copied: string;
    cvMissing: string;
  };
  footer: { credit: string; backToTop: string };
  /** Interface labels shared by several sections. */
  ui: {
    menu: string;
    close: string;
    scroll: string;
    nowLabel: string;
    newTab: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  /** Copy inside the drawn mock screens (ui/mocks). */
  mocks: {
    wireframe: { labels: { nav: string; eyebrow: string; heading: string; buttons: string; image: string }; selection: string };
    wmen: {
      logo: string;
      logoAccent: string;
      logoTail: string;
      logoSub: string;
      nav: string[];
      eyebrow: string;
      heading: string;
      headingAccent: string;
      text: string;
      primary: string;
      secondary: string;
      badge: string[];
      partners: string[];
    };
    siteStarter: {
      brand: string;
      nav: string[];
      cta: string;
      eyebrow: string;
      heading: string[];
      text: string;
      primary: string;
      secondary: string;
    };
    soon: { title: string; label: string };
  };
  features: {
    title: string;
    intro?: string;
    /** `icon` is a lucide-react icon name, e.g. "Sparkles". */
    items: { icon: string; title: string; text: string }[];
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role?: string; avatar?: ImageRef }[];
  };
  faq: { title: string; items: { question: string; answer: string }[] };
  stats: { items: { value: string; label: string }[] };
  logos: { title?: string; items: ImageRef[] };
  gallery: { title: string; items: ImageRef[] };
  cta: { title: string; text: string; button: Link };
  notFound: { title: string; text: string; button: Link };
  contact: {
    title: string;
    intro?: string;
    email: string;
    phone?: string;
    /** International format, e.g. "+15550142233". Leave empty to hide the WhatsApp button. */
    whatsapp?: string;
    address?: string;
    mapEmbedUrl?: string;
    hours?: { days: string; time: string }[];
  };
  socials: { platform: SocialPlatform; url: string }[];
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    description: string;
    ogImage: string;
    siteUrl: string;
    locale: string;
  };
}

// [Export the best 6–9 flyers and social graphics as PNG/JPG into public/images/graphics/]
const graphics: ImageRef[] = [
  { src: "/images/gallery-1.webp", alt: "[Graphic design piece 1 — replace with export]", width: 1200, height: 900 },
  { src: "/images/gallery-2.webp", alt: "[Graphic design piece 2 — replace with export]", width: 1200, height: 900 },
  { src: "/images/gallery-3.webp", alt: "[Graphic design piece 3 — replace with export]", width: 1200, height: 900 },
];

export const siteConfig: SiteConfig = {
  brand: {
    name: "Joshua Anderson",
    tagline: "UI/UX Designer & Front-End Developer",
    logo: { src: "/images/logo.svg", alt: "Joshua Anderson", width: 40, height: 40 },
    favicon: "/favicon.ico",
  },

  nav: {
    links: [
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Let's talk", href: "/contact" },
  },

  person: {
    name: "Joshua Anderson",
    fullName: "Joshua Chimzaram Anderson",
    initials: "JA",
    role: "UI/UX Designer & Front-End Developer",
    location: "Lagos, Nigeria",
    locationShort: "Lagos, NG",
    timeZone: "Africa/Lagos",
    timeZoneLabel: "WAT",
    workStyle: "Lagos, Nigeria — working worldwide",
    availability: "Available for freelance & full-time roles",
    availabilityShort: "Available for work",
    now: "building site-starter v1",
    cvPath: "/cv/Joshua-Anderson-CV.pdf", // [Add the design & web development CV at public/cv/]
    // photo: { src: "/images/joshua.jpg", alt: "Portrait of Joshua Anderson", width: 1000, height: 1240 },
    linkedin: "https://www.linkedin.com/in/joshua-anderson-773844288",
    github: "https://github.com/biteforce-aj",
  },

  hero: {
    title: "Joshua Anderson",
    subtitle:
      "I design and build bold, fast websites — from Figma to live. Backed by a Computer Science degree and two years of training AI.",
    primaryCta: { label: "Need a website?", href: "/services" },
    secondaryCta: { label: "Hiring? See my work", href: "/work" },
    stack: ["Figma", "Next.js", "Vercel"],
    compare: {
      url: "wmenleadingchange.com",
      caption: "W+Men Leading Change",
      hint: "Drag to compare",
      sliderLabel: "Compare the Figma design with the live site",
      beforeLabel: "Figma",
      afterLabel: "Live",
      cursorName: "Joshua",
    },
  },

  home: {
    credentials: {
      label: "Previously",
      items: ["Ecobank Nigeria — IT", "Turing", "Mercor", "micro1", "B.Sc. Computer Science, FUTO · 2:1"],
    },
    work: {
      label: "Selected work",
      title: "Live, launching & in the lab.",
      more: { label: "See all work", href: "/work" },
    },
    services: {
      label: "Services",
      title: "What I can do for you.",
      text: "From a single landing page to a full website: designed, built and launched by one person.",
      more: { label: "Services & process", href: "/services" },
    },
    about: {
      label: "About",
      quote: "I care about the details people feel but rarely notice.",
      text: "I'm Joshua, a UI/UX designer and front-end developer with a Computer Science degree. I design in Figma and build with Next.js and Tailwind, so what clients approve is exactly what goes live. Two years of evaluating AI models for Turing, Mercor and micro1 taught me to look closely and sweat the small stuff.",
      facts: [
        { label: "Education", value: "B.Sc. Computer Science, FUTO — Second Class Upper" },
        { label: "Experience", value: "Freelance design & development · Ecobank Nigeria IT · AI evaluation" },
        { label: "Toolkit", value: "Figma, Next.js, Tailwind CSS, Illustrator, Photoshop" },
        { label: "Based in", value: "Lagos, Nigeria — working worldwide" },
      ],
      more: { label: "More about me", href: "/about" },
      cvLabel: "Download CV",
    },
    contact: { label: "Contact", title: "Let's build something", titleAccent: "considered" },
  },

  projects: [
    {
      slug: "wmen-leading-change",
      title: "W+Men Leading Change",
      summary:
        "A leadership coaching, development and consulting organisation focused on inclusive leadership.",
      role: "UI/UX design and front-end development of the whole website.",
      category: "Web design & build",
      year: "2025",
      tags: ["Web", "UI/UX"],
      preview: "wmen",
      status: "live",
      liveUrl: "https://www.wmenleadingchange.com",
      // figmaUrl: "[Figma link]",
      featured: true,
      hasCaseStudy: true,
      credit: "The logo and brand marks were provided by the client. My work is the website design and build.",
    },
    {
      slug: "site-starter",
      title: "Site Starter",
      summary:
        "One codebase that every client site starts from. Design tokens for colour, type and spacing; all content in one config file; shared, accessible components; light and dark mode. Rebranding a site means editing two files.",
      role: "Design system, components and code. Next.js, TypeScript, Tailwind CSS, deployed on Vercel.",
      category: "Design system & code",
      year: "2026",
      tags: ["System", "Web"],
      preview: "site-starter",
      status: "live",
      liveUrl: "https://site-starter-eta.vercel.app",
      repoUrl: "https://github.com/biteforce-aj/site-starter",
      featured: true,
      hasCaseStudy: false,
    },
    {
      slug: "agricultural-export-brand",
      title: "Agricultural export brand",
      summary: "Agricultural export brand — launching soon.",
      role: "Web design & build",
      category: "Client — launching soon",
      year: "Soon",
      tags: ["Web", "UI/UX"],
      preview: "soon",
      status: "coming-soon",
      featured: true,
      hasCaseStudy: false,
    },
    {
      slug: "luxury-lifestyle-brand",
      title: "Luxury lifestyle brand",
      summary: "Luxury lifestyle brand — launching soon.",
      role: "Web design & build",
      category: "Client — launching soon",
      year: "Soon",
      tags: ["Web", "UI/UX"],
      preview: "soon",
      status: "coming-soon",
      featured: true,
      hasCaseStudy: false,
    },
    {
      slug: "graphic-design",
      title: "Graphic design",
      summary: "A gallery of flyers and social graphics.",
      role: "Adobe Illustrator, Adobe Photoshop, Canva",
      category: "Flyers & social graphics",
      year: "Ongoing",
      tags: ["Graphic design"],
      cover: graphics[0],
      status: "live",
      href: "/graphic-design",
      featured: false,
      hasCaseStudy: false,
    },
  ],

  workCtas: {
    caseStudy: "View case study",
    live: "View live site ↗",
    repo: "View on GitHub ↗",
    soon: "Launching soon",
    view: "View",
  },

  work: {
    title: "Work",
    intro: "Live, launching & in the lab.",
    filterLabel: "Filter projects",
    allLabel: "All",
    filters: ["Web", "UI/UX", "Graphic design", "System"],
  },

  services: [
    {
      title: "Website design & build",
      text: "From Figma design to a fast, live, mobile-friendly site.",
      icon: "Globe",
      tags: "Figma · Next.js · Vercel",
    },
    {
      title: "UI/UX design",
      text: "App and website screens, prototypes and design systems in Figma.",
      icon: "PenTool",
      tags: "Figma · Prototyping",
    },
    {
      title: "Website redesigns",
      text: "Modernise an existing site without losing what works.",
      icon: "Zap",
      tags: "Audit · Design · Build",
    },
    {
      title: "Graphic design",
      text: "Flyers, social media graphics and event materials.",
      icon: "Sparkles",
      tags: "Illustrator · Photoshop · Canva",
    },
  ],

  process: [{ step: "Discover" }, { step: "Design (Figma)" }, { step: "Build" }, { step: "Launch & support" }],

  quote: {
    title: "Get a quote",
    button: { label: "Get a quote", href: "/contact" },
    whatsappLabel: "Chat on WhatsApp",
    whatsappMessage: "Hi Joshua, I'd like a quote for a website.",
    // priceFrom: "Projects from ₦[___]",
  },

  about: {
    title: "About",
    story: [
      "I'm Joshua, a UI/UX designer and front-end developer based in Lagos. I studied Computer Science at the Federal University of Technology, Owerri, graduating with Second Class Upper in 2025. [How you got into design — 1–2 sentences.]",
      "I design in Figma and build with Next.js and Tailwind, so what clients approve is what goes live. Before and alongside design work, I've spent two years training and evaluating AI models for teams including Turing (on an NVIDIA project), Mercor and micro1 — work that taught me to look closely, follow detail, and think about how people actually use what I build.",
      "[What you care about in your work — e.g. sites that load fast on mobile data, design that makes small organisations look as serious as they are.]",
    ],
  },

  experience: [
    {
      role: "UI/UX Designer & Front-End Developer (Freelance)",
      org: "Freelance",
      location: "Remote / Lagos",
      period: "Late 2024 – Present",
      points: [],
    },
    {
      role: "AI Trainer & Evaluator (Contract)",
      org: "Turing (NVIDIA project), Mercor, micro1, Atlas Capture",
      location: "Remote",
      period: "[confirm: start year] – 2026",
      points: ["1,000+ evaluation and annotation tasks.", "91% quality score on Atlas Capture."],
    },
    {
      role: "IT Support Intern",
      org: "Ecobank Nigeria",
      location: "Head Office, Lagos Island",
      period: "[month year – month year] (4 months)",
      points: [
        "Resolved hardware and software issues for staff, including Microsoft Teams and other office compliance apps.",
        "Installed and configured Windows.",
        "Diagnosed and fixed hardware failures and repaired laptops.",
        "Troubleshot LAN connectivity issues, tracing port failures back to the server room.",
      ],
    },
    {
      role: "Virtual Assistant",
      org: "Silhouette Travels & Tours",
      location: "Remote",
      period: "2022 – [confirm end]",
      points: [],
    },
  ],

  education: [
    {
      degree: "B.Sc. Computer Science",
      school: "Federal University of Technology, Owerri (FUTO)",
      year: "2025",
      detail: "Second Class Upper (2:1) · CGPA 3.62/5.00",
    },
  ],

  skills: [
    { group: "Design", items: ["Figma", "UI/UX design", "Wireframing", "Prototyping", "Design systems"] },
    {
      group: "Front-end",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git & GitHub", "Vercel", "Netlify"],
    },
    { group: "Graphic design", items: ["Adobe Illustrator", "Adobe Photoshop", "Canva"] },
    { group: "3D & video", items: ["Blender", "OBS Studio", "InVideo AI"] },
    { group: "AI", items: ["AI output evaluation", "Prompt design", "Quality assurance"] },
    { group: "IT support", items: ["Windows installation", "Hardware troubleshooting", "Networking basics"] },
  ],

  graphics,

  messages: {
    comingSoon: "This client hasn't launched yet. The case study goes live with the site.",
    emailCopied: "Email copied",
    emailSelected: "Email selected. Press Ctrl+C to copy.",
    copy: "Copy",
    copied: "Copied",
    cvMissing: "CV download coming soon.", // [Remove once public/cv/Joshua-Anderson-CV.pdf exists]
  },

  footer: {
    credit: "Designed in Figma · Built with Next.js",
    backToTop: "Back to top ↑",
  },

  ui: {
    menu: "Menu",
    close: "Close",
    scroll: "Scroll ↓",
    nowLabel: "Now:",
    newTab: "(opens in a new tab)",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },

  mocks: {
    wireframe: {
      labels: {
        nav: "Nav / Logo",
        eyebrow: "Hero / Eyebrow",
        heading: "Hero / Heading — 36 / Medium",
        buttons: "Button / Primary · Ghost",
        image: "Image / Collage",
      },
      selection: "Heading · 278 × 72",
    },
    wmen: {
      logo: "W",
      logoAccent: "+",
      logoTail: "MEN",
      logoSub: "LEADING CHANGE",
      nav: ["HOME", "ABOUT", "SERVICES"],
      eyebrow: "OUR PARTNERS",
      heading: "Change is never a",
      headingAccent: "solo effort.",
      text: "Behind every leader we train is a network of organisations who believe inclusive leadership transforms institutions and communities.",
      primary: "See our work together",
      secondary: "Become a partner",
      badge: ["Stronger", "together"],
      partners: ["MARCFORTÉ", "WILAN", "asido", "AGHeS", "BYC"],
    },
    siteStarter: {
      brand: "Fieldnote Studio",
      nav: ["Services", "Work", "About"],
      cta: "Contact",
      eyebrow: "FIELDNOTE STUDIO",
      heading: ["A website that works", "as hard as you do"],
      text: "We design and build fast, accessible websites that turn visitors into customers.",
      primary: "Start a project →",
      secondary: "See our work",
    },
    soon: { title: "Client under wraps", label: "Launching soon" },
  },

  features: {
    title: "Services",
    intro: "Discover → Design (Figma) → Build → Launch & support.",
    items: [
      {
        icon: "Globe",
        title: "Website design & build",
        text: "From Figma design to a fast, live, mobile-friendly site.",
      },
      {
        icon: "PenTool",
        title: "UI/UX design",
        text: "App and website screens, prototypes and design systems in Figma.",
      },
      {
        icon: "Zap",
        title: "Website redesigns",
        text: "Modernise an existing site without losing what works.",
      },
      {
        icon: "Sparkles",
        title: "Graphic design",
        text: "Flyers, social media graphics and event materials.",
      },
    ],
  },

  testimonials: {
    title: "Client words",
    items: [
      {
        quote: "[Short quote from the W+Men Leading Change client]",
        name: "[Client name]",
        role: "W+Men Leading Change",
      },
    ],
  },

  faq: {
    title: "Questions",
    items: [
      {
        question: "Where are you based?",
        answer: "Lagos, Nigeria. I work remotely on West Africa Time.",
      },
      {
        question: "What do you build with?",
        answer: "I design in Figma and build with Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
      },
    ],
  },

  stats: {
    items: [
      { value: "1,000+", label: "AI evaluation & annotation tasks" },
      { value: "91%", label: "Quality score on Atlas Capture" },
      { value: "2:1", label: "B.Sc. Computer Science, FUTO" },
      { value: "2 yrs", label: "Training and evaluating AI" },
    ],
  },

  logos: {
    title: "Previously",
    items: [],
  },

  gallery: {
    title: "Graphic design",
    items: graphics,
  },

  cta: {
    title: "Let's build something considered.",
    text: "Get a quote on WhatsApp or send a message through the form.",
    button: { label: "Get a quote", href: "/contact" },
  },

  notFound: {
    title: "Page not found",
    text: "The page you're looking for has moved or no longer exists.",
    button: { label: "Back to home", href: "/" },
  },

  contact: {
    title: "Contact",
    intro: "Available for freelance & full-time roles.",
    email: "joshuaanderson2004oct@gmail.com",
    phone: "+234 906 167 4151",
    whatsapp: "+2349061674151",
    address: "Lagos, Nigeria · works remotely (West Africa Time)",
  },

  socials: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/joshua-anderson-773844288" },
  ],

  seo: {
    titleTemplate: "%s · Joshua Anderson",
    defaultTitle: "Joshua Anderson — UI/UX Designer & Front-End Developer",
    description:
      "Joshua Anderson is a UI/UX designer and front-end developer in Lagos who designs and builds bold, fast websites — from Figma to live.",
    ogImage: "/images/og.jpg",
    siteUrl: "http://localhost:3000", // [Set to the live domain once deployed]
    locale: "en_NG",
  },
};
