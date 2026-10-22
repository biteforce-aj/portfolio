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
    name: "Fieldnote Studio",
    tagline: "Thoughtful websites for small businesses",
    logo: { src: "/images/logo.svg", alt: "Fieldnote Studio", width: 40, height: 40 },
    favicon: "/favicon.ico",
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Book a call", href: "#contact" },
  },

  hero: {
    eyebrow: "Design & development studio",
    title: "A website that works as hard as you do",
    subtitle:
      "We design and build fast, accessible websites that turn visitors into customers — without the agency overhead.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "See our work", href: "#work" },
    image: {
      src: "/images/hero.webp",
      alt: "Abstract composition of soft overlapping shapes",
      width: 1600,
      height: 1200,
    },
  },

  features: {
    title: "Everything you need to get online",
    intro: "One small team handles strategy, design, build and launch, so nothing gets lost between handoffs.",
    items: [
      { icon: "PenTool", title: "Brand-led design", text: "Layouts shaped around your brand, not a generic theme." },
      { icon: "Gauge", title: "Fast by default", text: "Lean pages that load quickly on any connection." },
      { icon: "Accessibility", title: "Accessible", text: "Readable, keyboard-friendly and built to WCAG AA." },
      { icon: "Search", title: "Search-ready", text: "Clean metadata, sitemaps and structure from day one." },
      { icon: "Smartphone", title: "Mobile-first", text: "Designed for the phone in your customer's hand." },
      { icon: "LifeBuoy", title: "Ongoing support", text: "Updates and fixes whenever you need them." },
    ],
  },

  testimonials: {
    title: "What clients say",
    items: [
      {
        quote: "Our enquiries doubled in the first month. The new site finally feels like us.",
        name: "Maya Okafor",
        role: "Owner, Okafor Bakery",
        avatar: { src: "/images/avatar-1.webp", alt: "Maya Okafor", width: 160, height: 160 },
      },
      {
        quote: "Clear process, honest pricing and a site we can update ourselves. Couldn't ask for more.",
        name: "Daniel Reyes",
        role: "Director, Reyes Physio",
        avatar: { src: "/images/avatar-2.webp", alt: "Daniel Reyes", width: 160, height: 160 },
      },
      {
        quote: "They understood what we needed after one call and delivered ahead of schedule.",
        name: "Priya Nair",
        role: "Founder, Lumen Yoga",
        avatar: { src: "/images/avatar-3.webp", alt: "Priya Nair", width: 160, height: 160 },
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "How long does a website take?",
        answer: "Most small business sites launch in three to five weeks, depending on content and scope.",
      },
      {
        question: "Can I edit the content myself?",
        answer: "Yes. We set things up so you can change text, images and contact details without a developer.",
      },
      {
        question: "Do you handle hosting and domains?",
        answer: "We deploy to fast global hosting and can connect your existing domain or help you register one.",
      },
      {
        question: "What does it cost?",
        answer: "Projects start from a fixed price agreed upfront. We'll give you a clear quote after a free call.",
      },
    ],
  },

  stats: {
    items: [
      { value: "120+", label: "Sites launched" },
      { value: "98", label: "Average Lighthouse score" },
      { value: "4 wks", label: "Typical turnaround" },
      { value: "5.0", label: "Client rating" },
    ],
  },

  logos: {
    title: "Trusted by local businesses",
    items: [
      { src: "/images/logo-1.svg", alt: "Orbit", width: 160, height: 48 },
      { src: "/images/logo-2.svg", alt: "Blockwork", width: 160, height: 48 },
      { src: "/images/logo-3.svg", alt: "Peak", width: 160, height: 48 },
      { src: "/images/logo-4.svg", alt: "Harbor", width: 160, height: 48 },
      { src: "/images/logo-5.svg", alt: "Twin", width: 160, height: 48 },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/gallery-1.webp", alt: "Project preview 1", width: 1200, height: 900 },
      { src: "/images/gallery-2.webp", alt: "Project preview 2", width: 1200, height: 900 },
      { src: "/images/gallery-3.webp", alt: "Project preview 3", width: 1200, height: 900 },
      { src: "/images/gallery-4.webp", alt: "Project preview 4", width: 1200, height: 900 },
      { src: "/images/gallery-5.webp", alt: "Project preview 5", width: 1200, height: 900 },
      { src: "/images/gallery-6.webp", alt: "Project preview 6", width: 1200, height: 900 },
    ],
  },

  cta: {
    title: "Ready for a better website?",
    text: "Tell us about your business and we'll reply within one working day.",
    button: { label: "Get in touch", href: "#contact" },
  },

  notFound: {
    title: "Page not found",
    text: "The page you're looking for has moved or no longer exists.",
    button: { label: "Back to home", href: "/" },
  },

  contact: {
    title: "Let's talk",
    intro: "Send a message and we'll reply within one working day.",
    email: "hello@example.com",
    phone: "+1 (555) 014-2233",
    whatsapp: "+15550142233",
    address: "123 Example Street, Springfield",
    hours: [
      { days: "Mon – Fri", time: "9:00 – 17:30" },
      { days: "Sat", time: "10:00 – 14:00" },
    ],
  },

  socials: [
    { platform: "instagram", url: "https://instagram.com/" },
    { platform: "linkedin", url: "https://linkedin.com/" },
    { platform: "x", url: "https://x.com/" },
  ],

  seo: {
    titleTemplate: "%s · Fieldnote Studio",
    defaultTitle: "Fieldnote Studio — Thoughtful websites for small businesses",
    description:
      "Fieldnote Studio designs and builds fast, accessible websites for small businesses.",
    ogImage: "/images/og.jpg",
    siteUrl: "https://site-starter-eta.vercel.app",
    locale: "en_US",
  },
};
