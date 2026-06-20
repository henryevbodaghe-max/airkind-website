import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { Section } from "@/components/Section";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common AirKind Quercetin Plus questions about benefits, supplement claims, usage, availability, and responsible use."
};

export default function FaqPage() {
  return (
    <Section
      eyebrow="FAQ"
      title="Frequently asked questions."
      copy="Simple answers about AirKind Quercetin Plus, daily use, availability, and supplement compliance."
    >
      <div className="max-w-4xl">
        {faqs.map((faq) => (
          <Disclosure key={faq.question} {...faq} />
        ))}
      </div>
    </Section>
  );
}
