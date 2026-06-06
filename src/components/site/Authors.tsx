import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";

const authors = [
  "André Luiz da Silva Lima",
  "Ariane Guerra Garcia",
  "Matheus Alexandre Ramos da Silva",
  "Tacio Lemos Barbosa",
];

export function Authors() {
  return (
    <section id="autores" className="section-y bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Autores"
          title="Pesquisa desenvolvida no curso Técnico em Logística"
          description="Trabalho de Conclusão de Curso apresentado à Etec Maria Cristina Medeiros, Ribeirão Pires – SP."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {authors.map((name, i) => (
            <Reveal key={name} delay={i * 0.07}>
              <div className="h-full rounded-xl border border-border bg-card p-6 text-center hover:shadow-elevated transition">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-forest text-primary-foreground">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Técnico em Logística</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-10">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-6 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Orientação
            </div>
            <div className="mt-1 text-lg font-semibold text-foreground">
              Prof. Douglas Leonardo de Lima
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Centro Estadual de Educação Tecnológica Paula Souza · Etec Maria Cristina Medeiros · 2026
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
