import Script from "next/script";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { about, process, reasons, stats } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "О компании",
  description:
    "1001 Мебель — более 20 лет опыта в мебели на заказ в Сочи. Проектирование, производство и монтаж с гарантией 12 месяцев.",
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: "/o-kompanii/" },
  ];

  return (
    <div className="space-y-16 pb-20 pt-10">
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(breadcrumbs)]),
        }}
      />
      <Container className="space-y-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-4xl font-semibold text-graphite sm:text-5xl">
          {about.title}
        </h1>
        {about.text.map((paragraph) => (
          <p key={paragraph} className="text-sm text-slate/70">
            {paragraph}
          </p>
        ))}
      </Container>

      <MotionSection>
        <Container className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-line bg-white p-6 text-sm shadow-soft"
            >
              <div className="text-2xl font-semibold">{item.value}</div>
              <div className="text-slate/70">{item.label}</div>
            </div>
          ))}
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-line bg-white p-6 shadow-soft"
            >
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="mt-2 text-sm text-slate/70">{item.text}</p>
            </div>
          ))}
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="space-y-8">
          <SectionTitle title={process.title} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-soft"
              >
                <div className="text-xs text-slate/60">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-lg font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-slate/70">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="grid gap-8 rounded-[32px] border border-line bg-white p-8 shadow-card md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <SectionTitle
              title="Хотите обсудить проект?"
              subtitle="Оставьте заявку — подготовим решение и расчет."
            />
          </div>
          <LeadForm
            title="Запросить консультацию"
            submitLabel="Связаться со мной"
            source="about-cta"
          />
        </Container>
      </MotionSection>
    </div>
  );
}
