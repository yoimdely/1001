import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { company } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://1001мебель.рф"),
  title: {
    default: "1001 Мебель — мебель на заказ в Сочи и Краснодарском крае",
    template: "%s — 1001 Мебель",
  },
  description:
    "Мебель на заказ и интерьеры под ключ в Сочи: кухни, шкафы-купе, гардеробные, спальни, гостиные, прихожие. Проект, производство и монтаж с гарантией 12 месяцев.",
  applicationName: "1001 Мебель",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://1001мебель.рф",
    siteName: "1001 Мебель",
    title: "1001 Мебель — мебель на заказ в Сочи",
    description:
      "Проектирование, производство и установка мебели на заказ. Более 20 лет опыта, сотни проектов, гарантия 12 месяцев.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://1001мебель.рф",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "format-detection": "telephone=yes",
    "theme-color": "#f7f2ea",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${inter.variable} bg-sand text-slate-900 antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyActions phone={company.phoneHref} whatsapp={company.whatsapp} />
      </body>
    </html>
  );
}
