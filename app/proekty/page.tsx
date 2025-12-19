import Image from "next/image";
import Script from "next/script";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { gallery } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Проекты и портфолио",
  description:
    "Портфолио 1001 Мебель: кухни, шкафы-купе, гардеробные, гостиные и спальни. Более 300 реализованных проектов в Сочи.",
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Проекты", href: "/proekty/" },
  ];

  return (
    <Container className="space-y-12 pb-20 pt-10">
      <Script
        id="schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(breadcrumbs)]),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-graphite sm:text-5xl">
          Проекты и портфолио
        </h1>
        <p className="text-base text-slate/70">{gallery.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gallery.items.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={420}
              height={320}
              className="h-52 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <div className="text-base font-semibold">{item.title}</div>
              <div className="text-xs text-slate/60">{item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
