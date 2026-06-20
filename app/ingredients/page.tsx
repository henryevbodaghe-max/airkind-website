import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ingredientDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ingredients",
  description:
    "Explore the AirKind ingredient stack, including collagen peptides, hyaluronic acid, vitamin C, biotin, zinc, functional mushrooms, and vitamin D3."
};

export default function IngredientsPage() {
  return (
    <Section
      eyebrow="Ingredients"
      title="A complete wellness stack, explained simply."
      copy="Each ingredient is framed by its intended structure/function role and selected to support a refined daily wellness ritual."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ingredientDetails.map((ingredient) => (
          <article key={ingredient.name} className="rounded-[8px] border border-air-green/10 bg-white/78 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
              {ingredient.category}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-air-green">
              {ingredient.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-air-charcoal/70">
              {ingredient.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
