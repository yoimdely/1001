import Link from "next/link";
import Script from "next/script";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Услуги мебели на заказ",
  description:
    "Кухни, шкафы-купе, гардеробные, прихожие, спальни и гостиные на заказ в Сочи. Проектирование, производство и установка.",
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/uslugi/" },
  ];

  return (
    <Container className="space-y-12 pb-20 pt-10">
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(breadcrumbs)]),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-graphite sm:text-5xl">
          Услуги 1001 Мебель
        </h1>
        <p className="text-base text-slate/70">
          Полный цикл — от дизайн-проекта до установки мебели.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/uslugi/${service.slug}/`}
            className="rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1"
          >
            <div className="text-lg font-semibold">{service.title}</div>
            <p className="mt-2 text-sm text-slate/70">{service.short}</p>
            <p className="mt-4 text-sm text-slate/60">{service.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-accent">
              Перейти →
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
