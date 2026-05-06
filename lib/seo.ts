import { BRAND, CONTACT } from "./content";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PrintShop",
    "@id": `${BRAND.url}#business`,
    name: BRAND.name,
    image: `${BRAND.url}/opengraph-image`,
    url: BRAND.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    description:
      "Print, brand and promotional partner in Dar es Salaam — business cards, packaging, signage, apparel, event branding for businesses and NGOs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Magomeni Mapipa",
      addressLocality: CONTACT.city,
      addressCountry: CONTACT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.lat,
      longitude: CONTACT.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [CONTACT.instagram, CONTACT.google],
    areaServed: {
      "@type": "City",
      name: CONTACT.city,
    },
  };
}

export function buildOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/icon.svg`,
    sameAs: [CONTACT.instagram, CONTACT.google],
  };
}
