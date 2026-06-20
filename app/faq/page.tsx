import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { Section } from "@/components/Section";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common AirKind questions about benefits, supplement claims, subscriptions, and responsible use."
};

export default function FaqPage() {
  return (
    <Section
      eyebrow="FAQ"
      title="Frequently asked questions."
      copy="Simple answers about the AirKind product concept, daily use, and supplement compliance."
    >
      <div className="max-w-4xl">
        {faqs.map((faq) => (
          <Disclosure key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
