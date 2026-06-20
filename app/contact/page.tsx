import type { Metadata } from "next";
import { Mail, MapPin, Store } from "lucide-react";
import { EmailSignup } from "@/components/EmailSignup";
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
      copy="Use the contact form for launch access, wholesale interest, retail availability, press, or general questions."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <form className="grid gap-4 rounded-[8px] border border-air-green/10 bg-white/80 p-5 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-air-green">
              Name
              <input name="name" className="min-h-12 rounded-[8px] border border-air-green/15 bg-air-white px-4 outline-none focus:border-air-gold" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-air-green">
              Email
              <input name="email" type="email" className="min-h-12 rounded-[8px] border border-air-green/15 bg-air-white px-4 outline-none focus:border-air-gold" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-air-green">
            Inquiry type
            <select name="inquiry" className="min-h-12 rounded-[8px] border border-air-green/15 bg-air-white px-4 outline-none focus:border-air-gold">
              <option>Launch updates</option>
              <option>Wholesale / retail</option>
              <option>Store locator listing</option>
              <option>Press</option>
              <option>General question</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-air-green">
            Message
            <textarea name="message" rows={6} className="rounded-[8px] border border-air-green/15 bg-air-white px-4 py-3 outline-none focus:border-air-gold" />
          </label>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-air-green px-5 text-sm font-semibold text-white transition hover:bg-air-charcoal sm:w-fit">
            <Mail className="h-4 w-4" />
            Send Message
          </button>
        </form>

        <div className="grid gap-4">
          <div className="rounded-[8px] border border-air-green/10 bg-white/80 p-6">
            <Store className="h-5 w-5 text-air-gold" />
            <h2 className="mt-4 text-xl font-semibold text-air-green">
              Retail availability
            </h2>
            <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
              Online and retail availability will be announced as channels are
              approved. Retail partners can use the wholesale inquiry path.
            </p>
          </div>
          <div className="rounded-[8px] border border-air-green/10 bg-white/80 p-6">
            <MapPin className="h-5 w-5 text-air-gold" />
            <h2 className="mt-4 text-xl font-semibold text-air-green">
              Store locator placeholder
            </h2>
            <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
              Future verified retail locations will appear here when the store
              locator is connected.
            </p>
          </div>
          <div className="rounded-[8px] border border-air-green/10 bg-white/80 p-6">
            <h2 className="text-xl font-semibold text-air-green">
              Newsletter signup
            </h2>
            <div className="mt-4">
              <EmailSignup />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
