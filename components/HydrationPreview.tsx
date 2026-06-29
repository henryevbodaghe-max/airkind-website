import Image from "next/image";

export function HydrationPreview() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-air-mist">
      <Image
        src="/images/airkind-hydration-preview.png"
        alt="AirKind Hydration+ coming soon future daily electrolyte wellness product concept"
        width={1536}
        height={1024}
        sizes="(min-width: 1024px) 620px, 100vw"
        className="h-full min-h-[360px] w-full object-cover"
      />
    </div>
  );
}
