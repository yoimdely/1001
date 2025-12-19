"use client";

type StickyActionsProps = {
  phone: string;
  whatsapp: string;
};

export default function StickyActions({ phone, whatsapp }: StickyActionsProps) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 flex gap-3 sm:hidden">
      <a
        href={phone}
        className="flex-1 rounded-full bg-graphite px-4 py-3 text-center text-sm font-semibold text-white shadow-soft"
      >
        Позвонить
      </a>
      <a
        href={whatsapp}
        className="flex-1 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-graphite shadow-soft"
      >
        WhatsApp
      </a>
    </div>
  );
}
