import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import agro from "@/assets/agro.jpg";
import { Sprout, Tractor, Warehouse, Truck, Ship, Building2 } from "lucide-react";

const steps = [
  { icon: Sprout, title: "Produção rural", text: "Lavouras de soja, milho, gado e culturas regionais." },
  { icon: Tractor, title: "Colheita & beneficiamento", text: "Processamento primário em unidades locais." },
  { icon: Warehouse, title: "Armazenagem", text: "Silos e entrepostos próximos aos eixos rodoviários." },
  { icon: Truck, title: "Transporte rodoviário", text: "Escoamento pela BR-230 e rodovias estaduais." },
  { icon: Ship, title: "Terminais hidroviários", text: "Transbordo para portos do Arco Norte." },
  { icon: Building2, title: "Mercado / exportação", text: "Centros consumidores e portos internacionais." },
];

export function Flow() {
  return (
    <section id="fluxo" className="section-y relative overflow-hidden">
      <img
        src={agro}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/96 to-background" />

      <div className="container-x relative">
        <SectionTitle
          eyebrow="Fluxo logístico agroindustrial"
          title="Da lavoura ao porto: a cadeia de escoamento do Norte"
          description="Cada etapa depende de infraestrutura adequada — gargalos em qualquer ponto pressionam custos e prazos ao longo de toda a cadeia."
        />

        <div className="mt-10 sm:mt-12 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[4.5%] right-[4.5%] h-px bg-gradient-to-r from-primary/30 via-gold to-primary/30" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="relative h-full rounded-xl border border-border bg-card p-4 sm:p-5 shadow-card hover:shadow-elevated transition-all hover:-translate-y-0.5">
                  {/* Step number */}
                  <div className="absolute top-3 right-3 text-[10px] font-bold text-gold/60 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full gradient-forest text-primary-foreground mb-4">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{s.title}</h3>
                  <p className="mt-1.5 text-[0.7rem] sm:text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
