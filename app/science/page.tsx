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
            title: "Collagen cofactors",
            copy: "Collagen peptides pair with vitamin C and hyaluronic acid to support healthy skin and normal collagen formation."
          },
          {
            icon: ShieldCheck,
            title: "Mushroom wellness",
            copy: "Lion's mane, reishi, turkey tail, cordyceps, chaga, and maitake are positioned for focus, immune health, energy, and daily wellness support."
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
