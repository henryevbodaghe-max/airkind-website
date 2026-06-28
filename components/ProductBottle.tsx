import Image from "next/image";

export function ProductBottle({
  priority = false,
  className = ""
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-[4/5] w-full max-w-full overflow-hidden rounded-[8px] bg-air-white shadow-soft sm:max-w-sm ${className}`}
    >
      <Image
        src="/images/optimized/quercetin-plus-bottle-front-hero.webp"
        alt="AirKind Quercetin Plus bottle"
        fill
        priority={priority}
        sizes="(min-width: 1024px) 384px, 90vw"
        className="object-cover"
      />
    </div>
  );
}
