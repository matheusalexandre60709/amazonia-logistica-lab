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
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="lazy"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="Fluxo logístico agroindustrial"
          title="Da lavoura ao porto: a cadeia de escoamento do Norte"
          description="Cada etapa depende de infraestrutura adequada — gargalos em qualquer ponto pressionam custos e prazos ao longo de toda a cadeia."
        />
        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-primary via-gold to-primary" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-elevated transition">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full gradient-forest text-primary-foreground mb-4">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gold-foreground/70">
                    Etapa {i + 1}
                  </div>
                  <h3 className="mt-1 font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
