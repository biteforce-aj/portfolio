import { Icon } from "@/components/ui";
import { siteConfig } from "@/config/site.config";
import { whatsappLink } from "@/lib/utils";

type WhatsAppButtonProps = {
  /** International format; defaults to `contact.whatsapp`. Renders nothing when empty. */
  phone?: string;
  message?: string;
};

/** Floating chat link, bottom-right. */
export function WhatsAppButton({ phone = siteConfig.contact.whatsapp, message }: WhatsAppButtonProps) {
  if (!phone) return null;

  return (
    <a
      href={whatsappLink(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 motion-reduce:transition-none sm:right-6 sm:bottom-6"
    >
      <Icon name="MessageCircle" className="size-7" />
    </a>
  );
}
