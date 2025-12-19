import Script from "next/script";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import { company } from "@/lib/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata = {
  title: "Контакты",
  description:
    "Контакты 1001 Мебель — телефон, WhatsApp и Telegram. Работаем в Сочи и по Краснодарскому краю.",
};

export default function ContactsPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Контакты", href: "/kontakty/" },
  ];

  return (
    <Container className="space-y-12 pb-20 pt-10">
      <Script
        id="schema-contacts"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema(breadcrumbs),
            localBusinessSchema,
          ]),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-graphite sm:text-5xl">
          Контакты
        </h1>
        <p className="text-base text-slate/70">
          Свяжитесь с нами удобным способом — ответим в течение 5 минут.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 rounded-3xl border border-line bg-white p-6 shadow-soft">
          <div>
            <div className="text-sm text-slate/60">Телефон</div>
            <a
              href={company.phoneHref}
              className="text-xl font-semibold text-graphite"
            >
              {company.phone}
            </a>
          </div>
          <div>
            <div className="text-sm text-slate/60">WhatsApp</div>
            <a href={company.whatsapp} className="text-accent">
              {company.whatsapp}
            </a>
          </div>
          <div>
            <div className="text-sm text-slate/60">Telegram</div>
            <a href={company.telegram} className="text-accent">
              {company.telegram}
            </a>
          </div>
          <div>
            <div className="text-sm text-slate/60">Регион</div>
            <div className="text-base">{company.region}</div>
          </div>
          <div className="rounded-3xl border border-line bg-sand px-4 py-5 text-sm text-slate/70">
            Работаем по договору. Подготовим проект, согласуем материалы и сроки,
            проведем замер на объекте.
          </div>
        </div>
        <LeadForm
          title="Оставить заявку"
          submitLabel="Получить консультацию"
          source="contacts"
        />
      </div>
    </Container>
  );
}
