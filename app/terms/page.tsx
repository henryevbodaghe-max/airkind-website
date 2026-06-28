import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "AirKind terms and conditions placeholder for a premium supplement brand website."
};

export default function TermsPage() {
  return (
    <Section
      eyebrow="Terms"
      title="Terms and conditions."
      copy="These placeholder terms should be reviewed and customized before public launch."
    >
      <div className="max-w-3xl space-y-7 text-sm leading-7 text-air-charcoal/72">
        {[
          {
            title: "Website use",
            copy: "By using this website, visitors agree to use it lawfully and only for personal, informational, or purchasing purposes."
          },
          {
            title: "Product information",
            copy: "Product descriptions are provided for wellness education and may change as formulas, packaging, or availability evolve."
          },
          {
            title: "Purchases and subscriptions",
            copy: "Pricing, subscription terms, shipping, returns, and promotions should be clearly disclosed at checkout when commerce is enabled."
          },
          {
            title: "Limitation of liability",
            copy: "AirKind is not responsible for indirect or incidental damages related to website use to the fullest extent permitted by law."
          }
        ].map((item) => (
          <article key={item.title}>
            <h2 className="text-xl font-semibold text-air-green">{item.title}</h2>
            <p className="mt-2">{item.copy}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
