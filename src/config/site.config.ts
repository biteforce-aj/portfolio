// All business content lives here. Components read from `siteConfig` only.

export type Link = { label: string; href: string };
export type ImageRef = { src: string; alt: string; width: number; height: number };
export type SocialPlatform = "instagram" | "facebook" | "x" | "linkedin" | "youtube" | "tiktok";

export interface SiteConfig {
  brand: { name: string; tagline: string; logo: ImageRef; favicon: string };
  nav: { links: Link[]; cta: Link };
  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    primaryCta: Link;
    secondaryCta?: Link;
    image?: ImageRef;
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

export const siteConfig: SiteConfig = {
  brand: {
    name: "Joshua Anderson",
    tagline: "UI/UX Designer & Front-End Developer",
    logo: { src: "/images/logo.svg", alt: "Joshua Anderson", width: 40, height: 40 },
    favicon: "/favicon.ico",
  },

  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Let's talk", href: "#contact" },
  },

  hero: {
    eyebrow: "Available for freelance & full-time roles",
    title: "Joshua Anderson",
    subtitle:
      "I design and build bold, fast websites — from Figma to live. Backed by a Computer Science degree and two years of training AI.",
    primaryCta: { label: "Need a website?", href: "#services" },
    secondaryCta: { label: "Hiring? See my work", href: "#work" },
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
    items: [
      { src: "/images/gallery-1.webp", alt: "[Graphic design piece 1 — replace with export]", width: 1200, height: 900 },
      { src: "/images/gallery-2.webp", alt: "[Graphic design piece 2 — replace with export]", width: 1200, height: 900 },
      { src: "/images/gallery-3.webp", alt: "[Graphic design piece 3 — replace with export]", width: 1200, height: 900 },
    ],
  },

  cta: {
    title: "Let's build something considered.",
    text: "Get a quote on WhatsApp or send a message through the form.",
    button: { label: "Get a quote", href: "#contact" },
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
