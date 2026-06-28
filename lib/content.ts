import {
  Activity,
  Brain,
  CircleGauge,
  Leaf,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const siteUrl = "https://airkindwellness.com";

export const product = {
  name: "AirKind Quercetin Plus",
  shortName: "Quercetin Plus",
  tagline: "Daily Respiratory & Immune Support",
  description:
    "AirKind Quercetin Plus is a daily wellness supplement formulated with quercetin, zinc, and bromelain to support immune function, a healthy histamine response, and digestive enzyme activity.",
  serving: "Take two capsules once daily, preferably 20-30 minutes before a meal or as directed by your healthcare professional.",
  supply: "30 day supply",
  count: "60 capsules",
  price: "Retail availability coming soon"
};

export const benefits = [
  {
    title: "Immune Function",
    copy: "Zinc supports normal immune function and helps maintain the body's natural defenses.",
    icon: ShieldCheck
  },
  {
    title: "Healthy Histamine Response",
    copy: "Quercetin helps support a healthy histamine response as part of everyday seasonal wellness.",
    icon: Leaf
  },
  {
    title: "Respiratory Comfort",
    copy: "A focused daily formula designed to support respiratory comfort without disease claims.",
    icon: Activity
  },
  {
    title: "Digestive Enzyme Activity",
    copy: "Bromelain is a natural enzyme that supports protein digestion and nutrient absorption.",
    icon: CircleGauge
  },
  {
    title: "Simple Daily Ritual",
    copy: "Two capsules once daily, with a clean 30-day supply designed for consistent use.",
    icon: Sparkles
  },
  {
    title: "Clean Label Priorities",
    copy: "Free of the top 9 allergens and made without artificial colors, wheat, soy, or sesame.",
    icon: Brain
  }
];

export const ingredients = [
  "Quercetin",
  "Zinc",
  "Bromelain",
  "Vegetable capsule",
  "Silicon dioxide",
  "Vegetable stearate"
];

export const ingredientDetails = [
  {
    name: "Quercetin",
    category: "Plant Flavonoid",
    description:
      "A naturally occurring flavonoid selected to support a healthy histamine response and everyday seasonal wellness."
  },
  {
    name: "Zinc",
    category: "Essential Mineral",
    description:
      "An essential mineral that supports normal immune function and helps maintain everyday resilience."
  },
  {
    name: "Bromelain",
    category: "Enzyme Support",
    description:
      "A pineapple-derived enzyme included to support digestive enzyme activity and protein digestion."
  },
  {
    name: "Vegetable Capsule",
    category: "Capsule",
    description:
      "Hypromellose capsules provide a simple vegetarian delivery format."
  },
  {
    name: "Silicon Dioxide",
    category: "Other Ingredient",
    description:
      "Used in small amounts to support product consistency during manufacturing."
  },
  {
    name: "Vegetable Stearate",
    category: "Other Ingredient",
    description:
      "Used to support capsule production and ingredient flow."
  }
];

export const faqs = [
  {
    question: "What is AirKind Quercetin Plus?",
    answer:
      "AirKind Quercetin Plus is a daily wellness supplement with quercetin, zinc, and bromelain to support immune function, healthy histamine response, and digestive enzyme activity."
  },
  {
    question: "Does AirKind Quercetin Plus make disease claims?",
    answer:
      "No. AirKind uses structure/function language and avoids disease claims. The product is not intended to diagnose, treat, cure, or prevent any disease."
  },
  {
    question: "When should I take it?",
    answer:
      "Suggested use is two capsules once daily, preferably 20-30 minutes before a meal or as directed by your healthcare professional."
  },
  {
    question: "What are the active ingredients?",
    answer:
      "Each serving lists zinc, quercetin, and bromelain on the Supplement Facts panel. Always review the label before use."
  },
  {
    question: "Who should speak with a healthcare professional first?",
    answer:
      "Anyone pregnant, nursing, taking medication, managing a health condition, under 18, or planning a supplement routine for a child should consult a qualified healthcare professional before use."
  },
  {
    question: "Where can I buy AirKind Quercetin Plus?",
    answer:
      "Retail availability is coming soon. Join the AirKind list or contact the team for launch updates and wholesale inquiries."
  }
];

export const fdaDisclaimer =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";
