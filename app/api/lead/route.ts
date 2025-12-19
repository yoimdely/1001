import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  details?: string;
  company?: string;
  source?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const message = [
    "Новая заявка с сайта 1001 Мебель",
    `Имя: ${payload.name ?? "-"}`,
    `Телефон: ${payload.phone ?? "-"}`,
    `Комментарий: ${payload.details ?? "-"}`,
    `Источник: ${payload.source ?? "site"}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
