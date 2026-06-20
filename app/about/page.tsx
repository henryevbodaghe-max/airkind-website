import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AirKind, a premium wellness brand building collagen and mushroom supplements around daily consistency, trust, and clean communication."
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About AirKind"
        title="Wellness made quiet, elevated, and consistent."
        copy="AirKind was created around a simple belief: the best wellness ritual should feel essential, understandable, and easy to return to every day."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[8px] bg-air-mist/55 p-8">
            <h2 className="font-serif text-3xl font-semibold text-air-green">
              Our point of view
            </h2>
            <p className="mt-4 text-sm leading-7 text-air-charcoal/72">
              Premium supplements should not depend on fear, confusion, or
              exaggerated promises. AirKind uses clean structure/function
              language, clear ingredient education, and a refined product
              experience for daily beauty and wellness support.
            </p>
          </div>
          <div className="rounded-[8px] bg-white/80 p-8">
            <h2 className="font-serif text-3xl font-semibold text-air-green">
              Built for modern routines
            </h2>
            <p className="mt-4 text-sm leading-7 text-air-charcoal/72">
              The brand focuses on collagen, beauty nutrients, and functional
              mushrooms that support healthy skin, focus, immune health, energy,
              healthy aging, and joint comfort as part of a daily ritual.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Button href="/product">Meet the Complex</Button>
        </div>
      </Section>
    </>
  );
}
