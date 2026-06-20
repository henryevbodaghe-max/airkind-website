type SectionProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  copy,
  children,
  className = ""
}: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-air-gold">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl font-semibold leading-tight text-air-green sm:text-5xl">
            {title}
          </h2>
          {copy ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-air-charcoal/72 sm:text-lg">
              {copy}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
