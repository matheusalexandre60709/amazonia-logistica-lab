import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
