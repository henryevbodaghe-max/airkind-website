import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "bg-air-green text-white shadow-soft hover:bg-air-charcoal focus-visible:outline-air-gold",
    secondary:
      "border border-air-green/20 bg-white/70 text-air-green hover:border-air-gold hover:bg-white focus-visible:outline-air-gold",
    ghost:
      "text-air-green hover:bg-air-cream/50 focus-visible:outline-air-gold"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
