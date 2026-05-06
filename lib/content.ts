/**
 * All editable content lives here.
 * Client tip: change copy, services, clients, or stats in this one file.
 */
import {
  Briefcase,
  CreditCard,
  PackageOpen,
  ShieldCheck,
  Receipt,
  Shirt,
  Sticker,
  Building2,
  Megaphone,
  FileText,
  Box,
  PartyPopper,
  Flag,
  Phone,
  Mail,
  MapPin,
  Instagram,
  type LucideIcon,
} from "lucide-react";

export const BRAND = {
  name: "Frenzo Printing Solutions",
  short: "Frenzo",
  tagline: "Print · Brand · Promote",
  promise:
    "We turn ideas into things people hold, wear, and remember.",
  domain: "frenzo.co.tz",
  url: "https://frenzo.co.tz",
};

export const CONTACT = {
  phone: "+255 759 561 311",
  phoneRaw: "+255759561311",
  whatsapp: "https://wa.me/255759561311",
  email: "info@frenzo.co.tz",
  address: "Magomeni Mapipa, Dar es Salaam, Tanzania",
  city: "Dar es Salaam",
  country: "Tanzania",
  hours: "Mon–Sat · 9:00–18:00",
  geo: { lat: -6.7945, lng: 39.2549 }, // Approximate Magomeni Mapipa coords
  instagram: "https://www.instagram.com/frenzo_printing/",
  instagramHandle: "@frenzo_printing",
  google:
    "https://www.google.com/search?q=Frenzo+Printing+Solutions+Dar+es+Salaam",
  mapEmbed:
    "https://www.google.com/maps?q=Magomeni+Mapipa,+Dar+es+Salaam,+Tanzania&output=embed",
};

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export const CLIENTS: string[] = [
  "Unitech",
  "PAT",
  "Temeke RRH",
  "Multifursa",
  "LV Pixels",
  "Allura",
  "Rey Collection",
  "Climate Action Network Tanzania",
  "Ubuntu Afya Link",
  "Tanzania Health Summit",
  "MSF",
  "Thamini Uhai Organization",
  "Afya RX",
  "Saida",
  "BBoy Clothing",
];

export type ServiceTile = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  badge?: string;
  span?: "md" | "lg" | "wide" | "tall";
  // TODO(client): swap to your real product photos
  image?: string;
};

export const SERVICES_BUSINESS: ServiceTile[] = [
  {
    title: "Business cards",
    blurb: "Premium stocks, foiling, soft-touch lamination.",
    icon: CreditCard,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Packing bags",
    blurb: "Branded non-woven & paper bags that retail crowds notice.",
    icon: PackageOpen,
    badge: "Most popular",
    span: "wide",
    image: "/photos/pioneers-bag.jpg",
  },
  {
    title: "Warrant cards",
    blurb: "Tamper-evident IDs & lanyards for staff and inspection teams.",
    icon: ShieldCheck,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1564846824194-346b7871b855?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Receipt books",
    blurb: "Numbered, carbonless, in your brand. TRA-ready.",
    icon: Receipt,
    span: "md",
    image: "/photos/universelaptop-receipt.jpg",
  },
  {
    title: "Apparel & merch",
    blurb: "T-shirts, polos, hoodies, mugs — DTF, screen print & embroidery.",
    icon: Shirt,
    span: "tall",
    image: "/photos/ubuntu-tee.jpg",
  },
  {
    title: "Stickers & labels",
    blurb: "Vinyl, holographic, kiss-cut + laser-engraved gifts.",
    icon: Sticker,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=70",
  },
];

export const SERVICES_NGO: ServiceTile[] = [
  {
    title: "Office branding",
    blurb: "Wall graphics, door signs, reception walls.",
    icon: Building2,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Advertising materials",
    blurb: "Field-ready collateral for outreach & campaigns.",
    icon: Megaphone,
    span: "wide",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Flyers & brochures",
    blurb: "Tri-folds, booklets, donor reports — A6 to A3.",
    icon: FileText,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "3D signs",
    blurb: "Acrylic & metal letters, illuminated options.",
    icon: Box,
    span: "tall",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Event branding",
    blurb: "Backdrops, photo frames, lanyards, name tags & stage signage.",
    icon: PartyPopper,
    span: "md",
    image: "/photos/ths-booth.jpg",
  },
  {
    title: "Banners & roll-ups",
    blurb: "Mesh, vinyl, fabric — pickup in 24–48 hrs.",
    icon: Flag,
    span: "md",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=900&q=70",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Brief",
    body: "Tell us what you need — quantities, deadlines, vibes. Send a sketch or just an idea.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=70",
  },
  {
    n: "02",
    title: "Design",
    body: "We mock it up and iterate. Two free revisions on every job — no surprises.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    n: "03",
    title: "Print",
    body: "In-house production: DTF, screen print, embroidery, laser engraving and full-colour press. Colour-checked before it leaves us.",
    image: "/photos/jm-sellers-bag.jpg",
  },
  {
    n: "04",
    title: "Deliver",
    body: "Pickup in Magomeni or door delivery across Dar es Salaam. Rush available.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=70",
  },
];

export const WORK = [
  {
    title: "Climate Action Network Tanzania",
    subtitle: "Conference branding & signage",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1600&q=75",
    tags: ["Event branding", "Signage", "Print collateral"],
  },
  {
    title: "Tanzania Health Summit · 12th edition",
    subtitle: "Booth, photo frames & event branding",
    image: "/photos/ths-booth.jpg",
    tags: ["Booth setup", "Photo frames", "Event signage"],
  },
  {
    title: "BBoy Clothing",
    subtitle: "Apparel print run",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=75",
    tags: ["DTF print", "Hangtags", "Packaging"],
  },
];

export const STATS = [
  { value: 360, suffix: "+", label: "Invoices delivered" },
  { value: 30, suffix: "+", label: "Repeat clients" },
  { value: 6, suffix: " yrs", label: "In Dar es Salaam" },
  { value: 48, suffix: " hr", label: "Rush turnaround" },
];

export const TRUST = {
  google: "⭐ 3.5 on Google",
  instagram: "880+ followers on Instagram",
  customers: "Trusted by 30+ Tanzanian businesses & NGOs",
};

export const TESTIMONIAL = {
  quote:
    "Frenzo is our go-to for every event we run — fast, sharp, and they get the brief.",
  author: "Operations Lead",
  org: "Tanzania Health Summit",
};

export const PROJECT_TYPES = [
  "Business cards",
  "Packing bags",
  "Brochures & flyers",
  "Event branding",
  "NGO campaign",
  "Apparel & merch",
  "Signage",
  "Other",
];

export const ICONS = { Phone, Mail, MapPin, Instagram, Briefcase };
