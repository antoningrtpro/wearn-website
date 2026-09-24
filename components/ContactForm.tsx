"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-ink-3";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: data.get("company")?.toString().trim(),
      contactName: data.get("contactName")?.toString().trim(),
      email: data.get("email")?.toString().trim(),
      phone: data.get("phone")?.toString().trim(),
      message: data.get("message")?.toString().trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-10">
        <h3 className="text-xl font-semibold text-ink">Votre demande a bien été envoyée</h3>
        <p className="mt-2 text-base text-ink-2">
          Notre équipe revient vers vous très vite pour lancer votre campagne.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
          Entreprise
        </label>
        <input id="company" name="company" type="text" required className={inputClasses} placeholder="Nom de votre marque" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="contactName" className="mb-1.5 block text-sm font-medium text-ink">
          Nom du contact
        </label>
        <input id="contactName" name="contactName" type="text" required className={inputClasses} placeholder="Prénom et nom" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email professionnel
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} placeholder="vous@entreprise.fr" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
          Téléphone <span className="text-ink-3">(facultatif)</span>
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="06 00 00 00 00" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Décrivez votre marque, vos objectifs et l'événement visé si vous en avez un en tête."
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-warning">
          Une erreur est survenue. Vous pouvez réessayer ou nous écrire directement à antonin@wearn.fr.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-6 text-base font-medium text-white transition-colors hover:bg-ink-2 disabled:opacity-60"
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
