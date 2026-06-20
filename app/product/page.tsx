import type { Metadata } from "next";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/Button";
import { ProductBottle } from "@/components/ProductBottle";
import { Section } from "@/components/Section";
import { fdaDisclaimer, ingredients } from "@/lib/content";

export const metadata: Metadata = {
  title: "AirKind Beauty & Longevity Complex",
  description:
    "Meet AirKind Beauty & Longevity Complex, a premium collagen and mushroom supplement concept for healthy skin, focus, immune health, energy, healthy aging, and joint comfort support."
};

export default function ProductPage() {
  return (
    <>
      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ProductBottle />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              Signature Complex
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-air-green sm:text-6xl">
              AirKind Beauty & Longevity Complex
            </h1>
            <p className="mt-5 text-lg leading-8 text-air-charcoal/72">
              A premium daily blend of collagen peptides, hyaluronic acid,
              beauty nutrients, and functional mushrooms designed to support
              healthy skin, focus, immune health, energy, healthy aging, and
              joint comfort.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Supports healthy skin",
                "Supports focus",
                "Supports immune health",
                "Supports energy",
                "Supports healthy aging",
                "Supports joint comfort"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-air-green">
                  <CheckCircle2 className="h-4 w-4 text-air-gold" />
                  {benefit}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-air-green/10 bg-white/80 p-5">
              <p className="text-sm font-semibold text-air-green">
                Placeholder product details
              </p>
              <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                30 daily servings. Suggested retail: $68. Subscribe and save
                concept: 15% off monthly delivery.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                <ShoppingBag className="h-4 w-4" />
                Join Launch List
              </Button>
              <Button href="/ingredients" variant="secondary">
                View Ingredients
              </Button>
            </div>
            <p className="mt-6 text-xs leading-6 text-air-charcoal/58">
              {fdaDisclaimer}
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Formula"
        title="What is inside the complex."
        copy="This placeholder product includes the full AirKind ingredient stack requested for collagen, beauty, mushroom, and micronutrient support."
        className="bg-white/48"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => (
            <div key={ingredient} className="rounded-[8px] border border-air-green/10 bg-air-white p-4 text-sm font-semibold text-air-green">
              {ingredient}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
