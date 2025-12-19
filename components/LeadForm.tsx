"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  title?: string;
  submitLabel?: string;
  source?: string;
};

export default function LeadForm({
  title = "Получить консультацию",
  submitLabel = "Отправить заявку",
  source = "site",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-card"
    >
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate/70">
        Ответим в течение 5 минут и согласуем удобное время замера.
      </p>
      <div className="mt-5 grid gap-3">
        <input
          required
          name="name"
          type="text"
          placeholder="Ваше имя"
          className="w-full rounded-2xl border border-line bg-sand px-4 py-3 text-sm"
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Телефон"
          className="w-full rounded-2xl border border-line bg-sand px-4 py-3 text-sm"
        />
        <input
          name="details"
          placeholder="Коротко о задаче"
          className="w-full rounded-2xl border border-line bg-sand px-4 py-3 text-sm"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 w-full rounded-full bg-graphite px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        {submitLabel}
      </button>
      <div className="mt-3 text-xs text-slate/60">
        {status === "success" && "Заявка отправлена. Мы свяжемся с вами."}
        {status === "error" &&
          "Не удалось отправить. Попробуйте позже или напишите в WhatsApp."}
        {status === "loading" && "Отправляем заявку..."}
      </div>
    </form>
  );
}
