import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Star } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function ContactCard() {
  return (
    <aside aria-labelledby="contact-info-heading" className="space-y-6">
      <h2 id="contact-info-heading" className="sr-only">
        Contact details
      </h2>

      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-paper">
        <div className="space-y-5 p-7">
          <Row icon={<Phone className="size-4" />} label="Phone">
            <a className="hover:text-white" href={`tel:${CONTACT.phoneRaw}`}>
              {CONTACT.phone}
            </a>
          </Row>
          <Row icon={<Mail className="size-4" />} label="Email">
            <a className="hover:text-white" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </Row>
          <Row icon={<MapPin className="size-4" />} label="Studio">
            {CONTACT.address}
          </Row>
          <Row icon={<Clock className="size-4" />} label="Open">
            {CONTACT.hours}
          </Row>
        </div>

        <div className="border-t border-paper/10 p-7">
          <Button asChild variant="primary" size="lg" className="w-full">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> WhatsApp the studio
            </a>
          </Button>
          <div className="mt-4 flex items-center gap-3 text-xs text-paper/60">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-paper"
            >
              <Instagram className="size-3.5" /> {CONTACT.instagramHandle}
            </a>
            <span aria-hidden>·</span>
            <a
              href={CONTACT.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-paper"
            >
              <Star className="size-3.5" /> Google Business
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-ink/10">
        <iframe
          title="Frenzo Printing Solutions location"
          src={CONTACT.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full"
        />
      </div>
    </aside>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-magenta/15 text-magenta">
        {icon}
      </div>
      <div>
        <p className="text-eyebrow uppercase text-paper/55">{label}</p>
        <p className="mt-1 text-sm text-paper/95">{children}</p>
      </div>
    </div>
  );
}
