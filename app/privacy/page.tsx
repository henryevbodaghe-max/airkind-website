import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AirKind privacy policy placeholder for a premium supplement brand website."
};

export default function PrivacyPage() {
  return (
    <Section
      eyebrow="Privacy Policy"
      title="How AirKind handles information."
      copy="This placeholder policy should be customized with counsel before launch."
    >
      <div className="max-w-3xl space-y-7 text-sm leading-7 text-air-charcoal/72">
        {[
          {
            title: "Information we collect",
            copy: "We may collect contact information, order details, subscription preferences, and website usage data when visitors interact with AirKind."
          },
          {
            title: "How we use information",
            copy: "We use information to provide products, process requests, send updates, improve the website, and communicate about AirKind."
          },
          {
            title: "Sharing",
            copy: "We may share information with service providers that support website hosting, email, analytics, payments, shipping, or customer service."
          },
          {
            title: "Choices",
            copy: "Visitors may unsubscribe from marketing emails and request updates to personal information where applicable."
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
