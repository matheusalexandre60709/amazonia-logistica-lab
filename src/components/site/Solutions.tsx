import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { Hammer, Layers, Cpu, Leaf, HandCoins, Compass } from "lucide-react";

const solutions = [
  { icon: Hammer, title: "Pavimentação estratégica", text: "Concluir trechos críticos com priorização técnica e ambiental." },
  { icon: Layers, title: "Integração multimodal", text: "Conectar rodovia, hidrovias amazônicas e ferrovias planejadas." },
  { icon: Cpu, title: "Tecnologia & monitoramento", text: "SIG, telemetria e VRP para otimizar rotas e manutenção preditiva." },
  { icon: HandCoins, title: "PPPs estruturadas", text: "Modelos de Parceria Público-Privada com riscos bem distribuídos." },
  { icon: Leaf, title: "Planejamento sustentável", text: "Mitigação ambiental e respeito a comunidades locais." },
  { icon: Compass, title: "Visão sistêmica", text: "Governança regional integrada entre União, estados e municípios." },
];

export function Solutions() {
  return (
    <section id="solucoes" className="section-y bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Soluções propostas"
          title="Modernização logística com visão sistêmica e sustentável"
          description="A pesquisa propõe um conjunto integrado de ações que combinam infraestrutura física, tecnologia, governança e responsabilidade socioambiental."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-elevated hover:border-primary/25">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg gradient-forest text-primary-foreground shadow-sm">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold tabular-nums text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
