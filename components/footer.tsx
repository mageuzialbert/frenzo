import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Star } from "lucide-react";
import { CONTACT, BRAND } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-15 blur-3xl"
      />
      <div className="container relative grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-display text-3xl tracking-tight">Frenzo</span>
            <span className="size-2.5 rounded-full bg-magenta" aria-hidden />
          </Link>
          <p className="mt-4 max-w-md text-pretty text-base text-paper/70">
            {BRAND.promise}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-paper/10">
            {/* TODO(client): replace with a verified Place ID once Google Business is set up */}
            <iframe
              title="Frenzo Printing Solutions location map"
              src={CONTACT.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-48 w-full grayscale-[30%] contrast-[0.9]"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-eyebrow uppercase text-paper/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Phone className="size-4 text-magenta" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Mail className="size-4 text-magenta" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-paper/85">
              <MapPin className="mt-0.5 size-4 text-magenta" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-eyebrow uppercase text-paper/50">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <Link href="/#services" className="hover:text-paper">
                Business
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-paper">
                NGO &amp; Co-operates
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-paper">
                Process
              </Link>
            </li>
            <li>
              <Link href="/#work" className="hover:text-paper">
                Work
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-eyebrow uppercase text-paper/50">Social</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Instagram className="size-4 text-magenta" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={CONTACT.google}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Star className="size-4 text-magenta" /> Google Business
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs text-paper/55 md:flex-row md:items-center">
          <p>© 2026 Frenzo Printing Solutions. Dar es Salaam, Tanzania.</p>
          <p>
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
