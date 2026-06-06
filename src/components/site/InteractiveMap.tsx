import { Suspense, lazy, useEffect, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { MapPin, AlertTriangle, Wheat, Anchor, Layers } from "lucide-react";

const MapInner = lazy(() => import("./MapInner"));

const legend = [
  { icon: MapPin, color: "text-primary", label: "Traçado BR-230 (Lábrea → João Pessoa)" },
  { icon: AlertTriangle, color: "text-destructive", label: "Gargalos logísticos e trechos críticos" },
  { icon: Wheat, color: "text-gold", label: "Polos de produção agropecuária" },
  { icon: Anchor, color: "text-accent", label: "Portos do Arco Norte" },
  { icon: Layers, color: "text-muted-foreground", label: "Regiões mais afetadas (camada opcional)" },
];

export function InteractiveMap() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="mapa" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Mapa interativo"
          title="Geografia da BR-230 e regiões afetadas"
          description="Explore o traçado da Transamazônica, os principais gargalos de infraestrutura, os polos agropecuários atendidos e os portos do Arco Norte. Use o controle de camadas no canto superior direito para alternar a visualização."
        />

        <Reveal className="mt-10">
          <div className="relative h-[520px] md:h-[620px] w-full overflow-hidden rounded-2xl border border-border shadow-elevated bg-card">
            {mounted ? (
              <Suspense
                fallback={
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                    Carregando mapa…
                  </div>
                }
              >
                <MapInner />
              </Suspense>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                Carregando mapa…
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {legend.map(({ icon: Icon, color, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <Icon className={`h-5 w-5 mt-0.5 ${color}`} />
                <span className="text-sm text-foreground/85 leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Coordenadas aproximadas com fins ilustrativos acadêmicos. Camadas base © OpenStreetMap & CARTO.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
