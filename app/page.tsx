import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import {
  about,
  company,
  faq,
  gallery,
  hero,
  process,
  reasons,
  reviews,
  reviewDisclaimer,
  services,
  stats,
} from "@/lib/content";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata = {
  title: "Мебель на заказ в Сочи и Краснодарском крае",
  description:
    "1001 Мебель — мебель на заказ и интерьеры под ключ в Сочи. Проект, производство и установка кухонь, шкафов-купе, гардеробных, спален и гостиных.",
};

export default function Home() {
  const breadcrumbs = [{ label: "Главная", href: "/" }];
  const reviewSchema = {
    "@context": "https://schema.org",
    "@graph": reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      itemReviewed: {
        "@type": "LocalBusiness",
        name: company.name,
        areaServed: company.region,
      },
    })),
  };

  return (
    <div className="space-y-20 pb-20 pt-10">
      <Script
        id="schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            organizationSchema,
            localBusinessSchema,
            breadcrumbSchema(breadcrumbs),
            faqSchema(faq),
            reviewSchema,
          ]),
        }}
      />

      <section className="relative overflow-hidden">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs text-slate/70 shadow-soft">
              Мебель на заказ · Сочи и Краснодарский край
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-graphite sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg text-slate/70">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakty/"
                className="rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href="/kontakty/"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-graphite transition hover:-translate-y-0.5 hover:border-accent"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-sm shadow-soft"
                >
                  <div className="text-lg font-semibold">{item.value}</div>
                  <div className="text-slate/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative space-y-6">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-warm/30 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-card">
              <Image
                src="/images/hero-interior.svg"
                alt="Современный интерьер кухни на заказ"
                width={640}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-6 hidden rounded-3xl border border-line bg-white/90 p-4 text-xs text-slate/70 shadow-soft md:block">
              Бесплатный замер и консультация
            </div>
            <div className="pt-4 lg:pt-8">
              <LeadForm
                title="Заявка на бесплатный замер"
                submitLabel="Получить замер"
                source="hero"
              />
            </div>
          </div>
        </Container>
      </section>

      <MotionSection>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-line bg-white p-8 shadow-card">
            <SectionTitle title={reasons.title} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="text-lg font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-slate/70">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              title="Услуги 1001 Мебель"
              subtitle="Проектируем, производим и устанавливаем мебель под ваши задачи."
            />
            <Link
              href="/uslugi/"
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-slate transition hover:border-accent"
            >
              Все услуги
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}/`}
                className="group rounded-3xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="text-lg font-semibold">{service.title}</div>
                <p className="mt-2 text-sm text-slate/70">{service.short}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <SectionTitle title={about.title} />
            {about.text.map((paragraph) => (
              <p key={paragraph} className="text-sm text-slate/70">
                {paragraph}
              </p>
            ))}
          </div>
          <LeadForm title="Бесплатный расчет проекта" submitLabel="Получить смету" />
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
        <Container className="space-y-8">
          <SectionTitle title={gallery.title} subtitle={gallery.subtitle} />
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
      </MotionSection>

      <MotionSection>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionTitle title="Частые вопросы" />
            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-3xl border border-line bg-white p-5 shadow-soft"
                >
                  <div className="text-base font-semibold">{item.question}</div>
                  <p className="mt-2 text-sm text-slate/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title="Нужна консультация?" submitLabel="Получить консультацию" />
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="space-y-8">
          <SectionTitle title="Отзывы клиентов" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={`${review.name}-${review.area}`}
                className="rounded-3xl border border-line bg-white p-5 text-sm shadow-soft"
              >
                <div className="text-base font-semibold">{review.name}</div>
                <div className="text-xs text-slate/60">{review.area}</div>
                <div className="mt-2 text-xs text-accent">{review.type}</div>
                <p className="mt-3 text-sm text-slate/70">{review.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate/60">{reviewDisclaimer}</p>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container className="grid gap-8 rounded-[32px] border border-line bg-white p-8 shadow-card md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <SectionTitle
              title="Обсудим ваш проект?"
              subtitle="Расскажите о задаче — подготовим решение и рассчитаем стоимость."
            />
            <div className="flex flex-wrap gap-3 text-sm text-slate/70">
              <span className="rounded-full border border-line px-4 py-2">
                Бесплатный замер
              </span>
              <span className="rounded-full border border-line px-4 py-2">
                Согласование материалов
              </span>
              <span className="rounded-full border border-line px-4 py-2">
                Договор и гарантия 12 месяцев
              </span>
            </div>
          </div>
          <LeadForm
            title="Оставить заявку"
            submitLabel="Получить консультацию"
            source="cta-home"
          />
        </Container>
      </MotionSection>
    </div>
  );
}
