import Link from "next/link";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import { company, navigation } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/70">
      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sand-strong text-lg font-semibold text-accent">
                1001
              </span>
              <div>
                <div className="text-base font-semibold">1001 Мебель</div>
                <div className="text-sm text-slate/70">
                  Мебель на заказ и интерьеры под ключ
                </div>
              </div>
            </div>
            <p className="text-sm text-slate/70">
              Проектируем, производим и устанавливаем мебель на заказ в Сочи и
              Краснодарском крае. Работаем с частными и коммерческими проектами.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="text-base font-semibold">Навигация</div>
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-slate/70">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="text-base font-semibold">Контакты</div>
            <div className="flex flex-col gap-2 text-slate/70">
              <a href={company.phoneHref} className="text-base font-semibold">
                {company.phone}
              </a>
              <a href={company.whatsapp} className="hover:text-accent">
                WhatsApp
              </a>
              <a href={company.telegram} className="hover:text-accent">
                Telegram
              </a>
              <span>{company.region}</span>
            </div>
          </div>

          <div className="lg:pl-4">
            <LeadForm
              title="Оставить заявку"
              submitLabel="Получить консультацию"
              source="footer"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line/60 pt-6 text-xs text-slate/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} 1001 Мебель. Все права защищены.</span>
          <span>Работаем по договору. Гарантия 12 месяцев.</span>
        </div>
      </Container>
    </footer>
  );
}
