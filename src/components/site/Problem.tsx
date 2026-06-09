import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { AlertTriangle, CloudRain, Wrench, Network } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Trechos não pavimentados",
    text: "Cerca de metade da extensão ainda carece de pavimentação contínua, comprometendo a previsibilidade do transporte.",
  },
  {
    icon: CloudRain,
    title: "Vulnerabilidade climática",
    text: "O período chuvoso amazônico interrompe operações, eleva custos de manutenção e amplia o tempo de entrega.",
  },
  {
    icon: Wrench,
    title: "Manutenção insuficiente",
    text: "Baixa capacidade de resposta do poder público às avarias estruturais resulta em buracos, atoleiros e bloqueios.",
  },
  {
    icon: Network,
    title: "Baixa multimodalidade",
    text: "Dependência quase exclusiva do modal rodoviário, com integração limitada a hidrovias e ferrovias regionais.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="Problema de pesquisa"
          title="Quais limites a infraestrutura da BR-230 impõe ao escoamento agropecuário do Norte?"
          description="A pesquisa investiga como gargalos estruturais, operacionais e ambientais da Transamazônica afetam a competitividade logística da produção agroindustrial regional."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.06 * i}>
              <div className="group h-full rounded-xl border border-border bg-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-elevated hover:border-gold/30">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/12 text-gold-foreground border border-gold/20">
                  <it.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-foreground leading-snug">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
