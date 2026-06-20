import type { Metadata } from "next";
import { Microscope, Scale, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Science",
  description:
    "AirKind's science page explains ingredient logic, structure/function language, and the importance of supplement transparency."
};

export default function SciencePage() {
  return (
    <Section
      eyebrow="Science"
      title="Ingredient logic without inflated claims."
      copy="AirKind communicates through responsible structure/function language and keeps the focus on daily support, transparency, and consumer trust."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          {
            icon: Microscope,
            title: "Quercetin support",
            copy: "Quercetin is positioned to support a healthy histamine response and everyday seasonal wellness."
          },
          {
            icon: ShieldCheck,
            title: "Zinc and bromelain",
            copy: "Zinc supports normal immune function, while bromelain supports digestive enzyme activity and protein digestion."
          },
          {
            icon: Scale,
            title: "Responsible language",
            copy: "AirKind avoids medical claim language and focuses on supplement-appropriate benefit communication."
          }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="rounded-[8px] border border-air-green/10 bg-white/80 p-6">
              <Icon className="h-6 w-6 text-air-gold" />
              <h2 className="mt-4 text-xl font-semibold text-air-green">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-air-charcoal/70">
                {item.copy}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
