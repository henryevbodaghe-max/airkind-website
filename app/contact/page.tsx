import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AirKind for launch updates, wholesale inquiries, and brand questions."
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Start a conversation with AirKind."
      copy="Use this placeholder contact form for launch access, wholesale interest, press, or general questions."
    >
      <form className="grid max-w-2xl gap-4 rounded-[8px] border border-air-green/10 bg-white/80 p-5 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-air-green">
            Name
            <input className="min-h-12 rounded-[8px] border border-air-green/15 bg-air-white px-4 outline-none focus:border-air-gold" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-air-green">
            Email
            <input type="email" className="min-h-12 rounded-[8px] border border-air-green/15 bg-air-white px-4 outline-none focus:border-air-gold" />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-air-green">
          Message
          <textarea rows={6} className="rounded-[8px] border border-air-green/15 bg-air-white px-4 py-3 outline-none focus:border-air-gold" />
        </label>
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-air-green px-5 text-sm font-semibold text-white transition hover:bg-air-charcoal sm:w-fit">
          <Mail className="h-4 w-4" />
          Send Message
        </button>
      </form>
    </Section>
  );
}
