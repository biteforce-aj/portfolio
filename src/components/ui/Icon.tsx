import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Gauge,
  Globe,
  Heart,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Moon,
  PenTool,
  Phone,
  Plus,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Users,
  X,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/** Icons available by name from site.config. Add lucide icons here as templates need them. */
const registry = {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Gauge,
  Globe,
  Heart,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Moon,
  PenTool,
  Phone,
  Plus,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Users,
  X,
  Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

export const iconNames = Object.keys(registry) as IconName[];

type IconProps = LucideProps & {
  name: IconName | (string & {});
  /** Accessible name; omit for decorative icons. */
  label?: string;
};

export function Icon({ name, label, ...rest }: IconProps) {
  const Glyph: LucideIcon | undefined = registry[name as IconName];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Icon "${name}" is not in the registry (src/components/ui/Icon.tsx).`);
    }
    return null;
  }
  return label ? <Glyph role="img" aria-label={label} {...rest} /> : <Glyph aria-hidden="true" {...rest} />;
}
