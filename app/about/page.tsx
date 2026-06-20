import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AirKind, the wellness brand behind Quercetin Plus and its retail-ready approach to clear supplement education."
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About AirKind"
        title="Daily wellness with clean claims and clear labels."
        copy="AirKind was created around a simple belief: supplement experiences should feel essential, understandable, and easy to trust before they reach the shelf."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[8px] border border-air-green/10 bg-white shadow-soft">
            <Image
              src="/images/quercetin-plus-bottle-lifestyle.jpg"
              alt="AirKind Quercetin Plus bottle on a light product set"
              width={1122}
              height={1402}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-5">
            <div className="rounded-[8px] bg-air-mist/55 p-8">
              <h2 className="font-serif text-3xl font-semibold text-air-green">
                Our point of view
              </h2>
              <p className="mt-4 text-sm leading-7 text-air-charcoal/72">
                Premium supplements should not depend on fear, confusion, or
                exaggerated promises. AirKind uses structure/function language,
                inspectable label information, and elevated product presentation
                for everyday respiratory and immune wellness support.
              </p>
            </div>
            <div className="rounded-[8px] bg-white/80 p-8">
              <h2 className="font-serif text-3xl font-semibold text-air-green">
                Built for retail trust
              </h2>
              <p className="mt-4 text-sm leading-7 text-air-charcoal/72">
                Quercetin Plus brings the brand into a customer-ready product
                experience with real bottle imagery, Supplement Facts access,
                usage guidance, availability messaging, and clear next steps for
                customers and retail partners.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button href="/product">Meet Quercetin Plus</Button>
        </div>
      </Section>

      <Section
        eyebrow="Standards"
        title="What AirKind keeps consistent."
        className="bg-white/48"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            "Responsible structure/function claims",
            "Clear Supplement Facts and suggested use",
            "Retail and wholesale paths without overpromising"
          ].map((standard) => (
            <div key={standard} className="rounded-[8px] border border-air-green/10 bg-air-white p-5 text-sm font-semibold text-air-green">
              {standard}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
