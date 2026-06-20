import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Mail, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/Button";
import { Disclosure } from "@/components/Disclosure";
import { EmailSignup } from "@/components/EmailSignup";
import { ProductBottle } from "@/components/ProductBottle";
import { Section } from "@/components/Section";
import {
  benefits,
  faqs,
  fdaDisclaimer,
  ingredientDetails,
  ingredients,
  product,
  siteUrl
} from "@/lib/content";

export const metadata: Metadata = {
  title: "AirKind Quercetin Plus",
  description:
    "Meet AirKind Quercetin Plus, a daily supplement with quercetin, zinc, and bromelain to support immune function, healthy histamine response, and digestive enzyme activity.",
  alternates: {
    canonical: "/product"
  },
  openGraph: {
    title: "AirKind Quercetin Plus",
    description: "Daily Respiratory & Immune Support with quercetin, zinc, and bromelain.",
    url: `${siteUrl}/product`,
    images: ["/images/quercetin-plus-bottle-front.jpg"]
  }
};

export default function ProductPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: "AirKind"
    },
    description: product.description,
    image: [
      `${siteUrl}/images/quercetin-plus-bottle-front.jpg`,
      `${siteUrl}/images/quercetin-plus-bottle-lifestyle.jpg`,
      `${siteUrl}/images/quercetin-plus-label-full.jpg`
    ],
    category: "Dietary Supplement",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "USD",
      url: `${siteUrl}/product`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mobile-safe-column mx-auto grid max-w-[20rem] gap-4 sm:max-w-sm lg:max-w-none">
            <ProductBottle priority />
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  src: "/images/quercetin-plus-bottle-lifestyle.jpg",
                  alt: "AirKind Quercetin Plus lifestyle bottle render"
                },
                {
                  src: "/images/quercetin-plus-bottle-angle.jpg",
                  alt: "AirKind Quercetin Plus angled bottle render"
                },
                {
                  src: "/images/quercetin-plus-front-label.png",
                  alt: "AirKind Quercetin Plus front label artwork"
                }
              ].map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square overflow-hidden rounded-[8px] border border-air-green/10 bg-white"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 120px, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mobile-safe-column mx-auto max-w-[20rem] sm:max-w-none">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-air-gold">
              {product.tagline}
            </p>
            <h1 className="mt-4 max-w-full break-words font-serif text-4xl font-semibold leading-[1.02] text-air-green sm:text-6xl">
              <span className="block">AirKind</span>
              <span className="block">Quercetin Plus</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-air-charcoal/72">
              {product.description}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Supports immune function",
                "Supports healthy histamine response",
                "Supports digestive enzyme activity",
                "Quercetin + zinc + bromelain",
                "60 capsules",
                "30 day supply"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-air-green">
                  <CheckCircle2 className="h-4 w-4 text-air-gold" />
                  {benefit}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-air-green/10 bg-white/80 p-5">
              <p className="text-sm font-semibold text-air-green">
                Product details
              </p>
              <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                {product.count}. {product.supply}. {product.price}. Suggested use:
                {" "}
                {product.serving}
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
        eyebrow="Product Benefits"
        title="Support for everyday respiratory and immune wellness."
        copy="Every claim is framed as support for normal wellness functions and avoids diagnosis, treatment, cure, or prevention language."
        className="bg-white/48"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-[8px] border border-air-green/10 bg-air-white p-5"
              >
                <Icon className="h-5 w-5 text-air-gold" />
                <h2 className="mt-4 text-xl font-semibold text-air-green">
                  {benefit.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                  {benefit.copy}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Ingredients"
        title="Focused ingredients, clear supporting details."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => (
            <div key={ingredient} className="rounded-[8px] border border-air-green/10 bg-air-white p-4 text-sm font-semibold text-air-green">
              {ingredient}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Supplement Facts"
        title="Review the panel before you join the launch list."
        className="bg-white/48"
      >
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-[8px] border border-air-green/10 bg-white shadow-soft">
            <Image
              src="/images/quercetin-plus-supplement-facts.png"
              alt="Supplement Facts for AirKind Quercetin Plus"
              width={520}
              height={650}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-4">
            {ingredientDetails.slice(0, 3).map((ingredient) => (
              <article key={ingredient.name} className="rounded-[8px] border border-air-green/10 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
                  {ingredient.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-air-green">
                  {ingredient.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
                  {ingredient.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Usage"
        title="Simple once-daily directions."
        copy={product.serving}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {["Do not exceed the recommended dose.", "Keep out of reach of children.", "Store in a cool, dry place."].map((item) => (
            <div key={item} className="rounded-[8px] border border-air-green/10 bg-white/80 p-5 text-sm font-semibold text-air-green">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Availability"
        title="Retail launch and store locator."
        copy="AirKind Quercetin Plus is being prepared for retail availability. The store locator is reserved for approved retailers and online partners."
        className="bg-air-mist/45"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[8px] border border-air-green/10 bg-white p-6">
            <MapPin className="h-5 w-5 text-air-gold" />
            <h2 className="mt-4 text-xl font-semibold text-air-green">
              Store locator coming soon
            </h2>
            <p className="mt-2 text-sm leading-6 text-air-charcoal/70">
              Retail listings will appear here once distribution is active.
            </p>
          </div>
          <div className="rounded-[8px] border border-air-green/10 bg-white p-6">
            <Mail className="h-5 w-5 text-air-gold" />
            <h2 className="mt-4 text-xl font-semibold text-air-green">
              Get launch updates
            </h2>
            <div className="mt-4">
              <EmailSignup />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Product questions, answered clearly.">
        <div className="max-w-4xl">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} {...faq} />
          ))}
        </div>
      </Section>
    </>
  );
}
