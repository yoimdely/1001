import Link from "next/link";
import Script from "next/script";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { company, process, services } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

type ServicePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} в Сочи` : "Услуга",
    description: service
      ? `${service.title} на заказ в Сочи и Краснодарском крае. ${service.description}`
      : "Мебель на заказ и интерьеры под ключ в Сочи.",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <Container className="py-20">
        <SectionTitle title="Услуга не найдена" />
        <Link href="/uslugi/" className="text-accent">
          Вернуться к услугам
        </Link>
      </Container>
    );
  }

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/uslugi/" },
    { label: service.title, href: `/uslugi/${service.slug}/` },
  ];

  return (
    <div className="space-y-16 pb-20 pt-10">
      <Script
        id={`schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(breadcrumbs)]),
        }}
      />

      <Container className="space-y-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-4xl font-semibold text-graphite sm:text-5xl">
          {service.title} в Сочи
        </h1>
        <p className="text-lg text-slate/70">{service.short}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-line bg-white px-4 py-2">
            Проектирование
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-2">
            Производство
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-2">
            Монтаж
          </span>
          <span className="rounded-full border border-line bg-white px-4 py-2">
            Гарантия 12 месяцев
          </span>
        </div>
      </Container>

      <MotionSection>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <SectionTitle title={`О услуге: ${service.title}`} />
            <p className="text-sm text-slate/70">{service.description}</p>
            <ul className="grid gap-3 text-sm text-slate/70">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-line bg-white px-4 py-3"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate/70">
              Работаем в {company.region}. Помогаем с подбором материалов и
              фурнитуры, согласуем проект и сроки, ведем полный контроль качества.
            </p>
          </div>
          <LeadForm title="Получить расчет по услуге" submitLabel="Получить расчет" source={service.slug} />
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="space-y-8">
          <SectionTitle title="Как мы работаем" />
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
              title="Готовы обсудить детали?"
              subtitle="Ответим на вопросы, подготовим расчет и согласуем замер."
            />
            <p className="text-sm text-slate/70">
              Звоните по телефону или оставьте заявку — свяжемся в течение 5 минут.
            </p>
          </div>
          <LeadForm
            title="Заявка на консультацию"
            submitLabel="Получить консультацию"
            source={`${service.slug}-cta`}
          />
        </Container>
      </MotionSection>
    </div>
  );
}
