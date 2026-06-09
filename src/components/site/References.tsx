import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { BookOpen } from "lucide-react";

const refs = [
  {
    org: "CNT",
    title: "Pesquisa CNT de Rodovias",
    desc: "Avaliação do estado geral das rodovias brasileiras e diagnóstico anual da infraestrutura rodoviária.",
  },
  {
    org: "EMBRAPA",
    title: "Logística no agronegócio amazônico",
    desc: "Estudos sobre escoamento, multimodalidade e desenvolvimento regional na Amazônia Legal.",
  },
  {
    org: "IPEA",
    title: "Infraestrutura de transportes e desenvolvimento",
    desc: "Análises econômicas sobre investimentos logísticos e seus impactos territoriais.",
  },
  {
    org: "DNIT",
    title: "Plano Nacional de Logística",
    desc: "Diretrizes federais para a expansão e manutenção da malha rodoviária federal.",
  },
  {
    org: "World Bank",
    title: "Logistics Performance Index",
    desc: "Indicadores internacionais de eficiência logística aplicados ao contexto brasileiro.",
  },
  {
    org: "Ballou, R. H.",
    title: "Gerenciamento da Cadeia de Suprimentos",
    desc: "Fundamentos teóricos de logística, SCM e estratégias de transporte multimodal.",
  },
];

export function References() {
  return (
    <section id="referencial" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="Referencial teórico"
          title="Base científica e institucional da pesquisa"
          description="O estudo articula contribuições da logística, geografia econômica e economia dos transportes, com dados oficiais de instituições brasileiras e internacionais."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {refs.map((r, i) => (
            <Reveal key={r.org} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-accent/40 hover:shadow-card transition-all">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
                    <BookOpen className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    {r.org}
                  </span>
                </div>
                <h3 className="mt-4 text-sm sm:text-base font-semibold text-foreground leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
