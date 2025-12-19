import { company } from "@/lib/content";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: `https://${company.domain}`,
  potentialAction: {
    "@type": "SearchAction",
    target: `https://${company.domain}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: `https://${company.domain}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: ["Russian"],
    },
  ],
  sameAs: [company.whatsapp, company.telegram],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: `https://${company.domain}`,
  telephone: company.phone,
  areaServed: ["Сочи", "Краснодарский край"],
  description: company.tagline,
  sameAs: [company.whatsapp, company.telegram],
};

export const breadcrumbSchema = (items: { label: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `https://${company.domain}${item.href}`,
  })),
});

export const faqSchema = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
