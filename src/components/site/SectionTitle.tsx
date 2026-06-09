interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({ eyebrow, title, description, centered }: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-[clamp(0.875rem,1.5vw,1rem)] text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
