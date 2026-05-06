import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LazyMotionProvider } from "@/components/motion/lazy-motion-provider";
import { PageTransition } from "@/components/page-transition";
import { CustomCursor } from "@/components/custom-cursor";
import { BRAND, CONTACT } from "@/lib/content";
import { buildLocalBusinessSchema, buildOrgSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s — ${BRAND.name}`,
  },
  description:
    "Dar es Salaam's print partner for ambitious businesses and mission-driven NGOs. Business cards, packaging, signage, apparel and event branding — produced in-house in Magomeni Mapipa.",
  keywords: [
    "printing Dar es Salaam",
    "Tanzania print shop",
    "business cards Dar",
    "NGO branding Tanzania",
    "event branding Dar es Salaam",
    "Frenzo Printing",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Print, brand and promote — for businesses and NGOs in Dar es Salaam.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description:
      "Print, brand and promote — for businesses and NGOs in Dar es Salaam.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = buildLocalBusinessSchema();
  const org = buildOrgSchema();

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <LazyMotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <CustomCursor />
          <Nav />
          <main id="main" className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LazyMotionProvider>

        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          // Static JSON; no user data — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
      </body>
    </html>
  );
}
